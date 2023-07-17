import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class SearchPageComponent  implements OnInit {
  @Input() isSearchModalOpen!: boolean;
  @Output() isSearchModalClosed: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  ngOnDestroy(){
    this.isSearchModalClosed.emit(true);
  }

}
