import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LostComponent } from './pages/lost/lost.component';
import { ExcuseComponent } from './pages/excuse/excuse.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'lost',
    component: LostComponent,
  },
  {
    path: `excuses/:http_code`,
    component: ExcuseComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
