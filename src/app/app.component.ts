import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre = 'Alberto';
  apellido = 'Castro Martinez';
  edad = 18;
  estadoCivil = false;
  calificaciones = [9.5,9,10];
  prom;
  ngOnInit(){
    let sum = 0;
    for (let  i = 0; i < this.calificaciones.length; i++) {
      sum += this.calificaciones[i];
    }
    this.prom = sum/this.calificaciones.length;
  }
}
