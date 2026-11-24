import { Injectable, signal } from '@angular/core';
import { Ingredient } from '../models/ingredient';

/** Holds the ingredient list shared between pages. */
@Injectable({ providedIn: 'root' })
export class IngredientList {
  readonly items = signal<Ingredient[]>([]);

  /**
   * Checks case-insensitively whether an ingredient is already listed.
   * @param name Ingredient name to look for.
   */
  has(name: string): boolean {
    const key = name.trim().toLowerCase();
    return this.items().some((i) => i.name.toLowerCase() === key);
  }

  /**
   * Adds an ingredient at the top of the list.
   * @param ingredient The ingredient to add.
   */
  add(ingredient: Ingredient): void {
    this.items.update((list) => [ingredient, ...list]);
  }

  /**
   * Removes an ingredient by name.
   * @param name Name of the ingredient to remove.
   */
  remove(name: string): void {
    this.items.update((list) => list.filter((i) => i.name !== name));
  }

  /**
   * Updates amount and unit of an existing ingredient.
   * @param name Name of the ingredient to change.
   * @param changes New amount and unit.
   */
  update(name: string, changes: Pick<Ingredient, 'amount' | 'unit'>): void {
    this.items.update((list) =>
      list.map((i) => (i.name === name ? { ...i, ...changes } : i)),
    );
  }
}