(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s.n(n),o=s(4),c=s(5),a=s(7),i=s(6),l=s(1),u=s.n(l),h=(s(12),s(13),s(0)),d=function(t){var e=t.goodsFromServer;return Object(h.jsx)("ul",{className:"Goodlist",children:e.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})},b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(a.a)(s,t);var e=Object(i.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isStarted:!1,isReversed:!1,isReseted:!1,sortMethod:""},t.start=function(){t.setState({isStarted:!0})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed,isReseted:!1}}))},t.sortAlphabetically=function(){t.setState({sortMethod:"alphabetically",isReseted:!1})},t.sortByLength=function(){t.setState({sortMethod:"length",isReseted:!1})},t.reset=function(){t.setState({isReseted:!0})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.isReseted,n=t.sortMethod,r=[].concat(b);switch(n){case"alphabetically":r.sort();break;case"length":r.sort((function(t,e){return t.length-e.length}))}return e&&r.reverse(),s&&(r=[].concat(b)),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),!this.state.isStarted&&Object(h.jsx)("button",{type:"button",className:"startButton",onClick:this.start,children:"Start"}),this.state.isStarted&&Object(h.jsxs)("div",{className:"App__container",children:[Object(h.jsx)(d,{goodsFromServer:r}),Object(h.jsxs)("div",{className:"App__buttons",children:[Object(h.jsx)("button",{type:"button",className:"App__button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"App__button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"App__button",onClick:this.sortByLength,children:"Sort by length"})]}),Object(h.jsx)("button",{type:"button",className:"App__button App__button--reset",onClick:this.reset,children:"Reset"})]})]})}}]),s}(u.a.Component),j=p;r.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e6757fdd.chunk.js.map