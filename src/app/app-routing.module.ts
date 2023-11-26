// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { EstacionamientoComponent } from './dashboard/estacionamiento/estacionamiento.component';
import { NotasComponent } from './dashboard/notas/notas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'estacionamiento', component: EstacionamientoComponent },
  { path: 'notas', component: NotasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Ruta para cualquier otra URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
