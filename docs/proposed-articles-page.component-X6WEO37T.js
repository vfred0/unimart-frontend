import{a as M,b as D}from"./chunk-TLAM5Z52.js";import"./chunk-7KWPG52J.js";import{b as P}from"./chunk-ZK4A6JSG.js";import"./chunk-R5SB3EMH.js";import{a as F}from"./chunk-KPZI3ZUY.js";import{e as O}from"./chunk-KG3RRWUS.js";import{d as c,e as S,n as T}from"./chunk-FM4MEQKB.js";import{Ea as g,Fa as y,Ha as h,Na as v,O as d,fb as A,hb as _,ja as a,la as m,na as f,pa as n,qa as p,ra as l,sa as C,xa as u}from"./chunk-FNYCEAUU.js";import"./chunk-OC64LIZX.js";function $(i,t){if(i&1&&C(0,"app-proposed-article-card",4),i&2){let E=t.$implicit;n("articleCard",E)}}var K=(()=>{let t=class{constructor(r){this.router=r,this.getLayout=T,this.TypeArticleCard=F,this.articleCards=c.articleCards,this.categories=this.articleCards.map(e=>e.category).filter((e,o,s)=>s.indexOf(e)===o)}onNavigateToArticle(r){this.router.navigate([`${S.Article}/${r}`],{state:{typeArticle:M.Proposed}}).then()}onSelectedCategory(r){this.articleCards=c.articleCards.filter(e=>e.category===r)}},i=t;return(()=>{t.\u0275fac=function(e){return new(e||t)(m(O))}})(),(()=>{t.\u0275cmp=d({type:t,selectors:[["ng-component"]],standalone:!0,features:[v],decls:6,vars:6,consts:[[3,"options","selectedOption"],[1,"o-text-lg-semibold","o-layout-width-100"],[1,"o-layout-article-cards"],[3,"articleCard",4,"ngFor","ngForOf"],[3,"articleCard"]],template:function(e,o){e&1&&(p(0,"div")(1,"app-select",0),u("selectedOption",function(L){return o.onSelectedCategory(L)}),l(),p(2,"span",1),y(3),l(),p(4,"div",2),f(5,$,1,1,"app-proposed-article-card",3),l()()),e&2&&(g(o.getLayout()),a(1),n("options",o.categories),a(2),h("",o.articleCards.length," resultados "),a(2),n("ngForOf",o.articleCards))},dependencies:[_,A,P,D],encapsulation:2})})(),i})();export{K as ProposedArticlesPageComponent};
