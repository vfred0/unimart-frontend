import { Component } from '@angular/core';
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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAllValues } from '@core/utils/enum-utils';
import { Icon } from '@core/types/icon';
import { ActivatedRoute } from '@angular/router';
import { getLayout } from '@core/utils/app-route';
import { Data } from '@core/utils/data';
import { Article } from '@core/models/article';

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
  ],
  templateUrl: './publish-article-page.component.html',
})
export class PublishArticlePageComponent {
  categories: Array<string>;
  states: Array<string>;
  genders: Array<string>;
  form: FormGroup;
  articleId: string;
  article: Article;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  protected readonly getLayout = getLayout;

  constructor(private activatedRoute: ActivatedRoute) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.genders = getAllValues(Gender);
    this.articleId = this.activatedRoute.snapshot.params['id'];

    if (this.articleId) {
      this.article = Data.article;
    } else {
      this.article = {
        id: Data.article.id,
        title: '',
        description: '',
        state: Data.article.state,
        category: Data.article.category,
        gender: Data.article.gender,
        images: Data.article.images,
      };
    }

    console.log(this.article);

    this.form = new FormGroup({
      title: new FormControl(this.article.title, [Validators.required]),
      description: new FormControl(this.article.description, [
        Validators.required,
      ]),
      state: new FormControl(this.article.state, [Validators.required]),
      category: new FormControl(this.article.category, [Validators.required]),
      gender: new FormControl(this.article.gender, [Validators.required]),
      images: new FormControl(this.article.images, [Validators.required]),
    });
  }

  get images(): Array<string> {
    return this.form.get('images')?.value;
  }

  get withGender(): boolean {
    return new CategoryService().isWithGender(this.form.get('category')?.value);
  }

  get containsImages(): boolean {
    return this.form.get('images')?.value.length > 0;
  }

  onTitleChanged(text: string) {
    this.setValue('title', text);
  }

  setValue(inputValue: string, value: string): void {
    this.form.get(inputValue)?.setValue(value);
  }

  onSelectedState(option: string) {
    this.setValue('state', option);
  }

  onSelectedCategory(option: string) {
    this.setValue('category', option);
  }

  onSelectedGender(gender: string) {
    this.setValue('gender', gender);
  }

  onDescriptionChanged(description: string) {
    this.setValue('description', description);
  }

  onDeleteImages() {
    this.form.get('images')?.setValue([]);
  }

  publishArticle() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
