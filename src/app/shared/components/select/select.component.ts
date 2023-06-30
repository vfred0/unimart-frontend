import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-select',
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
