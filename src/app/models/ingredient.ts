/** Matches every character that is not a letter, a space or a hyphen. */
export const INVALID_NAME_CHARS = /[^\p{L} -]/gu;

/** Matches a name that contains at least one letter. */
export const HAS_LETTER = /\p{L}/u;

/** All selectable measurement units. */
export const UNITS = ['piece', 'ml', 'gram'] as const;

/** A measurement unit. */
export type Unit = (typeof UNITS)[number];

/** A single ingredient entered by the user. */
export interface Ingredient {
  name: string;
  amount: number;
  unit: Unit;
}