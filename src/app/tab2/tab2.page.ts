import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor, NgIf } from '@angular/common';
import { Animation, AnimationController } from '@ionic/angular';

interface Shop {
  label: string,
  icon: string,
  context: string,
  routeUrl?: string,
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ExploreContainerComponent,
    NgIf, NgFor
  ]
})
export class Tab2Page implements OnInit {
  @ViewChild('browseShops') divElem!: ElementRef;
  browseShopsList: Array<Shop> = [];
  showProgressStatus: boolean = true
  constructor(
    private animationControl: AnimationController,
    private elementRef: ElementRef,
    private rederer2: Renderer2
  ) {}

  ngOnInit(): void {
    // this.settingUpItemsAnimations();
    this.browseShopsList = [
      {
        label:'Fruits & Vegetables',
        icon: 'fa-solid fa-leaf',
        context: 'Fresh Produce',
        routeUrl: 'gg'
      },
      {
        label:'Poultry Meat Seafood',
        icon: 'fa-solid fa-fish',
        context: 'Proteins'
      },
      {
        label:'Groceries',
        icon:'fa-solid fa-basket-shopping',
        context: 'Kiranas Super Markets'
      },
      {
        label: 'Restaurants',
        icon: 'fa-solid fa-utensils',
        context: 'All types of Cuisine around you'
      },
      {
        label: 'Home Made',
        icon: 'fa-solid fa-house-chimney',
        context: 'All local flavours'
      },
      {
        label: 'Sweets & Snacks',
        icon: 'fa-solid fa-cookie-bite',
        context: 'Local Eats'
      },
      {
        label: 'Cakes & Ice cream',
        icon: 'fa-solid fa-ice-cream',
        context: 'Fresh bakes and desserts'
      },
      {
        label: 'Exclusive',
        icon: 'fa-solid fa-store',
        context: 'Specialty food items & Pharmacies'
      }
    ]
    this.showLoadingProgress()
  }


  showLoadingProgress(){
    setTimeout(() => {
      this.showProgressStatus = false
    }, 2000)
  }

  navigationRoute(item: Shop){
    // this.settingUpItemsAnimations()

  }

  settingUpItemsAnimations(){
    // let ion_element = this.divElem.nativeElement

    // const animation: Animation = this.animationControl.create()
    // .addElement(ion_element)
    // .duration(2500)
    // .iterations(1)
    // .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    // .fromTo('opacity', '1', '0.2');
    // animation.play()

    // .duration(1000)
    // .iterations(1)
    // .fromTo('opacity', '1', '0.5')
    // .fromTo('transform', 'translateX(0)', 'translateX(100px)');
  }


}
