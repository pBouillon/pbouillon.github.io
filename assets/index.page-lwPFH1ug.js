var $e=o=>{throw TypeError(o)};var we=(o,t,e)=>t.has(o)||$e("Cannot "+e);var l=(o,t,e)=>(we(o,t,"read from private field"),e?e.call(o):t.get(o)),u=(o,t,e)=>t.has(o)?$e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),k=(o,t,e,n)=>(we(o,t,"write to private field"),n?n.call(o,e):t.set(o,e),e),ke=(o,t,e)=>(we(o,t,"access private method"),e);import{h as f,H as i,J as s,K as a,M as g,Q as Be,S as mt,U as it,ɵ as be,c as at,W as nt,X as ft,Y as gt,e as st,i as A,Z as ze,_ as w,$ as ot,a0 as Ve,a1 as vt,a2 as bt,a3 as yt,a4 as xt,k as h,B as wt,n as _,a5 as I,a6 as We,a7 as Ke,C as kt,a8 as St,a9 as Ct,aa as rt,ab as At,ac as It,ad as _t,ae as Et,af as Tt,ag as ye,ah as x,ai as S,aj as C,ak as ct,al as ce,am as Ot,N as Ft}from"./index-DVh4tazC.js";function qe(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function Pt(o,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function Ue(o,t,e){return t&&Pt(o.prototype,t),o}function Xe(o){return+o.replace(/px/,"")}function Nt(o){var t=window.devicePixelRatio,e=getComputedStyle(o),n=Xe(e.getPropertyValue("width")),r=Xe(e.getPropertyValue("height"));o.setAttribute("width",(n*t).toString()),o.setAttribute("height",(r*t).toString())}function y(o,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=Math.random()*(t-o)+o;return Math.floor(n*Math.pow(10,e))/Math.pow(10,e)}function Ge(o){return o[y(0,o.length)]}var Rt=.00125,Lt=5e-4,jt=9e-4,Dt=1e-5,Mt=6,Bt=80,zt=.9,Vt=1.7,qt=.2,Ut=.6,Ht=.03,$t=.07,Je=15,Ye=82,Wt=150,Kt=100,Xt=250,Gt=40,Jt=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function Ze(o){var t=1920;return Math.log(o)/Math.log(t)}var Qe=function(){function o(t){qe(this,o);var e=t.initialPosition,n=t.direction,r=t.confettiRadius,c=t.confettiColors,p=t.emojis,v=t.emojiSize,m=t.canvasWidth,b=y(zt,Vt,3),d=b*Ze(m);this.confettiSpeed={x:d,y:d},this.finalConfettiSpeedX=y(qt,Ut,3),this.rotationSpeed=p.length?.01:y(Ht,$t,3)*Ze(m),this.dragForceCoefficient=y(Lt,jt,6),this.radius={x:r,y:r},this.initialRadius=r,this.rotationAngle=n==="left"?y(0,.2,3):y(-.2,0,3),this.emojiSize=v,this.emojiRotationAngle=y(0,2*Math.PI),this.radiusYUpdateDirection="down";var E=n==="left"?y(Ye,Je)*Math.PI/180:y(-Je,-Ye)*Math.PI/180;this.absCos=Math.abs(Math.cos(E)),this.absSin=Math.abs(Math.sin(E));var q=y(-Wt,0),re={x:e.x+(n==="left"?-q:q)*this.absCos,y:e.y-q*this.absSin};this.currentPosition=Object.assign({},re),this.initialPosition=Object.assign({},re),this.color=p.length?null:Ge(c),this.emoji=p.length?Ge(p):null,this.createdAt=new Date().getTime(),this.direction=n}return Ue(o,[{key:"draw",value:function(e){var n=this.currentPosition,r=this.radius,c=this.color,p=this.emoji,v=this.rotationAngle,m=this.emojiRotationAngle,b=this.emojiSize,d=window.devicePixelRatio;c?(e.fillStyle=c,e.beginPath(),e.ellipse(n.x*d,n.y*d,r.x*d,r.y*d,v,0,2*Math.PI),e.fill()):p&&(e.font="".concat(b,"px serif"),e.save(),e.translate(d*n.x,d*n.y),e.rotate(m),e.textAlign="center",e.fillText(p,0,0),e.restore())}},{key:"updatePosition",value:function(e,n){var r=this.confettiSpeed,c=this.dragForceCoefficient,p=this.finalConfettiSpeedX,v=this.radiusYUpdateDirection,m=this.rotationSpeed,b=this.createdAt,d=this.direction,E=n-b;if(r.x>p&&(this.confettiSpeed.x-=c*e),this.currentPosition.x+=r.x*(d==="left"?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-r.y*this.absSin*E+Rt*Math.pow(E,2)/2,this.rotationSpeed-=this.emoji?1e-4:Dt*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI);return}v==="down"?(this.radius.y-=e*m,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*m,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+Kt}}]),o}();function Yt(){var o=document.createElement("canvas");return o.style.position="fixed",o.style.width="100%",o.style.height="100%",o.style.top="0",o.style.left="0",o.style.zIndex="1000",o.style.pointerEvents="none",document.body.appendChild(o),o}function Zt(o){var t=o.confettiRadius,e=t===void 0?Mt:t,n=o.confettiNumber,r=n===void 0?o.confettiesNumber||(o.emojis?Gt:Xt):n,c=o.confettiColors,p=c===void 0?Jt:c,v=o.emojis,m=v===void 0?o.emojies||[]:v,b=o.emojiSize,d=b===void 0?Bt:b;return o.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),o.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:e,confettiNumber:r,confettiColors:p,emojis:m,emojiSize:d}}var Qt=function(){function o(t){var e=this;qe(this,o),this.canvasContext=t,this.shapes=[],this.promise=new Promise(function(n){return e.resolvePromise=n})}return Ue(o,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return this.shapes.length?!1:((e=this.resolvePromise)===null||e===void 0||e.call(this),!0)}},{key:"processShapes",value:function(e,n,r){var c=this,p=e.timeDelta,v=e.currentTime;this.shapes=this.shapes.filter(function(m){return m.updatePosition(p,v),m.draw(c.canvasContext),r?m.getIsVisibleOnCanvas(n):!0})}}]),o}(),ei=function(){function o(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qe(this,o),this.activeConfettiBatches=[],this.canvas=t.canvas||Yt(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return Ue(o,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,Nt(this.canvas);var e=new Date().getTime(),n=e-this.lastUpdated,r=this.canvas.offsetHeight,c=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(p){return p.processShapes({timeDelta:n,currentTime:e},r,c),c?!p.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(e)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Zt(e),r=n.confettiRadius,c=n.confettiNumber,p=n.confettiColors,v=n.emojis,m=n.emojiSize,b=this.canvas.getBoundingClientRect(),d=b.width,E=b.height,q=E*5/7,re={x:0,y:q},ut={x:d,y:q},xe=new Qt(this.canvasContext),He=0;He<c/2;He++){var dt=new Qe({initialPosition:re,direction:"right",confettiRadius:r,confettiColors:p,confettiNumber:c,emojis:v,emojiSize:m,canvasWidth:d}),ht=new Qe({initialPosition:ut,direction:"left",confettiRadius:r,confettiColors:p,confettiNumber:c,emojis:v,emojiSize:m,canvasWidth:d});xe.addShapes(dt,ht)}return this.activeConfettiBatches.push(xe),this.queueAnimationFrameIfNeeded(),xe.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),o}();const ti=ei,U=class U{};U.ɵfac=function(e){return new(e||U)},U.ɵcmp=f({type:U,selectors:[["app-footer"]],decls:20,vars:0,consts:[[1,"py-8","text-sm","text-slate-400"],["href","https://analogjs.org",1,"external-link","text-slate-500"],["href","https://angular.dev",1,"external-link","text-slate-500"],["href","https://tailwindcss.com",1,"external-link","text-slate-500"],["href","https://rsms.me/inter/",1,"external-link","text-slate-500"],["href","https://code.visualstudio.com",1,"external-link","text-slate-500"],["href","https://github.com/pbouillon",1,"external-link","text-slate-500"]],template:function(e,n){e&1&&(i(0,"footer",0),s(1," Built with "),i(2,"a",1),s(3,"Analog"),a(),s(4," using "),i(5,"a",2),s(6,"Angular"),a(),s(7," and "),i(8,"a",3),s(9,"Tailwind CSS"),a(),s(10,". Text written with the "),i(11,"a",4),s(12,"Infer"),a(),s(13," font. Developed with "),i(14,"a",5),s(15,"VS Code"),a(),s(16,", hosted and deployed on "),i(17,"a",6),s(18,"GitHub"),a(),s(19,". "),a())},encapsulation:2,changeDetection:g.OnPush});let Se=U;const et=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],ii={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",a:"KeyA",b:"KeyB",A:"KeyA",B:"KeyB"};var J,pe,ue,lt;const H=class H{constructor(){u(this,ue);u(this,J);u(this,pe);k(this,J,Be([])),this.konamiCodeEntered=mt(),k(this,pe,it(()=>{const t=l(this,J).call(this);nt(()=>{ke(this,ue,lt).call(this,t,et)&&this.konamiCodeEntered.emit()})}))}handleKeyDown(t){const e=ii[t.key];l(this,J).update(n=>{const r=[...n,e];return r.length>et.length&&r.splice(0,1),r})}};J=new WeakMap,pe=new WeakMap,ue=new WeakSet,lt=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},H.ɵfac=function(e){return new(e||H)},H.ɵdir=be({type:H,selectors:[["","konamiCodeEntered",""]],hostBindings:function(e,n){e&1&&at("keydown",function(c){return n.handleKeyDown(c)},!1,ft)},outputs:{konamiCodeEntered:"konamiCodeEntered"}});let Ce=H;var Y,ie,de,pt;const T=class T{constructor(){u(this,de);u(this,Y);u(this,ie);k(this,Y,Be({})),k(this,ie,new IntersectionObserver(t=>{t.filter(e=>e.isIntersecting).forEach(e=>ke(this,de,pt).call(this,e.target.id,e.intersectionRatio))},{threshold:Array.from({length:10},(t,e)=>e/10)})),this.currentSection=gt(()=>{const t=l(this,Y).call(this);return Object.entries(t).sort((e,n)=>n[1]-e[1]).map(([e])=>e).at(0)||null})}trackSection(t){l(this,ie).observe(t.nativeElement)}};Y=new WeakMap,ie=new WeakMap,de=new WeakSet,pt=function(t,e){l(this,Y).update(n=>({...n,[t]:e}))},T.ɵfac=function(e){return new(e||T)},T.ɵprov=st({token:T,factory:T.ɵfac,providedIn:"root"});let le=T;var he,me;const $=class ${constructor(){u(this,he,A(le));u(this,me,A(ze))}ngAfterViewInit(){l(this,he).trackSection(l(this,me))}};he=new WeakMap,me=new WeakMap,$.ɵfac=function(e){return new(e||$)},$.ɵdir=be({type:$,selectors:[["","trackSectionVisibility",""]]});let ee=$;const O=class O{};O.ɵfac=function(e){return new(e||O)},O.ɵcmp=f({type:O,selectors:[["app-about-me"]],decls:16,vars:0,consts:[["trackSectionVisibility","","id","about",1,"mb-16","scroll-mt-16","md:mb-24","lg:mb-36","lg:scroll-mt-24","lg:text-lg"],[1,"sticky","top-0","z-20","-mx-6","mb-4","w-screen","px-6","py-5","backdrop-blur","md:-mx-12","md:px-12","lg:sr-only","lg:relative","lg:top-auto","lg:mx-auto","lg:w-full","lg:px-0","lg:py-0","lg:opacity-0"],[1,"text-sm","font-semibold","uppercase","tracking-widest"],[1,"mb-4"],["href","https://dev.to/pBouillon","target","_blank",1,"external-link"],["href","https://dev.to/t/angular","target","_blank",1,"external-link"]],template:function(e,n){e&1&&(i(0,"section",0)(1,"div",1)(2,"h2",2),s(3," About me "),a()(),i(4,"p",3),s(5," Since 2018, I have been working professionally as a Fullstack Software Engineer, creating platforms from the ground up. My experience spans the entire development process, including database design, backend development, and client-side application implementation. "),a(),i(6,"p",3),s(7," I'm trying to stay involve in tech beyond my regular tasks by conducting technical interviews, writing "),i(8,"a",4),s(9,"blog posts"),a(),s(10,", working as a temporary teacher in France, "),i(11,"a",5),s(12,"moderating Angular content"),a(),s(13," and, more recently started, to write a book for beginners in this technology. "),a(),i(14,"p",3),s(15," When I'm not coding, you will likely find me exploring remote places to enjoy nature, trekking with an overly heavy backpack, or learning useless (yet fascinating) facts. "),a()())},dependencies:w(O,[ee]),encapsulation:2,changeDetection:g.OnPush});let Ae=O;var ae,ne,fe;const W=class W{constructor(){u(this,ae);u(this,ne);u(this,fe);k(this,ae,A(ot)),k(this,ne,A(ze)),this.bootstrapIcon=Ve.required(),k(this,fe,it(()=>{const t=this.bootstrapIcon();nt(()=>{`bi bi-${t}`.split(" ").forEach(e=>l(this,ae).addClass(l(this,ne).nativeElement,e))})}))}};ae=new WeakMap,ne=new WeakMap,fe=new WeakMap,W.ɵfac=function(e){return new(e||W)},W.ɵdir=be({type:W,selectors:[["i","bootstrapIcon",""]],inputs:{bootstrapIcon:[1,"bootstrapIcon"]}});let te=W;function ai(o,t){if(o&1&&h(0,"img",10),o&2){const e=At();_("ngSrc",e.article().cover_image)("alt",e.article().title+"cover image")}}const F=class F{constructor(){this.article=Ve.required()}};F.ɵfac=function(e){return new(e||F)},F.ɵcmp=f({type:F,selectors:[["app-dev-community-article"]],inputs:{article:[1,"article"]},decls:21,vars:7,consts:[["target","_blank",1,"group/article",3,"href"],[1,"grid","gap-2","sm:grid-cols-12","items-center"],[1,"h-32","w-80","md:w-44","md:h-24","-translate-x-2","sm:col-span-4","sm:pt-3"],[1,"space-y-2","group-hover/article:text-teal-600","sm:col-span-7","sm:col-start-6"],[1,"text-base","font-semibold","capitalize"],[1,"text-sm","text-slate-500"],[1,"mt-2","flex","gap-5","sm:mt-4"],[1,"inline-flex","gap-2","text-xs","text-slate-500"],["bootstrapIcon","calendar"],["bootstrapIcon","hourglass-split"],["loading","lazy","fetchpriority","auto","fill","",1,"-translate-y-2","translate-x-2","rounded","border","border-teal-500","group-hover/article:-translate-y-2","group-hover/article:translate-x-2","group-hover/article:shadow-lg","group-hover/article:shadow-teal-500/50","lg:-translate-y-0","lg:translate-x-0","lg:transition-transform",3,"ngSrc","alt"]],template:function(e,n){e&1&&(i(0,"a",0)(1,"article",1)(2,"figure",2),vt(3,ai,1,2),bt(4,3),yt(),xt(),a(),i(6,"div",3)(7,"h3",4),s(8),a(),i(9,"p",5),s(10),a(),i(11,"div",6)(12,"div",7),h(13,"i",8),i(14,"p"),s(15),wt(16,"date"),a()(),i(17,"div",7),h(18,"i",9),i(19,"p"),s(20),a()()()()()()),e&2&&(_("href",n.article().url,rt),I(8),We(" ",n.article().title," "),I(2),Ke(n.article().description),I(5),Ke(kt(16,5,n.article().published_at)),I(5),We("",n.article().reading_time_minutes," min."))},dependencies:w(F,[St,te,Ct]),encapsulation:2,changeDetection:g.OnPush});let Ie=F;const ni="https://dev.to/api";var ge;const P=class P{constructor(){u(this,ge,A(It))}getWrittenArticles(t){return l(this,ge).get(`${ni}/articles?username=pbouillon&per_page=${t}`)}};ge=new WeakMap,P.ɵfac=function(e){return new(e||P)},P.ɵprov=st({token:P,factory:P.ɵfac,providedIn:"root"});let _e=P;const si=(o,t)=>t.title;function oi(o,t){if(o&1&&h(0,"app-dev-community-article",4),o&2){const e=t.$implicit;_("article",e)}}var se;const N=class N{constructor(){u(this,se);k(this,se,A(_e)),this.articles=Be(null)}ngAfterViewInit(){l(this,se).getWrittenArticles(5).pipe(_t()).subscribe(t=>this.articles.set(t))}};se=new WeakMap,N.ɵfac=function(e){return new(e||N)},N.ɵcmp=f({type:N,selectors:[["app-articles"]],decls:11,vars:0,consts:[["trackSectionVisibility","","id","articles",1,"mb-16","scroll-mt-16","md:mb-24","lg:mb-36","lg:scroll-mt-24","lg:text-lg"],[1,"sticky","top-0","z-20","-mx-6","mb-4","w-screen","px-6","py-5","backdrop-blur","md:-mx-12","md:px-12","lg:relative","lg:top-auto","lg:mx-auto","lg:w-full","lg:px-0"],[1,"text-sm","font-semibold","uppercase","tracking-widest"],[1,"group/articles","flex","flex-col","gap-16"],[3,"article"],["href","https://dev.to/pbouillon","target","_blank",1,"external-link","group/dev","mt-12","transition-all"],[1,"capitalize"],["bootstrapIcon","box-arrow-in-up-right",1,"ml-2","inline-block","group-hover/dev:-translate-y-px","group-hover/dev:translate-x-px"]],template:function(e,n){e&1&&(i(0,"section",0)(1,"div",1)(2,"h2",2),s(3," Articles "),a()(),i(4,"div",3),Et(5,oi,1,1,"app-dev-community-article",4,si),a(),i(7,"a",5)(8,"span",6),s(9,"Browse all articles on DEV"),a(),h(10,"i",7),a()()),e&2&&(I(5),Tt(n.articles()))},dependencies:w(N,[te,Ie,ee]),encapsulation:2,changeDetection:g.OnPush});let Ee=N;const ri=["*"],K=class K{};K.ɵfac=function(e){return new(e||K)},K.ɵcmp=f({type:K,selectors:[["app-pill"]],ngContentSelectors:ri,decls:2,vars:0,consts:[[1,"inline-flex","items-center","rounded-full","bg-teal-500/15","px-3","py-1","text-xs","font-semibold","tracking-tight","text-teal-600"]],template:function(e,n){e&1&&(ye(),i(0,"span",0),x(1),a())},encapsulation:2,changeDetection:g.OnPush});let Te=K;const ci=[[["","duration",""]],[["","company",""]],[["","role",""]],[["p"]],[["","frontend-technologies",""]],[["","backend-technologies",""]]],li=["[duration]","[company]","[role]","p","[frontend-technologies]","[backend-technologies]"],R=class R{constructor(){this.redirectTo=Ve.required()}};R.ɵfac=function(e){return new(e||R)},R.ɵcmp=f({type:R,selectors:[["app-experience-card"]],hostAttrs:[1,"block"],inputs:{redirectTo:[1,"redirectTo"]},ngContentSelectors:li,decls:21,vars:1,consts:[["target","_blank",1,"group/experience","relative","grid","transition-all","sm:grid-cols-8","sm:hover:!opacity-100","sm:group-hover/experiences:opacity-50",3,"href"],[1,"absolute","-inset-x-4","-inset-y-4","z-0","hidden","rounded-lg","bg-slate-300/10","shadow-inner","drop-shadow-lg","lg:group-hover/experience:block"],[1,"z-10","mb-2","mt-1","text-xs","font-semibold","uppercase","tracking-tight","text-slate-500","sm:col-span-2","lg:pr-3"],[1,"z-10","sm:col-span-6"],[1,"mb-2","font-semibold","leading-snug","text-slate-700"],[1,"group/header","hover:text-teal-600","lg:group-hover/experience:text-teal-600"],[1,"inline-flex","items-baseline","gap-2"],["bootstrapIcon","box-arrow-in-up-right",1,"animate","inline-block","translate-y-px","transition-transform","group-hover/header:-translate-y-px","group-hover/header:translate-x-px","lg:group-hover/experience:-translate-y-px","lg:group-hover/experience:translate-x-px"],[1,"mt-4","space-y-2"],[1,"grid","grid-cols-12","items-baseline"],["bootstrapIcon","laptop"],["bootstrapIcon","database-fill-gear"]],template:function(e,n){e&1&&(ye(ci),i(0,"a",0),h(1,"div",1),i(2,"span",2),x(3),a(),i(4,"section",3)(5,"h3",4)(6,"span",5)(7,"span"),x(8,1),s(9," · "),i(10,"span",6),x(11,2),h(12,"i",7),a()()()(),x(13,3),i(14,"div",8)(15,"div",9),h(16,"i",10),x(17,4),a(),i(18,"div",9),h(19,"i",11),x(20,5),a()()()()),e&2&&_("href",n.redirectTo(),rt)},dependencies:w(R,[te]),encapsulation:2,changeDetection:g.OnPush});let Oe=R;const L=class L{};L.ɵfac=function(e){return new(e||L)},L.ɵcmp=f({type:L,selectors:[["app-experience"]],decls:92,vars:0,consts:[["trackSectionVisibility","","id","experience",1,"mb-16","scroll-mt-16","md:mb-24","lg:mb-36","lg:scroll-mt-24","lg:text-lg"],[1,"sticky","top-0","z-20","-mx-6","mb-4","w-screen","px-6","py-5","backdrop-blur","md:-mx-12","md:px-12","lg:relative","lg:top-auto","lg:mx-auto","lg:w-full","lg:px-0"],[1,"text-sm","font-semibold","uppercase","tracking-widest"],[1,"group/experiences","space-y-12"],["redirectTo","https://www.lombardodier.com/"],["duration",""],["company",""],["role",""],[1,"mb-2"],["frontend-technologies",""],[1,"col-span-11","flex","flex-wrap","gap-2"],["backend-technologies",""],["redirectTo","https://www.docaposte.com/"],["routerLink","public/cv.pdf","target","_blank",1,"external-link","group/cv","mt-12","transition-all"],[1,"capitalize"],["bootstrapIcon","box-arrow-in-up-right",1,"ml-2","inline-block","group-hover/cv:-translate-y-px","group-hover/cv:translate-x-px"]],template:function(e,n){e&1&&(i(0,"section",0)(1,"div",1)(2,"h2",2),s(3," Experience "),a()(),i(4,"div",3)(5,"app-experience-card",4),S(6,5),s(7,"2021 — 2024"),C(),S(8,6),s(9,"Lombard Odier"),C(),S(10,7),s(11,"Fullstack Software Engineer"),C(),i(12,"p",8),s(13," Design, develop and maintain an audit management platform re-certifying internal company components and synchronizing information with third-party IT systems. Work closely with the involved business teams to implement their specific needs while growing the product. "),a(),S(14,9),i(15,"ul",10)(16,"li")(17,"app-pill"),s(18,"Angular"),a()(),i(19,"li")(20,"app-pill"),s(21,"NgRx"),a()(),i(22,"li")(23,"app-pill"),s(24,"TailwindCSS"),a()(),i(25,"li")(26,"app-pill"),s(27,"TypeScript"),a()()(),C(),S(28,11),i(29,"ul",10)(30,"li")(31,"app-pill"),s(32,".NET"),a()(),i(33,"li")(34,"app-pill"),s(35,"EF Core"),a()(),i(36,"li")(37,"app-pill"),s(38,"MediatR"),a()(),i(39,"li")(40,"app-pill"),s(41,"RoudhousE"),a()(),i(42,"li")(43,"app-pill"),s(44,"AutoFixture"),a()(),i(45,"li")(46,"app-pill"),s(47,"FluentAssertion"),a()(),i(48,"li")(49,"app-pill"),s(50,"SQL Server"),a()()(),C(),a(),i(51,"app-experience-card",12),S(52,5),s(53,"2018 — 2021"),C(),S(54,6),s(55,"Docaposte"),C(),S(56,7),s(57,"Fullstack Software Engineer"),C(),i(58,"p",8),s(59," Developed a comprehensive web application for a French region, enabling users to manage public service access cards, report card losses, and more. The goal was to create a digital experience for the customers and the operator instead of the paper procedures. "),a(),S(60,9),i(61,"ul",10)(62,"li")(63,"app-pill"),s(64,"Angular"),a()(),i(65,"li")(66,"app-pill"),s(67,"Bootstrap"),a()(),i(68,"li")(69,"app-pill"),s(70,"TypeScript"),a()()(),C(),S(71,11),i(72,"ul",10)(73,"li")(74,"app-pill"),s(75,".NET"),a()(),i(76,"li")(77,"app-pill"),s(78,"EF Core"),a()(),i(79,"li")(80,"app-pill"),s(81,"Moq"),a()(),i(82,"li")(83,"app-pill"),s(84,"FluentAssertions"),a()(),i(85,"li")(86,"app-pill"),s(87,"Postgres SQL"),a()()(),C(),a()(),i(88,"a",13)(89,"span",14),s(90,"View full résumé"),a(),h(91,"i",15),a()())},dependencies:w(L,[ct,Oe,Te,ee,te]),encapsulation:2,changeDetection:g.OnPush});let Fe=L;const j=class j{};j.ɵfac=function(e){return new(e||j)},j.ɵcmp=f({type:j,selectors:[["app-introduction"]],decls:10,vars:0,consts:[[1,"tracking-tight","text-slate-700"],[1,"text-4xl","font-bold","lg:text-5xl"],[1,"mt-3","text-xl","font-medium","tracking-tight","lg:text-2xl"],[1,"mt-4","max-w-xs","leading-normal","lg:mt-8","lg:text-lg"],[1,"mt-1","text-xs","text-slate-500","lg:mt-2"]],template:function(e,n){e&1&&(i(0,"div")(1,"hgroup",0)(2,"h1",1),s(3,"Pierre Bouillon"),a(),i(4,"h2",2),s(5," Fullstack Software Engineer "),a()(),i(6,"p",3),s(7," I transform ideas into code, creating efficient, client-centric, and business-focused applications. "),a(),i(8,"p",4),s(9,"I also drink coffee."),a()())},dependencies:w(j,[]),encapsulation:2,changeDetection:g.OnPush});let Pe=j;const D=class D{};D.ɵfac=function(e){return new(e||D)},D.ɵcmp=f({type:D,selectors:[["app-socials"]],decls:21,vars:0,consts:[[1,"flex","items-center","gap-4","text-2xl","lg:gap-6","lg:text-3xl"],["href","https://github.com/pBouillon","target","_blank","title","GitHub","aria-label","GitHub (opens in a new tab)",1,"transition","hover:text-teal-500"],[1,"bi","bi-github"],[1,"sr-only"],["href","https://linkedin.com/in/pierre-bouillon","target","_blank","title","LinkedIn","aria-label","LinkedIn (opens in a new tab)",1,"transition","hover:text-teal-500"],[1,"bi","bi-linkedin"],["href","cv.pdf","target","_blank","title","CV","aria-label","CV (opens in a new tab)",1,"transition","hover:text-teal-500"],[1,"bi","bi-file-earmark-person-fill"],["href","https://dev.to/pBouillon","target","_blank","title","DEV Community","aria-label","DEV Community (opens in a new tab)",1,"transition","hover:text-teal-500"],[1,"bi","bi-feather"]],template:function(e,n){e&1&&(i(0,"ul",0)(1,"li")(2,"a",1),h(3,"i",2),a(),i(4,"span",3),s(5,"GitHub"),a()(),i(6,"li")(7,"a",4),h(8,"i",5),a(),i(9,"span",3),s(10,"LinkedIn"),a()(),i(11,"li")(12,"a",6),h(13,"i",7),a(),i(14,"span",3),s(15,"CV"),a()(),i(16,"li")(17,"a",8),h(18,"i",9),a(),i(19,"span",3),s(20,"DEV Community"),a()()())},dependencies:w(D,[]),encapsulation:2,changeDetection:g.OnPush});let Ne=D;var Z,Q;const X=class X{constructor(){u(this,Z,A(ze));u(this,Q,A(ot))}ngAfterViewInit(){this.addClassesTo(l(this,Z).nativeElement,"group flex cursor-pointer items-center gap-4 text-xs font-bold uppercase tracking-widest");const t=l(this,Z).nativeElement.querySelector("span");this.addClassesTo(t,"transition-all group-hover:text-teal-500 group-[&.active]:text-teal-500");const e=l(this,Q).createElement("span");this.addClassesTo(e,"h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-teal-500 group-[&.active]:w-16 group-[&.active]:bg-teal-500"),l(this,Q).insertBefore(l(this,Z).nativeElement,e,t)}addClassesTo(t,e){e.split(" ").forEach(n=>l(this,Q).addClass(t,n))}};Z=new WeakMap,Q=new WeakMap,X.ɵfac=function(e){return new(e||X)},X.ɵdir=be({type:X,selectors:[["a","appNavLink",""]]});let Re=X;const M=class M{constructor(){this.activeSection=A(le),this.isActiveMatchOptions={fragment:"exact",matrixParams:"exact",paths:"exact",queryParams:"exact"}}};M.ɵfac=function(e){return new(e||M)},M.ɵcmp=f({type:M,selectors:[["app-sidenav"]],decls:18,vars:12,consts:[[1,"hidden","lg:block"],[1,"flex","flex-col","gap-5"],["appNavLink","","routerLink","","routerLinkActive","active","fragment","about",1,"w-fit",3,"routerLinkActiveOptions"],["appNavLink","","routerLink","","routerLinkActive","active","fragment","experience",1,"w-fit",3,"routerLinkActiveOptions"],["appNavLink","","routerLink","","routerLinkActive","active","fragment","education",1,"w-fit",3,"routerLinkActiveOptions"],["appNavLink","","routerLink","","routerLinkActive","active","fragment","articles",1,"w-fit",3,"routerLinkActiveOptions"]],template:function(e,n){e&1&&(i(0,"nav",0)(1,"ul",1)(2,"li")(3,"a",2)(4,"span"),s(5,"About"),a()()(),i(6,"li")(7,"a",3)(8,"span"),s(9,"Experience"),a()()(),i(10,"li")(11,"a",4)(12,"span"),s(13,"Education"),a()()(),i(14,"li")(15,"a",5)(16,"span"),s(17,"Articles"),a()()()()()),e&2&&(I(3),ce("active",n.activeSection.currentSection()==="about"),_("routerLinkActiveOptions",n.isActiveMatchOptions),I(4),ce("active",n.activeSection.currentSection()==="experience"),_("routerLinkActiveOptions",n.isActiveMatchOptions),I(4),ce("active",n.activeSection.currentSection()==="education"),_("routerLinkActiveOptions",n.isActiveMatchOptions),I(4),ce("active",n.activeSection.currentSection()==="articles"),_("routerLinkActiveOptions",n.isActiveMatchOptions))},dependencies:w(M,[ct,Ot,Re]),encapsulation:2,changeDetection:g.OnPush});let Le=M;const pi=[[["","graduation",""]],[["","degree",""]],[["","school",""]]],ui=["[graduation]","[degree]","[school]"],G=class G{};G.ɵfac=function(e){return new(e||G)},G.ɵcmp=f({type:G,selectors:[["app-education-timeline-item"]],hostAttrs:[1,"py-3"],ngContentSelectors:ui,decls:7,vars:0,consts:[[1,"absolute","-start-[7.5px]","mt-1.5","h-3.5","w-3.5","rounded-full","border-2","border-slate-100","bg-teal-400"],[1,"text-sm","text-gray-400"],[1,"text-gray-400"]],template:function(e,n){e&1&&(ye(pi),h(0,"span",0),i(1,"p",1),s(2," Graduated "),x(3),a(),x(4,1),i(5,"p",2),x(6,2),a())},encapsulation:2,changeDetection:g.OnPush});let je=G;const di=[[["app-education-timeline-item"]]],hi=["app-education-timeline-item"],B=class B{};B.ɵfac=function(e){return new(e||B)},B.ɵcmp=f({type:B,selectors:[["app-education-timeline"]],ngContentSelectors:hi,decls:2,vars:0,consts:[[1,"relative","flex","flex-col","gap-6","border-s","border-gray-300","ps-8"]],template:function(e,n){e&1&&(ye(di),i(0,"div",0),x(1),a())},dependencies:w(B,[]),encapsulation:2,changeDetection:g.OnPush});let De=B;const z=class z{};z.ɵfac=function(e){return new(e||z)},z.ɵcmp=f({type:z,selectors:[["app-education"]],decls:26,vars:0,consts:[["trackSectionVisibility","","id","education",1,"mb-16","scroll-mt-16","md:mb-24","lg:mb-36","lg:scroll-mt-24","lg:text-lg"],[1,"sticky","top-0","z-20","-mx-6","mb-4","w-screen","px-6","py-5","backdrop-blur","md:-mx-12","md:px-12","lg:relative","lg:top-auto","lg:mx-auto","lg:w-full","lg:px-0"],[1,"text-sm","font-semibold","uppercase","tracking-widest"],["graduation",""],["degree",""],["school",""]],template:function(e,n){e&1&&(i(0,"section",0)(1,"div",1)(2,"h2",2),s(3," Education "),a()(),i(4,"app-education-timeline")(5,"app-education-timeline-item")(6,"span",3),s(7,"2021"),a(),i(8,"p",4),s(9,"M.Sc. Computer Science"),a(),i(10,"p",5),s(11,"TELECOM Nancy, France"),a()(),i(12,"app-education-timeline-item")(13,"span",3),s(14,"2018, with honors"),a(),i(15,"p",4),s(16,"M.Sc. Computer Science"),a(),i(17,"p",5),s(18,"Université de Lorraine, France"),a()(),i(19,"app-education-timeline-item")(20,"span",3),s(21,"2017"),a(),i(22,"p",4),s(23,"B.Sc. Computer Science"),a(),i(24,"p",5),s(25,"Université de Belfort-Montbéliard, France"),a()()()())},dependencies:w(z,[ee,De,je]),encapsulation:2,changeDetection:g.OnPush});let Me=z;var ve,oe;const V=class V{constructor(){u(this,ve,A(Ft));u(this,oe,null)}ngAfterViewInit(){k(this,oe,new ti)}onKonamiCodeEntered(){l(this,ve).runOutsideAngular(()=>l(this,oe)?.addConfetti({emojis:["🦄","☕"]}))}};ve=new WeakMap,oe=new WeakMap,V.ɵfac=function(e){return new(e||V)},V.ɵcmp=f({type:V,selectors:[["ng-component"]],decls:12,vars:0,consts:[[1,"sticky","mx-auto","h-screen","max-w-screen-xl","px-6","py-12","md:px-12","md:py-20","lg:py-0",3,"konamiCodeEntered"],[1,"lg:flex","lg:justify-between"],[1,"lg:sticky","lg:top-0","lg:flex","lg:max-h-screen","lg:w-1/2","lg:flex-col","lg:justify-between","lg:py-24"],[1,"ml-1","mt-8"],[1,"pt-24","lg:w-1/2","lg:py-24"]],template:function(e,n){e&1&&(i(0,"div",0),at("konamiCodeEntered",function(){return n.onKonamiCodeEntered()}),i(1,"div",1)(2,"header",2),h(3,"app-introduction")(4,"app-sidenav")(5,"app-socials",3),a(),i(6,"main",4),h(7,"app-about-me")(8,"app-experience")(9,"app-education")(10,"app-articles")(11,"app-footer"),a()()())},dependencies:w(V,[Ae,Ee,Me,Fe,Se,Pe,Ce,Le,Ne]),encapsulation:2,changeDetection:g.OnPush});let tt=V;export{tt as default};