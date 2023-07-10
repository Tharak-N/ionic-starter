import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Animation, AnimationController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface Shop {
  label: string,
  icon: string,
  image: string,
  loadBehaviour: any,
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
    NgOptimizedImage,

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
        // image: 'https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=1380&t=st=1688700449~exp=1688701049~hmac=1bad8e79d707b68871db2d71bf9471953ef1d3b57a8375ab1919946f18ada1ac',
        image: '../../assets/images/fruits & vegetables.jpeg',
        loadBehaviour: 'eager',
        context: 'Fresh Produce',
        routeUrl: '/fruits-vegetables',
        status: 2
      },
      {
        label:'Poultry Meat Seafood',
        icon: 'fa-solid fa-fish',
        // image: 'https://as1.ftcdn.net/v2/jpg/06/12/45/94/1000_F_612459430_KiW1iQDfGEMv8uSXVDsxUUSQ8MAHoSEx.jpg',
        image: '../../assets/images/meat.jpg',
        loadBehaviour: 'lazy',
        context: 'Proteins',
        routeUrl: '/sea-food',
        status: 3
      },
      {
        label:'Groceries',
        icon:'fa-solid fa-basket-shopping',
        image: '../../assets/images/groceries.jpg',
        loadBehaviour: 'lazy',
        context: 'Kiranas Super Markets',
        routeUrl: '/groceries',
        status: 0
      },
      {
        label: 'Restaurants',
        icon: 'fa-solid fa-utensils',
        image: '../../assets/images/restaurant.jpg',
        loadBehaviour: 'lazy',
        context: 'All types of Cuisine around you',
        routeUrl: '/restaurant',
        status: 4
      },
      {
        label: 'Home Made',
        icon: 'fa-solid fa-house-chimney',
        image: '../../assets/images/home-made.jpg',
        loadBehaviour: 'lazy',
        context: 'All local Home flavours',
        routeUrl: '/home-made',
        status: 3
      },
      {
        label: 'Sweets & Snacks',
        icon: 'fa-solid fa-cookie-bite',
        image: '../../assets/images/snacks.jpg',
        loadBehaviour: 'lazy',
        context: 'Local Eats',
        routeUrl: '/sweets-and-snacks',
        status: 8
      },
      {
        label: 'Cakes & Ice cream',
        icon: 'fa-solid fa-ice-cream',
        image: '../../assets/images/cakes.jpg',
        loadBehaviour: 'lazy',
        context: 'Fresh bakes and desserts',
        routeUrl: '/cakes-and-icecreams',
        status: 2
      },
      {
        label: 'Exclusive Store',
        icon: 'fa-solid fa-store',
        image: '',
        loadBehaviour: 'lazy',
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
