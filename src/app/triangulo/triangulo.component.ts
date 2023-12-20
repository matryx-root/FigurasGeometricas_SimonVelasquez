import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
})
export class TrianguloComponent {
  titulo = 'Triángulo';
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number = 0;

  calcularPerimetro() {
    // Implementa la lógica para calcular el perímetro del triángulo
    this.perimetro = this.ladoA + this.ladoB + this.ladoC;
  }
}
