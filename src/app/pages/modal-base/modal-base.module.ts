import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBasePageRoutingModule } from './modal-base-routing.module';

import { ModalBasePage } from './modal-base.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBasePageRoutingModule
  ],
  declarations: [ModalBasePage]
})
export class ModalBasePageModule {}
