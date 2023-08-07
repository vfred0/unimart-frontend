import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { MenuComponent } from '@components/menu/menu.component';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { SelectComponent } from '@components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { getAllValues } from '@core/utils/enum-utils';
import { getLayout } from '@core/utils/app-route';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { HomeService } from '@shared/services/home.service';
import { ArticleMapperService } from '@shared/mappers/article-mapper.service';
import { ArticleService } from '@shared/services/articles/article.service';
import { ArticleCardComponent } from '@components/article-card/article-card.component';

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
  providers: [HomeService, ArticleMapperService, ArticleService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  title: string;
  category: Category;
  state: State;
  categories: Array<string>;
  states: Array<string>;
  homeService: HomeService = inject(HomeService);
  articlesCards: Array<ArticleCardDto>;
  protected readonly getLayout = getLayout;

  constructor(private cd: ChangeDetectorRef) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.title = '';
    this.category = Category.TextBooksEducationalMaterial;
    this.state = State.New;
    this.articlesCards = [] as Array<ArticleCardDto>;
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
    const filterArticle = {
      title: this.title,
      category: this.category,
      state: this.state,
    };
    this.homeService.search(filterArticle);
    this.cd.detectChanges();
  }
}
