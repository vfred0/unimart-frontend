import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuItem } from '@core/utils/menu-item';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoute, isWithMenu } from '@core/utils/app-route';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menuItems: Array<MenuItem>;
  showMenu: boolean;

  constructor(private router: Router) {
    this.showMenu = false;
    this.menuItems = [
      { icon: 'home', isSelected: false, route: AppRoute.Home },
      {
        icon: 'exchanges',
        isSelected: false,
        route: AppRoute.Exchanges,
      },
      {
        icon: 'publication',
        isSelected: false,
        route: AppRoute.PublishArticle,
      },
      {
        icon: 'profile',
        isSelected: false,
        route: AppRoute.Profile,
      },
    ];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.url.split('/')[1];
        this.showMenu = isWithMenu(route);
        const menuItem =
          this.menuItems.find((item: MenuItem) => item.route === route) ||
          this.menuItems[0];
        this.menuItemSelected(menuItem, false);
      }
    });
  }

  menuItemSelected(menuItem: MenuItem, redirect = true): void {
    this.menuItems = this.menuItems.map((item: MenuItem) => {
      if (!Object.is(item, menuItem)) {
        item = { ...item, isSelected: false };
      } else {
        item = { ...item, isSelected: true };
        if (redirect) {
          this.router.navigate([item.route]).then();
        }
      }
      return item;
    });
  }
}
