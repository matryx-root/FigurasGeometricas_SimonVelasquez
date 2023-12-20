// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FigurasGeometricas';
  constructor(private router: Router) {}

  navigateToHome() {
    // Navegar a la página de inicio
    this.router.navigate(['/']);
  }

  navigateToCirculo() {
    // Navegar a la página de círculo
    this.router.navigate(['/circulo']);
  }

  navigateToTriangulo() {
    // Navegar a la página de triángulo
    this.router.navigate(['/triangulo']);
  }
}
