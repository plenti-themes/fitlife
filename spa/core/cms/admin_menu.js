import{SvelteComponent,add_flush_callback,add_render_callback,append,attr,bind,binding_callbacks,bubble,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_bidirectional_transition,create_component,destroy_component,detach,element,group_outros,init,insert,is_function,listen,mount_component,noop,null_to_empty,prevent_default,run_all,safe_not_equal,space,stop_propagation,subscribe,svg_element,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import JSONEditor from"./json_editor.js";import MediaBrowser from"./media_browser.js";import FileUpload from"./file_upload.js";import VisualEditor from"./visual_editor.js";import AddContent from"./add_content.js";import allMedia from"../../generated/media.js";import{env}from"../../generated/env.js";function create_else_block_2(){let t,s,o,n,i;return{c(){t=svg_element("svg"),s=svg_element("path"),o=svg_element("path"),n=svg_element("line"),i=text(`
    Edit`),this.h()},l(e){t=claim_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=children(t);s=claim_element(a,"path",{stroke:!0,d:!0,fill:!0},1),children(s).forEach(detach),o=claim_element(a,"path",{d:!0},1),children(o).forEach(detach),n=claim_element(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(n).forEach(detach),a.forEach(detach),i=claim_text(e,`
    Edit`),this.h()},h(){attr(s,"stroke","none"),attr(s,"d","M0 0h24v24H0z"),attr(s,"fill","none"),attr(o,"d","M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"),attr(n,"x1","13.5"),attr(n,"y1","6.5"),attr(n,"x2","17.5"),attr(n,"y2","10.5"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-pencil svelte-1gheos2"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,a){insert(e,t,a),append(t,s),append(t,o),append(t,n),insert(e,i,a)},d(e){e&&detach(t),e&&detach(i)}}}function create_if_block_5(){let t,n,s,o,i;return{c(){t=svg_element("svg"),n=svg_element("path"),s=svg_element("circle"),o=svg_element("path"),i=text(`
    View`),this.h()},l(e){t=claim_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=children(t);n=claim_element(a,"path",{stroke:!0,d:!0,fill:!0},1),children(n).forEach(detach),s=claim_element(a,"circle",{cx:!0,cy:!0,r:!0},1),children(s).forEach(detach),o=claim_element(a,"path",{d:!0},1),children(o).forEach(detach),a.forEach(detach),i=claim_text(e,`
    View`),this.h()},h(){attr(n,"stroke","none"),attr(n,"d","M0 0h24v24H0z"),attr(n,"fill","none"),attr(s,"cx","12"),attr(s,"cy","12"),attr(s,"r","2"),attr(o,"d","M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-eye svelte-1gheos2"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,a){insert(e,t,a),append(t,n),append(t,s),append(t,o),insert(e,i,a)},d(e){e&&detach(t),e&&detach(i)}}}function create_if_block_3(e){let l,O,s,_,v,g,R,c,b,r,n,j,E,x,p,z,C,D,A,N,a,t,y,d,m,h,u,F,k,M,S,T,i,o,w,L,H;const P=[create_if_block_4,create_else_block_1],f=[];function I(e){return e[5]==="library"?0:1}return i=I(e,[-1,-1]),o=f[i]=P[i](e),{c(){l=element("div"),O=element("div"),s=svg_element("svg"),_=svg_element("path"),v=svg_element("line"),g=svg_element("line"),R=space(),c=element("div"),b=element("div"),r=element("div"),n=svg_element("svg"),j=svg_element("path"),E=svg_element("path"),x=svg_element("polyline"),p=svg_element("line"),z=space(),C=element("span"),D=text("Upload"),N=space(),a=element("div"),t=svg_element("svg"),y=svg_element("path"),d=svg_element("rect"),m=svg_element("rect"),h=svg_element("rect"),u=svg_element("rect"),F=space(),k=element("span"),M=text("Library"),T=space(),o.c(),this.h()},l(e){l=claim_element(e,"DIV",{class:!0});var i,f,w,A,S,L,P,I,B,V,H=children(l);O=claim_element(H,"DIV",{class:!0}),I=children(O),s=claim_element(I,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),w=children(s),_=claim_element(w,"path",{stroke:!0,d:!0,fill:!0},1),children(_).forEach(detach),v=claim_element(w,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(v).forEach(detach),g=claim_element(w,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(g).forEach(detach),w.forEach(detach),I.forEach(detach),R=claim_space(H),c=claim_element(H,"DIV",{class:!0}),P=children(c),b=claim_element(P,"DIV",{class:!0}),A=children(b),r=claim_element(A,"DIV",{class:!0}),S=children(r),n=claim_element(S,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),f=children(n),j=claim_element(f,"path",{stroke:!0,d:!0,fill:!0},1),children(j).forEach(detach),E=claim_element(f,"path",{d:!0},1),children(E).forEach(detach),x=claim_element(f,"polyline",{points:!0},1),children(x).forEach(detach),p=claim_element(f,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(p).forEach(detach),f.forEach(detach),z=claim_space(S),C=claim_element(S,"SPAN",{}),B=children(C),D=claim_text(B,"Upload"),B.forEach(detach),S.forEach(detach),N=claim_space(A),a=claim_element(A,"DIV",{class:!0}),L=children(a),t=claim_element(L,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),i=children(t),y=claim_element(i,"path",{stroke:!0,d:!0,fill:!0},1),children(y).forEach(detach),d=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(d).forEach(detach),m=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(m).forEach(detach),h=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(h).forEach(detach),u=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(u).forEach(detach),i.forEach(detach),F=claim_space(L),k=claim_element(L,"SPAN",{}),V=children(k),M=claim_text(V,"Library"),V.forEach(detach),L.forEach(detach),A.forEach(detach),T=claim_space(P),o.l(P),P.forEach(detach),H.forEach(detach),this.h()},h(){attr(_,"stroke","none"),attr(_,"d","M0 0h24v24H0z"),attr(_,"fill","none"),attr(v,"x1","18"),attr(v,"y1","6"),attr(v,"x2","6"),attr(v,"y2","18"),attr(g,"x1","6"),attr(g,"y1","6"),attr(g,"x2","18"),attr(g,"y2","18"),attr(s,"xmlns","http://www.w3.org/2000/svg"),attr(s,"class","icon icon-tabler icon-tabler-x svelte-1gheos2"),attr(s,"width","35"),attr(s,"height","35"),attr(s,"viewBox","5 5 14 14"),attr(s,"stroke-width","1.5"),attr(s,"stroke","white"),attr(s,"fill","none"),attr(s,"stroke-linecap","round"),attr(s,"stroke-linejoin","round"),attr(O,"class","modal-close svelte-1gheos2"),attr(j,"stroke","none"),attr(j,"d","M0 0h24v24H0z"),attr(j,"fill","none"),attr(E,"d","M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"),attr(x,"points","7 9 12 4 17 9"),attr(p,"x1","12"),attr(p,"y1","4"),attr(p,"x2","12"),attr(p,"y2","16"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon icon-tabler icon-tabler-upload svelte-1gheos2"),attr(n,"width","30"),attr(n,"height","30"),attr(n,"viewBox","0 0 24 24"),attr(n,"stroke-width","1.5"),attr(n,"stroke","#2c3e50"),attr(n,"fill","none"),attr(n,"stroke-linecap","round"),attr(n,"stroke-linejoin","round"),attr(r,"class",A="selector "+(e[5]==="upload"?"active":"")+" svelte-1gheos2"),attr(y,"stroke","none"),attr(y,"d","M0 0h24v24H0z"),attr(y,"fill","none"),attr(d,"x","4"),attr(d,"y","4"),attr(d,"width","6"),attr(d,"height","6"),attr(d,"rx","1"),attr(m,"x","14"),attr(m,"y","4"),attr(m,"width","6"),attr(m,"height","6"),attr(m,"rx","1"),attr(h,"x","4"),attr(h,"y","14"),attr(h,"width","6"),attr(h,"height","6"),attr(h,"rx","1"),attr(u,"x","14"),attr(u,"y","14"),attr(u,"width","6"),attr(u,"height","6"),attr(u,"rx","1"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-layout-grid svelte-1gheos2"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(a,"class",S="selector "+(e[5]==="library"?"active":"")+" svelte-1gheos2"),attr(b,"class","selectors svelte-1gheos2"),attr(c,"class","modal svelte-1gheos2"),attr(l,"class","modal-wrapper svelte-1gheos2")},m(o,A){insert(o,l,A),append(l,O),append(O,s),append(s,_),append(s,v),append(s,g),append(l,R),append(l,c),append(c,b),append(b,r),append(r,n),append(n,j),append(n,E),append(n,x),append(n,p),append(r,z),append(r,C),append(C,D),append(b,N),append(b,a),append(a,t),append(t,y),append(t,d),append(t,m),append(t,h),append(t,u),append(a,F),append(a,k),append(k,M),append(c,T),f[i].m(c,null),w=!0,L||(H=[listen(r,"click",e[21]),listen(a,"click",e[22]),listen(c,"click",stop_propagation(e[19])),listen(l,"click",e[13])],L=!0)},p(e,t){(!w||t[0]&32&&A!==(A="selector "+(e[5]==="upload"?"active":"")+" svelte-1gheos2"))&&attr(r,"class",A),(!w||t[0]&32&&S!==(S="selector "+(e[5]==="library"?"active":"")+" svelte-1gheos2"))&&attr(a,"class",S);let n=i;i=I(e,t),i===n?f[i].p(e,t):(group_outros(),transition_out(f[n],1,1,()=>{f[n]=null}),check_outros(),o=f[i],o?o.p(e,t):(o=f[i]=P[i](e),o.c()),transition_in(o,1),o.m(c,null))},i(){if(w)return;transition_in(o),w=!0},o(){transition_out(o),w=!1},d(e){e&&detach(l),f[i].d(),L=!1,run_all(H)}}}function create_else_block_1(e){let t,o,i,a,r,s;function c(t){e[26](t)}function l(t){e[27](t)}function d(t){e[28](t)}function u(t){e[29](t)}let n={mediaPrefix:e[12]};return e[3]!==void 0&&(n.media=e[3]),e[9]!==void 0&&(n.changingMedia=e[9]),e[4]!==void 0&&(n.showMediaModal=e[4]),e[10]!==void 0&&(n.localMediaList=e[10]),t=new FileUpload({props:n}),binding_callbacks.push(()=>bind(t,"media",c)),binding_callbacks.push(()=>bind(t,"changingMedia",l)),binding_callbacks.push(()=>bind(t,"showMediaModal",d)),binding_callbacks.push(()=>bind(t,"localMediaList",u)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,n){mount_component(t,e,n),s=!0},p(e,n){const s={};!o&&n[0]&8&&(o=!0,s.media=e[3],add_flush_callback(()=>o=!1)),!i&&n[0]&512&&(i=!0,s.changingMedia=e[9],add_flush_callback(()=>i=!1)),!a&&n[0]&16&&(a=!0,s.showMediaModal=e[4],add_flush_callback(()=>a=!1)),!r&&n[0]&1024&&(r=!0,s.localMediaList=e[10],add_flush_callback(()=>r=!1)),t.$set(s)},i(e){if(s)return;transition_in(t.$$.fragment,e),s=!0},o(e){transition_out(t.$$.fragment,e),s=!1},d(e){destroy_component(t,e)}}}function create_if_block_4(e){let t,o,a,i,s;function r(t){e[23](t)}function c(t){e[24](t)}function l(t){e[25](t)}let n={};return e[3]!==void 0&&(n.media=e[3]),e[9]!==void 0&&(n.changingMedia=e[9]),e[4]!==void 0&&(n.showMediaModal=e[4]),t=new MediaBrowser({props:n}),binding_callbacks.push(()=>bind(t,"media",r)),binding_callbacks.push(()=>bind(t,"changingMedia",c)),binding_callbacks.push(()=>bind(t,"showMediaModal",l)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,n){mount_component(t,e,n),s=!0},p(e,n){const s={};!o&&n[0]&8&&(o=!0,s.media=e[3],add_flush_callback(()=>o=!1)),!a&&n[0]&512&&(a=!0,s.changingMedia=e[9],add_flush_callback(()=>a=!1)),!i&&n[0]&16&&(i=!0,s.showMediaModal=e[4],add_flush_callback(()=>i=!1)),t.$set(s)},i(e){if(s)return;transition_in(t.$$.fragment,e),s=!0},o(e){transition_out(t.$$.fragment,e),s=!1},d(e){destroy_component(t,e)}}}function create_if_block_2(e){let s,c,t,a,o,i,h,r,n,u,d,l,m,p;function g(t){e[30](t)}function v(t){e[31](t)}let f={env};return e[8]!==void 0&&(f.showAdd=e[8]),e[6]!==void 0&&(f.showEditor=e[6]),n=new AddContent({props:f}),binding_callbacks.push(()=>bind(n,"showAdd",g)),binding_callbacks.push(()=>bind(n,"showEditor",v)),{c(){s=element("div"),c=element("div"),t=svg_element("svg"),a=svg_element("path"),o=svg_element("line"),i=svg_element("line"),h=space(),r=element("div"),create_component(n.$$.fragment),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var l,u,m,d=children(s);c=claim_element(d,"DIV",{class:!0}),u=children(c),t=claim_element(u,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),l=children(t),a=claim_element(l,"path",{stroke:!0,d:!0,fill:!0},1),children(a).forEach(detach),o=claim_element(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(o).forEach(detach),i=claim_element(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(i).forEach(detach),l.forEach(detach),u.forEach(detach),h=claim_space(d),r=claim_element(d,"DIV",{class:!0}),m=children(r),claim_component(n.$$.fragment,m),m.forEach(detach),d.forEach(detach),this.h()},h(){attr(a,"stroke","none"),attr(a,"d","M0 0h24v24H0z"),attr(a,"fill","none"),attr(o,"x1","18"),attr(o,"y1","6"),attr(o,"x2","6"),attr(o,"y2","18"),attr(i,"x1","6"),attr(i,"y1","6"),attr(i,"x2","18"),attr(i,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x svelte-1gheos2"),attr(t,"width","35"),attr(t,"height","35"),attr(t,"viewBox","5 5 14 14"),attr(t,"stroke-width","1.5"),attr(t,"stroke","white"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(c,"class","modal-close svelte-1gheos2"),attr(r,"class","modal small svelte-1gheos2"),attr(s,"class","modal-wrapper svelte-1gheos2")},m(d,u){insert(d,s,u),append(s,c),append(c,t),append(t,a),append(t,o),append(t,i),append(s,h),append(s,r),mount_component(n,r,null),l=!0,m||(p=[listen(r,"click",stop_propagation(e[18])),listen(s,"click",e[32])],m=!0)},p(e,t){const s={};!u&&t[0]&256&&(u=!0,s.showAdd=e[8],add_flush_callback(()=>u=!1)),!d&&t[0]&64&&(d=!0,s.showEditor=e[6],add_flush_callback(()=>d=!1)),n.$set(s)},i(e){if(l)return;transition_in(n.$$.fragment,e),l=!0},o(e){transition_out(n.$$.fragment,e),l=!1},d(e){e&&detach(s),destroy_component(n),m=!1,run_all(p)}}}function create_if_block(e){let s,m,a,t,p,c,u,d,M,v,A,O,C,r,n,g,y,b,E,j,x,w,k,i,o,_,h,f,S,T;const F=[create_if_block_1,create_else_block],l=[];function z(e){return e[7]==="code"?0:1}return i=z(e,[-1,-1]),o=l[i]=F[i](e),{c(){s=element("div"),m=element("div"),a=element("div"),t=svg_element("svg"),p=svg_element("path"),c=svg_element("rect"),u=svg_element("line"),d=svg_element("line"),M=space(),v=element("span"),A=text("Visual"),C=space(),r=element("div"),n=svg_element("svg"),g=svg_element("path"),y=svg_element("path"),b=svg_element("path"),E=space(),j=element("span"),x=text("Code"),k=space(),o.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var i,l,h,f,_,O,S,w=children(s);m=claim_element(w,"DIV",{class:!0}),h=children(m),a=claim_element(h,"DIV",{class:!0}),f=children(a),t=claim_element(f,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),i=children(t),p=claim_element(i,"path",{stroke:!0,d:!0,fill:!0},1),children(p).forEach(detach),c=claim_element(i,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(c).forEach(detach),u=claim_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(u).forEach(detach),d=claim_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(d).forEach(detach),i.forEach(detach),M=claim_space(f),v=claim_element(f,"SPAN",{}),O=children(v),A=claim_text(O,"Visual"),O.forEach(detach),f.forEach(detach),C=claim_space(h),r=claim_element(h,"DIV",{class:!0}),_=children(r),n=claim_element(_,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),l=children(n),g=claim_element(l,"path",{stroke:!0,d:!0,fill:!0},1),children(g).forEach(detach),y=claim_element(l,"path",{d:!0},1),children(y).forEach(detach),b=claim_element(l,"path",{d:!0},1),children(b).forEach(detach),l.forEach(detach),E=claim_space(_),j=claim_element(_,"SPAN",{}),S=children(j),x=claim_text(S,"Code"),S.forEach(detach),_.forEach(detach),h.forEach(detach),k=claim_space(w),o.l(w),w.forEach(detach),this.h()},h(){attr(p,"stroke","none"),attr(p,"d","M0 0h24v24H0z"),attr(p,"fill","none"),attr(c,"x","4"),attr(c,"y","4"),attr(c,"width","16"),attr(c,"height","16"),attr(c,"rx","2"),attr(u,"x1","4"),attr(u,"y1","10"),attr(u,"x2","20"),attr(u,"y2","10"),attr(d,"x1","10"),attr(d,"y1","4"),attr(d,"x2","10"),attr(d,"y2","20"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-table svelte-1gheos2"),attr(t,"width","30"),attr(t,"height","30"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(a,"class",O="selector "+(e[7]==="visual"?"active":"")+" svelte-1gheos2"),attr(g,"stroke","none"),attr(g,"d","M0 0h24v24H0z"),attr(g,"fill","none"),attr(y,"d","M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2"),attr(b,"d","M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon icon-tabler icon-tabler-braces svelte-1gheos2"),attr(n,"width","30"),attr(n,"height","30"),attr(n,"viewBox","0 0 24 24"),attr(n,"stroke-width","1.5"),attr(n,"stroke","#2c3e50"),attr(n,"fill","none"),attr(n,"stroke-linecap","round"),attr(n,"stroke-linejoin","round"),attr(r,"class",w="selector "+(e[7]==="code"?"active":"")+" svelte-1gheos2"),attr(m,"class","selectors svelte-1gheos2"),attr(s,"class",_=""+(null_to_empty(e[6]?"sidenav":"")+" svelte-1gheos2"))},m(o,h){insert(o,s,h),append(s,m),append(m,a),append(a,t),append(t,p),append(t,c),append(t,u),append(t,d),append(a,M),append(a,v),append(v,A),append(m,C),append(m,r),append(r,n),append(n,g),append(n,y),append(n,b),append(r,E),append(r,j),append(j,x),append(s,k),l[i].m(s,null),f=!0,S||(T=[listen(a,"click",e[33]),listen(r,"click",e[34])],S=!0)},p(e,t){(!f||t[0]&128&&O!==(O="selector "+(e[7]==="visual"?"active":"")+" svelte-1gheos2"))&&attr(a,"class",O),(!f||t[0]&128&&w!==(w="selector "+(e[7]==="code"?"active":"")+" svelte-1gheos2"))&&attr(r,"class",w);let n=i;i=z(e,t),i===n?l[i].p(e,t):(group_outros(),transition_out(l[n],1,1,()=>{l[n]=null}),check_outros(),o=l[i],o?o.p(e,t):(o=l[i]=F[i](e),o.c()),transition_in(o,1),o.m(s,null)),(!f||t[0]&64&&_!==(_=""+(null_to_empty(e[6]?"sidenav":"")+" svelte-1gheos2")))&&attr(s,"class",_)},i(t){if(f)return;transition_in(o),t&&add_render_callback(()=>{h||(h=create_bidirectional_transition(s,e[17],{},!0)),h.run(1)}),f=!0},o(t){transition_out(o),t&&(h||(h=create_bidirectional_transition(s,e[17],{},!1)),h.run(0)),f=!1},d(e){e&&detach(s),l[i].d(),e&&h&&h.end(),S=!1,run_all(T)}}}function create_else_block(e){let t,c,o,i,a,r,s;function l(t){e[36](t)}function d(t){e[37](t)}function u(t){e[38](t)}function h(t){e[39](t)}function m(t){e[40](t)}let n={user:e[2]};return e[0]!==void 0&&(n.content=e[0]),e[4]!==void 0&&(n.showMediaModal=e[4]),e[9]!==void 0&&(n.changingMedia=e[9]),e[10]!==void 0&&(n.localMediaList=e[10]),e[1]!==void 0&&(n.shadowContent=e[1]),t=new VisualEditor({props:n}),binding_callbacks.push(()=>bind(t,"content",l)),binding_callbacks.push(()=>bind(t,"showMediaModal",d)),binding_callbacks.push(()=>bind(t,"changingMedia",u)),binding_callbacks.push(()=>bind(t,"localMediaList",h)),binding_callbacks.push(()=>bind(t,"shadowContent",m)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,n){mount_component(t,e,n),s=!0},p(e,n){const s={};n[0]&4&&(s.user=e[2]),!c&&n[0]&1&&(c=!0,s.content=e[0],add_flush_callback(()=>c=!1)),!o&&n[0]&16&&(o=!0,s.showMediaModal=e[4],add_flush_callback(()=>o=!1)),!i&&n[0]&512&&(i=!0,s.changingMedia=e[9],add_flush_callback(()=>i=!1)),!a&&n[0]&1024&&(a=!0,s.localMediaList=e[10],add_flush_callback(()=>a=!1)),!r&&n[0]&2&&(r=!0,s.shadowContent=e[1],add_flush_callback(()=>r=!1)),t.$set(s)},i(e){if(s)return;transition_in(t.$$.fragment,e),s=!0},o(e){transition_out(t.$$.fragment,e),s=!1},d(e){destroy_component(t,e)}}}function create_if_block_1(e){let t,s,n;function i(t){e[35](t)}let o={user:e[2]};return e[0]!==void 0&&(o.content=e[0]),t=new JSONEditor({props:o}),binding_callbacks.push(()=>bind(t,"content",i)),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const o={};n[0]&4&&(o.user=e[2]),!s&&n[0]&1&&(s=!0,o.content=e[0],add_flush_callback(()=>s=!1)),t.$set(o)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let E,L,a,b,r,x,S,z,X,J,U,l,H,V,D,W,f,i,w,_,g,j,q,B,h,o,y,v,u,M,F,G,Y,p,c,O,N,T,$,I,A,k,m,R,C,K,Z;function Q(e){return e[6]?create_if_block_5:create_else_block_2}let P=Q(e,[-1,-1]),d=P(e),t=e[4]&&create_if_block_3(e),n=e[8]&&create_if_block_2(e),s=e[6]&&create_if_block(e);return{c(){E=element("div"),L=space(),a=element("nav"),b=element("a"),r=svg_element("svg"),x=svg_element("path"),S=svg_element("polyline"),z=svg_element("path"),X=text(`
    Home`),U=space(),l=element("a"),d.c(),V=space(),D=element("span"),W=space(),f=element("a"),i=svg_element("svg"),w=svg_element("path"),_=svg_element("circle"),g=svg_element("line"),j=svg_element("line"),q=text(`
    Add`),B=space(),h=element("a"),o=svg_element("svg"),y=svg_element("path"),v=svg_element("line"),u=svg_element("rect"),M=svg_element("path"),F=svg_element("path"),G=text(`
    Media`),Y=space(),p=element("a"),c=svg_element("svg"),O=svg_element("path"),N=svg_element("path"),T=svg_element("path"),$=text(`
    Logout`),I=space(),t&&t.c(),A=space(),n&&n.c(),k=space(),m=element("div"),s&&s.c(),this.h()},l(e){E=claim_element(e,"DIV",{class:!0}),children(E).forEach(detach),L=claim_space(e),a=claim_element(e,"NAV",{class:!0});var R,P,H,K,Q,Z,J,C=children(a),te,ee,ne;b=claim_element(C,"A",{href:!0,class:!0}),J=children(b),r=claim_element(J,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),H=children(r),x=claim_element(H,"path",{stroke:!0,d:!0,fill:!0},1),children(x).forEach(detach),S=claim_element(H,"polyline",{points:!0},1),children(S).forEach(detach),z=claim_element(H,"path",{d:!0},1),children(z).forEach(detach),H.forEach(detach),X=claim_text(J,`
    Home`),J.forEach(detach),U=claim_space(C),l=claim_element(C,"A",{href:!0,class:!0}),te=children(l),d.l(te),te.forEach(detach),V=claim_space(C),D=claim_element(C,"SPAN",{class:!0}),children(D).forEach(detach),W=claim_space(C),f=claim_element(C,"A",{href:!0,class:!0}),Q=children(f),i=claim_element(Q,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),P=children(i),w=claim_element(P,"path",{stroke:!0,d:!0,fill:!0},1),children(w).forEach(detach),_=claim_element(P,"circle",{cx:!0,cy:!0,r:!0},1),children(_).forEach(detach),g=claim_element(P,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(g).forEach(detach),j=claim_element(P,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(j).forEach(detach),P.forEach(detach),q=claim_text(Q,`
    Add`),Q.forEach(detach),B=claim_space(C),h=claim_element(C,"A",{href:!0,class:!0}),Z=children(h),o=claim_element(Z,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),R=children(o),y=claim_element(R,"path",{stroke:!0,d:!0,fill:!0},1),children(y).forEach(detach),v=claim_element(R,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(v).forEach(detach),u=claim_element(R,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0},1),children(u).forEach(detach),M=claim_element(R,"path",{d:!0},1),children(M).forEach(detach),F=claim_element(R,"path",{d:!0},1),children(F).forEach(detach),R.forEach(detach),G=claim_text(Z,`
    Media`),Z.forEach(detach),Y=claim_space(C),p=claim_element(C,"A",{href:!0,class:!0}),ee=children(p),c=claim_element(ee,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),K=children(c),O=claim_element(K,"path",{stroke:!0,d:!0,fill:!0},1),children(O).forEach(detach),N=claim_element(K,"path",{d:!0},1),children(N).forEach(detach),T=claim_element(K,"path",{d:!0},1),children(T).forEach(detach),K.forEach(detach),$=claim_text(ee,`
    Logout`),ee.forEach(detach),C.forEach(detach),I=claim_space(e),t&&t.l(e),A=claim_space(e),n&&n.l(e),k=claim_space(e),m=claim_element(e,"DIV",{class:!0}),ne=children(m),s&&s.l(ne),ne.forEach(detach),this.h()},h(){attr(E,"class","spacer svelte-1gheos2"),attr(x,"stroke","none"),attr(x,"d","M0 0h24v24H0z"),attr(x,"fill","none"),attr(S,"points","5 12 3 12 12 3 21 12 19 12"),attr(z,"d","M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"),attr(r,"xmlns","http://www.w3.org/2000/svg"),attr(r,"class","icon icon-tabler icon-tabler-home-2 svelte-1gheos2"),attr(r,"width","30"),attr(r,"height","30"),attr(r,"viewBox","0 0 24 24"),attr(r,"stroke-width","2"),attr(r,"stroke","#2c3e50"),attr(r,"fill","none"),attr(r,"stroke-linecap","round"),attr(r,"stroke-linejoin","round"),attr(b,"href",J=env.baseurl?".":"/"),attr(b,"class","home svelte-1gheos2"),attr(l,"href","."),attr(l,"class",H=""+(null_to_empty(e[6]?"view":"edit")+" svelte-1gheos2")),attr(D,"class","gap svelte-1gheos2"),attr(w,"stroke","none"),attr(w,"d","M0 0h24v24H0z"),attr(w,"fill","none"),attr(_,"cx","12"),attr(_,"cy","12"),attr(_,"r","9"),attr(g,"x1","9"),attr(g,"y1","12"),attr(g,"x2","15"),attr(g,"y2","12"),attr(j,"x1","12"),attr(j,"y1","9"),attr(j,"x2","12"),attr(j,"y2","15"),attr(i,"xmlns","http://www.w3.org/2000/svg"),attr(i,"class","icon icon-tabler icon-tabler-circle-plus svelte-1gheos2"),attr(i,"width","30"),attr(i,"height","30"),attr(i,"viewBox","0 0 24 24"),attr(i,"stroke-width","2"),attr(i,"stroke","#2c3e50"),attr(i,"fill","none"),attr(i,"stroke-linecap","round"),attr(i,"stroke-linejoin","round"),attr(f,"href","."),attr(f,"class","add svelte-1gheos2"),attr(y,"stroke","none"),attr(y,"d","M0 0h24v24H0z"),attr(y,"fill","none"),attr(v,"x1","15"),attr(v,"y1","8"),attr(v,"x2","15.01"),attr(v,"y2","8"),attr(u,"x","4"),attr(u,"y","4"),attr(u,"width","16"),attr(u,"height","16"),attr(u,"rx","3"),attr(M,"d","M4 15l4 -4a3 5 0 0 1 3 0l5 5"),attr(F,"d","M14 14l1 -1a3 5 0 0 1 3 0l2 2"),attr(o,"xmlns","http://www.w3.org/2000/svg"),attr(o,"class","icon icon-tabler icon-tabler-photo svelte-1gheos2"),attr(o,"width","30"),attr(o,"height","30"),attr(o,"viewBox","0 0 24 24"),attr(o,"stroke-width","2"),attr(o,"stroke","#2c3e50"),attr(o,"fill","none"),attr(o,"stroke-linecap","round"),attr(o,"stroke-linejoin","round"),attr(h,"href","."),attr(h,"class","media svelte-1gheos2"),attr(O,"stroke","none"),attr(O,"d","M0 0h24v24H0z"),attr(O,"fill","none"),attr(N,"d","M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"),attr(T,"d","M7 12h14l-3 -3m0 6l3 -3"),attr(c,"xmlns","http://www.w3.org/2000/svg"),attr(c,"class","icon icon-tabler icon-tabler-logout svelte-1gheos2"),attr(c,"width","30"),attr(c,"height","30"),attr(c,"viewBox","0 0 24 24"),attr(c,"stroke-width","2"),attr(c,"stroke","#2c3e50"),attr(c,"fill","none"),attr(c,"stroke-linecap","round"),attr(c,"stroke-linejoin","round"),attr(p,"href","."),attr(p,"class","logout svelte-1gheos2"),attr(a,"class","admin-menu svelte-1gheos2"),attr(m,"class",R=""+(null_to_empty(e[6]?"sidenav-wrapper":"")+" svelte-1gheos2"))},m(R,P){insert(R,E,P),insert(R,L,P),insert(R,a,P),append(a,b),append(b,r),append(r,x),append(r,S),append(r,z),append(b,X),append(a,U),append(a,l),d.m(l,null),append(a,V),append(a,D),append(a,W),append(a,f),append(f,i),append(i,w),append(i,_),append(i,g),append(i,j),append(f,q),append(a,B),append(a,h),append(h,o),append(o,y),append(o,v),append(o,u),append(o,M),append(o,F),append(h,G),append(a,Y),append(a,p),append(p,c),append(c,O),append(c,N),append(c,T),append(p,$),insert(R,I,P),t&&t.m(R,P),insert(R,A,P),n&&n.m(R,P),insert(R,k,P),insert(R,m,P),s&&s.m(m,null),C=!0,K||(Z=[listen(l,"click",prevent_default(e[15])),listen(f,"click",prevent_default(e[20])),listen(h,"click",prevent_default(e[13])),listen(p,"click",prevent_default(function(){is_function(e[11].logout)&&e[11].logout.apply(this,arguments)}))],K=!0)},p(o,i){e=o,P!==(P=Q(e,i))&&(d.d(1),d=P(e),d&&(d.c(),d.m(l,null))),(!C||i[0]&64&&H!==(H=""+(null_to_empty(e[6]?"view":"edit")+" svelte-1gheos2")))&&attr(l,"class",H),e[4]?t?(t.p(e,i),i[0]&16&&transition_in(t,1)):(t=create_if_block_3(e),t.c(),transition_in(t,1),t.m(A.parentNode,A)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros()),e[8]?n?(n.p(e,i),i[0]&256&&transition_in(n,1)):(n=create_if_block_2(e),n.c(),transition_in(n,1),n.m(k.parentNode,k)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros()),e[6]?s?(s.p(e,i),i[0]&64&&transition_in(s,1)):(s=create_if_block(e),s.c(),transition_in(s,1),s.m(m,null)):s&&(group_outros(),transition_out(s,1,1,()=>{s=null}),check_outros()),(!C||i[0]&64&&R!==(R=""+(null_to_empty(e[6]?"sidenav-wrapper":"")+" svelte-1gheos2")))&&attr(m,"class",R)},i(){if(C)return;transition_in(t),transition_in(n),transition_in(s),C=!0},o(){transition_out(t),transition_out(n),transition_out(s),C=!1},d(e){e&&detach(E),e&&detach(L),e&&detach(a),d.d(),e&&detach(I),t&&t.d(e),e&&detach(A),n&&n.d(e),e&&detach(k),e&&detach(m),s&&s.d(),K=!1,run_all(Z)}}}function instance(e,t,n){let p,m=noop,j=()=>(m(),m=subscribe(u,e=>n(11,p=e)),u);e.$$.on_destroy.push(()=>m());let{user:u}=t,{content:i}=t,{shadowContent:d}=t;j();let b=env.baseurl?"":"/",c=allMedia.map(e=>b+e),s=!1;const x=()=>{n(4,s=!s),n(9,o="")};let g="upload";const f=e=>{n(5,g=e)};let a=!1;const w=()=>{n(6,a=!a)};let v="visual";const h=e=>{n(7,v=e)};let r=!1;const _=()=>({delay:0,duration:100,css:e=>"width: "+e*500+"px;"});let o="",l=[];function O(t){bubble.call(this,e,t)}function y(t){bubble.call(this,e,t)}const C=()=>{n(8,r=!0)},E=()=>f("upload"),k=()=>f("library");function A(e){c=e,n(3,c)}function S(e){o=e,n(9,o)}function M(e){s=e,n(4,s)}function F(e){c=e,n(3,c)}function T(e){o=e,n(9,o)}function z(e){s=e,n(4,s)}function D(e){l=e,n(10,l)}function N(e){r=e,n(8,r)}function L(e){a=e,n(6,a)}const R=()=>{n(8,r=!1)},P=()=>h("visual"),H=()=>h("code");function I(e){i=e,n(0,i)}function B(e){i=e,n(0,i)}function V(e){s=e,n(4,s)}function $(e){o=e,n(9,o)}function W(e){l=e,n(10,l)}function U(e){d=e,n(1,d)}return e.$$set=e=>{"user"in e&&j(n(2,u=e.user)),"content"in e&&n(0,i=e.content),"shadowContent"in e&&n(1,d=e.shadowContent)},[i,d,u,c,s,g,a,v,r,o,l,p,b,x,f,w,h,_,O,y,C,E,k,A,S,M,F,T,z,D,N,L,R,P,H,I,B,V,$,W,U]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{user:2,content:0,shadowContent:1},[-1,-1])}}export default Component