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
import { getAllValues } from '@core/types/enum-utils';
import { Icon } from '@core/utils/icon';
import { ActivatedRoute } from '@angular/router';
import { getLayout } from '@core/utils/app-route';

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
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor(private activatedRoute: ActivatedRoute) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.genders = getAllValues(Gender);
    console.info(
      `Debug:  Edit article ${this.activatedRoute.snapshot.params['id']}`
    );

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      state: new FormControl(this.states[0], [Validators.required]),
      category: new FormControl(this.categories[0], [Validators.required]),
      gender: new FormControl(this.genders[0], [Validators.required]),
      images: new FormControl(
        [
          'https://source.unsplash.com/featured/?electronics,laptop',
          'https://source.unsplash.com/featured/?electronics,laptop',
          'https://source.unsplash.com/featured/?electronics,laptop',
        ],
        [Validators.required]
      ),
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

  protected readonly getLayout = getLayout;
}
