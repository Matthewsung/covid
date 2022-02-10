(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{225:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(82),s=c.n(r),o=(c(91),c(92),c(2)),i=c(12),j=c.n(i),d=c(20),l=c(21),u=c.n(l),b=c(15),O=c(1),h=function(t){var e=t.country;return Object(O.jsx)("li",{className:"country_li",children:Object(O.jsx)(b.b,{to:{pathname:"/covid/".concat(e.Country),state:{country:e}},children:e.Country})})},f=function(){var t=function(){var t=Object(d.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.covid19api.com/summary");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=Object(n.useState)([]),c=Object(o.a)(e,2),a=c[0],r=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],b=i[1],f=Object(n.useState)([]),x=Object(o.a)(f,2),m=x[0],p=x[1],v=Object(n.useState)(0),g=Object(o.a)(v,2),y=(g[0],g[1]),S=Object(n.useState)(0),N=Object(o.a)(S,2),C=(N[0],N[1]),w=Object(n.useState)(0),_=Object(o.a)(w,2),D=(_[0],_[1]),L=Object(n.useState)(0),T=Object(o.a)(L,2),k=(T[0],T[1]),E=Object(n.useState)(0),F=Object(o.a)(E,2),M=(F[0],F[1]);Object(n.useEffect)((function(){t().then((function(t){return r(t.data.Countries),t.data.Global})).catch((function(t){return console.log(t)})).then((function(t){y(t.Date.split("T")[0]),C(t.TotalConfirmed),D(t.TotalDeaths),k(t.NewConfirmed),M(t.NewDeaths)}))}),[]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p(a.filter((function(t){return t.Country.toLowerCase().includes(l)})))},children:[Object(O.jsx)("input",{type:"text",placeholder:"\uad6d\uac00\ub97c \uac80\uc0c9\ud574\ubcf4\uc138\uc694",onChange:function(t){b(t.target.value)}}),Object(O.jsx)("button",{children:"\ucc3e\uae30"})]}),Object(O.jsx)("ul",{className:"country_ul",children:0===m.length?a.map((function(t,e){return Object(O.jsx)(h,{country:t},e+t)})):m.map((function(t,e){return Object(O.jsx)(h,{country:t},e+t)}))})]})})},x=c(84),m=c.n(x),p=function(){return Object(O.jsxs)("div",{className:m.a.header,children:[Object(O.jsx)(b.b,{to:"/covid",children:Object(O.jsx)("h1",{children:"COVID-19 \uc0c1\ud669"})}),Object(O.jsxs)("select",{children:[Object(O.jsx)("option",{children:"\uad6d\ub0b4"}),Object(O.jsx)("option",{children:"\uad6d\uc678"})]})]})},v=function(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],l=s[1],b=Object(n.useState)(0),h=Object(o.a)(b,2),f=h[0],x=h[1],m=Object(n.useState)(0),p=Object(o.a)(m,2),v=p[0],g=p[1],y=Object(n.useState)(0),S=Object(o.a)(y,2),N=S[0],C=S[1],w=function(){var t=Object(d.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.covid19api.com/summary");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){w().then((function(t){return t.data.Global})).catch((function(t){return console.log(t)})).then((function(t){a(t.Date.split("T")[0]),l(t.TotalConfirmed),x(t.TotalDeaths),g(t.NewConfirmed),C(t.NewDeaths)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"total_box",children:[Object(O.jsxs)("h1",{children:["\uae30\uc900\uc77c : ",c]}),Object(O.jsxs)("h2",{children:["\ucd1d \ud655\uc9c4\uc790\uc218 : ",i.toLocaleString()]}),Object(O.jsxs)("h2",{children:["\ucd1d \uc0ac\ub9dd\uc790\uc218 : ",f.toLocaleString()]}),Object(O.jsxs)("h2",{children:["\uae08\uc77c \ud655\uc9c4\uc790\uc218 : ",v.toLocaleString()]}),Object(O.jsxs)("h2",{children:["\uae08\uc77c \uc0ac\ub9dd\uc790\uc218 : ",N.toLocaleString()]})]})})},g=c(3),y=c(34),S=function(t){var e=t.data,c=e.CountryCode.toLowerCase(),a=Object(n.useState)({}),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)({}),b=Object(o.a)(l,2),h=b[0],f=b[1],x=Object(n.useState)({}),m=Object(o.a)(x,2),p=m[0],v=m[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.covid19api.com/total/dayone/country/".concat(c));case 2:n=t.sent,e(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(t){var e=t.reduce((function(t,e){var c=new Date(e.Date),n=c.getFullYear(),a=c.getMonth(),r=c.getDate(),s=e.Confirmed,o=e.Active,i=e.Deaths,j=e.Recovered,d=t.find((function(t){return t.year===n&&t.month===a}));return d||t.push({year:n,month:a,date:r,confirmed:s,active:o,death:i,recovered:j}),d&&d.date<r&&(d.active=o,d.death=i,d.date=r,d.year=n,d.month=a,d.recovered=j,d.confirmed=s),t}),[]),c=e.map((function(t){return"".concat(t.year," ").concat(t.month+1,"\uc6d4")}));i({labels:c,datasets:[{label:"\uad6d\ub0b4 \ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:"true",data:e.map((function(t){return t.confirmed}))}]}),f({labels:c,datasets:[{label:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",borderColor:"salmon",fill:!1,data:e.map((function(t){return t.active}))}]});var n=e[e.length-1];v({labels:["\ud655\uc9c4\uc790","\uaca9\ub9ac\ud574\uc81c","\uc0ac\ub9dd"],datasets:[{label:"\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd\ube44\uc728",backgroundColor:["#ff3d67","#059bff","#ffc233"],borderColor:["#ff3d67","#059bff","#ffc233"],fill:!1,data:[n.confirmed,n.recovered,n.death]}]})};t()}),[]),console.log(e.Country),Object(O.jsxs)("section",{children:[Object(O.jsxs)("h2",{children:[e.Country,"\uc758 \ucf54\ub85c\ub098 \ud604\ud669"]}),Object(O.jsxs)("div",{className:"contents",children:[Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{data:s,options:{legend:{display:!0,position:"right"}}})}),Object(O.jsx)("div",{children:Object(O.jsx)(y.c,{data:h,options:{legend:{display:!0,position:"right"}}})}),Object(O.jsx)("div",{children:Object(O.jsx)(y.b,{data:p,options:("\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd ( ".concat((new Date).getMonth()+1,"\uc6d4)"),{legend:{display:!0,position:"right"}})})})]})]})},N=function(){var t=Object(g.f)().state.country,e=Object(n.useState)(t.Country),c=Object(o.a)(e,2),a=c[0],r=(c[1],Object(n.useState)(t.NewConfirmed)),s=Object(o.a)(r,2),i=s[0],j=(s[1],Object(n.useState)(t.NewDeaths)),d=Object(o.a)(j,2),l=d[0],u=(d[1],Object(n.useState)(t.TotalConfirmed)),b=Object(o.a)(u,2),h=b[0],f=(b[1],Object(n.useState)(t.TotalDeaths)),x=Object(o.a)(f,2),m=x[0];x[1];return Object(O.jsxs)("div",{className:"w_1440",children:[Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{className:"d_tr",children:[Object(O.jsx)("td",{className:"d_td",children:"\ub098\ub77c"}),Object(O.jsx)("td",{className:"d_td",children:"\uae08\uc77c \ud655\uc9c4\uc790"}),Object(O.jsx)("td",{className:"d_td",children:"\uae08\uc77c \uc0ac\ub9dd\uc790"}),Object(O.jsx)("td",{className:"d_td",children:"\ucd1d \ud655\uc9c4\uc790"}),Object(O.jsx)("td",{className:"d_td",children:"\ucd1d \uc0ac\ub9dd\uc790"})]}),Object(O.jsxs)("tr",{className:"d_tr",children:[Object(O.jsx)("td",{className:"d_td",children:a}),Object(O.jsx)("td",{className:"d_td",children:i.toLocaleString()}),Object(O.jsx)("td",{className:"d_td",children:l.toLocaleString()}),Object(O.jsx)("td",{className:"d_td",children:h.toLocaleString()}),Object(O.jsx)("td",{className:"d_td",children:m.toLocaleString()})]})]})}),Object(O.jsx)(S,{data:t})]})},C=function(){return Object(O.jsxs)(b.a,{children:[Object(O.jsx)(p,{}),Object(O.jsx)(v,{}),Object(O.jsxs)(g.c,{children:[Object(O.jsx)(g.a,{exact:!0,path:"/covid",children:Object(O.jsx)(f,{})}),Object(O.jsx)(g.a,{path:"/covid/:country",children:Object(O.jsx)(N,{})})]})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))},84:function(t,e,c){t.exports={header:"Head_header__12V3U"}},91:function(t,e,c){},92:function(t,e,c){}},[[225,1,2]]]);
//# sourceMappingURL=main.6c039ea0.chunk.js.map