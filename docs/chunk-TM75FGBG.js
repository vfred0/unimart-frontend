import{A as d,C as g,D as o,E as s,F as u,G as f,H as h,O as C,Y as y,ia as S,j as c,ka as _,s as l,w as m,x as a,y as p}from"./chunk-R7YALVTQ.js";function w(t,e){if(t&1&&(f(0),o(1,"swiper-slide")(2,"div",3),u(3,"img",4),s()(),h()),t&2){let v=e.$implicit;a(3),C("src",v,l)}}var M=(()=>{let e=class e{constructor(i){this.renderer=i,this.images=[]}updateSlider(){let i=document.querySelector("swiper-container"),n=this.images.length>1,r="swiper-backface-hidden";n?this.renderer.removeClass(i,r):this.renderer.addClass(i,r)}};e.\u0275fac=function(n){return new(n||e)(p(m))},e.\u0275cmp=c({type:e,selectors:[["app-gallery"]],inputs:{images:"images"},standalone:!0,features:[y],decls:3,vars:1,consts:[[1,"c-gallery"],["navigation","true","zoom","true",1,"c-gallery__container"],[4,"ngFor","ngForOf"],[1,"swiper-zoom-container"],["alt","",1,"c-gallery__image",3,"src"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"swiper-container",1),d(2,w,4,1,"ng-container",2),s()()),n&2&&(a(2),g("ngForOf",r.images))},dependencies:[_,S],encapsulation:2});let t=e;return t})();export{M as a};