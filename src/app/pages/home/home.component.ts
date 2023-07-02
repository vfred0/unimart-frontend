import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@shared/components/header/header.component";
import {InputModule} from "@shared/components/input/input.module";
import {SelectModule} from "@shared/components/select/select.module";
import {Category} from "@core/types/category";
import {EnumUtils} from "@core/types/enum-utils";
import {State} from "@core/types/state";
import {ArticleCardComponent} from "@components/article-card/article-card.component";
import {ArticleCard} from "@core/models/articleCard";
import {MenuComponent} from "@components/menu/menu.component";
import {ButtonComponent} from "@components/button/button.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, CommonModule, InputModule, SelectModule, ButtonComponent, ArticleCardComponent, MenuComponent],
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent {
    categories: Array<string>;
    states: Array<string>;
    optionSelected: string;
    category: Category;
    articleCards: Array<ArticleCard>;

    constructor(private cd: ChangeDetectorRef) {
        this.categories = EnumUtils.getAllValues(Category);
        this.states = State.getAllValues();
        this.optionSelected = {} as string;
        this.category = Category.Clothing;
        this.articleCards = [
            {
                image: 'https://source.unsplash.com/featured/?electronics,laptop',
                title: 'Ryzen 4600G',
                dateOfPublication: 'Hoy',
                proposalsQuantity: 5,
                category: Category.Electronics,
                state: State.New
            },
            {
                image: 'https://source.unsplash.com/featured/?electronics,laptop',
                title: 'MacBook Pro 2021',
                dateOfPublication: 'Ayer',
                proposalsQuantity: 3,
                category: Category.Electronics,
                state: State.Preowned
            },
            {
                image: 'https://source.unsplash.com/featured/?electronics,phone',
                title: 'Samsung Galaxy S21',
                dateOfPublication: 'Hace 1 día',
                proposalsQuantity: 8,
                category: Category.Electronics,
                state: State.Used
            },
            {
                image: 'https://source.unsplash.com/featured/?electronics,camera',
                title: 'Canon EOS R5',
                dateOfPublication: 'Hace 2 días',
                proposalsQuantity: 2,
                category: Category.Electronics,
                state: State.LowQuality
            },
            {
                image: 'https://source.unsplash.com/featured/?books,reading',
                title: 'Harry Potter and the Philosopher\'s Stone',
                dateOfPublication: 'Hoy',
                proposalsQuantity: 1,
                category: Category.TextBooksEducationalMaterial,
                state: State.New
            },
            {
                image: 'https://source.unsplash.com/featured/?books,novel',
                title: 'The Great Gatsby',
                dateOfPublication: 'Ayer',
                proposalsQuantity: 0,
                category: Category.TextBooksEducationalMaterial,
                state: State.Preowned
            },
            {
                image: 'https://source.unsplash.com/featured/?books,fantasy',
                title: 'El señor de los anillos',
                dateOfPublication: 'Hace 1 día',
                proposalsQuantity: 4,
                category: Category.TextBooksEducationalMaterial,
                state: State.Used
            },
            {
                image: 'https://source.unsplash.com/featured/?art,painting',
                title: 'Pintura al óleo',
                dateOfPublication: 'Hace 2 días',
                proposalsQuantity: 3,
                category: Category.ArtsHandicrafts,
                state: State.New
            },
            {
                image: 'https://source.unsplash.com/featured/?music,guitar',
                title: 'Guitarra acústica',
                dateOfPublication: 'Hoy',
                proposalsQuantity: 6,
                category: Category.MusicalInstruments,
                state: State.Used
            },

        ];

    }

    onSelectedState(state: string) {

        this.cd.detectChanges();
    }

    onSelectedCategory(category: string) {
        this.cd.detectChanges();
    }
}
