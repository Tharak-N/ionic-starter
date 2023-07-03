import { AfterViewInit, Component, ElementRef, EnvironmentInjector, ViewChild, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage implements AfterViewInit{
  offSetHeight: any;
  // @ViewChild('appHeader', { read: ElementRef}) appHeader!: ElementRef;
  public environmentInjector = inject(EnvironmentInjector);

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
}
