import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Asegúrate de agregar esta línea
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CirculoComponent } from './circulo/circulo.component';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'circulo', component: CirculoComponent },
  { path: 'triangulo', component: TrianguloComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CirculoComponent,
    TrianguloComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
