import{$ as _,B as I,C as b,D as p,E as s,I as y,K as l,Y as S,g as m,i as u,j as d,ka as C,la as w,p as f,q as h,x as g,xa as B,ya as E,za as F}from"./chunk-R7YALVTQ.js";var L=(()=>{let e=class e{constructor(){this.Icon=B,this.TypeButton=E,this.imageSelected=new _,this.image=""}onFileSelected(n){let o=n.target?.files;if(o&&o.length>0){let r=o[0],a=new FileReader;a.onload=()=>{this.image=a.result,this.imageSelected.emit(this.image)},a.readAsDataURL(r)}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-button-select-image"]],outputs:{imageSelected:"imageSelected"},standalone:!0,features:[S],decls:4,vars:3,consts:[["for","fileInput",1,"custom-file-upload"],[3,"description","icon","typeButton","click"],["accept","image/*","hidden","","id","fileInput","type","file",3,"change"],["uploadImage",""]],template:function(t,o){if(t&1){let r=y();p(0,"label",0)(1,"app-button",1),l("click",function(){f(r);let c=I(3);return h(c.click())}),s()(),p(2,"input",2,3),l("change",function(c){return o.onFileSelected(c)}),s()}t&2&&(g(1),b("description","Cargar foto")("icon",o.Icon.Camera)("typeButton",o.TypeButton.Secondary))},dependencies:[C,F],encapsulation:2});let i=e;return i})();var $=(()=>{let e=class e{constructor(){this.API_URL="https://api.imgbb.com/1/upload",this.API_KEY="be0b8dc0b6550244d83f2fb2368aa6a3",this.http=u(w)}uploadImage(n){n=n.replace(/^data:image\/(png|jpg|jpeg|webp);base64,/,"");let t=new FormData;return t.append("image",n),this.http.post(`${this.API_URL}?key=${this.API_KEY}`,t)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{L as a,$ as b};