import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, CommonModule],
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent {

}
