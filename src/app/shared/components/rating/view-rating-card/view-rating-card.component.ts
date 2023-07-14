import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ViewRatingCard } from '@core/types/view-rating-card';
import { TypeButton } from '@core/types/type-button';
import { Icon } from '@core/utils/icon';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { HeaderDetail } from '@core/types/header-detail';
import { Data } from '@core/utils/data';

@Component({
  selector: 'app-view-rating-card',
  standalone: true,
  templateUrl: './view-rating-card.component.html',
  imports: [
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    HeaderComponent,
    HeaderDetailComponent,
  ],
})
export class ViewRatingCardComponent {
  @Input() viewRatingCard: ViewRatingCard;
  headerDetail: HeaderDetail;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor() {
    this.viewRatingCard = {} as ViewRatingCard;
    this.headerDetail = Data.headerDetail;
  }
}
