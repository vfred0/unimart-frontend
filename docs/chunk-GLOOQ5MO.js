import{$ as k,A as x,C,D as _,F as M,G as S,H as w,N as y,R as b,S as A,T as F,W as E,X as P,Z as V,aa as O,g as h,k as g,l as v,s as m,t as a,v as p,w as c,x as d,y as f,z as I}from"./chunk-ZY2DILVQ.js";import{a as l,b as u}from"./chunk-OC64LIZX.js";var e=(()=>(e=e||{},e.Home="",e.ViewArticle="view-article",e.PublishArticle="publish-article",e.Exchanges="exchanges",e.Profile="profile",e))();(function(i){function n(o){return!o.includes(i.ViewArticle)}i.isWithMenu=n})(e||(e={}));function T(i,n){if(i&1){let o=x();d(0,"div",3),C("click",function(){let s=g(o).$implicit,R=_(2);return v(R.menuItemSelected(s))}),I(1,"svg-icon",4),f()}if(i&2){let o=n.$implicit;S("is-selected",o.isSelected),m(1),w("c-menu__icon o-icon-size-menu-icon"),M("src","assets/icons/",o.icon,".svg"),c("applyClass",!0)}}function j(i,n){if(i&1&&(d(0,"div",1),p(1,T,2,6,"div",2),f()),i&2){let o=_();m(1),c("ngForOf",o.menuItems)}}var J=(()=>{let n=class{constructor(r,t){this.router=r,this.activatedRoute=t,this.showMenu=!0,this.menuItems=[{icon:"home",isSelected:!0,route:e.Home},{icon:"exchanges",isSelected:!1,route:e.Exchanges},{icon:"publication",isSelected:!1,route:e.PublishArticle},{icon:"profile",isSelected:!1,route:e.Profile}],this.router.events.subscribe(s=>{s instanceof E&&(this.showMenu=e.isWithMenu(s.url))})}menuItemSelected(r){this.menuItems=this.menuItems.map(t=>(Object.is(t,r)?(t=u(l({},t),{isSelected:!0}),this.router.navigate([t.route]).then()):t=u(l({},t),{isSelected:!1}),t)),console.log(this.menuItems)}},i=n;return(()=>{n.\u0275fac=function(t){return new(t||n)(a(V),a(P))}})(),(()=>{n.\u0275cmp=h({type:n,selectors:[["app-menu"]],standalone:!0,features:[y],decls:1,vars:1,consts:[[3,"ngIf"],[1,"c-menu"],["class","c-menu__item",3,"is-selected","click",4,"ngFor","ngForOf"],[1,"c-menu__item",3,"click"],[3,"applyClass","src"]],template:function(t,s){t&1&&p(0,j,2,1,"ng-template",0),t&2&&c("ngIf",s.showMenu)},dependencies:[F,b,A,O,k],encapsulation:2})})(),i})();export{e as a,J as b};
