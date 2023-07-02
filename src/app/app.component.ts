import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SvgIconModule} from "@components/svg-icon/svg-icon.module";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SvgIconModule],
    template: `
        <div class="o-layout-max-width">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [],
})
export class AppComponent {
}
