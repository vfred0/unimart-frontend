import"./chunk-4ZZBTRYL.js";import{a as H}from"./chunk-NTNRMSTC.js";import"./chunk-Z2LZFXTC.js";import{a as q}from"./chunk-TY3533G7.js";import{b as u,d as k,e as d,h as y,i as M}from"./chunk-6M25WTRU.js";import"./chunk-KPZI3ZUY.js";import{a as V,b as x,c as D,d as G,e as B,f as F,g as O}from"./chunk-VCN4EGTN.js";import{$ as A,A as h,D as S,F as c,G as _,L as P,N as I,T as E,_ as w,g as T,k as v,l as b,s as o,v as C,x as n,y as r,z as p}from"./chunk-5WZ6XGQO.js";import"./chunk-LE7DSHJA.js";import"./chunk-OC64LIZX.js";var g=(()=>(g=g||{},g.Male="Masculino",g.Female="Femenino",g))();function N(i,s){if(i&1){let a=S();r(0,"app-select",2),c("selectedOption",function(l){v(a);let e=_();return b(e.onSelectedGender(l))}),p()}if(i&2){let a=_();n("options",a.genders)("title","G\xE9nero")}}function W(i,s){if(i&1&&h(0,"app-gallery",10),i&2){let a=_();n("images",a.images)}}function j(i,s){if(i&1){let a=S();r(0,"app-button",11),c("click",function(){v(a);let l=_();return b(l.onDeleteImages())}),p()}if(i&2){let a=_();n("description","Eliminar fotos")("icon",a.Icon.Delete)("typeButton",a.TypeButton.Secondary)}}var se=(()=>{let s=class{constructor(){this.TypeButton=V,this.Icon=D,this.categories=y(B),this.states=y(O),this.genders=y(g),this.form=new k({title:new d("",[u.required]),description:new d("",[u.required]),state:new d(this.states[0],[u.required]),category:new d(this.categories[0],[u.required]),gender:new d(this.genders[0],[u.required]),images:new d(["https://source.unsplash.com/featured/?electronics,laptop"],[u.required])})}get images(){return this.form.get("images")?.value}get withGender(){return new F().isWithGender(this.form.get("category")?.value)}get containsImages(){return this.form.get("images")?.value.length>0}onTitleChanged(t){this.setValue("title",t)}setValue(t,l){this.form.get(t)?.setValue(l)}onSelectedState(t){this.setValue("state",t)}onSelectedCategory(t){this.setValue("category",t)}onSelectedGender(t){this.setValue("gender",t)}onDescriptionChanged(t){this.setValue("description",t)}onDeleteImages(){this.form.get("images")?.setValue([])}publishArticle(){this.form.valid&&console.log(this.form.value)}},i=s;return(()=>{s.\u0275fac=function(l){return new(l||s)}})(),(()=>{s.\u0275cmp=T({type:s,selectors:[["ng-component"]],standalone:!0,features:[E],decls:17,vars:23,consts:[[1,"c-publish-article-page","o-layout-spacing"],[3,"icon","placeholder","title","textChanged"],[3,"options","title","selectedOption"],[1,"c-publish-article-page__gender-state"],[3,"ngIf"],[3,"isTextArea","placeholder","title","textChanged"],[1,"o-text-xl-semibold"],[1,"c-publish-article-page__gallery"],[3,"description","icon","typeButton"],[1,"c-publish-article-page__container-proposed",3,"click"],[3,"images"],[3,"description","icon","typeButton","click"]],template:function(l,e){l&1&&(h(0,"app-header"),r(1,"div",0)(2,"app-input",1),c("textChanged",function(m){return e.onTitleChanged(m)}),p(),r(3,"app-select",2),c("selectedOption",function(m){return e.onSelectedCategory(m)}),p(),r(4,"div",3),C(5,N,1,2,"ng-template",4),r(6,"app-select",2),c("selectedOption",function(m){return e.onSelectedState(m)}),p()(),r(7,"app-input",5),c("textChanged",function(m){return e.onDescriptionChanged(m)}),p(),r(8,"span",6),I(9,"Galer\xEDa"),p(),r(10,"div",7),C(11,W,1,1,"ng-template",4),r(12,"div"),h(13,"app-button",8),C(14,j,1,3,"ng-template",4),p()(),r(15,"div",9),c("click",function(){return e.publishArticle()}),h(16,"app-button",8),p()()),l&2&&(o(2),n("icon",e.Icon.Edit)("placeholder","Ingresa el nombre del art\xEDculo")("title","T\xEDtulo"),o(1),n("options",e.categories)("title","Categor\xEDas"),o(1),P("double-column",e.withGender),o(1),n("ngIf",e.withGender),o(1),n("options",e.states)("title","Estado"),o(1),n("isTextArea",!0)("placeholder","Ingresa la descripci\xF3n del art\xEDculo")("title","Descripci\xF3n"),o(4),n("ngIf",e.containsImages),o(1),P("c-publish-article-page__gallery-buttons",e.containsImages),o(1),n("description","Cargar foto")("icon",e.Icon.Camera)("typeButton",e.TypeButton.Secondary),o(1),n("ngIf",e.containsImages),o(2),n("description","Publicar art\xEDculo")("icon",e.Icon.Save)("typeButton",e.TypeButton.Primary))},dependencies:[A,w,G,q,M,H,x],encapsulation:2})})(),i})();export{se as PublishArticlePageComponent};