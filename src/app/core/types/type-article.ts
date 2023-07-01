export enum TypeArticle {
    Normal = 'normal',
    Propose = 'propose',
    Published = 'published',
    Proposed = 'proposed',
}

export namespace TypeArticle {

    export function isPropose(typeArticle: TypeArticle): boolean {
        return typeArticle === TypeArticle.Propose;
    }

    export function isPublished(typeArticle: TypeArticle): boolean {
        return typeArticle === TypeArticle.Published;
    }

    export function isProposed(typeArticle: TypeArticle): boolean {
        return typeArticle === TypeArticle.Proposed;
    }
}