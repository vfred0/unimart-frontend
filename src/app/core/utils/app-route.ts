export enum AppRoute {
  Home = '',
  Article = 'articulo',
  PublishArticle = 'publicar-articulo',
  Exchanges = 'intercambios',
  Profile = 'perfil',
  Suggest = 'proponer',
  ProposedArticles = 'articulos-propuestos',
  ProfileProposedArticles = 'perfil/articulos-propuestos',
}

export function isWithMenu(url: string): boolean {
  return url !== AppRoute.Article;
}
