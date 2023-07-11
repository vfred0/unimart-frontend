import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { HeaderComponent } from '@components/header/header.component';
import { SelectComponent } from '@components/select/select.component';
import { getAllValues } from '@core/types/enum-utils';
import { ScoreRating } from '@core/types/score-rating';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '@components/input/input.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TypeButton } from '@core/types/type-button';
import { Icon } from '@core/utils/icon';

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
})
export class AddRatingComponent {
  scoreRatings: Array<string>;
  form: FormGroup;
  protected readonly onselect = onselect;
  protected readonly TypeButton = TypeButton;

  constructor() {
    this.scoreRatings = getAllValues(ScoreRating);
    this.form = new FormGroup({
      scoreRating: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }

  onSelectedScoreRating(scoreRating: string) {
    this.form.get('scoreRating')?.setValue(scoreRating);
  }

  onChangeComment(comment: string) {
    this.form.get('comment')?.setValue(comment);
  }

  onRating() {
    console.log(this.form.value);
  }

  protected readonly Icon = Icon;
}
