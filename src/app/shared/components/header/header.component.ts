import {Component, Input} from '@angular/core';
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
    @Input() isBack: boolean;
    protected readonly TypeButton = TypeButton;

    constructor() {
        this.isActive = false;
        this.isBack = false;
    }

    togglePreferences() {
        this.isActive = !this.isActive;
    }

    redirectToBack() {

    }
}
