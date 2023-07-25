import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { HeaderComponent } from '@components/header/header.component';
import { InputComponent } from '@components/input/input.component';
import { MenuComponent } from '@components/menu/menu.component';
import { SelectComponent } from '@components/select/select.component';
import { Category, CategoryService } from '@core/types/category';
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
import { PublishArticleService } from '@shared/services/publish-article.service';

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
  providers: [ArticleService, PublishArticleService],
  templateUrl: './publish-article-page.component.html',
})
export class PublishArticlePageComponent {
  categories: Array<string>;
  states: Array<string>;
  genders: Array<string>;
  articleId: string;
  publishArticleService: PublishArticleService;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  protected readonly getLayout = getLayout;

  constructor(private activatedRoute: ActivatedRoute) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.genders = getAllValues(Gender);
    this.articleId = this.activatedRoute.snapshot.params['id'];
    this.publishArticleService = inject(PublishArticleService);

    if (this.articleId) {
      this.publishArticleService.setArticleById(this.articleId);
    }
  }

  get images(): Array<string> {
    return this.publishArticleService.article.images;
  }

  get withGender(): boolean {
    return new CategoryService().isWithGender(
      this.publishArticleService.article.category
    );
  }

  get containsImages(): boolean {
    return this.images.length > 0;
  }

  onTitleChanged(text: string) {
    this.publishArticleService.setValue('title', text);
  }

  setValue(inputValue: string, value: string): void {
    this.publishArticleService.setValue(inputValue, value);
  }

  onSelectedState(option: string) {
    this.publishArticleService.setValue('state', option);
  }

  onSelectedCategory(option: string) {
    this.publishArticleService.setCategory(option);
  }

  onSelectedGender(gender: string) {
    this.publishArticleService.setValue('gender', gender);
  }

  onDescriptionChanged(description: string) {
    this.publishArticleService.setValue('description', description);
  }

  onDeleteImages() {
    this.publishArticleService.deleteImages();
  }

  publishArticle() {
    this.publishArticleService.publishArticle();
  }

  onImageSelected(image: string) {
    console.log('image', image);
  }
}
