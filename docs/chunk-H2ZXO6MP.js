import{A as f,C as u,D as d,E as _,F as C,I as x,K as M,L as h,P as b,Q as y,R as w,Y as E,ia as F,j as g,ja as O,ka as P,oa as k,p as I,q as S,ra as R,va as V,wa as j,x as p,xa as c,y as v}from"./chunk-R7YALVTQ.js";import{a as r,b as T,c as A,d as N}from"./chunk-6ZVQRB5I.js";import{a as l,b as a}from"./chunk-LGOCNUIX.js";function H(i,n){if(i&1){let o=x();d(0,"div",3),M("click",function(){let e=I(o).$implicit,m=h(2);return S(m.menuItemSelected(e))}),C(1,"svg-icon",4),_()}if(i&2){let o=n.$implicit;y("is-selected",o.isSelected),p(1),w("c-menu__icon o-icon-size-menu-icon"),b("src","assets/icons/",o.icon,".svg"),u("applyClass",!0)}}function $(i,n){if(i&1&&(d(0,"div",1),f(1,H,2,6,"div",2),_()),i&2){let o=h();p(1),u("ngForOf",o.menuItems)}}var L=(()=>{let n=class n{constructor(s){this.router=s,this.showMenu=!1,this.menuItems=[{icon:c.Home,isSelected:!1,route:r.Home},{icon:c.Exchanges,isSelected:!1,route:r.Exchanges},{icon:c.Publication,isSelected:!1,route:r.PublishArticle},{icon:c.Profile,isSelected:!1,route:r.Profile}],this.routerSubscription=this.router.events.subscribe(t=>{if(t instanceof k){let e=t.url;if(T(e),this.showMenu=N(),this.showMenu)for(let m of this.menuItems)A(m.route)&&this.menuItemSelected(m,!1)}})}ngOnDestroy(){this.routerSubscription&&this.routerSubscription.unsubscribe()}menuItemSelected(s,t=!0){this.menuItems=this.menuItems.map(e=>(Object.is(e,s)?(e=a(l({},e),{isSelected:!0}),t&&this.router.navigate([e.route]).then()):e=a(l({},e),{isSelected:!1}),e))}};n.\u0275fac=function(t){return new(t||n)(v(R))},n.\u0275cmp=g({type:n,selectors:[["app-menu"]],standalone:!0,features:[E],decls:1,vars:1,consts:[[3,"ngIf"],[1,"c-menu"],["class","c-menu__item",3,"is-selected","click",4,"ngFor","ngForOf"],[1,"c-menu__item",3,"click"],[3,"applyClass","src"]],template:function(t,e){t&1&&f(0,$,2,1,"ng-template",0),t&2&&u("ngIf",e.showMenu)},dependencies:[P,F,O,j,V],encapsulation:2});let i=n;return i})();export{L as a};
