import { Component, inject, Signal } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { Excuse } from '../../../models/Excuse';
import { ExcusesService } from '../../../services/excuses.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, NgIf, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly excusesService: ExcusesService = inject(ExcusesService);
  selectedExcuse: Signal<Excuse> = this.excusesService.getSelectedExcuse();
}
