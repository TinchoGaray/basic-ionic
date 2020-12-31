import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  //la otra forma de hacer esto sin el viewChild es recibir por parametro del loadData el evento y despues de hacer el push poner event.target.complet();

  @ViewChild (IonInfiniteScroll) infiniteScroll : IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    setTimeout(() => {

      if (this.data.length > 50)
      {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(... nuevoArr);

      this.infiniteScroll.complete();
    }, 1500);
  }

}
