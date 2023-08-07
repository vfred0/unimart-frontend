import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuItem } from '@core/utils/menu-item';
import { NavigationEnd, Router } from '@angular/router';
import {
  AppRoute,
  isEqualsRoute,
  isWithMenu,
  setRoute,
} from '@core/utils/app-route';
import { Icon } from '@core/enums/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnDestroy {
  menuItems: Array<MenuItem>;
  showMenu: boolean;
  private routerSubscription: Subscription;

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

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        setRoute(currentUrl);
        this.showMenu = isWithMenu();
        if (this.showMenu) {
          for (const menuItem of this.menuItems) {
            if (isEqualsRoute(menuItem.route)) {
              this.menuItemSelected(menuItem, false);
            }
          }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
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
