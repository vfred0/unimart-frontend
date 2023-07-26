import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ExchangeDto } from '@core/dtos/exchange/exchange.dto';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { AddRatingComponent } from '@components/rating/add-rating/add-rating.component';
import { Icon } from '@core/types/icon';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { HeaderDetail } from '@core/utils/header-detail';
import { Data } from '@core/utils/data';

@Component({
  selector: 'app-exchange-card',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    AddRatingComponent,
    HeaderDetailComponent,
  ],
  templateUrl: './exchange-card.component.html',
})
export class ExchangeCardComponent {
  @Input() exchangeCard: ExchangeDto;
  @Output() discardExchange: EventEmitter<string>;
  showAddRating: boolean;
  headerDetail: HeaderDetail;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor() {
    this.exchangeCard = {} as ExchangeDto;
    this.discardExchange = new EventEmitter<string>();
    this.showAddRating = false;
    this.headerDetail = Data.headerDetail;
  }

  onDiscardExchange() {
    this.discardExchange.emit(this.exchangeCard.exchangeId);
  }

  onShowRating() {
    this.showAddRating = !this.showAddRating;
  }
}
