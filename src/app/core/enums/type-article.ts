export enum TypeArticle {
  Published = 'Publicado',
  Proposed = 'Propuesto',
  Exchanged = 'Intercambiado',
}

export function isPublished(typeArticle: TypeArticle): boolean {
  return typeArticle === TypeArticle.Published;
}

export function isProposed(typeArticle: TypeArticle): boolean {
  return typeArticle === TypeArticle.Proposed;
}

export function isExchanged(typeArticle: TypeArticle): boolean {
  return typeArticle === TypeArticle.Exchanged;
}
