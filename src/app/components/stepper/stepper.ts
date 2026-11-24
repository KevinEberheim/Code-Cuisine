import { Component, computed, input, model } from '@angular/core';

/** Number stepper with minus and plus button. */
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class Stepper {
  readonly question = input.required<string>();
  readonly singular = input.required<string>();
  readonly plural = input.required<string>();
  readonly min = input(1);
  readonly max = input(12);
  readonly value = model(1);
  readonly unit = computed(() => (this.value() === 1 ? this.singular() : this.plural()));

  /**
   * Changes the value if the result stays within min and max.
   * @param step Amount to add, negative to subtract.
   */
  change(step: number): void {
    const next = this.value() + step;
    if (next >= this.min() && next <= this.max()) this.value.set(next);
  }
}