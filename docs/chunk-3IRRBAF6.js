import{a as s}from"./chunk-UPLSKKDJ.js";import{a as d}from"./chunk-KPZI3ZUY.js";import{e as b}from"./chunk-AX6TRO2V.js";import{f as _}from"./chunk-VHXRVX5I.js";import{Na as f,O as u,Qa as P,ib as C,ja as p,la as m,ma as y,pa as n,qa as a,ra as c,rb as h,xa as l}from"./chunk-55WKZPUC.js";var S=(()=>{let i=class extends s{constructor(t){super(t),this.router=t,this.onlyViewPublication=!1,this.deleteProposed=new P}onDeleteProposed(){console.log("onDeleteProposed"),this.deleteProposed.emit(this.articleCard.id)}onViewPublication(){let t={typeArticle:d.Proposed,onlyViewPublication:!1};this.onlyViewPublication&&(t={typeArticle:d.Proposed,onlyViewPublication:!0}),this.router.navigate([`${_.Article}/${this.articleCard.id}`],{state:t}).then()}},r=i;return(()=>{i.\u0275fac=function(o){return new(o||i)(m(b))}})(),(()=>{i.\u0275cmp=u({type:i,selectors:[["app-proposed-article-card"]],inputs:{onlyViewPublication:"onlyViewPublication"},outputs:{deleteProposed:"deleteProposed"},standalone:!0,features:[y,f],decls:3,vars:8,consts:[[3,"articleCard","typeArticleCard"],[1,"c-article-card__button",3,"icon","description","typeButton","click"],[1,"c-article-card__button",3,"description","icon","typeButton","click"]],template:function(o,e){o&1&&(a(0,"app-article-card",0)(1,"app-button",1),l("click",function(){return e.onViewPublication()}),c(),a(2,"app-button",2),l("click",function(){return e.onDeleteProposed()}),c()()),o&2&&(n("articleCard",e.articleCard)("typeArticleCard",e.TypeArticleCard.Proposed),p(1),n("icon",e.Icon.View)("description","Ver publicaci\xF3n")("typeButton",e.TypeButton.Primary),p(1),n("description","Eliminar propuesta")("icon",e.Icon.Delete)("typeButton",e.TypeButton.Secondary))},dependencies:[C,h,s],encapsulation:2})})(),r})();export{S as a};
