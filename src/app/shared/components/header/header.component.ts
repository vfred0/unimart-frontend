import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from "angular-svg-icon";
import {ButtonComponent} from "@components/button/button.component";
import {TypeButton} from "@core/types/type-button";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule, ButtonComponent],
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent {
    @Input() isBack: boolean;
    @Input() title: string;

    isActive: boolean;
    protected readonly TypeButton = TypeButton;

    constructor(private router: Router) {
        this.isActive = false;
        this.isBack = false;
        this.title = 'Victor Arreaga';
    }

    togglePreferences() {
        this.isActive = !this.isActive;
    }

    redirectToBack() {
        this.router.navigate(['/']).then();
    }
}
