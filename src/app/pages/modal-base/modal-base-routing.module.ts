import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBasePage } from './modal-base.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBasePageRoutingModule {}
