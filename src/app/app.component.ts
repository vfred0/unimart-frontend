import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '@components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent],
  template: `
    <div class="o-layout-max-width">
      <router-outlet></router-outlet>
      <app-menu />
    </div>
  `,
  styles: [],
})
export class AppComponent {}
