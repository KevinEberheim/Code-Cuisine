import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../models/ingredient';

/** Formats the amount of an ingredient, e.g. "100g", "50ml" or "1". */
@Pipe({ name: 'amountLabel' })
export class AmountLabelPipe implements PipeTransform {
  /**
   * @param item The ingredient to format.
   * @returns Amount with short unit; pieces show the number only.
   */
  transform(item: Ingredient): string {
    if (item.unit === 'gram') return `${item.amount}g`;
    if (item.unit === 'ml') return `${item.amount}ml`;
    return `${item.amount}`;
  }
}