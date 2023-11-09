/*! For license information please see settings-vue-settings-admin-delegation.js.LICENSE.txt */
(()=>{"use strict";var e,i,r,s={16404:(e,i,r)=>{var s=r(20144),a=r(19664),n=r(79753),o=r(93664),l=r(64024);const c=(0,r(17499).IY)().setApp("settings").detectUser().build(),u={name:"GroupSelect",components:{NcSelect:a.Z},props:{availableGroups:{type:Array,default:()=>[]},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data(){return{selected:this.authorizedGroups.filter((e=>e.class===this.setting.class)).map((e=>this.availableGroups.find((t=>t.gid===e.group_id)))).filter((e=>void 0!==e))}},watch:{selected(){this.saveGroups()}},methods:{async saveGroups(){const e={newGroups:this.selected,class:this.setting.class};try{await o.Z.post((0,n.generateUrl)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",e)}catch(e){(0,l.x2)(t("settings","Unable to modify setting")),c.error("Unable to modify setting",e)}}}};var d=r(93379),g=r.n(d),p=r(7795),v=r.n(p),m=r(90569),A=r.n(m),h=r(3565),b=r.n(h),y=r(19216),f=r.n(y),j=r(44589),I=r.n(j),C=r(44754),S={};S.styleTagTransform=I(),S.setAttributes=b(),S.insert=A().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=f(),g()(C.Z,S),C.Z&&C.Z.locals&&C.Z.locals;var Z=r(51900);const M=(0,Z.Z)(u,(function(){var e=this;return(0,e._self._c)("NcSelect",{staticClass:"group-select",attrs:{"input-id":e.setting.id,placeholder:e.t("settings","None"),label:"displayName",options:e.availableGroups,multiple:!0,"close-on-select":!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}),[],!1,null,null,null).exports;var L=r(67912),x=r(43554);const N={name:"AdminDelegating",components:{GroupSelect:M,NcSettingsSection:L.Z},data:()=>({availableSettings:(0,x.j)("settings","available-settings"),availableGroups:(0,x.j)("settings","available-groups"),authorizedGroups:(0,x.j)("settings","authorized-groups"),authorizedSettingsDocLink:(0,x.j)("settings","authorized-settings-doc-link")})};var w=r(20940),T={};T.styleTagTransform=I(),T.setAttributes=b(),T.insert=A().bind(null,"head"),T.domAPI=v(),T.insertStyleElement=f(),g()(w.Z,T),w.Z&&w.Z.locals&&w.Z.locals;const z=(0,Z.Z)(N,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Administration privileges"),description:e.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":e.authorizedSettingsDocLink}},[t("div",{staticClass:"setting-list"},e._l(e.availableSettings,(function(i){return t("div",{key:i.class},[t("label",{attrs:{for:i.id}},[e._v(e._s(i.sectionName))]),e._v(" "),t("GroupSelect",{attrs:{"available-groups":e.availableGroups,"authorized-groups":e.authorizedGroups,setting:i}})],1)})),0)])}),[],!1,null,"6afb59d5",null).exports;s.default.prototype.OC=OC,s.default.prototype.t=t,(new(s.default.extend(z))).$mount("#admin-right-sub-granting")},20940:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(87537),s=i.n(r),a=i(23645),n=i.n(a)()(s());n.push([e.id,"label[data-v-6afb59d5]{display:block;font-size:16px;margin:12px 0;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegating.vue"],names:[],mappings:"AACA,uBACC,aAAA,CACA,cAAA,CACA,aAAA,CACA,6BAAA",sourcesContent:["\nlabel {\n\tdisplay: block;\n\tfont-size: 16px;\n\tmargin: 12px 0;\n\tcolor: var(--color-text-light);\n}\n"],sourceRoot:""}]);const o=n},44754:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(87537),s=i.n(r),a=i(23645),n=i.n(a)()(s());n.push([e.id,".group-select{width:100%}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AACA,cACC,UAAA",sourcesContent:["\n.group-select {\n\twidth: 100%;\n}\n"],sourceRoot:""}]);const o=n},42761:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return s[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=s,e=[],n.O=(t,i,r,s)=>{if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],s=e[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,r,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,i)=>(n.f[i](e,t),t)),[])),n.u=e=>e+"-"+e+".js?v="+{3240:"29c327d1e4e42959b82f",3998:"a49373c9d79e30e60f7b",9064:"f6243754beec9d78de45"}[e],n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},r="nextcloud:",n.l=(e,t,s,a)=>{if(i[e])i[e].push(t);else{var o,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+s){o=d;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",r+s),o.src=e),i[e]=[t];var g=(t,r)=>{o.onerror=o.onload=null,clearTimeout(p);var s=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((e=>e(r))),t)return t(r)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),l&&document.head.appendChild(o)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=6638,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={6638:0};n.f.j=(t,i)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise(((i,s)=>r=e[t]=[i,s]));i.push(r[2]=s);var a=n.p+n.u(t),o=new Error;n.l(a,(i=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",o.name="ChunkLoadError",o.type=s,o.request=a,r[1](o)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,i)=>{var r,s,a=i[0],o=i[1],l=i[2],c=0;if(a.some((t=>0!==e[t]))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(l)var u=l(n)}for(t&&t(i);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0;var o=n.O(void 0,[7874],(()=>n(16404)));o=n.O(o)})();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=330739f2ee96ca6bb59b