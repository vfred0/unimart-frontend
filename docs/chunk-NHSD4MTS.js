import{Da as W,F as p,G as I,I as S,Ka as m,Oa as _,P as O,Q as u,R as N,U as P,Y as g,Za as $,fa as D,g as te,ha as b,l as ie,la as o,ma as c,q as ne,wa as re,xa as A}from"./chunk-D2CALKRE.js";import{a as d,b as v}from"./chunk-OC64LIZX.js";var fe=(()=>{let e=class{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)(o(b),o(D))}})(),(()=>{e.\u0275dir=u({type:e})})(),t})(),Z=(()=>{let e=class extends fe{},t=e;return(()=>{e.\u0275fac=function(){let i;return function(s){return(i||(i=P(e)))(s||e)}}()})(),(()=>{e.\u0275dir=u({type:e,features:[c]})})(),t})(),F=new g("NgValueAccessor");var Ge={provide:F,useExisting:p(()=>pe),multi:!0};function Te(){let t=$()?$().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var je=new g("CompositionEventMode"),pe=(()=>{let e=class extends fe{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Te())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)(o(b),o(D),o(je,8))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&A("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[m([Ge]),c]})})(),t})();function h(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function ge(t){return t!=null&&typeof t.length=="number"}var X=new g("NgValidators"),Y=new g("NgAsyncValidators"),Be=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,se=class{static min(e){return Ue(e)}static max(e){return Re(e)}static required(e){return He(e)}static requiredTrue(e){return Le(e)}static email(e){return We(e)}static minLength(e){return $e(e)}static maxLength(e){return qe(e)}static pattern(e){return ze(e)}static nullValidator(e){return me(e)}static compose(e){return De(e)}static composeAsync(e){return Ae(e)}};function Ue(t){return e=>{if(h(e.value)||h(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Re(t){return e=>{if(h(e.value)||h(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function He(t){return h(t.value)?{required:!0}:null}function Le(t){return t.value===!0?null:{required:!0}}function We(t){return h(t.value)||Be.test(t.value)?null:{email:!0}}function $e(t){return e=>h(e.value)||!ge(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function qe(t){return e=>ge(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function ze(t){if(!t)return me;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(h(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function me(t){return null}function ye(t){return t!=null}function ve(t){return re(t)?te(t):t}function _e(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Ce(t,e){return e.map(n=>n(t))}function Ze(t){return!t.validate}function Ve(t){return t.map(e=>Ze(e)?e:n=>e.validate(n))}function De(t){if(!t)return null;let e=t.filter(ye);return e.length==0?null:function(n){return _e(Ce(n,e))}}function be(t){return t!=null?De(Ve(t)):null}function Ae(t){if(!t)return null;let e=t.filter(ye);return e.length==0?null:function(n){let i=Ce(n,e).map(ve);return ne(i).pipe(ie(_e))}}function Me(t){return t!=null?Ae(Ve(t)):null}function oe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ee(t){return t._rawValidators}function Fe(t){return t._rawAsyncValidators}function q(t){return t?Array.isArray(t)?t:[t]:[]}function k(t,e){return Array.isArray(t)?t.includes(e):t===e}function ae(t,e){let n=q(e);return q(t).forEach(r=>{k(n,r)||n.push(r)}),n}function le(t,e){return q(e).filter(n=>!k(t,n))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Me(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},V=class extends G{get formDirective(){return null}get path(){return null}},y=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Xe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},zt=v(d({},Xe),{"[class.ng-submitted]":"isSubmitted"}),Zt=(()=>{let e=class extends T{constructor(i){super(i)}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)(o(y,2))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&W("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c]})})(),t})(),Xt=(()=>{let e=class extends T{constructor(i){super(i)}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)(o(V,10))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&W("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[c]})})(),t})();var M="VALID",x="INVALID",C="PENDING",E="DISABLED";function we(t){return(H(t)?t.validators:t)||null}function Ye(t){return Array.isArray(t)?be(t):t||null}function Ie(t,e){return(H(e)?e.asyncValidators:t)||null}function Je(t){return Array.isArray(t)?Me(t):t||null}function H(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ke(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new I(1e3,"");if(!i[n])throw new I(1001,"")}function Qe(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new I(1002,"")})}var j=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===x}get pending(){return this.status==C}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(le(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(le(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(i=>{i.disable(v(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=M,this._forEachChild(i=>{i.enable(v(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(v(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let n=ve(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(x)?x:M}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ye(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Je(this._rawAsyncValidators)}},ue=class extends j{constructor(e,n,i){super(we(n),Ie(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Qe(this,!0,e),Object.keys(e).forEach(i=>{Ke(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var J=new g("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function et(t,e){return[...e.path,t]}function z(t,e,n=K){Q(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),it(t,e),rt(t,e),nt(t,e),tt(t,e)}function B(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),R(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function U(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function tt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Q(t,e){let n=Ee(t);e.validator!==null?t.setValidators(oe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Fe(t);e.asyncValidator!==null?t.setAsyncValidators(oe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();U(e._rawValidators,r),U(e._rawAsyncValidators,r)}function R(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Ee(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Fe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return U(e._rawValidators,i),U(e._rawAsyncValidators,i),n}function it(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Se(t,e)})}function nt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Se(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Se(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function rt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function st(t,e){t==null,Q(t,e)}function ot(t,e){return R(t,e)}function Oe(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function at(t){return Object.getPrototypeOf(t.constructor)===Z}function lt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ne(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===pe?n=s:at(s)?i=s:r=s}),r||i||n||null}function ut(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ce(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function de(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ct=class extends j{constructor(e=null,n,i){super(we(n),Ie(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(n)&&(n.nonNullable||n.initialValueIsDefault)&&(de(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){de(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var dt=t=>t instanceof ct;var Jt=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})})(),t})();var ht=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)}})(),(()=>{e.\u0275mod=O({type:e})})(),(()=>{e.\u0275inj=S({})})(),t})();var ee=new g("NgModelWithFormControlWarning"),ft={provide:y,useExisting:p(()=>pt)},pt=(()=>{let e=class extends y{set isDisabled(i){}constructor(i,r,s,a,l){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=l,this.update=new _,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Ne(this,s)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&B(r,this,!1),z(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Oe(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&B(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}},t=e;return(()=>{e._ngModelWarningSentOnce=!1})(),(()=>{e.\u0275fac=function(r){return new(r||e)(o(X,10),o(Y,10),o(F,10),o(ee,8),o(J,8))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[m([ft]),c,N]})})(),t})(),gt={provide:V,useExisting:p(()=>mt)},mt=(()=>{let e=class extends V{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return z(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){B(i.control||null,i,!1),ut(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,lt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(B(r||null,i),dt(s)&&(z(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);st(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&ot(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Q(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){this.form}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)(o(X,10),o(Y,10),o(J,8))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&A("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[m([gt]),c,N]})})(),t})();var yt={provide:y,useExisting:p(()=>vt)},vt=(()=>{let e=class extends y{set isDisabled(i){}constructor(i,r,s,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Ne(this,a)}ngOnChanges(i){this._added||this._setUpControl(),Oe(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return et(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}},t=e;return(()=>{e._ngModelWarningSentOnce=!1})(),(()=>{e.\u0275fac=function(r){return new(r||e)(o(V,13),o(X,10),o(Y,10),o(F,10),o(ee,8))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[m([yt]),c,N]})})(),t})(),_t={provide:F,useExisting:p(()=>xe),multi:!0};function Pe(t,e){return t==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function Ct(t){return t.split(":")[0]}var xe=(()=>{let e=class extends Z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let r=this._getOptionId(i),s=Pe(r,i);this.setProperty("value",s)}registerOnChange(i){this.onChange=r=>{this.value=this._getOptionValue(r),i(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(i){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),i))return r;return null}_getOptionValue(i){let r=Ct(i);return this._optionMap.has(r)?this._optionMap.get(r):i}},t=e;return(()=>{e.\u0275fac=function(){let i;return function(s){return(i||(i=P(e)))(s||e)}}()})(),(()=>{e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,s){r&1&&A("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[m([_t]),c]})})(),t})(),Kt=(()=>{let e=class{constructor(i,r,s){this._element=i,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(i){this._select!=null&&(this._select._optionMap.set(this.id,i),this._setElementValue(Pe(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._setElementValue(i),this._select&&this._select.writeValue(this._select.value)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)(o(D),o(b),o(xe,9))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})})(),t})(),Vt={provide:F,useExisting:p(()=>ke),multi:!0};function he(t,e){return t==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function Dt(t){return t.split(":")[0]}var ke=(()=>{let e=class extends Z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let r;if(Array.isArray(i)){let s=i.map(a=>this._getOptionId(a));r=(a,l)=>{a._setSelected(s.indexOf(l.toString())>-1)}}else r=(s,a)=>{s._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(i){this.onChange=r=>{let s=[],a=r.selectedOptions;if(a!==void 0){let l=a;for(let f=0;f<l.length;f++){let w=l[f],L=this._getOptionValue(w.value);s.push(L)}}else{let l=r.options;for(let f=0;f<l.length;f++){let w=l[f];if(w.selected){let L=this._getOptionValue(w.value);s.push(L)}}}this.value=s,i(s)}}_registerOption(i){let r=(this._idCounter++).toString();return this._optionMap.set(r,i),r}_getOptionId(i){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,i))return r;return null}_getOptionValue(i){let r=Dt(i);return this._optionMap.has(r)?this._optionMap.get(r)._value:i}},t=e;return(()=>{e.\u0275fac=function(){let i;return function(s){return(i||(i=P(e)))(s||e)}}()})(),(()=>{e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,s){r&1&&A("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[m([Vt]),c]})})(),t})(),Qt=(()=>{let e=class{constructor(i,r,s){this._element=i,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(i){this._select!=null&&(this._value=i,this._setElementValue(he(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._select?(this._value=i,this._setElementValue(he(this.id,i)),this._select.writeValue(this._select.value)):this._setElementValue(i)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}_setSelected(i){this._renderer.setProperty(this._element.nativeElement,"selected",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)(o(D),o(b),o(ke,9))}})(),(()=>{e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})})(),t})();var bt=(()=>{let e=class{},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)}})(),(()=>{e.\u0275mod=O({type:e})})(),(()=>{e.\u0275inj=S({imports:[ht]})})(),t})();var ei=(()=>{let e=class{static withConfig(i){return{ngModule:e,providers:[{provide:ee,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:J,useValue:i.callSetDisabledState??K}]}}},t=e;return(()=>{e.\u0275fac=function(r){return new(r||e)}})(),(()=>{e.\u0275mod=O({type:e})})(),(()=>{e.\u0275inj=S({imports:[bt]})})(),t})();export{pe as a,se as b,Zt as c,Xt as d,ue as e,ct as f,Jt as g,pt as h,mt as i,vt as j,xe as k,Kt as l,Qt as m,ei as n};