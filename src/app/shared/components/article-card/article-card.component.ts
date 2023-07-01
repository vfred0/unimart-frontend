import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ButtonModule} from "@components/button/button.module";
import {TypeButton} from "@core/types/type-button";
import {TypeArticle} from "@core/types/type-article";
import {ArticleCard} from "@core/models/articleCard";

@Component({
    selector: 'app-article-card',
    standalone: true,
    imports: [CommonModule, ButtonModule, NgOptimizedImage],
    templateUrl: './article-card.component.html'
})
export class ArticleCardComponent {
    @Input() articleCard: ArticleCard;
    @Input() typeArticle: TypeArticle;
    protected readonly TypeButton = TypeButton;
    protected readonly TypeArticle = TypeArticle;

    constructor() {
        this.typeArticle = TypeArticle.Normal;
        this.articleCard = {} as ArticleCard;
    }

    getProposalsQuantity(): string {
        return `${this.articleCard.proposalsQuantity} propuestas`;
    }
}