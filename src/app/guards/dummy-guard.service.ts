import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';
 
@Injectable({
  providedIn: 'root'
})
export class DummyGuardService implements CanActivate {
 
  constructor(private alertController: AlertController) { }
 
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let selectedId = +route.paramMap.get('id');
    let allowed = selectedId != 100;
    if (allowed) {
      return true;
    } else {
      this.alertController.create({
        header: 'Sorry',
        subHeader: 'Guard prevents this',
        message: 'The Guard says no.',
        buttons: ['OK']
      }).then(alert => alert.present());
  
      return false;
    }
  }
}