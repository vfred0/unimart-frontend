import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './gallery.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GalleryComponent {
    @Input() images: Array<string>;
    constructor() {
        this.images = [];
    }


}
