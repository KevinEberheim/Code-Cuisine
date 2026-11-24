import { Component, input, model } from '@angular/core';
import { Option } from '../../models/recipe-options';

/** Group of chips where exactly one option can be selected. */
@Component({
  selector: 'app-chip-group',
  templateUrl: './chip-group.html',
  styleUrl: './chip-group.scss',
})
export class ChipGroup<T extends string> {
  readonly heading = input.required<string>();
  readonly icon = input.required<string>();
  readonly options = input.required<Option<T>[]>();
  readonly value = model<T | null>(null);

    /**
   * Selects an option, or clears the selection if it is already selected.
   * @param option The clicked option value.
   */
  toggle(option: T): void {
    this.value.set(this.value() === option ? null : option);
  }
}