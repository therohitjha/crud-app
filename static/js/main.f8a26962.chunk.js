(this["webpackJsonpreact-testing"]=this["webpackJsonpreact-testing"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),i=c(8),r=c.n(i),o=c(4),a=c(2),l=(c(16),c(0));function j(){var t=Object(n.useState)(""),e=Object(a.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)([]),r=Object(a.a)(i,2),j=r[0],u=r[1],b=Object(n.useState)(!1),O=Object(a.a)(b,2),d=O[0],h=O[1],f=Object(n.useState)(!1),p=Object(a.a)(f,2),x=p[0],m=p[1],g=Object(n.useState)(null),v=Object(a.a)(g,2),y=v[0],C=v[1],S=Object(n.useRef)(null);Object(n.useEffect)((function(){S.current.focus(),setTimeout((function(){h(!1)}),5e3)}),[d]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"React CRUD Operations"}),Object(l.jsx)("input",{value:c,onChange:function(t){return s(t.target.value)},ref:S}),x?Object(l.jsx)("button",{onClick:function(){var t=Object(o.a)(j);t.splice(y,1,c),u(t),m(!1),s(""),C(null)},children:"Update"}):Object(l.jsx)("button",{onClick:function(){u((function(t){return t.some((function(t){return t===c}))?(h(!0),Object(o.a)(t)):[].concat(Object(o.a)(t),[c])})),s("")},children:"Submit"}),d&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("span",{style:{color:"red"},children:"Dublicates are not allowed"})]}),Object(l.jsx)("br",{}),(null===j||void 0===j?void 0:j.length)?Object(l.jsxs)("table",{className:"tableContainer",children:[Object(l.jsxs)("tr",{className:"flex",children:[Object(l.jsx)("th",{style:{fontWeight:"700"},children:"List"}),Object(l.jsx)("th",{style:{color:"green",fontWeight:"700"},children:"Edit"}),Object(l.jsx)("th",{style:{color:"red",fontWeight:"700"},children:"Delete"})]}),null===j||void 0===j?void 0:j.map((function(t,e){return Object(l.jsxs)("tr",{className:"flex",children:[Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{style:{cursor:"pointer",marginTop:"5px"},onClick:function(c){!function(t,e){j.forEach((function(c){c===t&&(s(c),C(e))})),m(!0)}(t,e),c.stopPropagation()},children:"Edit"}),Object(l.jsx)("td",{style:{cursor:"pointer",marginTop:"5px"},onClick:function(t){!function(t){var e=Object(o.a)(j);e.splice(t,1),u(e),m(!1),s("")}(e),t.stopPropagation()},children:"Delete"})]},t)}))," "]}):Object(l.jsx)("div",{className:"empty",children:"List is Empty"})]})}var u=document.getElementById("root");r.a.createRoot(u).render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(j,{})}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f8a26962.chunk.js.map