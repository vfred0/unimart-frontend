import{a as C}from"./chunk-I72O5FEH.js";import{b as k}from"./chunk-O3733AJA.js";import{a as O}from"./chunk-GPAGU2Z5.js";import"./chunk-NHSD4MTS.js";import{a as M}from"./chunk-KPZI3ZUY.js";import{a as f}from"./chunk-R4HHC6OE.js";import{a as B}from"./chunk-MHKGDYN3.js";import"./chunk-ZUPCRYFB.js";import{e as D}from"./chunk-PJUV25CY.js";import{c as w}from"./chunk-RZDP6OL4.js";import{Fa as v,Ha as T,Na as d,O as s,Oa as F,db as E,fb as m,ja as p,la as h,ma as A,na as _,pa as n,qa as a,ra as c,sa as g,xa as l,ya as S}from"./chunk-D2CALKRE.js";import"./chunk-OC64LIZX.js";var x=(()=>{let t=class extends C{constructor(e){super(e),this.router=e,this.suggestArticle=new F}onSuggestArticle(e){this.suggestArticle.emit(e)}},o=t;return(()=>{t.\u0275fac=function(i){return new(i||t)(h(D))}})(),(()=>{t.\u0275cmp=s({type:t,selectors:[["app-suggest-article-card"]],standalone:!0,features:[A,d],decls:2,vars:4,consts:[[3,"articleCard","typeArticleCard"],[1,"c-article-card__button",3,"description","typeButton","click"]],template:function(i,r){i&1&&(a(0,"app-article-card",0)(1,"app-button",1),l("click",function(){return r.onSuggestArticle(r.articleCard.id)}),c()()),i&2&&(n("articleCard",r.articleCard)("typeArticleCard",r.typeArticleCard),p(1),n("description","Proponer art\xEDculo")("typeButton",r.TypeButton.Primary))},dependencies:[m,w,C],encapsulation:2})})(),o})();function I(o,t){if(o&1&&g(0,"app-suggest-article-card",7),o&2){let P=t.$implicit,e=S();n("articleCard",P)("typeArticleCard",e.TypeArticleCard.Suggest)}}var Z=(()=>{let t=class{constructor(){this.TypeArticleCard=M,this.articleCards=f.articleCards,this.categories=this.articleCards.map(e=>e.category).filter((e,i,r)=>r.indexOf(e)===i),this.title="",this.category={}}onTitleSearchChanged(e){this.title=e,this.updateArticleCards()}suggestArticle(e){console.log(e)}onSelectedCategory(e){this.category=e,this.updateArticleCards()}updateArticleCards(){this.articleCards=f.articleCards.filter(e=>e.category===this.category&&e.title.toLowerCase().includes(this.title.toLowerCase()))}},o=t;return(()=>{t.\u0275fac=function(i){return new(i||t)}})(),(()=>{t.\u0275cmp=s({type:t,selectors:[["ng-component"]],standalone:!0,features:[d],decls:8,vars:4,consts:[[3,"isBack"],[1,"o-layout-spacing"],[3,"textChanged"],[3,"options","selectedOption"],[1,"o-text-lg-semibold","o-layout-width-100"],[1,"o-layout-article-cards"],[3,"articleCard","typeArticleCard",4,"ngFor","ngForOf"],[3,"articleCard","typeArticleCard"]],template:function(i,r){i&1&&(g(0,"app-header",0),a(1,"div",1)(2,"app-input",2),l("textChanged",function(u){return r.onTitleSearchChanged(u)}),c(),a(3,"app-select",3),l("selectedOption",function(u){return r.onSelectedCategory(u)}),c(),a(4,"span",4),v(5),c(),a(6,"div",5),_(7,I,1,2,"app-suggest-article-card",6),c()()),i&2&&(n("isBack",!0),p(3),n("options",r.categories),p(2),T("",r.articleCards.length," resultados "),p(2),n("ngForOf",r.articleCards))},dependencies:[m,E,B,k,O,x],encapsulation:2})})(),o})();export{Z as SuggestArticlePageComponent};
