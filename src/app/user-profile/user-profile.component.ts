import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    NgFor
  ]
})
export class UserProfileComponent  implements OnInit {
  private router = inject(Router);

  header: string = '';
  nearByLocation: string = '';
  userAddresses: Array<any> = [];
  allToggleItems: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.header = 'Profile'
    this.settingUpUserAddresses();
  }

  navigateToBackPage(event: any){
    if(event){
      this.router.navigate([''])
    }
  }

  settingUpUserAddresses(){
    this.userAddresses.push(
      {
        address: 'Flat - 501, Kanakadhara Residency, DRM office road, Pattabhipuram, Guntur - 500002'
      },
      {
        address: 'Flat - 221, Dwarakamai Jupiter, Kaverappa layout, Kaadubeesanahalli, Bangalore - 500002'
      }
    )
    this.nearByLocation = "Flat - 501, Kanakadhara Residency, DRM office road, Pattabhipuram, Guntur";
    this.allToggleItems.push(
      {
        label: 'Vegetarian',
      },
      {
        label: 'Married',
      },
    )
  }

  updateItem(item: Object, index: number){

  }

}
