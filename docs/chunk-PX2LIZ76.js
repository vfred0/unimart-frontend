import{c as M,d as T,e as d,f as V,g as G,i as D,j as A,k as z,l as R,m as $,n as j}from"./chunk-3CSRQLYX.js";import{b as w,c as F,d as E}from"./chunk-RZGMYFNE.js";import{Ea as h,Fa as u,Ga as S,Ha as _,Ia as v,Ma as C,Na as I,O as g,cb as x,db as y,eb as O,ja as o,jb as N,kb as b,na as p,pa as n,qa as l,ra as s,sa as f,ya as m}from"./chunk-KAVVMNLU.js";function k(e,t){if(e&1&&(l(0,"span",8),u(1),s()),e&2){let c=m();o(1),S(c.title)}}function q(e,t){if(e&1&&(l(0,"option",9),u(1),s()),e&2){let c=t.$implicit,i=m();n("ngValue",c),o(1),v(" ",i.label," ",c," ")}}function B(e,t){if(e&1&&(l(0,"div",10)(1,"span",11),u(2),s()()),e&2){let c=m();o(2),_(" Esta categor\xEDa incluye: ",c.categoryIncludes,"")}}var ie=(()=>{let t=class{constructor(){this.title="",this.label="",this.selectedOption=new I,this.options=[],this.formSelect=new d({}),this.optionSelected="",this.categoryIncludes=""}get withTitle(){return this.title!==""}get withIncludes(){return this.categoryIncludes!==""}ngOnInit(){this.optionSelected=this.options[0],this.formSelect=new d({select:new V(this.optionSelected)}),this.formSelect.get("select")?.valueChanges.subscribe(i=>{this.selectedOption.emit(i),this.updateIncludes(i)}),this.selectedOption.emit(this.optionSelected),this.updateIncludes(this.optionSelected)}updateIncludes(i){w(F,i)&&(this.categoryIncludes=new E().getIncludes(i))}},e=t;return(()=>{t.\u0275fac=function(r){return new(r||t)}})(),(()=>{t.\u0275cmp=g({type:t,selectors:[["app-select"]],inputs:{options:"options",optionSelected:"optionSelected",title:"title",label:"label"},outputs:{selectedOption:"selectedOption"},standalone:!0,features:[C],decls:9,vars:7,consts:[[3,"formGroup"],[1,"c-select"],[3,"ngIf"],[1,"c-select__container"],["formControlName","select",1,"c-select__content","o-text-base-medium"],["class","c-select__option",3,"ngValue",4,"ngFor","ngForOf"],[1,"c-select__icon"],["src","assets/icons/arrow.svg",3,"applyClass"],[1,"o-text-base-medium"],[1,"c-select__option",3,"ngValue"],[1,"c-select__includes"],[1,"o-text-sm-light"]],template:function(r,a){r&1&&(l(0,"form",0)(1,"div",1),p(2,k,2,1,"ng-template",2),l(3,"div",3)(4,"select",4),p(5,q,2,3,"option",5),s(),l(6,"div",6),f(7,"svg-icon",7),s()(),p(8,B,3,1,"ng-template",2),s()()),r&2&&(n("formGroup",a.formSelect),o(2),n("ngIf",a.withTitle),o(3),n("ngForOf",a.options),o(2),h("c-select__icon o-icon-size-lg"),n("applyClass",!0),o(1),n("ngIf",a.withIncludes))},dependencies:[O,x,y,j,G,R,$,z,M,T,D,A,b,N],encapsulation:2})})(),e})();export{ie as a};
