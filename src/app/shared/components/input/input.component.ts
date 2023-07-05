import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-input',
    imports: [AngularSvgIconModule, ReactiveFormsModule, NgIf],
    templateUrl: './input.component.html',
})
export class InputComponent {
    @Input() icon: string;
    @Input() placeholder: string;
    @Input() title: string;
    @Input() isTextArea: boolean;
    @Output() onTextChanged: EventEmitter<string>;
    private inputForm: FormGroup;

    constructor() {
        this.icon = 'search';
        this.isTextArea = false;
        this.placeholder = '';
        this.title = '';

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

    get withTitle(): boolean {
        return this.title !== '';
    }
}