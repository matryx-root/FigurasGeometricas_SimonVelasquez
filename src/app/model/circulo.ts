import { FiguraGeometrica } from './figura-geometrica';

export class Circulo extends FiguraGeometrica {
  radio: number = 0;

  constructor(nombre: string, radio: number) {
    super(nombre);
    this.radio = radio;
  }

  calcularPerimetro(): number {
    // Implementa la fórmula del perímetro de un círculo: P = 2 * π * radio
    const pi: number = 3.1416;
    const perimetro: number = 2 * pi * this.radio;

    // Redondea el resultado a dos decimales
    return Number(perimetro.toFixed(2));
  }
}
