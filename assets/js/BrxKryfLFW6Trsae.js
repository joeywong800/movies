import{r as t}from"./D-s6PRqiKBLBeb70.js";import{h as e,u as o,j as a,m as r}from"./BQN4GL9TIiLnyRs4.js";var i=(t,e)=>(t=>"function"==typeof t)(t)?t(e):t,s=(()=>{let t=0;return()=>(++t).toString()})(),n=(()=>{let t;return()=>{if(void 0===t&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),d=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,20)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:o}=e;return d(t,{type:t.toasts.find(t=>t.id===o.id)?1:0,toast:o});case 3:let{toastId:a}=e;return{...t,toasts:t.toasts.map(t=>t.id===a||void 0===a?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+r}))}}},c=[],l={toasts:[],pausedAt:void 0},p=t=>{l=d(l,t),c.forEach(t=>{t(l)})},m=t=>(e,o)=>{let a=((t,e="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(null==o?void 0:o.id)||s()}))(e,t,o);return p({type:2,toast:a}),a.id},u=(t,e)=>m("blank")(t,e);u.error=m("error"),u.success=m("success"),u.loading=m("loading"),u.custom=m("custom"),u.dismiss=t=>{p({type:3,toastId:t})},u.remove=t=>p({type:4,toastId:t}),u.promise=(t,e,o)=>{let a=u.loading(e.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let r=e.success?i(e.success,t):void 0;return r?u.success(r,{id:a,...o,...null==o?void 0:o.success}):u.dismiss(a),t}).catch(t=>{let r=e.error?i(e.error,t):void 0;r?u.error(r,{id:a,...o,...null==o?void 0:o.error}):u.dismiss(a)}),t};var f=e`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,y=e`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,b=e`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,g=a("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${f} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${y} 0.15s ease-out forwards;
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
    animation: ${b} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,x=e`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,h=a("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${x} 1s linear infinite;
`,v=e`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,w=e`
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
}`,$=a("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w} 0.2s ease-out forwards;
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
`,E=a("div")`
  position: absolute;
`,z=a("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,k=e`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,A=a("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${k} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,I=({toast:e})=>{let{icon:o,type:a,iconTheme:r}=e;return void 0!==o?"string"==typeof o?t.createElement(A,null,o):o:"blank"===a?null:t.createElement(z,null,t.createElement(h,{...r}),"loading"!==a&&t.createElement(E,null,"error"===a?t.createElement(g,{...r}):t.createElement($,{...r})))},j=t=>`\n0% {transform: translate3d(0,${-200*t}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,D=t=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*t}%,-1px) scale(.6); opacity:0;}\n`,N=a("div")`
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
`,P=a("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;t.memo(({toast:o,position:a,style:r,children:s})=>{let d=o.height?((t,o)=>{let a=t.includes("top")?1:-1,[r,i]=n()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[j(a),D(a)];return{animation:o?`${e(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${e(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(o.position||a||"top-center",o.visible):{opacity:0},c=t.createElement(I,{toast:o}),l=t.createElement(P,{...o.ariaProps},i(o.message,o));return t.createElement(N,{className:o.className,style:{...d,...r,...o.style}},"function"==typeof s?s({icon:c,message:l}):t.createElement(t.Fragment,null,c,l))}),r(t.createElement),o`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;export{u as c};
