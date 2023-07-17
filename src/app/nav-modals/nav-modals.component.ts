import { Component, Input, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TestModalComponent } from '../test-modal/test-modal.component';
import { RemoteStateService } from '../services/remote-state.service';
import { ShopCatalogueComponent } from '../shop-catalogue/shop-catalogue.component';

@Component({
  selector: 'app-nav-modals',
  templateUrl: './nav-modals.component.html',
  styleUrls: ['./nav-modals.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class NavModalsComponent  implements OnInit {
  component: any;

  private dataStore = inject(RemoteStateService)

  constructor() { }

  ngOnInit() {
    this.getDataFromRemoteState();
  }

  getDataFromRemoteState(){
    this.dataStore.getModalRootComponent().subscribe((response: string) => {
      this.setUpRootComponent(response)
    })
  }

  setUpRootComponent(component_name: string){
    if(component_name === 'test-modal'){
      this.component = TestModalComponent as Function;
    }
    else if(component_name === 'shop-catalogue'){
      this.component = ShopCatalogueComponent as Function;
    }
  }

}
