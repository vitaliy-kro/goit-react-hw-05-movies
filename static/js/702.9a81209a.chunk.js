"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[702],{702:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,o,i,c=t(885),u=t(705),s=t(791),l=t(731),m=t(739),d=t(44),f=t(457),p=t(168),h=t(444),g=(0,h.ZP)(u.gN)(r||(r=(0,p.Z)(["\n  padding: ","px;\n  border-radius: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal})),x=h.ZP.button(a||(a=(0,p.Z)(["\n  font-family: ",";\n  margin-left: ","px;\n  padding: ","px;\n  border-radius: ",";\n  background-color: rgb(4, 170, 109);\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: #059862;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal})),b=h.ZP.ul(o||(o=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),y=h.ZP.p(i||(i=(0,p.Z)(["\n  font-family: ",";\n"])),(function(n){return n.theme.fonts.monospace})),Z=t(184),j=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,l.lr)(),o=(0,c.Z)(a,2),i=o[0],p=o[1],h=(0,m.TH)(),j=i.get("query");(0,s.useEffect)((function(){if(j){var n=new AbortController;try{d.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=ffeb9f2f11028db54bd5076015c70d21&language=en-US&query=".concat(j,"&page=1&include_adult=false"),{signal:n.signal}).then((function(n){var e=n.data;return r(e.results)}))}catch(e){console.log(e)}return function(){n.abort()}}}),[j]);return(0,Z.jsxs)(f.x,{p:"4",children:[(0,Z.jsx)(u.J9,{onSubmit:function(n){var e=n.search;e.trim()?p({query:e}):console.log("Type something!")},initialValues:{search:""},children:(0,Z.jsxs)(u.l0,{children:[(0,Z.jsx)(g,{name:"search"}),(0,Z.jsx)(x,{type:"submit",children:"Search"})]})}),t.length>0&&(0,Z.jsx)(b,{children:t.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,Z.jsx)("li",{children:(0,Z.jsxs)(l.OL,{to:"".concat(e),state:{from:h},children:[(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+r,alt:t}),(0,Z.jsx)(y,{children:t})]})},e)}))})]})}}}]);
//# sourceMappingURL=702.9a81209a.chunk.js.map