import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';




@NgModule({
  declarations: [
    HeaderComponent,
    //Al popOver lo tengo que poner en las declaraciones xq se está cargando con lazzy load y no conoce las cosas de ionic
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    //same aca
    PopoverInfoComponent
  ]
})
export class ComponentsModule { }
