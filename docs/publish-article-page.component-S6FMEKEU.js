import"./chunk-C363XPJM.js";import{a as k}from"./chunk-7SIEKURO.js";import{b as u,d as O,e as d,h as y,i as q}from"./chunk-H5KJ3OHE.js";import"./chunk-D6FMQCPW.js";import"./chunk-3U3TUF54.js";import{a as M}from"./chunk-3O5DKFAZ.js";import{a as V,b as I,c as D,d as G,e as B,f as F}from"./chunk-2LYZHXRJ.js";import{A as h,D as S,F as c,G as _,J as P,L as w,R as x,Y as E,Z as A,g as T,k as v,l as b,s as o,v as C,x as i,y as r,z as l}from"./chunk-2WI52SEN.js";import"./chunk-OC64LIZX.js";var g=(()=>(g=g||{},g.Male="Masculino",g.Female="Femenino",g))();function H(n,p){if(n&1){let s=S();r(0,"app-select",2),c("selectedOption",function(a){v(s);let e=_();return b(e.onSelectedGender(a))}),l()}if(n&2){let s=_();i("options",s.genders)("title","G\xE9nero")}}function N(n,p){if(n&1&&h(0,"app-gallery",10),n&2){let s=_();i("images",s.images)}}function W(n,p){if(n&1){let s=S();r(0,"app-button",11),c("click",function(){v(s);let a=_();return b(a.onDeleteImages())}),l()}if(n&2){let s=_();i("description","Eliminar fotos")("icon","delete")("typeButton",s.TypeButton.Secondary)}}var le=(()=>{let p=class{constructor(){this.TypeButton=V,this.categories=y(G),this.states=y(F),this.genders=y(g),this.form=new O({title:new d("",[u.required]),description:new d("",[u.required]),state:new d(this.states[0],[u.required]),category:new d(this.categories[0],[u.required]),gender:new d(this.genders[0],[u.required]),images:new d(["https://source.unsplash.com/featured/?electronics,laptop"],[u.required])})}get images(){return this.form.get("images")?.value}get withGender(){return new B().isWithGender(this.form.get("category")?.value)}get containsImages(){return this.form.get("images")?.value.length>0}onTitleChanged(t){this.setValue("title",t)}setValue(t,a){this.form.get(t)?.setValue(a)}onSelectedState(t){this.setValue("state",t)}onSelectedCategory(t){this.setValue("category",t)}onSelectedGender(t){this.setValue("gender",t)}onDescriptionChanged(t){this.setValue("description",t)}onDeleteImages(){this.form.get("images")?.setValue([])}publishArticle(){this.form.valid&&console.log(this.form.value)}},n=p;return(()=>{p.\u0275fac=function(a){return new(a||p)}})(),(()=>{p.\u0275cmp=T({type:p,selectors:[["app-publish-article-page"]],standalone:!0,features:[x],decls:17,vars:23,consts:[[1,"c-publish-article-page","o-layout-spacing"],[3,"icon","placeholder","title","textChanged"],[3,"options","title","selectedOption"],[1,"c-publish-article-page__gender-state"],[3,"ngIf"],[3,"isTextArea","placeholder","title","textChanged"],[1,"o-text-xl-semibold"],[1,"c-publish-article-page__gallery"],[3,"description","icon","typeButton"],[1,"c-publish-article-page__container-proposed",3,"click"],[3,"images"],[3,"description","icon","typeButton","click"]],template:function(a,e){a&1&&(h(0,"app-header"),r(1,"div",0)(2,"app-input",1),c("textChanged",function(m){return e.onTitleChanged(m)}),l(),r(3,"app-select",2),c("selectedOption",function(m){return e.onSelectedCategory(m)}),l(),r(4,"div",3),C(5,H,1,2,"ng-template",4),r(6,"app-select",2),c("selectedOption",function(m){return e.onSelectedState(m)}),l()(),r(7,"app-input",5),c("textChanged",function(m){return e.onDescriptionChanged(m)}),l(),r(8,"span",6),w(9,"Galer\xEDa"),l(),r(10,"div",7),C(11,N,1,1,"ng-template",4),r(12,"div"),h(13,"app-button",8),C(14,W,1,3,"ng-template",4),l()(),r(15,"div",9),c("click",function(){return e.publishArticle()}),h(16,"app-button",8),l()()),a&2&&(o(2),i("icon","edit")("placeholder","Ingresa el nombre del art\xEDculo")("title","T\xEDtulo"),o(1),i("options",e.categories)("title","Categor\xEDas"),o(1),P("double-column",e.withGender),o(1),i("ngIf",e.withGender),o(1),i("options",e.states)("title","Estado"),o(1),i("isTextArea",!0)("placeholder","Ingresa la descripci\xF3n del art\xEDculo")("title","Descripci\xF3n"),o(4),i("ngIf",e.containsImages),o(1),P("c-publish-article-page__gallery-buttons",e.containsImages),o(1),i("description","Cargar foto")("icon","camera")("typeButton",e.TypeButton.Secondary),o(1),i("ngIf",e.containsImages),o(2),i("description","Publicar art\xEDculo")("icon","save")("typeButton",e.TypeButton.Primary))},dependencies:[A,E,D,k,q,M,I],encapsulation:2})})(),n})();export{le as PublishArticlePageComponent};
