import{r as t}from"./D-s6PRqiKBLBeb70.js";import{h as e,u as o,w as a,m as r}from"./9-4uHkHONBT5KBbC.js";var i=(t,e)=>(t=>"function"==typeof t)(t)?t(e):t,s=(()=>{let t=0;return()=>(++t).toString()})(),n=(()=>{let t;return()=>{if(void 0===t&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),d="default",c=(t,e)=>{let{toastLimit:o}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,o)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:a}=e;return c(t,{type:t.toasts.find(t=>t.id===a.id)?1:0,toast:a});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(t=>t.id===r||void 0===r?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+i}))}}},l=[],p={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},m={},f=(t,e=d)=>{m[e]=c(m[e]||p,t),l.forEach(([t,o])=>{t===e&&o(m[e])})},u=t=>Object.keys(m).forEach(e=>f(t,e)),y=(t=d)=>e=>{f(e,t)},b=t=>(e,o)=>{let a=((t,e="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(null==o?void 0:o.id)||s()}))(e,t,o);return y(a.toasterId||(t=>Object.keys(m).find(e=>m[e].toasts.some(e=>e.id===t)))(a.id))({type:2,toast:a}),a.id},g=(t,e)=>b("blank")(t,e);g.error=b("error"),g.success=b("success"),g.loading=b("loading"),g.custom=b("custom"),g.dismiss=(t,e)=>{let o={type:3,toastId:t};e?y(e)(o):u(o)},g.dismissAll=t=>g.dismiss(void 0,t),g.remove=(t,e)=>{let o={type:4,toastId:t};e?y(e)(o):u(o)},g.removeAll=t=>g.remove(void 0,t),g.promise=(t,e,o)=>{let a=g.loading(e.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let r=e.success?i(e.success,t):void 0;return r?g.success(r,{id:a,...o,...null==o?void 0:o.success}):g.dismiss(a),t}).catch(t=>{let r=e.error?i(e.error,t):void 0;r?g.error(r,{id:a,...o,...null==o?void 0:o.error}):g.dismiss(a)}),t};var x=e`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,h=e`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,v=e`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,w=a("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${h} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${v} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,$=e`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,E=a("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${$} 1s linear infinite;
`,k=e`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,z=e`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,A=a("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,j=a("div")`
  position: absolute;
`,I=a("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,D=e`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=a("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${D} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,N=({toast:e})=>{let{icon:o,type:a,iconTheme:r}=e;return void 0!==o?"string"==typeof o?t.createElement(L,null,o):o:"blank"===a?null:t.createElement(I,null,t.createElement(E,{...r}),"loading"!==a&&t.createElement(j,null,"error"===a?t.createElement(w,{...r}):t.createElement(A,{...r})))},O=t=>`\n0% {transform: translate3d(0,${-200*t}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,P=t=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*t}%,-1px) scale(.6); opacity:0;}\n`,F=a("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,M=a("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;t.memo(({toast:o,position:a,style:r,children:s})=>{let d=o.height?((t,o)=>{let a=t.includes("top")?1:-1,[r,i]=n()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[O(a),P(a)];return{animation:o?`${e(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${e(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(o.position||a||"top-center",o.visible):{opacity:0},c=t.createElement(N,{toast:o}),l=t.createElement(M,{...o.ariaProps},i(o.message,o));return t.createElement(F,{className:o.className,style:{...d,...r,...o.style}},"function"==typeof s?s({icon:c,message:l}):t.createElement(t.Fragment,null,c,l))}),r(t.createElement),o`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;export{g as n};
