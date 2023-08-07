import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ExchangeDto } from '@core/dtos/exchange.dto';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/enums/type-button';
import { AddRatingComponent } from '@components/rating/add-rating/add-rating.component';
import { Icon } from '@core/enums/icon';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { HeaderDetail } from '@core/utils/header-detail';

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
export class ExchangeCardComponent implements OnInit {
  @Input() exchangeCard: ExchangeDto;
  @Output() discardExchange: EventEmitter<string>;
  @Output() saveRating: EventEmitter<void>;
  showAddRating: boolean;
  headerDetail: HeaderDetail;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor() {
    this.exchangeCard = {} as ExchangeDto;
    this.discardExchange = new EventEmitter<string>();
    this.showAddRating = false;
    this.headerDetail = {} as HeaderDetail;
    this.saveRating = new EventEmitter<void>();
  }

  onSaveRating(): void {
    this.saveRating.emit();
  }

  onDiscardExchange() {
    this.discardExchange.emit(this.exchangeCard.id);
  }

  onShowRating() {
    this.showAddRating = !this.showAddRating;
  }

  ngOnInit(): void {
    this.headerDetail = {
      photo: this.exchangeCard.userPhoto,
      title: this.exchangeCard.userName,
      description: this.exchangeCard.date,
    } as HeaderDetail;
  }
}
