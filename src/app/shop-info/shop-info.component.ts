import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { ShopDetails } from '../interfaces/interface';
import { NgOptimizedImage } from '@angular/common';
import { RemoteStateService } from '../services/remote-state.service';
// import { InlineModalsComponent } from '../inline-modals/inline-modals.component';

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
  private route = inject(ActivatedRoute);
  private dataStore = inject(RemoteStateService);

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

  navigateToCatalogue(){
    // this.router.navigate(['view-catalogue', JSON.stringify(this.shopDetails)])

    this.dataStore.setShopCatalogueDetails(this.shopDetails)
    this.dataStore.setModalRootComponent('shop-catalogue');
    this.router.navigate(['nav-modals'])
  }

}
