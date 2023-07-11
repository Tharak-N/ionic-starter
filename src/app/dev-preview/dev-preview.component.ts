import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dev-preview',
  templateUrl: './dev-preview.component.html',
  styleUrls: ['./dev-preview.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent
  ]
})
export class DevPreviewComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
