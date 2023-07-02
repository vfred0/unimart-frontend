import {NgModule} from '@angular/core';
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot()
    ]
})
export class SvgIconModule {
}
