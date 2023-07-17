import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    NgFor
  ]
})
export class ItemsListComponent  implements OnInit {

  header: string = 'Items List'
  itemsList: Array<any> = [];
  constructor(
    // private platform: Platform,
    private navCtrl: NavController
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   console.log('Handler was called!');
    //   this.navCtrl.back()
    // });
  }

  ngOnInit() {

    this.itemsList.push(
      this.createItemObject('Apple Royal Gala', '1Kg approx 5Pcs', 'Rs.100/Kg'),
      this.createItemObject('Apple(America)', '1Kg approx 5Pcs', 'Rs.120/Kg'),
      this.createItemObject('Apple(Fiji)', '1Kg approx 5Pcs', 'Rs.100/Kg'),
      this.createItemObject('Apple(Golden)', '1Kg approx 5Pcs', 'Rs.100/Kg'),
      this.createItemObject('Apple(Green Granny Smith)', '1Kg approx 5Pcs', 'Rs.100/Kg'),
      this.createItemObject('Apple(Kashmir)', '1Kg approx 5Pcs', 'Rs.140/Kg'),
      this.createItemObject('Pears(China)', '1Kg approx 7Pcs', 'Rs.150/Kg'),
      this.createItemObject('Pears(Green)', '1Kg approx 7Pcs', 'Rs.140/Kg'),
      this.createItemObject('Pears(Indian)', '1Kg approx 7Pcs', 'Rs.110/Kg'),
      )

  }

  navigateBack(event: any){

  }

  createItemObject(itemName: string, itemContext: string, itemPrice: string){
    let item = {};
    item = {
      itemName:itemName ,
      itemContext: itemContext,
      itemPrice: itemPrice
    }
    return item
  }

}
