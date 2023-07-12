import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-input',
  imports: [AngularSvgIconModule, ReactiveFormsModule, NgIf],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() title: string;
  @Input() icon: Icon;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() isTextArea: boolean;
  @Output() textChanged: EventEmitter<string>;
  private inputForm: FormGroup;

  constructor() {
    this.icon = Icon.Search;
    this.isTextArea = false;
    this.placeholder = '';
    this.title = '';
    this.type = '';
    this.textChanged = new EventEmitter<string>();
    this.inputForm = new FormGroup({
      inputValue: new FormControl(''),
    });
    this.inputValue.valueChanges.subscribe(value => {
      this.textChanged.emit(value);
    });
  }

  get inputValue(): FormControl {
    return this.inputForm.get('inputValue') as FormControl;
  }

  get withTitle(): boolean {
    return this.title !== '';
  }
}
