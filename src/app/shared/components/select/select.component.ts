import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {AngularSvgIconModule} from "angular-svg-icon";
import {Category, CategoryService} from "@core/types/category";
import {EnumUtils} from "@core/types/enum-utils";

@Component({
    standalone: true,
    selector: 'app-select',
    imports: [CommonModule, ReactiveFormsModule, AngularSvgIconModule],
    templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
    formSelect: FormGroup;
    @Output() onSelectedOption: EventEmitter<string>;
    @Input() options: string[];
    @Input() optionSelected: string;
    @Input() title: string;
    categoryIncludes: string;

    constructor() {
        this.title = '';
        this.onSelectedOption = new EventEmitter<string>();
        this.options = [];
        this.formSelect = new FormGroup({});
        this.optionSelected = '';
        this.categoryIncludes = '';
    }

    get withTitle(): boolean {
        return this.title !== '';
    }

    get withIncludes(): boolean {
        return this.categoryIncludes !== '';
    }

    ngOnInit(): void {
        this.optionSelected = this.options[0];
        this.formSelect = new FormGroup({
            select: new FormControl(this.optionSelected),
        });

        this.formSelect.get('select')!.valueChanges.subscribe(optionSelected => {
            this.onSelectedOption.emit(optionSelected);
            this.updateIncludes(optionSelected);
        });
        this.onSelectedOption.emit(this.optionSelected);
        this.updateIncludes(this.optionSelected);
    }

    private updateIncludes(optionSelected: string) {
        if (EnumUtils.containsValue(Category, optionSelected)) {
            this.categoryIncludes = new CategoryService().getIncludes(optionSelected as Category)
        }
    }
}
