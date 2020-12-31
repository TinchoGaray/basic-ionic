import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      //Esto es lo que mando al otro componente
      componentProps: {
        nombre: "Fernando",
        pais:"Costa Rica"
      }
    });
     await modal.present();


     //Si necesito la informacion que me devuelve el hijo entonces
     //Aca hace desestructuracion de la data antes era     const rta = await modal.onDidDismiss();
    const {data} = await modal.onDidDismiss();
    

    console.log(data);
  }
}
