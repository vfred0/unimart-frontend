import{a as _,b as w,c as E,d as B,f as S}from"./chunk-ASVS6U7M.js";import{E as g,I as o,J as c,K as v,N as y,T as b,W as f,g as u,n as d,s as t,t as h,w as n,x as i,y as a,z as r}from"./chunk-23LPN7Z4.js";import"./chunk-OC64LIZX.js";var O=(()=>{let s=class{constructor(m){this.activatedRoute=m,this.TypeButton=_,console.log(this.activatedRoute.snapshot.params.id),this.article={id:1,image:"https://picsum.photos/200/300",title:"Teclado Mec\xE1nico Logitech",description:"Este teclado me lo dieron de regalo, est\xE1 nuevo, apenas lo us\xE9 para comprobar que funciona, entrgo con su caja y accesorios.",datePublished:"Hace 2 d\xEDas",proposalsQuantity:3,category:B.SportingGoods,state:S.New,user:{image:"https://picsum.photos/200/300",name:"Juan Perez",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur aliquam, nisl nisl aliquet nisl, euismod. ",rating:4,numberOfExchanges:5},gallery:["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"]}}get proposalsQuantity(){return this.article.proposalsQuantity>1?`${this.article.proposalsQuantity} propuestas`:`${this.article.proposalsQuantity} propuesta`}get rating(){return this.article.user.rating.toString()}get exchangesQuantity(){return this.article.user.numberOfExchanges>1?`${this.article.user.numberOfExchanges} intercambios`:`${this.article.user.numberOfExchanges} intercambio`}},l=s;return(()=>{s.\u0275fac=function(p){return new(p||s)(h(f))}})(),(()=>{s.\u0275cmp=u({type:s,selectors:[["app-view-article-page"]],standalone:!0,features:[y],decls:28,vars:21,consts:[[3,"isBack","title"],[1,"c-article-view"],[1,"c-article-view__banner"],[1,"c-article-view__banner-image",3,"src"],[1,"c-article-view__banner-container"],[1,"c-article-view__banner-title","o-text-xl-semibold"],[1,"c-article-view__banner-description","o-text-normal-medium"],[1,"c-article-view__banner-date-published","o-text-sm-light"],[1,"c-article-view__banner-buttons"],[3,"description","icon","typeButton"],[3,"description","typeButton"],[1,"c-article-view__content"],[1,"o-text-xl-semibold"],[1,"c-article-view__user-card"],[3,"image","title","withPreferences"],[1,"o-text-base-normal"],[1,"c-article-view__user-card-buttons"],[1,"c-article-view__section-gallery"],[1,"c-article-view__gallery"]],template:function(p,e){p&1&&(r(0,"app-header",0),i(1,"div",1)(2,"div",2),r(3,"img",3),i(4,"div",4)(5,"span",5),o(6),a(),i(7,"span",6),o(8),a(),i(9,"span",7),o(10),a()(),i(11,"div",8),r(12,"app-button",9)(13,"app-button",10),a()(),i(14,"div",11)(15,"span",12),o(16,"Publicador"),a(),i(17,"div",13),r(18,"app-header",14),i(19,"span",15),o(20),a(),i(21,"div",16),r(22,"app-button",9)(23,"app-button",9),a()(),i(24,"div",17)(25,"span",12),o(26,"Galer\xEDa"),a(),r(27,"div",18),a()()()),p&2&&(n("isBack",!0)("title","Art\xEDculo"),t(3),g("src",e.article.image,d),t(3),c(e.article.title),t(2),c(e.article.description),t(2),c(e.article.datePublished),t(2),n("description",e.rating)("icon","state")("typeButton",e.TypeButton.Tag),t(1),n("description",e.proposalsQuantity)("typeButton",e.TypeButton.Tag),t(5),n("image",e.article.user.image)("title",e.article.user.name)("withPreferences",!1),t(2),v(" ",e.article.user.description,""),t(2),n("description",e.rating)("icon","star")("typeButton",e.TypeButton.Tag),t(1),n("description",e.exchangesQuantity)("icon","exchanges")("typeButton",e.TypeButton.Tag))},dependencies:[E,b,w],encapsulation:2})})(),l})();export{O as ViewArticlePageComponent};
