export enum TypeArticleCard {
  Normal = 'normal',
  Propose = 'propose',
  Published = 'published',
  Proposed = 'proposed',
}

export function isPropose(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Propose;
}

export function isPublished(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Published;
}

export function isProposed(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Proposed;
}
