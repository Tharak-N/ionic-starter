import { NgIf } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf
  ]
})
export class HeaderComponent  implements OnInit {
  _showBackArrow: any = true;
  @Input() header?: any;
  @Input()
  set isBackFlag(value: any) {
    if(!!value){
      this._showBackArrow = false;
    }
    else {
      this._showBackArrow = true;
    }
  };
  get showBackArrow(){
    return this._showBackArrow;
  }
  @Output() isNavigateBack: EventEmitter<boolean> = new EventEmitter();



  /**Injectors */
  // private router = Inject(Router);
  private navCtrl = inject(NavController)

  constructor() { }

  ngOnInit() {
  }

  navigateBack(){
    setTimeout(() => {
      this.isNavigateBack.emit(true)
    }, 250)
  }

  getSize(){
    if(this.showBackArrow) {
      return 10
    }
    else {
      return 9
    }
  }

  navigateBack2(){
    console.log("the nav controller is", this.navCtrl, "\n",
    "methods are", this.navCtrl.back()
    )
  }

}
