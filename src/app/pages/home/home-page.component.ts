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
  categories: Array<string>;
  states: Array<string>;
  optionSelected: string;
  category: Category;
  articleCards: Array<ArticleCard>;

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.optionSelected = {} as string;
    this.category = Category.Clothing;
    this.articleCards = Data.articleCards;
  }

  onSelectedState(state: string) {
    this.cd.detectChanges();
    console.log(state);
  }

  onSelectedCategory(category: string) {
    this.cd.detectChanges();
    console.log(category);
  }

  redirectToViewArticle(articleCard: ArticleCard) {
    this.router.navigate([`/view-article/${articleCard.id}`]).then();
  }

  onTextSearchChanged(text: string) {
    console.log(text);
  }
}
