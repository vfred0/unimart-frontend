import{a as R}from"./chunk-L7NI2SGH.js";import{b as A,f as D,g as I,h as u,i as b}from"./chunk-GW5JTHD5.js";import"./chunk-UOZ6YMZW.js";import{c as M,d as _,f as k}from"./chunk-IYH2QHOO.js";import{A as v,D as y,F as s,G as x,L as O,N as T,R as w,U as F,W as E,Y as H,ca as V,g as f,k as g,l as h,s as c,t as C,v as S,x as p,y as r,z as n}from"./chunk-MXEQZSLL.js";import"./chunk-OC64LIZX.js";function $(a,o){if(a&1){let d=y();r(0,"app-article-card",8),s("click",function(){let t=g(d).$implicit,m=x();return h(m.redirectToViewArticle(t))}),n()}if(a&2){let d=o.$implicit;p("articleCard",d)}}var te=(()=>{let o=class{constructor(e,i){this.cd=e,this.router=i,this.categories=u(_),this.states=u(k),this.optionSelected={},this.category=_.Clothing,this.articleCards=R.articleCards}onSelectedState(e){this.cd.detectChanges(),console.log(e)}onSelectedCategory(e){this.cd.detectChanges(),console.log(e)}redirectToViewArticle(e){this.router.navigate([`/view-article/${e.id}`]).then()}onTextSearchChanged(e){console.log(e)}},a=o;return(()=>{o.\u0275fac=function(i){return new(i||o)(C(F),C(V))}})(),(()=>{o.\u0275cmp=f({type:o,selectors:[["app-home"]],standalone:!0,features:[w],decls:10,vars:5,consts:[[1,"c-explore","o-layout-spacing"],[1,"c-explore__inputs"],[3,"textChanged"],[3,"options","selectedOption"],[3,"label","options","selectedOption"],[1,"o-text-lg-semibold"],[1,"o-layout-article-cards"],[3,"articleCard","click",4,"ngFor","ngForOf"],[3,"articleCard","click"]],template:function(i,t){i&1&&(v(0,"app-header"),r(1,"div",0)(2,"div",1)(3,"app-input",2),s("textChanged",function(l){return t.onTextSearchChanged(l)}),n(),r(4,"app-select",3),s("selectedOption",function(l){return t.onSelectedState(l)}),n(),r(5,"app-select",4),s("selectedOption",function(l){return t.onSelectedCategory(l)}),n()(),r(6,"span",5),O(7),n(),r(8,"div",6),S(9,$,1,1,"app-article-card",7),n()()),i&2&&(c(4),p("options",t.categories),c(1),p("label","Ordenar por estado:")("options",t.states),c(2),T("",t.articleCards.length," resultados "),c(2),p("ngForOf",t.articleCards))},dependencies:[M,H,E,I,b,A,D],encapsulation:2})})(),a})();export{te as HomeComponent};