import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
import { Router } from '@angular/router';

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
  templateUrl: './add-rating.component.html',
  providers: [ExchangesPageService],
})
export class AddRatingComponent {
  scoreRatings: Array<string>;
  @Input() userId: string;
  @Input() exchangeId: string;
  @Output() saveRating: EventEmitter<void>;
  form: FormGroup;
  protected readonly onselect = onselect;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  private readonly service: ExchangesPageService;

  constructor(private router: Router) {
    this.scoreRatings = getAllValues(ScoreRating);
    this.userId = '';
    this.exchangeId = '';
    this.form = new FormGroup({
      score: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
    this.service = inject(ExchangesPageService);
    this.saveRating = new EventEmitter<void>();
  }

  onSelectedScoreRating(score: string) {
    this.form.get('score')?.setValue(score);
  }

  onChangeComment(comment: string) {
    this.form.get('comment')?.setValue(comment);
  }

  onRating() {
    const rating: RatingDto = {
      userIdWhoWasRated: this.userId,
      userIdWhoRated: this.service.userId,
      score: this.form.get('score')?.value,
      comment: this.form.get('comment')?.value,
    };
    if (this.form.valid) {
      this.service.addRating(this.exchangeId, rating).subscribe(() => {
        this.saveRating.emit();
      });
    }
  }
}
