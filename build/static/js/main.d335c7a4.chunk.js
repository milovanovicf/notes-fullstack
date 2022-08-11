(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(52)},50:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),u=n(19),i=n(5),l=n(3),m=n.n(l),f=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"not important":"important";return r.a.createElement("li",{className:"note"},e.content," ",r.a.createElement("button",{onClick:n},a))},p={getAll:function(){return m.a.get("/api/notes").then(function(t){return t.data})},create:function(t){return m.a.post("/api/notes",t).then(function(t){return t.data})},update:function(t,e){return m.a.put("".concat("/api/notes","/").concat(t),e).then(function(t){return t.data})}},d=(n(50),function(){return r.a.createElement("div",{style:{color:"#000",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helskinki 2022"))});var s=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)("a new note..."),l=Object(i.a)(c,2),m=l[0],s=l[1],E=Object(a.useState)(!0),b=Object(i.a)(E,2),v=b[0],h=b[1];Object(a.useEffect)(function(){p.getAll().then(function(t){o(t)})},[]);var g=v?n:n.filter(function(t){return t.important});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Notes"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return h(!v)}},"show ",v?"important":"all")),r.a.createElement("ul",null,g.map(function(t){return r.a.createElement(f,{key:t.id,note:t,date:new Date,toggleImportance:function(){return function(t){var e=n.find(function(e){return e.id===t}),a=Object(u.a)({},e,{important:!e.important});p.update(t,a).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(t){alert("the note ".concat(e.content," was already deleted from server"))}),o(n.filter(function(e){return e.id!==t}))}(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:m,date:(new Date).toISOString(),important:Math.random()<.5,id:n.length+1};p.create(e).then(function(t){o(n.concat(t)),s("")})}},r.a.createElement("input",{value:m,onChange:function(t){s(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(d,null))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(s,null))}},[[20,2,1]]]);
//# sourceMappingURL=main.d335c7a4.chunk.js.map