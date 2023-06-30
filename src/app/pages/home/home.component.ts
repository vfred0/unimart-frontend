import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@shared/components/header/header.component";
import {InputModule} from "@shared/components/input/input.module";
import {SelectModule} from "@shared/components/select/select.module";
import {Category} from "@core/types/category";
import {EnumUtils} from "@core/types/enum-utils";
import {State} from "@core/types/state";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, CommonModule, InputModule, SelectModule],
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent {
    categories: Array<string>;
    states: Array<string>;
    optionSelected: string;
    category: Category;

    constructor(private cd: ChangeDetectorRef) {
        this.categories = EnumUtils.getAllValues(Category);
        this.states = State.getAllValues();
        this.optionSelected = {} as string;
        this.category = Category.Clothing;
    }

    onSelectedState(state: string) {

        this.cd.detectChanges();
    }

    onSelectedCategory(category: string) {
        this.cd.detectChanges();
    }

}
