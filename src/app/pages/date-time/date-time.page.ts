import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


  fechaNaci: date = new Date();

  customPickerOptions = {
    buttons:[
      {
        text:"Hola",
        handler: (evento) => {
          console.log(evento);
        }
      },
      {
        text:"Mundo",
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  CambioFecha(event){
    console.log(event);
    console.log( new Date(event.detail.value))
  }

}
