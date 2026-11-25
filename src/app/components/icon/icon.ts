import { Component, input } from '@angular/core';

/** Icon from a transparent PNG, colored by the CSS text color. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  readonly name = input.required<string>();
  readonly size = input(24);
}