import { NgFor } from '@angular/common';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
  standalone: true,
  imports: [
    IonicModule, NgFor
  ]
})
export class AccordionsComponent  implements OnInit {
  @Input() section!: any

  constructor() { }

  ngOnInit() {
    // console.log("the value is", this.value)
    console.log("the section dara are", this.section)
  }

  ngOnChanges(changes: SimpleChange){
    console.log("changes are", changes, this.section)
  }

}
