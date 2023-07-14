import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteStateService {
  // private modalRootComponent!: string;

  constructor() { }

  private modalRootComponent = new BehaviorSubject('hello tharak');
  private shopCatalogueDetails = new BehaviorSubject({});

  /**Set and get the root component for ion-nav stack */
  setModalRootComponent(data: string){
    this.modalRootComponent.next(data)
  }
  getModalRootComponent(){
    return this.modalRootComponent.asObservable();
  }

  /**Set and get the catalogue details */
  setShopCatalogueDetails(data: Object){
    this.shopCatalogueDetails.next(data)
  }
  getShopCatalogueDetails(){
    return this.shopCatalogueDetails.asObservable()
  }


}
