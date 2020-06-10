import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { ModalBasePageModule } from '../modal-base/modal-base.module';
import { MyModalPageModule } from '../my-modal/my-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    ModalBasePageModule,
    MyModalPageModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
