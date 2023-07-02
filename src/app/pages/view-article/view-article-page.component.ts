import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@components/header/header.component";
import {ActivatedRoute} from "@angular/router";
import {ButtonComponent} from "@components/button/button.component";
import {TypeButton} from "@core/types/type-button";
import {Article} from "@core/models/article";
import {Category} from "@core/types/category";
import {State} from "@core/types/state";

@Component({
    selector: 'app-view-article-page',
    standalone: true,
    imports: [HeaderComponent, CommonModule, ButtonComponent],
    templateUrl: './view-article-page.component.html'
})
export class ViewArticlePageComponent {
    article: Article;
    protected readonly TypeButton = TypeButton;

    constructor(private activatedRoute: ActivatedRoute) {
        console.log(this.activatedRoute.snapshot.params['id']);
        this.article = {
            id: 1,
            image: 'https://picsum.photos/200/300',
            title: 'Teclado Mecánico Logitech',
            description: 'Este teclado me lo dieron de regalo, está nuevo, apenas lo usé para comprobar que funciona, entrgo con su caja y accesorios.',
            datePublished: 'Hace 2 días',
            proposalsQuantity: 3,
            category: Category.SportingGoods,
            state: State.New,
            user: {
                image: 'https://picsum.photos/200/300',
                name: 'Juan Perez',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ' +
                    'consectetur aliquam, nisl nisl aliquet nisl, euismod. ',
                rating: 4,
                numberOfExchanges: 5
            },
            gallery: [
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
            ]
        }
    }

    get proposalsQuantity(): string {
        return this.article.proposalsQuantity > 1 ? `${this.article.proposalsQuantity} propuestas` : `${this.article.proposalsQuantity} propuesta`;
    }

    get rating(): string {
        return this.article.user.rating.toString();
    }

    get exchangesQuantity(): string {
        return this.article.user.numberOfExchanges > 1 ? `${this.article.user.numberOfExchanges} intercambios` : `${this.article.user.numberOfExchanges} intercambio`;
    }
}