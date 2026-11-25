import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../components/icon/icon';
import { Logo } from '../../components/logo/logo';
import { CUISINE_OPTIONS, Option, TIME_OPTIONS } from '../../models/recipe-options';
import { RecipePreferences } from '../../services/recipe-preferences';
import { RecipeResults } from '../../services/recipe-results';

/** Page showing the three generated recipe suggestions. */
@Component({
  selector: 'app-results',
  imports: [RouterLink, Logo, Icon],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
  private readonly prefs = inject(RecipePreferences);
  readonly recipes = inject(RecipeResults).recipes;

  /** Labels of the chosen cuisine and cooking time. */
  readonly chips = computed(() =>
    [
      this.labelOf(CUISINE_OPTIONS, this.prefs.cuisine()),
      this.labelOf(TIME_OPTIONS, this.prefs.time()),
    ].filter((label): label is string => !!label),
  );

  /**
   * Finds the display label of a selected option.
   * @param options All options of a group.
   * @param value The selected value or null.
   * @returns The label, or undefined if nothing is selected.
   */
  private labelOf<T extends string>(options: Option<T>[], value: T | null): string | undefined {
    return options.find((option) => option.value === value)?.label;
  }
}