import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FRUIT_TYPES, FruitTypes, ProductSection, ShopDetails, VegetableTypes } from '../interfaces/interface';
import { HeaderComponent } from '../header/header.component';
import { AccordionsComponent } from '../accordions/accordions.component';
import { NgFor, NgIf } from '@angular/common';
import { InlineModalsComponent } from '../inline-modals/inline-modals.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { NavModalsComponent } from '../nav-modals/nav-modals.component';
// import { LogMessage } from '../utilities/static-methods';
import { RemoteStateService } from '../services/remote-state.service';
import { ItemsListComponent } from '../items-list/items-list.component';

@Component({
  selector: 'app-shop-catalogue',
  templateUrl: './shop-catalogue.component.html',
  styleUrls: ['./shop-catalogue.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    AccordionsComponent,
    InlineModalsComponent,
    SearchPageComponent,
    NavModalsComponent,
    NgFor, NgIf
  ]
})
export class ShopCatalogueComponent  implements OnInit {
  shopDetails!: ShopDetails;
  component: any = ItemsListComponent;
  isModalOpen: boolean = false;
  openNavModal: boolean = false;
  allSections: Array<any> = [];
  allSectionName: Array<string> = [''];

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dataStore = inject(RemoteStateService);

  constructor() {
  }

  ngOnInit() {
    this.getShopDetails()
  }

  getShopDetails(){
    // this.shopDetails = JSON.parse(this.route.snapshot.paramMap.get('shopDetails') as string ?? '')
    this.dataStore.getShopCatalogueDetails().subscribe((resp: any) => {
      this.shopDetails = resp
    })
    this.getShopCatalogueProducts();
  }

  getShopCatalogueProducts(){
    // let _shopId = this.shopDetails.shopId;
    let FRUIT_KEYS: Array<string> = Object.keys({
      Apples: 'string',
      Bananas: 'string',
      Citrus_Fruits: 'string',
      Country_Fruits: 'string',
      Exotic_Fruits: 'string',
      Mango: 'string'
    } as FruitTypes)
    console.log("the fruits keys are", FRUIT_KEYS)
    let VEGETABLE_KEYS: Array<string> = Object.keys({
      Beans: 'string',
      Country_Vegetables: 'string',
      Exotic_Vegetables: 'string',
      Gourds: 'string',
      Greens: 'string',
      Herb_Seasoning: 'string',
      Hill_Vegetables: 'string',
      Root_Vegetables: 'string',
      Special_Items: 'string',
      Tomato_onion: 'string'
    } as VegetableTypes)
    this.allSections.push(
      {
        sectionName: 'Fruits',
        itemsList: FRUIT_KEYS,
      },
      {
        sectionName: 'Vegetables',
        itemsList: VEGETABLE_KEYS
      }
    );
    this.allSectionName.length = 0,
    this.allSections.forEach((item:any) => {
      this.allSectionName.push(item.sectionName)
    });
    console.log("all the section names are", this.allSectionName)
  }

  navigateToBackPage(event: any){
    if(event){
      // this.router.navigate(['shop-info', JSON.stringify(this.shopDetails)])
    }
  }

  // itemSelected(item: any, i: number){
  //   this.isModalOpen = true;
  //   this.openNavModal = true;

  //   // this.dataStore.setModalRootComponent('items-list')
  //   // this.router.navigate(['nav-modals'])
  // }

  closeModal(event: any){
    if(event){
      this.isModalOpen = false;
    }
  }

}
