import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@components/header/header.component";

@Component({
    selector: 'app-view-article-page',
    standalone: true,
    imports: [HeaderComponent, CommonModule],
    templateUrl: './view-article-page.component.html'
})
export class ViewArticlePageComponent {

}
