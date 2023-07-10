import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ViewRatingCard } from '@core/types/view-rating-card';
import { TypeButton } from '@core/types/type-button';

@Component({
  selector: 'app-view-rating-card',
  standalone: true,
  templateUrl: './view-rating-card.component.html',
  imports: [CommonModule, ButtonComponent, HeaderComponent],
})
export class ViewRatingCardComponent {
  @Input() viewRatingCard: ViewRatingCard;
  protected readonly TypeButton = TypeButton;

  constructor() {
    this.viewRatingCard = {} as ViewRatingCard;
  }
}
