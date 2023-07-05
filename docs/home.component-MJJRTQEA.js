import{a as h,b as Q,c as A,d as F,e as V}from"./chunk-RZTAOECQ.js";import"./chunk-5X5GQ5Z7.js";import{c as M,d as t,f as o}from"./chunk-X2QUNOIT.js";import{A as v,C as m,D as T,I as b,K as E,O as H,Q as P,S as x,U as w,_ as k,g as y,k as C,l as _,s as p,t as g,v as S,w as d,x as n,y as s,z as O}from"./chunk-NVMKZANY.js";import"./chunk-OC64LIZX.js";function B(l,i){if(l&1){let f=v();n(0,"app-article-card",8),m("click",function(){let a=C(f).$implicit,u=T();return _(u.redirectToViewArticle(a))}),s()}if(l&2){let f=i.$implicit;d("articleCard",f)}}var Z=(()=>{let i=class{constructor(e,r){this.cd=e,this.router=r,this.categories=h.getAllValues(t),this.states=h.getAllValues(o),this.optionSelected={},this.category=t.Clothing,this.articleCards=[{id:1,image:"https://source.unsplash.com/featured/?electronics,laptop",title:"Ryzen 4600G",dateOfPublication:"Hoy",proposalsQuantity:5,category:t.Electronics,state:o.New},{id:2,image:"https://source.unsplash.com/featured/?electronics,laptop",title:"MacBook Pro 2021",dateOfPublication:"Ayer",proposalsQuantity:3,category:t.Electronics,state:o.Preowned},{id:2,image:"https://source.unsplash.com/featured/?electronics,phone",title:"Samsung Galaxy S21",dateOfPublication:"Hace 1 d\xEDa",proposalsQuantity:8,category:t.Electronics,state:o.Used},{id:2,image:"https://source.unsplash.com/featured/?electronics,camera",title:"Canon EOS R5",dateOfPublication:"Hace 2 d\xEDas",proposalsQuantity:2,category:t.Electronics,state:o.LowQuality},{id:2,image:"https://source.unsplash.com/featured/?books,reading",title:"Harry Potter and the Philosopher's Stone",dateOfPublication:"Hoy",proposalsQuantity:1,category:t.TextBooksEducationalMaterial,state:o.New},{id:2,image:"https://source.unsplash.com/featured/?books,novel",title:"The Great Gatsby",dateOfPublication:"Ayer",proposalsQuantity:0,category:t.TextBooksEducationalMaterial,state:o.Preowned},{id:2,image:"https://source.unsplash.com/featured/?books,fantasy",title:"El se\xF1or de los anillos",dateOfPublication:"Hace 1 d\xEDa",proposalsQuantity:4,category:t.TextBooksEducationalMaterial,state:o.Used},{id:2,image:"https://source.unsplash.com/featured/?art,painting",title:"Pintura al \xF3leo",dateOfPublication:"Hace 2 d\xEDas",proposalsQuantity:3,category:t.ArtsHandicrafts,state:o.New},{id:2,image:"https://source.unsplash.com/featured/?music,guitar",title:"Guitarra ac\xFAstica",dateOfPublication:"Hoy",proposalsQuantity:6,category:t.MusicalInstruments,state:o.Used}]}onSelectedState(e){this.cd.detectChanges(),console.log(e)}onSelectedCategory(e){this.cd.detectChanges(),console.log(e)}redirectToViewArticle(e){this.router.navigate([`/view-article/${e.id}`]).then()}onTextSearchChanged(e){console.log(e)}},l=i;return(()=>{i.\u0275fac=function(r){return new(r||i)(g(P),g(k))}})(),(()=>{i.\u0275cmp=y({type:i,selectors:[["app-home"]],standalone:!0,features:[H],decls:10,vars:5,consts:[[1,"c-explore","o-layout-spacing"],[1,"c-explore__inputs"],[3,"onTextChanged"],[3,"options","onSelectedOption"],[3,"label","options","onSelectedOption"],[1,"o-text-lg-semibold"],[1,"o-layout-article-cards"],[3,"articleCard","click",4,"ngFor","ngForOf"],[3,"articleCard","click"]],template:function(r,a){r&1&&(O(0,"app-header"),n(1,"div",0)(2,"div",1)(3,"app-input",2),m("onTextChanged",function(c){return a.onTextSearchChanged(c)}),s(),n(4,"app-select",3),m("onSelectedOption",function(c){return a.onSelectedState(c)}),s(),n(5,"app-select",4),m("onSelectedOption",function(c){return a.onSelectedCategory(c)}),s()(),n(6,"span",5),b(7),s(),n(8,"div",6),S(9,B,1,1,"app-article-card",7),s()()),r&2&&(p(4),d("options",a.categories),p(1),d("label","Ordenar por estado:")("options",a.states),p(2),E("",a.articleCards.length," resultados "),p(2),d("ngForOf",a.articleCards))},dependencies:[M,w,x,F,V,Q,A],encapsulation:2})})(),l})();export{Z as HomeComponent};
