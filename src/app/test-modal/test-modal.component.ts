import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class TestModalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
