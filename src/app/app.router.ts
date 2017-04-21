import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountdownComponent } from './components/countdown/countdown.component';


export const router: Routes = [
  //{path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'countdown', component: CountdownComponent }
  //{path: 'dash', component: DashboardComponent},
  //{path: '404', component: PagenotfoundComponent},
  //{path: '**', redirectTo: '404'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);