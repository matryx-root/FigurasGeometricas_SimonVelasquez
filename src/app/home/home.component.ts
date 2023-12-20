// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedShape: string = '';

  constructor() {}

  ngOnInit(): void {
    // Puedes agregar una asignación simple para evitar el error de ESLint
    const placeholder = 'Evitar error de ESLint';
  }

  onShapeSelect(shape: string) {
    this.selectedShape = shape;
  }
}
