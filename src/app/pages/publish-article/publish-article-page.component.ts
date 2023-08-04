import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { HeaderComponent } from '@components/header/header.component';
import { InputComponent } from '@components/input/input.component';
import { MenuComponent } from '@components/menu/menu.component';
import { SelectComponent } from '@components/select/select.component';
import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { Gender } from '@core/types/gender';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { getAllValues } from '@core/utils/enum-utils';
import { Icon } from '@core/types/icon';
import { ActivatedRoute } from '@angular/router';
import { getLayout } from '@core/utils/app-route';
import { ArticleService } from '@shared/services/article.service';
import { ButtonSelectImageComponent } from '@components/button/button-select-image/button-select-image.component';
import { PublishArticlePageService } from '@shared/services/publish-article-page.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ArticleCardComponent,
    HeaderComponent,
    InputComponent,
    MenuComponent,
    SelectComponent,
    GalleryComponent,
    ButtonComponent,
    ButtonSelectImageComponent,
  ],
  providers: [ArticleService, PublishArticlePageService],
  templateUrl: './publish-article-page.component.html',
})
export class PublishArticlePageComponent {
  categories: Array<string>;
  states: Array<string>;
  genders: Array<string>;
  articleId: string;
  service: PublishArticlePageService;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  protected readonly getLayout = getLayout;

  constructor(private activatedRoute: ActivatedRoute) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.genders = getAllValues(Gender);
    this.articleId = this.activatedRoute.snapshot.params['id'];
    this.service = inject(PublishArticlePageService);
    if (this.articleId) {
      this.service.setArticleById(this.articleId);
    }
  }

  onTitleChanged(text: string) {
    this.service.setValue('title', text);
  }

  onSelectedState(option: string) {
    this.service.setValue('state', option);
  }

  onSelectedCategory(option: string) {
    this.service.setCategory(option);
  }

  onSelectedGender(gender: string) {
    this.service.setValue('gender', gender);
  }

  onDescriptionChanged(description: string) {
    this.service.setValue('description', description);
  }

  onImageSelected(image: string) {
    console.log('image', image);
  }

  publishArticle() {
    if (this.articleId) {
      this.service.publishArticle(true);
    } else {
      this.service.publishArticle(false);
    }
  }
}
