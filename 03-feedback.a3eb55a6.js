!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function D(e){return c=e,u=setTimeout(h,t),s?b(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(O(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,m&&o?b(e):(o=i=void 0,f)}function S(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return D(l);if(d)return u=setTimeout(h,t),b(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},S.flush=function(){return void 0===u?f:w(p())},S}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||u.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var D=document.querySelector(".feedback-form"),O="feedback-form-state";formData=JSON.parse(localStorage.getItem(O));var h=D.elements,w=h.email,S=h.message;console.log(formData),formData&&(w.value=formData.email,S.value=formData.message);D.addEventListener("input",e(t)((function(e){formData={email:w.value,message:S.value},localStorage.setItem(O,JSON.stringify(formData))}),500)),D.addEventListener("submit",(function(e){""===w.value||""===S.value?alert("All fields must be filled!"):(e.preventDefault(),localStorage.removeItem(O),D.reset(),console.log(formData))}))}();
//# sourceMappingURL=03-feedback.a3eb55a6.js.map