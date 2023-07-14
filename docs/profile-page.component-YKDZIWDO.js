import{a as K,b as W}from"./chunk-TLAM5Z52.js";import{a as D}from"./chunk-7KWPG52J.js";import{a as O,b as G}from"./chunk-ZK4A6JSG.js";import{a as Q}from"./chunk-RGHEFD6O.js";import"./chunk-R5SB3EMH.js";import{a as U,c as q}from"./chunk-KPZI3ZUY.js";import{e as P}from"./chunk-KG3RRWUS.js";import{d as B,e as F,n as J}from"./chunk-FM4MEQKB.js";import{Ba as k,Ea as V,Fa as u,Ga as w,Ha as N,Na as C,O as f,Pa as L,Ra as H,S as R,T,X as x,fb as j,gb as z,hb as v,ja as p,la as b,ma as M,na as g,oa as $,ob as A,pa as a,pb as S,qa as n,qb as y,ra as o,sa as s,va as I,xa as m,ya as h}from"./chunk-FNYCEAUU.js";import"./chunk-OC64LIZX.js";var _=(()=>(_=_||{},_.High="Mayor",_.Low="Menor",_))();var Y=(()=>{let t=class{constructor(){this.TypeButton=S,this.Icon=A,this.viewRatingCard={}}},i=t;return(()=>{t.\u0275fac=function(l){return new(l||t)}})(),(()=>{t.\u0275cmp=f({type:t,selectors:[["app-view-rating-card"]],inputs:{viewRatingCard:"viewRatingCard"},standalone:!0,features:[C],decls:12,vars:7,consts:[[1,"c-view-rating-card"],[1,"c-view-rating-card__header-rating"],[1,"c-header__user-and-avatar"],["alt","this.title",1,"c-header__user-avatar",3,"src"],[1,"c-header__title-description","o-text-ellipsis"],[1,"o-text-lg-bold","o-text-ellipsis"],[1,"o-text-sm-ligh","o-text-ellipsis"],[3,"description","icon","typeButton"],[1,"o-text-base-normal"]],template:function(l,e){l&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),s(3,"img",3),n(4,"div",4)(5,"span",5),u(6),o(),n(7,"span",6),u(8),o()()(),s(9,"app-button",7),o(),n(10,"span",8),u(11),o()()),l&2&&(p(3),k("src",e.viewRatingCard.userPhoto,x),p(3),w(e.viewRatingCard.userName),p(2),w(e.viewRatingCard.publishDate),p(1),a("description",e.viewRatingCard.rating.toString())("icon",e.Icon.Star)("typeButton",e.TypeButton.Secondary),p(2),w(e.viewRatingCard.comment))},dependencies:[v,y],encapsulation:2})})(),i})();var Z=(()=>{let t=class extends D{constructor(r){super(r),this.router=r,this.deleteArticle=new L}onShowProposals(){this.router.navigate([`${F.ProfileProposedArticles}/${this.articleCard.id}`]).then()}onEditArticle(){this.router.navigate([`${F.EditArticle}/${this.articleCard.id}`]).then()}onDeleteArticle(){this.deleteArticle.emit(this.articleCard.id)}},i=t;return(()=>{t.\u0275fac=function(l){return new(l||t)(b(P))}})(),(()=>{t.\u0275cmp=f({type:t,selectors:[["app-published-article-card"]],outputs:{deleteArticle:"deleteArticle"},standalone:!0,features:[M,C],decls:6,vars:10,consts:[[3,"articleCard","typeArticleCard"],[1,"c-article-card__buttons"],[1,"c-article-card__button",3,"description","typeButton","click"],[1,"c-article-card__buttons-row"],[1,"c-article-card__button",3,"description","icon","typeButton","click"]],template:function(l,e){l&1&&(n(0,"app-article-card",0)(1,"div",1)(2,"app-button",2),m("click",function(){return e.onShowProposals()}),o(),n(3,"div",3)(4,"app-button",4),m("click",function(){return e.onEditArticle()}),o(),n(5,"app-button",4),m("click",function(){return e.onDeleteArticle()}),o()()()()),l&2&&(a("articleCard",e.articleCard)("typeArticleCard",e.TypeArticleCard.Proposed),p(2),a("description",e.getProposalsQuantity())("typeButton",e.TypeButton.Primary),p(2),a("description","Editar")("icon",e.Icon.Edit)("typeButton",e.TypeButton.Secondary),p(1),a("description","Eliminar")("icon",e.Icon.Delete)("typeButton",e.TypeButton.Secondary))},dependencies:[v,y,D],encapsulation:2})})(),i})();function te(i,t){if(i&1){let c=I();n(0,"app-published-article-card",19),m("deleteArticle",function(){let e=R(c).$implicit,d=h(2);return T(d.onDeleteArticle(e.id))}),o()}if(i&2){let c=t.$implicit;a("articleCard",c)}}function ie(i,t){if(i&1&&g(0,te,1,1,"app-published-article-card",18),i&2){let c=h();a("ngForOf",c.articleCards)}}function re(i,t){if(i&1){let c=I();n(0,"app-proposed-article-card",21),m("deleteProposed",function(){let e=R(c).$implicit,d=h(2);return T(d.onDeleteProposed(e.id))}),o()}if(i&2){let c=t.$implicit;a("articleCard",c)}}function ne(i,t){if(i&1&&g(0,re,1,1,"app-proposed-article-card",20),i&2){let c=h();a("ngForOf",c.articleCards)}}function oe(i,t){if(i&1&&s(0,"app-view-rating-card",22),i&2){let c=t.$implicit;a("viewRatingCard",c)}}var je=(()=>{let t=class{constructor(r){this.router=r,this.TypeButton=S,this.Icon=A,this.getLayout=J,this.typeArticles=O(K),this.articleCards=B.articleCards,this.typeArticleCard=U.Normal,this.filterRatings=O(_),this.viewRatingCards=B.viewRatingCards}get averageRating(){return(this.viewRatingCards.reduce((r,l)=>r+l.rating,0)/this.viewRatingCards.length).toString()}onSelectedTypeArticle(r){this.typeArticleCard=r}onSelectedRating(r){console.info(`%cINFO: ${JSON.stringify(r)}`,"color: #bcf0da;")}get isPublished(){return q(this.typeArticleCard)}onDeleteArticle(r){console.log(`Eliminar art\xEDculo ${r}`)}onDeleteProposed(r){console.log(`Eliminar propuesta ${r}`)}},i=t;return(()=>{t.\u0275fac=function(l){return new(l||t)(b(P))}})(),(()=>{t.\u0275cmp=f({type:t,selectors:[["ng-component"]],standalone:!0,features:[C],decls:25,vars:16,consts:[[1,"c-tabs"],["checked","","id","tab1","name","tabs","type","radio",1,"c-tabs__radio"],["for","tab1",1,"c-tabs__label"],[1,"c-tabs__wrapper-content"],[1,"c-tabs__content"],[1,"o-layout-width-100",3,"icon","placeholder"],[1,"o-layout-width-100",3,"options","label","selectedOption"],[1,"o-layout-article-cards"],[3,"ngIfElse","ngIf"],["proposedTemplate",""],["id","tab2","name","tabs","type","radio",1,"c-tabs__radio"],["for","tab2",1,"c-tabs__label"],[1,"o-layout-width-100",3,"label","options","selectedOption"],[1,"c-tabs__content-row","o-layout-width-100"],[1,"o-text-lg-semibold","o-layout-width-100"],[3,"description","icon","typeButton"],[1,"o-layout-view-rating-cards"],[3,"viewRatingCard",4,"ngFor","ngForOf"],[3,"articleCard","deleteArticle",4,"ngFor","ngForOf"],[3,"articleCard","deleteArticle"],[3,"articleCard","deleteProposed",4,"ngFor","ngForOf"],[3,"articleCard","deleteProposed"],[3,"viewRatingCard"]],template:function(l,e){if(l&1&&(n(0,"div")(1,"div",0),s(2,"input",1),n(3,"label",2),u(4,"Publicaciones"),o(),n(5,"div",3)(6,"div",4),s(7,"app-input",5),n(8,"app-select",6),m("selectedOption",function(E){return e.onSelectedTypeArticle(E)}),o(),n(9,"div",7),g(10,ie,1,1,"ng-template",8),g(11,ne,1,1,"ng-template",null,9,H),o()()(),s(13,"input",10),n(14,"label",11),u(15,"Calificaciones"),o(),n(16,"div",3)(17,"div",4)(18,"app-select",12),m("selectedOption",function(E){return e.onSelectedRating(E)}),o(),n(19,"div",13)(20,"span",14),u(21),o(),s(22,"app-button",15),o(),n(23,"div",16),g(24,oe,1,1,"app-view-rating-card",17),o()()()()()),l&2){let d=$(12);V(e.getLayout()),p(7),a("icon",e.Icon.Search)("placeholder","Nombre del art\xEDculo"),p(1),a("options",e.typeArticles)("label","Art\xEDculos:"),p(2),a("ngIfElse",d)("ngIf",e.isPublished),p(8),a("label","Ordenar por:")("options",e.filterRatings),p(3),N("",e.viewRatingCards.length," resultados "),p(1),a("description",e.averageRating)("icon",e.Icon.Star)("typeButton",e.TypeButton.Secondary),p(2),a("ngForOf",e.viewRatingCards)}},dependencies:[v,j,z,Q,G,Y,y,Z,W],encapsulation:2})})(),i})();export{je as ProfilePageComponent};
