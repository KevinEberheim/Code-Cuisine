import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logo } from '../../components/logo/logo';

const LOADING_MS = 8000;

/** Shows a loading animation and forwards to the results page. */
@Component({
  selector: 'app-loading',
  imports: [Logo],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private timer?: ReturnType<typeof setTimeout>;

  /** Starts the timer that forwards to the results page. */
  ngOnInit(): void {
    this.timer = setTimeout(() => this.router.navigateByUrl('/results'), LOADING_MS);
  }

  /** Clears the timer when the page is left early. */
  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}