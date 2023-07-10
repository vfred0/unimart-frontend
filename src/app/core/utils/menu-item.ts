import { AppRoute } from "@core/utils/app-route";

export interface MenuItem {
  icon: string;
  isSelected: boolean;
  route: AppRoute;
}
