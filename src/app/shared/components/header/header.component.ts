import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from "angular-svg-icon";
import {ButtonComponent} from "@components/button/button.component";
import {TypeButton} from "@core/types/type-button";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule, ButtonComponent],
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent {
    isActive: boolean;

    constructor() {
        this.isActive = false;
    }

    togglePreferences() {
        this.isActive = !this.isActive;
    }

    protected readonly TypeButton = TypeButton;
}
