import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ExchangeCard } from '@core/types/exchange-card';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { AddRatingComponent } from '@components/rating/add-rating/add-rating.component';
import { Icon } from '@core/utils/icon';

@Component({
  selector: 'app-exchange-card',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ButtonComponent, AddRatingComponent],
  templateUrl: './exchange-card.component.html',
})
export class ExchangeCardComponent {
  @Input() exchangeCard: ExchangeCard;
  @Output() discardExchange: EventEmitter<string>;
  showAddRating: boolean;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor() {
    this.exchangeCard = {} as ExchangeCard;
    this.discardExchange = new EventEmitter<string>();
    this.showAddRating = false;
  }

  onDiscardExchange() {
    this.discardExchange.emit(this.exchangeCard.exchangeId);
  }

  onShowRating() {
    this.showAddRating = !this.showAddRating;
  }
}
