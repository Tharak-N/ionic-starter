import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShopDetails } from '../interfaces/interface';

@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf, NgFor,
    NgOptimizedImage,
  ]
})
export class ShopCardsComponent  implements OnInit {
  _shopDetails: any;
  @Input({ required: true }) shopDetails!: Array<ShopDetails>;

  private router = inject(Router);

  // set(shopDetails: Array<ShopDetails>){
  //   if(!!shopDetails && shopDetails.length>0){
  //     this._shopDetails = shopDetails
  //   }
  // }

  // get shopDetails(): Array<ShopDetails>{
  //   return this._shopDetails;
  // }

  constructor() { }

  ngOnInit() {
    this.settingUpShopCard()
  }

  settingUpShopCard(){

  }


  openShopInfo(shop: ShopDetails){
    this.router.navigate(['/shop-info', JSON.stringify(shop)]);
  }

}
