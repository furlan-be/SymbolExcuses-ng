import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Excuse } from '../models/Excuse';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExcusesService {
  private readonly httpClient = inject(HttpClient);

  private readonly backendUrl = environment.backendUrl;
  private readonly excuses: WritableSignal<Excuse[]> = signal<Excuse[]>([]);
  private readonly selectedExcuseIndex: WritableSignal<number> =
    signal<number>(0);
  private readonly selectedExcuse: Signal<Excuse> = computed(
    () => this.excuses()[this.selectedExcuseIndex()],
  );

  public fetchExcuses(): Observable<Excuse[]> {
    return this.httpClient.get<Excuse[]>(`${this.backendUrl}/excuses`).pipe(
      tap((excuses: Excuse[]) => {
        this.excuses.set(excuses);
        this.generateNewExcuse();
      }),
    );
  }

  public generateNewExcuse(): void {
    const previousExcuseIndex: number = this.selectedExcuseIndex();
    // the new excuse should be different from the previous one
    let newExcuseIndex: number = previousExcuseIndex;
    while (
      newExcuseIndex === previousExcuseIndex &&
      this.excuses().length > 1
    ) {
      newExcuseIndex = Math.floor(Math.random() * this.excuses().length);
    }
    this.selectedExcuseIndex.set(newExcuseIndex);
  }

  public getSelectedExcuse(): Signal<Excuse> {
    return this.selectedExcuse;
  }

  getExcuse(number: number): Excuse | undefined {
    return this.excuses().find((excuse: Excuse) => excuse.httpCode == number);
  }
}
