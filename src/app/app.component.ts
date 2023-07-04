import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MenuComponent],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  openMenu(){
    this.router.navigate(['/menu'], {relativeTo: this.route})
  }
}
