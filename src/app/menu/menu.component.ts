import { NgClass, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Animation, AnimationController, IonHeader, IonicModule } from '@ionic/angular';

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
  private router = inject(Router);
  private animationControl = inject(AnimationController);

  constructor() { }

  ngOnInit() {}

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


}
