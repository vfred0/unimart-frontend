import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ArticleCard } from '@core/models/article-card';
import { MenuComponent } from '@components/menu/menu.component';
import { ButtonComponent } from '@components/button/button.component';
import { Router } from '@angular/router';
import { InputComponent } from '@components/input/input.component';
import { SelectComponent } from '@components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { getAllValues } from '@core/types/enum-utils';
import { Data } from '@core/utils/data';
import { getLayout } from '@core/utils/app-route';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    InputComponent,
    SelectComponent,
    ButtonComponent,
    ArticleCardComponent,
    MenuComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home-page.component.html',
  styles: [],
})
export class HomePageComponent {
  title: string;
  category: Category;
  state: State;
  categories: Array<string>;
  states: Array<string>;
  articleCards: Array<ArticleCard>;
  protected readonly getLayout = getLayout;

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.title = '';
    this.category = {} as Category;
    this.state = {} as State;
    this.articleCards = Data.articleCards;
  }

  onSelectedState(state: string) {
    this.state = state as State;
    this.updateArticleCards();
  }

  onSelectedCategory(category: string) {
    this.category = category as Category;
    this.updateArticleCards();
  }

  onTextSearchChanged(title: string) {
    this.title = title;
    this.updateArticleCards();
  }

  private updateArticleCards() {
    this.articleCards = Data.articleCards.filter(
      articleCard =>
        articleCard.state === this.state &&
        articleCard.category === this.category &&
        articleCard.title.toLowerCase().includes(this.title.toLowerCase())
    );
    this.cd.detectChanges();
  }
}
