import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ExcusesService } from '../../../../services/excuses.service';
import { finalize, timer } from 'rxjs';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatProgressSpinner],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  private readonly excusesService: ExcusesService = inject(ExcusesService);
  loading: WritableSignal<boolean> = signal(false);

  generateNewExcuse() {
    this.loading.set(true);
    const delayTime: number = Math.floor(Math.random() * 4000) + 1000;
    timer(delayTime)
      .pipe(
        finalize(() => {
          this.loading.set(false);
          this.excusesService.generateNewExcuse();
        }),
      )
      .subscribe();
  }
}
