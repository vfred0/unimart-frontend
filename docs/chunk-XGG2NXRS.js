import{a as S,c as V,e as f,f as A,h as b,n as M}from"./chunk-UNETXBBP.js";import{$ as y,A as p,B as g,C as o,D as l,E as r,F as s,L as c,O as m,P as x,R as _,S as C,T as v,Y as I,da as T,j as h,ja as E,va as F,wa as w,x as i,xa as D}from"./chunk-R7YALVTQ.js";function O(t,e){if(t&1&&(l(0,"span",4),C(1),r()),t&2){let n=c();i(1),v(n.title)}}function R(t,e){if(t&1&&s(0,"textarea",5),t&2){let n=c();m("placeholder",n.placeholder),o("formControl",n.inputValue)}}function k(t,e){if(t&1&&(l(0,"div",6)(1,"div",7),s(2,"svg-icon",8),r(),s(3,"input",9),r()),t&2){let n=c();i(2),_("c-input__icon"),x("src","assets/icons/",n.icon,".svg"),o("applyClass",!0),i(1),m("placeholder",n.placeholder),o("formControl",n.inputValue)("type",n.type)}}var U=(()=>{let e=class e{constructor(){this.icon=D.Search,this.isTextArea=!1,this.placeholder="",this.title="",this.type="",this.value="",this.textChanged=new y,this.inputForm=new f({})}ngOnInit(){this.inputForm=new f({inputValue:new A(this.value)}),this.inputValue.valueChanges.subscribe(u=>{this.textChanged.emit(u)})}get inputValue(){return this.inputForm.get("inputValue")}get withTitle(){return this.title!==""}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=h({type:e,selectors:[["app-input"]],inputs:{title:"title",icon:"icon",value:"value",placeholder:"placeholder",type:"type",isTextArea:"isTextArea"},outputs:{textChanged:"textChanged"},standalone:!0,features:[I],decls:5,vars:3,consts:[[1,"c-input"],[3,"ngIf"],[3,"ngIfElse","ngIf"],["elseBlock",""],[1,"o-text-lg-semibold"],["cols","5","rows","5",1,"c-input__text-area","o-text-base-regular",3,"formControl","placeholder"],[1,"c-input__container"],[1,"c-input__container-svg"],[3,"applyClass","src"],[1,"c-input__text","o-text-base-regular",3,"formControl","type","placeholder"]],template:function(a,d){if(a&1&&(l(0,"div",0),p(1,O,2,1,"ng-template",1),p(2,R,1,2,"ng-template",2),p(3,k,4,7,"ng-template",null,3,T),r()),a&2){let N=g(4);i(1),o("ngIf",d.withTitle),i(1),o("ngIfElse",N)("ngIf",d.isTextArea)}},dependencies:[w,F,M,S,V,b,E],encapsulation:2});let t=e;return t})();export{U as a};