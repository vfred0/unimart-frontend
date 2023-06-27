import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
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

}
