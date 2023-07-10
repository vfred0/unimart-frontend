import{A as h,D as P,F as T,G as m,H as A,I as E,J as w,K as F,L as y,M as v,P as C,R as B,X as _,Y as b,ca as z,ea as D,fa as x,g,k as I,l as S,n as M,s,t as G,v as f,x as c,y as p,z as l}from"./chunk-MXEQZSLL.js";var n=(()=>(n=n||{},n.Primary="primary",n.Secondary="secondary",n.Contact="contact",n.Tag="tag",n.Back="back",n))();function k(t){return t===n.Tag}function H(t){return t===n.Back}function O(t,i){if(t&1&&h(0,"svg-icon",1),t&2){let o=m();F("c-button__icon o-icon-size-".concat(o.iconSize)),E("src","assets/icons/",o.icon,".svg"),c("applyClass",!0)}}var L=(()=>{let i=class{constructor(){this.TypeButton=n,this.typeButton=n.Primary,this.description=this.typeButton,this.icon="hand"}get fontSize(){return k(this.typeButton)?"sm-semibold":"base-semibold"}get iconSize(){return k(this.typeButton)?"sm":"lg"}get isBack(){return H(this.typeButton)}},t=i;return(()=>{i.\u0275fac=function(r){return new(r||i)}})(),(()=>{i.\u0275cmp=g({type:i,selectors:[["app-button"]],inputs:{description:"description",typeButton:"typeButton",icon:"icon"},standalone:!0,features:[B],decls:4,vars:8,consts:[[3,"ngIf"],[3,"applyClass","src"]],template:function(r,a){r&1&&(p(0,"button"),f(1,O,1,4,"ng-template",0),p(2,"span"),y(3),l()()),r&2&&(C("c-button c-button--",a.typeButton,""),s(1),c("ngIf",!a.isBack),s(1),C("c-button__text o-text-",a.fontSize,""),s(1),v(a.description))},dependencies:[b,_,x,D],encapsulation:2})})(),t})();function U(t,i){if(t&1){let o=P();p(0,"app-button",5),T("click",function(){I(o);let r=m();return S(r.redirectToBack())}),l()}if(t&2){let o=m();c("description","Volver")("typeButton",o.TypeButton.Back)}}function q(t,i){if(t&1&&(p(0,"div",6),h(1,"app-button",7)(2,"app-button",7),l()),t&2){let o=m();w("is-active",o.isActive),s(1),c("description","Editar perfil")("icon","edit")("typeButton",o.TypeButton.Secondary),s(1),c("description","Cerrar sesi\xF3n")("icon","logout")("typeButton",o.TypeButton.Secondary)}}var ne=(()=>{let i=class{constructor(d){this.router=d,this.TypeButton=n,this.isActive=!1,this.isBack=!1,this.withPreferences=!0,this.title="Victor Arreaga",this.image="https://avatars.githubusercontent.com/u/18092385?v=4"}togglePreferences(){this.isActive=!this.isActive}redirectToBack(){this.router.navigate(["/"]).then()}},t=i;return(()=>{i.\u0275fac=function(r){return new(r||i)(G(z))}})(),(()=>{i.\u0275cmp=g({type:i,selectors:[["app-header"]],inputs:{isBack:"isBack",withPreferences:"withPreferences",title:"title",image:"image"},standalone:!0,features:[B],decls:7,vars:8,consts:[[1,"c-header","o-layout-max-width"],[1,"c-header__user-and-avatar"],["alt","",1,"c-header__user-avatar",3,"src","click"],[1,"o-text-lg-bold"],[3,"ngIf"],[3,"description","typeButton","click"],[1,"c-preferences"],[3,"description","icon","typeButton"]],template:function(r,a){r&1&&(p(0,"div",0)(1,"div",1)(2,"img",2),T("click",function(){return a.togglePreferences()}),l(),p(3,"span",3),y(4),l()(),f(5,U,1,2,"ng-template",4),l(),f(6,q,3,8,"ng-template",4)),r&2&&(w("c-header--back",a.isBack)("is-active-preferences",a.withPreferences),s(2),A("src",a.image,M),s(2),v(a.title),s(1),c("ngIf",a.isBack),s(1),c("ngIf",a.withPreferences))},dependencies:[b,_,x,L],encapsulation:2})})(),t})();var e=(()=>(e=e||{},e.TextBooksEducationalMaterial="Libros texto material educativo",e.OfficeSupplies="Material de oficina",e.Electronics="Electr\xF3nica",e.FurnitureAndDecoration="Mobiliario y decoraci\xF3n",e.Clothing="Indumentaria",e.LaboratoryMaterial="Material de laboratorio",e.MusicalInstruments="Instrumentos musicales",e.SportingGoods="Art\xEDculos deportivos",e.ArtsHandicrafts="Artes manuales",e.ToysGames="Juegos y juguetes",e))(),V=class{constructor(){this.categories=[{name:e.TextBooksEducationalMaterial,includes:"Laptops, monitores, computadoras, teclados, mouse, tablets, impresoras, discos duros externos, auriculares, cargadores, adaptadores, cargadores, c\xE1maras fotogr\xE1ficas, reproductores de m\xFAsica, videoconsolas, calculadoras cient\xEDficas, entre otros.",withGender:!1},{name:e.OfficeSupplies,includes:"Papel, bol\xEDgrafos, grapadoras, etc.",withGender:!1},{name:e.Electronics,includes:"Ordenadores, m\xF3viles, tablets, etc.",withGender:!1},{name:e.FurnitureAndDecoration,includes:"Mesas, sillas, estanter\xEDas, etc.",withGender:!1},{name:e.Clothing,includes:"Camisetas, pantalones, zapatos, etc.",withGender:!0},{name:e.LaboratoryMaterial,includes:"Tubos de ensayo, probetas, etc.",withGender:!1},{name:e.MusicalInstruments,includes:"Guitarras, pianos, etc.",withGender:!1},{name:e.SportingGoods,includes:"Balones, raquetas, etc.",withGender:!1},{name:e.ArtsHandicrafts,includes:"Pinceles, pinturas, etc.",withGender:!1},{name:e.ToysGames,includes:"Mu\xF1ecas, coches, etc.",withGender:!0}]}getIncludes(i){return this.categories.find(o=>o.name===i)?.includes||""}isWithGender(i){return this.categories.find(o=>o.name===i)?.withGender||!1}};var u=(()=>(u=u||{},u.New="Nuevo",u.Preowned="Seminuevo",u.Used="Usado",u.LowQuality="Baja calidad",u))();export{n as a,L as b,ne as c,e as d,V as e,u as f};