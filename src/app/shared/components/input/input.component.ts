import {Component, Input} from '@angular/core';
import {AngularSvgIconModule} from "angular-svg-icon";

@Component({
    standalone: true,
    selector: 'app-input',
    imports: [AngularSvgIconModule],
    templateUrl: './input.component.html',
})
export class InputComponent {
    @Input() styles: string = '';
    @Input() icon: string = 'search.svg';
    @Input() placeholder: string = 'Placeholder';
    @Input() type: string = 'Text';
    @Input() formControlName: string = '';
}