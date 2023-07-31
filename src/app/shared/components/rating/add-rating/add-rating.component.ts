import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { HeaderComponent } from '@components/header/header.component';
import { SelectComponent } from '@components/select/select.component';
import { getAllValues } from '@core/utils/enum-utils';
import { ScoreRating } from '@core/types/score-rating';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '@components/input/input.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TypeButton } from '@core/types/type-button';
import { Icon } from '@core/types/icon';
import { RatingDto } from '@core/dtos/rating/rating.dto';
import { ExchangesPageService } from '@shared/services/exchanges-page.service';

@Component({
  selector: 'app-add-rating',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    SelectComponent,
    InputComponent,
    AngularSvgIconModule,
  ],
  providers: [ExchangesPageService],
  templateUrl: './add-rating.component.html',
})
export class AddRatingComponent {
  scoreRatings: Array<string>;
  @Input() userId: string;
  @Input() exchangeId: string;
  form: FormGroup;
  protected readonly onselect = onselect;
  protected readonly TypeButton = TypeButton;
  private readonly service: ExchangesPageService;

  constructor() {
    this.scoreRatings = getAllValues(ScoreRating);
    this.userId = '';
    this.exchangeId = '';
    this.form = new FormGroup({
      score: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
    this.service = inject(ExchangesPageService);
  }

  onSelectedScoreRating(score: string) {
    this.form.get('score')?.setValue(score);
  }

  onChangeComment(comment: string) {
    this.form.get('comment')?.setValue(comment);
  }

  onRating() {
    const rating: RatingDto = {
      userId: this.userId,
      score: this.form.get('score')?.value,
      comment: this.form.get('comment')?.value,
    };
    console.log(
      `Rating: ${JSON.stringify(rating)}, exchangeId: ${this.exchangeId}`
    );
    this.service.addRating(this.exchangeId, rating);
  }

  protected readonly Icon = Icon;
}
