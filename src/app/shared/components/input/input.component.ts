import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
})
export class InputComponent {
    @Input() styles: string = '';
    @Input() icon: string = 'search.svg';
    @Input() placeholder: string = 'Placeholder';
    @Input() type: string = 'Text';
    @Input() formControlName: string = '';
}