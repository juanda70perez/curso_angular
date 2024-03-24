import { Component } from '@angular/core';
import { Persona } from '../persona';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {

  persona:Persona = {
    nombre:"",
    edad:0
  };

  procesar(){
    console.log(this.persona)
  }
}
