export enum TypeArticleCard {
  Normal = 'normal',
  Suggest = 'Proponer',
  Published = 'Publicado',
  Proposed = 'Propuesto',
}

export function isNormal(typeArticle: TypeArticleCard): boolean {
  return typeArticle === TypeArticleCard.Normal;
}
