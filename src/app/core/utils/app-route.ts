import { containsValue } from '@core/types/enum-utils';
import { Data } from '@core/utils/data';

export enum AppRoute {
  Home = '',
  Article = 'articulo',
  PublishArticle = 'publicar-articulo',
  Exchanges = 'intercambios',
  Profile = 'perfil',
  Suggest = 'proponer',
  ProposedArticles = 'articulos-propuestos',
  ProfileProposedArticles = 'perfil/articulos-propuestos',
  EditArticle = 'editar-articulo',
  Auth = 'auth',
  EditProfile = 'editar-perfil',
  ProfileEditProfile = 'perfil/editar-perfil',
}

export function isEquals(route: string, routeToCompare: string): boolean {
  if (!containsValue(AppRoute, route)) {
    route = getRoute(route);
  }
  if (!containsValue(AppRoute, routeToCompare)) {
    routeToCompare = getRoute(routeToCompare);
  }
  return route === routeToCompare;
}

export function isWithMenu(route: string): boolean {
  return (
    !isEquals(route, AppRoute.Auth) &&
    !isEquals(route, AppRoute.Article) &&
    !isEquals(route, AppRoute.ProfileEditProfile) &&
    !isEquals(route, AppRoute.EditArticle) &&
    !isEquals(route, AppRoute.Suggest) &&
    !isEquals(route, AppRoute.ProfileProposedArticles)
  );
}

export function isWithBack(route: string): boolean {
  return (
    isEquals(route, AppRoute.Article) ||
    isEquals(route, AppRoute.Suggest) ||
    isEquals(route, AppRoute.ProfileProposedArticles) ||
    isEquals(route, AppRoute.ProfileEditProfile) ||
    isEquals(route, AppRoute.EditArticle)
  );
}

export function isWithPreferences(route: string): boolean {
  return !isEquals(route, AppRoute.Article);
}

export function isWithPreferencesAndButtonEditProfile(route: string): boolean {
  return !isEquals(route, AppRoute.ProfileEditProfile);
}

export function isWithHeader(route: string): boolean {
  return !isEquals(route, AppRoute.Auth) && !isEquals(route, AppRoute.Article);
}

export function getRouteTitle(route: string): string {
  if (!isEquals(route, AppRoute.Home)) {
    const routeWithoutSlash = getRoute(route);
    return (
      routeWithoutSlash.charAt(0).toUpperCase() + routeWithoutSlash.slice(1)
    ).replace('-', ' ');
  }
  return Data.article.user.name;
}

function getRoute(route: string): AppRoute {
  const routeWithoutSlash: string = route.substring(1);
  if (containsValue(AppRoute, routeWithoutSlash)) {
    return routeWithoutSlash as AppRoute;
  }
  return routeWithoutSlash.slice(0, routeWithoutSlash.length - 2) as AppRoute;
}

export function getLayout(): string {
  const className = 'o-layout';
  return isWithMenu(window.location.pathname)
    ? `${className}-with-menu`
    : `${className}-without-menu`;
}
