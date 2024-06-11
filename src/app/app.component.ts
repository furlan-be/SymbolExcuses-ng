import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExcusesService } from '../services/excuses.service';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(excusesService: ExcusesService) {
    excusesService.fetchExcuses().subscribe();
    console.info(packageJson.version);
  }
}
