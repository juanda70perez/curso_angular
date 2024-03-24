import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {

dia:number = 0;

getDia(dia:string){
  this.dia = parseInt(dia);
}
}
