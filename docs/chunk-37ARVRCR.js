import{C as S,E as C,F as _,H as M,I as w,J as y,Q as b,U as A,V as F,W as E,Z as P,aa as V,ca as k,da as O,g as h,k as g,l as v,s as a,t as I,v as p,w as c,x as f,y as d,z as x}from"./chunk-2HJ7RQHZ.js";import{a as m,b as u}from"./chunk-OC64LIZX.js";var e=(()=>(e=e||{},e.Home="",e.ViewArticle="view-article",e.PublishArticle="publish-article",e.Exchanges="exchanges",e.Profile="profile",e))();(function(i){function n(s){return s!==i.ViewArticle}i.isWithMenu=n})(e||(e={}));function N(i,n){if(i&1){let s=S();f(0,"div",3),C("click",function(){let t=g(s).$implicit,l=_(2);return v(l.menuItemSelected(t))}),x(1,"svg-icon",4),d()}if(i&2){let s=n.$implicit;w("is-selected",s.isSelected),a(1),y("c-menu__icon o-icon-size-menu-icon"),M("src","assets/icons/",s.icon,".svg"),c("applyClass",!0)}}function W(i,n){if(i&1&&(f(0,"div",1),p(1,N,2,6,"div",2),d()),i&2){let s=_();a(1),c("ngForOf",s.menuItems)}}var J=(()=>{let n=class{constructor(r){this.router=r,this.showMenu=!1,this.menuItems=[{icon:"home",isSelected:!1,route:e.Home},{icon:"exchanges",isSelected:!1,route:e.Exchanges},{icon:"publication",isSelected:!1,route:e.PublishArticle},{icon:"profile",isSelected:!1,route:e.Profile}],this.router.events.subscribe(o=>{if(o instanceof P){let t=o.url.split("/")[1];this.showMenu=e.isWithMenu(t);let l=this.menuItems.find(T=>T.route===t)||this.menuItems[0];this.menuItemSelected(l,!1)}})}menuItemSelected(r,o=!0){this.menuItems=this.menuItems.map(t=>(Object.is(t,r)?(t=u(m({},t),{isSelected:!0}),o&&this.router.navigate([t.route]).then()):t=u(m({},t),{isSelected:!1}),t))}},i=n;return(()=>{n.\u0275fac=function(o){return new(o||n)(I(V))}})(),(()=>{n.\u0275cmp=h({type:n,selectors:[["app-menu"]],standalone:!0,features:[b],decls:1,vars:1,consts:[[3,"ngIf"],[1,"c-menu"],["class","c-menu__item",3,"is-selected","click",4,"ngFor","ngForOf"],[1,"c-menu__item",3,"click"],[3,"applyClass","src"]],template:function(o,t){o&1&&p(0,W,2,1,"ng-template",0),o&2&&c("ngIf",t.showMenu)},dependencies:[E,A,F,O,k],encapsulation:2})})(),i})();export{e as a,J as b};
