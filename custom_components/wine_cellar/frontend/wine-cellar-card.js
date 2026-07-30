function e(e,t,i,s){var a,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new n(i,e,s)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,u=globalThis,v=u.trustedTypes,b=v?v.emptyScript:"",_=u.reactiveElementPolyfillSupport,m=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let f=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&d(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);a?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),a=t.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=s;const n=a.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i,s=!1,a){if(void 0!==e){const n=this.constructor;if(!1===s&&(a=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??y)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:a},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[m("elementProperties")]=new Map,f[m("finalized")]=new Map,_?.({ReactiveElement:f}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,k=e=>e,C=$.trustedTypes,z=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+D,P=`<${R}>`,A=document,E=()=>A.createComment(""),W=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,I="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,M=/>/g,F=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,U=/"/g,O=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),V=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Z=new WeakMap,G=A.createTreeWalker(A,129);function q(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const Q=(e,t)=>{const i=e.length-1,s=[];let a,n=2===t?"<svg>":3===t?"<math>":"",o=T;for(let t=0;t<i;t++){const i=e[t];let r,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===T?"!--"===l[1]?o=B:void 0!==l[1]?o=M:void 0!==l[2]?(O.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=F):void 0!==l[3]&&(o=F):o===F?">"===l[0]?(o=a??T,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?F:'"'===l[3]?U:N):o===U||o===N?o=F:o===B||o===M?o=T:(o=F,a=void 0);const p=o===F&&e[t+1].startsWith("/>")?" ":"";n+=o===T?i+P:d>=0?(s.push(r),i.slice(0,d)+S+i.slice(d)+D+p):i+D+(-2===d?t:p)}return[q(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class J{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,n=0;const o=e.length-1,r=this.parts,[l,d]=Q(e,t);if(this.el=J.createElement(l,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=G.nextNode())&&r.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(S)){const t=d[n++],i=s.getAttribute(e).split(D),o=/([.?@])?(.*)/.exec(t);r.push({type:1,index:a,name:o[2],strings:i,ctor:"."===o[1]?te:"?"===o[1]?ie:"@"===o[1]?se:ee}),s.removeAttribute(e)}else e.startsWith(D)&&(r.push({type:6,index:a}),s.removeAttribute(e));if(O.test(s.tagName)){const e=s.textContent.split(D),t=e.length-1;if(t>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],E()),G.nextNode(),r.push({type:2,index:++a});s.append(e[t],E())}}}else if(8===s.nodeType)if(s.data===R)r.push({type:2,index:a});else{let e=-1;for(;-1!==(e=s.data.indexOf(D,e+1));)r.push({type:7,index:a}),e+=D.length-1}a++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,s){if(t===V)return t;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const n=W(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(t=Y(e,a._$AS(e,t.values),a,s)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??A).importNode(t,!0);G.currentNode=s;let a=G.nextNode(),n=0,o=0,r=i[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new K(a,a.nextSibling,this,e):1===r.type?t=new r.ctor(a,r.name,r.strings,this,e):6===r.type&&(t=new ae(a,this,e)),this._$AV.push(t),r=i[++o]}n!==r?.index&&(a=G.nextNode(),n++)}return G.currentNode=A,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),W(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new X(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new J(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new K(this.O(E()),this.O(E()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(e,t=this,i,s){const a=this.strings;let n=!1;if(void 0===a)e=Y(this,e,t,0),n=!W(e)||e!==this._$AH&&e!==V,n&&(this._$AH=e);else{const s=e;let o,r;for(e=a[0],o=0;o<a.length-1;o++)r=Y(this,s[i+o],t,o),r===V&&(r=this._$AH[o]),n||=!W(r)||r!==this._$AH[o],r===H?e=H:e!==H&&(e+=(r??"")+a[o+1]),this._$AH[o]=r}n&&!s&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}}class se extends ee{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??H)===V)return;const i=this._$AH,s=e===H&&i!==H||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==H&&(i===H||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ne=$.litHtmlPolyfillSupport;ne?.(J,K),($.litHtmlVersions??=[]).push("3.3.2");const oe=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let a=s._$litPart$;if(void 0===a){const e=i?.renderBefore??null;s._$litPart$=a=new K(t.insertBefore(E(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}re._$litElement$=!0,re.finalized=!0,oe.litElementHydrateSupport?.({LitElement:re});const le=oe.litElementPolyfillSupport;le?.({LitElement:re}),(oe.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ce={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:y},pe=(e=ce,t,i)=>{const{kind:s,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,a,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];t.call(this,i),this.requestUpdate(s,a,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return he({...e,state:!0,attribute:!1})}const ue=o`
  :host {
    --wc-primary: #722f37;
    --wc-primary-light: #9a4a54;
    --wc-primary-text: #c48b91;
    --wc-bg: var(--ha-card-background, var(--card-background-color, #fff));
    --wc-surface: var(--ha-card-background, var(--card-background-color, #fff));
    --wc-text: var(--primary-text-color, #212121);
    --wc-text-secondary: var(--secondary-text-color, #727272);
    --wc-border: var(--divider-color, #e0e0e0);
    --wc-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.1));
    --wc-hover: rgba(128, 128, 128, 0.12);
    font-family: var(--paper-font-body1_-_font-family, "Roboto", sans-serif);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 0;
    font-size: 1.2em;
    font-weight: 500;
    color: var(--wc-text);
  }

  .card-content {
    padding: 16px;
  }

  .stats-bar {
    display: flex;
    gap: 16px;
    padding: 8px 16px;
    font-size: 0.85em;
    color: var(--wc-text-secondary);
  }

  .stats-bar .stat {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .stats-bar .stat-value {
    font-weight: 600;
    color: var(--wc-text);
  }

  .tab-bar {
    display: flex;
    gap: 4px;
    padding: 8px 16px;
    overflow-x: auto;
    border-bottom: 1px solid var(--wc-border);
  }

  .tab {
    padding: 6px 16px;
    border-radius: 20px;
    border: 1px solid var(--wc-border);
    background: transparent;
    color: var(--wc-text-secondary);
    cursor: pointer;
    white-space: nowrap;
    font-size: 0.85em;
    transition: all 0.2s;
  }

  .tab:hover {
    background: var(--wc-hover);
  }

  .tab.active {
    background: var(--wc-primary);
    color: #fff;
    border-color: var(--wc-primary);
  }

  .manage-racks-btn {
    margin-left: auto;
    border-color: transparent;
    color: var(--wc-primary-text);
    font-weight: 500;
    font-size: 0.8em;
    padding: 6px 12px;
  }

  .manage-racks-btn:hover {
    background: var(--wc-hover);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn-primary {
    background: var(--wc-primary);
    color: #fff;
  }

  .btn-primary:hover {
    background: var(--wc-primary-light);
  }

  .btn-outline {
    background: transparent;
    color: var(--wc-text);
    border: 1px solid var(--wc-border);
  }

  .btn-outline:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  .btn-icon {
    background: transparent;
    border: none;
    color: var(--wc-text-secondary);
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn-icon:hover {
    background: var(--wc-hover);
  }

  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    animation: fadeIn 0.2s ease;
  }

  .dialog {
    background: var(--wc-bg);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);
    max-width: 500px;
    width: 90%;
    max-height: 85vh;
    overflow-y: auto;
    animation: slideUp 0.3s ease;
  }

  .dialog-header {
    padding: 20px 20px 12px;
    font-size: 1.2em;
    font-weight: 500;
    border-bottom: 1px solid var(--wc-border);
  }

  .dialog-body {
    padding: 16px 20px;
  }

  .dialog-footer {
    padding: 12px 20px 20px;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group label {
    display: block;
    font-size: 0.85em;
    font-weight: 500;
    color: var(--wc-text-secondary);
    margin-bottom: 4px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--wc-border);
    border-radius: 8px;
    font-size: 0.95em;
    background: var(--wc-bg);
    color: var(--wc-text);
    box-sizing: border-box;
  }

  .form-group textarea {
    min-height: 60px;
    resize: vertical;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Phone: full-screen dialogs, compact forms */
  @media (max-width: 599px) {
    .dialog {
      width: 100%;
      max-width: 100%;
      max-height: 100vh;
      border-radius: 12px 12px 0 0;
      margin-top: auto;
    }
    .dialog-overlay {
      align-items: flex-end;
    }
    .dialog-header {
      padding: 16px 16px 10px;
      font-size: 1.1em;
    }
    .dialog-body {
      padding: 12px 16px;
    }
    .dialog-footer {
      padding: 10px 16px 16px;
    }
    .form-row {
      grid-template-columns: 1fr;
      gap: 8px;
    }
    .tab-bar {
      padding: 6px 12px;
      gap: 3px;
    }
    .tab {
      padding: 5px 12px;
      font-size: 0.8em;
    }
    .depth-panel {
      width: 100% !important;
      border-radius: 0 !important;
    }
  }

  /* --- Depth Side Panel --- */
  .depth-panel-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
    animation: fadeIn 0.2s ease;
  }

  .depth-panel {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    background: var(--wc-bg);
    z-index: 100;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }

  .depth-panel.open {
    transform: translateX(0);
  }

  .depth-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid var(--wc-border, #e0e0e0);
    flex-shrink: 0;
  }

  .depth-panel-title {
    font-weight: 600;
    font-size: 1em;
    color: var(--wc-text, #333);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .depth-panel-subtitle {
    font-size: 0.8em;
    font-weight: 400;
    color: var(--wc-text-secondary, #888);
  }

  .depth-panel-close {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
    color: var(--wc-text-secondary, #888);
  }

  .depth-panel-close:hover {
    background: var(--wc-hover);
  }

  .depth-panel-slots {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .depth-slot {
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s, box-shadow 0.15s;
  }

  .depth-slot:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .depth-slot-label {
    font-size: 0.7em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--wc-text-secondary, #888);
    padding: 0 4px 4px;
  }

  .depth-slot-wine {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    background: var(--wc-bg);
    border: 1px solid var(--wc-border);
    border-radius: 10px;
  }

  .depth-slot-thumb {
    width: 32px;
    height: 44px;
    border-radius: 4px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .depth-slot-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .depth-slot-info {
    flex: 1;
    min-width: 0;
  }

  .depth-slot-name {
    font-weight: 600;
    font-size: 0.88em;
    color: var(--wc-text, #333);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .depth-slot-meta {
    font-size: 0.78em;
    color: var(--wc-text-secondary, #888);
    margin-top: 2px;
  }

  .depth-slot-empty {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 12px;
    border: 2px dashed var(--wc-border, #ddd);
    border-radius: 10px;
    color: var(--wc-text-secondary, #aaa);
    font-size: 0.85em;
  }

  .depth-slot.empty:hover .depth-slot-empty {
    border-color: var(--wc-primary-text);
    color: var(--wc-primary-text);
  }

  .depth-slot-plus {
    font-size: 1.3em;
    font-weight: 300;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--wc-hover);
  }

  .depth-slot.empty:hover .depth-slot-plus {
    background: rgba(196, 139, 145, 0.2);
  }
`,ve={bulk:"Bulk Bin",box:"Wine Box"},be=[1,3,6,12,24],_e=[{id:"drank",label:"Drank"},{id:"gifted",label:"Gifted"},{id:"sold",label:"Sold"},{id:"broken",label:"Broken"},{id:"spoiled",label:"Spoiled"},{id:"other",label:"Other"}],me={red:"#722F37",white:"#F5E6CA","rosé":"#E8A0BF",sparkling:"#D4E09B",dessert:"#DAA520"},we={red:"Red",white:"White","rosé":"Rosé",sparkling:"Sparkling",dessert:"Dessert"};let ye=class extends re{constructor(){super(...arguments),this.wines=[],this._dragOverCell=null,this._longPressTimer=null}_getWinesAt(e,t){return this.wines.filter(i=>i.cabinet_id===this.cabinet.id&&i.row===e&&i.col===t)}_getStorageRowSet(){const e=this.cabinet.storage_rows;return new Set((e||[]).map(e=>e.row))}_getStorageRowConfig(e){return(this.cabinet.storage_rows||[]).find(t=>t.row===e)}_getStorageRowName(e){return this._getStorageRowConfig(e)?.name||"Storage"}_getBottomZoneWines(){return this.wines.filter(e=>e.cabinet_id===this.cabinet.id&&"bottom"===e.zone)}_getStorageRowWines(e){return this.wines.filter(t=>t.cabinet_id===this.cabinet.id&&t.zone===`storage-${e}`)}_onCellClick(e,t,i,s=0,a=1,n=[]){this.dispatchEvent(new CustomEvent("cell-click",{detail:{cabinet:this.cabinet,row:e,col:t,wine:i,wines:n,wineCount:s,cabinetDepth:a},bubbles:!0,composed:!0}))}_onZoneClick(e,t="bottom"){this.dispatchEvent(new CustomEvent("zone-click",{detail:{cabinet:this.cabinet,zone:t,wine:e},bubbles:!0,composed:!0}))}_onZoneContainerClick(e,t){this.dispatchEvent(new CustomEvent("zone-container-click",{detail:{cabinet:this.cabinet,zone:e,storageRow:t},bubbles:!0,composed:!0}))}_brightenColor(e){return{"#722F37":"#c44d58","#F5E6CA":"#fff8e8","#E8A0BF":"#f5c0d8","#D4E09B":"#e8f0b8","#DAA520":"#f0c040"}[e]||e}_onTouchStart(e){this._longPressTimer=window.setTimeout(()=>{this._longPressTimer=null,this.dispatchEvent(new CustomEvent("wine-longpress",{detail:{wine:e,cabinet:this.cabinet},bubbles:!0,composed:!0}))},500)}_onTouchEnd(){null!==this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)}_onTouchMove(){null!==this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)}_onDragStart(e,t,i,s,a){e.dataTransfer&&(e.dataTransfer.setData("text/plain",JSON.stringify({wineId:t.id,cabinetId:this.cabinet.id,row:i??null,col:s??null,zone:a||""})),e.dataTransfer.effectAllowed="move",e.currentTarget.classList.add("drag-source"))}_onDragEnd(e){e.currentTarget.classList.remove("drag-source"),this._dragOverCell=null}_onDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._dragOverCell=t}_onDragLeave(e){this._dragOverCell=null}_onDrop(e,t,i,s){if(e.preventDefault(),this._dragOverCell=null,e.dataTransfer)try{const a=JSON.parse(e.dataTransfer.getData("text/plain"));this.dispatchEvent(new CustomEvent("wine-drop",{detail:{wineId:a.wineId,sourceCabinetId:a.cabinetId,sourceRow:a.row,sourceCol:a.col,sourceZone:a.zone,targetCabinetId:this.cabinet.id,targetRow:t??null,targetCol:i??null,targetZone:s||""},bubbles:!0,composed:!0}))}catch{}}_renderStorageZone(e){const t=this._getStorageRowConfig(e),i=t?.name||"Storage",s=t?.type||"bulk",a=t?.capacity||20,n=`storage-${e}`,o=this._getStorageRowWines(e),r=`zone-${n}`,l=this._dragOverCell===r;return"box"===s?this._renderBoxZone(n,r,i,a,o,l,t):this._renderBulkZone(n,r,i,a,o,l,t)}_renderBulkZone(e,t,i,s,a,n,o){return j`
      <div class="bottom-zone ${n?"drag-over":""}"
        @click=${()=>o?this._onZoneContainerClick(e,o):this._onZoneClick(void 0,e)}
        @dragover=${e=>this._onDragOver(e,t)}
        @dragleave=${e=>this._onDragLeave(e)}
        @drop=${t=>this._onDrop(t,void 0,void 0,e)}>
        <div class="bottom-zone-label">◇ ${i} <span class="zone-count">${a.length}/${s}</span></div>
        ${a.map(t=>j`
            <div
              class="zone-bottle"
              style="background: ${me[t.type]||me.red}"
              draggable="true"
              @click=${i=>{i.stopPropagation(),this._onZoneClick(t,e)}}
              @dragstart=${i=>{i.stopPropagation(),this._onDragStart(i,t,void 0,void 0,e)}}
              @dragend=${e=>this._onDragEnd(e)}
              title="${t.name}"
            >
              ${(t.vintage||"NV").toString().slice(-2)}
            </div>
          `)}
      </div>
    `}_renderBoxZone(e,t,i,s,a,n,o){const r=o.boxes||[s];let l=0;const d=r.map(e=>{const t=l;l+=e;const i=a.filter(i=>{const s=i.depth||0;return s>=t&&s<t+e});return{size:e,start:t,wineCount:i.length}});return j`
      <div class="bottom-zone zone-box-row ${n?"drag-over":""}"
        @click=${()=>this._onZoneContainerClick(e,o)}
        @dragover=${e=>this._onDragOver(e,t)}
        @dragleave=${e=>this._onDragLeave(e)}
        @drop=${t=>this._onDrop(t,void 0,void 0,e)}>
        <div class="bottom-zone-label">📦 ${i} <span class="zone-count">${a.length}/${s}</span></div>
        <div class="zone-box-grid">
          ${d.map(e=>j`
            <div class="zone-box-item ${e.wineCount>0?"has-wine":""}">
              <div class="zone-box-shape">
                <div class="box-lid"></div>
                <div class="box-body"><span class="box-count">${e.wineCount}/${e.size}</span></div>
              </div>
              <div class="zone-box-size">${e.size}-pk</div>
            </div>
          `)}
        </div>
      </div>
    `}_renderGridRow(e,t){const i=this.cabinet.depth||1;return j`
      <div class="row">
        ${Array.from({length:t},(t,s)=>{const a=this._getWinesAt(e,s),n=a.length,o=a.length>0?a.sort((e,t)=>(e.depth||0)-(t.depth||0))[0]:void 0,r=o?me[o.type]||me.red:"transparent",l=o?.disposition||"",d="D"===l?"drink":"H"===l?"hold":"P"===l?"past":"",c=o?.rating?o.rating.toFixed(1):"",p=o?this._brightenColor(r):"",h=`${e}-${s}`,g=this._dragOverCell===h;return j`
            <div
              class="cell ${o?"filled":"empty"} ${g?"drag-over":""}"
              style=${o?`background: ${r}; --bottle-type-color: ${p}`:""}
              draggable=${o?"true":"false"}
              @click=${()=>this._onCellClick(e,s,o,n,i,a)}
              @touchstart=${o?()=>this._onTouchStart(o):H}
              @touchend=${o?()=>this._onTouchEnd():H}
              @touchmove=${o?()=>this._onTouchMove():H}
              @dragstart=${o?t=>this._onDragStart(t,o,e,s):H}
              @dragend=${o?e=>this._onDragEnd(e):H}
              @dragover=${e=>this._onDragOver(e,h)}
              @dragleave=${e=>this._onDragLeave(e)}
              @drop=${t=>this._onDrop(t,e,s)}
              title=${o?`${o.name} (${o.vintage||"NV"})${o.rating?` ★${o.rating}`:""}${n>1?` [${n}/${i} deep]`:""}`:`Empty - Row ${e+1}, Col ${s+1}`}
            >
              ${o?j`
                    ${o.image_url?j`<img class="wine-thumb" src="${o.image_url}" alt="" />`:H}
                    <span class="bottle-label">${o.vintage||"NV"}</span>
                    ${d?j`<span class="disposition ${d}">${l}</span>`:H}
                    ${c?j`<span class="rating-badge">★${c}</span>`:H}
                    ${n>1?j`<span class="depth-badge">${n}</span>`:H}
                    ${i>=2?j`
                          <span class="depth-dots">
                            ${Array.from({length:i},(e,t)=>{const i=a.find(e=>(e.depth||0)===t),s=i?me[i.type]||me.red:"";return j`<span
                                class="depth-dot ${i?"":"empty"}"
                                style=${i?`background: ${s}`:""}
                              ></span>`})}
                          </span>
                        `:H}
                  `:i>=2&&0===n?j`
                      <span class="depth-dots">
                        ${Array.from({length:i},()=>j`<span class="depth-dot empty"></span>`)}
                      </span>
                    `:H}
            </div>
          `})}
      </div>
    `}_renderCell(e,t){const i=this.cabinet.depth||1,s=this._getWinesAt(e,t),a=s.length,n=s.length>0?s.sort((e,t)=>(e.depth||0)-(t.depth||0))[0]:void 0,o=n?me[n.type]||me.red:"transparent",r=n?.disposition||"",l="D"===r?"drink":"H"===r?"hold":"P"===r?"past":"",d=n?.rating?n.rating.toFixed(1):"",c=n?this._brightenColor(o):"",p=`${e}-${t}`,h=this._dragOverCell===p;return j`
      <div
        class="cell ${n?"filled":"empty"} ${h?"drag-over":""}"
        style=${n?`background: ${o}; --bottle-type-color: ${c}`:""}
        draggable=${n?"true":"false"}
        @click=${()=>this._onCellClick(e,t,n,a,i,s)}
        @touchstart=${n?()=>this._onTouchStart(n):H}
        @touchend=${n?()=>this._onTouchEnd():H}
        @touchmove=${n?()=>this._onTouchMove():H}
        @dragstart=${n?i=>this._onDragStart(i,n,e,t):H}
        @dragend=${n?e=>this._onDragEnd(e):H}
        @dragover=${e=>this._onDragOver(e,p)}
        @dragleave=${e=>this._onDragLeave(e)}
        @drop=${i=>this._onDrop(i,e,t)}
        title=${n?`${n.name} (${n.vintage||"NV"})${n.rating?` ★${n.rating}`:""}${a>1?` [${a}/${i} deep]`:""}`:`Empty - Row ${e+1}, Col ${t+1}`}
      >
        ${n?j`
              ${n.image_url?j`<img class="wine-thumb" src="${n.image_url}" alt="" />`:H}
              <span class="bottle-label">${n.vintage||"NV"}</span>
              ${l?j`<span class="disposition ${l}">${r}</span>`:H}
              ${d?j`<span class="rating-badge">★${d}</span>`:H}
              ${a>1?j`<span class="depth-badge">${a}</span>`:H}
              ${i>=2?j`
                    <span class="depth-dots">
                      ${Array.from({length:i},(e,t)=>{const i=s.find(e=>(e.depth||0)===t),a=i?me[i.type]||me.red:"";return j`<span
                          class="depth-dot ${i?"":"empty"}"
                          style=${i?`background: ${a}`:""}
                        ></span>`})}
                    </span>
                  `:H}
            `:i>=2&&0===a?j`
                <span class="depth-dots">
                  ${Array.from({length:i},()=>j`<span class="depth-dot empty"></span>`)}
                </span>
              `:H}
      </div>
    `}render(){const{rows:e,cols:t}=this.cabinet,i=this._getStorageRowSet();return j`
      <div class="cabinet">
        <div class="cabinet-name">${this.cabinet.name}</div>
        <div class="grid-inner">
          ${Array.from({length:e},(e,s)=>i.has(s)?this._renderStorageZone(s):this._renderGridRow(s,t))}
        </div>
        ${this.cabinet.has_bottom_zone?j`
              <div class="bottom-zone ${"zone-bottom"===this._dragOverCell?"drag-over":""}"
                @click=${()=>this._onZoneClick()}
                @dragover=${e=>this._onDragOver(e,"zone-bottom")}
                @dragleave=${e=>this._onDragLeave(e)}
                @drop=${e=>this._onDrop(e,void 0,void 0,"bottom")}>
                <div class="bottom-zone-label">
                  ${this.cabinet.bottom_zone_name}
                </div>
                ${this._getBottomZoneWines().map(e=>j`
                    <div
                      class="zone-bottle"
                      style="background: ${me[e.type]||me.red}"
                      draggable="true"
                      @click=${t=>{t.stopPropagation(),this._onZoneClick(e)}}
                      @dragstart=${t=>{t.stopPropagation(),this._onDragStart(t,e,void 0,void 0,"bottom")}}
                      @dragend=${e=>this._onDragEnd(e)}
                      title="${e.name}"
                    >
                      ${(e.vintage||"NV").toString().slice(-2)}
                    </div>
                  `)}
              </div>
            `:H}
      </div>
    `}};ye.styles=[ue,o`
      :host {
        display: block;
      }

      .cabinet {
        background: linear-gradient(135deg, #8b6914 0%, #c4973b 50%, #8b6914 100%);
        border-radius: 12px;
        padding: 8px;
        box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3),
          0 4px 12px rgba(0, 0, 0, 0.2);
      }

      .cabinet-name {
        text-align: center;
        color: #f5e6ca;
        font-size: 0.8em;
        font-weight: 600;
        padding: 4px 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      }

      .grid-inner {
        background: linear-gradient(180deg, #1a1a3a 0%, #0d0d2b 100%);
        border-radius: 8px;
        padding: 6px;
        position: relative;
        overflow: hidden;
      }

      /* Blue LED glow effect */
      .grid-inner::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(
          ellipse at center,
          rgba(50, 100, 255, 0.15) 0%,
          transparent 70%
        );
        pointer-events: none;
      }

      .row {
        display: flex;
        gap: 2px;
        margin-bottom: 2px;
        position: relative;
      }

      /* Scalloped shelf appearance */
      .row::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #6b5010 0%, #a07828 50%, #6b5010 100%);
        border-radius: 0 0 2px 2px;
      }

      .cell {
        flex: 1;
        aspect-ratio: 1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        position: relative;
        min-width: 0;
        z-index: 1;
        container-type: inline-size;
      }

      .cell.empty {
        background: rgba(255, 255, 255, 0.05);
        border: 1px dashed rgba(255, 255, 255, 0.15);
      }

      .cell.empty:hover {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.3);
      }

      .cell.filled {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4),
          inset 0 -2px 4px rgba(0, 0, 0, 0.3),
          0 0 8px rgba(50, 100, 255, 0.15);
        border: 2px solid var(--bottle-type-color, rgba(255, 255, 255, 0.1));
        overflow: hidden;
      }

      .cell .wine-thumb {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      .cell.filled:hover {
        transform: scale(1.15);
        z-index: 10;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5),
          0 0 16px rgba(50, 100, 255, 0.3);
      }

      .cell .bottle-label {
        position: absolute;
        bottom: -14px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 6px;
        color: rgba(255, 255, 255, 0.6);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 40px;
        display: none;
        pointer-events: none;
      }

      .cell.filled:hover .bottle-label {
        display: block;
      }

      .cell .disposition {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 65%;
        height: 65%;
        border-radius: 50%;
        font-size: clamp(7px, 30cqi, 14px);
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        z-index: 2;
        pointer-events: none;
        line-height: 1;
        border: 2px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
      }

      .cell .disposition.drink {
        background: #2e7d32;
      }

      .cell .disposition.hold {
        background: #1565c0;
      }

      .cell .disposition.past {
        background: #c62828;
      }

      .cell .rating-badge {
        position: absolute;
        bottom: -2px;
        right: -2px;
        font-size: 6px;
        font-weight: 700;
        color: #fff;
        background: rgba(0,0,0,0.6);
        border-radius: 4px;
        padding: 1px 3px;
        z-index: 2;
        pointer-events: none;
        line-height: 1;
        display: none;
      }

      .cell.filled:hover .rating-badge {
        display: block;
      }

      .cell .depth-badge {
        position: absolute;
        top: -2px;
        left: -2px;
        font-size: 7px;
        font-weight: 700;
        color: #fff;
        background: rgba(30, 136, 229, 0.85);
        border-radius: 50%;
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
        pointer-events: none;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      }

      .depth-dots {
        position: absolute;
        bottom: 16%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 3px;
        z-index: 3;
        pointer-events: none;
      }

      .depth-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1.5px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
      }

      .depth-dot.empty {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.25);
      }

      .bottom-zone {
        margin-top: 8px;
        background: linear-gradient(135deg, #6b5010 0%, #8b6914 100%);
        border-radius: 6px;
        padding: 8px;
        min-height: 40px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        cursor: pointer;
        position: relative;
        z-index: 1;
      }

      .bottom-zone-label {
        font-size: 0.65em;
        color: rgba(255, 255, 255, 0.6);
        width: 100%;
        text-align: center;
      }

      .zone-bottle {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        transition: transform 0.2s;
      }

      .zone-bottle:hover {
        transform: scale(1.1);
      }

      /* Drag and drop */
      .cell.drag-source {
        opacity: 0.35;
        transform: scale(0.9);
      }

      .cell.drag-over {
        box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.8);
        transform: scale(1.1);
        background: rgba(66, 165, 245, 0.15) !important;
        z-index: 10;
      }

      .cell[draggable="true"] {
        cursor: grab;
      }

      .cell[draggable="true"]:active {
        cursor: grabbing;
      }

      .zone-bottle.drag-over {
        box-shadow: 0 0 0 2px rgba(66, 165, 245, 0.8);
        transform: scale(1.15);
      }

      .bottom-zone.drag-over {
        box-shadow: inset 0 0 0 2px rgba(66, 165, 245, 0.8);
        background: rgba(66, 165, 245, 0.1);
      }

      .zone-count {
        font-weight: 400;
        opacity: 0.7;
        margin-left: 4px;
      }

      .zone-fill-dots {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        align-items: center;
      }

      .zone-fill-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1.5px solid rgba(255, 255, 255, 0.4);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
      }

      .zone-fill-dot.empty {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
      }

      .zone-box-row {
        cursor: pointer;
        padding: 4px 8px;
        min-height: 0;
        flex-direction: column;
        align-items: center;
      }

      .zone-box-row:hover {
        background: linear-gradient(135deg, #7a5a12 0%, #9a7820 100%);
      }

      .zone-box-grid {
        display: flex;
        gap: 8px;
        align-items: flex-end;
        justify-content: center;
        padding: 2px 0;
        width: 100%;
      }

      .zone-box-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
      }

      .zone-box-shape {
        width: 56px;
        height: 36px;
        position: relative;
      }

      .zone-box-shape .box-lid {
        position: absolute;
        top: 0;
        left: -2px;
        right: -2px;
        height: 28%;
        background: linear-gradient(180deg, #a08040 0%, #7a6020 100%);
        border-radius: 2px 2px 0 0;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-bottom: none;
      }

      .zone-box-shape .box-body {
        position: absolute;
        top: 28%;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, #8b6914 0%, #6b5010 100%);
        border-radius: 0 0 2px 2px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .zone-box-shape .box-count {
        font-size: 0.7em;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1;
      }

      .zone-box-item.has-wine .box-count {
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      }

      .zone-box-size {
        font-size: 0.55em;
        color: rgba(255, 255, 255, 0.5);
      }

      /* Phone: tighter spacing, smaller elements */
      @media (max-width: 599px) {
        .cabinet {
          padding: 6px;
          border-radius: 10px;
        }
        .cabinet-name {
          font-size: 0.75em;
          padding: 3px 0;
        }
        .grid-inner {
          padding: 4px;
        }
        .row {
          gap: 1px;
          margin-bottom: 1px;
        }
        .row::after {
          height: 2px;
        }
        .cell .bottle-label {
          font-size: 5px;
          max-width: 30px;
        }
        .bottom-zone {
          margin-top: 6px;
          padding: 6px;
          gap: 4px;
          min-height: 32px;
        }
        .bottom-zone-label {
          font-size: 0.6em;
        }
        .zone-bottle {
          width: 22px;
          height: 22px;
          font-size: 7px;
        }
      }

      /* Tablet: moderate sizing */
      @media (min-width: 600px) and (max-width: 1023px) {
        .cabinet {
          padding: 6px;
        }
        .grid-inner {
          padding: 5px;
        }
        .row {
          gap: 2px;
          margin-bottom: 1px;
        }
      }
    `],e([he({attribute:!1})],ye.prototype,"cabinet",void 0),e([he({attribute:!1})],ye.prototype,"wines",void 0),e([ge()],ye.prototype,"_dragOverCell",void 0),ye=e([de("cabinet-grid")],ye);let xe=class extends re{constructor(){super(...arguments),this.value=0,this.readonly=!1,this.size=24}_onClick(e,t){if(this.readonly)return;const i=t.currentTarget.getBoundingClientRect(),s=t.clientX-i.left<i.width/2?e+.5:e+1,a=s===this.value?0:s;this.dispatchEvent(new CustomEvent("rating-change",{detail:{value:a},bubbles:!0,composed:!0}))}_renderStar(e){const t=this.value-e,i=this.size;let s;return s=t>=1?j`
        <svg width=${i} height=${i} viewBox="0 0 24 24">
          <path fill="#f5a623" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      `:t>=.5?j`
        <svg width=${i} height=${i} viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-${e}">
              <stop offset="50%" stop-color="#f5a623"/>
              <stop offset="50%" stop-color="transparent"/>
            </linearGradient>
          </defs>
          <path fill="url(#half-${e})" stroke="#f5a623" stroke-width="1" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      `:j`
        <svg width=${i} height=${i} viewBox="0 0 24 24">
          <path fill="none" stroke="#ccc" stroke-width="1.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      `,j`
      <span
        class="star ${this.readonly?"readonly":""}"
        @click=${t=>this._onClick(e,t)}
      >
        ${s}
      </span>
    `}render(){return j`
      ${[0,1,2,3,4].map(e=>this._renderStar(e))}
      ${this.value>0?j`<span class="rating-text">${this.value.toFixed(1)}</span>`:""}
    `}};xe.styles=o`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }

    .star {
      cursor: pointer;
      position: relative;
      user-select: none;
      transition: transform 0.15s;
    }

    .star:hover {
      transform: scale(1.2);
    }

    .star.readonly {
      cursor: default;
    }

    .star.readonly:hover {
      transform: none;
    }

    .star svg {
      display: block;
    }

    .rating-text {
      margin-left: 6px;
      font-size: 0.9em;
      font-weight: 600;
      color: var(--wc-text, #212121);
    }
  `,e([he({type:Number})],xe.prototype,"value",void 0),e([he({type:Boolean})],xe.prototype,"readonly",void 0),e([he({type:Number})],xe.prototype,"size",void 0),xe=e([de("star-rating")],xe);let fe=class extends re{constructor(){super(...arguments),this.wine=null,this.open=!1,this.mode="cellar",this._editing=!1,this._editingFields=!1,this._editData={},this._userRating=0,this._tastingNotes={aroma:"",taste:"",finish:"",overall:""},this._saving=!1,this._refreshing=!1,this._analyzing=!1,this._showRemoveConfirm=!1,this.hasGemini=!1}updated(e){e.has("wine")&&this.wine&&(this._userRating=this.wine.user_rating??0,this._tastingNotes=this.wine.tasting_notes?{...this.wine.tasting_notes}:{aroma:"",taste:"",finish:"",overall:""},this._editing=!1,this._editingFields=!1)}_close(){this.open=!1,this._editing=!1,this._editingFields=!1,this.dispatchEvent(new CustomEvent("close"))}_startEditingFields(){this.wine&&(this._editData={name:this.wine.name||"",winery:this.wine.winery||"",vintage:this.wine.vintage,type:this.wine.type||"red",region:this.wine.region||"",country:this.wine.country||"",grape_variety:this.wine.grape_variety||"",price:this.wine.price,retail_price:this.wine.retail_price,purchase_date:this.wine.purchase_date||"",drink_by:this.wine.drink_by||"",notes:this.wine.notes||"",alcohol:this.wine.alcohol||""},this._editingFields=!0)}_cancelEditingFields(){this._editingFields=!1,this._editData={}}_updateEditField(e,t){this._editData={...this._editData,[e]:t}}async _saveFields(){if(this.wine&&this.hass){this._saving=!0;try{const e={...this._editData};""===e.vintage||null===e.vintage?e.vintage=null:e.vintage=parseInt(e.vintage)||null,""===e.price||null===e.price?e.price=null:e.price=parseFloat(e.price)||null,""===e.retail_price||null===e.retail_price?e.retail_price=null:e.retail_price=parseFloat(e.retail_price)||null,"buylist"===this.mode?(await this.hass.callWS({type:"wine_cellar/update_buy_list_item",item_id:this.wine.id,updates:e}),this.wine={...this.wine,...e},this._editingFields=!1,this._editData={},this.dispatchEvent(new CustomEvent("buy-list-updated",{bubbles:!0,composed:!0}))):(await this.hass.callWS({type:"wine_cellar/update_wine",wine_id:this.wine.id,updates:e}),this.wine={...this.wine,...e},this._editingFields=!1,this._editData={},this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0})))}catch(e){console.error("Failed to save wine fields",e)}this._saving=!1}}_onRemove(){this.wine&&("buylist"===this.mode?(this.dispatchEvent(new CustomEvent("remove-buy-list-item",{detail:{item_id:this.wine.id},bubbles:!0,composed:!0})),this._close()):this._showRemoveConfirm=!0)}_confirmRemove(e){this.wine&&(this.dispatchEvent(new CustomEvent("remove-wine",{detail:{wine_id:this.wine.id,reason:e},bubbles:!0,composed:!0})),this._showRemoveConfirm=!1,this._close())}_onMove(){this.wine&&(this.dispatchEvent(new CustomEvent("move-wine",{detail:{wine:this.wine},bubbles:!0,composed:!0})),this._close())}async _moveToUnassigned(){if(this.wine&&this.hass)try{const e={cabinet_id:"",row:null,col:null,zone:"",depth:0};await this.hass.callWS({type:"wine_cellar/move_wine",wine_id:this.wine.id,cabinet_id:""}),this.wine={...this.wine,...e},this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0})),this._close()}catch(e){console.error("Failed to move wine to Unassigned",e)}}_onCopy(){this.wine&&(this.dispatchEvent(new CustomEvent("copy-wine",{detail:{wine:this.wine},bubbles:!0,composed:!0})),this._close())}_onRatingChange(e){this._userRating=e.detail.value}_onTastingChange(e,t){const i=t.target.value;this._tastingNotes={...this._tastingNotes,[e]:i}}async _saveRating(){if(this.wine&&this.hass){this._saving=!0;try{const e={user_rating:this._userRating||null,tasting_notes:this._hasTastingNotes()?this._tastingNotes:null};"buylist"===this.mode?await this.hass.callWS({type:"wine_cellar/update_buy_list_item",item_id:this.wine.id,updates:e}):await this.hass.callWS({type:"wine_cellar/update_wine",wine_id:this.wine.id,updates:e}),this.wine={...this.wine,...e},this._editing=!1,this.dispatchEvent(new CustomEvent("buylist"===this.mode?"buy-list-updated":"wine-updated",{bubbles:!0,composed:!0}))}catch(e){console.error("Failed to save rating/notes",e)}this._saving=!1}}async _refreshFromVivino(){if(this.wine&&this.hass){this._refreshing=!0;try{const e=await this.hass.callWS({type:"wine_cellar/refresh_wine",wine_id:this.wine.id});e.error?alert(e.error):e.wine&&(this.wine={...this.wine,...e.wine},this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0})))}catch(e){console.error("Vivino refresh failed",e)}this._refreshing=!1}}async _analyzeWithAI(){if(this.wine&&this.hass){this._analyzing=!0;try{const e=await this.hass.callWS({type:"wine_cellar/analyze_single_wine",wine_id:this.wine.id});e.error?alert(e.error):e.wine&&(this.wine={...this.wine,...e.wine},this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0})))}catch(e){console.error("AI analysis failed",e)}this._analyzing=!1}}_splitPairings(e){const t=[];let i=0,s="";for(const a of e)"("===a?i++:")"===a&&i--,","===a&&0===i?(s.trim()&&t.push(s.trim()),s=""):s+=a;return s.trim()&&t.push(s.trim()),t}_hasTastingNotes(){const e=this._tastingNotes;return!!(e.aroma||e.taste||e.finish||e.overall)}_renderEditForm(){const e=this._editData;return j`
      <div class="edit-form">
        <div class="form-group">
          <label>Wine Name</label>
          <input type="text" .value=${e.name}
            @input=${e=>this._updateEditField("name",e.target.value)} />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Winery</label>
            <input type="text" .value=${e.winery}
              @input=${e=>this._updateEditField("winery",e.target.value)} />
          </div>
          <div class="form-group">
            <label>Vintage</label>
            <input type="number" .value=${e.vintage?.toString()||""}
              @input=${e=>this._updateEditField("vintage",e.target.value)} />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Type</label>
            <select .value=${e.type}
              @change=${e=>this._updateEditField("type",e.target.value)}>
              ${Object.entries(we).map(([t,i])=>j`<option value=${t} ?selected=${e.type===t}>${i}</option>`)}
            </select>
          </div>
          <div class="form-group">
            <label>Purchase Price</label>
            <input type="number" step="0.01" .value=${e.price?.toString()||""}
              @input=${e=>this._updateEditField("price",e.target.value)} />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Current Value</label>
            <input type="number" step="0.01" .value=${e.retail_price?.toString()||""}
              @input=${e=>this._updateEditField("retail_price",e.target.value)} />
          </div>
          <div class="form-group">
            <label>Region</label>
            <input type="text" .value=${e.region}
              @input=${e=>this._updateEditField("region",e.target.value)} />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Country</label>
            <input type="text" .value=${e.country}
              @input=${e=>this._updateEditField("country",e.target.value)} />
          </div>
          <div class="form-group">
            <label>Grape Variety</label>
            <input type="text" .value=${e.grape_variety}
              @input=${e=>this._updateEditField("grape_variety",e.target.value)} />
          </div>
          <div class="form-group">
            <label>Alcohol</label>
            <input type="text" .value=${e.alcohol} placeholder="e.g. 13.5%"
              @input=${e=>this._updateEditField("alcohol",e.target.value)} />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Purchase Date</label>
            <input type="date" .value=${e.purchase_date}
              @input=${e=>this._updateEditField("purchase_date",e.target.value)} />
          </div>
          <div class="form-group">
            <label>Drink By</label>
            <input type="text" placeholder="e.g. 2030" .value=${e.drink_by}
              @input=${e=>this._updateEditField("drink_by",e.target.value)} />
          </div>
        </div>

        <div class="form-group">
          <label>Notes</label>
          <textarea .value=${e.notes}
            @input=${e=>this._updateEditField("notes",e.target.value)}></textarea>
        </div>
      </div>

      <div class="edit-actions">
        <button class="btn btn-outline" @click=${this._cancelEditingFields}>Cancel</button>
        <button class="btn btn-primary" ?disabled=${this._saving} @click=${this._saveFields}>
          ${this._saving?"Saving...":"Save"}
        </button>
      </div>
    `}render(){if(!this.open||!this.wine)return H;const e=this.wine,t=me[e.type]||me.red,i=we[e.type]||e.type;return j`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" style="position:relative" @click=${e=>e.stopPropagation()}>
          <div class="dialog-top-bar">
            ${"winelist"!==this.mode?j`<button class="icon-btn" title="Edit" @click=${this._startEditingFields}>✏️</button>`:H}
            <button class="icon-btn close-btn" title="Close" @click=${this._close}>✕</button>
          </div>
          <div class="wine-header">
            ${e.image_url?j`<img class="wine-image" src="${e.image_url}" alt="${e.name}" />`:j`
                  <div class="wine-image-placeholder" style="background: ${t}">
                    🍷
                  </div>
                `}
            <div class="wine-title">
              <div class="wine-name">${e.name}</div>
              <div class="wine-winery">${e.winery}</div>
              <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
                <span class="wine-type-badge" style="background: ${t}">
                  ${i}
                </span>
                ${e.disposition?j`<span class="wine-type-badge" style="background: ${"D"===e.disposition?"#2e7d32":"H"===e.disposition?"#1565c0":"P"===e.disposition?"#c62828":"#666"}">${"D"===e.disposition?"Drink Now":"H"===e.disposition?"Hold":"P"===e.disposition?"Past Peak":e.disposition}</span>`:H}
              </div>
              ${e.rating?j`
                    <div class="wine-rating">
                      <span class="rating-star">★</span>
                      ${e.rating.toFixed(1)}
                      <span style="font-size:0.8em;color:var(--wc-text-secondary)">
                        Vivino${e.ratings_count?` (${e.ratings_count.toLocaleString()} ratings)`:""}
                      </span>
                    </div>
                  `:H}
              ${"winelist"!==this.mode?j`
                    <div style="display:flex;align-items:center;gap:6px;margin-top:4px;font-size:0.9em">
                      <span style="font-size:0.8em;color:var(--wc-text-secondary)">My Rating</span>
                      <star-rating
                        .value=${this._userRating}
                        .readonly=${!this._editing}
                        .size=${20}
                        @rating-change=${this._onRatingChange}
                      ></star-rating>
                      ${this._editing||0!==this._userRating?H:j`<span class="no-rating" style="font-size:0.8em">Not rated</span>`}
                      <button class="edit-toggle" style="font-size:0.75em;padding:2px 6px" @click=${()=>this._editing=!this._editing}>
                        ${this._editing?"Cancel":"Edit"}
                      </button>
                    </div>
                  `:H}
            </div>
          </div>

          ${this._editingFields?this._renderEditForm():j`
                <!-- Drink by banner for disposition wines -->
                ${e.disposition?j`
                      <div class="drink-by-banner ${"D"===e.disposition?"drink":"H"===e.disposition?"hold":"P"===e.disposition?"past":""}">
                        ${"D"===e.disposition?e.drink_window?`Drink now • ${e.drink_window}`:"Drink now":"H"===e.disposition?e.drink_window?`Hold • drink ${e.drink_window}`:e.drink_by?`Hold until ${e.drink_by}`:"Hold":e.drink_window?`Past peak • was ${e.drink_window}`:"Past peak"}
                      </div>
                    `:H}

                <!-- Description -->
                ${e.description?j`<div class="wine-description">${e.description}</div>`:H}

                <!-- Info chips (grape, food, alcohol, etc.) -->
                ${e.food_pairings||e.alcohol||e.grape_variety?j`
                      <div class="info-chips">
                        ${e.grape_variety?j`<span class="info-chip"><span class="info-chip-icon">🍇</span> ${e.grape_variety}</span>`:H}
                        ${e.alcohol?j`<span class="info-chip"><span class="info-chip-icon">%</span> ${e.alcohol}</span>`:H}
                        ${e.food_pairings?this._splitPairings(e.food_pairings).map(e=>j`<span class="info-chip">${e}</span>`):H}
                      </div>
                    `:H}

                <!-- AI Ratings -->
                ${e.ai_ratings&&Object.keys(e.ai_ratings).length>0?j`
                      <div class="ai-ratings">
                        ${e.ai_ratings.rating_ws?j`<span class="ai-rating-chip">${e.ai_ratings.rating_ws} <span class="source">WS</span></span>`:H}
                        ${e.ai_ratings.rating_rp?j`<span class="ai-rating-chip">${e.ai_ratings.rating_rp} <span class="source">RP</span></span>`:H}
                        ${e.ai_ratings.rating_jd?j`<span class="ai-rating-chip">${e.ai_ratings.rating_jd} <span class="source">JD</span></span>`:H}
                        ${e.ai_ratings.rating_ag?j`<span class="ai-rating-chip">${e.ai_ratings.rating_ag} <span class="source">AG</span></span>`:H}
                      </div>
                    `:H}

                <!-- Drink window (shown when no disposition banner) -->
                ${!e.disposition&&e.drink_window?j`<div class="drink-window">Drink window: ${e.drink_window}</div>`:H}

                <div class="details-grid">
                  ${e.vintage?j`<div class="detail-item"><span class="detail-label">Vintage</span><span class="detail-value">${e.vintage}</span></div>`:H}
                  ${e.region?j`<div class="detail-item"><span class="detail-label">Region</span><span class="detail-value">${e.region}</span></div>`:H}
                  ${e.country?j`<div class="detail-item"><span class="detail-label">Country</span><span class="detail-value">${e.country}</span></div>`:H}
                  ${e.grape_variety?j`<div class="detail-item"><span class="detail-label">Grape</span><span class="detail-value">${e.grape_variety}</span></div>`:H}
                  ${e.price?j`<div class="detail-item"><span class="detail-label">${"winelist"===this.mode?"Price":"Purchase Price"}</span><span class="detail-value">$${e.price.toFixed(2)}</span></div>`:H}
                  ${e.retail_price?j`<div class="detail-item"><span class="detail-label">Current Value</span><span class="detail-value">$${e.retail_price.toFixed(2)}</span></div>`:H}
                  ${e.purchase_date&&"cellar"===this.mode?j`<div class="detail-item"><span class="detail-label">Purchased</span><span class="detail-value">${e.purchase_date}</span></div>`:H}
                  ${e.drink_by?j`<div class="detail-item"><span class="detail-label">Drink By</span><span class="detail-value">${e.drink_by}</span></div>`:H}
                  ${e.barcode&&"cellar"===this.mode?j`<div class="detail-item"><span class="detail-label">Barcode</span><span class="detail-value">${e.barcode}</span></div>`:H}
                </div>

                ${e.notes?j`
                      <div class="wine-notes">
                        <div class="detail-label" style="margin-bottom: 4px">Notes</div>
                        <div class="wine-notes-text">${e.notes}</div>
                      </div>
                    `:H}

                ${"winelist"!==this.mode?j`
                <div class="divider"></div>

                <!-- Tasting Notes section -->
                <div class="section">
                  <div class="section-header">
                    <span class="section-title">Tasting Notes</span>
                  </div>
                  ${this._editing?j`
                        <div class="tasting-grid">
                          <div class="tasting-field">
                            <label>Aroma</label>
                            <textarea
                              .value=${this._tastingNotes.aroma}
                              placeholder="Berries, oak, vanilla..."
                              @input=${e=>this._onTastingChange("aroma",e)}
                            ></textarea>
                          </div>
                          <div class="tasting-field">
                            <label>Taste</label>
                            <textarea
                              .value=${this._tastingNotes.taste}
                              placeholder="Full-bodied, tannic..."
                              @input=${e=>this._onTastingChange("taste",e)}
                            ></textarea>
                          </div>
                          <div class="tasting-field">
                            <label>Finish</label>
                            <textarea
                              .value=${this._tastingNotes.finish}
                              placeholder="Long, smooth..."
                              @input=${e=>this._onTastingChange("finish",e)}
                            ></textarea>
                          </div>
                          <div class="tasting-field">
                            <label>Overall</label>
                            <textarea
                              .value=${this._tastingNotes.overall}
                              placeholder="Overall impression..."
                              @input=${e=>this._onTastingChange("overall",e)}
                            ></textarea>
                          </div>
                        </div>
                        <div style="margin-top: 12px; text-align: right">
                          <button
                            class="btn btn-primary"
                            ?disabled=${this._saving}
                            @click=${this._saveRating}
                          >
                            ${this._saving?"Saving...":"Save"}
                          </button>
                        </div>
                      `:this._hasTastingNotes()?j`
                          <div class="tasting-grid">
                            ${this._tastingNotes.aroma?j`<div class="tasting-field"><label>Aroma</label><div class="tasting-value">${this._tastingNotes.aroma}</div></div>`:H}
                            ${this._tastingNotes.taste?j`<div class="tasting-field"><label>Taste</label><div class="tasting-value">${this._tastingNotes.taste}</div></div>`:H}
                            ${this._tastingNotes.finish?j`<div class="tasting-field"><label>Finish</label><div class="tasting-value">${this._tastingNotes.finish}</div></div>`:H}
                            ${this._tastingNotes.overall?j`<div class="tasting-field full-width"><label>Overall</label><div class="tasting-value">${this._tastingNotes.overall}</div></div>`:H}
                          </div>
                        `:j`<div class="no-rating">No tasting notes yet. Tap Edit to add your thoughts.</div>`}
                </div>
                `:H}

                ${"cellar"===this.mode?j`
                <div class="actions">
                  <button class="btn btn-primary" style="background:#8e24aa"
                    ?disabled=${this._refreshing} @click=${this._refreshFromVivino}>
                    ${this._refreshing?"...":"🍇 Vivino"}
                  </button>
                  ${this.hasGemini?j`<button class="btn btn-primary" style="background:#1565c0"
                        ?disabled=${this._analyzing} @click=${this._analyzeWithAI}>
                        ${this._analyzing?"...":"🤖 AI Scan"}
                      </button>`:H}
                  <button class="btn btn-primary" style="background:#546e7a" @click=${this._onCopy}>📋 Copy</button>
                  <button class="btn btn-primary" style="background:#6d4c41" @click=${this._onMove}>↔ Move</button>
                  ${e.cabinet_id?j`<button class="btn btn-primary" style="background:#ef6c00" @click=${this._moveToUnassigned}>📦 Unassign</button>`:H}
                  <button class="btn btn-primary" style="background:#c62828"
                    @click=${this._onRemove}>✕ Remove</button>
                </div>
                `:H}

                ${"buylist"===this.mode?j`
                <div class="actions">
                  <button class="btn btn-primary" style="background:#8e24aa"
                    ?disabled=${this._refreshing} @click=${this._refreshFromVivino}>
                    ${this._refreshing?"...":"🍇 Vivino"}
                  </button>
                  ${this.hasGemini?j`<button class="btn btn-primary" style="background:#1565c0"
                        ?disabled=${this._analyzing} @click=${this._analyzeWithAI}>
                        ${this._analyzing?"...":"🤖 AI Scan"}
                      </button>`:H}
                  <button class="btn btn-primary" style="background:#c62828"
                    @click=${this._onRemove}>✕ Remove</button>
                </div>
                `:H}
              `}
          ${this._showRemoveConfirm?j`
            <div style="position:absolute;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:10;border-radius:16px">
              <div style="background:var(--wc-bg);border-radius:12px;padding:24px;max-width:320px;width:90%;text-align:center" @click=${e=>e.stopPropagation()}>
                <h3 style="margin:0 0 4px;font-size:1em;color:var(--wc-text)">Remove Wine</h3>
                <p style="margin:0 0 16px;font-size:0.85em;color:var(--wc-text-secondary)">Why are you removing this bottle?</p>
                <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">
                  ${_e.map(e=>j`
                    <button
                      style="padding:8px 16px;border-radius:20px;border:1px solid var(--wc-border);background:transparent;color:var(--wc-text);cursor:pointer;font-size:0.85em;transition:all 0.15s"
                      @click=${()=>this._confirmRemove(e.id)}
                    >${e.label}</button>
                  `)}
                </div>
                <button
                  style="margin-top:12px;padding:6px 16px;border-radius:16px;border:none;background:var(--wc-hover);color:var(--wc-text-secondary);cursor:pointer;font-size:0.8em"
                  @click=${()=>this._showRemoveConfirm=!1}
                >Cancel</button>
              </div>
            </div>
          `:H}
        </div>
      </div>
    `}};fe.styles=[ue,o`
      .dialog-top-bar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 4px;
        padding: 8px 12px 0;
      }

      .icon-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.1em;
        padding: 6px 8px;
        border-radius: 6px;
        color: var(--wc-text-secondary);
        transition: background 0.2s;
        line-height: 1;
      }

      .icon-btn:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .icon-btn.close-btn {
        font-size: 1.3em;
        font-weight: 600;
      }

      .wine-header {
        display: flex;
        gap: 16px;
        padding: 4px 20px 20px;
      }

      .wine-image {
        width: 90px;
        height: 130px;
        border-radius: 8px;
        object-fit: cover;
        background: #f0f0f0;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .wine-image-placeholder {
        width: 90px;
        height: 130px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        flex-shrink: 0;
        color: #fff;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }

      .wine-title {
        flex: 1;
        min-width: 0;
      }

      .wine-name {
        font-size: 1.2em;
        font-weight: 600;
        color: var(--wc-text);
        margin-bottom: 4px;
      }

      .wine-winery {
        font-size: 0.9em;
        color: var(--wc-text-secondary);
        margin-bottom: 8px;
      }

      .wine-type-badge {
        display: inline-block;
        padding: 2px 10px;
        border-radius: 12px;
        font-size: 0.75em;
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .wine-rating {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 8px;
        font-size: 0.9em;
      }

      .rating-star {
        color: #f5a623;
      }

      .drink-by-banner {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        font-size: 0.9em;
        font-weight: 500;
      }

      .drink-by-banner.drink {
        background: rgba(46, 125, 50, 0.12);
        color: #2e7d32;
      }

      .drink-by-banner.hold {
        background: rgba(21, 101, 192, 0.12);
        color: #1565c0;
      }

      .drink-by-banner.past {
        background: rgba(198, 40, 40, 0.12);
        color: #c62828;
      }

      .wine-description {
        padding: 0 20px 12px;
        font-size: 0.85em;
        color: var(--wc-text-secondary);
        line-height: 1.4;
        font-style: italic;
      }

      .info-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 0 20px 12px;
      }

      .info-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 16px;
        font-size: 0.75em;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid var(--wc-border);
        color: var(--wc-text-secondary);
      }

      .info-chip-icon {
        font-size: 1.1em;
      }

      .details-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        padding: 0 20px 16px;
      }

      .detail-item {
        display: flex;
        flex-direction: column;
      }

      .detail-label {
        font-size: 0.75em;
        color: var(--wc-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 2px;
      }

      .detail-value {
        font-size: 0.95em;
        color: var(--wc-text);
        font-weight: 500;
      }

      .wine-notes {
        padding: 0 20px 16px;
      }

      .wine-notes-text {
        font-size: 0.9em;
        color: var(--wc-text-secondary);
        font-style: italic;
        background: rgba(128, 128, 128, 0.08);
        padding: 10px;
        border-radius: 8px;
      }

      /* Rating & Tasting Notes section */
      .section {
        padding: 0 20px 16px;
      }

      .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }

      .section-title {
        font-size: 0.85em;
        font-weight: 600;
        color: var(--wc-text);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .edit-toggle {
        background: none;
        border: none;
        color: var(--wc-primary-text);
        cursor: pointer;
        font-size: 0.85em;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 6px;
        transition: background 0.2s;
      }

      .edit-toggle:hover {
        background: rgba(109, 76, 65, 0.1);
      }

      .rating-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
      }

      .rating-label {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        min-width: 70px;
      }

      .no-rating {
        font-size: 0.85em;
        color: var(--wc-text-secondary);
        font-style: italic;
      }

      .tasting-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .tasting-field {
        display: flex;
        flex-direction: column;
      }

      .tasting-field.full-width {
        grid-column: 1 / -1;
      }

      .tasting-field label {
        font-size: 0.75em;
        color: var(--wc-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }

      .tasting-field textarea {
        font-family: inherit;
        font-size: 0.85em;
        padding: 8px;
        border: 1px solid var(--wc-border, #e0e0e0);
        border-radius: 8px;
        resize: vertical;
        min-height: 50px;
        background: var(--wc-bg);
        color: var(--wc-text);
      }

      .tasting-field textarea:focus {
        outline: none;
        border-color: var(--wc-primary-text);
      }

      .tasting-value {
        font-size: 0.85em;
        color: var(--wc-text);
        background: rgba(128, 128, 128, 0.08);
        padding: 8px;
        border-radius: 8px;
        min-height: 20px;
      }

      .ai-ratings {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 0 20px 12px;
      }

      .ai-rating-chip {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 16px;
        font-size: 0.75em;
        background: rgba(245, 166, 35, 0.12);
        border: 1px solid rgba(245, 166, 35, 0.3);
        color: #f5a623;
        font-weight: 600;
      }

      .ai-rating-chip .source {
        font-weight: 400;
        opacity: 0.8;
      }

      .drink-window {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        padding: 0 20px 8px;
      }

      .divider {
        height: 1px;
        background: var(--wc-border, #e0e0e0);
        margin: 0 20px 16px;
      }

      .actions {
        display: flex;
        gap: 6px;
        padding: 10px 16px 16px;
        border-top: 1px solid var(--wc-border);
        justify-content: center;
      }

      .actions .btn {
        font-size: 0.8em;
        padding: 6px 10px;
        white-space: nowrap;
      }

      /* Edit form styles */
      .edit-form {
        padding: 0 20px 16px;
      }

      .edit-form .form-group {
        margin-bottom: 12px;
      }

      .edit-form .form-group label {
        display: block;
        font-size: 0.75em;
        font-weight: 500;
        color: var(--wc-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }

      .edit-form .form-group input,
      .edit-form .form-group select,
      .edit-form .form-group textarea {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--wc-border);
        border-radius: 8px;
        font-size: 0.9em;
        background: var(--wc-bg);
        color: var(--wc-text);
        box-sizing: border-box;
        font-family: inherit;
      }

      .edit-form .form-group textarea {
        min-height: 60px;
        resize: vertical;
      }

      .edit-form .form-group input:focus,
      .edit-form .form-group select:focus,
      .edit-form .form-group textarea:focus {
        outline: none;
        border-color: var(--wc-primary);
      }

      .edit-form .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .edit-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        padding: 12px 20px 20px;
        border-top: 1px solid var(--wc-border);
      }

      @media (max-width: 599px) {
        .tasting-grid {
          grid-template-columns: 1fr;
        }
        .tasting-field.full-width {
          grid-column: 1;
        }
        .edit-form .form-row {
          grid-template-columns: 1fr;
        }
      }
    `],e([he({attribute:!1})],fe.prototype,"wine",void 0),e([he({attribute:!1})],fe.prototype,"hass",void 0),e([he({type:Boolean})],fe.prototype,"open",void 0),e([he({type:String})],fe.prototype,"mode",void 0),e([ge()],fe.prototype,"_editing",void 0),e([ge()],fe.prototype,"_editingFields",void 0),e([ge()],fe.prototype,"_editData",void 0),e([ge()],fe.prototype,"_userRating",void 0),e([ge()],fe.prototype,"_tastingNotes",void 0),e([ge()],fe.prototype,"_saving",void 0),e([ge()],fe.prototype,"_refreshing",void 0),e([ge()],fe.prototype,"_analyzing",void 0),e([ge()],fe.prototype,"_showRemoveConfirm",void 0),e([he({type:Boolean})],fe.prototype,"hasGemini",void 0),fe=e([de("wine-detail-dialog")],fe);let $e=class extends re{constructor(){super(...arguments),this.active=!1,this._error="",this._scanning=!1,this._stream=null,this._detector=null,this._rafId=0}updated(e){e.has("active")&&(this.active?this._startScanning():this._stopScanning())}disconnectedCallback(){super.disconnectedCallback(),this._stopScanning()}async _startScanning(){if(!this._scanning){if(this._error="",!("BarcodeDetector"in window))return this._error="Barcode scanning is not supported on this browser. Please enter the barcode manually below.",void this.dispatchEvent(new CustomEvent("scanner-error",{detail:{error:this._error},bubbles:!0,composed:!0}));try{this._stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}},audio:!1}),await this.updateComplete;const e=this.renderRoot.querySelector("video");e&&this._stream&&(e.srcObject=this._stream,await e.play()),this._detector=new window.BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128"]}),this._scanning=!0,this._scanFrame()}catch(e){const t=e?.message||String(e);t.includes("NotAllowed")||t.includes("Permission")?this._error="Camera access denied. Please allow camera access in your browser settings.":t.includes("NotFound")||t.includes("no camera")?this._error="No camera found on this device.":this._error=`Camera error: ${t}`,this.dispatchEvent(new CustomEvent("scanner-error",{detail:{error:this._error},bubbles:!0,composed:!0}))}}}async _scanFrame(){if(!this._scanning||!this._detector)return;const e=this.renderRoot.querySelector("video");if(!e||e.readyState<2)this._rafId=requestAnimationFrame(()=>this._scanFrame());else{try{const t=await this._detector.detect(e);if(t.length>0)return void this._onDetected(t[0].rawValue)}catch{}this._rafId=requestAnimationFrame(()=>this._scanFrame())}}_stopScanning(){this._scanning=!1,this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=0),this._stream&&(this._stream.getTracks().forEach(e=>e.stop()),this._stream=null),this._detector=null}_onDetected(e){this._stopScanning(),this.dispatchEvent(new CustomEvent("barcode-detected",{detail:{barcode:e},bubbles:!0,composed:!0}))}render(){return this.active?j`
      ${this._error?j`<div class="error-message">${this._error}</div>`:j`
            <div class="scanner-container">
              <video autoplay playsinline muted></video>
              <div class="scan-overlay">
                <div class="scan-corners"></div>
                <div class="scan-line"></div>
              </div>
            </div>
            <div class="hint">Point the camera at the barcode on the bottle</div>
          `}
    `:H}};$e.styles=[ue,o`
      :host {
        display: block;
      }

      .scanner-container {
        position: relative;
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        max-height: 300px;
      }

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        max-height: 300px;
      }

      .scan-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 10;
      }

      .scan-line {
        position: absolute;
        left: 10%;
        right: 10%;
        height: 2px;
        background: rgba(255, 50, 50, 0.8);
        box-shadow: 0 0 8px rgba(255, 50, 50, 0.5);
        animation: scanMove 2s ease-in-out infinite;
      }

      @keyframes scanMove {
        0%, 100% { top: 20%; }
        50% { top: 80%; }
      }

      .scan-corners {
        position: absolute;
        top: 15%;
        left: 15%;
        right: 15%;
        bottom: 15%;
        border: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 8px;
      }

      .error-message {
        padding: 16px;
        text-align: center;
        color: #ef5350;
        font-size: 0.9em;
      }

      .hint {
        text-align: center;
        padding: 8px;
        font-size: 0.8em;
        color: var(--wc-text-secondary);
      }

      .fallback-note {
        text-align: center;
        padding: 12px;
        font-size: 0.85em;
        color: var(--wc-text-secondary);
        font-style: italic;
      }
    `],e([he({type:Boolean})],$e.prototype,"active",void 0),e([ge()],$e.prototype,"_error",void 0),e([ge()],$e.prototype,"_scanning",void 0),$e=e([de("barcode-scanner")],$e);let ke=class extends re{constructor(){super(...arguments),this.active=!1,this._stream=null,this._error="",this._captured=!1,this._capturedImage=""}updated(e){e.has("active")&&(this.active&&!this._captured?this._startCamera():this.active||(this._stopCamera(),this._captured=!1,this._capturedImage=""))}disconnectedCallback(){super.disconnectedCallback(),this._stopCamera()}async _startCamera(){this._error="";try{this._stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:960},height:{ideal:1280},aspectRatio:{ideal:3/4}},audio:!1}),await this.updateComplete;const e=this.renderRoot.querySelector("video");e&&this._stream&&(e.srcObject=this._stream)}catch(e){const t=e?.message||String(e);t.includes("NotAllowed")||t.includes("Permission")?this._error="Camera access denied. Use the upload button below instead.":this._error="Could not access camera. Use the upload button below instead."}}_stopCamera(){this._stream&&(this._stream.getTracks().forEach(e=>e.stop()),this._stream=null)}_readFileAsDataUrl(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=()=>i(new Error("Failed to read image file")),s.readAsDataURL(e)})}_resizeDataUrl(e,t=1024,i=.8){return new Promise((s,a)=>{const n=new Image;n.onload=()=>{const e=document.createElement("canvas");let o=n.width,r=n.height;if(o>t||r>t){const e=t/Math.max(o,r);o=Math.round(o*e),r=Math.round(r*e)}e.width=o,e.height=r;const l=e.getContext("2d");if(!l)return void a(new Error("Could not create canvas context"));l.drawImage(n,0,0,o,r);const d=e.toDataURL("image/jpeg",i);s({dataUrl:d,base64:d.split(",")[1]||""})},n.onerror=()=>a(new Error("Failed to load image")),n.src=e})}async _capture(){const e=this.renderRoot.querySelector("video");if(!e)return;const t=document.createElement("canvas"),i=1024;let s=e.videoWidth,a=e.videoHeight;if(s>i||a>i){const e=i/Math.max(s,a);s=Math.round(s*e),a=Math.round(a*e)}t.width=s,t.height=a;t.getContext("2d").drawImage(e,0,0,s,a);const n=t.toDataURL("image/jpeg",.8),o=n.split(",")[1];this._stopCamera(),this._captured=!0,this._capturedImage=n,this.dispatchEvent(new CustomEvent("photo-captured",{detail:{image:o},bubbles:!0,composed:!0}))}async _onFileSelected(e){const t=e.target,i=Array.from(t.files??[]);if(!i.length)return;this._error="";const s=[];for(const e of i){const t=await this._readFileAsDataUrl(e),i=await this._resizeDataUrl(t);s.push({name:e.name,image:i.base64,preview:i.dataUrl})}if(t.value="",1===s.length){const e=s[0];return this._stopCamera(),this._captured=!0,this._capturedImage=e.preview,void this.dispatchEvent(new CustomEvent("photo-captured",{detail:{image:e.image},bubbles:!0,composed:!0}))}this._captured=!1,this._capturedImage="",this._stopCamera(),this.dispatchEvent(new CustomEvent("photos-selected",{detail:{photos:s},bubbles:!0,composed:!0}))}retake(){this._captured=!1,this._capturedImage="",this._startCamera()}render(){return this.active?this._captured?j`
        <img class="captured-preview" src=${this._capturedImage} alt="Captured label" />
      `:j`
      ${this._error?j`<div class="error-message">${this._error}</div>`:j`
            <div class="camera-container">
              <video autoplay playsinline muted></video>
            </div>
            <div class="capture-btn-area">
              <button class="capture-btn" @click=${this._capture} title="Take photo"></button>
            </div>
            <div class="hint">Point the camera at the wine label</div>
          `}

      <div class="fallback-area">
        <label class="file-input-label">
          📁 Upload from gallery
          <input type="file" accept="image/*" multiple @change=${this._onFileSelected} />
        </label>
      </div>
    `:H}};ke.styles=[ue,o`
      :host {
        display: block;
      }

      .camera-container {
        position: relative;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        aspect-ratio: 3 / 4;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
      }

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .captured-preview {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        display: block;
        border-radius: 12px;
        object-fit: contain;
        max-height: 300px;
      }

      .capture-btn-area {
        display: flex;
        justify-content: center;
        padding: 12px 0;
      }

      .capture-btn {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 4px solid var(--wc-primary, #722f37);
        background: transparent;
        cursor: pointer;
        position: relative;
        transition: all 0.2s;
      }

      .capture-btn::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        border-radius: 50%;
        background: var(--wc-primary, #722f37);
        transition: all 0.15s;
      }

      .capture-btn:hover::after {
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
      }

      .capture-btn:active::after {
        top: 8px;
        left: 8px;
        right: 8px;
        bottom: 8px;
      }

      .fallback-area {
        text-align: center;
        padding: 8px 0;
      }

      .file-input-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid var(--wc-border);
        background: transparent;
        color: var(--wc-text-secondary);
        cursor: pointer;
        font-size: 0.85em;
        transition: all 0.2s;
      }

      .file-input-label:hover {
        background: rgba(114, 47, 55, 0.08);
      }

      input[type="file"] {
        display: none;
      }

      .error-message {
        padding: 16px;
        text-align: center;
        color: #ef5350;
        font-size: 0.9em;
      }

      .actions-row {
        display: flex;
        gap: 8px;
        justify-content: center;
        padding: 8px 0;
      }

      .hint {
        text-align: center;
        padding: 4px 0 8px;
        font-size: 0.8em;
        color: var(--wc-text-secondary);
      }
    `],e([he({type:Boolean})],ke.prototype,"active",void 0),e([ge()],ke.prototype,"_stream",void 0),e([ge()],ke.prototype,"_error",void 0),e([ge()],ke.prototype,"_captured",void 0),e([ge()],ke.prototype,"_capturedImage",void 0),ke=e([de("label-camera")],ke);let Ce=class extends re{constructor(){super(...arguments),this.open=!1,this.cabinets=[],this.preselectedCabinet="",this.preselectedRow=null,this.preselectedCol=null,this.preselectedZone="",this.preselectedDepth=0,this.buyListMode=!1,this._step="scan",this._scanMode="idle",this._barcode="",this._loading=!1,this._lookupResult=null,this._wineData={},this._error="",this._hasGemini=!1,this._labelLoading=!1,this._searchResults=[],this._batchItems=[],this._batchLoading=!1}get _steps(){return this.buyListMode?["scan","details","confirm"]:["scan","details","location","confirm"]}_resizeImageForStorage(e,t=200,i=.6){return new Promise(s=>{const a=new Image;a.onload=()=>{const e=document.createElement("canvas");let n=a.width,o=a.height;n>o?(o=Math.round(o*t/n),n=t):(n=Math.round(n*t/o),o=t),e.width=n,e.height=o;e.getContext("2d").drawImage(a,0,0,n,o);const r=e.toDataURL("image/jpeg",i);s(r)},a.onerror=()=>s(""),a.src=`data:image/jpeg;base64,${e}`})}updated(e){e.has("open")&&(this.open?(this._step="scan",this._scanMode="idle",this._barcode="",this._lookupResult=null,this._error="",this._loading=!1,this._labelLoading=!1,this._batchItems=[],this._batchLoading=!1,this._searchResults=[],this._wineData={name:"",winery:"",type:"red",vintage:null,region:"",country:"",grape_variety:"",price:null,retail_price:null,notes:"",user_rating:null,tasting_notes:null,cabinet_id:this.preselectedCabinet||"",row:this.preselectedRow,col:this.preselectedCol,depth:this.preselectedDepth||0,zone:this.preselectedZone||""},this._checkCapabilities()):(this._scanMode="idle",this._batchItems=[],this._batchLoading=!1))}async _checkCapabilities(){try{const e=await this.hass.callWS({type:"wine_cellar/get_capabilities"});this._hasGemini=e?.has_gemini||!1}catch{this._hasGemini=!1}}_close(){this._scanMode="idle",this._batchItems=[],this._batchLoading=!1,this.open=!1,this.dispatchEvent(new CustomEvent("close"))}async _lookupBarcode(){if(this._barcode.trim()){this._loading=!0,this._error="";try{const e=await this.hass.callWS({type:"wine_cellar/lookup_barcode",barcode:this._barcode.trim()});e.result?(this._lookupResult=e.result,this._wineData={...this._wineData,barcode:this._barcode.trim(),name:e.result.name||"",winery:e.result.winery||"",type:e.result.type||"red",vintage:e.result.vintage,region:e.result.region||"",country:e.result.country||"",grape_variety:e.result.grape_variety||"",rating:e.result.rating,ratings_count:e.result.ratings_count||null,image_url:e.result.image_url||"",description:e.result.description||"",food_pairings:e.result.food_pairings||"",alcohol:e.result.alcohol||""},this._step="details"):(this._error="No results found. You can enter details manually.",this._wineData={...this._wineData,barcode:this._barcode.trim()})}catch(e){this._error="Lookup failed. You can enter details manually."}this._loading=!1}}async _searchWine(){const e=this.shadowRoot?.querySelector(".search-input");if(e?.value.trim()){this._loading=!0,this._error="",this._searchResults=[];try{const t=await this.hass.callWS({type:"wine_cellar/search_wine",query:e.value.trim()});t.results&&t.results.length>0?this._searchResults=t.results:this._error="No results found. You can enter details manually."}catch{this._error="Search failed. You can enter details manually."}this._loading=!1}}_selectSearchResult(e){this._lookupResult=e,this._wineData={...this._wineData,name:e.name||"",winery:e.winery||"",type:e.type||"red",vintage:e.vintage,region:e.region||"",country:e.country||"",grape_variety:e.grape_variety||"",rating:e.rating,ratings_count:e.ratings_count||null,image_url:e.image_url||"",description:e.description||"",food_pairings:e.food_pairings||"",alcohol:e.alcohol||""},this._searchResults=[],this._step="details"}_onBarcodeDetected(e){this._barcode=e.detail.barcode,this._scanMode="idle",this._lookupBarcode()}async _onPhotoCaptured(e){this._batchItems=[],this._batchLoading=!1,this._labelLoading=!0,this._error="";try{const t=await this.hass.callWS({type:"wine_cellar/recognize_label",image:e.detail.image});if(t.result){const i=await this._resizeImageForStorage(e.detail.image),s=t.result;this._wineData={...this._wineData,name:s.name||"",winery:s.winery||"",type:s.type||"red",vintage:s.vintage,region:s.region||"",country:s.country||"",grape_variety:s.grape_variety||"",disposition:s.disposition||"",drink_by:s.drink_by||"",drink_window:s.drink_window||"",description:s.description||"",retail_price:s.estimated_price||null,ai_ratings:s.ai_ratings||null,notes:s.notes||"",image_url:i},this._scanMode="idle",this._step="details"}else{const e=t.error||"Unknown error";this._error=`Label recognition failed: ${e}`,console.error("Wine Cellar: label recognition failed:",e)}}catch(e){const t=e?.message||String(e);console.error("Wine Cellar: label recognition error:",t),this._error=`Label recognition error: ${t}`}this._labelLoading=!1}_onBatchPhotosSelected(e){this._processBatchPhotos(e.detail.photos||[])}_makeBatchId(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}async _processBatchPhotos(e){if(!e.length)return;this._batchItems=[],this._batchLoading=!0,this._labelLoading=!0,this._error="",this._scanMode="label";const t=[];for(const i of e){const e=this._makeBatchId();try{const s=await this.hass.callWS({type:"wine_cellar/recognize_label",image:i.image});if(s.result){const a=s.result;t.push({id:e,name:a.name||i.name||"Unknown wine",preview:i.preview,status:"ready",error:"",wineData:{name:a.name||"",winery:a.winery||"",type:a.type||"red",vintage:a.vintage,region:a.region||"",country:a.country||"",grape_variety:a.grape_variety||"",disposition:a.disposition||"",drink_by:a.drink_by||"",drink_window:a.drink_window||"",description:a.description||"",retail_price:a.estimated_price||null,ai_ratings:a.ai_ratings||null,notes:a.notes||"",image_url:i.preview}})}else t.push({id:e,name:i.name||"Unknown wine",preview:i.preview,status:"error",error:`Label recognition failed: ${s.error||"Unknown error"}`,wineData:{}})}catch(s){const a=s?.message||String(s);t.push({id:e,name:i.name||"Unknown wine",preview:i.preview,status:"error",error:`Label recognition error: ${a}`,wineData:{}})}this._batchItems=[...t]}this._batchLoading=!1,this._labelLoading=!1}async _addBatchItem(e){const t=this._batchItems.find(t=>t.id===e);if(t&&"ready"===t.status){this._batchItems=this._batchItems.map(t=>t.id===e?{...t,status:"adding"}:t);try{this.buyListMode?(await this.hass.callWS({type:"wine_cellar/add_to_buy_list",wine:t.wineData}),this.dispatchEvent(new CustomEvent("buy-list-updated",{bubbles:!0,composed:!0}))):(await this.hass.callWS({type:"wine_cellar/add_wine",wine:t.wineData}),this.dispatchEvent(new CustomEvent("wine-added",{bubbles:!0,composed:!0}))),this._batchItems=this._batchItems.map(t=>t.id===e?{...t,status:"added"}:t)}catch(t){this._batchItems=this._batchItems.map(t=>t.id===e?{...t,status:"error",error:this.buyListMode?"Failed to add to buy list.":"Failed to add wine."}:t)}}}async _addAllBatchItems(){const e=this._batchItems.filter(e=>"ready"===e.status);if(e.length){this._loading=!0;for(const t of e)await this._addBatchItem(t.id);this._loading=!1}}_removeBatchItem(e){this._batchItems=this._batchItems.filter(t=>t.id!==e)}_clearBatchQueue(){this._batchItems=[],this._batchLoading=!1,this._labelLoading=!1,this._error=""}_goToStep(e){this._step=e}_updateField(e,t){this._wineData={...this._wineData,[e]:t}}async _addWine(){this._loading=!0;try{this.buyListMode?(await this.hass.callWS({type:"wine_cellar/add_to_buy_list",wine:this._wineData}),this.dispatchEvent(new CustomEvent("buy-list-updated",{bubbles:!0,composed:!0}))):(await this.hass.callWS({type:"wine_cellar/add_wine",wine:this._wineData}),this.dispatchEvent(new CustomEvent("wine-added",{bubbles:!0,composed:!0}))),this._close()}catch(e){this._error=this.buyListMode?"Failed to add to buy list.":"Failed to add wine."}this._loading=!1}async _quickAddToBuyList(){if(this._wineData.name){this._loading=!0;try{await this.hass.callWS({type:"wine_cellar/add_to_buy_list",wine:this._wineData}),this.dispatchEvent(new CustomEvent("buy-list-updated",{bubbles:!0,composed:!0})),this._close()}catch(e){this._error="Failed to add to buy list."}this._loading=!1}}_renderStepIndicator(){const e=this._steps.indexOf(this._step);return j`
      <div class="step-indicator">
        ${this._steps.map((t,i)=>j`
            <div
              class="step-dot ${i===e?"active":""} ${i<e?"done":""}"
            ></div>
          `)}
      </div>
    `}_renderBatchItem(e){const t=[e.wineData.winery,e.wineData.vintage?`${e.wineData.vintage}`:"",e.wineData.region||"",e.wineData.country||""].filter(Boolean);return j`
      <div class="batch-item">
        <img class="batch-item-thumb" src="${e.preview}" alt=${e.name} />
        <div class="batch-item-info">
          <div class="batch-item-name">
            <span>${e.name||"Unknown wine"}</span>
            <span class="batch-item-badge ${e.status}">${e.status}</span>
          </div>
          ${t.length?j`<div class="batch-item-meta">${t.join(" · ")}</div>`:H}
          ${e.error?j`<div class="batch-item-error">${e.error}</div>`:H}
          <div class="batch-item-actions">
            ${"ready"===e.status?j`
                  <button class="btn btn-primary" @click=${()=>this._addBatchItem(e.id)}>
                    ${this._loading?j`<span class="loading-spinner"></span>`:this.buyListMode?"Add to Buy List":"Add Wine"}
                  </button>
                  <button class="btn btn-outline" @click=${()=>this._removeBatchItem(e.id)}>
                    Skip
                  </button>
                `:"added"===e.status?j`<button class="btn btn-outline" disabled>Added as Unassigned</button>`:"adding"===e.status?j`<button class="btn btn-outline" disabled>Adding...</button>`:j`<button class="btn btn-outline" @click=${()=>this._removeBatchItem(e.id)}>Remove</button>`}
          </div>
        </div>
      </div>
    `}_renderBatchQueue(){const e=this._batchItems.filter(e=>"ready"===e.status).length,t=this._batchItems.filter(e=>"added"===e.status).length,i=this._batchItems.filter(e=>"adding"===e.status).length;return j`
      <div class="scan-section">
        <div class="batch-review">
          <div class="batch-review-header">
            <div>
              <div class="batch-review-title">Review queued labels</div>
              <div class="batch-review-subtitle">
                ${this._batchLoading?`Analyzing ${t+i}/${this._batchItems.length}`:`${e} ready, ${t} added`}
              </div>
            </div>
            ${this._batchLoading?j`<span class="loading-spinner"></span>`:H}
          </div>

          ${this._batchItems.length?j`
                <div class="batch-review-list">
                  ${this._batchItems.map(e=>this._renderBatchItem(e))}
                </div>
              `:j`<div class="batch-empty">No labels queued yet.</div>`}

          ${this._error?j`<div class="error-msg">${this._error}</div>`:H}
        </div>
      </div>

      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${this._clearBatchQueue}>Clear Queue</button>
        <button
          class="btn btn-primary"
          @click=${this._addAllBatchItems}
          ?disabled=${0===e||this._loading}
        >
          ${this._loading?j`<span class="loading-spinner"></span>`:e>0?`Add ${e} Ready`:"Nothing to Add"}
        </button>
      </div>
    `}_renderScanStep(){return this._batchItems.length>0||this._batchLoading?this._renderBatchQueue():"barcode"===this._scanMode?j`
        <div class="scan-section">
          <barcode-scanner
            .active=${!0}
            @barcode-detected=${this._onBarcodeDetected}
            @scanner-error=${e=>{this._error=e.detail.error,this._scanMode="idle"}}
          ></barcode-scanner>
          ${this._loading?j`<div class="label-loading"><span class="loading-spinner"></span><div style="margin-top: 8px">Looking up barcode...</div></div>`:H}
          ${this._error?j`<div class="error-msg">${this._error}</div>`:H}
          <div class="camera-actions">
            <button class="btn btn-outline" @click=${()=>{this._scanMode="idle",this._error=""}}>Cancel Scan</button>
          </div>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-outline" @click=${this._close}>Cancel</button>
        </div>
      `:"label"===this._scanMode?j`
        <div class="scan-section">
          ${this._labelLoading?j`
                <div class="label-loading">
                  <span class="loading-spinner"></span>
                  <div style="margin-top: 8px">Analyzing label with AI...</div>
                </div>
              `:j`
                <label-camera
                  .active=${!0}
                  @photo-captured=${this._onPhotoCaptured}
                  @photos-selected=${this._onBatchPhotosSelected}
                ></label-camera>
              `}
          ${this._error?j`<div class="error-msg">${this._error}</div>`:H}
          <div class="camera-actions">
            <button class="btn btn-outline" @click=${()=>{this._scanMode="idle",this._error="",this._labelLoading=!1}}>Cancel</button>
          </div>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-outline" @click=${this._close}>Cancel</button>
        </div>
      `:j`
      <div class="scan-section">
        <div class="scan-options">
          <button class="scan-option" @click=${()=>{this._scanMode="barcode",this._error=""}}>
            <span class="scan-option-icon">📷</span>
            <div class="scan-option-text">
              <div class="scan-option-title">Scan Barcode</div>
              <div class="scan-option-desc">Point camera at wine bottle barcode</div>
            </div>
          </button>

          <button
            class="scan-option ${this._hasGemini?"":"disabled"}"
            @click=${()=>this._hasGemini&&(()=>{this._scanMode="label",this._error=""})()}
            title=${this._hasGemini?"":"Configure Gemini API key in integration settings"}
          >
            <span class="scan-option-icon">🤖</span>
            <div class="scan-option-text">
              <div class="scan-option-title">Recognize Label</div>
              <div class="scan-option-desc">
                ${this._hasGemini?"Take a photo of the wine label":"Requires Gemini API key in settings"}
              </div>
            </div>
          </button>
        </div>

        <div class="or-divider">or enter manually</div>

        <div class="barcode-input-row">
          <input
            type="text"
            placeholder="Enter barcode..."
            .value=${this._barcode}
            @input=${e=>this._barcode=e.target.value}
            @keypress=${e=>"Enter"===e.key&&this._lookupBarcode()}
          />
          <button class="btn btn-primary" @click=${this._lookupBarcode}>
            ${this._loading?j`<span class="loading-spinner"></span>`:"Look Up"}
          </button>
        </div>

        ${this._lookupResult?j`
              <div class="lookup-result">
                <div class="result-name">${this._lookupResult.name}</div>
                <div class="result-detail">
                  ${this._lookupResult.winery}
                  ${this._lookupResult.vintage?` · ${this._lookupResult.vintage}`:""}
                </div>
              </div>
            `:H}

        <div class="or-divider">or search by name</div>

        <div class="barcode-input-row">
          <input
            class="search-input"
            type="text"
            placeholder="Search wine name..."
            @keypress=${e=>"Enter"===e.key&&this._searchWine()}
          />
          <button class="btn btn-outline" @click=${this._searchWine}>
            ${this._loading?j`<span class="loading-spinner"></span>`:"Search"}
          </button>
        </div>

        ${this._searchResults.length>0?j`
              <div class="search-results">
                <div class="search-results-label">
                  ${this._searchResults.length} result${this._searchResults.length>1?"s":""} — tap to select
                </div>
                ${this._searchResults.map(e=>j`
                    <button
                      class="search-result-item"
                      @click=${()=>this._selectSearchResult(e)}
                    >
                      ${e.image_url?j`<img class="search-result-thumb" src="${e.image_url}" alt="" />`:j`<div class="search-result-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1.2em;">🍷</div>`}
                      <div class="search-result-info">
                        <div class="search-result-name">${e.name||"Unknown"}</div>
                        <div class="search-result-meta">
                          ${e.winery||""}${e.vintage?` · ${e.vintage}`:""}${e.region?` · ${e.region}`:""}
                        </div>
                      </div>
                      ${e.rating?j`<span class="search-result-rating">★ ${e.rating.toFixed(1)}</span>`:H}
                    </button>
                  `)}
              </div>
            `:H}

        ${this._error?j`<div class="error-msg">${this._error}</div>`:H}
      </div>

      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${this._close}>Cancel</button>
        <button
          class="btn btn-outline"
          @click=${()=>this._goToStep("details")}
        >
          Skip → Manual Entry
        </button>
      </div>
    `}_renderDetailsStep(){return j`
      <div class="dialog-body">
        <div class="form-group">
          <label>Wine Name *</label>
          <input
            type="text"
            .value=${this._wineData.name||""}
            @input=${e=>this._updateField("name",e.target.value)}
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Winery</label>
            <input
              type="text"
              .value=${this._wineData.winery||""}
              @input=${e=>this._updateField("winery",e.target.value)}
            />
          </div>
          <div class="form-group">
            <label>Vintage</label>
            <input
              type="number"
              .value=${this._wineData.vintage?.toString()||""}
              @input=${e=>this._updateField("vintage",parseInt(e.target.value)||null)}
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Type</label>
            <select
              @change=${e=>this._updateField("type",e.target.value)}
            >
              ${Object.entries(we).map(([e,t])=>j`<option value=${e} ?selected=${(this._wineData.type||"red")===e}>${t}</option>`)}
            </select>
          </div>
          <div class="form-group">
            <label>Purchase Price</label>
            <input
              type="number"
              step="0.01"
              .value=${this._wineData.price?.toString()||""}
              @input=${e=>this._updateField("price",parseFloat(e.target.value)||null)}
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Current Value</label>
            <input
              type="number"
              step="0.01"
              .value=${this._wineData.retail_price?.toString()||""}
              @input=${e=>this._updateField("retail_price",parseFloat(e.target.value)||null)}
            />
          </div>
          <div class="form-group">
            <label>Region</label>
            <input
              type="text"
              .value=${this._wineData.region||""}
              @input=${e=>this._updateField("region",e.target.value)}
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Country</label>
            <input
              type="text"
              .value=${this._wineData.country||""}
              @input=${e=>this._updateField("country",e.target.value)}
            />
          </div>
        </div>

        <div class="form-group">
          <label>Grape Variety</label>
          <input
            type="text"
            .value=${this._wineData.grape_variety||""}
            @input=${e=>this._updateField("grape_variety",e.target.value)}
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Purchase Date</label>
            <input
              type="date"
              .value=${this._wineData.purchase_date||""}
              @input=${e=>this._updateField("purchase_date",e.target.value)}
            />
          </div>
          <div class="form-group">
            <label>Drink By</label>
            <input
              type="text"
              placeholder="e.g. 2030"
              .value=${this._wineData.drink_by||""}
              @input=${e=>this._updateField("drink_by",e.target.value)}
            />
          </div>
        </div>

        <div class="form-group">
          <label>Notes</label>
          <textarea
            .value=${this._wineData.notes||""}
            @input=${e=>this._updateField("notes",e.target.value)}
          ></textarea>
        </div>

        <div class="rating-section">
          <div class="rating-label">My Rating</div>
          <star-rating
            .value=${this._wineData.user_rating||0}
            @rating-change=${e=>this._updateField("user_rating",e.detail.value||null)}
          ></star-rating>
        </div>
      </div>

      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${()=>this._goToStep("scan")}>
          ← Back
        </button>
        ${this.buyListMode?H:j`
              <button
                class="btn btn-primary"
                style="background: #e65100;"
                @click=${this._quickAddToBuyList}
                ?disabled=${!this._wineData.name||this._loading}
                title="Save to buy list instead of cellar"
              >
                ${this._loading?j`<span class="loading-spinner"></span>`:"🛒 Buy List"}
              </button>
            `}
        <button
          class="btn btn-primary"
          @click=${()=>this._goToStep(this.buyListMode?"confirm":"location")}
          ?disabled=${!this._wineData.name}
        >
          Next →
        </button>
      </div>
    `}_renderLocationStep(){return j`
      <div class="dialog-body">
        <div style="font-weight: 500; margin-bottom: 8px">Choose Location</div>
        <div style="font-size: 0.85em; color: var(--wc-text-secondary); margin-bottom: 12px">
          Select a cabinet and position for this bottle
        </div>

        <div class="location-grid">
          ${this.cabinets.map(e=>j`
              <div
                class="location-cabinet ${this._wineData.cabinet_id===e.id?"selected":""}"
                @click=${()=>this._updateField("cabinet_id",e.id)}
              >
                <div class="cab-name">${e.name}</div>
                <div class="cab-info">${e.rows}×${e.cols} slots</div>
              </div>
            `)}
        </div>

        ${this._wineData.cabinet_id?j`
              <div class="pos-inputs">
                <div class="form-group">
                  <label>Row (1-based)</label>
                  <input
                    type="number"
                    min="1"
                    .value=${null!=this._wineData.row?(this._wineData.row+1).toString():""}
                    @input=${e=>this._updateField("row",parseInt(e.target.value)-1)}
                  />
                </div>
                <div class="form-group">
                  <label>Column (1-based)</label>
                  <input
                    type="number"
                    min="1"
                    .value=${null!=this._wineData.col?(this._wineData.col+1).toString():""}
                    @input=${e=>this._updateField("col",parseInt(e.target.value)-1)}
                  />
                </div>
              </div>
            `:H}
      </div>

      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${()=>this._goToStep("details")}>
          ← Back
        </button>
        <button class="btn btn-primary" @click=${()=>this._goToStep("confirm")}>
          Next →
        </button>
      </div>
    `}_renderConfirmStep(){const e=this.cabinets.find(e=>e.id===this._wineData.cabinet_id)?.name||"Unassigned",t=null!=this._wineData.row&&null!=this._wineData.col?`Row ${(this._wineData.row??0)+1}, Col ${(this._wineData.col??0)+1}`:"Not specified";return j`
      <div class="dialog-body">
        <div style="font-weight: 500; margin-bottom: 12px">Confirm & Add</div>

        <div class="confirm-summary">
          <div class="summary-row">
            <span class="summary-label">Name</span>
            <span class="summary-value">${this._wineData.name}</span>
          </div>
          ${this._wineData.winery?j`
                <div class="summary-row">
                  <span class="summary-label">Winery</span>
                  <span class="summary-value">${this._wineData.winery}</span>
                </div>
              `:H}
          ${this._wineData.vintage?j`
                <div class="summary-row">
                  <span class="summary-label">Vintage</span>
                  <span class="summary-value">${this._wineData.vintage}</span>
                </div>
              `:H}
          <div class="summary-row">
            <span class="summary-label">Type</span>
            <span class="summary-value">
              ${we[this._wineData.type||"red"]}
            </span>
          </div>
          ${this.buyListMode?H:j`
                <div class="summary-row">
                  <span class="summary-label">Cabinet</span>
                  <span class="summary-value">${e}</span>
                </div>
                <div class="summary-row">
                  <span class="summary-label">Position</span>
                  <span class="summary-value">${t}</span>
                </div>
              `}
          ${this._wineData.user_rating?j`
                <div class="summary-row">
                  <span class="summary-label">My Rating</span>
                  <span class="summary-value">${this._wineData.user_rating}/5</span>
                </div>
              `:H}
        </div>

        ${this._error?j`<div class="error-msg">${this._error}</div>`:H}
      </div>

      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${()=>this._goToStep(this.buyListMode?"details":"location")}>
          ← Back
        </button>
        <button class="btn btn-primary" @click=${this._addWine}>
          ${this._loading?j`<span class="loading-spinner"></span>`:this.buyListMode?"Add to Buy List":"Add Wine"}
        </button>
      </div>
    `}render(){return this.open?j`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" @click=${e=>e.stopPropagation()}>
          <div class="dialog-header">${this.buyListMode?"Add to Buy List":"Add Wine"}</div>
          ${this._renderStepIndicator()}
          ${"scan"===this._step?this._renderScanStep():H}
          ${"details"===this._step?this._renderDetailsStep():H}
          ${"location"===this._step?this._renderLocationStep():H}
          ${"confirm"===this._step?this._renderConfirmStep():H}
        </div>
      </div>
    `:H}};Ce.styles=[ue,o`
      .step-indicator {
        display: flex;
        justify-content: center;
        gap: 8px;
        padding: 12px 20px;
      }

      .step-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--wc-border);
        transition: all 0.2s;
      }

      .step-dot.active {
        background: var(--wc-primary);
        width: 24px;
        border-radius: 4px;
      }

      .step-dot.done {
        background: var(--wc-primary);
      }

      .scan-section {
        padding: 16px 20px;
      }

      .scan-options {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 16px;
      }

      .scan-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s;
        background: rgba(255, 255, 255, 0.06);
        color: var(--wc-text);
        text-align: left;
        font-size: 0.95em;
        width: 100%;
      }

      .scan-option:hover {
        border-color: var(--wc-primary);
        background: rgba(255, 255, 255, 0.12);
      }

      .scan-option-icon {
        font-size: 1.5em;
        flex-shrink: 0;
      }

      .scan-option-text {
        flex: 1;
      }

      .scan-option-title {
        font-weight: 600;
        margin-bottom: 2px;
      }

      .scan-option-desc {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
      }

      .scan-option.disabled {
        opacity: 0.5;
        cursor: default;
      }

      .barcode-input-row {
        display: flex;
        gap: 8px;
        margin-top: 12px;
      }

      .barcode-input-row input {
        flex: 1;
        padding: 10px 14px;
        border: 2px solid var(--wc-border);
        border-radius: 10px;
        font-size: 1em;
        text-align: center;
        letter-spacing: 2px;
        background: var(--wc-bg);
        color: var(--wc-text);
        box-sizing: border-box;
      }

      .barcode-input-row input:focus {
        border-color: var(--wc-primary);
        outline: none;
      }

      .or-divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 14px 0;
        color: var(--wc-text-secondary);
        font-size: 0.85em;
      }

      .or-divider::before,
      .or-divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--wc-border);
      }

      .search-input {
        width: 100%;
        padding: 10px 14px;
        border: 2px solid var(--wc-border);
        border-radius: 10px;
        font-size: 1em;
        box-sizing: border-box;
        background: var(--wc-bg);
        color: var(--wc-text);
      }

      .search-input:focus {
        border-color: var(--wc-primary);
        outline: none;
      }

      .lookup-result {
        background: rgba(114, 47, 55, 0.05);
        border: 1px solid rgba(114, 47, 55, 0.2);
        border-radius: 10px;
        padding: 12px;
        margin-top: 12px;
        text-align: left;
      }

      .lookup-result .result-name {
        font-weight: 600;
        font-size: 1em;
      }

      .lookup-result .result-detail {
        font-size: 0.85em;
        color: var(--wc-text-secondary);
        margin-top: 2px;
      }

      .location-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .location-cabinet {
        border: 2px solid var(--wc-border);
        border-radius: 10px;
        padding: 12px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
      }

      .location-cabinet:hover {
        border-color: var(--wc-primary);
        background: rgba(114, 47, 55, 0.05);
      }

      .location-cabinet.selected {
        border-color: var(--wc-primary);
        background: rgba(114, 47, 55, 0.1);
      }

      .location-cabinet .cab-name {
        font-weight: 600;
        font-size: 0.9em;
      }

      .location-cabinet .cab-info {
        font-size: 0.75em;
        color: var(--wc-text-secondary);
        margin-top: 4px;
      }

      .pos-inputs {
        display: flex;
        gap: 12px;
        margin-top: 12px;
      }

      .pos-inputs .form-group {
        flex: 1;
      }

      .error-msg {
        color: #c62828;
        font-size: 0.85em;
        margin-top: 8px;
      }

      .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid var(--wc-border);
        border-top-color: var(--wc-primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .confirm-summary {
        background: rgba(128, 128, 128, 0.08);
        border-radius: 10px;
        padding: 16px;
      }

      .confirm-summary .summary-row {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
        font-size: 0.9em;
      }

      .confirm-summary .summary-label {
        color: var(--wc-text-secondary);
      }

      .confirm-summary .summary-value {
        font-weight: 500;
      }

      .label-loading {
        text-align: center;
        padding: 20px;
      }

      .label-loading .loading-spinner {
        width: 32px;
        height: 32px;
        border-width: 3px;
      }

      .camera-actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        padding: 8px 0;
      }

      .rating-section {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--wc-border);
      }

      .rating-label {
        font-size: 0.85em;
        font-weight: 500;
        color: var(--wc-text-secondary);
        margin-bottom: 6px;
      }

      .search-results {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-height: 280px;
        overflow-y: auto;
      }

      .search-results-label {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        margin-bottom: 2px;
      }

      .search-result-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--wc-border);
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.15s;
        background: transparent;
        text-align: left;
        color: var(--wc-text);
        width: 100%;
        box-sizing: border-box;
      }

      .search-result-item:hover {
        border-color: var(--wc-primary);
        background: var(--wc-hover);
      }

      .search-result-thumb {
        width: 36px;
        height: 48px;
        border-radius: 4px;
        object-fit: cover;
        flex-shrink: 0;
        background: rgba(128, 128, 128, 0.1);
      }

      .search-result-info {
        flex: 1;
        min-width: 0;
      }

      .search-result-name {
        font-weight: 600;
        font-size: 0.9em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .search-result-meta {
        font-size: 0.78em;
        color: var(--wc-text-secondary);
        margin-top: 2px;
      }

      .search-result-rating {
        font-size: 0.8em;
        font-weight: 600;
        color: #f5a623;
        flex-shrink: 0;
      }

      .batch-review {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .batch-review-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .batch-review-title {
        font-weight: 600;
        font-size: 1em;
      }

      .batch-review-subtitle {
        font-size: 0.82em;
        color: var(--wc-text-secondary);
        margin-top: 2px;
      }

      .batch-review-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 420px;
        overflow-y: auto;
      }

      .batch-item {
        display: flex;
        gap: 12px;
        padding: 12px;
        border: 1px solid var(--wc-border);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);
      }

      .batch-item-thumb {
        width: 64px;
        height: 86px;
        border-radius: 8px;
        object-fit: cover;
        flex-shrink: 0;
        background: rgba(128, 128, 128, 0.12);
      }

      .batch-item-info {
        flex: 1;
        min-width: 0;
      }

      .batch-item-name {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        font-size: 0.95em;
        margin-bottom: 2px;
      }

      .batch-item-badge {
        font-size: 0.7em;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        padding: 3px 7px;
        border-radius: 999px;
        border: 1px solid var(--wc-border);
        color: var(--wc-text-secondary);
      }

      .batch-item-badge.ready {
        color: var(--wc-primary);
        border-color: rgba(114, 47, 55, 0.35);
      }

      .batch-item-badge.adding {
        color: #f5a623;
        border-color: rgba(245, 166, 35, 0.35);
      }

      .batch-item-badge.added {
        color: #2e7d32;
        border-color: rgba(46, 125, 50, 0.35);
      }

      .batch-item-badge.error {
        color: #c62828;
        border-color: rgba(198, 40, 40, 0.35);
      }

      .batch-item-meta {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        line-height: 1.35;
      }

      .batch-item-error {
        margin-top: 6px;
        color: #c62828;
        font-size: 0.8em;
      }

      .batch-item-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 10px;
      }

      .batch-empty {
        padding: 18px 12px;
        text-align: center;
        color: var(--wc-text-secondary);
        border: 1px dashed var(--wc-border);
        border-radius: 12px;
      }
    `],e([he({type:Boolean})],Ce.prototype,"open",void 0),e([he({attribute:!1})],Ce.prototype,"hass",void 0),e([he({attribute:!1})],Ce.prototype,"cabinets",void 0),e([he({attribute:!1})],Ce.prototype,"preselectedCabinet",void 0),e([he({attribute:!1})],Ce.prototype,"preselectedRow",void 0),e([he({attribute:!1})],Ce.prototype,"preselectedCol",void 0),e([he({attribute:!1})],Ce.prototype,"preselectedZone",void 0),e([he({attribute:!1})],Ce.prototype,"preselectedDepth",void 0),e([he({type:Boolean})],Ce.prototype,"buyListMode",void 0),e([ge()],Ce.prototype,"_step",void 0),e([ge()],Ce.prototype,"_scanMode",void 0),e([ge()],Ce.prototype,"_barcode",void 0),e([ge()],Ce.prototype,"_loading",void 0),e([ge()],Ce.prototype,"_lookupResult",void 0),e([ge()],Ce.prototype,"_wineData",void 0),e([ge()],Ce.prototype,"_error",void 0),e([ge()],Ce.prototype,"_hasGemini",void 0),e([ge()],Ce.prototype,"_labelLoading",void 0),e([ge()],Ce.prototype,"_searchResults",void 0),e([ge()],Ce.prototype,"_batchItems",void 0),e([ge()],Ce.prototype,"_batchLoading",void 0),Ce=e([de("add-wine-dialog")],Ce);let ze=class extends re{constructor(){super(...arguments),this.value="",this._filter="all"}_onInput(e){const t=e.target.value;this.dispatchEvent(new CustomEvent("search-change",{detail:{query:t,filter:this._filter},bubbles:!0,composed:!0}))}_onFilterChange(e){this._filter=e;const t=this.shadowRoot?.querySelector("input");this.dispatchEvent(new CustomEvent("search-change",{detail:{query:t?.value||"",filter:e},bubbles:!0,composed:!0}))}render(){return j`
      <div class="search-container">
        <div class="search-input-wrapper">
          <span class="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search wines..."
            .value=${this.value}
            @input=${this._onInput}
          />
        </div>
        <div class="filter-chips">
          ${[{id:"all",label:"All"},{id:"red",label:"Red"},{id:"white",label:"White"},{id:"rosé",label:"Rosé"},{id:"sparkling",label:"Sparkling"},{id:"dessert",label:"Dessert"}].map(e=>j`
              <button
                class="chip ${this._filter===e.id?"active":""}"
                @click=${()=>this._onFilterChange(e.id)}
              >
                ${e.label}
              </button>
            `)}
        </div>
      </div>
    `}};ze.styles=[ue,o`
      :host {
        display: block;
      }

      .search-container {
        display: flex;
        gap: 8px;
        padding: 0 16px 8px;
        align-items: center;
      }

      .search-input-wrapper {
        flex: 1;
        position: relative;
      }

      .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--wc-text-secondary);
        font-size: 0.9em;
        pointer-events: none;
      }

      input {
        width: 100%;
        padding: 8px 12px 8px 32px;
        border: 1px solid var(--wc-border);
        border-radius: 20px;
        font-size: 0.9em;
        background: var(--wc-bg);
        color: var(--wc-text);
        box-sizing: border-box;
        transition: border-color 0.2s;
      }

      input:focus {
        border-color: var(--wc-primary);
        outline: none;
      }

      .filter-chips {
        display: flex;
        gap: 4px;
      }

      .chip {
        padding: 4px 10px;
        border-radius: 14px;
        border: 1px solid var(--wc-border);
        background: transparent;
        color: var(--wc-text-secondary);
        cursor: pointer;
        font-size: 0.75em;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .chip:hover {
        background: rgba(114, 47, 55, 0.08);
      }

      .chip.active {
        background: var(--wc-primary);
        color: #fff;
        border-color: var(--wc-primary);
      }
    `],e([he({type:String})],ze.prototype,"value",void 0),e([ge()],ze.prototype,"_filter",void 0),ze=e([de("wine-search-bar")],ze);let Se=class extends re{constructor(){super(...arguments),this.open=!1,this.cabinets=[],this.wines=[],this._mode="list",this._editCabinet={},this._editStorageRows=[],this._deleteCabinet=null,this._loading=!1,this._error=""}updated(e){e.has("open")&&this.open&&(this._mode="list",this._error="")}_close(){this._mode="list",this._error="",this.dispatchEvent(new CustomEvent("close"))}_notifyUpdate(){this.dispatchEvent(new CustomEvent("racks-updated",{bubbles:!0,composed:!0}))}_winesInCabinet(e){return this.wines.filter(t=>t.cabinet_id===e).length}_winesOutOfBounds(e,t,i){return this.wines.filter(s=>s.cabinet_id===e&&null!=s.row&&null!=s.col&&(s.row>=t||s.col>=i)).length}_startAdd(){this._mode="add",this._error="",this._editCabinet={name:"",rows:1,cols:8,depth:1,has_bottom_zone:!1,bottom_zone_name:""},this._editStorageRows=[]}_startEdit(e){this._mode="edit",this._error="",this._editCabinet={...e},this._editStorageRows=(e.storage_rows||[]).map(e=>"box"!==e.type||e.boxes?{...e}:{...e,boxes:[e.capacity||12]})}_startDelete(e){this._mode="delete-confirm",this._error="",this._deleteCabinet=e}_setRowType(e,t){if("slots"===t)this._editStorageRows=this._editStorageRows.filter(t=>t.row!==e);else{const i=this._editStorageRows.find(t=>t.row===e),s="box"===t,a=s?12:20,n={row:e,name:i?.name||ve[t],type:t,capacity:a,...s?{boxes:[12]}:{}};this._editStorageRows=i?this._editStorageRows.map(t=>t.row===e?n:t):[...this._editStorageRows,n]}}_updateStorageRowName(e,t){this._editStorageRows=this._editStorageRows.map(i=>i.row===e?{...i,name:t}:i)}_updateStorageRowCapacity(e,t){this._editStorageRows=this._editStorageRows.map(i=>i.row===e?{...i,capacity:t}:i)}_updateBoxCount(e,t){this._editStorageRows=this._editStorageRows.map(i=>{if(i.row!==e||"box"!==i.type)return i;const s=[...i.boxes||[12]];for(;s.length<t;)s.push(12);for(;s.length>t;)s.pop();const a=s.reduce((e,t)=>e+t,0);return{...i,boxes:s,capacity:a}})}_updateBoxSize(e,t,i){this._editStorageRows=this._editStorageRows.map(s=>{if(s.row!==e||"box"!==s.type)return s;const a=[...s.boxes||[12]];a[t]=i;const n=a.reduce((e,t)=>e+t,0);return{...s,boxes:a,capacity:n}})}_isStorageRow(e){return this._editStorageRows.some(t=>t.row===e)}_getStorageRow(e){return this._editStorageRows.find(t=>t.row===e)}_addRow(){const e=this._editCabinet.rows||1;e>=20||(this._editCabinet={...this._editCabinet,rows:e+1})}_removeRow(){const e=this._editCabinet.rows||1;if(e<=1)return;const t=e-1;this._editStorageRows=this._editStorageRows.filter(e=>e.row<t),this._editCabinet={...this._editCabinet,rows:t}}_addCol(){const e=this._editCabinet.cols||1;e>=20||(this._editCabinet={...this._editCabinet,cols:e+1})}_removeCol(){const e=this._editCabinet.cols||1;e<=1||(this._editCabinet={...this._editCabinet,cols:e-1})}_addDepth(){const e=this._editCabinet.depth||1;e>=6||(this._editCabinet={...this._editCabinet,depth:e+1})}_removeDepth(){const e=this._editCabinet.depth||1;e<=1||(this._editCabinet={...this._editCabinet,depth:e-1})}async _saveAdd(){this._loading=!0,this._error="";try{await this.hass.callWS({type:"wine_cellar/add_cabinet",cabinet:{name:this._editCabinet.name||"New Rack",rows:this._editCabinet.rows||1,cols:this._editCabinet.cols||8,depth:this._editCabinet.depth||1,has_bottom_zone:!1,bottom_zone_name:"",storage_rows:this._editStorageRows,order:this.cabinets.length,orientation:"vertical"}}),this._notifyUpdate(),this._mode="list"}catch{this._error="Failed to add rack."}this._loading=!1}async _saveEdit(){this._loading=!0,this._error="";try{const e=this._editCabinet.id,t=this._editCabinet.rows||1,i=this._editCabinet.cols||8,s=this._editStorageRows.filter(e=>e.row<t);await this.hass.callWS({type:"wine_cellar/update_cabinet",cabinet_id:e,updates:{name:this._editCabinet.name,rows:t,cols:i,depth:this._editCabinet.depth||1,has_bottom_zone:!1,bottom_zone_name:"",storage_rows:s,orientation:"vertical"}});const a=this.wines.filter(a=>a.cabinet_id===e&&null!=a.row&&null!=a.col&&(a.row>=t||a.col>=i||s.some(e=>e.row===a.row)));for(const e of a)await this.hass.callWS({type:"wine_cellar/update_wine",wine_id:e.id,updates:{cabinet_id:"",row:null,col:null,zone:""}});this._notifyUpdate(),this._mode="list"}catch{this._error="Failed to update rack."}this._loading=!1}async _confirmDelete(){if(this._deleteCabinet){this._loading=!0,this._error="";try{await this.hass.callWS({type:"wine_cellar/remove_cabinet",cabinet_id:this._deleteCabinet.id}),this._notifyUpdate(),this._mode="list",this._deleteCabinet=null}catch{this._error="Failed to delete rack."}this._loading=!1}}async _moveUp(e){const t=[...this.cabinets].sort((e,t)=>e.order-t.order),i=t.findIndex(t=>t.id===e.id);if(i<=0)return;const s=t[i-1];try{await Promise.all([this.hass.callWS({type:"wine_cellar/update_cabinet",cabinet_id:e.id,updates:{order:s.order}}),this.hass.callWS({type:"wine_cellar/update_cabinet",cabinet_id:s.id,updates:{order:e.order}})]),this._notifyUpdate()}catch{this._error="Failed to reorder racks."}}async _moveDown(e){const t=[...this.cabinets].sort((e,t)=>e.order-t.order),i=t.findIndex(t=>t.id===e.id);if(i<0||i>=t.length-1)return;const s=t[i+1];try{await Promise.all([this.hass.callWS({type:"wine_cellar/update_cabinet",cabinet_id:e.id,updates:{order:s.order}}),this.hass.callWS({type:"wine_cellar/update_cabinet",cabinet_id:s.id,updates:{order:e.order}})]),this._notifyUpdate()}catch{this._error="Failed to reorder racks."}}_renderList(){const e=[...this.cabinets].sort((e,t)=>e.order-t.order);return j`
      <div class="dialog-body">
        <div class="rack-list">
          ${e.map((t,i)=>{const s=(t.storage_rows||[]).length;return j`
                <div class="rack-item">
                  <div class="rack-info">
                    <div class="rack-name">${t.name}</div>
                    <div class="rack-meta">
                      ${t.rows} × ${t.cols} grid${(t.depth||1)>1?` × ${t.depth} deep`:""}
                      · ${this._winesInCabinet(t.id)} bottles
                      ${s>0?` · ${s} storage`:""}
                    </div>
                  </div>
                  <div class="rack-actions">
                    <button
                      class="small-btn"
                      @click=${()=>this._moveUp(t)}
                      ?disabled=${0===i}
                      title="Move up"
                    >↑</button>
                    <button
                      class="small-btn"
                      @click=${()=>this._moveDown(t)}
                      ?disabled=${i===e.length-1}
                      title="Move down"
                    >↓</button>
                    <button
                      class="small-btn"
                      @click=${()=>this._startEdit(t)}
                    >Edit</button>
                    <button
                      class="small-btn danger"
                      @click=${()=>this._startDelete(t)}
                    >Del</button>
                  </div>
                </div>
              `})}

          <button class="add-rack-btn" @click=${this._startAdd}>
            + Add Rack
          </button>
        </div>
      </div>
      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${this._close}>Close</button>
      </div>
    `}_renderForm(){const e="edit"===this._mode,t=this._editCabinet.rows||1,i=this._editCabinet.cols||8,s=this._editCabinet.depth||1;let a=0;if(e&&this._editCabinet.id){const e=this.cabinets.find(e=>e.id===this._editCabinet.id);if(e){const t=this._editCabinet.rows||e.rows,i=this._editCabinet.cols||e.cols;(t<e.rows||i<e.cols)&&(a=this._winesOutOfBounds(this._editCabinet.id,t,i))}}return j`
      <div class="dialog-body">
        <div class="form-group">
          <label>Rack Name</label>
          <input
            type="text"
            .value=${this._editCabinet.name||""}
            @input=${e=>this._editCabinet={...this._editCabinet,name:e.target.value}}
          />
        </div>

        <!-- Grid Editor -->
        <div class="grid-editor">
          <div class="grid-editor-title">Grid Layout</div>

          <!-- Stepper controls -->
          <div class="stepper-row">
            <div class="stepper-wrap">
              <div class="stepper-label">Rows</div>
              <div class="stepper">
                <button class="stepper-btn" @click=${this._removeRow} ?disabled=${t<=1}>−</button>
                <span class="stepper-value">${t}</span>
                <button class="stepper-btn" @click=${this._addRow} ?disabled=${t>=20}>+</button>
              </div>
            </div>
            <div class="stepper-wrap">
              <div class="stepper-label">Columns</div>
              <div class="stepper">
                <button class="stepper-btn" @click=${this._removeCol} ?disabled=${i<=1}>−</button>
                <span class="stepper-value">${i}</span>
                <button class="stepper-btn" @click=${this._addCol} ?disabled=${i>=20}>+</button>
              </div>
            </div>
            <div class="stepper-wrap">
              <div class="stepper-label">Depth</div>
              <div class="stepper">
                <button class="stepper-btn" @click=${this._removeDepth} ?disabled=${s<=1}>−</button>
                <span class="stepper-value">${s}</span>
                <button class="stepper-btn" @click=${this._addDepth} ?disabled=${s>=6}>+</button>
              </div>
            </div>
          </div>

          <!-- Visual grid preview -->
          <div class="grid-preview">
            ${Array.from({length:t},(e,t)=>{const s=this._isStorageRow(t),a=this._getStorageRow(t);return j`
                <div class="grid-preview-row ${s?"storage":""}">
                  <span class="grid-preview-label">R${t+1}</span>
                  ${s?j`<div class="grid-preview-cell"></div><span class="grid-preview-storage-label">${"box"===a?.type?"📦":"◇"} ${a?.name||"Storage"}</span>`:Array.from({length:Math.min(i,15)},()=>j`<div class="grid-preview-cell"></div>`)}
                  ${!s&&i>15?j`<span style="font-size:0.65em;color:var(--wc-text-secondary)">+${i-15}</span>`:H}
                </div>
              `})}
          </div>

          <!-- Row list with type selectors -->
          <div class="row-list">
            ${Array.from({length:t},(e,t)=>{const a=this._isStorageRow(t),n=this._getStorageRow(t),o=n?.type||"slots";return j`
                <div class="row-entry ${a?"storage":""}">
                  <span class="row-num">R${t+1}</span>
                  <select
                    class="row-type-select"
                    @change=${e=>{const i=e.target.value;this._setRowType(t,i)}}
                    @click=${e=>e.stopPropagation()}
                  >
                    <option value="slots" ?selected=${!a}>Slots</option>
                    <option value="bulk" ?selected=${"bulk"===o}>Bulk Bin</option>
                    <option value="box" ?selected=${"box"===o}>Wine Box</option>
                  </select>
                  ${a?j`
                        <input
                          type="text"
                          class="row-name-input"
                          .value=${n?.name||"Storage"}
                          @input=${e=>this._updateStorageRowName(t,e.target.value)}
                          @click=${e=>e.stopPropagation()}
                          placeholder="Zone name"
                        />
                        ${"box"===n?.type?j`
                              <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
                                <div class="row-cap-stepper">
                                  <button class="stepper-btn-sm" @click=${e=>{e.stopPropagation(),this._updateBoxCount(t,Math.max(1,(n?.boxes||[12]).length-1))}}>−</button>
                                  <span class="stepper-val-sm">${(n?.boxes||[12]).length}</span>
                                  <button class="stepper-btn-sm" @click=${e=>{e.stopPropagation(),this._updateBoxCount(t,Math.min(10,(n?.boxes||[12]).length+1))}}>+</button>
                                </div>
                                ${(n?.boxes||[12]).map((e,i)=>j`
                                  <select
                                    class="row-cap-select"
                                    @change=${e=>this._updateBoxSize(t,i,parseInt(e.target.value))}
                                    @click=${e=>e.stopPropagation()}
                                  >
                                    ${be.map(t=>j`<option value=${t} ?selected=${e===t}>${t}-pk</option>`)}
                                  </select>
                                `)}
                                <span style="font-size:0.7em;color:var(--wc-text-secondary);">= ${n?.capacity||12}</span>
                              </div>
                            `:j`
                              <div class="row-cap-stepper">
                                <button class="stepper-btn-sm" @click=${e=>{e.stopPropagation(),this._updateStorageRowCapacity(t,Math.max(1,(n?.capacity||20)-1))}}>−</button>
                                <span class="stepper-val-sm">${n?.capacity||20}</span>
                                <button class="stepper-btn-sm" @click=${e=>{e.stopPropagation(),this._updateStorageRowCapacity(t,Math.min(100,(n?.capacity||20)+1))}}>+</button>
                              </div>
                            `}
                      `:j`<span class="row-type-info">${i} col${1!==i?"s":""}${s>1?` × ${s} deep`:""}</span>`}
                </div>
              `})}
          </div>
          <!-- Use the Rows stepper above to add/remove rows -->
        </div>

        ${a>0?j`
              <div class="warning-msg">
                Shrinking will unassign ${a} wine${a>1?"s":""} that are outside the new grid bounds.
              </div>
            `:H}

        ${this._error?j`<div class="error-msg" style="color:#ef5350;margin-top:8px">${this._error}</div>`:H}
      </div>

      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${()=>this._mode="list"}>
          Cancel
        </button>
        <button
          class="btn btn-primary"
          @click=${e?this._saveEdit:this._saveAdd}
          ?disabled=${this._loading}
        >
          ${this._loading?"Saving...":"Save"}
        </button>
      </div>
    `}_renderDeleteConfirm(){if(!this._deleteCabinet)return H;const e=this._winesInCabinet(this._deleteCabinet.id);return j`
      <div class="dialog-body">
        <div class="delete-info">
          Are you sure you want to delete
          <strong>"${this._deleteCabinet.name}"</strong>?
          ${e>0?j`<br /><span class="delete-count"
                >${e} wine${e>1?"s":""} will be unassigned.</span
              >`:H}
        </div>
        ${this._error?j`<div style="color:#ef5350;font-size:0.85em">${this._error}</div>`:H}
      </div>
      <div class="dialog-footer">
        <button class="btn btn-outline" @click=${()=>this._mode="list"}>
          Cancel
        </button>
        <button
          class="btn btn-primary"
          style="background:#c62828"
          @click=${this._confirmDelete}
          ?disabled=${this._loading}
        >
          ${this._loading?"Deleting...":"Delete"}
        </button>
      </div>
    `}render(){if(!this.open)return H;return j`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" @click=${e=>e.stopPropagation()}>
          <div class="dialog-header">${{list:"Manage Racks",add:"Add Rack",edit:"Edit Rack","delete-confirm":"Delete Rack?"}[this._mode]}</div>
          ${"list"===this._mode?this._renderList():H}
          ${"add"===this._mode||"edit"===this._mode?this._renderForm():H}
          ${"delete-confirm"===this._mode?this._renderDeleteConfirm():H}
        </div>
      </div>
    `}};Se.styles=[ue,o`
      .rack-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .rack-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border: 1px solid var(--wc-border);
        border-radius: 10px;
        transition: background 0.2s;
      }

      .rack-item:hover {
        background: var(--wc-hover);
      }

      .rack-info {
        flex: 1;
        min-width: 0;
      }

      .rack-name {
        font-weight: 600;
        font-size: 0.95em;
      }

      .rack-meta {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        margin-top: 2px;
      }

      .rack-actions {
        display: flex;
        gap: 4px;
        align-items: center;
        flex-shrink: 0;
      }

      .small-btn {
        background: transparent;
        border: 1px solid var(--wc-border);
        border-radius: 6px;
        cursor: pointer;
        padding: 4px 8px;
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        transition: all 0.2s;
      }

      .small-btn:hover {
        background: var(--wc-hover);
      }

      .small-btn:disabled {
        opacity: 0.3;
        cursor: default;
      }

      .small-btn.danger {
        color: #c62828;
        border-color: rgba(198, 40, 40, 0.3);
      }

      .small-btn.danger:hover {
        background: rgba(198, 40, 40, 0.08);
      }

      .warning-msg {
        background: rgba(255, 152, 0, 0.1);
        border: 1px solid rgba(255, 152, 0, 0.3);
        border-radius: 8px;
        padding: 10px;
        font-size: 0.85em;
        color: #e65100;
        margin-top: 12px;
      }

      .delete-info {
        font-size: 0.95em;
        margin: 12px 0;
        line-height: 1.5;
      }

      .delete-count {
        color: #c62828;
        font-weight: 600;
      }

      .add-rack-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 10px;
        border: 2px dashed var(--wc-border);
        border-radius: 10px;
        background: transparent;
        color: var(--wc-text-secondary);
        cursor: pointer;
        font-size: 0.9em;
        transition: all 0.2s;
        width: 100%;
      }

      .add-rack-btn:hover {
        border-color: var(--wc-primary);
        color: var(--wc-primary);
        background: rgba(114, 47, 55, 0.05);
      }

      /* Grid editor */
      .grid-editor {
        margin-top: 12px;
      }

      .grid-editor-title {
        font-size: 0.85em;
        font-weight: 600;
        color: var(--wc-text);
        margin-bottom: 12px;
      }

      /* Stepper controls for cols/depth */
      .stepper-row {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
      }

      .stepper {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0;
        border: 1px solid var(--wc-border);
        border-radius: 8px;
        overflow: hidden;
      }

      .stepper-label {
        font-size: 0.75em;
        color: var(--wc-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
        font-weight: 500;
      }

      .stepper-wrap {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .stepper-btn {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.1em;
        font-weight: 600;
        color: var(--wc-text-secondary);
        transition: all 0.15s;
        flex-shrink: 0;
      }

      .stepper-btn:hover:not(:disabled) {
        background: rgba(114, 47, 55, 0.1);
        color: var(--wc-primary);
      }

      .stepper-btn:disabled {
        opacity: 0.25;
        cursor: default;
      }

      .stepper-value {
        flex: 1;
        text-align: center;
        font-size: 0.9em;
        font-weight: 600;
        color: var(--wc-text);
        padding: 6px 0;
        min-width: 40px;
      }

      /* Visual grid preview */
      .grid-preview {
        border: 1px solid var(--wc-border);
        border-radius: 8px;
        padding: 8px;
        margin-bottom: 8px;
        overflow-x: auto;
      }

      .grid-preview-row {
        display: flex;
        gap: 3px;
        margin-bottom: 3px;
        align-items: center;
      }

      .grid-preview-row:last-child {
        margin-bottom: 0;
      }

      .grid-preview-label {
        width: 28px;
        font-size: 0.65em;
        font-weight: 600;
        color: var(--wc-text-secondary);
        text-align: center;
        flex-shrink: 0;
      }

      .grid-preview-cell {
        width: 20px;
        height: 16px;
        border-radius: 3px;
        background: rgba(114, 47, 55, 0.15);
        border: 1px solid rgba(114, 47, 55, 0.25);
        flex-shrink: 0;
      }

      .grid-preview-row.storage .grid-preview-cell {
        background: rgba(139, 105, 20, 0.15);
        border-color: rgba(139, 105, 20, 0.3);
      }

      .grid-preview-storage-label {
        font-size: 0.6em;
        color: #8b6914;
        font-weight: 600;
        white-space: nowrap;
        padding-left: 4px;
      }

      .grid-preview-row.storage .grid-preview-cell {
        width: unset;
        flex: 1;
        max-width: none;
      }

      /* Row list */
      .row-list {
        display: flex;
        flex-direction: column;
        gap: 3px;
        max-height: 200px;
        overflow-y: auto;
        border: 1px solid var(--wc-border);
        border-radius: 8px;
        padding: 6px;
      }

      .row-entry {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 6px;
        border-radius: 6px;
        font-size: 0.8em;
        transition: background 0.15s;
      }

      .row-entry:hover {
        background: var(--wc-hover);
      }

      .row-entry.storage {
        background: rgba(139, 105, 20, 0.1);
        border: 1px solid rgba(139, 105, 20, 0.3);
      }

      .row-entry .row-num {
        width: 28px;
        font-weight: 600;
        color: var(--wc-text-secondary);
        font-size: 0.85em;
      }

      .row-type-select {
        padding: 2px 4px;
        border: 1px solid var(--wc-border);
        border-radius: 4px;
        font-size: 0.8em;
        background: var(--wc-bg);
        color: var(--wc-text);
        cursor: pointer;
      }

      .row-name-input {
        width: 80px;
        padding: 2px 6px;
        border: 1px solid var(--wc-border);
        border-radius: 4px;
        font-size: 0.8em;
        background: var(--wc-bg);
        color: var(--wc-text);
        flex-shrink: 1;
        min-width: 60px;
      }

      .row-cap-select {
        padding: 2px 4px;
        border: 1px solid var(--wc-border);
        border-radius: 4px;
        font-size: 0.8em;
        background: var(--wc-bg);
        color: var(--wc-text);
        cursor: pointer;
      }

      .row-cap-stepper {
        display: flex;
        align-items: center;
        gap: 2px;
      }

      .stepper-btn-sm {
        width: 20px;
        height: 20px;
        border: 1px solid var(--wc-border);
        border-radius: 4px;
        background: var(--wc-bg);
        color: var(--wc-text);
        cursor: pointer;
        font-size: 0.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }

      .stepper-btn-sm:hover {
        background: var(--wc-hover);
      }

      .stepper-val-sm {
        font-size: 0.8em;
        font-weight: 600;
        min-width: 22px;
        text-align: center;
      }

      .row-type-info {
        flex: 1;
        font-size: 0.8em;
        color: var(--wc-text-secondary);
      }

      .row-entry input[type="text"] {
        width: 100px;
        padding: 2px 6px;
        border: 1px solid var(--wc-border);
        border-radius: 4px;
        font-size: 0.85em;
        background: var(--wc-bg);
        color: var(--wc-text);
      }

      .row-controls {
        display: flex;
        gap: 6px;
        margin-top: 6px;
      }

      .row-ctrl-btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 6px 0;
        border: 1px dashed var(--wc-border);
        border-radius: 6px;
        background: transparent;
        color: var(--wc-text-secondary);
        cursor: pointer;
        font-size: 0.8em;
        transition: all 0.15s;
      }

      .row-ctrl-btn:hover:not(:disabled) {
        border-color: var(--wc-primary);
        color: var(--wc-primary);
        background: rgba(114, 47, 55, 0.05);
      }

      .row-ctrl-btn:disabled {
        opacity: 0.3;
        cursor: default;
      }

      .row-ctrl-btn.danger:hover:not(:disabled) {
        border-color: #c62828;
        color: #c62828;
        background: rgba(198, 40, 40, 0.05);
      }
    `],e([he({type:Boolean})],Se.prototype,"open",void 0),e([he({attribute:!1})],Se.prototype,"hass",void 0),e([he({attribute:!1})],Se.prototype,"cabinets",void 0),e([he({attribute:!1})],Se.prototype,"wines",void 0),e([ge()],Se.prototype,"_mode",void 0),e([ge()],Se.prototype,"_editCabinet",void 0),e([ge()],Se.prototype,"_editStorageRows",void 0),e([ge()],Se.prototype,"_deleteCabinet",void 0),e([ge()],Se.prototype,"_loading",void 0),e([ge()],Se.prototype,"_error",void 0),Se=e([de("rack-settings-dialog")],Se);let De=class extends re{constructor(){super(...arguments),this.open=!1,this.cellarWines=[],this._phase="capture",this._wines=[],this._restaurantName=null,this._currency="USD",this._error="",this._enriching=!1,this._expandedIndex=null,this._addedIndices=new Set,this._cancelEnrichment=!1,this._buyListIndices=new Set,this._detailWine=null,this._showDetail=!1,this.hasGemini=!1}updated(e){e.has("open")&&this.open&&(this._phase="capture",this._wines=[],this._restaurantName=null,this._currency="USD",this._error="",this._enriching=!1,this._expandedIndex=null,this._addedIndices=new Set,this._buyListIndices=new Set,this._cancelEnrichment=!1)}_close(){this._cancelEnrichment=!0,this.open=!1,this.dispatchEvent(new CustomEvent("close"))}async _onPhotoCaptured(e){this._phase="extracting",this._error="";try{const t=await this.hass.callWS({type:"wine_cellar/extract_wine_list",image:e.detail.image});if(t.error)return this._error=t.error,void(this._phase="capture");const i=t;if(!i||!Array.isArray(i.wines))return this._error="No wines found in the image. Try a clearer photo.",void(this._phase="capture");const s=this._wines.length,a=i.wines.map((e,t)=>({...e,index:s+t,vivino_rating:null,vivino_ratings_count:null,vivino_price:null,vivino_image_url:"",ai_ratings:e.ai_ratings||null,ai_description:e.description||"",ai_disposition:e.disposition||"",ai_drink_window:e.drink_window||"",ai_estimated_price:e.estimated_retail_price||null,vivino_status:"pending",ai_status:e.ai_ratings||e.disposition||e.description?"done":"skipped"}));this._wines=[...this._wines,...a],this._restaurantName=i.restaurant_name||this._restaurantName,this._currency=i.currency||"USD",this._phase="results"}catch(e){this._error=`Extraction failed: ${e?.message||e}`,this._phase="capture"}}async _startVivinoEnrichment(){this._enriching=!0,this._cancelEnrichment=!1;for(const e of this._wines){if(this._cancelEnrichment)break;if("pending"===e.vivino_status){e.vivino_status="loading",this._wines=[...this._wines];try{const t=await this.hass.callWS({type:"wine_cellar/enrich_wine_vivino",wine:{name:e.name,winery:e.winery,vintage:e.vintage,type:e.type}});t.result&&(e.vivino_rating=t.result.rating,e.vivino_ratings_count=t.result.ratings_count,e.vivino_price=t.result.price||null,e.vivino_image_url=t.result.image_url||""),e.vivino_status="done"}catch{e.vivino_status="error"}this._wines=[...this._wines],await new Promise(e=>setTimeout(e,1e3))}}this._enriching=!1}async _addToCellar(e){try{await this.hass.callWS({type:"wine_cellar/add_wine",wine:{name:e.name,winery:e.winery,vintage:e.vintage,type:e.type,region:e.region,country:e.country,grape_variety:e.grape_variety,rating:e.vivino_rating,ratings_count:e.vivino_ratings_count,image_url:e.vivino_image_url,price:e.list_price,retail_price:e.vivino_price||e.ai_estimated_price,description:e.ai_description,ai_ratings:e.ai_ratings,disposition:e.ai_disposition,drink_window:e.ai_drink_window}}),this._addedIndices=new Set([...this._addedIndices,e.index]),this.dispatchEvent(new CustomEvent("wine-added",{bubbles:!0,composed:!0}))}catch(e){console.error("Failed to add wine from list",e)}}async _addToBuyList(e){try{await this.hass.callWS({type:"wine_cellar/add_to_buy_list",wine:{name:e.name,winery:e.winery,vintage:e.vintage,type:e.type,region:e.region,country:e.country,grape_variety:e.grape_variety,rating:e.vivino_rating,ratings_count:e.vivino_ratings_count,image_url:e.vivino_image_url,price:e.list_price,retail_price:e.vivino_price||e.ai_estimated_price,description:e.ai_description,ai_ratings:e.ai_ratings,disposition:e.ai_disposition,drink_window:e.ai_drink_window}}),this._buyListIndices=new Set([...this._buyListIndices,e.index]),this.dispatchEvent(new CustomEvent("buy-list-updated",{bubbles:!0,composed:!0}))}catch(e){console.error("Failed to add wine to buy list",e)}}_scanAnotherPage(){this._phase="capture",this._error=""}_formatPrice(e,t="USD"){if(null==e)return"---";return`${{USD:"$",EUR:"€",GBP:"£",JPY:"¥",CHF:"CHF ",AUD:"A$",CAD:"C$"}[t]||`${t} `}${e.toFixed(0)}`}_calcMarkup(e,t){if(!e||!t||t<=0)return null;const i=(e-t)/t*100,s=e/t;return{text:`${i>=0?"+":""}${Math.round(i)}%`,color:s<=1.5?"#2e7d32":s<=2.5?"#f57f17":"#c62828"}}_getValueBadge(e){const t=e.list_price,i=e.vivino_price||e.ai_estimated_price;if(!t||!i)return null;const s=t/i;return s<=1.5?{label:"Great Value",color:"#2e7d32"}:s<=2?{label:"Fair Price",color:"#558b2f"}:s<=3?{label:"Typical",color:"#f57f17"}:{label:"Premium",color:"#c62828"}}_showWineDetail(e){this._detailWine={id:`winelist-${e.index}`,barcode:"",name:e.name,winery:e.winery,region:e.region,country:e.country,vintage:e.vintage||0,type:e.type||"red",grape_variety:e.grape_variety,rating:e.vivino_rating||0,ratings_count:e.vivino_ratings_count||0,image_url:e.vivino_image_url||"",price:e.list_price||0,retail_price:e.vivino_price||e.ai_estimated_price||0,purchase_date:"",drink_by:"",drink_window:e.ai_drink_window||"",notes:"",description:e.ai_description||"",food_pairings:"",alcohol:"",cabinet_id:"",row:null,col:null,depth:0,zone:"",disposition:e.ai_disposition||"",ai_ratings:e.ai_ratings,added_at:""},this._showDetail=!0}_findCellarMatch(e){if(!this.cellarWines?.length)return null;const t=(e.name||"").toLowerCase().trim(),i=(e.winery||"").toLowerCase().trim(),s=e.vintage;return this.cellarWines.find(e=>{const a=(e.name||"").toLowerCase().trim(),n=(e.winery||"").toLowerCase().trim(),o=a.includes(t)||t.includes(a),r=!i||!n||n.includes(i)||i.includes(n),l=!s||!e.vintage||s===e.vintage;return o&&r&&l})||null}_renderWineItem(e){const t=me[e.type]||me.red,i=this._expandedIndex===e.index,s=this._addedIndices.has(e.index),a=e.vivino_price||e.ai_estimated_price,n=this._calcMarkup(e.list_price,a),o=this._getValueBadge(e),r=this._findCellarMatch(e);return j`
      <div
        class="wine-list-item ${i?"expanded":""}"
        @click=${()=>this._showWineDetail(e)}
      >
        <div class="wl-type-dot" style="background: ${t}"></div>
        ${e.vivino_image_url?j`<img class="wl-thumb" src="${e.vivino_image_url}" alt="" />`:H}
        <div class="wl-info">
          <div class="wl-name">
            ${e.winery?`${e.winery} `:""}${e.name}
            ${r?j`<span class="wl-cellar-badge">IN CELLAR</span>`:H}
          </div>
          <div class="wl-meta">
            ${e.vintage||"NV"} ${e.region?`• ${e.region}`:""}
            ${e.grape_variety?`• ${e.grape_variety}`:""}
          </div>

          <!-- Prices + Scores combined row -->
          <div class="wl-price-row">
            ${null!==e.list_price?j`<span class="wl-list-price">${this._formatPrice(e.list_price,this._currency)}</span>`:H}
            ${a?j`<span class="wl-market-price">${this._formatPrice(a,"USD")}</span>`:H}
            ${n?j`<span class="wl-markup-badge" style="background:${n.color}">${n.text}</span>`:H}
            ${o?j`<span class="wl-value-badge" style="background:${o.color}">${o.label}</span>`:H}
            ${"loading"===e.vivino_status?j`<span class="wl-loading-dot"></span>`:e.vivino_rating?j`<span class="wl-vivino-rating">\u2605 ${e.vivino_rating.toFixed(1)}</span>`:H}
            ${"loading"===e.ai_status?j`<span class="wl-loading-dot"></span>`:H}
            ${r?.user_rating?j`<span class="wl-user-score">\uD83C\uDF77 ${r.user_rating}/100</span>`:H}
            ${e.ai_ratings?.rating_ws?j`<span class="wl-ai-chip">WS ${e.ai_ratings.rating_ws}</span>`:H}
            ${e.ai_ratings?.rating_rp?j`<span class="wl-ai-chip">RP ${e.ai_ratings.rating_rp}</span>`:H}
            ${e.ai_ratings?.rating_jd?j`<span class="wl-ai-chip">JD ${e.ai_ratings.rating_jd}</span>`:H}
            ${e.ai_ratings?.rating_ag?j`<span class="wl-ai-chip">AG ${e.ai_ratings.rating_ag}</span>`:H}
          </div>

          <!-- Expanded details -->
          ${i?j`
                <div class="wl-expanded-detail">
                  ${e.ai_description?j`<div class="wl-detail-row" style="font-style:italic">${e.ai_description}</div>`:H}
                  ${e.ai_drink_window?j`<div class="wl-detail-row"><span class="wl-detail-label">Drink window:</span>${e.ai_drink_window}</div>`:H}
                  ${e.glass_price?j`<div class="wl-detail-row"><span class="wl-detail-label">By the glass:</span>${this._formatPrice(e.glass_price,this._currency)}</div>`:H}
                  ${e.bottle_size&&"750ml"!==e.bottle_size?j`<div class="wl-detail-row"><span class="wl-detail-label">Size:</span>${e.bottle_size}</div>`:H}
                  ${e.vivino_ratings_count?j`<div class="wl-detail-row"><span class="wl-detail-label">Vivino:</span>${e.vivino_rating?.toFixed(1)} (${e.vivino_ratings_count.toLocaleString()} ratings)</div>`:H}
                </div>
              `:H}
        </div>

        <div class="wl-actions" @click=${e=>e.stopPropagation()}>
          <button
            class="wl-add-btn ${s?"added":""}"
            ?disabled=${s}
            @click=${()=>!s&&this._addToCellar(e)}
          >
            ${s?"✓":"+ Add"}
          </button>
          <button
            class="wl-buy-btn ${this._buyListIndices.has(e.index)?"added":""}"
            ?disabled=${this._buyListIndices.has(e.index)}
            @click=${()=>!this._buyListIndices.has(e.index)&&this._addToBuyList(e)}
          >
            ${this._buyListIndices.has(e.index)?"✓":"🛒 Buy"}
          </button>
        </div>
      </div>
    `}render(){if(!this.open)return H;const e=this._wines.filter(e=>"done"===e.vivino_status||"error"===e.vivino_status).length,t=this._wines.length;return j`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" style="max-width:600px" @click=${e=>e.stopPropagation()}>
          <div class="header">
            <span class="header-title">
              ${"capture"===this._phase?"🍽️ Scan List":this._restaurantName?`🍽️ ${this._restaurantName}`:"🍽️ Scanned List"}
            </span>
            <button class="close-btn" @click=${this._close}>\u2715</button>
          </div>

          ${"capture"===this._phase?j`
                ${this._error?j`<div class="error-msg">${this._error}</div>`:H}
                ${this._wines.length>0?j`<div class="header-subtitle">${this._wines.length} wines already scanned. Take another photo to add more.</div>`:j`<div class="header-subtitle">Take a photo of a wine list or receipt to see ratings, scores, and value.</div>`}
                <div style="padding: 0 16px 16px">
                  <label-camera .active=${"capture"===this._phase} @photo-captured=${this._onPhotoCaptured}></label-camera>
                </div>
                ${this._wines.length>0?j`
                      <div class="footer-actions">
                        <button class="btn btn-primary" @click=${()=>this._phase="results"}>
                          Back to Results (${this._wines.length})
                        </button>
                      </div>
                    `:H}
              `:H}

          ${"extracting"===this._phase?j`
                <div class="extracting">
                  <div class="spinner"></div>
                  <div>Analyzing list...</div>
                  <div style="font-size:0.85em">Gemini is reading wines and scoring them</div>
                  <div style="font-size:0.78em; color: var(--secondary-text-color); margin-top: 8px;">Long lists may take up to 3 minutes</div>
                </div>
              `:H}

          ${"results"===this._phase?j`
                <div class="header-subtitle">
                  ${t} wine${1!==t?"s":""} found
                  ${"USD"!==this._currency?` • Prices in ${this._currency}`:""}
                </div>

                <!-- Vivino enrichment progress -->
                ${this._enriching?j`
                      <div class="enrichment-bar">
                        <span>\uD83C\uDF47 Vivino ${e}/${t}</span>
                        <div class="progress-track">
                          <div
                            class="progress-fill vivino"
                            style="width: ${t?e/t*100:0}%"
                          ></div>
                        </div>
                      </div>
                    `:H}

                <div class="wine-list-results">
                  ${this._wines.map(e=>this._renderWineItem(e))}
                </div>

                <div class="footer-actions">
                  ${!this._enriching&&this._wines.some(e=>"pending"===e.vivino_status)?j`
                        <button
                          class="btn btn-primary"
                          style="background:#8e24aa"
                          @click=${this._startVivinoEnrichment}
                        >
                          \uD83C\uDF47 Get Vivino Scores
                        </button>
                      `:H}
                  <button
                    class="btn btn-primary"
                    style="background:#00695c"
                    @click=${this._scanAnotherPage}
                  >
                    \uD83D\uDCF7 Scan Another Page
                  </button>
                </div>
              `:H}
        </div>
      </div>

      <!-- Wine detail dialog for wine list items -->
      <wine-detail-dialog
        .wine=${this._detailWine}
        .hass=${this.hass}
        .open=${this._showDetail}
        .hasGemini=${this.hasGemini}
        .mode=${"winelist"}
        @close=${()=>this._showDetail=!1}
      ></wine-detail-dialog>
    `}};De.styles=[ue,o`
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px 8px;
      }

      .header-title {
        font-size: 1.1em;
        font-weight: 600;
        color: var(--wc-text);
      }

      .header-subtitle {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        padding: 0 20px 12px;
      }

      .close-btn {
        background: none;
        border: none;
        font-size: 1.3em;
        cursor: pointer;
        color: var(--wc-text-secondary);
        padding: 4px 8px;
        border-radius: 6px;
        line-height: 1;
      }

      .close-btn:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .extracting {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 40px 20px;
        color: var(--wc-text-secondary);
      }

      .spinner {
        width: 40px;
        height: 40px;
        border: 3px solid var(--wc-border);
        border-top: 3px solid var(--wc-primary, #6d4c41);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .error-msg {
        padding: 12px 20px;
        color: #c62828;
        font-size: 0.85em;
        background: rgba(198, 40, 40, 0.08);
        border-radius: 8px;
        margin: 0 20px 12px;
      }

      .enrichment-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 20px;
        font-size: 0.8em;
        color: var(--wc-text-secondary);
      }

      .progress-track {
        flex: 1;
        height: 4px;
        background: var(--wc-border);
        border-radius: 2px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        border-radius: 2px;
        transition: width 0.3s;
      }

      .progress-fill.vivino { background: #8e24aa; }
      .progress-fill.ai { background: #1565c0; }

      .wine-list-results {
        max-height: 55vh;
        overflow-y: auto;
        padding: 0 16px 16px;
      }

      .wine-list-item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 5px 10px;
        border: 1px solid var(--wc-border);
        border-radius: 8px;
        margin-bottom: 3px;
        transition: background 0.2s;
        cursor: pointer;
      }

      .wine-list-item:hover {
        background: rgba(255, 255, 255, 0.04);
      }

      .wine-list-item.expanded {
        background: rgba(255, 255, 255, 0.06);
      }

      .wl-type-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-top: 5px;
      }

      .wl-thumb {
        width: 22px;
        height: 32px;
        border-radius: 3px;
        object-fit: cover;
        flex-shrink: 0;
      }

      .wl-info {
        flex: 1;
        min-width: 0;
      }

      .wl-name {
        font-weight: 600;
        font-size: 0.82em;
        color: var(--wc-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .wl-cellar-badge {
        font-size: 0.65em;
        font-weight: 700;
        padding: 1px 4px;
        border-radius: 4px;
        background: rgba(46, 125, 50, 0.2);
        border: 1px solid rgba(46, 125, 50, 0.4);
        color: #4caf50;
        margin-left: 4px;
        vertical-align: middle;
      }

      .wl-meta {
        font-size: 0.72em;
        color: var(--wc-text-secondary);
        margin-top: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .wl-vivino-rating {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        font-size: 0.78em;
        font-weight: 600;
        color: #f5a623;
      }

      .wl-user-score {
        font-size: 0.78em;
        font-weight: 600;
        color: #4caf50;
      }

      .wl-price-row {
        display: flex;
        gap: 4px;
        align-items: center;
        margin-top: 1px;
        font-size: 0.78em;
        flex-wrap: wrap;
      }

      .wl-list-price {
        font-weight: 600;
        color: var(--wc-text);
      }

      .wl-market-price {
        color: var(--wc-text-secondary);
        text-decoration: line-through;
      }

      .wl-markup-badge {
        font-size: 0.68em;
        font-weight: 600;
        padding: 1px 5px;
        border-radius: 6px;
        color: #fff;
      }

      .wl-value-badge {
        font-size: 0.66em;
        font-weight: 500;
        padding: 1px 5px;
        border-radius: 6px;
        color: #fff;
      }

      .wl-ai-chip {
        font-size: 0.65em;
        padding: 1px 4px;
        border-radius: 8px;
        background: rgba(245, 166, 35, 0.12);
        border: 1px solid rgba(245, 166, 35, 0.3);
        color: #f5a623;
        font-weight: 600;
      }

      .wl-expanded-detail {
        margin-top: 4px;
        padding-top: 4px;
        border-top: 1px solid var(--wc-border);
        font-size: 0.75em;
        color: var(--wc-text-secondary);
        line-height: 1.3;
      }

      .wl-detail-row {
        margin-bottom: 2px;
      }

      .wl-detail-label {
        font-weight: 600;
        color: var(--wc-text);
        margin-right: 4px;
      }

      .wl-loading-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 2px solid var(--wc-border);
        border-top: 2px solid var(--wc-primary, #6d4c41);
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }

      .wl-actions {
        flex-shrink: 0;
      }

      .wl-add-btn {
        background: #2e7d32;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 0.7em;
        padding: 3px 6px;
        cursor: pointer;
        white-space: nowrap;
      }

      .wl-add-btn:hover { background: #1b5e20; }

      .wl-add-btn.added {
        background: #546e7a;
        cursor: default;
      }

      .wl-buy-btn {
        background: #e65100;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 0.7em;
        padding: 3px 6px;
        cursor: pointer;
        white-space: nowrap;
        margin-top: 2px;
      }

      .wl-buy-btn:hover { background: #bf360c; }

      .wl-buy-btn.added {
        background: #546e7a;
        cursor: default;
      }

      .footer-actions {
        display: flex;
        gap: 8px;
        padding: 12px 16px 16px;
        border-top: 1px solid var(--wc-border);
        justify-content: center;
        flex-wrap: wrap;
      }

      .footer-actions .btn {
        font-size: 0.8em;
        padding: 6px 12px;
      }

      @media (max-width: 599px) {
        .wine-list-results {
          max-height: 65vh;
        }
      }
    `],e([he({type:Boolean})],De.prototype,"open",void 0),e([he({attribute:!1})],De.prototype,"hass",void 0),e([he({attribute:!1})],De.prototype,"cellarWines",void 0),e([ge()],De.prototype,"_phase",void 0),e([ge()],De.prototype,"_wines",void 0),e([ge()],De.prototype,"_restaurantName",void 0),e([ge()],De.prototype,"_currency",void 0),e([ge()],De.prototype,"_error",void 0),e([ge()],De.prototype,"_enriching",void 0),e([ge()],De.prototype,"_expandedIndex",void 0),e([ge()],De.prototype,"_addedIndices",void 0),e([ge()],De.prototype,"_cancelEnrichment",void 0),e([ge()],De.prototype,"_buyListIndices",void 0),e([ge()],De.prototype,"_detailWine",void 0),e([ge()],De.prototype,"_showDetail",void 0),e([he({type:Boolean})],De.prototype,"hasGemini",void 0),De=e([de("wine-list-dialog")],De);let Re=class extends re{constructor(){super(...arguments),this.open=!1,this.wines=[],this.cabinets=[],this.hasGemini=!1,this._searchQuery="",this._typeFilter="all",this._sortField="name",this._sortDir="asc",this._detailWine=null,this._showDetail=!1,this._backingUp=!1,this._importing=!1,this._restoring=!1,this._confirmRestore=!1,this._restoreData=null,this._statusMsg="",this._serverBackingUp=!1,this._serverBackupLabel="",this._showServerRestore=!1,this._serverBackups=[],this._serverRestoring=!1,this._viewMode="inventory",this._historyItems=[],this._historyLoading=!1}updated(e){e.has("open")&&this.open&&(this._searchQuery="",this._typeFilter="all",this._sortField="name",this._sortDir="asc",this._showDetail=!1,this._detailWine=null,this._statusMsg="",this._confirmRestore=!1,this._showServerRestore=!1,this._restoreData=null,this._viewMode="inventory",this._historyItems=[])}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("close"))}_getFilteredAndSortedWines(){let e=[...this.wines];if("all"!==this._typeFilter&&(e=e.filter(e=>e.type===this._typeFilter)),this._searchQuery){const t=this._searchQuery.toLowerCase(),i={drink:"D","drink now":"D",hold:"H",past:"P","past peak":"P","past-peak":"P"}[t];e=e.filter(e=>e.name.toLowerCase().includes(t)||e.winery.toLowerCase().includes(t)||(e.region||"").toLowerCase().includes(t)||(e.country||"").toLowerCase().includes(t)||(e.grape_variety||"").toLowerCase().includes(t)||(e.type||"").toLowerCase().includes(t)||(e.notes||"").toLowerCase().includes(t)||(e.description||"").toLowerCase().includes(t)||String(e.vintage||"").includes(t)||(e.barcode||"").includes(t)||i&&e.disposition===i||(e.drink_window||"").toLowerCase().includes(t))}const t="asc"===this._sortDir?1:-1;return e.sort((e,i)=>{switch(this._sortField){case"name":return t*e.name.localeCompare(i.name);case"winery":return t*(e.winery||"").localeCompare(i.winery||"");case"vintage":return t*((e.vintage||0)-(i.vintage||0));case"type":return t*(e.type||"").localeCompare(i.type||"");case"rating":return t*((e.rating||0)-(i.rating||0));case"price":return t*((e.retail_price||e.price||0)-(i.retail_price||i.price||0));case"added_at":return t*(e.added_at||"").localeCompare(i.added_at||"");case"cabinet":{const s=this.cabinets.find(t=>t.id===e.cabinet_id)?.name||"",a=this.cabinets.find(e=>e.id===i.cabinet_id)?.name||"";return t*s.localeCompare(a)}default:return 0}}),e}_computeStats(e){const t=e.length;let i=0;const s={};for(const t of e){t.retail_price?i+=t.retail_price:t.price&&(i+=t.price);const e=t.type||"unknown";s[e]=(s[e]||0)+1}return{count:t,totalValue:i,byType:s}}async _switchToHistory(){this._viewMode="history",this._historyLoading=!0;try{const e=await this.hass.callWS({type:"wine_cellar/get_wine_history"});this._historyItems=(e?.history||[]).sort((e,t)=>(t.removed_at||"").localeCompare(e.removed_at||""))}catch(e){console.error("Failed to load wine history",e),this._historyItems=[]}this._historyLoading=!1}async _clearHistory(){try{await this.hass.callWS({type:"wine_cellar/clear_wine_history"}),this._historyItems=[],this._statusMsg="History cleared"}catch(e){console.error("Failed to clear history",e)}}_formatReason(e){return{drank:"Drank",gifted:"Gifted",sold:"Sold",broken:"Broken",spoiled:"Spoiled",other:"Other"}[e]||e}_formatDate(e){if(!e)return"";try{return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}_renderHistory(){return this._historyLoading?j`<div class="inv-empty">Loading history...</div>`:0===this._historyItems.length?j`
        <div class="inv-empty">No removal history yet</div>
        <div class="inv-footer">
          <span class="inv-count">0 wines removed</span>
        </div>
      `:j`
      <div class="inv-list">
        ${this._historyItems.map(e=>j`
          <div class="inv-history-item">
            ${e.image_url?j`<img class="inv-thumb" src="${e.image_url}" alt="" loading="lazy" />`:j`<div class="inv-dot" style="background:${me[e.type]||"#999"}"></div>`}
            <div class="inv-info">
              <div class="inv-name">${e.name}</div>
              <div class="inv-meta">
                ${e.winery}${e.vintage?` · ${e.vintage}`:""}
                · <span class="inv-reason-badge">${this._formatReason(e.reason)}</span>
              </div>
            </div>
            <div class="inv-right">
              ${e.price?j`<div class="inv-price">$${e.price.toFixed(0)}</div>`:H}
              <div class="inv-location">${this._formatDate(e.removed_at)}</div>
            </div>
          </div>
        `)}
      </div>
      <div class="inv-footer">
        <span class="inv-count">${this._historyItems.length} wines removed</span>
        ${this._statusMsg?j`<div class="inv-status">${this._statusMsg}</div>`:H}
        <div class="inv-footer-btns">
          <button class="inv-btn" @click=${this._clearHistory}>Clear History</button>
        </div>
      </div>
    `}_exportCSV(){const e=this._getFilteredAndSortedWines(),t=e=>{if(null==e)return"";const t=String(e);return t.includes(",")||t.includes('"')||t.includes("\n")?`"${t.replace(/"/g,'""')}"`:t},i=e.map(e=>[e.name,e.winery,e.vintage,e.type,e.region,e.country,e.grape_variety,e.rating,e.ratings_count,e.price,e.retail_price,e.purchase_date,e.drink_by,e.drink_window,e.disposition,e.notes,e.description,e.food_pairings,e.alcohol,this.cabinets.find(t=>t.id===e.cabinet_id)?.name||"",null!==e.row?e.row+1:"",null!==e.col?e.col+1:"",e.zone,e.depth,e.user_rating,e.added_at].map(t).join(",")),s=[["Name","Winery","Vintage","Type","Region","Country","Grape Variety","Rating","Ratings Count","Purchase Price","Retail Price","Purchase Date","Drink By","Drink Window","Disposition","Notes","Description","Food Pairings","Alcohol","Cabinet","Row","Col","Zone","Depth","User Rating","Added At"].join(","),...i].join("\n");this._downloadFile(s,`wine-cellar-inventory-${(new Date).toISOString().slice(0,10)}.csv`,"text/csv;charset=utf-8;")}async _backupJSON(){this._backingUp=!0,this._statusMsg="";try{const e=await this.hass.callWS({type:"wine_cellar/get_backup"}),t=JSON.stringify(e,null,2);this._downloadFile(t,`wine-cellar-backup-${(new Date).toISOString().slice(0,10)}.json`,"application/json"),this._statusMsg=`Backup saved — ${e.wines?.length||0} wines, ${e.cabinets?.length||0} racks, ${e.buy_list?.length||0} buy list`}catch(e){this._statusMsg=`Backup failed: ${e.message||e}`}this._backingUp=!1}_triggerImportCSV(){const e=this.shadowRoot?.querySelector("#inv-csv-input");e&&(e.value="",e.click())}async _handleImportCSV(e){const t=e.target.files?.[0];if(t){this._importing=!0,this._statusMsg="";try{const e=await t.text(),i=this._parseCSV(e);if(0===i.length)return this._statusMsg="No wines found in CSV file.",void(this._importing=!1);const s=await this.hass.callWS({type:"wine_cellar/import_wines",wines:i});this._statusMsg=`Imported ${s.imported} wines successfully!`,this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0}))}catch(e){this._statusMsg=`Import failed: ${e.message||e}`}this._importing=!1}}_parseCSV(e){const t=e.split("\n").filter(e=>e.trim());if(t.length<2)return[];const i=this._parseCSVRow(t[0]).map(e=>e.trim().toLowerCase()),s={name:"name",winery:"winery",vintage:"vintage",type:"type",region:"region",country:"country","grape variety":"grape_variety",grape_variety:"grape_variety",rating:"rating","ratings count":"ratings_count",ratings_count:"ratings_count","purchase price":"price",price:"price","retail price":"retail_price",retail_price:"retail_price","purchase date":"purchase_date",purchase_date:"purchase_date","drink by":"drink_by",drink_by:"drink_by","drink window":"drink_window",drink_window:"drink_window",disposition:"disposition",notes:"notes",description:"description","food pairings":"food_pairings",food_pairings:"food_pairings",alcohol:"alcohol",zone:"zone","user rating":"user_rating",user_rating:"user_rating",barcode:"barcode"},a=new Set(["vintage","rating","ratings_count","price","retail_price","user_rating"]),n=[];for(let e=1;e<t.length;e++){const o=this._parseCSVRow(t[e]);if(0===o.length)continue;const r={};for(let e=0;e<i.length&&e<o.length;e++){const t=s[i[e]];if(!t)continue;let n=o[e].trim();if(n){if(a.has(t)){const e=parseFloat(n);if(isNaN(e))continue;n=e}r[t]=n}}if(r.type){const e=["red","white","rosé","sparkling","dessert"],t=r.type.toLowerCase();e.includes(t)?r.type=t:r.type="red"}r.name&&n.push(r)}return n}_parseCSVRow(e){const t=[];let i="",s=!1;for(let a=0;a<e.length;a++){const n=e[a];s?'"'===n?a+1<e.length&&'"'===e[a+1]?(i+='"',a++):s=!1:i+=n:'"'===n?s=!0:","===n?(t.push(i),i=""):i+=n}return t.push(i),t}_triggerRestore(){const e=this.shadowRoot?.querySelector("#inv-json-input");e&&(e.value="",e.click())}async _handleRestoreFile(e){const t=e.target.files?.[0];if(t)try{const e=await t.text(),i=JSON.parse(e);if(!i.wines||!Array.isArray(i.wines))return void(this._statusMsg="Invalid backup file: missing wines array.");if(!i.cabinets||!Array.isArray(i.cabinets))return void(this._statusMsg="Invalid backup file: missing cabinets array.");this._restoreData=i,this._confirmRestore=!0}catch(e){this._statusMsg=`Invalid JSON file: ${e.message||e}`}}async _executeRestore(){if(this._restoreData){this._confirmRestore=!1,this._restoring=!0,this._statusMsg="";try{const e=await this.hass.callWS({type:"wine_cellar/restore_backup",backup:this._restoreData});e.error?this._statusMsg=`Restore failed: ${e.error}`:(this._statusMsg=`Restored ${e.wines} wines, ${e.cabinets} racks, ${e.buy_list} buy list items!`,this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0})))}catch(e){this._statusMsg=`Restore failed: ${e.message||e}`}this._restoring=!1,this._restoreData=null}}async _serverBackupSave(){this._serverBackingUp=!0,this._serverBackupLabel="Saving…",this._statusMsg="";try{const e=await this.hass.callWS({type:"wine_cellar/server_backup_save"});e&&e.error?(this._statusMsg=`Server backup failed: ${e.error}`,this._serverBackupLabel=""):(this._statusMsg=`Saved ${e?.wines??"?"} wines, ${e?.cabinets??"?"} racks to server`,this._serverBackupLabel="✅ Saved!",setTimeout(()=>{this._serverBackupLabel=""},4e3))}catch(e){this._statusMsg=`Server backup failed: ${e.message||e}`,this._serverBackupLabel=""}this._serverBackingUp=!1}async _serverBackupShowRestore(){this._showServerRestore=!0,this._statusMsg="";try{const e=await this.hass.callWS({type:"wine_cellar/server_backup_list"});this._serverBackups=e?.backups||[]}catch(e){this._statusMsg=`Failed to list backups: ${e.message||e}`,this._serverBackups=[]}}async _serverBackupRestore(e){this._showServerRestore=!1,this._serverRestoring=!0,this._statusMsg="";try{const t=await this.hass.callWS({type:"wine_cellar/server_backup_restore",filename:e});t.error?this._statusMsg=`Restore failed: ${t.error}`:(this._statusMsg=`Restored ${t.wines} wines, ${t.cabinets} racks from ${e}`,this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0})))}catch(e){this._statusMsg=`Restore failed: ${e.message||e}`}this._serverRestoring=!1}_downloadFile(e,t,i){const s=new Blob([e],{type:i}),a=URL.createObjectURL(s),n=document.createElement("a");n.href=a,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)}_showWineDetail(e){this._detailWine=e,this._showDetail=!0}_renderWineItem(e){const t=me[e.type]||me.red,i=this.cabinets.find(t=>t.id===e.cabinet_id)?.name||"";let s="Unassigned";i&&(s=null!==e.row&&null!==e.col?`${i} R${e.row+1}C${e.col+1}`:e.zone?`${i}`:i);const a=e.retail_price||e.price;return j`
      <div class="inv-item" @click=${()=>this._showWineDetail(e)}>
        ${e.image_url?j`<img class="inv-thumb" src="${e.image_url}" alt="" loading="lazy" />`:j`<div class="inv-dot" style="background: ${t}"></div>`}
        <div class="inv-info">
          <div class="inv-name">${e.name}</div>
          <div class="inv-meta">
            ${e.winery}${e.vintage?` · ${e.vintage}`:""}${e.rating?` · ★${e.rating.toFixed(1)}`:""}${e.disposition?j` ·
                  <span
                    style="color: ${"D"===e.disposition?"#2e7d32":"H"===e.disposition?"#1565c0":"P"===e.disposition?"#c62828":"inherit"}"
                    >${"D"===e.disposition?"Drink":"H"===e.disposition?"Hold":"P"===e.disposition?"Past Peak":""}</span
                  >`:H}
          </div>
        </div>
        <div class="inv-right">
          ${a?j`<div class="inv-price">$${a.toFixed(0)}</div>`:H}
          <div class="inv-location">${s}</div>
        </div>
      </div>
    `}render(){if(!this.open)return H;const e=this._getFilteredAndSortedWines(),t=this._computeStats(this.wines),i=this._importing||this._restoring||this._backingUp||this._serverBackingUp||this._serverRestoring;return j`
      <div class="dialog-overlay" @click=${this._close}>
        <div class="dialog" style="max-width:800px;position:relative" @click=${e=>e.stopPropagation()}>
          <!-- Header -->
          <div class="inv-header">
            <span class="inv-header-title">📦 Inventory</span>
            <button class="inv-close" @click=${this._close}>✕</button>
          </div>

          <!-- Inventory / History Toggle -->
          <div class="inv-toggle">
            <button
              class="${"inventory"===this._viewMode?"active":""}"
              @click=${()=>{this._viewMode="inventory"}}
            >Inventory</button>
            <button
              class="${"history"===this._viewMode?"active":""}"
              @click=${()=>this._switchToHistory()}
            >History</button>
          </div>

          ${"history"===this._viewMode?this._renderHistory():j`
          <!-- Summary Stats -->
          <div class="inv-stats">
            <div class="stat">
              <span class="stat-value">${t.count}</span> bottles
            </div>
            ${t.totalValue?j`
                  <div class="stat">
                    <span class="stat-value"
                      >$${t.totalValue.toLocaleString(void 0,{maximumFractionDigits:0})}</span
                    >
                    est. value
                  </div>
                `:H}
            ${Object.entries(t.byType).map(([e,t])=>j`
                <div class="stat">
                  <span
                    class="inv-type-dot-sm"
                    style="background:${me[e]||"#999"}"
                  ></span>
                  <span class="stat-value">${t}</span>
                  ${we[e]||e}
                </div>
              `)}
          </div>

          <!-- Search + Sort -->
          <div class="inv-controls">
            <div class="inv-search-wrapper">
              <span class="inv-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search wines..."
                .value=${this._searchQuery}
                @input=${e=>{this._searchQuery=e.target.value}}
              />
            </div>
            <div class="inv-sort">
              <select
                @change=${e=>{this._sortField=e.target.value}}
              >
                ${[{value:"name",label:"Name"},{value:"winery",label:"Winery"},{value:"vintage",label:"Vintage"},{value:"type",label:"Type"},{value:"rating",label:"Rating"},{value:"price",label:"Price"},{value:"added_at",label:"Date Added"},{value:"cabinet",label:"Cabinet"}].map(e=>j`<option value=${e.value} ?selected=${this._sortField===e.value}>
                      ${e.label}
                    </option>`)}
              </select>
              <button
                class="inv-sort-dir"
                @click=${()=>{this._sortDir="asc"===this._sortDir?"desc":"asc"}}
                title="${"asc"===this._sortDir?"Ascending":"Descending"}"
              >
                ${"asc"===this._sortDir?"↑":"↓"}
              </button>
            </div>
          </div>

          <!-- Type Filter Chips -->
          <div class="inv-chips">
            ${[{id:"all",label:"All"},{id:"red",label:"Red"},{id:"white",label:"White"},{id:"rosé",label:"Rosé"},{id:"sparkling",label:"Sparkling"},{id:"dessert",label:"Dessert"}].map(e=>j`
                <button
                  class="inv-chip ${this._typeFilter===e.id?"active":""}"
                  @click=${()=>{this._typeFilter=e.id}}
                >
                  ${e.label}
                </button>
              `)}
          </div>

          <!-- Wine List -->
          <div class="inv-list">
            ${0===e.length?j`<div class="inv-empty">No wines match your search</div>`:e.map(e=>this._renderWineItem(e))}
          </div>

          <!-- Footer -->
          <div class="inv-footer">
            <span class="inv-count">
              ${e.length===this.wines.length?`${e.length} wines`:`${e.length} of ${this.wines.length} wines`}
            </span>
            ${this._statusMsg?j`<div class="inv-status">${this._statusMsg}</div>`:H}
            <div class="inv-footer-btns">
              <button
                class="inv-btn"
                @click=${this._serverBackupSave}
                ?disabled=${i}
                title="Save timestamped backup to HA server"
              >
                ${this._serverBackupLabel||"Server Backup"}
              </button>
              <button
                class="inv-btn"
                @click=${this._serverBackupShowRestore}
                ?disabled=${i}
                title="Restore from a server backup"
              >
                ${this._serverRestoring?"Restoring…":"Server Restore"}
              </button>
              <button
                class="inv-btn"
                @click=${this._backupJSON}
                ?disabled=${i}
                title="Download full cellar backup as JSON"
              >
                ${this._backingUp?"Saving…":"Download"}
              </button>
              <button
                class="inv-btn"
                @click=${this._triggerRestore}
                ?disabled=${i}
                title="Restore cellar from a JSON backup file"
              >
                ${this._restoring?"Restoring…":"Upload"}
              </button>
              <button
                class="inv-btn"
                @click=${this._triggerImportCSV}
                ?disabled=${i}
                title="Import wines from a CSV file"
              >
                ${this._importing?"Importing…":"Import CSV"}
              </button>
              <button
                class="inv-btn"
                @click=${this._exportCSV}
                ?disabled=${i}
                title="Export wines as CSV"
              >
                Export CSV
              </button>
            </div>
          </div>

          `}

          <!-- Hidden file inputs -->
          <input
            type="file"
            id="inv-csv-input"
            accept=".csv"
            style="display:none"
            @change=${this._handleImportCSV}
          />
          <input
            type="file"
            id="inv-json-input"
            accept=".json"
            style="display:none"
            @change=${this._handleRestoreFile}
          />

          <!-- Server Restore Picker Overlay -->
          ${this._showServerRestore?j`
                <div class="inv-confirm-overlay" @click=${()=>this._showServerRestore=!1}>
                  <div class="inv-confirm-box" style="max-width:420px" @click=${e=>e.stopPropagation()}>
                    <h3>Restore from Server</h3>
                    ${0===this._serverBackups.length?j`<p>No server backups found. Use "Server Backup" to create one.</p>`:j`
                        <p>Select a backup to restore. This will <strong>replace</strong> all current data.</p>
                        <div style="max-height:250px;overflow-y:auto;margin:8px 0;">
                          ${this._serverBackups.map(e=>j`
                              <button
                                class="inv-btn"
                                style="width:100%;margin-bottom:4px;text-align:left;font-size:0.82em;padding:8px 12px;"
                                @click=${()=>this._serverBackupRestore(e.filename)}
                              >
                                <div>${e.timestamp?new Date(e.timestamp).toLocaleString():e.filename}</div>
                                <div style="font-size:0.85em;color:var(--wc-text-secondary);">${e.wines} wines, ${e.cabinets} racks</div>
                              </button>
                            `)}
                        </div>
                      `}
                    <div class="inv-confirm-btns">
                      <button class="inv-confirm-cancel" @click=${()=>this._showServerRestore=!1}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              `:H}

          <!-- Restore Confirmation Overlay -->
          ${this._confirmRestore&&this._restoreData?j`
                <div class="inv-confirm-overlay" @click=${()=>this._confirmRestore=!1}>
                  <div class="inv-confirm-box" @click=${e=>e.stopPropagation()}>
                    <h3>🔄 Restore Backup?</h3>
                    <p>
                      This will <strong>replace</strong> all your current cellar data with the backup.
                      This action cannot be undone.
                    </p>
                    <div class="inv-confirm-stats">
                      Backup contains:<br />
                      <strong>${this._restoreData.wines?.length||0}</strong> wines ·
                      <strong>${this._restoreData.cabinets?.length||0}</strong> racks ·
                      <strong>${this._restoreData.buy_list?.length||0}</strong> buy list items
                      ${this._restoreData.timestamp?j`<br /><small>Created: ${new Date(this._restoreData.timestamp).toLocaleString()}</small>`:H}
                    </div>
                    <div class="inv-confirm-btns">
                      <button class="inv-confirm-cancel" @click=${()=>this._confirmRestore=!1}>
                        Cancel
                      </button>
                      <button class="inv-confirm-go" @click=${this._executeRestore}>
                        Restore Now
                      </button>
                    </div>
                  </div>
                </div>
              `:H}
        </div>
      </div>

      <!-- Sub-dialog: Wine Detail -->
      <wine-detail-dialog
        .wine=${this._detailWine}
        .hass=${this.hass}
        .open=${this._showDetail}
        .hasGemini=${this.hasGemini}
        .mode=${"cellar"}
        @close=${()=>this._showDetail=!1}
        @wine-updated=${()=>{this.dispatchEvent(new CustomEvent("wine-updated",{bubbles:!0,composed:!0}))}}
      ></wine-detail-dialog>
    `}};Re.styles=[ue,o`
      .inv-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px 8px;
      }

      .inv-header-title {
        font-size: 1.1em;
        font-weight: 600;
        color: var(--wc-text);
      }

      .inv-close {
        background: none;
        border: none;
        font-size: 1.3em;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 8px;
        color: var(--wc-text-secondary);
      }

      .inv-close:hover {
        background: var(--wc-hover);
      }

      .inv-stats {
        display: flex;
        gap: 16px;
        padding: 4px 20px 10px;
        flex-wrap: wrap;
        font-size: 0.82em;
        color: var(--wc-text-secondary);
      }

      .inv-stats .stat {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .inv-stats .stat-value {
        font-weight: 600;
        color: var(--wc-text);
      }

      .inv-type-dot-sm {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 2px;
      }

      .inv-controls {
        display: flex;
        gap: 8px;
        padding: 0 16px 8px;
        align-items: center;
        flex-wrap: wrap;
      }

      .inv-search-wrapper {
        flex: 1;
        min-width: 140px;
        position: relative;
      }

      .inv-search-wrapper input {
        width: 100%;
        padding: 8px 12px 8px 30px;
        border: 1px solid var(--wc-border);
        border-radius: 20px;
        font-size: 0.88em;
        background: var(--wc-bg);
        color: var(--wc-text);
        box-sizing: border-box;
      }

      .inv-search-wrapper input:focus {
        outline: none;
        border-color: var(--wc-primary);
      }

      .inv-search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0.85em;
        pointer-events: none;
      }

      .inv-sort {
        display: flex;
        gap: 4px;
        align-items: center;
      }

      .inv-sort select {
        padding: 6px 10px;
        border: 1px solid var(--wc-border);
        border-radius: 14px;
        background: var(--wc-bg);
        color: var(--wc-text);
        font-size: 0.8em;
        cursor: pointer;
      }

      .inv-sort-dir {
        background: none;
        border: 1px solid var(--wc-border);
        border-radius: 14px;
        padding: 5px 9px;
        cursor: pointer;
        font-size: 0.8em;
        color: var(--wc-text-secondary);
        line-height: 1;
      }

      .inv-sort-dir:hover {
        background: var(--wc-hover);
      }

      .inv-chips {
        display: flex;
        gap: 4px;
        padding: 0 16px 10px;
        flex-wrap: wrap;
      }

      .inv-chip {
        padding: 4px 10px;
        border-radius: 14px;
        border: 1px solid var(--wc-border);
        background: transparent;
        color: var(--wc-text-secondary);
        cursor: pointer;
        font-size: 0.75em;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .inv-chip:hover {
        background: rgba(114, 47, 55, 0.08);
      }

      .inv-chip.active {
        background: var(--wc-primary);
        color: #fff;
        border-color: var(--wc-primary);
      }

      .inv-list {
        max-height: 55vh;
        overflow-y: auto;
        padding: 0 16px 8px;
      }

      .inv-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--wc-border);
        cursor: pointer;
        transition: background 0.15s;
      }

      .inv-item:hover {
        background: var(--wc-hover);
      }

      .inv-item:last-child {
        border-bottom: none;
      }

      .inv-thumb {
        width: 32px;
        height: 44px;
        border-radius: 4px;
        object-fit: cover;
        flex-shrink: 0;
      }

      .inv-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .inv-info {
        flex: 1;
        min-width: 0;
      }

      .inv-name {
        font-weight: 600;
        font-size: 0.88em;
        color: var(--wc-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .inv-meta {
        font-size: 0.78em;
        color: var(--wc-text-secondary);
        margin-top: 1px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .inv-right {
        text-align: right;
        flex-shrink: 0;
        min-width: 60px;
      }

      .inv-price {
        font-weight: 600;
        font-size: 0.85em;
        color: var(--wc-text);
      }

      .inv-location {
        font-size: 0.72em;
        color: var(--wc-text-secondary);
      }

      .inv-empty {
        text-align: center;
        padding: 40px 20px;
        color: var(--wc-text-secondary);
        font-size: 0.9em;
      }

      .inv-footer {
        display: flex;
        gap: 8px;
        padding: 10px 16px 16px;
        border-top: 1px solid var(--wc-border);
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .inv-count {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
      }

      .inv-footer-btns {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      .inv-btn {
        font-size: 0.76em;
        padding: 5px 12px;
        border-radius: 16px;
        border: 1px solid var(--wc-border);
        background: transparent;
        color: var(--wc-text-secondary);
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.15s;
      }

      .inv-btn:hover {
        background: var(--wc-hover);
        border-color: var(--wc-text-secondary);
      }

      .inv-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .inv-status {
        width: 100%;
        text-align: center;
        font-size: 0.78em;
        padding: 4px 0 0;
        color: #2e7d32;
        font-weight: 500;
      }

      /* Restore confirm overlay */
      .inv-confirm-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        border-radius: 16px;
      }

      .inv-confirm-box {
        background: var(--wc-bg);
        border-radius: 12px;
        padding: 24px;
        max-width: 380px;
        width: 90%;
        text-align: center;
      }

      .inv-confirm-box h3 {
        margin: 0 0 8px;
        font-size: 1em;
        color: var(--wc-text);
      }

      .inv-confirm-box p {
        margin: 0 0 16px;
        font-size: 0.85em;
        color: var(--wc-text-secondary);
        line-height: 1.4;
      }

      .inv-confirm-stats {
        font-size: 0.82em;
        color: var(--wc-text);
        margin: 0 0 16px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 8px;
      }

      .inv-confirm-btns {
        display: flex;
        gap: 8px;
        justify-content: center;
      }

      .inv-confirm-btns button {
        padding: 8px 20px;
        border-radius: 20px;
        border: none;
        font-size: 0.85em;
        cursor: pointer;
        font-weight: 500;
      }

      .inv-confirm-cancel {
        background: var(--wc-hover);
        color: var(--wc-text);
      }

      .inv-confirm-go {
        background: #e65100;
        color: #fff;
      }

      .inv-toggle {
        display: flex;
        margin: 0 16px 8px;
        border: 1px solid var(--wc-border);
        border-radius: 20px;
        overflow: hidden;
      }

      .inv-toggle button {
        flex: 1;
        padding: 6px 0;
        border: none;
        background: transparent;
        color: var(--wc-text-secondary);
        font-size: 0.82em;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
      }

      .inv-toggle button.active {
        background: var(--wc-primary);
        color: #fff;
      }

      .inv-history-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--wc-border);
      }

      .inv-history-item:last-child {
        border-bottom: none;
      }

      .inv-reason-badge {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 0.72em;
        font-weight: 500;
        background: rgba(114, 47, 55, 0.12);
        color: var(--wc-primary);
      }

      @media (max-width: 599px) {
        .inv-controls {
          flex-direction: column;
          gap: 6px;
        }
        .inv-search-wrapper {
          width: 100%;
        }
        .inv-stats {
          gap: 8px;
          font-size: 0.78em;
          padding: 4px 16px 8px;
        }
        .inv-list {
          max-height: 60vh;
        }
        .inv-footer {
          justify-content: center;
        }
        .inv-footer-btns {
          justify-content: center;
        }
      }
    `],e([he({type:Boolean})],Re.prototype,"open",void 0),e([he({attribute:!1})],Re.prototype,"hass",void 0),e([he({attribute:!1})],Re.prototype,"wines",void 0),e([he({attribute:!1})],Re.prototype,"cabinets",void 0),e([he({type:Boolean})],Re.prototype,"hasGemini",void 0),e([ge()],Re.prototype,"_searchQuery",void 0),e([ge()],Re.prototype,"_typeFilter",void 0),e([ge()],Re.prototype,"_sortField",void 0),e([ge()],Re.prototype,"_sortDir",void 0),e([ge()],Re.prototype,"_detailWine",void 0),e([ge()],Re.prototype,"_showDetail",void 0),e([ge()],Re.prototype,"_backingUp",void 0),e([ge()],Re.prototype,"_importing",void 0),e([ge()],Re.prototype,"_restoring",void 0),e([ge()],Re.prototype,"_confirmRestore",void 0),e([ge()],Re.prototype,"_restoreData",void 0),e([ge()],Re.prototype,"_statusMsg",void 0),e([ge()],Re.prototype,"_serverBackingUp",void 0),e([ge()],Re.prototype,"_serverBackupLabel",void 0),e([ge()],Re.prototype,"_showServerRestore",void 0),e([ge()],Re.prototype,"_serverBackups",void 0),e([ge()],Re.prototype,"_serverRestoring",void 0),e([ge()],Re.prototype,"_viewMode",void 0),e([ge()],Re.prototype,"_historyItems",void 0),e([ge()],Re.prototype,"_historyLoading",void 0),Re=e([de("inventory-dialog")],Re);let Pe=class extends re{constructor(){super(...arguments),this._wines=[],this._cabinets=[],this._stats=null,this._activeTab="all",this._searchQuery="",this._searchFilter="all",this._selectedWine=null,this._showDetail=!1,this._detailMode="cellar",this._showAddDialog=!1,this._addPreselect={cabinet:"",row:null,col:null,zone:"",depth:0},this._loading=!0,this._showRackSettings=!1,this._copiedWine=null,this._movingWine=null,this._analyzing=!1,this._batchVivino=!1,this._toast="",this._hasGemini=!1,this._showWineList=!1,this._showInventory=!1,this._buyList=[],this._addToBuyListMode=!1,this._movingBuyListItem=null,this._depthPanelOpen=!1,this._depthPanelCabinet=null,this._depthPanelRow=null,this._depthPanelCol=null,this._depthPanelWines=[],this._depthPanelMaxDepth=1,this._zonePanelOpen=!1,this._zonePanelCabinet=null,this._zonePanelZone="",this._zonePanelType="bulk",this._zonePanelCapacity=20,this._zonePanelName="",this._zonePanelWines=[],this._zonePanelStorageRow=null}setConfig(e){this._config=e}static getConfigElement(){return document.createElement("wine-cellar-card-editor")}static getStubConfig(){return{type:"custom:wine-cellar-card"}}connectedCallback(){super.connectedCallback(),this._loadData()}updated(e){e.has("hass")&&this.hass}async _loadData(){if(!this.hass)return void setTimeout(()=>this._loadData(),500);0===this._wines.length&&0===this._cabinets.length&&(this._loading=!0);try{const[e,t,i,s,a]=await Promise.all([this.hass.callWS({type:"wine_cellar/get_wines"}),this.hass.callWS({type:"wine_cellar/get_cabinets"}),this.hass.callWS({type:"wine_cellar/get_stats"}),this.hass.callWS({type:"wine_cellar/get_capabilities"}).catch(()=>({has_gemini:!1})),this.hass.callWS({type:"wine_cellar/get_buy_list"}).catch(()=>({buy_list:[]}))]);if(this._wines=e.wines||[],this._cabinets=(t.cabinets||[]).sort((e,t)=>e.order-t.order),this._stats=i,this._hasGemini=s?.has_gemini||!1,this._buyList=a?.buy_list||[],this._selectedWine){const e=this._wines.find(e=>e.id===this._selectedWine.id);e&&(this._selectedWine=e)}this._refreshDepthPanel(),this._refreshZonePanel()}catch(e){console.error("Cork Dork: Failed to load data",e)}this._loading=!1}_getFilteredWines(){let e=[...this._wines];if("all"!==this._activeTab&&(e=e.filter(e=>e.cabinet_id===this._activeTab)),"all"!==this._searchFilter&&(e=e.filter(e=>e.type===this._searchFilter)),this._searchQuery){const t=this._searchQuery.toLowerCase();e=e.filter(e=>e.name.toLowerCase().includes(t)||e.winery.toLowerCase().includes(t)||(e.region||"").toLowerCase().includes(t)||(e.grape_variety||"").toLowerCase().includes(t)||(e.type||"").toLowerCase().includes(t)||(e.country||"").toLowerCase().includes(t))}return e}_showToast(e){this._toast=e,setTimeout(()=>this._toast="",2500)}_onCellClick(e){const{wine:t,wines:i=[],cabinet:s,row:a,col:n,wineCount:o=0,cabinetDepth:r=1}=e.detail,l=o<r,d=o;this._copiedWine&&l?this._pasteWine(s.id,a,n,d):this._movingWine&&l?this._executeMoveWine(s.id,a,n,"",d):this._movingBuyListItem&&l?this._executeMoveTocellar(s.id,a,n,"",d):r>=2?this._openDepthPanel(s,a,n,i,r):t?(this._selectedWine=t,this._detailMode="cellar",this._showDetail=!0):(this._addPreselect={cabinet:s.id,row:a,col:n,zone:"",depth:0},this._showAddDialog=!0)}_openDepthPanel(e,t,i,s,a){this._depthPanelCabinet=e,this._depthPanelRow=t,this._depthPanelCol=i,this._depthPanelWines=[...s].sort((e,t)=>(e.depth||0)-(t.depth||0)),this._depthPanelMaxDepth=a,this._depthPanelOpen=!0}_closeDepthPanel(){this._depthPanelOpen=!1}_refreshDepthPanel(){if(!this._depthPanelOpen||!this._depthPanelCabinet||null===this._depthPanelRow||null===this._depthPanelCol)return;const e=this._wines.filter(e=>e.cabinet_id===this._depthPanelCabinet.id&&e.row===this._depthPanelRow&&e.col===this._depthPanelCol);this._depthPanelWines=[...e].sort((e,t)=>(e.depth||0)-(t.depth||0))}_onDepthSlotClick(e,t){t?(this._selectedWine=t,this._detailMode="cellar",this._showDetail=!0):(this._addPreselect={cabinet:this._depthPanelCabinet.id,row:this._depthPanelRow,col:this._depthPanelCol,zone:"",depth:e},this._showAddDialog=!0)}_getDepthLabel(e){return["Front","2nd","3rd","4th","5th","6th"][e]||`${e+1}th`}_onZoneClick(e){const{wine:t,cabinet:i,zone:s}=e.detail;!this._movingWine||t?!this._movingBuyListItem||t?t?(this._selectedWine=t,this._detailMode="cellar",this._showDetail=!0):(this._addPreselect={cabinet:i.id,row:null,col:null,zone:s||"bottom",depth:0},this._showAddDialog=!0):this._executeMoveTocellar(i.id,null,null,s||"bottom"):this._executeMoveWine(i.id,null,null,s||"bottom")}_onZoneContainerClick(e){const{cabinet:t,zone:i,storageRow:s}=e.detail;this._movingWine?this._executeMoveWine(t.id,null,null,i):this._movingBuyListItem?this._executeMoveTocellar(t.id,null,null,i):this._openZonePanel(t,i,s)}_openZonePanel(e,t,i){this._zonePanelCabinet=e,this._zonePanelZone=t,this._zonePanelType=i.type||"bulk",this._zonePanelCapacity=i.capacity||20,this._zonePanelName=i.name||"Storage",this._zonePanelStorageRow=i,this._zonePanelWines=this._wines.filter(i=>i.cabinet_id===e.id&&i.zone===t).sort((e,t)=>(e.depth||0)-(t.depth||0)),this._zonePanelOpen=!0}_closeZonePanel(){this._zonePanelOpen=!1}_refreshZonePanel(){this._zonePanelOpen&&this._zonePanelCabinet&&(this._zonePanelWines=this._wines.filter(e=>e.cabinet_id===this._zonePanelCabinet.id&&e.zone===this._zonePanelZone).sort((e,t)=>(e.depth||0)-(t.depth||0)))}_onZonePanelSlotClick(e,t){t?(this._selectedWine=t,this._detailMode="cellar",this._showDetail=!0):(this._addPreselect={cabinet:this._zonePanelCabinet.id,row:null,col:null,zone:this._zonePanelZone,depth:e},this._showAddDialog=!0)}_onZonePanelBulkAdd(){const e=this._zonePanelWines.length;this._addPreselect={cabinet:this._zonePanelCabinet.id,row:null,col:null,zone:this._zonePanelZone,depth:e},this._showAddDialog=!0}_getZoneSlotLabel(e,t){return`Slot ${t+1}`}async _executeMoveWine(e,t,i,s,a=0){if(this._movingWine)try{const n={type:"wine_cellar/move_wine",wine_id:this._movingWine.id,cabinet_id:e,zone:s,depth:a};null!==t&&(n.row=t),null!==i&&(n.col=i),await this.hass.callWS({...n}),this._showToast(`Moved "${this._movingWine.name}"`),this._movingWine=null,await this._loadData()}catch(e){console.error("Failed to move wine:",e),this._showToast("Failed to move wine")}}async _onWineDrop(e){const t=e.detail;if(t.sourceCabinetId!==t.targetCabinetId||t.sourceRow!==t.targetRow||t.sourceCol!==t.targetCol||t.sourceZone!==t.targetZone)try{let e;null===t.targetRow||null===t.targetCol||t.targetZone||(e=this._wines.find(e=>e.cabinet_id===t.targetCabinetId&&e.row===t.targetRow&&e.col===t.targetCol)),e&&await this.hass.callWS({type:"wine_cellar/move_wine",wine_id:e.id,cabinet_id:t.sourceCabinetId,row:t.sourceRow,col:t.sourceCol,zone:t.sourceZone||""});const i={type:"wine_cellar/move_wine",wine_id:t.wineId,cabinet_id:t.targetCabinetId,zone:t.targetZone||""};null!==t.targetRow&&(i.row=t.targetRow),null!==t.targetCol&&(i.col=t.targetCol),await this.hass.callWS(i),this._showToast(e?"Swapped wines":"Wine moved"),await this._loadData()}catch(e){console.error("Failed to move wine:",e),this._showToast("Failed to move wine")}}_copyWine(e){this._copiedWine=e,this._showToast(`Copied "${e.name}" — tap empty cells to paste`),this._showDetail=!1}async _pasteWine(e,t,i,s=0){if(this._copiedWine)try{await this.hass.callWS({type:"wine_cellar/add_wine",wine:{barcode:this._copiedWine.barcode,name:this._copiedWine.name,winery:this._copiedWine.winery,region:this._copiedWine.region,country:this._copiedWine.country,vintage:this._copiedWine.vintage,type:this._copiedWine.type,grape_variety:this._copiedWine.grape_variety,rating:this._copiedWine.rating,image_url:this._copiedWine.image_url,price:this._copiedWine.price,drink_by:this._copiedWine.drink_by,notes:this._copiedWine.notes,description:this._copiedWine.description,food_pairings:this._copiedWine.food_pairings,alcohol:this._copiedWine.alcohol,ratings_count:this._copiedWine.ratings_count,cabinet_id:e,row:t,col:i,depth:s,zone:"",user_rating:this._copiedWine.user_rating,disposition:this._copiedWine.disposition}}),this._showToast("Wine pasted! Tap more empty cells or click ✕ to stop."),await this._loadData()}catch{this._showToast("Failed to paste wine.")}}async _batchAnalyzeWines(){this._analyzing=!0,this._showToast("Running full AI analysis on all wines...");try{const e=await this.hass.callWS({type:"wine_cellar/batch_analyze_wines"});if(e.error)this._showToast(`AI Batch failed: ${e.error}`);else{const t=[`AI Batch complete! ${e.updated}/${e.total} updated`];e.errors>0&&t.push(`(${e.errors} errors)`),this._showToast(t.join(" ")),await this._loadData()}}catch(e){this._showToast("AI Batch analysis failed.")}this._analyzing=!1}async _batchRefreshVivino(){this._batchVivino=!0,this._showToast("Refreshing all wines from Vivino...");try{const e=await this.hass.callWS({type:"wine_cellar/batch_refresh_vivino"});if(e.error)this._showToast(`Vivino Batch failed: ${e.error}`);else{const t=[`Vivino Batch complete! ${e.updated}/${e.total} updated`];e.errors>0&&t.push(`(${e.errors} errors)`),this._showToast(t.join(" ")),await this._loadData()}}catch(e){this._showToast("Vivino Batch refresh failed.")}this._batchVivino=!1}_showBuyListDetail(e){this._selectedWine=e,this._detailMode="buylist",this._showDetail=!0}async _removeBuyListItem(e){try{await this.hass.callWS({type:"wine_cellar/remove_from_buy_list",item_id:e}),this._showToast("Removed from buy list"),await this._loadData()}catch(e){console.error("Failed to remove from buy list",e),this._showToast("Failed to remove from buy list")}}_startMoveBuyListItem(e){this._movingBuyListItem=e,this._activeTab="all",this._showToast(`Tap a cell to place "${e.name}"`)}async _executeMoveTocellar(e,t,i,s,a=0){if(this._movingBuyListItem)try{await this.hass.callWS({type:"wine_cellar/move_to_cellar",item_id:this._movingBuyListItem.id,cabinet_id:e,row:t,col:i,zone:s,depth:a}),this._showToast(`Moved "${this._movingBuyListItem.name}" to cellar`),this._movingBuyListItem=null,await this._loadData()}catch(e){console.error("Failed to move to cellar:",e),this._showToast("Failed to move to cellar")}}async _onRemoveWine(e){try{await this.hass.callWS({type:"wine_cellar/remove_wine",wine_id:e.detail.wine_id,reason:e.detail.reason||"other"}),await this._loadData()}catch(e){console.error("Failed to remove wine",e)}}async _onWineAdded(){await this._loadData()}_onSearch(e){this._searchQuery=e.detail.query,this._searchFilter=e.detail.filter}_getCabinetWines(e){return this._wines.filter(t=>t.cabinet_id===e)}_getUnassignedWines(){const e=new Set(this._cabinets.map(e=>e.id));return this._wines.filter(t=>!t.cabinet_id||!e.has(t.cabinet_id))}render(){if(this._loading)return j`
        <ha-card>
          <div class="loading">Loading wine cellar...</div>
        </ha-card>
      `;const e=this._config?.title||"Cork Dork",t=this._getFilteredWines(),i=!(!this._searchQuery&&"all"===this._searchFilter),s=this._getUnassignedWines(),a=!i&&"buy-list"!==this._activeTab&&"unassigned"!==this._activeTab&&("all"===this._activeTab||this._cabinets.some(e=>e.id===this._activeTab)),n="buy-list"===this._activeTab&&!i,o="unassigned"===this._activeTab&&!i;return j`
      <ha-card>
        <div class="header-row">
          <div class="title">
            <span class="title-icon">🍷</span>
            ${e}
          </div>
          <div class="header-actions">
            ${this._hasGemini?j`
              <button
                class="btn btn-primary"
                style="font-size: 0.8em; padding: 5px 10px; background: #1565c0;"
                @click=${this._batchAnalyzeWines}
                title="Full AI analysis on all wines (disposition, ratings, price, description)"
                ?disabled=${this._analyzing||this._batchVivino}
              >
                ${this._analyzing?"AI Scanning...":"🤖 AI Batch Scan"}
              </button>
            `:H}
            <button
              class="btn btn-primary"
              style="font-size: 0.8em; padding: 5px 10px; background: #8e24aa;"
              @click=${this._batchRefreshVivino}
              title="Refresh all wines from Vivino (ratings, price, description)"
              ?disabled=${this._batchVivino||this._analyzing}
            >
              ${this._batchVivino?"Vivino Scanning...":"🍇 Vivino Batch Scan"}
            </button>
            ${this._hasGemini?j`
              <button
                class="btn btn-primary"
                style="font-size: 0.8em; padding: 5px 10px; background: #00695c;"
                @click=${()=>this._showWineList=!0}
                title="Scan a wine list or receipt for ratings and value"
              >
                🍽️ Scan List
              </button>
            `:H}
            <button
              class="btn btn-primary"
              style="font-size: 0.8em; padding: 5px 10px; background: #37474f;"
              @click=${()=>this._showInventory=!0}
              title="Browse full cellar inventory"
            >
              📦 Inventory
            </button>
            <button
              class="btn btn-primary"
              @click=${()=>{this._addPreselect={cabinet:"",row:null,col:null,zone:"",depth:0},this._showAddDialog=!0}}
            >
              + Add Wine
            </button>
          </div>
        </div>

        <!-- Copy mode banner -->
        ${this._copiedWine?j`
              <div class="copy-banner">
                <span>📋 Copying "${this._copiedWine.name}" — tap empty cells to place copies</span>
                <button @click=${()=>this._copiedWine=null}>✕ Done</button>
              </div>
            `:H}

        <!-- Move mode banner -->
        ${this._movingWine?j`
              <div class="copy-banner">
                <span>📦 Moving "${this._movingWine.name}" — tap a cell to place it</span>
                <button @click=${()=>this._movingWine=null}>✕ Cancel</button>
              </div>
            `:H}

        <!-- Buy list move mode banner -->
        ${this._movingBuyListItem?j`
              <div class="buy-list-banner">
                <span>🛒 Placing "${this._movingBuyListItem.name}" — tap a cell in your cellar</span>
                <button @click=${()=>this._movingBuyListItem=null}>✕ Cancel</button>
              </div>
            `:H}

        <!-- Stats bar -->
        ${this._stats?j`
              <div class="stats-bar">
                <div class="stat">
                  <span class="stat-value">${this._stats.total_bottles}</span>
                  bottles
                </div>
                <div class="stat">
                  <span class="stat-value">${this._stats.total_capacity}</span>
                  capacity
                </div>
                <div class="stat">
                  <span class="stat-value">${this._stats.available_slots}</span>
                  available
                </div>
                ${this._stats.total_value?j`
                      <div class="stat">
                        <span class="stat-value">$${this._stats.total_value.toLocaleString()}</span>
                        value
                        ${this._stats.total_cost?j`<span style="font-size:0.75em;color:${this._stats.total_value-this._stats.total_cost>=0?"#2e7d32":"#c62828"}">${this._stats.total_value-this._stats.total_cost>=0?"+":""}$${(this._stats.total_value-this._stats.total_cost).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}</span>`:H}
                      </div>
                    `:H}
              </div>
            `:H}

        <!-- Tab bar -->
        <div class="tab-bar">
          <button
            class="tab ${"all"===this._activeTab?"active":""}"
            @click=${()=>this._activeTab="all"}
          >
            All Sections
          </button>
          ${this._cabinets.map(e=>j`
              <button
                class="tab ${this._activeTab===e.id?"active":""}"
                @click=${()=>this._activeTab=e.id}
              >
                ${e.name}
                (${this._getCabinetWines(e.id).length})
              </button>
            `)}
          ${s.length>0?j`
                <button
                  class="tab ${"unassigned"===this._activeTab?"active":""}"
                  @click=${()=>this._activeTab="unassigned"}
                  style="${"unassigned"!==this._activeTab?"border-color: #e65100; color: #e65100;":""}"
                >
                  Unassigned (${s.length})
                </button>
              `:H}
          <button
            class="tab ${"buy-list"===this._activeTab?"active":""}"
            @click=${()=>this._activeTab="buy-list"}
            style="${"buy-list"===this._activeTab?"border-color: #e65100; color: #e65100;":""}"
          >
            Buy List (${this._buyList.length})
          </button>
          <button
            class="tab manage-racks-btn"
            @click=${()=>this._showRackSettings=!0}
          >
            Manage Racks
          </button>
        </div>

        <!-- Search bar -->
        <wine-search-bar @search-change=${this._onSearch}></wine-search-bar>

        <!-- Cabinet grids -->
        ${a?j`
              <div class="cabinets-row">
                ${"all"===this._activeTab?this._cabinets.map(e=>j`
                        <cabinet-grid
                          .cabinet=${e}
                          .wines=${this._getCabinetWines(e.id)}
                          @cell-click=${this._onCellClick}
                          @zone-click=${this._onZoneClick}
                          @zone-container-click=${this._onZoneContainerClick}
                          @wine-drop=${this._onWineDrop}
                          @wine-longpress=${e=>{this._movingWine=e.detail.wine,this._showToast(`Tap a cell to move "${e.detail.wine.name}"`)}}
                        ></cabinet-grid>
                      `):this._cabinets.filter(e=>e.id===this._activeTab).map(e=>j`
                          <cabinet-grid
                            .cabinet=${e}
                            .wines=${this._getCabinetWines(e.id)}
                            @cell-click=${this._onCellClick}
                            @zone-click=${this._onZoneClick}
                            @zone-container-click=${this._onZoneContainerClick}
                          ></cabinet-grid>
                        `)}
              </div>
              ${"all"===this._activeTab&&s.length>0?j`
                    <div style="padding: 8px 16px 2px">
                      <div style="font-size: 0.9em; font-weight: 600; color: var(--wc-text-secondary); margin-bottom: 4px">
                        📦 Unassigned (${s.length})
                      </div>
                    </div>
                    <div class="wine-list" style="border-top: 1px solid var(--wc-border)">
                      ${s.map(e=>{const t=me[e.type]||me.red;return j`
                            <div
                              class="wine-list-item"
                              @click=${()=>{this._selectedWine=e,this._detailMode="cellar",this._showDetail=!0}}
                            >
                              ${e.image_url?j`<img class="wine-list-thumb" src="${e.image_url}" alt="" />`:j`<div class="wine-list-dot" style="background: ${t}"></div>`}
                              <div class="wine-list-info">
                                <div class="wine-list-name">${e.name}</div>
                                <div class="wine-list-meta">
                                  ${e.winery}${e.vintage?` · ${e.vintage}`:""}
                                  ${e.rating?` · ★${e.rating}`:""}
                                </div>
                              </div>
                              <div class="wine-list-location" style="color:#e65100">Unassigned</div>
                            </div>
                          `})}
                    </div>
                  `:H}
            `:H}

        <!-- Buy List view -->
        ${n?j`
              <div class="buy-list-view">
                ${0===this._buyList.length?j`
                      <div class="empty-state">
                        <div class="empty-state-icon">🛒</div>
                        <div style="font-weight: 500; margin-bottom: 4px">
                          Your buy list is empty
                        </div>
                        <div style="font-size: 0.9em">
                          Use 🛒 Buy List in Add Wine, or 🛒 Buy in the list scanner
                        </div>
                      </div>
                    `:this._buyList.map(e=>{const t="red"===e.type?"#722F37":"white"===e.type?"#F5E6CA":"rosé"===e.type?"#E8A0BF":"sparkling"===e.type?"#D4E09B":"#DAA520";return j`
                        <div class="buy-list-card" @click=${()=>this._showBuyListDetail(e)} style="cursor:pointer">
                          ${e.image_url?j`<img class="wine-list-thumb" src="${e.image_url}" alt="" />`:j`<div class="wine-list-dot" style="background: ${t}"></div>`}
                          <div class="bl-info">
                            <div class="bl-name">${e.name}</div>
                            <div class="bl-meta">
                              ${e.winery}${e.vintage?` · ${e.vintage}`:""}
                              ${e.rating?` · ★${e.rating.toFixed(1)}`:""}
                              ${e.retail_price?` · $${e.retail_price}`:""}
                            </div>
                          </div>
                          <div class="bl-actions">
                            <button
                              class="bl-cellar-btn"
                              @click=${t=>{t.stopPropagation(),this._startMoveBuyListItem(e)}}
                              title="Move to cellar"
                            >
                              + Cellar
                            </button>
                            <button
                              class="bl-remove-btn"
                              @click=${t=>{t.stopPropagation(),this._removeBuyListItem(e.id)}}
                              title="Remove from buy list"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      `})}
              </div>
            `:H}

        <!-- Unassigned wines view -->
        ${o?j`
              <div class="wine-list">
                <div style="padding: 12px 16px 4px; font-size: 0.85em; color: var(--wc-text-secondary)">
                  These wines are not assigned to any rack. Tap a wine to view details, then use Move to place it.
                </div>
                ${s.map(e=>{const t=me[e.type]||me.red;return j`
                      <div
                        class="wine-list-item"
                        @click=${()=>{this._movingBuyListItem||(this._selectedWine=e,this._detailMode="cellar",this._showDetail=!0)}}
                      >
                        ${e.image_url?j`<img class="wine-list-thumb" src="${e.image_url}" alt="" />`:j`<div class="wine-list-dot" style="background: ${t}"></div>`}
                        <div class="wine-list-info">
                          <div class="wine-list-name">${e.name}</div>
                          <div class="wine-list-meta">
                            ${e.winery}${e.vintage?` · ${e.vintage}`:""}
                            ${e.rating?` · ★${e.rating}`:""}
                            ${e.disposition?j` · <span style="color: ${"D"===e.disposition?"#2e7d32":"H"===e.disposition?"#1565c0":"P"===e.disposition?"#c62828":"inherit"}">${"D"===e.disposition?"Drink":"H"===e.disposition?"Hold":"P"===e.disposition?"Past Peak":""}</span>`:H}
                          </div>
                        </div>
                        <div class="wine-list-location">Unassigned</div>
                      </div>
                    `})}
              </div>
            `:H}

        <!-- Filtered wine list (shown when searching or filtering) -->
        ${i?j`
              <div class="wine-list">
                ${0===t.length?j`
                      <div class="empty-state">
                        <div>No wines match your search</div>
                      </div>
                    `:t.map(e=>{const t=this._cabinets.find(t=>t.id===e.cabinet_id)?.name||"Unassigned";return j`
                        <div
                          class="wine-list-item"
                          @click=${()=>{this._selectedWine=e,this._detailMode="cellar",this._showDetail=!0}}
                        >
                          ${e.image_url?j`<img class="wine-list-thumb" src="${e.image_url}" alt="" />`:j`<div
                                class="wine-list-dot"
                                style="background: ${"red"===e.type?"#722F37":"white"===e.type?"#F5E6CA":"rosé"===e.type?"#E8A0BF":"sparkling"===e.type?"#D4E09B":"#DAA520"}"
                              ></div>`}
                          <div class="wine-list-info">
                            <div class="wine-list-name">${e.name}</div>
                            <div class="wine-list-meta">
                              ${e.winery}${e.vintage?` · ${e.vintage}`:""}
                              ${e.rating?` · ★${e.rating}`:""}
                              ${e.disposition?j` · <span style="color: ${"D"===e.disposition?"#2e7d32":"H"===e.disposition?"#1565c0":"P"===e.disposition?"#c62828":"inherit"}">${"D"===e.disposition?"Drink":"H"===e.disposition?"Hold":"P"===e.disposition?"Past Peak":""}</span>`:H}
                            </div>
                          </div>
                          <div class="wine-list-location">${t}</div>
                        </div>
                      `})}
              </div>
            `:H}

        <!-- Empty state -->
        ${0===this._wines.length?j`
              <div class="empty-state">
                <div class="empty-state-icon">🍾</div>
                <div style="font-weight: 500; margin-bottom: 4px">
                  Your cellar is empty
                </div>
                <div style="font-size: 0.9em">
                  Tap "Add Wine" to start building your collection
                </div>
              </div>
            `:H}

        <!-- Wine Detail Dialog -->
        <wine-detail-dialog
          .wine=${this._selectedWine}
          .hass=${this.hass}
          .open=${this._showDetail}
          .hasGemini=${this._hasGemini}
          .mode=${this._detailMode}
          @close=${()=>this._showDetail=!1}
          @remove-wine=${this._onRemoveWine}
          @remove-buy-list-item=${e=>{this._removeBuyListItem(e.detail.item_id)}}
          @wine-updated=${()=>this._loadData()}
          @buy-list-updated=${()=>this._loadData()}
          @copy-wine=${e=>this._copyWine(e.detail.wine)}
          @move-wine=${e=>{this._showDetail=!1,this._movingWine=e.detail.wine,this._showToast(`Tap a cell to move "${e.detail.wine.name}"`)}}
        ></wine-detail-dialog>

        <!-- Add Wine Dialog -->
        <add-wine-dialog
          .open=${this._showAddDialog}
          .hass=${this.hass}
          .cabinets=${this._cabinets}
          .preselectedCabinet=${this._addPreselect.cabinet}
          .preselectedRow=${this._addPreselect.row}
          .preselectedCol=${this._addPreselect.col}
          .preselectedZone=${this._addPreselect.zone}
          .preselectedDepth=${this._addPreselect.depth||0}
          .buyListMode=${this._addToBuyListMode}
          @close=${()=>{this._showAddDialog=!1,this._addToBuyListMode=!1}}
          @wine-added=${this._onWineAdded}
          @buy-list-updated=${()=>this._loadData()}
        ></add-wine-dialog>

        <!-- Wine List Scanner Dialog -->
        <wine-list-dialog
          .open=${this._showWineList}
          .hass=${this.hass}
          .hasGemini=${this._hasGemini}
          .cellarWines=${this._wines}
          @close=${()=>this._showWineList=!1}
          @wine-added=${this._onWineAdded}
          @buy-list-updated=${()=>this._loadData()}
        ></wine-list-dialog>

        <!-- Inventory Dialog -->
        <inventory-dialog
          .open=${this._showInventory}
          .hass=${this.hass}
          .wines=${this._wines}
          .cabinets=${this._cabinets}
          .hasGemini=${this._hasGemini}
          @close=${()=>this._showInventory=!1}
          @wine-updated=${()=>this._loadData()}
        ></inventory-dialog>

        <!-- Rack Settings Dialog -->
        <rack-settings-dialog
          .open=${this._showRackSettings}
          .hass=${this.hass}
          .cabinets=${this._cabinets}
          .wines=${this._wines}
          @close=${()=>this._showRackSettings=!1}
          @racks-updated=${()=>this._loadData()}
        ></rack-settings-dialog>

        <!-- Depth Side Panel -->
        ${this._depthPanelOpen?j`
              <div class="depth-panel-backdrop" @click=${this._closeDepthPanel}></div>
              <div class="depth-panel open">
                <div class="depth-panel-header">
                  <span class="depth-panel-title">
                    Row ${(this._depthPanelRow??0)+1}, Col ${(this._depthPanelCol??0)+1}
                    <span class="depth-panel-subtitle">
                      ${this._depthPanelWines.length}/${this._depthPanelMaxDepth} deep
                    </span>
                  </span>
                  <button class="depth-panel-close" @click=${this._closeDepthPanel}>✕</button>
                </div>
                <div class="depth-panel-slots">
                  ${Array.from({length:this._depthPanelMaxDepth},(e,t)=>{const i=this._depthPanelWines.find(e=>(e.depth||0)===t),s=i?me[i.type]||me.red:"";return j`
                      <div
                        class="depth-slot ${i?"filled":"empty"}"
                        @click=${()=>this._onDepthSlotClick(t,i)}
                      >
                        <div class="depth-slot-label">${this._getDepthLabel(t)}</div>
                        ${i?j`
                              <div class="depth-slot-wine" style="border-left: 4px solid ${s}">
                                ${i.image_url?j`<img class="depth-slot-thumb" src="${i.image_url}" alt="" />`:j`<div class="depth-slot-dot" style="background: ${s}"></div>`}
                                <div class="depth-slot-info">
                                  <div class="depth-slot-name">${i.name}</div>
                                  <div class="depth-slot-meta">
                                    ${i.vintage||"NV"}
                                    ${i.rating?j` · ★${i.rating}`:H}
                                    ${i.price?j` · $${i.price}`:H}
                                  </div>
                                </div>
                              </div>
                            `:j`
                              <div class="depth-slot-empty">
                                <span class="depth-slot-plus">+</span>
                                <span>Empty</span>
                              </div>
                            `}
                      </div>
                    `})}
                </div>
              </div>
            `:H}

        <!-- Zone Side Panel (Boxes, Bulk Bins) -->
        ${this._zonePanelOpen?j`
              <div class="depth-panel-backdrop" @click=${this._closeZonePanel}></div>
              <div class="depth-panel open">
                <div class="depth-panel-header">
                  <span class="depth-panel-title">
                    ${this._zonePanelName}
                    <span class="depth-panel-subtitle">
                      ${this._zonePanelWines.length}/${this._zonePanelCapacity}
                      ${"box"===this._zonePanelType?"bottles":"stored"}
                    </span>
                  </span>
                  <button class="depth-panel-close" @click=${this._closeZonePanel}>✕</button>
                </div>
                <div class="depth-panel-slots">
                  ${"bulk"===this._zonePanelType?j`
                        <!-- Bulk mode: scrollable wine list + add button -->
                        ${this._zonePanelWines.map(e=>{const t=me[e.type]||me.red;return j`
                            <div
                              class="depth-slot filled"
                              @click=${()=>this._onZonePanelSlotClick(0,e)}
                            >
                              <div class="depth-slot-wine" style="border-left: 4px solid ${t}">
                                ${e.image_url?j`<img class="depth-slot-thumb" src="${e.image_url}" alt="" />`:j`<div class="depth-slot-dot" style="background: ${t}"></div>`}
                                <div class="depth-slot-info">
                                  <div class="depth-slot-name">${e.name}</div>
                                  <div class="depth-slot-meta">
                                    ${e.vintage||"NV"}
                                    ${e.rating?j` · ★${e.rating}`:H}
                                    ${e.price?j` · $${e.price}`:H}
                                  </div>
                                </div>
                              </div>
                            </div>
                          `})}
                        ${this._zonePanelWines.length<this._zonePanelCapacity?j`
                              <div
                                class="depth-slot empty"
                                @click=${this._onZonePanelBulkAdd}
                              >
                                <div class="depth-slot-empty">
                                  <span class="depth-slot-plus">+</span>
                                  <span>Add Wine</span>
                                </div>
                              </div>
                            `:H}
                      `:j`
                        <!-- Box mode: slots grouped by box -->
                        ${(()=>{const e=this._zonePanelStorageRow?.boxes||[this._zonePanelCapacity];let t=0;return e.map((i,s)=>{const a=t;return t+=i,j`
                              ${e.length>1?j`<div style="font-size:0.75em;font-weight:600;color:var(--wc-text-secondary);padding:8px 0 2px;${s>0?"border-top:1px solid var(--wc-border);margin-top:4px;":""}">
                                    Box ${s+1} (${i}-pack)
                                  </div>`:H}
                              ${Array.from({length:i},(e,t)=>{const i=a+t,s=this._zonePanelWines.find(e=>(e.depth||0)===i),n=s?me[s.type]||me.red:"";return j`
                                  <div
                                    class="depth-slot ${s?"filled":"empty"}"
                                    @click=${()=>this._onZonePanelSlotClick(i,s)}
                                  >
                                    <div class="depth-slot-label">Slot ${t+1}</div>
                                    ${s?j`
                                          <div class="depth-slot-wine" style="border-left: 4px solid ${n}">
                                            ${s.image_url?j`<img class="depth-slot-thumb" src="${s.image_url}" alt="" />`:j`<div class="depth-slot-dot" style="background: ${n}"></div>`}
                                            <div class="depth-slot-info">
                                              <div class="depth-slot-name">${s.name}</div>
                                              <div class="depth-slot-meta">
                                                ${s.vintage||"NV"}
                                                ${s.rating?j` · ★${s.rating}`:H}
                                                ${s.price?j` · $${s.price}`:H}
                                              </div>
                                            </div>
                                          </div>
                                        `:j`
                                          <div class="depth-slot-empty">
                                            <span class="depth-slot-plus">+</span>
                                            <span>Empty</span>
                                          </div>
                                        `}
                                  </div>
                                `})}
                            `})})()}
                      `}
                </div>
              </div>
            `:H}

        <!-- Toast -->
        ${this._toast?j`<div class="toast">${this._toast}</div>`:H}
      </ha-card>
    `}getCardSize(){return 6}};Pe.styles=[ue,o`
      :host {
        display: block;
      }

      ha-card {
        overflow: hidden;
      }

      .header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 16px 8px;
      }

      .title {
        font-size: 1.3em;
        font-weight: 600;
        color: var(--wc-text);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .title-icon {
        font-size: 1.2em;
      }

      .header-actions {
        display: flex;
        gap: 4px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .cabinets-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
        padding: 12px 16px 16px;
      }

      .wine-list {
        padding: 0 16px 16px;
      }

      .wine-list-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        transition: background 0.2s;
      }

      .wine-list-item:hover {
        background: var(--wc-hover);
      }

      .wine-list-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .wine-list-thumb {
        width: 36px;
        height: 48px;
        border-radius: 4px;
        object-fit: cover;
        flex-shrink: 0;
      }

      .wine-list-info {
        flex: 1;
        min-width: 0;
      }

      .wine-list-name {
        font-weight: 500;
        font-size: 0.95em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .wine-list-meta {
        font-size: 0.8em;
        color: var(--wc-text-secondary);
      }

      .wine-list-location {
        font-size: 0.75em;
        color: var(--wc-text-secondary);
        text-align: right;
      }

      .empty-state {
        text-align: center;
        padding: 40px 20px;
        color: var(--wc-text-secondary);
      }

      .empty-state-icon {
        font-size: 3em;
        margin-bottom: 8px;
      }

      .loading {
        text-align: center;
        padding: 40px;
        color: var(--wc-text-secondary);
      }

      .copy-banner {
        background: rgba(46, 125, 50, 0.1);
        border: 1px solid rgba(46, 125, 50, 0.3);
        color: #2e7d32;
        font-size: 0.85em;
        padding: 6px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .copy-banner button {
        background: transparent;
        border: 1px solid rgba(46, 125, 50, 0.4);
        color: #2e7d32;
        border-radius: 6px;
        padding: 2px 10px;
        cursor: pointer;
        font-size: 0.9em;
      }

      .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.9em;
        z-index: 1000;
        animation: fadeIn 0.2s;
        pointer-events: none;
      }

      .buy-list-view {
        padding: 0 16px 16px;
      }

      .buy-list-card {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px solid var(--wc-border);
        border-radius: 10px;
        margin-bottom: 8px;
        transition: background 0.2s;
      }

      .buy-list-card:hover {
        background: rgba(255, 255, 255, 0.04);
      }

      .bl-info {
        flex: 1;
        min-width: 0;
      }

      .bl-name {
        font-weight: 600;
        font-size: 0.9em;
        color: var(--wc-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .bl-meta {
        font-size: 0.78em;
        color: var(--wc-text-secondary);
        margin-top: 2px;
      }

      .bl-actions {
        display: flex;
        gap: 6px;
        flex-shrink: 0;
      }

      .bl-cellar-btn {
        background: #2e7d32;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-size: 0.75em;
        padding: 4px 8px;
        cursor: pointer;
        white-space: nowrap;
      }

      .bl-cellar-btn:hover { background: #1b5e20; }

      .bl-remove-btn {
        background: #c62828;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-size: 0.75em;
        padding: 4px 8px;
        cursor: pointer;
        white-space: nowrap;
      }

      .bl-remove-btn:hover { background: #b71c1c; }

      .buy-list-banner {
        background: rgba(230, 81, 0, 0.1);
        border: 1px solid rgba(230, 81, 0, 0.3);
        color: #e65100;
        font-size: 0.85em;
        padding: 6px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .buy-list-banner button {
        background: transparent;
        border: 1px solid rgba(230, 81, 0, 0.4);
        color: #e65100;
        border-radius: 6px;
        padding: 2px 10px;
        cursor: pointer;
        font-size: 0.9em;
      }

      /* Phone: stack cabinets vertically */
      @media (max-width: 599px) {
        .header-row {
          padding: 12px 12px 6px;
        }
        .title {
          font-size: 1.1em;
        }
        .stats-bar {
          flex-wrap: wrap;
          gap: 8px;
          padding: 6px 12px;
          font-size: 0.8em;
        }
        .cabinets-row {
          grid-template-columns: 1fr;
          gap: 10px;
          padding: 8px 12px 12px;
        }
        .wine-list-item {
          padding: 8px;
          gap: 8px;
        }
        .btn-primary {
          padding: 6px 12px;
          font-size: 0.85em;
        }
      }

      /* Tablet: 2 cabinets side by side */
      @media (min-width: 600px) and (max-width: 1023px) {
        .cabinets-row {
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
      }

      /* Desktop: all cabinets side by side */
      @media (min-width: 1024px) {
        .cabinets-row {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
      }
    `],e([he({attribute:!1})],Pe.prototype,"hass",void 0),e([ge()],Pe.prototype,"_config",void 0),e([ge()],Pe.prototype,"_wines",void 0),e([ge()],Pe.prototype,"_cabinets",void 0),e([ge()],Pe.prototype,"_stats",void 0),e([ge()],Pe.prototype,"_activeTab",void 0),e([ge()],Pe.prototype,"_searchQuery",void 0),e([ge()],Pe.prototype,"_searchFilter",void 0),e([ge()],Pe.prototype,"_selectedWine",void 0),e([ge()],Pe.prototype,"_showDetail",void 0),e([ge()],Pe.prototype,"_detailMode",void 0),e([ge()],Pe.prototype,"_showAddDialog",void 0),e([ge()],Pe.prototype,"_addPreselect",void 0),e([ge()],Pe.prototype,"_loading",void 0),e([ge()],Pe.prototype,"_showRackSettings",void 0),e([ge()],Pe.prototype,"_copiedWine",void 0),e([ge()],Pe.prototype,"_movingWine",void 0),e([ge()],Pe.prototype,"_analyzing",void 0),e([ge()],Pe.prototype,"_batchVivino",void 0),e([ge()],Pe.prototype,"_toast",void 0),e([ge()],Pe.prototype,"_hasGemini",void 0),e([ge()],Pe.prototype,"_showWineList",void 0),e([ge()],Pe.prototype,"_showInventory",void 0),e([ge()],Pe.prototype,"_buyList",void 0),e([ge()],Pe.prototype,"_addToBuyListMode",void 0),e([ge()],Pe.prototype,"_movingBuyListItem",void 0),e([ge()],Pe.prototype,"_depthPanelOpen",void 0),e([ge()],Pe.prototype,"_depthPanelCabinet",void 0),e([ge()],Pe.prototype,"_depthPanelRow",void 0),e([ge()],Pe.prototype,"_depthPanelCol",void 0),e([ge()],Pe.prototype,"_depthPanelWines",void 0),e([ge()],Pe.prototype,"_depthPanelMaxDepth",void 0),e([ge()],Pe.prototype,"_zonePanelOpen",void 0),e([ge()],Pe.prototype,"_zonePanelCabinet",void 0),e([ge()],Pe.prototype,"_zonePanelZone",void 0),e([ge()],Pe.prototype,"_zonePanelType",void 0),e([ge()],Pe.prototype,"_zonePanelCapacity",void 0),e([ge()],Pe.prototype,"_zonePanelName",void 0),e([ge()],Pe.prototype,"_zonePanelWines",void 0),e([ge()],Pe.prototype,"_zonePanelStorageRow",void 0),Pe=e([de("wine-cellar-card")],Pe),window.customCards=window.customCards||[],window.customCards.push({type:"wine-cellar-card",name:"Cork Dork",description:"Track your wine collection with visual cabinet layout",preview:!0});export{Pe as WineCellarCard};
