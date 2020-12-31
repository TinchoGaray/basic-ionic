import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  //Esto lo creo
  usuarios: Observable<any>

  //para cerrar el boton una vez que se desliza uso el viewChild, si hay varios IonList puedo ponerle un ID
  @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    //esto era antes de crear usuarios
    this.dataService.getUsuarios().subscribe(console.log)

    this.usuarios = this.dataService.getUsuarios();
  }




  favorite(user:any){
  this.ionList.closeSlidingItems();
  }

  share(user:any){
    this.ionList.closeSlidingItems();
  }

  unread(user:any){
    this.ionList.closeSlidingItems();

  }

  

}
