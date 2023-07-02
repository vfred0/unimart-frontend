import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@components/header/header.component";
import {ActivatedRoute} from "@angular/router";
import {ButtonComponent} from "@components/button/button.component";
import {TypeButton} from "@core/types/type-button";

@Component({
    selector: 'app-view-article-page',
    standalone: true,
    imports: [HeaderComponent, CommonModule, ButtonComponent],
    templateUrl: './view-article-page.component.html'
})
export class ViewArticlePageComponent {

    protected readonly TypeButton = TypeButton;

    constructor(private activatedRoute: ActivatedRoute) {
        console.log(this.activatedRoute.snapshot.params['id']);
    }
}
