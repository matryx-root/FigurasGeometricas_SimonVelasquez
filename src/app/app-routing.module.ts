// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CirculoComponent } from './circulo/circulo.component';
import { TrianguloComponent } from './triangulo/triangulo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'circulo', component: CirculoComponent },
  { path: 'triangulo', component: TrianguloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
