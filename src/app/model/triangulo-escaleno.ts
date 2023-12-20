import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;

  constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
    super(nombre);
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
