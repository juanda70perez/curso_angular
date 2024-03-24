import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

  personas: Persona[] = [
    { nombre: "juan", edad: 20 },
    { nombre: "pedro", edad: 22 },
    { nombre: "pablo", edad: 23 },
    { nombre: "jose", edad: 24 },
    { nombre: "julian", edad: 26 },
  ];
}
