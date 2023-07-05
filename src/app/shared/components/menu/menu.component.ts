import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from "angular-svg-icon";
import {MenuItem} from "@core/utils/menu-item";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AppRoute} from "@core/utils/app-route";

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule],
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    menuItems: Array<MenuItem>;
    showMenu: boolean;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.showMenu = true;
        this.menuItems = [
            {icon: 'home', isSelected: true, route: AppRoute.Home},
            {icon: 'exchanges', isSelected: false, route: AppRoute.Exchanges},
            {icon: 'publication', isSelected: false, route: AppRoute.PublishArticle},
            {icon: 'profile', isSelected: false, route: AppRoute.Profile}
        ];

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.showMenu = AppRoute.isWithMenu(event.url);
            }
        });
    }

    menuItemSelected(menuItem: MenuItem): void {
        this.menuItems = this.menuItems.map((item: MenuItem) => {
            if (!Object.is(item, menuItem)) {
                item = {...item, isSelected: false};
            } else {
                item = {...item, isSelected: true};
                this.router.navigate([item.route]);
            }
            return item;
        });
    }
}
