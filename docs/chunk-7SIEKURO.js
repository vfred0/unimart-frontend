import{a as w,c as S,d as V,e as A,f as b,g as M}from"./chunk-H5KJ3OHE.js";import{A as s,G as c,H as u,I as x,K as h,L as _,M as C,R as v,S as I,T as y,Y as T,fa as E,g as f,ga as F,s as i,v as p,w as g,x as o,y as l,z as r}from"./chunk-2WI52SEN.js";function N(e,t){if(e&1&&(l(0,"span",4),_(1),r()),e&2){let n=c();i(1),C(n.title)}}function R(e,t){if(e&1&&s(0,"textarea",5),e&2){let n=c();u("placeholder",n.placeholder),o("formControl",n.inputValue)}}function k(e,t){if(e&1&&(l(0,"div",6)(1,"div",7),s(2,"svg-icon",8),r(),s(3,"input",9),r()),e&2){let n=c();i(2),h("c-input__icon"),x("src","assets/icons/",n.icon,".svg"),o("applyClass",!0),i(1),u("placeholder",n.placeholder),o("formControl",n.inputValue)}}var P=(()=>{let t=class{constructor(){this.icon="search",this.isTextArea=!1,this.placeholder="",this.title="",this.textChanged=new I,this.inputForm=new V({inputValue:new A("")}),this.inputValue.valueChanges.subscribe(m=>{this.textChanged.emit(m)})}get inputValue(){return this.inputForm.get("inputValue")}get withTitle(){return this.title!==""}},e=t;return(()=>{t.\u0275fac=function(a){return new(a||t)}})(),(()=>{t.\u0275cmp=f({type:t,selectors:[["app-input"]],inputs:{icon:"icon",placeholder:"placeholder",title:"title",isTextArea:"isTextArea"},outputs:{textChanged:"textChanged"},standalone:!0,features:[v],decls:5,vars:3,consts:[[1,"c-input"],[3,"ngIf"],[3,"ngIfElse","ngIf"],["elseBlock",""],[1,"o-text-base-medium"],["cols","5","rows","5",1,"c-input__text-area","o-text-base-medium",3,"formControl","placeholder"],[1,"c-input__container"],[1,"c-input__container-svg"],[3,"applyClass","src"],["type","text",1,"c-input__text","o-text-base-medium",3,"formControl","placeholder"]],template:function(a,d){if(a&1&&(l(0,"div",0),p(1,N,2,1,"ng-template",1),p(2,R,1,2,"ng-template",2),p(3,k,4,6,"ng-template",null,3,y),r()),a&2){let D=g(4);i(1),o("ngIf",d.withTitle),i(1),o("ngIfElse",D)("ngIf",d.isTextArea)}},dependencies:[F,E,M,w,S,b,T],encapsulation:2})})(),e})();export{P as a};
