import{a as S,c as V,e as d,f as A,h as b,n as M}from"./chunk-Z6XPF5C5.js";import{Ba as u,Ca as x,Ea as v,Fa as _,Ga as C,Na as y,O as h,Qa as I,Sa as T,hb as E,ja as i,na as p,nb as F,oa as g,ob as w,pa as o,pb as D,qa as l,ra as r,sa as s,ya as c}from"./chunk-4VV7WT7N.js";function O(e,t){if(e&1&&(l(0,"span",4),_(1),r()),e&2){let n=c();i(1),C(n.title)}}function R(e,t){if(e&1&&s(0,"textarea",5),e&2){let n=c();u("placeholder",n.placeholder),o("formControl",n.inputValue)}}function k(e,t){if(e&1&&(l(0,"div",6)(1,"div",7),s(2,"svg-icon",8),r(),s(3,"input",9),r()),e&2){let n=c();i(2),v("c-input__icon"),x("src","assets/icons/",n.icon,".svg"),o("applyClass",!0),i(1),u("placeholder",n.placeholder),o("formControl",n.inputValue)("type",n.type)}}var U=(()=>{let t=class{constructor(){this.icon=D.Search,this.isTextArea=!1,this.placeholder="",this.title="",this.type="",this.value="",this.textChanged=new I,this.inputForm=new d({})}ngOnInit(){this.inputForm=new d({inputValue:new A(this.value)}),this.inputValue.valueChanges.subscribe(m=>{this.textChanged.emit(m)})}get inputValue(){return this.inputForm.get("inputValue")}get withTitle(){return this.title!==""}},e=t;return(()=>{t.\u0275fac=function(a){return new(a||t)}})(),(()=>{t.\u0275cmp=h({type:t,selectors:[["app-input"]],inputs:{title:"title",icon:"icon",value:"value",placeholder:"placeholder",type:"type",isTextArea:"isTextArea"},outputs:{textChanged:"textChanged"},standalone:!0,features:[y],decls:5,vars:3,consts:[[1,"c-input"],[3,"ngIf"],[3,"ngIfElse","ngIf"],["elseBlock",""],[1,"o-text-base-medium"],["cols","5","rows","5",1,"c-input__text-area","o-text-base-medium",3,"formControl","placeholder"],[1,"c-input__container"],[1,"c-input__container-svg"],[3,"applyClass","src"],[1,"c-input__text","o-text-base-medium",3,"formControl","type","placeholder"]],template:function(a,f){if(a&1&&(l(0,"div",0),p(1,O,2,1,"ng-template",1),p(2,R,1,2,"ng-template",2),p(3,k,4,7,"ng-template",null,3,T),r()),a&2){let N=g(4);i(1),o("ngIf",f.withTitle),i(1),o("ngIfElse",N)("ngIf",f.isTextArea)}},dependencies:[w,F,M,S,V,b,E],encapsulation:2})})(),e})();export{U as a};