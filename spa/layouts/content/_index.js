import{SvelteComponent,assign,check_outros,claim_component,create_component,destroy_component,destroy_each,detach,empty,get_spread_object,get_spread_update,group_outros,init,insert,mount_component,safe_not_equal,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[2]=t[n].name,s[3]=t[n].fields,s}function create_if_block(e){let s,o,n=e[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s].m(e,n);insert(e,s,n),o=!0},p(e,o){if(o&3){n=e[0];let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function create_each_block(e){let t,s,o;const i=[e[3]];var n=e[1]["layouts_components_"+e[2]+"_svelte"];function a(){let t={};for(let e=0;e<i.length;e+=1)t=assign(t,i[e]);return{props:t}}return n&&(t=new n(a(e))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert(e,s,n),o=!0},p(e,o){const r=o&1?get_spread_update(i,[get_spread_object(e[3])]):{};if(n!==(n=e[1]["layouts_components_"+e[2]+"_svelte"])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=new n(a(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(r)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let n,s,t=e[0]&&create_if_block(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,o){t&&t.m(e,o),insert(e,n,o),s=!0},p(e,[s]){e[0]?t?(t.p(e,s),s&1&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(n.parentNode,n)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(){if(s)return;transition_in(t),s=!0},o(){transition_out(t),s=!1},d(e){t&&t.d(e),e&&detach(n)}}}function instance(e,t,n){let{components:s}=t,{allLayouts:o}=t;return e.$$set=e=>{"components"in e&&n(0,s=e.components),"allLayouts"in e&&n(1,o=e.allLayouts)},[s,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{components:0,allLayouts:1})}}export default Component