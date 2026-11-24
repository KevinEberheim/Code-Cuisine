import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Logo that links back to the start page. */
@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  readonly variant = input<'light' | 'dark'>('dark');
}