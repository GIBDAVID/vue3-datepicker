import{K as s,a8 as p,a9 as i,aa as u,ab as c,ac as l,ad as d,ae as f,af as m,ag as h,ah as A,ai as g,d as P,u as v,p as y,k as C,aj as w,ak as _,al as b,am as E}from"./chunks/framework.a1822666.js";import{t as R}from"./chunks/theme.cf6f1c8f.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(R),D=P({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),_(),b(),n.setup&&n.setup(),()=>E(n.Layout)}});async function j(){const e=S(),a=O();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function O(){return m(D)}function S(){let e=s,a;return h(t=>{let o=A(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(o),[])},n.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{j as createApp};
