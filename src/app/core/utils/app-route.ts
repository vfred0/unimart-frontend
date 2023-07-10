export enum AppRoute {
  Home = '',
  ViewArticle = 'view-article',
  PublishArticle = 'publish-article',
  Exchanges = 'exchanges',
  Profile = 'profile',
}

export function isWithMenu(url: string): boolean {
  return url !== AppRoute.ViewArticle;
}