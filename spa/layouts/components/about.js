import{HtmlTag,SvelteComponent,append,attr,children,claim_element,claim_html_tag,claim_space,claim_text,detach,element,init,insert,noop,safe_not_equal,set_data,space,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let c,l,i,s,T,F,K,n,M,S,q,t,H,k,U,o,A,R,B,r,p,C,$,f,P,V,_,O,d,h,v,a,z,D,Y,m,b,y=e[5]?.fields.name+"",N,I,g,w=e[5]?.fields.title+"",x,W,u,j=e[4].title+"",E,L;return{c(){c=element("section"),l=element("div"),i=element("div"),s=element("img"),K=space(),n=element("img"),q=space(),t=element("img"),U=space(),o=element("img"),B=space(),r=element("div"),p=element("p"),C=text(e[1]),$=space(),f=element("h2"),P=text(e[0]),V=space(),_=new HtmlTag,O=space(),d=element("div"),h=element("div"),v=element("figure"),a=element("img"),Y=space(),m=element("div"),b=element("h3"),N=text(y),I=space(),g=element("p"),x=text(w),W=space(),u=element("a"),E=text(j),this.h()},l(k){c=claim_element(k,"SECTION",{class:!0,id:!0,"aria-label":!0});var A,S,M,F,T,z,D,L,R,H,G,X,Q=children(c);l=claim_element(Q,"DIV",{class:!0}),F=children(l),i=claim_element(F,"DIV",{class:!0}),A=children(i),s=claim_element(A,"IMG",{src:!0,width:!0,height:!0,loading:!0,alt:!0,class:!0}),K=claim_space(A),n=claim_element(A,"IMG",{src:!0,width:!0,height:!0,loading:!0,"aria-hidden":!0,alt:!0,class:!0}),q=claim_space(A),t=claim_element(A,"IMG",{src:!0,width:!0,height:!0,loading:!0,"aria-hidden":!0,alt:!0,class:!0}),U=claim_space(A),o=claim_element(A,"IMG",{src:!0,width:!0,height:!0,loading:!0,alt:!0,class:!0}),A.forEach(detach),B=claim_space(F),r=claim_element(F,"DIV",{class:!0}),S=children(r),p=claim_element(S,"P",{class:!0}),H=children(p),C=claim_text(H,e[1]),H.forEach(detach),$=claim_space(S),f=claim_element(S,"H2",{class:!0}),L=children(f),P=claim_text(L,e[0]),L.forEach(detach),V=claim_space(S),_=claim_html_tag(S),O=claim_space(S),d=claim_element(S,"DIV",{class:!0}),M=children(d),h=claim_element(M,"DIV",{class:!0}),z=children(h),v=claim_element(z,"FIGURE",{class:!0}),R=children(v),a=claim_element(R,"IMG",{src:!0,width:!0,height:!0,loading:!0,alt:!0}),R.forEach(detach),Y=claim_space(z),m=claim_element(z,"DIV",{}),T=children(m),b=claim_element(T,"H3",{class:!0}),G=children(b),N=claim_text(G,y),G.forEach(detach),I=claim_space(T),g=claim_element(T,"P",{class:!0}),X=children(g),x=claim_text(X,w),X.forEach(detach),T.forEach(detach),z.forEach(detach),W=claim_space(M),u=claim_element(M,"A",{href:!0,class:!0}),D=children(u),E=claim_text(D,j),D.forEach(detach),M.forEach(detach),S.forEach(detach),F.forEach(detach),Q.forEach(detach),this.h()},h(){s.src!==(T=e[3].banner.url)&&attr(s,"src",T),attr(s,"width","660"),attr(s,"height","648"),attr(s,"loading","lazy"),attr(s,"alt",F=e[3].banner.alt),attr(s,"class","w-100"),n.src!==(M=e[3].circle1.url)&&attr(n,"src",M),attr(n,"width","660"),attr(n,"height","534"),attr(n,"loading","lazy"),attr(n,"aria-hidden","true"),attr(n,"alt",S=e[3].circle1.alt),attr(n,"class","circle circle-1"),t.src!==(H=e[3].circle2.url)&&attr(t,"src",H),attr(t,"width","660"),attr(t,"height","534"),attr(t,"loading","lazy"),attr(t,"aria-hidden","true"),attr(t,"alt",k=e[3].circle2.alt),attr(t,"class","circle circle-2"),o.src!==(A=e[3].fitness.url)&&attr(o,"src",A),attr(o,"width","650"),attr(o,"height","154"),attr(o,"loading","lazy"),attr(o,"alt",R=e[3].fitness.alt),attr(o,"class","abs-img w-100 svelte-mpfwxe"),attr(i,"class","about-banner has-after svelte-mpfwxe"),attr(p,"class","section-subtitle"),attr(f,"class","h2 section-title"),_.a=O,a.src!==(z=e[5]?.fields.image.src)&&attr(a,"src",z),attr(a,"width","65"),attr(a,"height","65"),attr(a,"loading","lazy"),attr(a,"alt",D=e[5]?.fields.image.alt),attr(v,"class","coach-avatar svelte-mpfwxe"),attr(b,"class","h3 coach-name svelte-mpfwxe"),attr(g,"class","coach-title svelte-mpfwxe"),attr(h,"class","about-coach svelte-mpfwxe"),attr(u,"href",L=e[4].url),attr(u,"class","btn btn-primary svelte-mpfwxe"),attr(d,"class","wrapper svelte-mpfwxe"),attr(r,"class","about-content svelte-mpfwxe"),attr(l,"class","container svelte-mpfwxe"),attr(c,"class","section about svelte-mpfwxe"),attr(c,"id","about"),attr(c,"aria-label","about")},m(j,y){insert(j,c,y),append(c,l),append(l,i),append(i,s),append(i,K),append(i,n),append(i,q),append(i,t),append(i,U),append(i,o),append(l,B),append(l,r),append(r,p),append(p,C),append(r,$),append(r,f),append(f,P),append(r,V),_.m(e[2],r),append(r,O),append(r,d),append(d,h),append(h,v),append(v,a),append(h,Y),append(h,m),append(m,b),append(b,N),append(m,I),append(m,g),append(g,x),append(d,W),append(d,u),append(u,E)},p(e,[i]){i&8&&s.src!==(T=e[3].banner.url)&&attr(s,"src",T),i&8&&F!==(F=e[3].banner.alt)&&attr(s,"alt",F),i&8&&n.src!==(M=e[3].circle1.url)&&attr(n,"src",M),i&8&&S!==(S=e[3].circle1.alt)&&attr(n,"alt",S),i&8&&t.src!==(H=e[3].circle2.url)&&attr(t,"src",H),i&8&&k!==(k=e[3].circle2.alt)&&attr(t,"alt",k),i&8&&o.src!==(A=e[3].fitness.url)&&attr(o,"src",A),i&8&&R!==(R=e[3].fitness.alt)&&attr(o,"alt",R),i&2&&set_data(C,e[1]),i&1&&set_data(P,e[0]),i&4&&_.p(e[2]),i&32&&a.src!==(z=e[5]?.fields.image.src)&&attr(a,"src",z),i&32&&D!==(D=e[5]?.fields.image.alt)&&attr(a,"alt",D),i&32&&y!==(y=e[5]?.fields.name+"")&&set_data(N,y),i&32&&w!==(w=e[5]?.fields.title+"")&&set_data(x,w),i&16&&j!==(j=e[4].title+"")&&set_data(E,j),i&16&&L!==(L=e[4].url)&&attr(u,"href",L)},i:noop,o:noop,d(e){e&&detach(c)}}}function instance(e,t,n){let i,{title:d}=t,{subtitle:a}=t,{body:r}=t,{coach:o}=t,{images:c}=t,{link:l}=t,{allContent:s}=t;return e.$$set=e=>{"title"in e&&n(0,d=e.title),"subtitle"in e&&n(1,a=e.subtitle),"body"in e&&n(2,r=e.body),"coach"in e&&n(6,o=e.coach),"images"in e&&n(3,c=e.images),"link"in e&&n(4,l=e.link),"allContent"in e&&n(7,s=e.allContent)},e.$$.update=()=>{if(e.$$.dirty&192)$:n(5,i=s.find(e=>e.type==="coaches"&&e.fields.name===o))},[d,a,r,c,l,i,o,s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,subtitle:1,body:2,coach:6,images:3,link:4,allContent:7})}}export default Component