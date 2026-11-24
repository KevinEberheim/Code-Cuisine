import { computed, Injectable, signal } from '@angular/core';
import { CookingTime, Cuisine, Diet } from '../models/recipe-options';

/** Holds the preferences chosen by the user, shared between pages. */
@Injectable({ providedIn: 'root' })
export class RecipePreferences {
  readonly portions = signal(2);
  readonly helpers = signal(1);
  readonly time = signal<CookingTime | null>(null);
  readonly cuisine = signal<Cuisine | null>(null);
  readonly diet = signal<Diet | null>(null);

  /** True once time, cuisine and diet are all selected. */
  readonly isComplete = computed(
    () => !!this.time() && !!this.cuisine() && !!this.diet(),
  );
}