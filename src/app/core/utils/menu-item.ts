import { AppRoute } from '@core/utils/app-route';
import { Icon } from '@core/types/icon';

export interface MenuItem {
  icon: Icon;
  isSelected: boolean;
  route: AppRoute;
}
