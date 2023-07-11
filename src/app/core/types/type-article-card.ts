export enum TypeArticleCard {
  Normal = 'normal',
  Suggest = 'Proponer',
  Published = 'Publicados',
  Proposed = 'Propuestos',
}

export function isSuggest(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Suggest;
}

export function isPublished(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Published;
}

export function isProposed(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Proposed;
}

export function isNormal(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Normal;
}
