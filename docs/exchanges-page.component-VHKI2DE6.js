import{a as G}from"./chunk-J7WEZPZG.js";import{a as q}from"./chunk-JPAH6UAK.js";import{b as B,d as N,e as b,h as $,i as z}from"./chunk-GSPFGWC6.js";import{a as w,b as S,c as R,d as T}from"./chunk-HE7RQUAI.js";import{A as g,D as v,F as d,G as l,K as D,L as E,M as F,R as x,S as V,T as M,X as k,Y as O,Z as y,fa as P,g as f,ga as H,k as h,l as _,s,v as C,w as A,x as c,y as a,z as p}from"./chunk-YTGVXLTB.js";import"./chunk-OC64LIZX.js";var m=(()=>(m=m||{},m.One="1",m.Two="2",m.Three="3",m.Four="4",m.Five="5",m))();var J=(()=>{let e=class{constructor(){this.onselect=onselect,this.TypeButton=w,this.Icon=R,this.scoreRatings=$(m),this.form=new N({scoreRating:new b("",B.required),comment:new b("",B.required)})}onSelectedScoreRating(r){this.form.get("scoreRating")?.setValue(r)}onChangeComment(r){this.form.get("comment")?.setValue(r)}onRating(){console.log(this.form.value)}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=f({type:e,selectors:[["app-add-rating"]],standalone:!0,features:[x],decls:9,vars:9,consts:[[1,"c-add-rating-card"],[1,"c-add-rating-card__title-rating"],[1,"o-text-base-semibold"],[1,"c-add-rating-card__score-rating"],["src","assets/icons/star.svg",3,"applyClass"],[3,"options","selectedOption"],[3,"isTextArea","placeholder","textChanged"],[3,"description","icon","typeButton","click"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"div",1)(2,"span",2),E(3,"Calificai\xF3n: "),p(),a(4,"div",3),g(5,"svg-icon",4),a(6,"app-select",5),d("selectedOption",function(I){return i.onSelectedScoreRating(I)}),p()()(),a(7,"app-input",6),d("textChanged",function(I){return i.onChangeComment(I)}),p(),a(8,"app-button",7),d("click",function(){return i.onRating()}),p()()),n&2&&(s(5),D("c-add-rating-card__icon o-icon-size-lg"),c("applyClass",!0),s(1),c("options",i.scoreRatings),s(1),c("isTextArea",!0)("placeholder","Escribe un comentario"),s(1),c("description","Calificar")("icon",i.Icon.Star)("typeButton",i.TypeButton.Primary))},dependencies:[y,S,z,q,H,P],encapsulation:2})})(),t})();function Q(t,e){if(t&1){let o=v();a(0,"app-button",7),d("click",function(){h(o);let n=l();return _(n.onShowRating())}),p(),a(1,"app-button",7),d("click",function(){h(o);let n=l();return _(n.onDiscardExchange())}),p()}if(t&2){let o=l();c("description","Calificar intercambio")("icon",o.Icon.Star)("typeButton",o.TypeButton.Primary),s(1),c("description","Descartar intercambio")("icon",o.Icon.Delete)("typeButton",o.TypeButton.Secondary)}}function U(t,e){if(t&1){let o=v();a(0,"app-button",7),d("click",function(){h(o);let n=l();return _(n.onShowRating())}),p()}if(t&2){let o=l();c("description","Cerrar")("icon",o.Icon.Delete)("typeButton",o.TypeButton.Secondary)}}function W(t,e){t&1&&g(0,"app-add-rating")}var K=(()=>{let e=class{constructor(){this.TypeButton=w,this.Icon=R,this.exchangeCard={},this.discardExchange=new V,this.showAddRating=!1}onDiscardExchange(){this.discardExchange.emit(this.exchangeCard.exchangeId)}onShowRating(){this.showAddRating=!this.showAddRating}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=f({type:e,selectors:[["app-exchange-card"]],inputs:{exchangeCard:"exchangeCard"},outputs:{discardExchange:"discardExchange"},standalone:!0,features:[x],decls:9,vars:8,consts:[[1,"c-exchange-card"],[3,"description","image","title","withPreferences"],[1,"o-text-base-normal"],[1,"c-exchange-card__buttons"],[3,"ngIfElse","ngIf"],["showAddRatingTemplate",""],[3,"ngIf"],[3,"description","icon","typeButton","click"]],template:function(n,i){if(n&1&&(a(0,"div",0),g(1,"app-header",1),a(2,"span",2),E(3),p(),a(4,"div",3),C(5,Q,2,6,"ng-template",4),C(6,U,1,3,"ng-template",null,5,M),p(),C(8,W,1,0,"ng-template",6),p()),n&2){let u=A(7);s(1),c("description",i.exchangeCard.date)("image",i.exchangeCard.userPhoto)("title",i.exchangeCard.userName)("withPreferences",!1),s(2),F(i.exchangeCard.comment),s(2),c("ngIfElse",u)("ngIf",!i.showAddRating),s(3),c("ngIf",i.showAddRating)}},dependencies:[y,O,T,S,J],encapsulation:2})})(),t})();function X(t,e){if(t&1){let o=v();a(0,"app-exchange-card",3),d("discardExchange",function(){let i=h(o).$implicit,u=l();return _(u.onDiscardRating(i.exchangeId))}),p()}if(t&2){let o=e.$implicit;c("exchangeCard",o)}}var Ae=(()=>{let e=class{constructor(){this.exchangeCards=G.exchangeCards}onDiscardRating(r){console.log("Discard rating for exchange with id: ",r)}},t=e;return(()=>{e.\u0275fac=function(n){return new(n||e)}})(),(()=>{e.\u0275cmp=f({type:e,selectors:[["ng-component"]],standalone:!0,features:[x],decls:4,vars:1,consts:[[1,"o-layout-spacing"],[1,"o-layout-view-rating-cards"],[3,"exchangeCard","discardExchange",4,"ngFor","ngForOf"],[3,"exchangeCard","discardExchange"]],template:function(n,i){n&1&&(g(0,"app-header"),a(1,"div",0)(2,"div",1),C(3,X,1,1,"app-exchange-card",2),p()()),n&2&&(s(3),c("ngForOf",i.exchangeCards))},dependencies:[y,k,T,K],encapsulation:2})})(),t})();export{Ae as ExchangesPageComponent};
