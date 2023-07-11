import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class HeaderComponent  implements OnInit {
  @Input({required: true}) header!: string;
  @Output() isNavigateBack: EventEmitter<boolean> = new EventEmitter();

  /**Injectors */
  // private router = Inject(Router);

  constructor() { }

  ngOnInit() {}

  navigateBack(){
    setTimeout(() => {
      this.isNavigateBack.emit(true)
    }, 250)
  }

}
