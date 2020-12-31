import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ["Aquaman" , "Superman", "Batman", "WonderWoman", "Flash"];

  //se crea la propiedad bool
  habiReorder: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any){

    //splice corta
    const itemMover = this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to,0,itemMover);
    console.log(this.personajes);
    event.detail.complete();
  }

}
