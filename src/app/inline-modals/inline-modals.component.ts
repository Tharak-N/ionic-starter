import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inline-modals',
  templateUrl: './inline-modals.component.html',
  styleUrls: ['./inline-modals.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    HeaderComponent
  ]
})
export class InlineModalsComponent  implements OnInit {
  @Input() isModalOpen!: boolean;
  @Output() isModalClose: EventEmitter<boolean> = new EventEmitter();

  header: string = '';

  // private router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.header = 'Items List'
  }

  navigateToBackPage(event: any){
    if(event){
      this.isModalClose.emit(true);
    }
  }

  openSearchPage(){
    // this.isOpenSearchPage.emit(true);
  }

  ngOnDestroy(){
    console.warn("the vent is destroyed")
  }

}
