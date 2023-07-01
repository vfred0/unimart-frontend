import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "@shared/components/button/button.component";
import {AngularSvgIconModule} from "angular-svg-icon";

@NgModule({
    declarations: [
        ButtonComponent
    ],
    exports: [
        ButtonComponent
    ],
    imports: [
        CommonModule,
        AngularSvgIconModule
    ]
})
export class ButtonModule {
}
