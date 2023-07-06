import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor, NgIf } from '@angular/common';
import { Animation, AnimationController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface Shop {
  label: string,
  icon: string,
  context: string,
  routeUrl?: string,
  status: number
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf, NgFor,
  ]
})
export class Tab2Page implements OnInit {
  /**
   * Injecting all the services using inject fn
   */
  private animationControl = inject(AnimationController)
  private elementRef = inject(ElementRef)
  private rederer2 = inject(Renderer2)
  private router = inject(Router)
  private activeRoute = inject(ActivatedRoute)


  @ViewChild('browseShops') divElem!: ElementRef;

  browseShopsList: Array<Shop> = [];
  showProgressStatus: boolean = true

  constructor() {}

  ngOnInit(): void {
    console.log("the active route is", this.activeRoute, this.activeRoute.snapshot, this.activeRoute.url)
    // this.settingUpItemsAnimations();
    this.browseShopsList = [
      {
        label:'Fruits & Vegetables',
        icon: 'fa-solid fa-leaf',
        context: 'Fresh Produce',
        routeUrl: '/fruits-vegetables',
        status: 2
      },
      {
        label:'Poultry Meat Seafood',
        icon: 'fa-solid fa-fish',
        context: 'Proteins',
        routeUrl: '/sea-food',
        status: 3
      },
      {
        label:'Groceries',
        icon:'fa-solid fa-basket-shopping',
        context: 'Kiranas Super Markets',
        routeUrl: '/groceries',
        status: 0
      },
      {
        label: 'Restaurants',
        icon: 'fa-solid fa-utensils',
        context: 'All types of Cuisine around you',
        routeUrl: '/restaurant',
        status: 4
      },
      {
        label: 'Home Made',
        icon: 'fa-solid fa-house-chimney',
        context: 'All local flavours',
        routeUrl: '/home-made',
        status: 3
      },
      {
        label: 'Sweets & Snacks',
        icon: 'fa-solid fa-cookie-bite',
        context: 'Local Eats',
        routeUrl: '/sweets-and-snacks',
        status: 8
      },
      {
        label: 'Cakes & Ice cream',
        icon: 'fa-solid fa-ice-cream',
        context: 'Fresh bakes and desserts',
        routeUrl: '/cakes-and-icecreams',
        status: 2
      },
      {
        label: 'Exclusive',
        icon: 'fa-solid fa-store',
        context: 'Specialty food items & Pharmacies',
        routeUrl: '/exclusive',
        status: 0
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
    console.log(item.routeUrl)
    this.router.navigate([item.routeUrl])
    // this.router.navigate(['fruits-vegetables'])
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
