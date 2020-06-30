(this["webpackJsonpbuild-a-javascript-calculator"]=this["webpackJsonpbuild-a-javascript-calculator"]||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(5),l=a.n(i),s=a(6),r=a(2),o=(a(26),a(1)),u=(a(14),a(27),Object(r.b)((function(e){return{display:e.display,instant:e.immediateExecutionLogic}}))((function(e){return n.a.createElement("div",{className:"display__container"},n.a.createElement("div",{className:"display"},n.a.createElement("div",{className:"display-mode"},e.instant?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,"IMMEDIATE "),n.a.createElement("span",{className:"hidden"},"FORMULA")):n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"hidden"},"IMMEDIATE "),n.a.createElement("span",null,"FORMULA"))),n.a.createElement("p",{id:"display",className:"display-text"},e.display)))}))),d=(a(28),[{id:"mode",text:n.a.createElement("i",{className:"fas fa-cog op-font-size"}),action:"MODE"},{id:"clear",text:"C",action:"CLEAR"},{id:"seven",text:"7",action:"SEVEN"},{id:"eight",text:"8",action:"EIGHT"},{id:"nine",text:"9",action:"NINE"},{id:"divide",text:n.a.createElement("i",{className:"fas fa-divide op-font-size"}),action:"DIVIDE"},{id:"four",text:"4",action:"FOUR"},{id:"five",text:"5",action:"FIVE"},{id:"six",text:"6",action:"SIX"},{id:"multiply",text:n.a.createElement("i",{className:"fas fa-times op-font-size"}),action:"MULTIPLY"},{id:"one",text:"1",action:"ONE"},{id:"two",text:"2",action:"TWO"},{id:"three",text:"3",action:"THREE"},{id:"subtract",text:n.a.createElement("i",{className:"fas fa-minus op-font-size"}),action:"SUBTRACT"},{id:"zero",text:"0",action:"ZERO"},{id:"decimal",text:".",action:"DECIMAL"},{id:"equals",text:"=",action:"EQUALS"},{id:"add",text:n.a.createElement("i",{className:"fas fa-plus op-font-size"}),action:"ADD"}]);var m=Object(r.b)(null,{keypress:function(e,t){return{type:e,text:t}}})((function(e){var t,a=e.keyMapping,c=a.id,i=a.text,l=a.action,s=function(e){e.classList.remove("bounceIn"),setTimeout((function(){e.classList.add("bounceIn")}),1)};return n.a.createElement("div",{key:c,className:"key-container"},n.a.createElement("div",{id:c,className:"key bounceIn",ref:function(e){return t=e},onClick:function(){return function(t,a,c){s(c),e.keypress(t,a)}(l,i,t)}},n.a.createElement("p",null,i)))}));var p=function(e){return n.a.createElement("div",{className:"keypad-container"},n.a.createElement("div",{className:"keys"},n.a.createElement("div",{className:"logo"},n.a.createElement("i",{className:"fab fa-free-code-camp"})),function(){for(var e=[],t=0;t<d.length;t++){var a=d[t];e.push(n.a.createElement(m,{keyMapping:a,key:a.id}))}return e}()))},E=function(){return n.a.createElement("div",{className:"outer-container"},n.a.createElement("div",{className:"calculator"},n.a.createElement(u,null),n.a.createElement(p,null)),n.a.createElement("footer",null,"FreeCodeCamp Javascript Calculator \xa9\xa0Luca\xa0M\xa0-\xa0",n.a.createElement("a",{href:"https://github.com/lukino999/FCC-JavaScript-calculator",target:"_blank"},"source")))},f=a(13),v=a(4),y="VAL",O={display:"0",temp:"",stack:[],zeroIsAllowed:!1,lastEntryWasOp:!1,immediateExecutionLogic:!0},b=function(e){var t=[].concat(Object(v.a)(e.stack),[{type:y,value:parseFloat(e.display)}]);if(e.immediateExecutionLogic)for(;t.length>2;){var a=t.shift().value,c=t.shift().value,n=t.shift().value,i=0;switch(c){case"ADD":i=a+n;break;case"SUBTRACT":i=a-n;break;case"MULTIPLY":i=a*n;break;case"DIVIDE":i=a/n}t.unshift({type:y,value:i})}else{for(var l=1;t.length>l;){var s=void 0,r=t[l].value;if("MULTIPLY"===r||"DIVIDE"===r){var o=t[l-1].value,u=t[l+1].value;s="MULTIPLY"===r?o*u:o/u,t.splice(l-1,3,{type:y,value:s})}else l+=2}for(;t.length>=3;){var d,m=t[0].value,p=t[1].value,E=t[2].value;d="ADD"===p?m+E:m-E,t.splice(0,3,{type:y,value:d})}}return t[0].value};function I(e){var t=("-"===e[0]?e.split("-")[1]:e).split("."),a=Object(f.a)(t,2),c=a[0],n=a[1],i=n?c.length+n.length:c.length;return(i="0"===c?i-1:i)>=16}var x=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=e.temp,c=e.stack,n=e.display,i=e.lastEntryWasOp,l=e.zeroIsAllowed,s=e.immediateExecutionLogic;switch(t.type){case"MODE":return Object(o.a)({},e,{immediateExecutionLogic:!s});case"CLEAR":return Object(o.a)({},O,{immediateExecutionLogic:s});case"EQUALS":var r=b(e);return Object(o.a)({},O,{immediateExecutionLogic:s,display:r});case"SUBTRACT":if(i&&"SUBTRACT"===c[c.length-1])return e;if(i)return Object(o.a)({},e,{temp:"-"});if("0"===n)return Object(o.a)({},e,{temp:"-",display:"-"});case"ADD":case"MULTIPLY":case"DIVIDE":case"SUBTRACT":var u;if(i)(u=Object(v.a)(c)).pop();else{if("-"===a)return e;u=[].concat(Object(v.a)(c),[{type:y,value:parseFloat(n)}])}return Object(o.a)({},e,{temp:"",stack:[].concat(Object(v.a)(u),[{type:"OP",value:t.type}]),lastEntryWasOp:!0});case"DECIMAL":return I(a)?e:i?Object(o.a)({},e,{display:a+"0.",temp:a+"0.",lastEntryWasOp:!1,zeroIsAllowed:!0}):n.includes(".")?e:"0"===n?Object(o.a)({},e,{display:"0.",temp:"0.",zeroIsAllowed:!0}):"-"===n?Object(o.a)({},e,{display:"-0.",temp:"-0.",zeroIsAllowed:!0}):Object(o.a)({},e,{display:n+".",temp:n+".",zeroIsAllowed:!0});case"ZERO":return I(a)?e:l?i?Object(o.a)({},e,{display:"0",zeroIsAllowed:!1}):Object(o.a)({},e,{display:a+"0",temp:a+"0"}):e;case"ONE":case"TWO":case"THREE":case"FOUR":case"FIVE":case"SIX":case"SEVEN":case"EIGHT":case"NINE":return I(a)?e:i?Object(o.a)({},e,{display:a+t.text,temp:a+t.text,lastEntryWasOp:!1,zeroIsAllowed:!0}):Object(o.a)({},e,{display:a+t.text,temp:a+t.text,zeroIsAllowed:!0});default:return e}}));l.a.render(n.a.createElement(r.a,{store:x},n.a.createElement(E,null)),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.34d01046.chunk.js.map