import { Component } from '@angular/core';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number = 0;

  calcularPerimetro(): void {
    // Lógica para calcular el perímetro del círculo
    const pi: number = 3.1416;
    this.perimetro = 2 * pi * this.radio;

    // Redondea el resultado a dos decimales
    this.perimetro = Number(this.perimetro.toFixed(2));
  }
}
