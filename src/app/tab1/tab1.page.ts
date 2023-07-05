import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor, NgIf } from '@angular/common';

interface Shop {
  label: string,
  context: string,
  icon: string,
  routeUrl: string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf, NgFor
  ],
})
export class Tab1Page implements OnInit {
  myShops: Array<Shop> = []
  showProgressStatus: boolean = true
  constructor() {}

  ngOnInit(): void {
    // this.showLoadingProgress()
    this.settingMyShops()
  }

  showLoadingProgress(){
    setTimeout(() => {
      this.showProgressStatus = false
    }, 2000)
  }

  settingMyShops(){
    this.myShops.push(
      {
        label: 'GMH Restaurant',
        context: 'Fine Multi cuisie Restaurant',
        icon: 'fa-solid fa-star',
        routeUrl: ''
      },
      {
        label: 'Meghana Restaurant',
        context: 'Non-Veg Restaurant',
        icon: 'fa-solid fa-fish',
        routeUrl: ''
      }
    )
  }

  navigationRoute(shop: Shop){

  }

}
