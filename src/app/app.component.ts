import { Component } from '@angular/core';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi aplicación';

cantidad=3;

value = 0;

mensaje="Hola, haz hecho un click";

emitirAlerta(){
  for(let i = 0; i < this.cantidad; i++ )
console.log(this.mensaje + i);
}

}