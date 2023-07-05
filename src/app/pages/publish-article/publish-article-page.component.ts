import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCardComponent} from "@components/article-card/article-card.component";
import {HeaderComponent} from "@components/header/header.component";
import {InputComponent} from "@components/input/input.component";
import {MenuComponent} from "@components/menu/menu.component";
import {SelectComponent} from "@components/select/select.component";
import {EnumUtils} from "@core/types/enum-utils";
import {Category, CategoryService} from "@core/types/category";
import {State} from "@core/types/state";
import {Gender} from "@core/types/gender";
import {GalleryComponent} from "@components/gallery/gallery.component";
import {ButtonComponent} from "@components/button/button.component";
import {TypeButton} from "@core/types/type-button";

@Component({
    selector: 'app-publish-article-page',
    standalone: true,
    imports: [CommonModule, ArticleCardComponent, HeaderComponent, InputComponent, MenuComponent, SelectComponent, GalleryComponent, ButtonComponent],
    templateUrl: './publish-article-page.component.html'
})
export class PublishArticlePageComponent {
    category: Category;
    categories: Array<string>;
    states: Array<string>;
    genders: Array<string>;
    images: Array<string>;
    protected readonly TypeButton = TypeButton;

    constructor() {
        this.categories = EnumUtils.getAllValues(Category);
        this.states = EnumUtils.getAllValues(State);
        this.category = '' as Category;
        this.genders = EnumUtils.getAllValues(Gender);
        this.images = [];

    }

    get withGender(): boolean {
        return new CategoryService().isWithGender(this.category);
    }

    get containsImages(): boolean {
        return this.images.length > 0;
    }

    onTitleChanged(text: string) {
        console.log(text);
    }

    onSelectedState(option: string) {
        console.log(option);
    }

    onSelectedCategory(option: string) {
        this.category = option as Category;
    }
}
