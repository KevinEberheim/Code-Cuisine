import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Logo } from '../../components/logo/logo';
import { UnitSelect } from '../../components/unit-select/unit-select';
import { HAS_LETTER, INVALID_NAME_CHARS, Ingredient, Unit } from '../../models/ingredient';
import { AmountLabelPipe } from '../../pipes/amount-label-pipe';
import { IngredientList } from '../../services/ingredient-list';
import { IngredientSuggestions } from '../../services/ingredient-suggestions';

/** Page to collect the ingredients the user has at home. */
@Component({
  selector: 'app-generate-recipe',
  imports: [FormsModule, RouterLink, Logo, UnitSelect, AmountLabelPipe],
  templateUrl: './generate-recipe.html',
  styleUrl: './generate-recipe.scss',
})
export class GenerateRecipe {
  private readonly list = inject(IngredientList);
  private readonly suggestionService = inject(IngredientSuggestions);
  readonly items = this.list.items;

  readonly name = signal('');
  readonly amount = signal<number | null>(null);
  readonly unit = signal<Unit>('gram');
  readonly suggestions = signal<string[]>([]);

  readonly editingName = signal<string | null>(null);
  readonly draftAmount = signal<number | null>(null);
  readonly draftUnit = signal<Unit>('gram');

  readonly canAdd = computed(() => {
    const name = this.name().trim();
    return (
      HAS_LETTER.test(name) && (this.amount() ?? 0) > 0 && !this.list.has(name)
    );
  });
  readonly canSave = computed(() => (this.draftAmount() ?? 0) > 0);

  /**
   * Removes digits and special characters, stores the name and refreshes the suggestions.
   * @param value Current text of the ingredient input.
   */
  onNameChange(value: string): void {
    const clean = value.replace(INVALID_NAME_CHARS, '');
    this.name.set(clean);
    this.loadSuggestions(clean);
  }

  /**
   * Loads autocomplete suggestions for a search term.
   * @param term The text typed by the user.
   */
  async loadSuggestions(term: string): Promise<void> {
    const query = term.trim();
    const result = query.length < 2 ? [] : await this.suggestionService.search(query);
    this.suggestions.set(result);
  }

  /**
   * Takes over a suggestion as ingredient name.
   * @param suggestion The chosen suggestion.
   */
  pickSuggestion(suggestion: string): void {
    this.name.set(suggestion);
    this.suggestions.set([]);
  }

  /** Adds the entered ingredient to the list and resets the form. */
  add(): void {
    if (!this.canAdd()) return;
    this.list.add({
      name: this.name().trim(),
      amount: this.amount() ?? 0,
      unit: this.unit(),
    });
    this.name.set('');
    this.amount.set(null);
    this.suggestions.set([]);
  }

  /**
   * Removes an ingredient and leaves edit mode if it was being edited.
   * @param name Name of the ingredient to remove.
   */
  remove(name: string): void {
    this.list.remove(name);
    if (this.editingName() === name) this.editingName.set(null);
  }

  /**
   * Switches a list entry to edit mode.
   * @param item The ingredient to edit.
   */
  startEdit(item: Ingredient): void {
    this.editingName.set(item.name);
    this.draftAmount.set(item.amount);
    this.draftUnit.set(item.unit);
  }

  /** Saves the edited amount and unit and leaves edit mode. */
  saveEdit(): void {
    const name = this.editingName();
    if (!name || !this.canSave()) return;
    this.list.update(name, {
      amount: this.draftAmount() ?? 0,
      unit: this.draftUnit(),
    });
    this.editingName.set(null);
  }
}