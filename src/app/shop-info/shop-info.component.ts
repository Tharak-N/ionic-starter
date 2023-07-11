import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { ShopDetails } from '../interfaces/interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss'],
  standalone: true,
  imports: [IonicModule,
    HeaderComponent,
    NgOptimizedImage
  ]
})
export class ShopInfoComponent  implements OnInit {
  shopDetails!: ShopDetails ;

  private router = inject(Router);
  private route = inject(ActivatedRoute)

  constructor() { }

  ngOnInit() {
    this.getRouteParams();
    this.gettingShopData()
  }

  getRouteParams(){
   this.shopDetails = JSON.parse(this.route.snapshot.paramMap.get('shopDetails') as string ?? '');
    console.warn("the shop details are", this.shopDetails)
  }

  gettingShopData(){

  }

  navigateToBackPage(event: any){
    if(event){
      this.router.navigate(['fruits-vegetables'])
    }
  }

  navigateToMyShops(){
    this.router.navigate(['tabs/my-shops'])
  }

}
