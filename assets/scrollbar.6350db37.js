import{W as Ye,X as Je,P as Ke,y as fe,Q as Ze,Y as Qe,A as ve,r as h,z as de,b as I,J as he,Z as ge,o as B,p as pe,m as _e,i as et,v as tt,g as X,I as Y,n as J,_ as at,L as be,B as rt,$ as st,k as nt,f as ye,D as ot,q as it,F as lt,l as $e,S as ct}from"./vendor.1b4ef3c0.js";var G=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};class ut extends Error{constructor(t){super(t);this.name="ElementPlusError"}}function ft(e,t){throw new ut(`[${e}] ${t}`)}var me=typeof window=="undefined";function vt(){this.__data__=[],this.size=0}var dt=vt;function ht(e,t){return e===t||e!==e&&t!==t}var Te=ht,gt=Te;function pt(e,t){for(var a=e.length;a--;)if(gt(e[a][0],t))return a;return-1}var N=pt,_t=N,bt=Array.prototype,yt=bt.splice;function $t(e){var t=this.__data__,a=_t(t,e);if(a<0)return!1;var r=t.length-1;return a==r?t.pop():yt.call(t,a,1),--this.size,!0}var mt=$t,Tt=N;function St(e){var t=this.__data__,a=Tt(t,e);return a<0?void 0:t[a][1]}var wt=St,Ct=N;function At(e){return Ct(this.__data__,e)>-1}var jt=At,zt=N;function Ot(e,t){var a=this.__data__,r=zt(a,e);return r<0?(++this.size,a.push([e,t])):a[r][1]=t,this}var Lt=Ot,Et=dt,Ht=mt,Pt=wt,Mt=jt,Dt=Lt;function j(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}j.prototype.clear=Et;j.prototype.delete=Ht;j.prototype.get=Pt;j.prototype.has=Mt;j.prototype.set=Dt;var R=j,kt=R;function xt(){this.__data__=new kt,this.size=0}var It=xt;function Bt(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}var Gt=Bt;function Nt(e){return this.__data__.get(e)}var Rt=Nt;function Ft(e){return this.__data__.has(e)}var Ut=Ft,Wt=typeof G=="object"&&G&&G.Object===Object&&G,Se=Wt,qt=Se,Vt=typeof self=="object"&&self&&self.Object===Object&&self,Xt=qt||Vt||Function("return this")(),$=Xt,Yt=$,Jt=Yt.Symbol,K=Jt,we=K,Ce=Object.prototype,Kt=Ce.hasOwnProperty,Zt=Ce.toString,k=we?we.toStringTag:void 0;function Qt(e){var t=Kt.call(e,k),a=e[k];try{e[k]=void 0;var r=!0}catch{}var n=Zt.call(e);return r&&(t?e[k]=a:delete e[k]),n}var ea=Qt,ta=Object.prototype,aa=ta.toString;function ra(e){return aa.call(e)}var sa=ra,Ae=K,na=ea,oa=sa,ia="[object Null]",la="[object Undefined]",je=Ae?Ae.toStringTag:void 0;function ca(e){return e==null?e===void 0?la:ia:je&&je in Object(e)?na(e):oa(e)}var F=ca;function ua(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ze=ua,fa=F,va=ze,da="[object AsyncFunction]",ha="[object Function]",ga="[object GeneratorFunction]",pa="[object Proxy]";function _a(e){if(!va(e))return!1;var t=fa(e);return t==ha||t==ga||t==da||t==pa}var ba=_a,ya=$,$a=ya["__core-js_shared__"],ma=$a,Z=ma,Oe=function(){var e=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ta(e){return!!Oe&&Oe in e}var Sa=Ta,wa=Function.prototype,Ca=wa.toString;function Aa(e){if(e!=null){try{return Ca.call(e)}catch{}try{return e+""}catch{}}return""}var Le=Aa,ja=ba,za=Sa,Oa=ze,La=Le,Ea=/[\\^$.*+?()[\]{}|]/g,Ha=/^\[object .+?Constructor\]$/,Pa=Function.prototype,Ma=Object.prototype,Da=Pa.toString,ka=Ma.hasOwnProperty,xa=RegExp("^"+Da.call(ka).replace(Ea,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ia(e){if(!Oa(e)||za(e))return!1;var t=ja(e)?xa:Ha;return t.test(La(e))}var Ba=Ia;function Ga(e,t){return e==null?void 0:e[t]}var Na=Ga,Ra=Ba,Fa=Na;function Ua(e,t){var a=Fa(e,t);return Ra(a)?a:void 0}var z=Ua,Wa=z,qa=$,Va=Wa(qa,"Map"),Q=Va,Xa=z,Ya=Xa(Object,"create"),U=Ya,Ee=U;function Ja(){this.__data__=Ee?Ee(null):{},this.size=0}var Ka=Ja;function Za(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Qa=Za,er=U,tr="__lodash_hash_undefined__",ar=Object.prototype,rr=ar.hasOwnProperty;function sr(e){var t=this.__data__;if(er){var a=t[e];return a===tr?void 0:a}return rr.call(t,e)?t[e]:void 0}var nr=sr,or=U,ir=Object.prototype,lr=ir.hasOwnProperty;function cr(e){var t=this.__data__;return or?t[e]!==void 0:lr.call(t,e)}var ur=cr,fr=U,vr="__lodash_hash_undefined__";function dr(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=fr&&t===void 0?vr:t,this}var hr=dr,gr=Ka,pr=Qa,_r=nr,br=ur,yr=hr;function O(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}O.prototype.clear=gr;O.prototype.delete=pr;O.prototype.get=_r;O.prototype.has=br;O.prototype.set=yr;var $r=O,He=$r,mr=R,Tr=Q;function Sr(){this.size=0,this.__data__={hash:new He,map:new(Tr||mr),string:new He}}var wr=Sr;function Cr(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Ar=Cr,jr=Ar;function zr(e,t){var a=e.__data__;return jr(t)?a[typeof t=="string"?"string":"hash"]:a.map}var W=zr,Or=W;function Lr(e){var t=Or(this,e).delete(e);return this.size-=t?1:0,t}var Er=Lr,Hr=W;function Pr(e){return Hr(this,e).get(e)}var Mr=Pr,Dr=W;function kr(e){return Dr(this,e).has(e)}var xr=kr,Ir=W;function Br(e,t){var a=Ir(this,e),r=a.size;return a.set(e,t),this.size+=a.size==r?0:1,this}var Gr=Br,Nr=wr,Rr=Er,Fr=Mr,Ur=xr,Wr=Gr;function L(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}L.prototype.clear=Nr;L.prototype.delete=Rr;L.prototype.get=Fr;L.prototype.has=Ur;L.prototype.set=Wr;var Pe=L,qr=R,Vr=Q,Xr=Pe,Yr=200;function Jr(e,t){var a=this.__data__;if(a instanceof qr){var r=a.__data__;if(!Vr||r.length<Yr-1)return r.push([e,t]),this.size=++a.size,this;a=this.__data__=new Xr(r)}return a.set(e,t),this.size=a.size,this}var Kr=Jr,Zr=R,Qr=It,es=Gt,ts=Rt,as=Ut,rs=Kr;function E(e){var t=this.__data__=new Zr(e);this.size=t.size}E.prototype.clear=Qr;E.prototype.delete=es;E.prototype.get=ts;E.prototype.has=as;E.prototype.set=rs;var Ao=E,ss="__lodash_hash_undefined__";function ns(e){return this.__data__.set(e,ss),this}var os=ns;function is(e){return this.__data__.has(e)}var ls=is,cs=Pe,us=os,fs=ls;function q(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new cs;++t<a;)this.add(e[t])}q.prototype.add=q.prototype.push=us;q.prototype.has=fs;var vs=q;function ds(e,t){for(var a=-1,r=e==null?0:e.length;++a<r;)if(t(e[a],a,e))return!0;return!1}var hs=ds;function gs(e,t){return e.has(t)}var ps=gs,_s=vs,bs=hs,ys=ps,$s=1,ms=2;function Ts(e,t,a,r,n,s){var i=a&$s,o=e.length,u=t.length;if(o!=u&&!(i&&u>o))return!1;var v=s.get(e),_=s.get(t);if(v&&_)return v==t&&_==e;var d=-1,m=!0,w=a&ms?new _s:void 0;for(s.set(e,t),s.set(t,e);++d<o;){var b=e[d],g=t[d];if(r)var T=i?r(g,b,d,t,e,s):r(b,g,d,e,t,s);if(T!==void 0){if(T)continue;m=!1;break}if(w){if(!bs(t,function(l,p){if(!ys(w,p)&&(b===l||n(b,l,a,r,s)))return w.push(p)})){m=!1;break}}else if(!(b===g||n(b,g,a,r,s))){m=!1;break}}return s.delete(e),s.delete(t),m}var Ss=Ts,ws=$,Cs=ws.Uint8Array,As=Cs;function js(e){var t=-1,a=Array(e.size);return e.forEach(function(r,n){a[++t]=[n,r]}),a}var zs=js;function Os(e){var t=-1,a=Array(e.size);return e.forEach(function(r){a[++t]=r}),a}var Ls=Os,Me=K,De=As,Es=Te,Hs=Ss,Ps=zs,Ms=Ls,Ds=1,ks=2,xs="[object Boolean]",Is="[object Date]",Bs="[object Error]",Gs="[object Map]",Ns="[object Number]",Rs="[object RegExp]",Fs="[object Set]",Us="[object String]",Ws="[object Symbol]",qs="[object ArrayBuffer]",Vs="[object DataView]",ke=Me?Me.prototype:void 0,ee=ke?ke.valueOf:void 0;function Xs(e,t,a,r,n,s,i){switch(a){case Vs:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case qs:return!(e.byteLength!=t.byteLength||!s(new De(e),new De(t)));case xs:case Is:case Ns:return Es(+e,+t);case Bs:return e.name==t.name&&e.message==t.message;case Rs:case Us:return e==t+"";case Gs:var o=Ps;case Fs:var u=r&Ds;if(o||(o=Ms),e.size!=t.size&&!u)return!1;var v=i.get(e);if(v)return v==t;r|=ks,i.set(e,t);var _=Hs(o(e),o(t),r,n,s,i);return i.delete(e),_;case Ws:if(ee)return ee.call(e)==ee.call(t)}return!1}var jo=Xs;function Ys(e){return e!=null&&typeof e=="object"}var te=Ys,Js=F,Ks=te,Zs="[object Arguments]";function Qs(e){return Ks(e)&&Js(e)==Zs}var en=Qs,xe=en,tn=te,Ie=Object.prototype,an=Ie.hasOwnProperty,rn=Ie.propertyIsEnumerable,sn=xe(function(){return arguments}())?xe:function(e){return tn(e)&&an.call(e,"callee")&&!rn.call(e,"callee")},zo=sn,Be={exports:{}};function nn(){return!1}var on=nn;(function(e,t){var a=$,r=on,n=t&&!t.nodeType&&t,s=n&&!0&&e&&!e.nodeType&&e,i=s&&s.exports===n,o=i?a.Buffer:void 0,u=o?o.isBuffer:void 0,v=u||r;e.exports=v})(Be,Be.exports);var ln=9007199254740991;function cn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ln}var un=cn,fn=F,vn=un,dn=te,hn="[object Arguments]",gn="[object Array]",pn="[object Boolean]",_n="[object Date]",bn="[object Error]",yn="[object Function]",$n="[object Map]",mn="[object Number]",Tn="[object Object]",Sn="[object RegExp]",wn="[object Set]",Cn="[object String]",An="[object WeakMap]",jn="[object ArrayBuffer]",zn="[object DataView]",On="[object Float32Array]",Ln="[object Float64Array]",En="[object Int8Array]",Hn="[object Int16Array]",Pn="[object Int32Array]",Mn="[object Uint8Array]",Dn="[object Uint8ClampedArray]",kn="[object Uint16Array]",xn="[object Uint32Array]",c={};c[On]=c[Ln]=c[En]=c[Hn]=c[Pn]=c[Mn]=c[Dn]=c[kn]=c[xn]=!0;c[hn]=c[gn]=c[jn]=c[pn]=c[zn]=c[_n]=c[bn]=c[yn]=c[$n]=c[mn]=c[Tn]=c[Sn]=c[wn]=c[Cn]=c[An]=!1;function In(e){return dn(e)&&vn(e.length)&&!!c[fn(e)]}var Bn=In;function Gn(e){return function(t){return e(t)}}var Nn=Gn,ae={exports:{}};(function(e,t){var a=Se,r=t&&!t.nodeType&&t,n=r&&!0&&e&&!e.nodeType&&e,s=n&&n.exports===r,i=s&&a.process,o=function(){try{var u=n&&n.require&&n.require("util").types;return u||i&&i.binding&&i.binding("util")}catch{}}();e.exports=o})(ae,ae.exports);var Rn=Bn,Fn=Nn,Ge=ae.exports,Ne=Ge&&Ge.isTypedArray,Un=Ne?Fn(Ne):Rn,Oo=Un,Wn=z,qn=$,Vn=Wn(qn,"DataView"),Xn=Vn,Yn=z,Jn=$,Kn=Yn(Jn,"Promise"),Zn=Kn,Qn=z,eo=$,to=Qn(eo,"Set"),ao=to,ro=z,so=$,no=ro(so,"WeakMap"),oo=no,re=Xn,se=Q,ne=Zn,oe=ao,ie=oo,Re=F,H=Le,Fe="[object Map]",io="[object Object]",Ue="[object Promise]",We="[object Set]",qe="[object WeakMap]",Ve="[object DataView]",lo=H(re),co=H(se),uo=H(ne),fo=H(oe),vo=H(ie),C=Re;(re&&C(new re(new ArrayBuffer(1)))!=Ve||se&&C(new se)!=Fe||ne&&C(ne.resolve())!=Ue||oe&&C(new oe)!=We||ie&&C(new ie)!=qe)&&(C=function(e){var t=Re(e),a=t==io?e.constructor:void 0,r=a?H(a):"";if(r)switch(r){case lo:return Ve;case co:return Fe;case uo:return Ue;case fo:return We;case vo:return qe}return t});var Lo=C;const ho="Util";function go(e){const t={};for(let a=0;a<e.length;a++)e[a]&&Je(t,e[a]);return t}const Eo=(e,t="")=>{let a=e;return t.split(".").map(r=>{a=a==null?void 0:a[r]}),a};function Ho(e,t,a){let r=e,n,s;if(e&&Ze(e,t))n=t,s=r==null?void 0:r[t];else{t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");const i=t.split(".");let o=0;for(o;o<i.length-1&&!(!r&&!a);o++){const u=i[o];if(u in r)r=r[u];else{a&&ft(ho,"Please transfer a valid prop path to form item!");break}}n=i[o],s=r==null?void 0:r[i[o]]}return{o:r,k:n,v:s}}const Po=()=>Math.floor(Math.random()*1e4),Mo=(e="")=>String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),Do=e=>typeof e=="boolean",le=e=>typeof e=="number",ko=e=>Ye(e).startsWith("HTML");function xo(){const e=Ke();return"$ELEMENT"in e.proxy?e.proxy.$ELEMENT:{}}function P(e){return fe(e)?e:le(e)?`${e}px`:""}const ce=function(e){return(e||"").split(" ").filter(t=>!!t.trim())},x=function(e,t,a,r=!1){e&&t&&a&&(e==null||e.addEventListener(t,a,r))},M=function(e,t,a,r=!1){e&&t&&a&&(e==null||e.removeEventListener(t,a,r))},Io=function(e,t,a){const r=function(...n){a&&a.apply(this,n),M(e,t,r)};x(e,t,r)};function Bo(e,t){if(!e||!t)return!1;if(t.indexOf(" ")!==-1)throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(e.getAttribute("class")||"").split(" ").includes(t)}function Go(e,t){if(!e)return;let a=e.getAttribute("class")||"";const r=ce(a),n=(t||"").split(" ").filter(s=>!r.includes(s)&&!!s.trim());e.classList?e.classList.add(...n):(a+=` ${n.join(" ")}`,e.setAttribute("class",a))}function No(e,t){if(!e||!t)return;const a=ce(t);let r=e.getAttribute("class")||"";if(e.classList){e.classList.remove(...a);return}a.forEach(s=>{r=r.replace(` ${s} `," ")});const n=ce(r).join(" ");e.setAttribute("class",n)}const Ro=function(e,t){var a;if(me||!e||!t)return"";t=Qe(t),t==="float"&&(t="cssFloat");try{const r=e.style[t];if(r)return r;const n=(a=document.defaultView)==null?void 0:a.getComputedStyle(e,"");return n?n[t]:""}catch{return e.style[t]}},Fo=e=>e.stopPropagation(),po=function(e){for(const t of e){const a=t.target.__resizeListeners__||[];a.length&&a.forEach(r=>{r()})}},_o=function(e,t){me||!e||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new ResizeObserver(po),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},bo=function(e,t){var a;!e||!e.__resizeListeners__||(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(a=e.__ro__)==null||a.disconnect())},yo={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function $o({move:e,size:t,bar:a}){const r={},n=`translate${a.axis}(${e}%)`;return r[a.size]=t,r.transform=n,r.msTransform=n,r.webkitTransform=n,r}var ue=ve({name:"Bar",props:{vertical:Boolean,size:String,move:Number,ratio:Number,always:Boolean},setup(e){const t=h(null),a=h(null),r=de("scrollbar",{}),n=de("scrollbar-wrap",{}),s=I(()=>yo[e.vertical?"vertical":"horizontal"]),i=h({}),o=h(null),u=h(null),v=h(!1);let _=null;const d=I(()=>t.value[s.value.offset]**2/n.value[s.value.scrollSize]/e.ratio/a.value[s.value.offset]),m=f=>{f.stopPropagation(),!(f.ctrlKey||[1,2].includes(f.button))&&(window.getSelection().removeAllRanges(),b(f),i.value[s.value.axis]=f.currentTarget[s.value.offset]-(f[s.value.client]-f.currentTarget.getBoundingClientRect()[s.value.direction]))},w=f=>{const y=Math.abs(f.target.getBoundingClientRect()[s.value.direction]-f[s.value.client]),S=a.value[s.value.offset]/2,V=(y-S)*100*d.value/t.value[s.value.offset];n.value[s.value.scroll]=V*n.value[s.value.scrollSize]/100},b=f=>{f.stopImmediatePropagation(),o.value=!0,x(document,"mousemove",g),x(document,"mouseup",T),_=document.onselectstart,document.onselectstart=()=>!1},g=f=>{if(o.value===!1)return;const y=i.value[s.value.axis];if(!y)return;const S=(t.value.getBoundingClientRect()[s.value.direction]-f[s.value.client])*-1,V=a.value[s.value.offset]-y,Xe=(S-V)*100*d.value/t.value[s.value.offset];n.value[s.value.scroll]=Xe*n.value[s.value.scrollSize]/100},T=()=>{o.value=!1,i.value[s.value.axis]=0,M(document,"mousemove",g),M(document,"mouseup",T),document.onselectstart=_,u.value&&(v.value=!1)},l=I(()=>$o({size:e.size,move:e.move,bar:s.value})),p=()=>{u.value=!1,v.value=!!e.size},A=()=>{u.value=!0,v.value=o.value};return he(()=>{x(r.value,"mousemove",p),x(r.value,"mouseleave",A)}),ge(()=>{M(document,"mouseup",T),M(r.value,"mousemove",p),M(r.value,"mouseleave",A)}),{instance:t,thumb:a,bar:s,clickTrackHandler:w,clickThumbHandler:m,thumbStyle:l,visible:v}}});function mo(e,t,a,r,n,s){return B(),pe(at,{name:"el-scrollbar-fade"},{default:_e(()=>[et(X("div",{ref:"instance",class:J(["el-scrollbar__bar","is-"+e.bar.key]),onMousedown:t[1]||(t[1]=(...i)=>e.clickTrackHandler&&e.clickTrackHandler(...i))},[X("div",{ref:"thumb",class:"el-scrollbar__thumb",style:Y(e.thumbStyle),onMousedown:t[0]||(t[0]=(...i)=>e.clickThumbHandler&&e.clickThumbHandler(...i))},null,36)],34),[[tt,e.always||e.visible]])]),_:1})}ue.render=mo;ue.__file="packages/components/scrollbar/src/bar.vue";var D=ve({name:"ElScrollbar",components:{Bar:ue},props:{height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:{type:Boolean,default:!1},minSize:{type:Number,default:20}},emits:["scroll"],setup(e,{emit:t}){const a=h("0"),r=h("0"),n=h(0),s=h(0),i=h(null),o=h(null),u=h(null),v=h(1),_=h(1),d=4;be("scrollbar",i),be("scrollbar-wrap",o);const m=()=>{if(o.value){const l=o.value.offsetHeight-d,p=o.value.offsetWidth-d;s.value=o.value.scrollTop*100/l*v.value,n.value=o.value.scrollLeft*100/p*_.value,t("scroll",{scrollTop:o.value.scrollTop,scrollLeft:o.value.scrollLeft})}},w=l=>{!le(l)||(o.value.scrollTop=l)},b=l=>{!le(l)||(o.value.scrollLeft=l)},g=()=>{if(!o.value)return;const l=o.value.offsetHeight-d,p=o.value.offsetWidth-d,A=l**2/o.value.scrollHeight,f=p**2/o.value.scrollWidth,y=Math.max(A,e.minSize),S=Math.max(f,e.minSize);v.value=A/(l-A)/(y/(l-y)),_.value=f/(p-f)/(S/(p-S)),r.value=y+d<l?`${y}px`:"",a.value=S+d<p?`${S}px`:""},T=I(()=>{let l=e.wrapStyle;return st(l)?(l=go(l),l.height=P(e.height),l.maxHeight=P(e.maxHeight)):fe(l)&&(l+=P(e.height)?`height: ${P(e.height)};`:"",l+=P(e.maxHeight)?`max-height: ${P(e.maxHeight)};`:""),l});return he(()=>{e.native||rt(g),e.noresize||(_o(u.value,g),addEventListener("resize",g))}),ge(()=>{e.noresize||(bo(u.value,g),removeEventListener("resize",g))}),{moveX:n,moveY:s,ratioX:_,ratioY:v,sizeWidth:a,sizeHeight:r,style:T,scrollbar:i,wrap:o,resize:u,update:g,handleScroll:m,setScrollTop:w,setScrollLeft:b}}});const To={ref:"scrollbar",class:"el-scrollbar"};function So(e,t,a,r,n,s){const i=nt("bar");return B(),ye("div",To,[X("div",{ref:"wrap",class:J([e.wrapClass,"el-scrollbar__wrap",e.native?"":"el-scrollbar__wrap--hidden-default"]),style:Y(e.style),onScroll:t[0]||(t[0]=(...o)=>e.handleScroll&&e.handleScroll(...o))},[(B(),pe(it(e.tag),{ref:"resize",class:J(["el-scrollbar__view",e.viewClass]),style:Y(e.viewStyle)},{default:_e(()=>[ot(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?ct("v-if",!0):(B(),ye(lt,{key:0},[$e(i,{move:e.moveX,ratio:e.ratioX,size:e.sizeWidth,always:e.always},null,8,["move","ratio","size","always"]),$e(i,{move:e.moveY,ratio:e.ratioY,size:e.sizeHeight,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))],512)}D.render=So;D.__file="packages/components/scrollbar/src/index.vue";D.install=e=>{e.component(D.name,D)};const wo=D,Uo=wo;export{_o as A,bo as B,wo as C,Bo as D,Uo as E,Ro as F,Io as G,G as H,P as I,Ho as J,$ as _,Do as a,me as b,M as c,Go as d,F as e,te as f,ze as g,Po as h,le as i,ko as j,zo as k,Be as l,Oo as m,ba as n,x as o,un as p,Ao as q,No as r,Fo as s,ft as t,xo as u,Ss as v,jo as w,Lo as x,Eo as y,Mo as z};
//# sourceMappingURL=scrollbar.6350db37.js.map