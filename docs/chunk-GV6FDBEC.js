import{A as g,D as G,F as T,G as d,H as A,I as E,J as x,K as P,L as h,M as y,P as C,R as v,X as B,Y as _,ca as F,ea as z,fa as b,g as f,k as I,l as w,n as M,s,t as S,v as m,x as c,y as p,z as l}from"./chunk-MXEQZSLL.js";var n=(()=>(n=n||{},n.Primary="primary",n.Secondary="secondary",n.Contact="contact",n.Tag="tag",n.Back="back",n))();function k(t){return t===n.Tag}function D(t){return t===n.Back}function j(t,i){if(t&1&&g(0,"svg-icon",1),t&2){let o=d();P("c-button__icon o-icon-size-".concat(o.iconSize)),E("src","assets/icons/",o.icon,".svg"),c("applyClass",!0)}}var H=(()=>{let i=class{constructor(){this.TypeButton=n,this.typeButton=n.Primary,this.description=this.typeButton,this.icon="hand"}get fontSize(){return k(this.typeButton)?"sm-semibold":"base-semibold"}get iconSize(){return k(this.typeButton)?"sm":"lg"}get isBack(){return D(this.typeButton)}},t=i;return(()=>{i.\u0275fac=function(r){return new(r||i)}})(),(()=>{i.\u0275cmp=f({type:i,selectors:[["app-button"]],inputs:{description:"description",typeButton:"typeButton",icon:"icon"},standalone:!0,features:[v],decls:4,vars:8,consts:[[3,"ngIf"],[3,"applyClass","src"]],template:function(r,a){r&1&&(p(0,"button"),m(1,j,1,4,"ng-template",0),p(2,"span"),h(3),l()()),r&2&&(C("c-button c-button--",a.typeButton,""),s(1),c("ngIf",!a.isBack),s(1),C("c-button__text o-text-",a.fontSize,""),s(1),y(a.description))},dependencies:[_,B,b,z],encapsulation:2})})(),t})();function N(t,i){if(t&1){let o=G();p(0,"app-button",5),T("click",function(){I(o);let r=d();return w(r.redirectToBack())}),l()}if(t&2){let o=d();c("description","Volver")("typeButton",o.TypeButton.Back)}}function q(t,i){if(t&1&&(p(0,"div",6),g(1,"app-button",7)(2,"app-button",7),l()),t&2){let o=d();x("is-active",o.isActive),s(1),c("description","Editar perfil")("icon","edit")("typeButton",o.TypeButton.Secondary),s(1),c("description","Cerrar sesi\xF3n")("icon","logout")("typeButton",o.TypeButton.Secondary)}}var ie=(()=>{let i=class{constructor(u){this.router=u,this.TypeButton=n,this.isActive=!1,this.isBack=!1,this.withPreferences=!0,this.title="Victor Arreaga",this.image="https://avatars.githubusercontent.com/u/18092385?v=4"}togglePreferences(){this.isActive=!this.isActive}redirectToBack(){this.router.navigate(["/"]).then()}},t=i;return(()=>{i.\u0275fac=function(r){return new(r||i)(S(F))}})(),(()=>{i.\u0275cmp=f({type:i,selectors:[["app-header"]],inputs:{isBack:"isBack",withPreferences:"withPreferences",title:"title",image:"image"},standalone:!0,features:[v],decls:7,vars:8,consts:[[1,"c-header","o-layout-max-width"],[1,"c-header__user-and-avatar"],["alt","",1,"c-header__user-avatar",3,"src","click"],[1,"o-text-lg-bold"],[3,"ngIf"],[3,"description","typeButton","click"],[1,"c-preferences"],[3,"description","icon","typeButton"]],template:function(r,a){r&1&&(p(0,"div",0)(1,"div",1)(2,"img",2),T("click",function(){return a.togglePreferences()}),l(),p(3,"span",3),h(4),l()(),m(5,N,1,2,"ng-template",4),l(),m(6,q,3,8,"ng-template",4)),r&2&&(x("c-header--back",a.isBack)("is-active-preferences",a.withPreferences),s(2),A("src",a.image,M),s(2),y(a.title),s(1),c("ngIf",a.isBack),s(1),c("ngIf",a.withPreferences))},dependencies:[_,B,b,H],encapsulation:2})})(),t})();var e=(()=>(e=e||{},e.TextBooksEducationalMaterial="Libros texto material educativo",e.OfficeSupplies="Material de oficina",e.Electronics="Electr\xF3nica",e.FurnitureAndDecoration="Mobiliario y decoraci\xF3n",e.Clothing="Indumentaria",e.LaboratoryMaterial="Material de laboratorio",e.MusicalInstruments="Instrumentos musicales",e.SportingGoods="Art\xEDculos deportivos",e.ArtsHandicrafts="Artes manuales",e.ToysGames="Juegos y juguetes",e))(),V=class{constructor(){this.categories=[{name:e.TextBooksEducationalMaterial,includes:"Laptops, monitores, computadoras, teclados, mouse, tablets, impresoras, discos duros externos, auriculares, cargadores, adaptadores, cargadores, c\xE1maras fotogr\xE1ficas, reproductores de m\xFAsica, videoconsolas, calculadoras cient\xEDficas, entre otros.",withGender:!1},{name:e.OfficeSupplies,includes:"Papel, bol\xEDgrafos, grapadoras, etc.",withGender:!1},{name:e.Electronics,includes:"Ordenadores, m\xF3viles, tablets, etc.",withGender:!1},{name:e.FurnitureAndDecoration,includes:"Mesas, sillas, estanter\xEDas, etc.",withGender:!1},{name:e.Clothing,includes:"Camisetas, pantalones, zapatos, etc.",withGender:!0},{name:e.LaboratoryMaterial,includes:"Tubos de ensayo, probetas, etc.",withGender:!1},{name:e.MusicalInstruments,includes:"Guitarras, pianos, etc.",withGender:!1},{name:e.SportingGoods,includes:"Balones, raquetas, etc.",withGender:!1},{name:e.ArtsHandicrafts,includes:"Pinceles, pinturas, etc.",withGender:!1},{name:e.ToysGames,includes:"Mu\xF1ecas, coches, etc.",withGender:!0}]}getIncludes(i){return this.categories.find(o=>o.name===i)?.includes||""}isWithGender(i){return this.categories.find(o=>o.name===i)?.withGender||!1}};export{n as a,H as b,ie as c,e as d,V as e};