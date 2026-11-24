import { Component, ElementRef, inject, model, signal } from '@angular/core';
import { Unit, UNITS } from '../../models/ingredient';

/** Custom dropdown to choose a measurement unit. */
@Component({
  selector: 'app-unit-select',
  templateUrl: './unit-select.html',
  styleUrl: './unit-select.scss',
  host: { '(document:click)': 'onDocumentClick($event)' },
})
export class UnitSelect {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly units = UNITS;
  readonly value = model<Unit>('gram');
  readonly open = signal(false);

  /** Opens or closes the option list. */
  toggle(): void {
    this.open.update((isOpen) => !isOpen);
  }

  /**
   * Selects a unit and closes the list.
   * @param unit The chosen unit.
   */
  select(unit: Unit): void {
    this.value.set(unit);
    this.open.set(false);
  }

  /**
   * Closes the list when the user clicks outside the component.
   * @param event The click event.
   */
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.open.set(false);
    }
  }
}