import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from "angular-svg-icon";
import {MenuItem} from "@core/utils/menu-item";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule],
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    menuItems: Array<MenuItem>;

    constructor(private router: Router) {
        this.menuItems = [
            {icon: 'home', isSelected: true},
            {icon: 'exchanges', isSelected: false},
            {icon: 'publication', isSelected: false},
            {icon: 'profile', isSelected: false}
        ];
    }

    menuItemSelected(menuItem: MenuItem): void {
        this.menuItems = this.menuItems.map((item: MenuItem) => {
            if (!Object.is(item, menuItem)) {
                item = {...item, isSelected: false};
            } else {
                item = {...item, isSelected: true};
            }
            return item;
        });

        console.log(this.menuItems);

    }


}
