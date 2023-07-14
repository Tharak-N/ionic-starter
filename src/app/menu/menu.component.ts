import { NgClass, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Animation, AnimationController, IonHeader, IonicModule } from '@ionic/angular';

interface Menu {
  label: string,
  routeUrl: string,
  icon: string,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    // BrowserAnimationsModule,
    NgFor, NgClass, NgIf, NgStyle, NgSwitch
  ]
})
export class MenuComponent  implements OnInit {
  @ViewChild('appHeader') appHeader!: ElementRef

  menuOptions: Array<Menu> = [];
  userName: string = '';
  userLocation: string = '';

  private router = inject(Router);
  private animationControl = inject(AnimationController);

  constructor() { }

  ngOnInit() {
    this.userName = 'Tharak'
    this.userLocation = 'T.Nagar, Chennai'
    this.settingMenuOptions()
  }

  settingMenuOptions(){
    this.menuOptions.push(
      {
        label: 'My Profile',
        routeUrl: '/user-profile',
        icon: 'person'
      },
      {
        label: 'Change Location',
        routeUrl: '/dev-preview',
        icon: 'location'
      },
      {
        label: 'Pass Code',
        routeUrl: '/dev-preview',
        icon: 'finger-print'
      },
      {
        label: 'Invite Friend',
        routeUrl: '/dev-preview',
        icon: 'mail'
      },
      {
        label: 'Refer Shop',
        routeUrl: '/dev-preview',
        icon: 'share-social'
      },
      {
        label: 'Feedback',
        routeUrl: '/dev-preview',
        icon: 'receipt'
      },
      {
        label: 'About',
        routeUrl: '/dev-preview',
        icon: 'information-circle'
      }
    )
  }

  openNotification(){
    setTimeout(()=>{
      this.router.navigate(['/notifications'])
    }, 220)
    this.settingNotificationTransition()
  }

  settingNotificationTransition(){
    console.warn("the app header is", this.appHeader.nativeElement)
    // const animation: Animation = this.animationControl.create()
    // .addElement(this.appHeader.nativeElement)
    // .duration(3000)
    // .easing('easing-in-out')
    // // .fromTo('opacity', '0', '1');
    // animation.play()
  }

  openMenu(routeUrl: string) {
    this.router.navigate([routeUrl])
  }

  menuToggle(event: any){
    console.warn("event is", event)
  }

}
