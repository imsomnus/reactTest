webpackJsonp([1],{136:function(e,t,n){var o=n(274);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(81)(o,r);o.locals&&(e.exports=o.locals)},272:function(e,t,n){e.exports=function(e){new Promise(function(e){e()}).then(function(t){e(n(273))}.bind(null,n)).catch(n.oe)}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n(136);var u=function(){return r.default.createElement("div",{className:"h1"},"test2")};t.default=u},274:function(e,t,n){t=e.exports=n(80)(void 0),t.push([e.i,"body,html{width:100%;height:100%;background:#fff}.-style-h1-20VmI2-{text-align:center;font-size:30px}.-style-h1-20VmI2-,ul li{height:50px;line-height:50px}ul li{text-align:left;padding-left:30px;font-size:25px}",""]),t.locals={h1:"-style-h1-20VmI2-"}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=(0,o.observable)({count:1,add:o.action.bound(function(){this.count+=1}),less:o.action.bound(function(){this.count-=1})});t.default=r},86:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),f=o(c),s=n(15),p=n(28),d=n(272),h=o(d),b=n(30),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(b),v=n(275),m=o(v);n(136);var _=(0,p.observer)(l=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"h1"},f.default.createElement("div",{className:"h1"},"test"),f.default.createElement(s.Route,{path:"/test/test2",component:y.syncBundle(h.default)}),f.default.createElement(s.Link,{href:"/test/test2",to:"/test/test2"},"1、简单的加减按钮"))}}],[{key:"less",value:function(){m.default.less()}}]),t}(c.Component))||l;t.default=_}});