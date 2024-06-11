import { Component, computed, inject, input } from '@angular/core';
import { ExcusesService } from '../../../services/excuses.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-excuse',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './excuse.component.html',
  styleUrl: './excuse.component.css',
})
export class ExcuseComponent {
  private readonly excusesService: ExcusesService = inject(ExcusesService);

  http_code = input.required<number>();
  excuse = computed(() => this.excusesService.getExcuse(this.http_code()));
}
