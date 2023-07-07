// import { NoopAnimationPlayer, animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AnimationController, Animation, IonicModule } from '@ionic/angular';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface Notification {
  title: string,
  context: string,
  icon: string
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  standalone: true,
  // animations: [
  //   trigger('fadeInOut', [
  //     // state('open', style({
  //     //   height: '200px',
  //     //   opacity: 1,
  //     //   backgroundColor: 'yellow'
  //     // })),

  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('300ms', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [
  //       animate('300ms', style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
  imports: [
    NgFor, NgClass, NgIf,
    IonicModule
    // BrowserAnimationsModule
  ]
})
export class NotificationsComponent  implements OnInit {
  @ViewChild('notification') notification!: ElementRef;

  allNotifications: Array<Notification> = []
  isLoaded: boolean = false;

  private router = inject(Router)
  private animationControl = inject(AnimationController)

  constructor() {
  }

  ngOnInit() {
    // this.settingTransitions()
    this.isLoaded = false
    this.settingNotifications()
  }

  settingNotifications(){
    this.allNotifications.push(
      {
        title: 'You have rewards from Myntra based on your preferences',
        context: 'Check them out now.',
        icon: 'fa-solid fa-shop notification-icons'
      },
      {
        title: 'Pay Rent with a Credit Card. Get 45 daysof interest-free credit.',
        context: 'Transfer rent now.',
        icon: 'fa-solid fa-fish'
      },
      {
        title:'Get Bike Insurance on PhonePe at less than $2/day*',
        context: 'Insurance now without paperwork!',
        icon: 'fa-solid fa-car'
      }
    )
    setTimeout(() => {
      this.isLoaded = true
    }, 2000)
  }


  settingTransitions(){
    const animation: Animation = this.animationControl.create()
    .addElement(this.notification.nativeElement)
    .duration(3000)
    .easing('easing-in-out')
    .fromTo('opacity', '0', '1');

    animation.play()
  }

  navigateBack(){
    setTimeout(()=>{
      this.router.navigate([''])
    }, 190)
  }

}
