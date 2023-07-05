import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf
  ],
})
export class Tab1Page implements OnInit {
  showProgressStatus: boolean = true
  constructor() {}

  ngOnInit(): void {
    this.showLoadingProgress()
  }

  showLoadingProgress(){
    setTimeout(() => {
      this.showProgressStatus = false
    }, 2000)
  }
}
