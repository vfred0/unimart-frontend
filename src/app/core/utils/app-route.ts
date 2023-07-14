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

interface IRoute {
  path: string;
  title: string;
  withMenu: boolean;
  withHeader: boolean;
  withBack: boolean;
  withPreferences: boolean;
  withPreferencesAndButtonEditProfile: boolean;
}

const routes: Array<IRoute> = [
  {
    path: AppRoute.Home,
    title: Data.article.user.name,
    withMenu: true,
    withHeader: true,
    withBack: false,
    withPreferences: true,
    withPreferencesAndButtonEditProfile: true,
  },
  {
    path: AppRoute.Article,
    title: 'Artículo',
    withMenu: false,
    withHeader: false,
    withBack: false,
    withPreferences: false,
    withPreferencesAndButtonEditProfile: false,
  },
  {
    path: AppRoute.PublishArticle,
    title: 'Publicar artículo',
    withMenu: true,
    withHeader: true,
    withBack: false,
    withPreferences: true,
    withPreferencesAndButtonEditProfile: false,
  },
  {
    path: AppRoute.EditArticle,
    title: 'Editar artículo',
    withMenu: true,
    withHeader: true,
    withBack: true,
    withPreferences: true,
    withPreferencesAndButtonEditProfile: true,
  },
  {
    path: AppRoute.Exchanges,
    title: 'Intercambios',
    withMenu: true,
    withHeader: true,
    withBack: false,
    withPreferences: true,
    withPreferencesAndButtonEditProfile: true,
  },
  {
    path: AppRoute.Suggest,
    title: 'Proponer artículo',
    withMenu: true,
    withHeader: true,
    withBack: true,
    withPreferences: false,
    withPreferencesAndButtonEditProfile: false,
  },
  {
    path: AppRoute.Profile,
    title: 'Perfil',
    withMenu: true,
    withHeader: true,
    withBack: false,
    withPreferences: true,
    withPreferencesAndButtonEditProfile: true,
  },
  {
    path: AppRoute.ProfileEditProfile,
    title: 'Editar perfil',
    withMenu: false,
    withHeader: true,
    withBack: true,
    withPreferences: true,
    withPreferencesAndButtonEditProfile: false,
  },
  {
    path: AppRoute.ProfileProposedArticles,
    title: 'Artículos propuestos',
    withMenu: false,
    withHeader: true,
    withBack: true,
    withPreferences: true,
    withPreferencesAndButtonEditProfile: true,
  },
];
let route = '';

function getCleanRoute(route: string): string {
  return route
    .replace(/^\/+/, '')
    .replace(/\/(?:\d+\/?)?/g, '/')
    .replace(/\/$/, '');
}

export function setRoute(routeParam: string): void {
  route = getCleanRoute(routeParam);
}

export function isEqualsRoute(routeCompare: string): boolean {
  return routeCompare === route;
}

export function isWithMenu(): boolean {
  const preference = getRoutePreference();
  return preference ? preference.withMenu : false;
}

function getRoutePreference() {
  return routes.find(routePreference => route === routePreference.path);
}

export function isWithBack(): boolean {
  const routePreference = getRoutePreference();
  return routePreference ? routePreference.withBack : false;
}

export function isWithPreferences(): boolean {
  const routePreference = getRoutePreference();
  return routePreference ? routePreference.withPreferences : false;
}

export function isWithPreferencesAndButtonEditProfile(): boolean {
  const routePreference = getRoutePreference();
  return routePreference
    ? routePreference.withPreferencesAndButtonEditProfile
    : false;
}

export function isWithHeader(): boolean {
  const routePreference = getRoutePreference();
  return routePreference ? routePreference.withHeader : false;
}

export function getRouteTitle(): string {
  const routePreference = getRoutePreference();
  return routePreference ? routePreference.title : '';
}

export function getLayout(): string {
  const className = 'o-layout';
  return isWithMenu() ? `${className}-with-menu` : `${className}-without-menu`;
}
