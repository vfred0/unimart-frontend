import { AppRoute } from '@core/utils/app-route';
import { Icon } from '@core/enums/icon';

export interface MenuItem {
  icon: Icon;
  isSelected: boolean;
  route: AppRoute;
}
