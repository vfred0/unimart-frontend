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
import { ArticleService } from '@shared/services/article.service';
import { AuthService } from '@shared/services/auth.service';
import { TypeArticle } from '@core/types/type-article';
import { ButtonSelectImageComponent } from '@components/button/button-select-image/button-select-image.component';
import { ImgurService } from '@shared/services/imgur.service';
import { ArticleSaveDto } from '@core/dtos/article-save.dto';

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
  providers: [ArticleService, AuthService],
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private authService: AuthService,
    private imgurService: ImgurService
  ) {
    this.categories = getAllValues(Category);
    this.states = getAllValues(State);
    this.genders = getAllValues(Gender);
    this.articleId = this.activatedRoute.snapshot.params['id'];
    this.form = new FormGroup({});

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
    this.initialForm();
  }

  get images(): Array<string> {
    return this.form.get('images')?.value;
  }

  get withGender(): boolean {
    return new CategoryService().isWithGender(this.form.get('category')?.value);
  }

  get containsImages(): boolean {
    return this.images.length > 0;
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
      const articleDto: ArticleSaveDto = {
        userId: this.authService.getUser().id,
        title: this.getValue('title'),
        description: this.getValue('description'),
        state: this.getValue('state') as State,
        category: this.getValue('category') as Category,
        gender: this.getValue('gender') as Gender,
        typeArticle: TypeArticle.Published,
        images: ['https://is.gd/I6j4Ye', 'https://is.gd/Y0ooLY'],
      };
      this.articleService.save(articleDto);
      this.article = {
        title: '',
        description: '',
        state: State.New,
        category: Category.TextBooksEducationalMaterial,
        gender: Gender.Male,
        images: [] as Array<string>,
      } as Article;
      this.initialForm();
    }
  }

  getValue(name: string): string {
    return this.form.get(name)?.value;
  }

  onImageSelected(image: string) {
    console.log('image', image);
    // this.imgurService.uploadImage(image).subscribe(response => {
    //   console.log(response);
    //   // const images = this.form.get('images')?.value;
    //   // images.push(response);
    //   // this.form.get('images')?.setValue(images);
    // });
  }

  private initialForm() {
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
}
