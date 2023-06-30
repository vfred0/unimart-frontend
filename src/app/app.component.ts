import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="o-layout-main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
}
