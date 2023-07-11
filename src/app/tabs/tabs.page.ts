import { AfterViewInit, Component, ElementRef, EnvironmentInjector, ViewChild, inject } from '@angular/core';
import { AnimationController,Animation, IonicModule, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage implements AfterViewInit{
  offSetHeight: any;
  @ViewChild('ionTabs') ionTabs!: IonTabs;
  public environmentInjector = inject(EnvironmentInjector);
  private animationControl = inject(AnimationController)

  constructor(
  ) {}

  ngOnInit(){
    console.log("reacing the ng on in it iun tabs page")
  }

  ngAfterViewInit(){
    // console.log("reaching the ng after view init")
    // this.offSetHeight = this.appHeader.nativeElement.offsetHeight;
    // console.log("the offset height is", this.offSetHeight)
  }

  onTabChange(event: any){
    let nativeEl = this.ionTabs.outlet.nativeEl
    const animation: Animation = this.animationControl.create()
    .addElement(nativeEl)
    .duration(350)
    .iterations(1)
    .fromTo('transform',
      'translateX(100%)',
      'translateX(0%)'
    )
    .easing('ease-in-out')
    .fromTo(
      'opacity', '0', '1'
    )
    animation.play();
  }
}
