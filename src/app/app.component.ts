import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '@components/menu/menu.component';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, HeaderComponent],
  template: `
    <div class="o-layout-max-width">
      <app-header />
      <router-outlet></router-outlet>
      <app-menu />
    </div>
  `,
  styles: [],
})
export class AppComponent {}
