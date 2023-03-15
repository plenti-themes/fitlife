import{SvelteComponent,check_outros,claim_component,component_subscribe,create_component,destroy_component,detach,empty,group_outros,init,insert,mount_component,safe_not_equal,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Navaid from"../web_modules/navaid/dist/navaid.mjs";import allContent from"../generated/content.js";import*as allLayouts from"../generated/layouts.js";import{env}from"../generated/env.js";import adminMenu from"./cms/admin_menu.js";import{user}from"./cms/auth.js";import allDefaults from"../generated/defaults.js";function create_fragment(e){let t,s,o;var n=allLayouts["layouts_"+env.entrypoint.replace("/","_").replace(".","_")];function i(e){return{props:{path:e[0],params:e[1],content:e[2],layout:e[3],allContent,allLayouts,env,user,adminMenu,shadowContent:e[4]}}}return n&&(t=new n(i(e))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert(e,s,n),o=!0},p(e,[o]){const a={};if(o&1&&(a.path=e[0]),o&2&&(a.params=e[1]),o&4&&(a.content=e[2]),o&8&&(a.layout=e[3]),n!==(n=allLayouts["layouts_"+env.entrypoint.replace("/","_").replace(".","_")])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=new n(i(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(a)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function instance(e,t,n){let o;component_subscribe(e,user,e=>n(5,o=e));let l=location.pathname,r=new URLSearchParams(location.search),s=allContent.find(e=>e.filepath===document.documentElement.dataset.contentFilepath),a,u={};o.isBeingAuthenticated&&o.finishAuthentication(r);function c(e){n(0,l=e.state||e.uri||location.pathname),n(1,r=new URLSearchParams(location.search))}addEventListener("replacestate",c),addEventListener("pushstate",c),addEventListener("popstate",c);const i=()=>{n(2,s=allContent.find(e=>e.filepath==="content/404.json")),s===void 0&&n(2,s={path:"/404",type:"404",filename:"404.json",fields:{}}),import("../layouts/content/404.js").then(e=>{n(3,a=e.default)}).catch(e=>{console.log("Add a '/layouts/content/404.svelte' file to handle Page Not Found errors."),console.log("If you want to pass data to your 404 component, you can also add a '/content/404.json' file."),console.log(e)})},h=()=>{if(location.pathname!="/")return!1;if(location.hash.startsWith("#add/")&&o.isAuthenticated){const[e,t]=location.hash.substring("#add/".length).split("/"),o=allDefaults.find(t=>t.type==e);return e&&t&&o?(import("../layouts/content/"+e+".js").then(e=>{n(2,s=structuredClone(o)),n(2,s.isNew=!0,s),n(2,s.filename=t+".json",s),n(2,s.filepath=s.filepath.replace("_defaults.json",t+".json"),s),n(3,a=e.default)}).catch(i),!0):(i(),!0)}return!1},d=Navaid("/",i);return allContent.forEach(e=>{d.on(env.baseurl+e.path,()=>{if(h())return;import("../layouts/content/"+e.type+".js").then(t=>{s.filepath!==e.filepath&&window.scrollTo(0,0),n(2,s=e),n(3,a=t.default)}).catch(i)})}),d.listen(),[l,r,s,a,u]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}export default Component