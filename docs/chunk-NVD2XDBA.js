import{a as N,e as u}from"./chunk-KPZI3ZUY.js";import{e as T}from"./chunk-PEFY7CCX.js";import{g as B}from"./chunk-RZGMYFNE.js";import{Aa as _,Ba as m,Da as h,Fa as o,Ga as c,Ma as A,O as y,X as C,eb as I,ja as e,la as f,lb as S,mb as b,nb as E,pa as s,qa as r,ra as a,sa as d,xa as g,za as v}from"./chunk-KAVVMNLU.js";var P=["*"],R=(()=>{let i=class{constructor(p){this.router=p,this.TypeButton=b,this.Icon=S,this.typeArticleCard=N.Normal,this.articleCard={}}get isNormal(){return u(this.typeArticleCard)}getProposalsQuantity(){return`${this.articleCard.proposalsQuantity} propuestas`}navigateToViewArticle(){u(this.typeArticleCard)&&this.router.navigate([`${B.Article}/${this.articleCard.id}`]).then()}},l=i;return(()=>{i.\u0275fac=function(n){return new(n||i)(f(T))}})(),(()=>{i.\u0275cmp=y({type:i,selectors:[["app-article-card"]],inputs:{articleCard:"articleCard",typeArticleCard:"typeArticleCard"},standalone:!0,features:[A],ngContentSelectors:P,decls:14,vars:12,consts:[[1,"c-article-card",3,"click"],[1,"c-article-card__image",3,"alt","src"],[1,"c-article-card__content"],[1,"c-article-card__category-date","o-text-sm-light"],[1,"c-article-card__category","o-text-ellipsis"],[1,"c-article-card__date","o-text-ellipsis"],[1,"c-article-card__title","o-text-base-semibold","o-text-ellipsis"],[1,"c-article-card__tags"],[3,"description","icon","typeButton"],[3,"description","typeButton"]],template:function(n,t){n&1&&(v(),r(0,"div",0),g("click",function(){return t.navigateToViewArticle()}),d(1,"img",1),r(2,"div",2)(3,"div",3)(4,"span",4),o(5),a(),r(6,"span",5),o(7),a()(),r(8,"span",6),o(9),a(),r(10,"div",7),d(11,"app-button",8)(12,"app-button",9),a()(),_(13),a()),n&2&&(h("c-article-card--normal",t.isNormal),e(1),m("alt",t.articleCard.title),m("src",t.articleCard.image,C),e(4),c(t.articleCard.category),e(2),c(t.articleCard.dateOfPublication),e(2),c(t.articleCard.title),e(2),s("description",t.articleCard.state)("icon",t.Icon.State)("typeButton",t.TypeButton.Tag),e(1),s("description",t.getProposalsQuantity())("typeButton",t.TypeButton.Tag))},dependencies:[I,E],encapsulation:2})})(),l})();export{R as a};
