import { Injectable } from '@angular/core';

/** Provides autocomplete suggestions for ingredient names. */
@Injectable({ providedIn: 'root' })
export class IngredientSuggestions {
  /**
   * Searches ingredient names matching the term.
   * @param term The text typed by the user.
   * @returns Matching ingredient names.
   */
  async search(term: string): Promise<string[]> {
    // TODO: query Supabase via supabase.ts once the table is defined
    return [];
  }
}