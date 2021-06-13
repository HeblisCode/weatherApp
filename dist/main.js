(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap);"]),a.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Rubik", sans-serif;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 3rem 1fr 1.5rem;\n}\n\n/*HEADER STYLING*************************************************/\nheader {\n  background-color: sienna;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n}\nheader > #logo {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader > #logo > img {\n  width: 90%;\n}\nheader > #formWrapper {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(100, 183, 255);\n}\nheader > #menu {\n  width: 20%;\n}\nheader > #menu > button {\n  width: 40%;\n  height: 0.5rem;\n}\nheader > #menu > button::before {\n  content: "";\n  width: 40%;\n  transform: translateY(1rem);\n  height: 0.5rem;\n}\nheader > #menu > button::after {\n  content: "";\n  width: 1rem;\n  transform: translateY(-1rem);\n  height: 0.5rem;\n}\n\n/*FORM STYLING*****************************************************/\nform {\n  position: relative;\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 0.5rem;\n  background-color: white;\n  border-radius: 0.3rem;\n}\nform > input {\n  border: none;\n  background-color: white;\n  width: 80%;\n  font-size: 0.8rem;\n}\nform > button {\n  border: none;\n  background-color: white;\n}\nform > #searchCityErrorMessage {\n  display: none;\n  position: absolute;\n  width: 100%;\n  bottom: -100%;\n  left: 0;\n  background-color: white;\n  font-size: 0.8rem;\n  padding: 0.3rem 0.5rem;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.invalidInput {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.invalidInput > #searchCityErrorMessage {\n  display: block;\n}\n\n/*CONTENT STYLING**************************************************/\n#content {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 0.7rem;\n}\n\n/*CURRENT WEATHER STYLING******************************************/\n#currentWeather {\n  width: 100%;\n  background-color: rgb(174, 223, 255);\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 10rem 2rem auto;\n  font-size: 0.8rem;\n}\n#currentRightGroup {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n  flex-direction: column;\n}\n#currentRightGroup > img {\n  height: 70%;\n}\n#currentRightGroup > p {\n  font-size: 2rem;\n}\n#currentLeftGroup {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  margin-right: 1rem;\n}\n#currentLeftGroup > h2 {\n  font-size: 2rem;\n}\n.expandButton {\n  grid-column: span 2;\n  align-self: center;\n  justify-self: center;\n}\n.hiddenGroup {\n  display: none;\n  grid-column: span 2;\n}\n\n/*FOOTER STYLING***************************************************/\nfooter {\n  background-color: seagreen;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*CLASSES**********************************************************/\n.show {\n  display: block;\n}\n.expandRotated {\n  transform: rotate(180deg);\n}\n',""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],a=0;a<e.length;a++){var u=e[a],s=t.base?u[0]+t.base:u[0],c=n[s]||0,d="".concat(s," ").concat(c);n[s]=c+1;var l=o(d),h={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(i[l].references++,i[l].updater(h)):i.push({identifier:d,updater:g(h,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function l(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function g(e,t){var n,r,a;if(t.singleton){var i=m++;n=f||(f=s(t)),r=l.bind(null,n,i,!1),a=l.bind(null,n,i,!0)}else n=s(t),r=h.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);i[a].references--}for(var s=u(e,t),c=0;c<n.length;c++){var d=o(n[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=s}}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(424);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const a=function(){const e={};function t(t){return void 0!==e[t]||(console.log(`PubSub says: "${t}" hasn't been published yet!`),!1)}function n(t,n){void 0===e[t]&&(e[t]=[]),e[t].push(n)}return{subscribe:n,subscribeAll:function(e){for(let t in e)n(t,e[t])},unsubscribe:function(n,r){if(!t(n)||!function(t,n){return!(e[t].indexOf(n)<0&&(console.log("PubSub says: no such handler found"),1))}(n,r))return;const a=e[n].indexOf(r);e[n].splice(a,1)},publish:function(n,r){t(n)&&e[n].forEach((e=>e(r)))},debug:function(){console.table(e)}}}();function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(e){i(1,arguments);var t=o(e);return!isNaN(t)}var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var l,h={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function g(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(d),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}const p={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof c[e]?c[e]:1===t?c[e].one:c[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:h,formatRelative:function(e,t,n,r){return f[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(l.matchPattern);if(!a)return null;var i=a[0],o=n.match(l.parsePattern);if(!o)return null;var u=l.valueCallback?l.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(e,t){i(2,arguments);var n=o(e).getTime(),r=u(t);return new Date(n+r)}function b(e,t){i(2,arguments);var n=u(t);return w(e,-n)}function v(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const y=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return v("yy"===t?r%100:r,t.length)},C=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},T=function(e,t){return v(e.getUTCDate(),t.length)},x=function(e,t){return v(e.getUTCHours()%12||12,t.length)},M=function(e,t){return v(e.getUTCHours(),t.length)},P=function(e,t){return v(e.getUTCMinutes(),t.length)},E=function(e,t){return v(e.getUTCSeconds(),t.length)},S=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return v(Math.floor(r*Math.pow(10,n-3)),t.length)};var k=864e5;function D(e){i(1,arguments);var t=1,n=o(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function U(e){i(1,arguments);var t=o(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=D(r),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=D(u);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function W(e){i(1,arguments);var t=U(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=D(n);return r}var N=6048e5;function Y(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,s=null==a?0:u(a),c=null==n.weekStartsOn?s:u(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=o(e),l=d.getUTCDay(),h=(l<c?7:0)+l-c;return d.setUTCDate(d.getUTCDate()-h),d.setUTCHours(0,0,0,0),d}function O(e,t){i(1,arguments);var n=o(e,t),r=n.getUTCFullYear(),a=t||{},s=a.locale,c=s&&s.options&&s.options.firstWeekContainsDate,d=null==c?1:u(c),l=null==a.firstWeekContainsDate?d:u(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(r+1,0,l),h.setUTCHours(0,0,0,0);var f=Y(h,t),m=new Date(0);m.setUTCFullYear(r,0,l),m.setUTCHours(0,0,0,0);var g=Y(m,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=g.getTime()?r:r-1}function L(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:u(a),s=null==n.firstWeekContainsDate?o:u(n.firstWeekContainsDate),c=O(e,t),d=new Date(0);d.setUTCFullYear(c,0,s),d.setUTCHours(0,0,0,0);var l=Y(d,t);return l}var j=6048e5;function q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+v(i,2)}function z(e,t){return e%60==0?(e>0?"-":"+")+v(Math.abs(e)/60,2):F(e,t)}function F(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+v(Math.floor(a/60),2)+n+v(a%60,2)}const G={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y(e,t)},Y:function(e,t,n,r){var a=O(e,r),i=a>0?a:1-a;return"YY"===t?v(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):v(i,t.length)},R:function(e,t){return v(U(e),t.length)},u:function(e,t){return v(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return v(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return v(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return C(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return v(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){i(1,arguments);var n=o(e),r=Y(n,t).getTime()-L(n,t).getTime();return Math.round(r/j)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):v(a,t.length)},I:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=D(t).getTime()-W(t).getTime();return Math.round(n/N)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):v(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):T(e,t)},D:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/k)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):v(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return v(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return v(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return v(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return x(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):M(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):v(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):v(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):E(e,t)},S:function(e,t){return S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return z(a);case"XXXX":case"XX":return F(a);case"XXXXX":case"XXX":default:return F(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return z(a);case"xxxx":case"xx":return F(a);case"xxxxx":case"xxx":default:return F(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(a,":");case"OOOO":default:return"GMT"+F(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(a,":");case"zzzz":default:return"GMT"+F(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return v(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return v((r._originalDate||e).getTime(),t.length)}};function H(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function R(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const B={p:R,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return H(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(a,t)).replace("{{time}}",R(i,t))}};function A(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var X=["D","DD"],Q=["YY","YYYY"];function _(e){return-1!==X.indexOf(e)}function I(e){return-1!==Q.indexOf(e)}function $(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,K=/''/g,ee=/[a-zA-Z]/;function te(e,t,n){i(2,arguments);var r=String(t),a=n||{},c=a.locale||p,d=c.options&&c.options.firstWeekContainsDate,l=null==d?1:u(d),h=null==a.firstWeekContainsDate?l:u(a.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=c.options&&c.options.weekStartsOn,m=null==f?0:u(f),g=null==a.weekStartsOn?m:u(a.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var w=o(e);if(!s(w))throw new RangeError("Invalid time value");var v=A(w),y=b(w,v),C={firstWeekContainsDate:h,weekStartsOn:g,locale:c,_originalDate:w},T=r.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,c.formatLong,C):e})).join("").match(J).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ne(n);var i=G[r];if(i)return!a.useAdditionalWeekYearTokens&&I(n)&&$(n,t,e),!a.useAdditionalDayOfYearTokens&&_(n)&&$(n,t,e),i(y,n,c.localize,C);if(r.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}function ne(e){return e.match(Z)[1].replace(K,"'")}function re(e,t){const n=function(e){return i(1,arguments),o(1e3*u(e))}(e+t),r=new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds());return{day:te(r,"EEEE"),hour:te(r,"HH:mm")}}const ae=function(e){const t=document.createElement("div"),n=document.createElement("p"),r=document.createElement("img"),a=document.createElement("p");return n.innerText=e.hourPar,r.src=e.iconUrl,a.innerText=e.tempPar,t.appendChild(n),t.appendChild(r),t.appendChild(a),t};(function(){const e="56a73d758dcd4a2cce3b56a36de59d16";function t(e){return Math.round(function(e){return 9*(e-273.15)/5+32}(e))+"°F"}a.subscribe("getWeather",(async function(n){try{const r=await async function(t){try{const n=await async function(t){const n=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=5&appid=${e}`,{mode:"cors"});return await n.json()}(t),r=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n[0].lat}&exclude=minutely,alerts&lon=${n[0].lon}&appid=${e}`,{mode:"cors"});return await r.json()}catch(e){a.publish("cityNotFound")}}(n);console.log(r);const i=Object.assign(r.current,{cityName:n,timezone_offset:r.timezone_offset}),o=Object.assign(r.hourly,{timezone_offset:r.timezone_offset}),u=Object.assign(r.daily,{timezone_offset:r.timezone_offset});a.publish("currentWeatherData",function(e){const n=re(e.dt,e.timezone_offset);return{cityNamePar:e.cityName,datePar:n.day+" "+n.hour,iconUrl:`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,tempPar:t(e.temp),humPar:"Humidity: "+e.humidity+"%",rainPar:"Rain: 0mm",feelsLikePar:"Feels like: "+e.feels_like,windPar:"Wind speed: "+e.wind_speed,uvPar:"UV index: "+e.uvi,weatherPar:e.weather[0].description}}(i)),a.publish("hourlyWeatherData",function(e){return e.map((n=>({hourPar:re(n.dt,e.timezone_offset).hour,iconUrl:`http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`,tempPar:t(n.temp),rainPar:"Rain: 0mm"})))}(o)),a.publish("dailyWeatherData",u)}catch(e){return void console.error(e)}}))})(),function(){const e=document.querySelector("#searchCityButton"),t=document.querySelector("#searchCityInput"),n=document.querySelector("#searchCityErrorMessage"),r=document.querySelector("#searchCityForm");function i(){t.validity.valid?(r.classList.remove("invalidInput"),n.innerText=""):(r.classList.add("invalidInput"),t.validity.valueMissing?n.innerText="You need to fill this field":n.innerText="City not found")}t.addEventListener("input",(function(){t.setCustomValidity(""),i()})),e.addEventListener("click",(()=>{t.validity.valid&&a.publish("getWeather",t.value)})),a.subscribe("cityNotFound",(function(){t.setCustomValidity("City not found!"),i()}))}(),function(){const e=document.querySelector("#content");a.subscribe("currentWeatherData",(function(t){const n=document.querySelector("#currentWeather");n&&n.remove(),e.appendChild(function(e){const t=document.createElement("div"),n=document.createElement("h2"),r=document.createElement("p"),a=document.createElement("img"),i=document.createElement("p"),o=document.createElement("p"),u=document.createElement("p"),s=document.createElement("p"),c=document.createElement("p"),d=document.createElement("p"),l=document.createElement("p"),h=document.createElement("span"),f=document.createElement("div"),m=document.createElement("div"),g=document.createElement("div");return n.innerText=e.cityNamePar,r.innerText=e.datePar,a.src=e.iconUrl,i.innerText=e.tempPar,o.innerText=e.humPar,u.innerText=e.rainPar,s.innerText=e.uvPar,d.innerText=e.feelsLikePar,l.innerText=e.windPar,c.innerText=e.weatherPar,t.id="currentWeather",h.classList.add("material-icons"),h.classList.add("expandButton"),h.innerText="expand_more",h.addEventListener("click",(()=>{h.classList.toggle("expandRotated"),g.classList.toggle("show")})),f.id="currentRightGroup",f.appendChild(a),f.appendChild(i),m.id="currentLeftGroup",m.appendChild(n),m.appendChild(r),m.append(c),m.appendChild(u),g.classList.add("hiddenGroup"),g.appendChild(o),g.appendChild(s),g.appendChild(d),g.appendChild(l),t.appendChild(m),t.appendChild(f),t.appendChild(h),t.appendChild(g),t}(t))})),a.subscribe("hourlyWeatherData",(function(t){const n=document.querySelector("#hourlyWeather");n&&n.remove(),e.appendChild(function(e){const t=document.createElement("div"),n=ae(e[0]),r=ae(e[1]),a=ae(e[2]),i=ae(e[3]),o=document.createElement("div");return t.appendChild(n),t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(o),t.id="hourlyWeather",t}(t))}))}(),a.subscribe("currentWeatherData",console.log)})()})();