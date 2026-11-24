import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChipGroup } from '../../components/chip-group/chip-group';
import { Logo } from '../../components/logo/logo';
import { Stepper } from '../../components/stepper/stepper';
import { CUISINE_OPTIONS, DIET_OPTIONS, TIME_OPTIONS } from '../../models/recipe-options';
import { RecipePreferences } from '../../services/recipe-preferences';

/** Page to choose portions, helpers, time, cuisine and diet. */
@Component({
  selector: 'app-preferences',
  imports: [RouterLink, Logo, Stepper, ChipGroup],
  templateUrl: './preferences.html',
  styleUrl: './preferences.scss',
})
export class Preferences {
  private readonly router = inject(Router);
  readonly prefs = inject(RecipePreferences);
  readonly timeOptions = TIME_OPTIONS;
  readonly cuisineOptions = CUISINE_OPTIONS;
  readonly dietOptions = DIET_OPTIONS;

  /** Continues to the loading page if all preferences are selected. */
  generate(): void {
    if (!this.prefs.isComplete()) return;
    this.router.navigateByUrl('/loading');
  }
}