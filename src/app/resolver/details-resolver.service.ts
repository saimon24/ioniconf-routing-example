import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { switchMap, finalize } from 'rxjs/operators';
import { from } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DetailsResolverService implements Resolve<any> {
 
  constructor(private http: HttpClient, private loadingController: LoadingController) { }
 
  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
 
    let loading: HTMLIonLoadingElement;
 
    const loadingProm = this.loadingController.create({
      message: 'Please hold the line..'
    });

    return from(loadingProm).pipe(
      switchMap(loadingElem => {
        loading = loadingElem;
        return from(loading.present());
      }),
      switchMap(() => {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      }),
      finalize(() => {
        this.loadingController.dismiss();
      })
    )
  }
 
}