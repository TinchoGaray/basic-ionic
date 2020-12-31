import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

//esto ya no se usa porque estoy usando el json para las rutas
//  interface Componente{
//   icon: string;
//   name: string;
//   redirectTo: string;
// };


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  //componentes:Componente[] = [];

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  //Forma larga de hacer un menu
  // mostrarMenu() {
  //   this.menuCtrl.open("first");
  // }
}
