(this.webpackJsonpfohacker=this.webpackJsonpfohacker||[]).push([[0],{14:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),l=a(8),o=a(7),s=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],i=a[1],l=function(t){t.preventDefault(),e.onSubmit(r.toLocaleUpperCase()),i("")};return c.a.createElement("div",{className:"ui container"},c.a.createElement("div",{className:"ui input"},c.a.createElement("input",{placeholder:"Enter a word",onChange:function(e){return i(e.target.value)},onSubmit:function(){return l()},onKeyPress:function(e){var t;13===(t=e).charCode&&l(t)},autoFocus:!0}),c.a.createElement("div",{className:"ui container"},c.a.createElement("div",{className:"ui animated primary button",tabIndex:"0",onClick:l},c.a.createElement("div",{className:"visible content"},"Add"),c.a.createElement("div",{className:"hidden content"},c.a.createElement("i",{className:"plus circle icon"}))),c.a.createElement("div",{className:"ui animated green button",onClick:e.handleStart},c.a.createElement("div",{className:"visible content"},"Start"),c.a.createElement("div",{className:"hidden content"},c.a.createElement("i",{className:"play circle icon"}))),c.a.createElement("div",{className:"ui animated red button",onClick:e.handleReset},c.a.createElement("div",{className:"visible content"},"Reset"),c.a.createElement("div",{className:"hidden content"},c.a.createElement("i",{className:"recycle icon"}))))))},u=function(e){return c.a.createElement("div",{className:"ui segment"},c.a.createElement("div",{className:"ui equal width grid"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"ui center aligned container"},e.inactive?c.a.createElement("s",null,e.word):e.word)),e.isStarted?null:function(e){return c.a.createElement("div",{className:"two wide column"},c.a.createElement("button",{className:"compact circular ui icon red button",onClick:function(){return e.handleRemove(e.word)}},c.a.createElement("i",{className:"small trash icon"})))}(e),e.inactive?null:function(){var t=0,a=Object(l.a)(new Set(e.simScores)).sort();return e.isStarted?c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"ui center aligned container"},a.map((function(a){if(a>-1)return c.a.createElement("button",{className:"mini ui compact button",key:t++,onClick:function(){return e.chooseWord(e.word,a)}},a)})))):null}()))},m=function(e){return e.list?(t=e.list.map((function(t,a){return c.a.createElement(u,{index:e.list.indexOf(t),chooseWord:e.chooseWord,word:t,simScores:e.simScores[a],handleRemove:e.handleRemove,isStarted:e.isStarted,key:t})})),a=e.inactiveList.map((function(t,a){return c.a.createElement(u,{key:t,inactive:!0,word:t,simScores:e.simScores[e.list.indexOf(t)],isStarted:e.isStarted})})),c.a.createElement("div",{className:"ui raised padded container segment"},c.a.createElement("div",{className:"ui list"},t),c.a.createElement("div",{className:"ui list"},a))):c.a.createElement("div",null);var t,a},d=a(13),v=a(10),f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),f=u[0],E=u[1],h=Object(n.useState)([]),b=Object(o.a)(h,2),N=b[0],S=b[1],p=Object(n.useState)(!1),g=Object(o.a)(p,2),w=g[0],O=g[1],j=Object(n.useState)(!1),k=Object(o.a)(j,2),y=k[0],C=k[1],R=function(){C(!1),q()};Object(n.useEffect)((function(){1===a.length&&w&&C(!0),0===a.length&&w&&alert("There doesn't seem to be a solution to this problem")}),[a,w]);var x=function(e){return a[0].length===e.length},W=function(e){e.length>3?a.length<1||x(e)&&function(e){return!a.includes(e)}(e)?r([].concat(Object(l.a)(a),[e])):alert(x(e)?"word is already in list":"word is not the same length as the others"):alert("your word is too short")},A=function(e){for(var t=function(e){for(var t=e.length,a=new Array(t),n=0;n<t;n++){a[n]=new Array(t);for(var c=0;c<t;c++)a[n][c]=-1}return a}(e),a=t.length,n=0;n<a;n++)for(var c=0;c<a;c++)n!==c&&(t[n][c]=t[c][n]=L(e[n],e[c]));return t},L=function(e,t){for(var a=0,n=0;n<e.length;n++)e[n]===t[n]&&a++;return a},q=function(){r([]),S([]),E([]),O(!1)},F=function(){return w?c.a.createElement("div",{className:"ui animated green button",tabindex:"0",onClick:function(){return q()}},c.a.createElement("div",{className:"hidden content"},"Reset"),c.a.createElement("div",{className:"visible content"},c.a.createElement("i",{className:"recycle icon"}))):c.a.createElement(s,{onSubmit:function(e){return W(e)},handleStart:function(){return function(e){var t=A(e);S(t),O(!0)}(a)},handleReset:function(){return q()}})};return c.a.createElement("div",{className:"ui raised padded text container segment"},c.a.createElement(F,{className:"ui container"}),c.a.createElement(m,{list:a,chooseWord:function(e,t){var n=a.indexOf(e),c=[];N[n].forEach((function(e,a){e===t&&c.push(a)}));var i=a.filter((function(e,t){return c.includes(t)})),o=a.filter((function(e){return!i.includes(e)}));r(i),E([].concat(Object(l.a)(f),Object(l.a)(o))),S(A(i))},inactiveList:f,simScores:N,handleRemove:function(e){var t=a.filter((function(t){return t!==e}));r(t)},isStarted:w}),c.a.createElement(v.a,{show:y,onHide:R,backdrop:"static",keyboard:!1},c.a.createElement(v.a.Header,null,"The answer is:"),c.a.createElement(v.a.Body,null,a[0]),c.a.createElement(v.a.Footer,null,c.a.createElement(d.a,{onClick:R},"Reset"))))};a(22);i.a.render(c.a.createElement(f,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fc7b8be6.chunk.js.map