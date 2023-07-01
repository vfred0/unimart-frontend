import {Component, Input} from '@angular/core';
import {TypeButton} from "@core/types/type-button";


@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() description: string;
    @Input() typeButton: TypeButton;
    @Input() icon: string;
    protected readonly TypeButton = TypeButton;

    constructor() {
        this.typeButton = TypeButton.Primary;
        this.description = this.typeButton;
        this.icon = 'hand';
    }
}