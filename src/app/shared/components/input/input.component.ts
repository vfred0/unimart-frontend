import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    standalone: true,
    selector: 'app-input',
    imports: [AngularSvgIconModule, ReactiveFormsModule],
    templateUrl: './input.component.html',
})
export class InputComponent {
    @Input() styles: string = '';
    @Input() icon: string = 'search.svg';
    @Input() placeholder: string = 'Placeholder';
    @Input() type: string = 'Text';
    @Output() onTextChanged: EventEmitter<string>;

    private inputForm: FormGroup;

    constructor() {
        this.onTextChanged = new EventEmitter<string>();
        this.inputForm = new FormGroup({
            inputValue: new FormControl('')
        });
        this.inputValue.valueChanges.subscribe(value => {
            this.onTextChanged.emit(value);
        });
    }

    get inputValue(): FormControl {
        return this.inputForm.get('inputValue') as FormControl;
    }
}