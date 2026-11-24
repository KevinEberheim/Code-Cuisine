/** Available cooking time categories. */
export type CookingTime = 'quick' | 'medium' | 'complex';

/** Available cuisines. */
export type Cuisine = 'german' | 'italian' | 'indian' | 'japanese' | 'gourmet' | 'fusion';

/** Available diets. */
export type Diet = 'vegetarian' | 'vegan' | 'keto' | 'none';

/** A selectable option with an optional small hint text. */
export interface Option<T extends string> {
  value: T;
  label: string;
  hint?: string;
}

export const TIME_OPTIONS: Option<CookingTime>[] = [
  { value: 'quick', label: 'Quick', hint: 'up to 20min' },
  { value: 'medium', label: 'Medium', hint: '20-45min' },
  { value: 'complex', label: 'Complex', hint: 'over 45min' },
];

export const CUISINE_OPTIONS: Option<Cuisine>[] = [
  { value: 'german', label: 'German' },
  { value: 'italian', label: 'Italian' },
  { value: 'indian', label: 'Indian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'gourmet', label: 'Gourmet' },
  { value: 'fusion', label: 'Fusion' },
];

export const DIET_OPTIONS: Option<Diet>[] = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'keto', label: 'Keto' },
  { value: 'none', label: 'No preferences' },
];