export interface ExchangeDto {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  articleToExchange: string;
  articleToReceive: string;
  hasBeenRated: boolean;
  isDiscarded: boolean;
  date: string;
}
