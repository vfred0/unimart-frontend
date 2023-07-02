import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {AngularSvgIconModule} from "angular-svg-icon";

@Component({
    standalone: true,
    selector: 'app-select',
    imports: [CommonModule, ReactiveFormsModule, AngularSvgIconModule],
    templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit, AfterViewInit {
    formSelect: FormGroup;
    @Output() onSelectedOption: EventEmitter<string>;
    @Input() options: string[];
    @Input() optionSelected: string;

    constructor(private cd: ChangeDetectorRef) {
        this.onSelectedOption = new EventEmitter<string>();
        this.options = [];
        this.formSelect = new FormGroup({});
        this.optionSelected = '';
    }

    ngOnInit(): void {
        this.optionSelected = this.options[0];
        this.formSelect = new FormGroup({
            select: new FormControl(this.optionSelected),
        });
        console.log(this.optionSelected);

        this.formSelect.get('select')!.valueChanges.subscribe(value => {
            this.onSelectedOption.emit(value);
        });

    }

    ngAfterViewInit(): void {
        this.onSelectedOption.emit(this.optionSelected);
        this.cd.detectChanges();
    }
}
