import { Injectable, signal } from '@angular/core';
import { Recipe } from '../models/recipe';

/** Holds the recipe suggestions shown on the results page. */
@Injectable({ providedIn: 'root' })
export class RecipeResults {
  // Placeholder data until n8n and Supabase are connected
  readonly recipes = signal<Recipe[]>([
    { id: 1, title: 'Pasta with spinach and cherry tomatoes', cookingTime: 20 },
    { id: 2, title: 'Creamy garlic shrimp pasta', cookingTime: 22 },
    { id: 3, title: 'Pasta alla Trapanese (Sicilian Tomato Pesto)', cookingTime: 20 },
  ]);
}