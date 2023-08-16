import { ArticleSaveDto } from '@core/dtos/article/article-save.dto';
import { State } from '@core/enums/state';
import { Category, CategoryService } from '@core/enums/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleDto } from '@core/dtos/article/article.dto';

export class ArticleForm {
  private readonly form: FormGroup;

  constructor() {
    const article: ArticleSaveDto = {
      title: '',
      description: '',
      state: State.New,
      category: Category.TextBooksEducationalMaterial,
      images: [] as Array<string>,
    } as ArticleSaveDto;
    this.form = new FormGroup({
      title: new FormControl(article.title, [Validators.required]),
      description: new FormControl(article.description, [Validators.required]),
      state: new FormControl(State.New, [Validators.required]),
      category: new FormControl(Category.TextBooksEducationalMaterial, [
        Validators.required,
      ]),
      gender: new FormControl(null),
      images: new FormControl(article.images, [Validators.required]),
    });
  }

  get gender(): string {
    return this.withGender ? (this.article.gender as string) : '';
  }

  get withGender(): boolean {
    return new CategoryService().isWithGender(this.article.category);
  }

  get article(): ArticleDto {
    return this.form.value as ArticleDto;
  }

  get isFormValid(): boolean {
    return this.form.valid;
  }

  getValue(name: string) {
    return this.form.get(name)?.value;
  }

  articleToSaveOrUpdate() {
    const article: ArticleDto = this.article;
    if (!this.withGender) {
      article.title = this.getValue('title');
      article.description = this.getValue('description');
      article.state = this.getValue('state');
      article.category = this.getValue('category');
      article.images = this.getValue('images');
    }
    return article;
  }

  addImage(image: string) {
    this.article.images.push(image);
    this.updateImages();
  }

  setValuesFromArticle(article: ArticleDto) {
    this.setValue('title', article.title);
    this.setValue('description', article.description);
    this.setValue('state', article.state);
    this.setValue('category', article.category);
    this.setValue('gender', article.gender);
    this.form.get('images')?.setValue(article.images);
  }

  deleteImages() {
    this.article.images = [];
    this.updateImages();
  }

  setValue(name: string, value: string) {
    this.form.get(name)?.setValue(value);
  }

  private updateImages() {
    this.form.get('images')?.setValue(this.article.images);
  }
}
