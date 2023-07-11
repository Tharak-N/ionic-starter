import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { ShopCardsComponent } from '../shop-cards/shop-cards.component';

interface ShopDetails {
  shopId: number,
  shopTitle: string,
  shopSubTitle: string,
  imageUrl: string,
  loadingBehaviour: any,
  contents: string | ShopContentDetails
}

interface ShopContentDetails{
  imageUrl: string,
  availability: string,
  deliveryService: boolean,
  offers: boolean,
}

@Component({
  selector: 'app-fruits-vegetables',
  templateUrl: './fruits-vegetables.component.html',
  styleUrls: ['./fruits-vegetables.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    ShopCardsComponent
  ]
})
export class FruitsVegetablesComponent  implements OnInit {
  header: string = ''
  public shopDetails: Array<ShopDetails> = [];

  private router = inject(Router);

  constructor() { }
  ngOnInit() {
    this.header = 'Fruits & Vegetables';
    this.settingShopDetails();
  }

  settingShopDetails(){
    this.shopDetails.push(
      {
        shopId: 1,
        shopTitle: 'FVM2 Vegetables & Fruits Shop',
        shopSubTitle: 'Daily fresh from hills',
        imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
        loadingBehaviour: 'lazy',
        contents: 'Heres small text description for card content'
      },
    )
  }

  navigateToBackPage(event: any){
    if(event){
      this.router.navigate(['/tabs/browse-shops'])
    }
  }

}
