import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  nombre: string = "juand david";

  persona: Persona = {
    nombre: "juan",
    edad: 23
  }

  numero: number = 1;
  decrementar() {
    this.numero--;
  }
  incrementar() {
    this.numero++;
  }
}
