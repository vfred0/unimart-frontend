import{c as F,d as E,e as d,f as N,g as V,i as M,j as T,k as G,l as A,m as D,n as j}from"./chunk-NHSD4MTS.js";import{b as k,c as K}from"./chunk-4DBGCGJ7.js";import{Ea as h,Fa as u,Ga as S,Ha as _,Ia as v,Na as y,O as f,Oa as x,db as C,eb as I,fb as O,ja as n,kb as b,lb as w,na as p,pa as o,qa as l,ra as s,sa as g,ya as m}from"./chunk-D2CALKRE.js";function L(e){return Object.values(e).filter(t=>typeof t=="string")}function z(e,t){return L(e).includes(t)}function R(e,t){if(e&1&&(l(0,"span",8),u(1),s()),e&2){let r=m();n(1),S(r.title)}}function $(e,t){if(e&1&&(l(0,"option",9),u(1),s()),e&2){let r=t.$implicit,i=m();o("ngValue",r),n(1),v(" ",i.label," ",r," ")}}function q(e,t){if(e&1&&(l(0,"div",10)(1,"span",11),u(2),s()()),e&2){let r=m();n(2),_(" Esta categor\xEDa incluye: ",r.categoryIncludes,"")}}var oe=(()=>{let t=class{constructor(){this.title="",this.label="",this.selectedOption=new x,this.options=[],this.formSelect=new d({}),this.optionSelected="",this.categoryIncludes=""}get withTitle(){return this.title!==""}get withIncludes(){return this.categoryIncludes!==""}ngOnInit(){this.optionSelected=this.options[0],this.formSelect=new d({select:new N(this.optionSelected)}),this.formSelect.get("select")?.valueChanges.subscribe(i=>{this.selectedOption.emit(i),this.updateIncludes(i)}),this.selectedOption.emit(this.optionSelected),this.updateIncludes(this.optionSelected)}updateIncludes(i){z(k,i)&&(this.categoryIncludes=new K().getIncludes(i))}},e=t;return(()=>{t.\u0275fac=function(c){return new(c||t)}})(),(()=>{t.\u0275cmp=f({type:t,selectors:[["app-select"]],inputs:{options:"options",optionSelected:"optionSelected",title:"title",label:"label"},outputs:{selectedOption:"selectedOption"},standalone:!0,features:[y],decls:9,vars:7,consts:[[3,"formGroup"],[1,"c-select"],[3,"ngIf"],[1,"c-select__container"],["formControlName","select",1,"c-select__content","o-text-base-medium"],["class","c-select__option",3,"ngValue",4,"ngFor","ngForOf"],[1,"c-select__icon"],["src","assets/icons/arrow.svg",3,"applyClass"],[1,"o-text-base-medium"],[1,"c-select__option",3,"ngValue"],[1,"c-select__includes"],[1,"o-text-sm-light"]],template:function(c,a){c&1&&(l(0,"form",0)(1,"div",1),p(2,R,2,1,"ng-template",2),l(3,"div",3)(4,"select",4),p(5,$,2,3,"option",5),s(),l(6,"div",6),g(7,"svg-icon",7),s()(),p(8,q,3,1,"ng-template",2),s()()),c&2&&(o("formGroup",a.formSelect),n(2),o("ngIf",a.withTitle),n(3),o("ngForOf",a.options),n(2),h("c-select__icon o-icon-size-lg"),o("applyClass",!0),n(1),o("ngIf",a.withIncludes))},dependencies:[O,C,I,j,V,A,D,G,F,E,M,T,w,b],encapsulation:2})})(),e})();export{L as a,oe as b};