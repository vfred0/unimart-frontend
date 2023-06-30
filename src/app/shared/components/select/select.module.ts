import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SelectComponent} from './select.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, ReactiveFormsModule, AngularSvgIconModule.forRoot()],
  exports: [SelectComponent],
})
export class SelectModule {
}
