(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 3rem 1fr 1.5rem;\n}\n\n/*HEADER STYLING*************************************************/\nheader {\n  background-color: sienna;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n}\nheader > #logo {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader > #logo > img {\n  width: 90%;\n}\nheader > #formWrapper {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(100, 183, 255);\n}\nheader > #menu {\n  width: 20%;\n}\nheader > #menu > button {\n  width: 40%;\n  height: 0.5rem;\n}\nheader > #menu > button::before {\n  content: "";\n  width: 40%;\n  transform: translateY(1rem);\n  height: 0.5rem;\n}\nheader > #menu > button::after {\n  content: "";\n  width: 1rem;\n  transform: translateY(-1rem);\n  height: 0.5rem;\n}\n\n/*FORM STYLING*****************************************************/\nform {\n  position: relative;\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 0.5rem;\n  background-color: white;\n  border-radius: 0.3rem;\n}\nform > input {\n  border: none;\n  background-color: white;\n  width: 80%;\n  font-size: 0.8rem;\n}\nform > button {\n  border: none;\n  background-color: white;\n}\nform > #searchCityErrorMessage {\n  display: none;\n  position: absolute;\n  width: 100%;\n  bottom: -100%;\n  left: 0;\n  background-color: white;\n  font-size: 0.8rem;\n  padding: 0.3rem 0.5rem;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.invalidInput {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.invalidInput > #searchCityErrorMessage {\n  display: block;\n}\n\n/*CONTENT STYLING**************************************************/\n#content {\n  background-color: royalblue;\n}\n\n/*FOOTER STYLING***************************************************/\nfooter {\n  background-color: seagreen;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:p(f,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function p(n,e){var t,r,o;if(e.singleton){var i=m++;t=h||(h=s(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(n,e),u=0;u<t.length;u++){var l=a(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(424);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=function(){const n={};function e(e){return void 0!==n[e]||(console.log(`PubSub says: "${e}" hasn't been published yet!`),!1)}function t(e,t){void 0===n[e]&&(n[e]=[]),n[e].push(t)}return{subscribe:t,subscribeAll:function(n){for(let e in n)t(e,n[e])},unsubscribe:function(t,r){if(!e(t)||!function(e,t){return!(n[e].indexOf(t)<0&&(console.log("PubSub says: no such handler found"),1))}(t,r))return;const o=n[t].indexOf(r);n[t].splice(o,1)},publish:function(t,r){e(t)&&n[t].forEach((n=>n(r)))},debug:function(){console.table(n)}}}();(function(){const n="56a73d758dcd4a2cce3b56a36de59d16";o.subscribe("getWeather",(async function(e){try{const t=await async function(e){try{const t=await async function(e){const t=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=5&appid=${n}`,{mode:"cors"});return await t.json()}(e),r=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t[0].lat}&exclude=minutely,alerts&lon=${t[0].lon}&appid=${n}`,{mode:"cors"});return await r.json()}catch(n){o.publish("cityNotFound")}}(e);o.publish("currentWeatherData",Object.assign(t.current,{cityName:e})),o.publish("dailyWeatherData",t.daily),o.publish("hourlyWeatherData",t.hourly)}catch(n){return}}))})(),function(){const n=document.querySelector("#searchCityButton"),e=document.querySelector("#searchCityInput"),t=document.querySelector("#searchCityErrorMessage"),r=document.querySelector("#searchCityForm");function i(){e.validity.valid?(r.classList.remove("invalidInput"),t.innerText=""):(r.classList.add("invalidInput"),e.validity.valueMissing?t.innerText="You need to fill this field":t.innerText="City not found")}e.addEventListener("input",(function(){e.setCustomValidity(""),i()})),n.addEventListener("click",(()=>{e.validity.valid&&o.publish("getWeather",e.value)})),o.subscribe("cityNotFound",(function(){e.setCustomValidity("City not found!"),i()}))}(),o.subscribe("currentWeatherData",console.log),o.subscribe("dailyWeatherData",console.log),o.subscribe("hourlyWeatherData",console.log)})()})();