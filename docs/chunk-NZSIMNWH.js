import{a as j,e as u}from"./chunk-KPZI3ZUY.js";import{e as B}from"./chunk-PUTD767I.js";import{e as S}from"./chunk-G6XQHUXL.js";import{Aa as _,Ba as m,Fa as l,Ga as p,Na as h,O as y,Oa as A,X as C,fb as T,ib as I,ja as e,la as f,pa as c,pb as N,qa as r,qb as b,ra as a,rb as E,sa as d,xa as g,za as v}from"./chunk-4VV7WT7N.js";var k=function(n){return{"c-article-card--normal":n}},w=["*"],U=(()=>{let i=class{constructor(s){this.router=s,this.TypeButton=b,this.TypeArticleCard=j,this.Icon=N,this.typeArticleCard=this.TypeArticleCard.Normal,this.articleCard={}}get isNormal(){return u(this.typeArticleCard)}getProposalsQuantity(){return`${this.articleCard.proposalsQuantity} propuestas`}navigateToViewArticle(){u(this.typeArticleCard)&&this.router.navigate([`${S.Article}/${this.articleCard.id}`],{state:{typeArticle:this.typeArticleCard}}).then()}},n=i;return(()=>{i.\u0275fac=function(o){return new(o||i)(f(B))}})(),(()=>{i.\u0275cmp=y({type:i,selectors:[["app-article-card"]],inputs:{articleCard:"articleCard",typeArticleCard:"typeArticleCard"},standalone:!0,features:[h],ngContentSelectors:w,decls:14,vars:13,consts:[[1,"c-article-card",3,"ngClass","click"],[1,"c-article-card__image",3,"alt","src"],[1,"c-article-card__content"],[1,"c-article-card__category-date","o-text-sm-light"],[1,"c-article-card__category","o-text-ellipsis"],[1,"c-article-card__date","o-text-ellipsis"],[1,"c-article-card__title","o-text-base-semibold","o-text-ellipsis"],[1,"c-article-card__tags"],[3,"description","icon","typeButton"],[3,"description","typeButton"]],template:function(o,t){o&1&&(v(),r(0,"div",0),g("click",function(){return t.navigateToViewArticle()}),d(1,"img",1),r(2,"div",2)(3,"div",3)(4,"span",4),l(5),a(),r(6,"span",5),l(7),a()(),r(8,"span",6),l(9),a(),r(10,"div",7),d(11,"app-button",8)(12,"app-button",9),a()(),_(13),a()),o&2&&(c("ngClass",A(11,k,t.isNormal)),e(1),m("alt",t.articleCard.title),m("src",t.articleCard.image,C),e(4),p(t.articleCard.category),e(2),p(t.articleCard.dateOfPublication),e(2),p(t.articleCard.title),e(2),c("description",t.articleCard.state)("icon",t.Icon.State)("typeButton",t.TypeButton.Tag),e(1),c("description",t.getProposalsQuantity())("typeButton",t.TypeButton.Tag))},dependencies:[I,T,E],encapsulation:2})})(),n})();export{U as a};