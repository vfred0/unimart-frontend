import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ViewRatingDto } from '@core/dtos/rating/view-rating.dto';
import { TypeButton } from '@core/enums/type-button';
import { Icon } from '@core/enums/icon';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { HeaderDetail } from '@core/utils/header-detail';

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
export class ViewRatingCardComponent implements OnInit {
  @Input() viewRatingCard: ViewRatingDto;
  headerDetail: HeaderDetail;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor() {
    this.viewRatingCard = {} as ViewRatingDto;
    this.headerDetail = {} as HeaderDetail;
  }

  ngOnInit(): void {
    this.headerDetail = {
      photo: this.viewRatingCard.userPhoto,
      title: this.viewRatingCard.userName,
      description: this.viewRatingCard.date,
    };
  }
}
