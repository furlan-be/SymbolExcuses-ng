import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { first, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-lost',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.css',
})
export class LostComponent implements OnInit {
  private readonly router: Router = inject(Router);

  ngOnInit() {
    console.info(`You will be redirected to / in 5 seconds.`);
    return timer(5000)
      .pipe(
        first(),
        tap(() => console.info('You have been redirected to /')),
        switchMap(() => this.router.navigate(['/'])),
      )
      .subscribe();
  }
}
