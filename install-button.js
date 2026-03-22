import{L as t,s as e,r as i,e as s,y as n,n as o,a as r,t as l}from"https://unpkg.com";import{s as a,x as h}from"https://unpkg.com";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const d=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c=(t,e,i)=>{i.configurable=!0,i.enumerable=!0,Object.defineProperty(e,t,i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p=(t,e)=>({kind:"method",key:e.key,placement:"prototype",descriptor:e.descriptor,finisher(i){i.prototype[t]=e.descriptor.value}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function u(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){e.createProperty(t,i)}}})(t,e)}function m(t){return u({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;null!=(g=window.HTMLSlotElement)&&g.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class f extends i{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return void 0!==(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){const e=this.render();super.update(t),this._$Do=a(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return h}}f._$litElement=!0,f.finalized=!0,null===(o=window.indexedDB)||void 0===o||o.allInstances;const v=o=>o;let b=class extends f{constructor(){super(...arguments),this.manifest=void 0}render(){return h`<slot name="activate" @click=${this._handleClick}><button>Install</button></slot>`}async _handleClick(){const t=await import("https://unpkg.com");const e=document.createElement("ewt-install-dialog");e.manifest=this.manifest,document.body.appendChild(e)}};c("manifest",b.prototype,{webkit:!0}),b=v(b),d("esp-web-install-button")(b);export{b as EspWebInstallButton};
