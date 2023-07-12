import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuItem } from '@core/utils/menu-item';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoute, isEquals, isWithMenu } from '@core/utils/app-route';
import { Icon } from '@core/utils/icon';

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
      { icon: Icon.Home, isSelected: false, route: AppRoute.Home },
      {
        icon: Icon.Exchanges,
        isSelected: false,
        route: AppRoute.Exchanges,
      },
      {
        icon: Icon.Publication,
        isSelected: false,
        route: AppRoute.PublishArticle,
      },
      {
        icon: Icon.Profile,
        isSelected: false,
        route: AppRoute.Profile,
      },
    ];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.url;
        this.showMenu = isWithMenu(route);
        if (this.showMenu) {
          const menuItem =
            this.menuItems.find((item: MenuItem) =>
              isEquals(item.route, route)
            ) || this.menuItems[0];
          this.menuItemSelected(menuItem, false);
        }
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
