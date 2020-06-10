import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBasePage } from '../modal-base/modal-base.page';
import { MyModalPage } from '../my-modal/my-modal.page';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  myid = 42;
  customPokemon = {
    name: 'Simonimon',
    skills: ['ionic', 'angular']
  };

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
    component: ModalBasePage,
    componentProps: {
      rootPage: MyModalPage,
    }
    });
  
    await modal.present();
  }

  // Not recommended!
  openDetailsWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        pokemon: JSON.stringify(this.customPokemon)
      },
      queryParamsHandling: 'merge'
    };
    this.router.navigate(['inside/list/details'], navigationExtras);
  }

  openWithExtras() {
    let navigationExtras: NavigationExtras = {
      state: {
        pokemon: this.customPokemon
      }
    };
    this.router.navigateByUrl('inside/list/details', navigationExtras);
  }
}
