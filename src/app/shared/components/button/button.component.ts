import {Component, Input} from '@angular/core';
import {TypeButton} from "@core/types/type-button";
import {CommonModule} from "@angular/common";
import {AngularSvgIconModule} from "angular-svg-icon";


@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule, AngularSvgIconModule],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() description: string;
    @Input() typeButton: TypeButton;
    @Input() icon: string;
    constructor() {
        this.typeButton = TypeButton.Primary;
        this.description = this.typeButton;
        this.icon = 'hand';
    }

    get fontSize(): string {
        if (this.isTag()) {
            return 'sm-semibold';
        }
        return 'base-semibold';
    }

    get iconSize(): string {
        if (this.isTag()) {
            return 'sm';
        }
        return 'lg';
    }

    private isTag(): boolean {
        return this.typeButton === TypeButton.Tag;
    }
}