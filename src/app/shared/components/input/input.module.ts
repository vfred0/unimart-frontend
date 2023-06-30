import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {InputComponent} from './input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, AngularSvgIconModule.forRoot(), HttpClientModule, ReactiveFormsModule],
  exports: [InputComponent],
})
export class InputModule {
}
