import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert,noop,safe_not_equal,set_data,set_style,space,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[3]=t[n],s}function create_each_block(e){let r,o,s,t,w,p,C,c,h=e[3].date+"",y,E,n,d,a,u=e[3].blog.title+"",g,v,O,l,m=e[3].blog.body+"",_,x,i,f=e[3].link.title+"",b,j,k;return{c(){r=element("li"),o=element("div"),s=element("div"),t=element("img"),C=space(),c=element("time"),y=text(h),E=space(),n=element("div"),d=element("h3"),a=element("a"),g=text(u),O=space(),l=element("p"),_=text(m),x=space(),i=element("a"),b=text(f),k=space(),this.h()},l(e){r=claim_element(e,"LI",{class:!0});var p,v,j,A,S,M,F,T,w=children(r);o=claim_element(w,"DIV",{class:!0}),v=children(o),s=claim_element(v,"DIV",{class:!0,style:!0}),j=children(s),t=claim_element(j,"IMG",{src:!0,width:!0,height:!0,loading:!0,alt:!0,class:!0}),C=claim_space(j),c=claim_element(j,"TIME",{class:!0,datetime:!0}),A=children(c),y=claim_text(A,h),A.forEach(detach),j.forEach(detach),E=claim_space(v),n=claim_element(v,"DIV",{class:!0}),p=children(n),d=claim_element(p,"H3",{class:!0}),S=children(d),a=claim_element(S,"A",{href:!0,class:!0}),M=children(a),g=claim_text(M,u),M.forEach(detach),S.forEach(detach),O=claim_space(p),l=claim_element(p,"P",{class:!0}),F=children(l),_=claim_text(F,m),F.forEach(detach),x=claim_space(p),i=claim_element(p,"A",{href:!0,class:!0}),T=children(i),b=claim_text(T,f),T.forEach(detach),p.forEach(detach),v.forEach(detach),k=claim_space(w),w.forEach(detach),this.h()},h(){t.src!==(w=e[3].image.url)&&attr(t,"src",w),attr(t,"width","440"),attr(t,"height","270"),attr(t,"loading","lazy"),attr(t,"alt",p=e[3].image.alt),attr(t,"class","img-cover"),attr(c,"class","card-meta"),attr(c,"datetime","2022-07-07"),attr(s,"class","card-banner img-holder"),set_style(s,"--width","440"),set_style(s,"--height","270"),attr(a,"href",v=e[3].blog.url),attr(a,"class","card-title"),attr(d,"class","h3"),attr(l,"class","card-text"),attr(i,"href",j=e[3].link.url),attr(i,"class","btn-link has-before"),attr(n,"class","card-content"),attr(o,"class","blog-card"),attr(r,"class","scrollbar-item")},m(e,u){insert(e,r,u),append(r,o),append(o,s),append(s,t),append(s,C),append(s,c),append(c,y),append(o,E),append(o,n),append(n,d),append(d,a),append(a,g),append(n,O),append(n,l),append(l,_),append(n,x),append(n,i),append(i,b),append(r,k)},p(e,n){n&4&&t.src!==(w=e[3].image.url)&&attr(t,"src",w),n&4&&p!==(p=e[3].image.alt)&&attr(t,"alt",p),n&4&&h!==(h=e[3].date+"")&&set_data(y,h),n&4&&u!==(u=e[3].blog.title+"")&&set_data(g,u),n&4&&v!==(v=e[3].blog.url)&&attr(a,"href",v),n&4&&m!==(m=e[3].blog.body+"")&&set_data(_,m),n&4&&f!==(f=e[3].link.title+"")&&set_data(b,f),n&4&&j!==(j=e[3].link.url)&&attr(i,"href",j)},d(e){e&&detach(r)}}}function create_fragment(e){let s,n,r,l,u,a,c,d,o,i=e[2],t=[];for(let n=0;n<i.length;n+=1)t[n]=create_each_block(get_each_context(e,i,n));return{c(){s=element("section"),n=element("div"),r=element("p"),l=text(e[1]),u=space(),a=element("h2"),c=text(e[0]),d=space(),o=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(i){s=claim_element(i,"SECTION",{class:!0,id:!0,"aria-label":!0});var h,m,f,p,g=children(s);n=claim_element(g,"DIV",{class:!0}),h=children(n),r=claim_element(h,"P",{class:!0}),m=children(r),l=claim_text(m,e[1]),m.forEach(detach),u=claim_space(h),a=claim_element(h,"H2",{class:!0}),f=children(a),c=claim_text(f,e[0]),f.forEach(detach),d=claim_space(h),o=claim_element(h,"UL",{class:!0}),p=children(o);for(let e=0;e<t.length;e+=1)t[e].l(p);p.forEach(detach),h.forEach(detach),g.forEach(detach),this.h()},h(){attr(r,"class","section-subtitle"),attr(a,"class","h2 section-title text-center"),attr(o,"class","blog-list has-scrollbar"),attr(n,"class","container"),attr(s,"class","section blog"),attr(s,"id","blog"),attr(s,"aria-label","blog")},m(e,i){insert(e,s,i),append(s,n),append(n,r),append(r,l),append(n,u),append(n,a),append(a,c),append(n,d),append(n,o);for(let e=0;e<t.length;e+=1)t[e].m(o,null)},p(e,[n]){if(n&2&&set_data(l,e[1]),n&1&&set_data(c,e[0]),n&4){i=e[2];let s;for(s=0;s<i.length;s+=1){const a=get_each_context(e,i,s);t[s]?t[s].p(a,n):(t[s]=create_each_block(a),t[s].c(),t[s].m(o,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},i:noop,o:noop,d(e){e&&detach(s),destroy_each(t,e)}}}function instance(e,t,n){let{title:s}=t,{subtitle:o}=t,{items:i}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"subtitle"in e&&n(1,o=e.subtitle),"items"in e&&n(2,i=e.items)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,subtitle:1,items:2})}}export default Component