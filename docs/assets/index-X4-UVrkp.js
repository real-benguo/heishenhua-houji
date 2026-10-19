(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const lo="180",Qc=0,Io=1,th=2,co=1,pr=2,Pi=3,Ui=0,Ne=1,_e=2,qi=0,On=1,Ce=2,Uo=3,ko=4,eh=5,hn=100,ih=101,nh=102,sh=103,ah=104,rh=200,oh=201,lh=202,ch=203,mr=204,gr=205,hh=206,dh=207,uh=208,fh=209,ph=210,mh=211,gh=212,vh=213,xh=214,vr=0,xr=1,_r=2,Bn=3,yr=4,br=5,Mr=6,wr=7,Jl=0,_h=1,yh=2,Xi=0,bh=1,Mh=2,wh=3,Ql=4,Sh=5,Eh=6,Th=7,tc=300,Hn=301,Gn=302,Sr=303,Er=304,ma=306,sa=1e3,un=1001,Tr=1002,hi=1003,Ah=1004,bs=1005,xi=1006,Sa=1007,fn=1008,bi=1009,ec=1010,ic=1011,cs=1012,ho=1013,pn=1014,Li=1015,ps=1016,uo=1017,fo=1018,hs=1020,nc=35902,sc=35899,ac=1021,rc=1022,ci=1023,ds=1026,us=1027,oc=1028,po=1029,lc=1030,mo=1031,go=1033,Ks=33776,Zs=33777,Js=33778,Qs=33779,Ar=35840,Cr=35841,Rr=35842,Pr=35843,Lr=36196,Dr=37492,Ir=37496,Ur=37808,kr=37809,Nr=37810,Fr=37811,Or=37812,zr=37813,Br=37814,Hr=37815,Gr=37816,Vr=37817,Wr=37818,qr=37819,Xr=37820,$r=37821,jr=36492,Yr=36494,Kr=36495,Zr=36283,Jr=36284,Qr=36285,to=36286,Ch=3200,Rh=3201,cc=0,Ph=1,Vi="",Be="srgb",Vn="srgb-linear",aa="linear",ae="srgb",vn=7680,No=519,Lh=512,Dh=513,Ih=514,hc=515,Uh=516,kh=517,Nh=518,Fh=519,eo=35044,Fo="300 es",_i=2e3,ra=2001;class qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,io=180/Math.PI;function $i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function Oh(s,t){return(s%t+t)%t}function Ta(s,t,e){return(1-e)*s+e*t}function vi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ms{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*v,S=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const A=Math.sqrt(w),C=Math.atan2(A,f*S);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const _=o*S;if(l=l*m+u*_,c=c*m+p*_,h=h*m+g*_,d=d*m+v*_,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(a/2),u=l(i/2),p=l(n/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-n)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+r)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(n+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+n*c-a*l,this._y=n*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,i=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),h=2*(o*e-a*n),d=2*(a*i-r*e);return this.x=e+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=n+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new E,Oo=new ms;class Gt{constructor(t,e,i,n,a,r,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c)}set(t,e,i,n,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],v=n[0],m=n[3],f=n[6],S=n[1],w=n[4],_=n[7],A=n[2],C=n[5],P=n[8];return a[0]=r*v+o*S+l*A,a[3]=r*m+o*w+l*C,a[6]=r*f+o*_+l*P,a[1]=c*v+h*S+d*A,a[4]=c*m+h*w+d*C,a[7]=c*f+h*_+d*P,a[2]=u*v+p*S+g*A,a[5]=u*m+p*w+g*C,a[8]=u*f+p*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*a*h+i*o*l+n*a*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,g=e*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*r)*v,t[3]=u*v,t[4]=(h*e-n*l)*v,t[5]=(n*a-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(r*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Gt;function dc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zh(){const s=oa("canvas");return s.style.display="block",s}const zo={};function fs(s){s in zo||(zo[s]=!0,console.warn(s))}function Bh(s,t,e){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const Bo=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hh(){const s={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(n,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ae&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(n.r=zn(n.r),n.g=zn(n.g),n.b=zn(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vi?aa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,r){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Vn]:{primaries:t,whitePoint:i,transfer:aa,toXYZ:Bo,fromXYZ:Ho,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Bo,fromXYZ:Ho,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),s}const te=Hh();function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xn;class Gh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xn===void 0&&(xn=oa("canvas")),xn.width=t.width,xn.height=t.height;const n=xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=xn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=Di(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vh=0;class vo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Ra(n[r].image)):a.push(Ra(n[r]))}else a=Ra(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ra(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wh=0;const Pa=new E;class We extends qn{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=un,n=un,a=xi,r=fn,o=ci,l=bi,c=We.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=$i(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=tc;We.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,n=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(p+1)/2,A=(f+1)/2,C=(h+u)/4,P=(d+v)/4,D=(g+m)/4;return w>_&&w>A?w<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(w),n=C/i,a=P/i):_>A?_<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(_),i=C/n,a=D/n):A<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(A),i=P/a,n=D/a),this.set(i,n,a,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qh extends qn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const n={width:t,height:e,depth:i.depth},a=new We(n);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new vo(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends qh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class uc extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xh extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(a,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yn),ws.subVectors(this.max,Yn),_n.subVectors(t.a,Yn),yn.subVectors(t.b,Yn),bn.subVectors(t.c,Yn),Fi.subVectors(yn,_n),Oi.subVectors(bn,yn),Ji.subVectors(_n,bn);let e=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-Ji.z,Ji.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,Ji.z,0,-Ji.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-Ji.y,Ji.x,0];return!La(e,_n,yn,bn,ws)||(e=[1,0,0,0,1,0,0,0,1],!La(e,_n,yn,bn,ws))?!1:(Ss.crossVectors(Fi,Oi),e=[Ss.x,Ss.y,Ss.z],La(e,_n,yn,bn,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ei=[new E,new E,new E,new E,new E,new E,new E,new E],ri=new E,Ms=new gs,_n=new E,yn=new E,bn=new E,Fi=new E,Oi=new E,Ji=new E,Yn=new E,ws=new E,Ss=new E,Qi=new E;function La(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){Qi.fromArray(s,a);const o=n.x*Math.abs(Qi.x)+n.y*Math.abs(Qi.y)+n.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $h=new gs,Kn=new E,Da=new E;class vs{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$h.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kn.subVectors(t,this.center);const e=Kn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Kn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kn.copy(t.center).add(Da)),this.expandByPoint(Kn.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ti=new E,Ia=new E,Es=new E,zi=new E,Ua=new E,Ts=new E,ka=new E;class xo{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ia.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(Ia);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Es),o=zi.dot(this.direction),l=-zi.dot(Es),c=zi.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ia).addScaledVector(Es,u),p}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const i=Ti.dot(this.direction),n=Ti.dot(Ti)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,n,a){Ua.subVectors(e,t),Ts.subVectors(i,t),ka.crossVectors(Ua,Ts);let r=this.direction.dot(ka),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;zi.subVectors(this.origin,t);const l=o*this.direction.dot(Ts.crossVectors(zi,Ts));if(l<0)return null;const c=o*this.direction.dot(Ua.cross(zi));if(c<0||l+c>r)return null;const h=-o*zi.dot(ka);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,n,a,r,o,l,c,h,d,u,p,g,v,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c,h,d,u,p,g,v,m)}set(t,e,i,n,a,r,o,l,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Mn.setFromMatrixColumn(t,0).length(),a=1/Mn.setFromMatrixColumn(t,1).length(),r=1/Mn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,p=r*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=v+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-r*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=v-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=r*l,p=r*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=r*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jh,t,Yh)}lookAt(t,e,i){const n=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Bi.crossVectors(i,Je),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Bi.crossVectors(i,Je)),Bi.normalize(),As.crossVectors(Je,Bi),n[0]=Bi.x,n[4]=As.x,n[8]=Je.x,n[1]=Bi.y,n[5]=As.y,n[9]=Je.y,n[2]=Bi.z,n[6]=As.z,n[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],w=i[7],_=i[11],A=i[15],C=n[0],P=n[4],D=n[8],M=n[12],b=n[1],L=n[5],N=n[9],H=n[13],j=n[2],X=n[6],$=n[10],J=n[14],G=n[3],ct=n[7],ft=n[11],Rt=n[15];return a[0]=r*C+o*b+l*j+c*G,a[4]=r*P+o*L+l*X+c*ct,a[8]=r*D+o*N+l*$+c*ft,a[12]=r*M+o*H+l*J+c*Rt,a[1]=h*C+d*b+u*j+p*G,a[5]=h*P+d*L+u*X+p*ct,a[9]=h*D+d*N+u*$+p*ft,a[13]=h*M+d*H+u*J+p*Rt,a[2]=g*C+v*b+m*j+f*G,a[6]=g*P+v*L+m*X+f*ct,a[10]=g*D+v*N+m*$+f*ft,a[14]=g*M+v*H+m*J+f*Rt,a[3]=S*C+w*b+_*j+A*G,a[7]=S*P+w*L+_*X+A*ct,a[11]=S*D+w*N+_*$+A*ft,a[15]=S*M+w*H+_*J+A*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+a*l*d-n*c*d-a*o*u+i*c*u+n*o*p-i*l*p)+v*(+e*l*p-e*c*u+a*r*u-n*r*p+n*c*h-a*l*h)+m*(+e*c*d-e*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+f*(-n*o*h-e*l*d+e*o*u+n*r*d-i*r*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],S=d*m*c-v*u*c+v*l*p-o*m*p-d*l*f+o*u*f,w=g*u*c-h*m*c-g*l*p+r*m*p+h*l*f-r*u*f,_=h*v*c-g*d*c+g*o*p-r*v*p-h*o*f+r*d*f,A=g*d*l-h*v*l-g*o*u+r*v*u+h*o*m-r*d*m,C=e*S+i*w+n*_+a*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=S*P,t[1]=(v*u*a-d*m*a-v*n*p+i*m*p+d*n*f-i*u*f)*P,t[2]=(o*m*a-v*l*a+v*n*c-i*m*c-o*n*f+i*l*f)*P,t[3]=(d*l*a-o*u*a-d*n*c+i*u*c+o*n*p-i*l*p)*P,t[4]=w*P,t[5]=(h*m*a-g*u*a+g*n*p-e*m*p-h*n*f+e*u*f)*P,t[6]=(g*l*a-r*m*a-g*n*c+e*m*c+r*n*f-e*l*f)*P,t[7]=(r*u*a-h*l*a+h*n*c-e*u*c-r*n*p+e*l*p)*P,t[8]=_*P,t[9]=(g*d*a-h*v*a-g*i*p+e*v*p+h*i*f-e*d*f)*P,t[10]=(r*v*a-g*o*a+g*i*c-e*v*c-r*i*f+e*o*f)*P,t[11]=(h*o*a-r*d*a-h*i*c+e*d*c+r*i*p-e*o*p)*P,t[12]=A*P,t[13]=(h*v*n-g*d*n+g*i*u-e*v*u-h*i*m+e*d*m)*P,t[14]=(g*o*n-r*v*n-g*i*l+e*v*l+r*i*m-e*o*m)*P,t[15]=(r*d*n-h*o*n+h*i*l-e*d*l-r*i*u+e*o*u)*P,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,g=a*d,v=r*h,m=r*d,f=o*d,S=l*c,w=l*h,_=l*d,A=i.x,C=i.y,P=i.z;return n[0]=(1-(v+f))*A,n[1]=(p+_)*A,n[2]=(g-w)*A,n[3]=0,n[4]=(p-_)*C,n[5]=(1-(u+f))*C,n[6]=(m+S)*C,n[7]=0,n[8]=(g+w)*P,n[9]=(m-S)*P,n[10]=(1-(u+v))*P,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Mn.set(n[0],n[1],n[2]).length();const r=Mn.set(n[4],n[5],n[6]).length(),o=Mn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],oi.copy(this);const c=1/a,h=1/r,d=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,e.setFromRotationMatrix(oi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=_i,l=!1){const c=this.elements,h=2*a/(e-t),d=2*a/(i-n),u=(e+t)/(e-t),p=(i+n)/(i-n);let g,v;if(l)g=a/(r-a),v=r*a/(r-a);else if(o===_i)g=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===ra)g=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=_i,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),p=-(i+n)/(i-n);let g,v;if(l)g=1/(r-a),v=r/(r-a);else if(o===_i)g=-2/(r-a),v=-(r+a)/(r-a);else if(o===ra)g=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mn=new E,oi=new ue,jh=new E(0,0,0),Yh=new E(1,1,1),Bi=new E,As=new E,Je=new E,Go=new ue,Vo=new ms;class Mi{constructor(t=0,e=0,i=0,n=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kh=0;const Wo=new E,wn=new ms,Ai=new ue,Cs=new E,Zn=new E,Zh=new E,Jh=new ms,qo=new E(1,0,0),Xo=new E(0,1,0),$o=new E(0,0,1),jo={type:"added"},Qh={type:"removed"},Sn={type:"childadded",child:null},Na={type:"childremoved",child:null};class Ae extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new E,e=new Mi,i=new ms,n=new E(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new Gt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.multiply(wn),this}rotateOnWorldAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.premultiply(wn),this}rotateX(t){return this.rotateOnAxis(qo,t)}rotateY(t){return this.rotateOnAxis(Xo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qo,t)}translateY(t){return this.translateOnAxis(Xo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cs.copy(t):Cs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Zn,Cs,this.up):Ai.lookAt(Cs,Zn,this.up),this.quaternion.setFromRotationMatrix(Ai),n&&(Ai.extractRotation(n.matrixWorld),wn.setFromRotationMatrix(Ai),this.quaternion.premultiply(wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jo),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qh),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jo),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ae.DEFAULT_UP=new E(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new E,Ci=new E,Fa=new E,Ri=new E,En=new E,Tn=new E,Yo=new E,Oa=new E,za=new E,Ba=new E,Ha=new le,Ga=new le,Va=new le;class ai{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),li.subVectors(t,e),n.cross(li);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){li.subVectors(n,e),Ci.subVectors(i,e),Fa.subVectors(t,e);const r=li.dot(li),o=li.dot(Ci),l=li.dot(Fa),c=Ci.dot(Ci),h=Ci.dot(Fa),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,n,a,r,o,l){return this.getBarycoord(t,e,i,n,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ri.x),l.addScaledVector(r,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(t,e,i,n,a,r){return Ha.setScalar(0),Ga.setScalar(0),Va.setScalar(0),Ha.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,i),Va.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(Ha,a.x),r.addScaledVector(Ga,a.y),r.addScaledVector(Va,a.z),r}static isFrontFacing(t,e,i,n){return li.subVectors(i,e),Ci.subVectors(t,e),li.cross(Ci).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),li.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,a){return ai.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;En.subVectors(n,i),Tn.subVectors(a,i),Oa.subVectors(t,i);const l=En.dot(Oa),c=Tn.dot(Oa);if(l<=0&&c<=0)return e.copy(i);za.subVectors(t,n);const h=En.dot(za),d=Tn.dot(za);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(En,r);Ba.subVectors(t,a);const p=En.dot(Ba),g=Tn.dot(Ba);if(g>=0&&p<=g)return e.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Tn,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Yo.subVectors(a,n),o=(d-h)/(d-h+(p-g)),e.copy(n).addScaledVector(Yo,o);const f=1/(m+v+u);return r=v*f,o=u*f,e.copy(i).addScaledVector(En,r).addScaledVector(Tn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Dt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Oh(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Wa(r,a,t+1/3),this.g=Wa(r,a,t),this.b=Wa(r,a,t-1/3)}return te.colorSpaceToWorking(this,n),this}setStyle(t,e=Be){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const i=pc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return te.workingToColorSpace(ze.copy(this),t),Math.round(jt(ze.r*255,0,255))*65536+Math.round(jt(ze.g*255,0,255))*256+Math.round(jt(ze.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(ze.copy(this),e);const i=ze.r,n=ze.g,a=ze.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-i)/d+2;break;case a:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Be){te.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,n=ze.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Rs);const i=Ta(Hi.h,Rs.h,e),n=Ta(Hi.s,Rs.s,e),a=Ta(Hi.l,Rs.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Dt;Dt.NAMES=pc;let td=0;class Yi extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=On,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vn,this.stencilZFail=vn,this.stencilZPass=vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mr&&(i.blendSrc=this.blendSrc),this.blendDst!==gr&&(i.blendDst=this.blendDst),this.blendEquation!==hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ye extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new E,Ps=new gt;let ed=0;class je{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=eo,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),a=re(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eo&&(t.usage=this.usage),t}}class mc extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gc extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ee extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}}let id=0;const ii=new ue,qa=new Ae,An=new E,Qe=new gs,Jn=new gs,De=new E;class Me extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?gc:mc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Gt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(An).negate(),this.translate(An.x,An.y,An.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ee(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Qe.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(Qe.min,Jn.min),Qe.expandByPoint(De),De.addVectors(Qe.max,Jn.max),Qe.expandByPoint(De)):(Qe.expandByPoint(Jn.min),Qe.expandByPoint(Jn.max))}Qe.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)De.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(De));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(An.fromBufferAttribute(t,c),De.add(An)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new E,l[D]=new E;const c=new E,h=new E,d=new E,u=new gt,p=new gt,g=new gt,v=new E,m=new E;function f(D,M,b){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),u.fromBufferAttribute(a,D),p.fromBufferAttribute(a,M),g.fromBufferAttribute(a,b),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(v),o[M].add(v),o[b].add(v),l[D].add(m),l[M].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,M=S.length;D<M;++D){const b=S[D],L=b.start,N=b.count;for(let H=L,j=L+N;H<j;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const w=new E,_=new E,A=new E,C=new E;function P(D){A.fromBufferAttribute(n,D),C.copy(A);const M=o[D];w.copy(M),w.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(C,M);const L=_.dot(l[D])<0?-1:1;r.setXYZW(D,w.x,w.y,w.z,L)}for(let D=0,M=S.length;D<M;++D){const b=S[D],L=b.start,N=b.count;for(let H=L,j=L+N;H<j;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new E,a=new E,r=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)n.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(n,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new ue,tn=new xo,Ls=new vs,Zo=new E,Ds=new E,Is=new E,Us=new E,Xa=new E,ks=new E,Jo=new E,Ns=new E;class Xt extends Ae{constructor(t=new Me,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){ks.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Xa.fromBufferAttribute(d,t),r?ks.addScaledVector(Xa,h):ks.addScaledVector(Xa.sub(e),h))}e.add(ks)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(a),tn.copy(t.ray).recast(t.near),!(Ls.containsPoint(tn.origin)===!1&&(tn.intersectSphere(Ls,Zo)===null||tn.origin.distanceToSquared(Zo)>(t.far-t.near)**2))&&(Ko.copy(a).invert(),tn.copy(t.ray).applyMatrix4(Ko),!(i.boundingBox!==null&&tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,tn)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,A=w;_<A;_+=3){const C=o.getX(_),P=o.getX(_+1),D=o.getX(_+2);n=Fs(this,f,t,i,c,h,d,C,P,D),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);n=Fs(this,r,t,i,c,h,d,S,w,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=S,A=w;_<A;_+=3){const C=_,P=_+1,D=_+2;n=Fs(this,f,t,i,c,h,d,C,P,D),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=m,w=m+1,_=m+2;n=Fs(this,r,t,i,c,h,d,S,w,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function nd(s,t,e,i,n,a,r,o){let l;if(t.side===Ne?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,t.side===Ui,o),l===null)return null;Ns.copy(o),Ns.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ns);return c<e.near||c>e.far?null:{distance:c,point:Ns.clone(),object:s}}function Fs(s,t,e,i,n,a,r,o,l,c){s.getVertexPosition(o,Ds),s.getVertexPosition(l,Is),s.getVertexPosition(c,Us);const h=nd(s,t,e,i,Ds,Is,Us,Jo);if(h){const d=new E;ai.getBarycoord(Jo,Ds,Is,Us,d),n&&(h.uv=ai.getInterpolatedAttribute(n,o,l,c,d,new gt)),a&&(h.uv1=ai.getInterpolatedAttribute(a,o,l,c,d,new gt)),r&&(h.normal=ai.getInterpolatedAttribute(r,o,l,c,d,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new E,materialIndex:0};ai.getNormal(Ds,Is,Us,u.normal),h.face=u,h.barycoord=d}return h}class Ue extends Me{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,a,4),g("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(v,m,f,S,w,_,A,C,P,D,M){const b=_/P,L=A/D,N=_/2,H=A/2,j=C/2,X=P+1,$=D+1;let J=0,G=0;const ct=new E;for(let ft=0;ft<$;ft++){const Rt=ft*L-H;for(let $t=0;$t<X;$t++){const he=$t*b-N;ct[v]=he*S,ct[m]=Rt*w,ct[f]=j,c.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[f]=C>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push($t/P),d.push(1-ft/D),J+=1}}for(let ft=0;ft<D;ft++)for(let Rt=0;Rt<P;Rt++){const $t=u+Rt+X*ft,he=u+Rt+X*(ft+1),pe=u+(Rt+1)+X*(ft+1),ie=u+(Rt+1)+X*ft;l.push($t,he,ie),l.push(he,pe,ie),G+=6}o.addGroup(p,G,M),p+=G,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const i=Wn(s[e]);for(const n in i)t[n]=i[n]}return t}function sd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function vc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ad={clone:Wn,merge:Ve};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wn(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new E,Qo=new gt,tl=new gt;class Xe extends xc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Qo,tl),e.subVectors(tl,Qo)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cn=-90,Rn=1;class ld extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xe(Cn,Rn,t,e);n.layers=this.layers,this.add(n);const a=new Xe(Cn,Rn,t,e);a.layers=this.layers,this.add(a);const r=new Xe(Cn,Rn,t,e);r.layers=this.layers,this.add(r);const o=new Xe(Cn,Rn,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Cn,Rn,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Cn,Rn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _c extends We{constructor(t=[],e=Hn,i,n,a,r,o,l,c,h){super(t,e,i,n,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cd extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new _c(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ue(5,5,5),a=new wi({name:"CubemapFromEquirect",uniforms:Wn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:qi});a.uniforms.tEquirect.value=e;const r=new Xt(n,a),o=e.minFilter;return e.minFilter===fn&&(e.minFilter=xi),new ld(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}class Zt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hd={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ga{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new ga(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yc extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eo,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,a=this.stride;n<a;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new E;class la{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),a=re(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new la(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bc extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pn;const Qn=new E,Ln=new E,Dn=new E,In=new gt,ts=new gt,Mc=new ue,Os=new E,es=new E,zs=new E,el=new gt,ja=new gt,il=new gt;class ud extends Ae{constructor(t=new bc){if(super(),this.isSprite=!0,this.type="Sprite",Pn===void 0){Pn=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dd(e,5);Pn.setIndex([0,1,2,0,2,3]),Pn.setAttribute("position",new la(i,3,0,!1)),Pn.setAttribute("uv",new la(i,2,3,!1))}this.geometry=Pn,this.material=t,this.center=new gt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ln.setFromMatrixScale(this.matrixWorld),Mc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Dn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ln.multiplyScalar(-Dn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const r=this.center;Bs(Os.set(-.5,-.5,0),Dn,r,Ln,n,a),Bs(es.set(.5,-.5,0),Dn,r,Ln,n,a),Bs(zs.set(.5,.5,0),Dn,r,Ln,n,a),el.set(0,0),ja.set(1,0),il.set(1,1);let o=t.ray.intersectTriangle(Os,es,zs,!1,Qn);if(o===null&&(Bs(es.set(-.5,.5,0),Dn,r,Ln,n,a),ja.set(0,1),o=t.ray.intersectTriangle(Os,zs,es,!1,Qn),o===null))return;const l=t.ray.origin.distanceTo(Qn);l<t.near||l>t.far||e.push({distance:l,point:Qn.clone(),uv:ai.getInterpolation(Qn,Os,es,zs,el,ja,il,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(s,t,e,i,n,a){In.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ts.x=a*In.x-n*In.y,ts.y=n*In.x+a*In.y):ts.copy(In),s.copy(t),s.x+=ts.x,s.y+=ts.y,s.applyMatrix4(Mc)}const Ya=new E,fd=new E,pd=new Gt;class on{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ya.subVectors(i,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ya),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pd.getNormalMatrix(t),n=this.coplanarPoint(Ya).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const en=new vs,md=new gt(.5,.5),Hs=new E;class _o{constructor(t=new on,e=new on,i=new on,n=new on,a=new on,r=new on){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i,i=!1){const n=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],p=a[7],g=a[8],v=a[9],m=a[10],f=a[11],S=a[12],w=a[13],_=a[14],A=a[15];if(n[0].setComponents(c-r,p-h,f-g,A-S).normalize(),n[1].setComponents(c+r,p+h,f+g,A+S).normalize(),n[2].setComponents(c+o,p+d,f+v,A+w).normalize(),n[3].setComponents(c-o,p-d,f-v,A-w).normalize(),i)n[4].setComponents(l,u,m,_).normalize(),n[5].setComponents(c-l,p-u,f-m,A-_).normalize();else if(n[4].setComponents(c-l,p-u,f-m,A-_).normalize(),e===_i)n[5].setComponents(c+l,p+u,f+m,A+_).normalize();else if(e===ra)n[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),en.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),en.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(en)}intersectsSprite(t){en.center.set(0,0,0);const e=md.distanceTo(t.center);return en.radius=.7071067811865476+e,en.applyMatrix4(t.matrixWorld),this.intersectsSphere(en)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Hs.x=n.normal.x>0?t.max.x:t.min.x,Hs.y=n.normal.y>0?t.max.y:t.min.y,Hs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wc extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ca=new E,ha=new E,nl=new ue,is=new xo,Gs=new vs,Ka=new E,sl=new E;class gd extends Ae{constructor(t=new Me,e=new wc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,a=e.count;n<a;n++)ca.fromBufferAttribute(e,n-1),ha.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ca.distanceTo(ha);t.setAttribute("lineDistance",new ee(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(n),Gs.radius+=a,t.ray.intersectsSphere(Gs)===!1)return;nl.copy(n).invert(),is.copy(t.ray).applyMatrix4(nl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),S=h.getX(v+1),w=Vs(this,t,is,l,f,S,v);w&&e.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Vs(this,t,is,l,v,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const f=Vs(this,t,is,l,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=Vs(this,t,is,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Vs(s,t,e,i,n,a,r){const o=s.geometry.attributes.position;if(ca.fromBufferAttribute(o,n),ha.fromBufferAttribute(o,a),e.distanceSqToSegment(ca,ha,Ka,sl)>i)return;Ka.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ka);if(!(c<t.near||c>t.far))return{distance:c,point:sl.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}class yo extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const al=new ue,no=new xo,Ws=new vs,qs=new E;class Sc extends Ae{constructor(t=new Me,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(n),Ws.radius+=a,t.ray.intersectsSphere(Ws)===!1)return;al.copy(n).invert(),no.copy(t.ray).applyMatrix4(al);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,v=p;g<v;g++){const m=c.getX(g);qs.fromBufferAttribute(d,m),rl(qs,m,l,n,t,e,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,v=p;g<v;g++)qs.fromBufferAttribute(d,g),rl(qs,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function rl(s,t,e,i,n,a,r){const o=no.distanceSqToPoint(s);if(o<e){const l=new E;no.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class bo extends We{constructor(t,e,i,n,a,r,o,l,c){super(t,e,i,n,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ec extends We{constructor(t,e,i=pn,n,a,r,o=hi,l=hi,c,h=ds,d=1){if(h!==ds&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tc extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xs extends Me{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new E,h=new gt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=i+d/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ee extends Me{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=i/2;let f=0;S(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(p,2));function S(){const _=new E,A=new E;let C=0;const P=(e-t)/i;for(let D=0;D<=a;D++){const M=[],b=D/a,L=b*(e-t)+t;for(let N=0;N<=n;N++){const H=N/n,j=H*l+o,X=Math.sin(j),$=Math.cos(j);A.x=L*X,A.y=-b*i+m,A.z=L*$,d.push(A.x,A.y,A.z),_.set(X,P,$).normalize(),u.push(_.x,_.y,_.z),p.push(H,1-b),M.push(g++)}v.push(M)}for(let D=0;D<n;D++)for(let M=0;M<a;M++){const b=v[M][D],L=v[M+1][D],N=v[M+1][D+1],H=v[M][D+1];(t>0||M!==0)&&(h.push(b,L,H),C+=3),(e>0||M!==a-1)&&(h.push(L,N,H),C+=3)}c.addGroup(f,C,0),f+=C}function w(_){const A=g,C=new gt,P=new E;let D=0;const M=_===!0?t:e,b=_===!0?1:-1;for(let N=1;N<=n;N++)d.push(0,m*b,0),u.push(0,b,0),p.push(.5,.5),g++;const L=g;for(let N=0;N<=n;N++){const j=N/n*l+o,X=Math.cos(j),$=Math.sin(j);P.x=M*$,P.y=m*b,P.z=M*X,d.push(P.x,P.y,P.z),u.push(0,b,0),C.x=X*.5+.5,C.y=$*.5*b+.5,p.push(C.x,C.y),g++}for(let N=0;N<n;N++){const H=A+N,j=L+N;_===!0?h.push(j,j+1,H):h.push(j+1,j,H),D+=3}c.addGroup(f,D,_===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ki extends Ee{constructor(t=1,e=1,i=32,n=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new ki(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xn extends Me{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),c(i),h(),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(a.slice(),3)),this.setAttribute("uv",new ee(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new E,_=new E,A=new E;for(let C=0;C<e.length;C+=3)p(e[C+0],w),p(e[C+1],_),p(e[C+2],A),l(w,_,A,S)}function l(S,w,_,A){const C=A+1,P=[];for(let D=0;D<=C;D++){P[D]=[];const M=S.clone().lerp(_,D/C),b=w.clone().lerp(_,D/C),L=C-D;for(let N=0;N<=L;N++)N===0&&D===C?P[D][N]=M:P[D][N]=M.clone().lerp(b,N/L)}for(let D=0;D<C;D++)for(let M=0;M<2*(C-D)-1;M++){const b=Math.floor(M/2);M%2===0?(u(P[D][b+1]),u(P[D+1][b]),u(P[D][b])):(u(P[D][b+1]),u(P[D+1][b+1]),u(P[D+1][b]))}}function c(S){const w=new E;for(let _=0;_<a.length;_+=3)w.x=a[_+0],w.y=a[_+1],w.z=a[_+2],w.normalize().multiplyScalar(S),a[_+0]=w.x,a[_+1]=w.y,a[_+2]=w.z}function h(){const S=new E;for(let w=0;w<a.length;w+=3){S.x=a[w+0],S.y=a[w+1],S.z=a[w+2];const _=m(S)/2/Math.PI+.5,A=f(S)/Math.PI+.5;r.push(_,1-A)}g(),d()}function d(){for(let S=0;S<r.length;S+=6){const w=r[S+0],_=r[S+2],A=r[S+4],C=Math.max(w,_,A),P=Math.min(w,_,A);C>.9&&P<.1&&(w<.2&&(r[S+0]+=1),_<.2&&(r[S+2]+=1),A<.2&&(r[S+4]+=1))}}function u(S){a.push(S.x,S.y,S.z)}function p(S,w){const _=S*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const S=new E,w=new E,_=new E,A=new E,C=new gt,P=new gt,D=new gt;for(let M=0,b=0;M<a.length;M+=9,b+=6){S.set(a[M+0],a[M+1],a[M+2]),w.set(a[M+3],a[M+4],a[M+5]),_.set(a[M+6],a[M+7],a[M+8]),C.set(r[b+0],r[b+1]),P.set(r[b+2],r[b+3]),D.set(r[b+4],r[b+5]),A.copy(S).add(w).add(_).divideScalar(3);const L=m(A);v(C,b+0,S,L),v(P,b+2,w,L),v(D,b+4,_,L)}}function v(S,w,_,A){A<0&&S.x===1&&(r[w]=S.x-1),_.x===0&&_.z===0&&(r[w]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.vertices,t.indices,t.radius,t.details)}}class yi extends Xn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yi(t.radius,t.detail)}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(n),e.push(a),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-r,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===r)return n/(a-1);const h=i[n],u=i[n+1]-h,p=(r-h)/u;return(n+p)/(a-1)}getTangent(t,e){let n=t-1e-4,a=t+1e-4;n<0&&(n=0),a>1&&(a=1);const r=this.getPoint(n),o=this.getPoint(a),l=e||(r.isVector2?new gt:new E);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new E,n=[],a=[],r=[],o=new E,l=new ue;for(let p=0;p<=t;p++){const g=p/t;n[p]=this.getTangentAt(g,new E)}a[0]=new E,r[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),r[0].crossVectors(n[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(jt(n[p-1].dot(n[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(n[p],a[p])}if(e===!0){let p=Math.acos(jt(a[0].dot(a[t]),-1,1));p/=t,n[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),r[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ac extends Ni{constructor(t=0,e=0,i=1,n=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const i=e,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(r?a=0:a=n),this.aClockwise===!0&&!r&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vd extends Ac{constructor(t,e,i,n,a,r){super(t,e,i,i,n,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Mo(){let s=0,t=0,e=0,i=0;function n(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){n(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,d){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+d)+(l-o)/d;u*=h,p*=h,n(r,o,u,p)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+i*o}}}const Xs=new E,Za=new Mo,Ja=new Mo,Qa=new Mo;class Cc extends Ni{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new E){const i=e,n=this.points,a=n.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%a]:(Xs.subVectors(n[0],n[1]).add(n[0]),c=Xs);const d=n[o%a],u=n[(o+1)%a];if(this.closed||o+2<a?h=n[(o+2)%a]:(Xs.subVectors(n[a-1],n[a-2]).add(n[a-1]),h=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Za.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Ja.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Qa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ja.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Za.calc(l),Ja.calc(l),Qa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new E().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ol(s,t,e,i,n){const a=(i-t)*.5,r=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+a+r)*l+(-3*e+3*i-2*a-r)*o+a*s+e}function xd(s,t){const e=1-s;return e*e*t}function _d(s,t){return 2*(1-s)*s*t}function yd(s,t){return s*s*t}function as(s,t,e,i){return xd(s,t)+_d(s,e)+yd(s,i)}function bd(s,t){const e=1-s;return e*e*e*t}function Md(s,t){const e=1-s;return 3*e*e*s*t}function wd(s,t){return 3*(1-s)*s*s*t}function Sd(s,t){return s*s*s*t}function rs(s,t,e,i,n){return bd(s,t)+Md(s,e)+wd(s,i)+Sd(s,n)}class Ed extends Ni{constructor(t=new gt,e=new gt,i=new gt,n=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new gt){const i=e,n=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(rs(t,n.x,a.x,r.x,o.x),rs(t,n.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Td extends Ni{constructor(t=new E,e=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new E){const i=e,n=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(rs(t,n.x,a.x,r.x,o.x),rs(t,n.y,a.y,r.y,o.y),rs(t,n.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ad extends Ni{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cd extends Ni{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends Ni{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,n=this.v0,a=this.v1,r=this.v2;return i.set(as(t,n.x,a.x,r.x),as(t,n.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rc extends Ni{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,n=this.v0,a=this.v1,r=this.v2;return i.set(as(t,n.x,a.x,r.x),as(t,n.y,a.y,r.y),as(t,n.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pd extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,n=this.points,a=(n.length-1)*t,r=Math.floor(a),o=a-r,l=n[r===0?r:r-1],c=n[r],h=n[r>n.length-2?n.length-1:r+1],d=n[r>n.length-3?n.length-1:r+2];return i.set(ol(o,l.x,c.x,h.x,d.x),ol(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new gt().fromArray(n))}return this}}var Ld=Object.freeze({__proto__:null,ArcCurve:vd,CatmullRomCurve3:Cc,CubicBezierCurve:Ed,CubicBezierCurve3:Td,EllipseCurve:Ac,LineCurve:Ad,LineCurve3:Cd,QuadraticBezierCurve:Rd,QuadraticBezierCurve3:Rc,SplineCurve:Pd});class Mt extends Xn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mt(t.radius,t.detail)}}class va extends Xn{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new va(t.radius,t.detail)}}class Ye extends Me{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const S=f*u-r;for(let w=0;w<c;w++){const _=w*d-a;g.push(_,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const w=S+c*f,_=S+c*(f+1),A=S+1+c*(f+1),C=S+1+c*f;p.push(w,_,C),p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.widthSegments,t.heightSegments)}}class xa extends Me{constructor(t=.5,e=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/n,p=new E,g=new gt;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const f=a+m/i*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let f=0;f<i;f++){const S=f+m,w=S,_=S+i+1,A=S+i+2,C=S+1;o.push(w,_,C),o.push(_,A,C)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qt extends Me{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new E,u=new E,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const S=[],w=f/i;let _=0;f===0&&r===0?_=.5/e:f===i&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const C=A/e;d.x=-t*Math.cos(n+C*a)*Math.sin(r+w*o),d.y=t*Math.cos(r+w*o),d.z=t*Math.sin(n+C*a)*Math.sin(r+w*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+_,1-w),S.push(c++)}h.push(S)}for(let f=0;f<i;f++)for(let S=0;S<e;S++){const w=h[f][S+1],_=h[f][S],A=h[f+1][S],C=h[f+1][S+1];(f!==0||r>0)&&p.push(w,_,C),(f!==i-1||l<Math.PI)&&p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wo extends Xn{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wo(t.radius,t.detail)}}class ji extends Me{constructor(t=1,e=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const r=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const v=g/n*a,m=p/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const v=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,S=(n+1)*p+g;r.push(v,m,S),r.push(m,f,S)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class So extends Me{constructor(t=new Rc(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,i=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new E,l=new E,c=new gt;let h=new E;const d=[],u=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(p,2));function v(){for(let w=0;w<e;w++)m(w);m(a===!1?e:0),S(),f()}function m(w){h=t.getPointAt(w/e,h);const _=r.normals[w],A=r.binormals[w];for(let C=0;C<=n;C++){const P=C/n*Math.PI*2,D=Math.sin(P),M=-Math.cos(P);l.x=M*_.x+D*A.x,l.y=M*_.y+D*A.y,l.z=M*_.z+D*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let w=1;w<=e;w++)for(let _=1;_<=n;_++){const A=(n+1)*(w-1)+(_-1),C=(n+1)*w+(_-1),P=(n+1)*w+_,D=(n+1)*(w-1)+_;g.push(A,C,D),g.push(C,P,D)}}function S(){for(let w=0;w<=e;w++)for(let _=0;_<=n;_++)c.x=w/e,c.y=_/n,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new So(new Ld[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ii extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dd extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Id extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _a extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pc extends _a{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const tr=new ue,ll=new E,cl=new E;class Lc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hl=new ue,ns=new E,er=new E;class Ud extends Lc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),i.position.copy(ns),er.copy(i.position),er.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(er),i.updateMatrixWorld(),n.makeTranslation(-ns.x,-ns.y,-ns.z),hl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,i.coordinateSystem,i.reversedDepth)}}class Ie extends _a{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ud}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dc extends xc{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kd extends Lc{constructor(){super(new Dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class os extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new kd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nd extends _a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fd extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Od{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dl(s,t,e,i){const n=zd(i);switch(e){case ac:return s*t;case oc:return s*t/n.components*n.byteLength;case po:return s*t/n.components*n.byteLength;case lc:return s*t*2/n.components*n.byteLength;case mo:return s*t*2/n.components*n.byteLength;case rc:return s*t*3/n.components*n.byteLength;case ci:return s*t*4/n.components*n.byteLength;case go:return s*t*4/n.components*n.byteLength;case Ks:case Zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:case Pr:return Math.max(s,16)*Math.max(t,8)/4;case Ar:case Rr:return Math.max(s,8)*Math.max(t,8)/2;case Lr:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $r:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case jr:case Yr:case Kr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Zr:case Jr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Qr:case to:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zd(s){switch(s){case bi:case ec:return{byteLength:1,components:1};case cs:case ic:case ps:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case pn:case ho:case Li:return{byteLength:4,components:1};case nc:case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);function Ic(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Bd(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:r}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Iu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ku=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Hd,alphahash_pars_fragment:Gd,alphamap_fragment:Vd,alphamap_pars_fragment:Wd,alphatest_fragment:qd,alphatest_pars_fragment:Xd,aomap_fragment:$d,aomap_pars_fragment:jd,batching_pars_vertex:Yd,batching_vertex:Kd,begin_vertex:Zd,beginnormal_vertex:Jd,bsdfs:Qd,iridescence_fragment:tu,bumpmap_pars_fragment:eu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:su,clipping_planes_vertex:au,color_fragment:ru,color_pars_fragment:ou,color_pars_vertex:lu,color_vertex:cu,common:hu,cube_uv_reflection_fragment:du,defaultnormal_vertex:uu,displacementmap_pars_vertex:fu,displacementmap_vertex:pu,emissivemap_fragment:mu,emissivemap_pars_fragment:gu,colorspace_fragment:vu,colorspace_pars_fragment:xu,envmap_fragment:_u,envmap_common_pars_fragment:yu,envmap_pars_fragment:bu,envmap_pars_vertex:Mu,envmap_physical_pars_fragment:Iu,envmap_vertex:wu,fog_vertex:Su,fog_pars_vertex:Eu,fog_fragment:Tu,fog_pars_fragment:Au,gradientmap_pars_fragment:Cu,lightmap_pars_fragment:Ru,lights_lambert_fragment:Pu,lights_lambert_pars_fragment:Lu,lights_pars_begin:Du,lights_toon_fragment:Uu,lights_toon_pars_fragment:ku,lights_phong_fragment:Nu,lights_phong_pars_fragment:Fu,lights_physical_fragment:Ou,lights_physical_pars_fragment:zu,lights_fragment_begin:Bu,lights_fragment_maps:Hu,lights_fragment_end:Gu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Wu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Xu,map_fragment:$u,map_pars_fragment:ju,map_particle_fragment:Yu,map_particle_pars_fragment:Ku,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ju,morphinstance_vertex:Qu,morphcolor_vertex:tf,morphnormal_vertex:ef,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:af,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:lf,normal_vertex:cf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:gf,premultiplied_alpha_fragment:vf,project_vertex:xf,dithering_fragment:_f,dithering_pars_fragment:yf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Sf,shadowmap_vertex:Ef,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:Cf,skinning_vertex:Rf,skinnormal_vertex:Pf,specularmap_fragment:Lf,specularmap_pars_fragment:Df,tonemapping_fragment:If,tonemapping_pars_fragment:Uf,transmission_fragment:kf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Of,uv_vertex:zf,worldpos_vertex:Bf,background_vert:Hf,background_frag:Gf,backgroundCube_vert:Vf,backgroundCube_frag:Wf,cube_vert:qf,cube_frag:Xf,depth_vert:$f,depth_frag:jf,distanceRGBA_vert:Yf,distanceRGBA_frag:Kf,equirect_vert:Zf,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:ip,meshlambert_vert:np,meshlambert_frag:sp,meshmatcap_vert:ap,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:hp,meshphysical_vert:dp,meshphysical_frag:up,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:vp,shadow_frag:xp,sprite_vert:_p,sprite_frag:yp},lt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},gi={basic:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ve([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ve([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ve([lt.points,lt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ve([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ve([lt.common,lt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ve([lt.sprite,lt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ve([lt.common,lt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ve([lt.lights,lt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};gi.physical={uniforms:Ve([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const $s={r:0,b:0,g:0},nn=new Mi,bp=new ue;function Mp(s,t,e,i,n,a,r){const o=new Dt(0);let l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function v(w){let _=!1;const A=g(w);A===null?f(o,l):A&&A.isColor&&(f(A,1),_=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===ma)?(h===void 0&&(h=new Xt(new Ue(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Wn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),nn.copy(_.backgroundRotation),nn.x*=-1,nn.y*=-1,nn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(nn.y*=-1,nn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(nn)),h.material.toneMapped=te.getTransfer(A.colorSpace)!==ae,(d!==A||u!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,p=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Xt(new Ye(2,2),new wi({name:"BackgroundMaterial",uniforms:Wn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,_){w.getRGB($s,vc(s)),i.buffers.color.setClear($s.r,$s.g,$s.b,_,r)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,_=1){o.set(w),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:v,addToRenderList:m,dispose:S}}function wp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,r=!1;function o(b,L,N,H,j){let X=!1;const $=d(H,N,L);a!==$&&(a=$,c(a.object)),X=p(b,H,N,j),X&&g(b,H,N,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,_(b,L,N,H),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,L,N){const H=N.wireframe===!0;let j=i[b.id];j===void 0&&(j={},i[b.id]=j);let X=j[L.id];X===void 0&&(X={},j[L.id]=X);let $=X[H];return $===void 0&&($=u(l()),X[H]=$),$}function u(b){const L=[],N=[],H=[];for(let j=0;j<e;j++)L[j]=0,N[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,L,N,H){const j=a.attributes,X=L.attributes;let $=0;const J=N.getAttributes();for(const G in J)if(J[G].location>=0){const ft=j[G];let Rt=X[G];if(Rt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Rt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Rt=b.instanceColor)),ft===void 0||ft.attribute!==Rt||Rt&&ft.data!==Rt.data)return!0;$++}return a.attributesNum!==$||a.index!==H}function g(b,L,N,H){const j={},X=L.attributes;let $=0;const J=N.getAttributes();for(const G in J)if(J[G].location>=0){let ft=X[G];ft===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor));const Rt={};Rt.attribute=ft,ft&&ft.data&&(Rt.data=ft.data),j[G]=Rt,$++}a.attributes=j,a.attributesNum=$,a.index=H}function v(){const b=a.newAttributes;for(let L=0,N=b.length;L<N;L++)b[L]=0}function m(b){f(b,0)}function f(b,L){const N=a.newAttributes,H=a.enabledAttributes,j=a.attributeDivisors;N[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),j[b]!==L&&(s.vertexAttribDivisor(b,L),j[b]=L)}function S(){const b=a.newAttributes,L=a.enabledAttributes;for(let N=0,H=L.length;N<H;N++)L[N]!==b[N]&&(s.disableVertexAttribArray(N),L[N]=0)}function w(b,L,N,H,j,X,$){$===!0?s.vertexAttribIPointer(b,L,N,j,X):s.vertexAttribPointer(b,L,N,H,j,X)}function _(b,L,N,H){v();const j=H.attributes,X=N.getAttributes(),$=L.defaultAttributeValues;for(const J in X){const G=X[J];if(G.location>=0){let ct=j[J];if(ct===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),ct!==void 0){const ft=ct.normalized,Rt=ct.itemSize,$t=t.get(ct);if($t===void 0)continue;const he=$t.buffer,pe=$t.type,ie=$t.bytesPerElement,Y=pe===s.INT||pe===s.UNSIGNED_INT||ct.gpuType===ho;if(ct.isInterleavedBufferAttribute){const Q=ct.data,vt=Q.stride,Ot=ct.offset;if(Q.isInstancedInterleavedBuffer){for(let Ct=0;Ct<G.locationSize;Ct++)f(G.location+Ct,Q.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ct=0;Ct<G.locationSize;Ct++)m(G.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,he);for(let Ct=0;Ct<G.locationSize;Ct++)w(G.location+Ct,Rt/G.locationSize,pe,ft,vt*ie,(Ot+Rt/G.locationSize*Ct)*ie,Y)}else{if(ct.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)f(G.location+Q,ct.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);s.bindBuffer(s.ARRAY_BUFFER,he);for(let Q=0;Q<G.locationSize;Q++)w(G.location+Q,Rt/G.locationSize,pe,ft,Rt*ie,Rt/G.locationSize*Q*ie,Y)}}else if($!==void 0){const ft=$[J];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(G.location,ft);break;case 3:s.vertexAttrib3fv(G.location,ft);break;case 4:s.vertexAttrib4fv(G.location,ft);break;default:s.vertexAttrib1fv(G.location,ft)}}}}S()}function A(){D();for(const b in i){const L=i[b];for(const N in L){const H=L[N];for(const j in H)h(H[j].object),delete H[j];delete L[N]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const L=i[b.id];for(const N in L){const H=L[N];for(const j in H)h(H[j].object),delete H[j];delete L[N]}delete i[b.id]}function P(b){for(const L in i){const N=i[L];if(N[b.id]===void 0)continue;const H=N[b.id];for(const j in H)h(H[j].object),delete H[j];delete N[b.id]}}function D(){M(),r=!0,a!==n&&(a=n,c(a.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Sp(s,t,e){let i;function n(c){i=c}function a(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,i,1)}}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ep(s,t,e,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){return!(P!==ci&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const D=P===ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==bi&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Li&&!D)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:A,maxSamples:C}}function Tp(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new on,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||n;return n=u,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!n||g===null||g.length===0||a&&!m)a?h(null):c();else{const S=a?0:i,w=S*4;let _=f.clippingState||null;l.value=_,_=h(g,u,w,p);for(let A=0;A!==w;++A)_[A]=e[A];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,_=p;w!==v;++w,_+=4)r.copy(d[w]).applyMatrix4(S,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ap(s){let t=new WeakMap;function e(r,o){return o===Sr?r.mapping=Hn:o===Er&&(r.mapping=Gn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Sr||o===Er)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new cd(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const Fn=4,ul=[.125,.215,.35,.446,.526,.582],dn=20,ir=new Dc,fl=new Dt;let nr=null,sr=0,ar=0,rr=!1;const ln=(1+Math.sqrt(5))/2,Un=1/ln,pl=[new E(-ln,Un,0),new E(ln,Un,0),new E(-Un,0,ln),new E(Un,0,ln),new E(0,ln,-Un),new E(0,ln,Un),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Cp=new E;class ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,a={}){const{size:r=256,position:o=Cp}=a;nr=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nr,sr,ar),this._renderer.xr.enabled=rr,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hn||t.mapping===Gn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nr=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:ps,format:ci,colorSpace:Vn,depthBuffer:!1},n=gl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(a)),this._blurMaterial=Pp(a,t,e)}return n}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,i,n,a){const l=new Xe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(fl),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null));const v=new ye({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),m=new Xt(new Ue,v);let f=!1;const S=t.background;S?S.isColor&&(v.color.copy(S),t.background=null,f=!0):(v.color.copy(fl),f=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[w],a.y,a.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[w],a.z)):(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[w]));const A=this._cubeSize;js(n,_*A,w>2?A:0,A,A),d.setRenderTarget(n),f&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Hn||t.mapping===Gn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;js(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,ir)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=pl[(n-a-1)%pl.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xt(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*dn-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):dn;m>dn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dn}`);const f=[];let S=0;for(let P=0;P<dn;++P){const D=P/v,M=Math.exp(-D*D/2);f.push(M),P===0?S+=M:P<m&&(S+=2*M)}for(let P=0;P<f.length;P++)f[P]=f[P]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;const _=this._sizeLods[n],A=3*_*(n>w-Fn?n-w+Fn:0),C=4*(this._cubeSize-_);js(e,A,C,3*_,2*_),l.setRenderTarget(e),l.render(d,ir)}}function Rp(s){const t=[],e=[],i=[];let n=s;const a=s-Fn+1+ul.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);e.push(o);let l=1/o;r>s-Fn?l=ul[r-s+Fn-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*p),w=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,D=C>2?0:-1,M=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];S.set(M,v*g*C),w.set(u,m*g*C);const b=[C,C,C,C,C,C];_.set(b,f*g*C)}const A=new Me;A.setAttribute("position",new je(S,v)),A.setAttribute("uv",new je(w,m)),A.setAttribute("faceIndex",new je(_,f)),t.push(A),n>Fn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function gl(s,t,e){const i=new mn(s,t,e);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Pp(s,t,e){const i=new Float32Array(dn),n=new E(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function vl(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function xl(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lp(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sr||l===Er,h=l===Hn||l===Gn;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ml(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(e===null&&(e=new ml(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Dp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ip(s,t,e,i){const n={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete n[u.id];const p=a.get(u);p&&(t.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let w=0,_=S.length;w<_;w+=3){const A=S[w+0],C=S[w+1],P=S[w+2];u.push(A,C,C,P,P,A)}}else if(g!==void 0){const S=g.array;v=g.version;for(let w=0,_=S.length/3-1;w<_;w+=3){const A=w+0,C=w+1,P=w+2;u.push(A,C,C,P,P,A)}}else return;const m=new(dc(u)?gc:mc)(u,1);m.version=v;const f=a.get(d);f&&t.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Up(s,t,e){let i;function n(u){i=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){s.drawElements(i,p,a,u*r),e.update(p,i,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(i,p,a,u*r,g),e.update(p,i,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function d(u,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*v[S];e.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function kp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Np(s,t,e){const i=new WeakMap,n=new le;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let A=o.attributes.position.count*_,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*C*4*d),D=new uc(P,A,C,d);D.type=Li,D.needsUpdate=!0;const M=_*4;for(let L=0;L<d;L++){const N=f[L],H=S[L],j=w[L],X=A*C*4*L;for(let $=0;$<N.count;$++){const J=$*M;g===!0&&(n.fromBufferAttribute(N,$),P[X+J+0]=n.x,P[X+J+1]=n.y,P[X+J+2]=n.z,P[X+J+3]=0),v===!0&&(n.fromBufferAttribute(H,$),P[X+J+4]=n.x,P[X+J+5]=n.y,P[X+J+6]=n.z,P[X+J+7]=0),m===!0&&(n.fromBufferAttribute(j,$),P[X+J+8]=n.x,P[X+J+9]=n.y,P[X+J+10]=n.z,P[X+J+11]=j.itemSize===4?n.w:1)}}u={count:d,texture:D,size:new gt(A,C)},i.set(o,u),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Fp(s,t,e,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}const Uc=new We,_l=new Ec(1,1),kc=new uc,Nc=new Xh,Fc=new _c,yl=[],bl=[],Ml=new Float32Array(16),wl=new Float32Array(9),Sl=new Float32Array(4);function $n(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=yl[n];if(a===void 0&&(a=new Float32Array(n),yl[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ya(s,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Op(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Gp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Sl.set(i),s.uniformMatrix2fv(this.addr,!1,Sl),Pe(e,i)}}function Vp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;wl.set(i),s.uniformMatrix3fv(this.addr,!1,wl),Pe(e,i)}}function Wp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Ml.set(i),s.uniformMatrix4fv(this.addr,!1,Ml),Pe(e,i)}}function qp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function $p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function Yp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function Zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function Qp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?(_l.compareFunction=hc,a=_l):a=Uc,e.setTexture2D(t||a,n)}function t0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Nc,n)}function e0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Fc,n)}function i0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||kc,n)}function n0(s){switch(s){case 5126:return Op;case 35664:return zp;case 35665:return Bp;case 35666:return Hp;case 35674:return Gp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return qp;case 35667:case 35671:return Xp;case 35668:case 35672:return $p;case 35669:case 35673:return jp;case 5125:return Yp;case 36294:return Kp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return i0}}function s0(s,t){s.uniform1fv(this.addr,t)}function a0(s,t){const e=$n(t,this.size,2);s.uniform2fv(this.addr,e)}function r0(s,t){const e=$n(t,this.size,3);s.uniform3fv(this.addr,e)}function o0(s,t){const e=$n(t,this.size,4);s.uniform4fv(this.addr,e)}function l0(s,t){const e=$n(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function c0(s,t){const e=$n(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function h0(s,t){const e=$n(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function d0(s,t){s.uniform1iv(this.addr,t)}function u0(s,t){s.uniform2iv(this.addr,t)}function f0(s,t){s.uniform3iv(this.addr,t)}function p0(s,t){s.uniform4iv(this.addr,t)}function m0(s,t){s.uniform1uiv(this.addr,t)}function g0(s,t){s.uniform2uiv(this.addr,t)}function v0(s,t){s.uniform3uiv(this.addr,t)}function x0(s,t){s.uniform4uiv(this.addr,t)}function _0(s,t,e){const i=this.cache,n=t.length,a=ya(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Pe(i,a));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Uc,a[r])}function y0(s,t,e){const i=this.cache,n=t.length,a=ya(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Pe(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Nc,a[r])}function b0(s,t,e){const i=this.cache,n=t.length,a=ya(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Pe(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Fc,a[r])}function M0(s,t,e){const i=this.cache,n=t.length,a=ya(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Pe(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||kc,a[r])}function w0(s){switch(s){case 5126:return s0;case 35664:return a0;case 35665:return r0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return d0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return v0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return M0}}class S0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=n0(e.type)}}class E0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w0(e.type)}}class T0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const or=/(\w+)(\])?(\[|\.)?/g;function El(s,t){s.seq.push(t),s.map[t.id]=t}function A0(s,t,e){const i=s.name,n=i.length;for(or.lastIndex=0;;){const a=or.exec(i),r=or.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){El(e,c===void 0?new S0(o,s,t):new E0(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new T0(o),El(e,d)),e=d}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),r=t.getUniformLocation(e,a.name);A0(a,r,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function Tl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const C0=37297;let R0=0;function P0(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const Al=new Gt;function L0(s){te._getMatrix(Al,te.workingColorSpace,s);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case aa:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Cl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+P0(s.getShaderSource(t),o)}else return a}function D0(s,t){const e=L0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function I0(s,t){let e;switch(t){case bh:e="Linear";break;case Mh:e="Reinhard";break;case wh:e="Cineon";break;case Ql:e="ACESFilmic";break;case Eh:e="AgX";break;case Th:e="Neutral";break;case Sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ys=new E;function U0(){te.getLuminanceCoefficients(Ys);const s=Ys.x.toFixed(4),t=Ys.y.toFixed(4),e=Ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function N0(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function F0(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function ss(s){return s!==""}function Rl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(s){return s.replace(O0,B0)}const z0=new Map;function B0(s,t){let e=Wt[t];if(e===void 0){const i=z0.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return so(e)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(s){return s.replace(H0,G0)}function G0(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Dl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function V0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===co?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===pr?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function W0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hn:case Gn:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q0(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Gn&&(t="ENVMAP_MODE_REFRACTION"),t}function X0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case _h:t="ENVMAP_BLENDING_MIX";break;case yh:t="ENVMAP_BLENDING_ADD";break}return t}function $0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function j0(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=V0(e),c=W0(e),h=q0(e),d=X0(e),u=$0(e),p=k0(e),g=N0(a),v=n.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(m=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?I0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,D0("linearToOutputTexel",e.outputColorSpace),U0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),r=so(r),r=Rl(r,e),r=Pl(r,e),o=so(o),o=Rl(o,e),o=Pl(o,e),r=Ll(r),o=Ll(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=S+m+r,_=S+f+o,A=Tl(n,n.VERTEX_SHADER,w),C=Tl(n,n.FRAGMENT_SHADER,_);n.attachShader(v,A),n.attachShader(v,C),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function P(L){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(v)||"",H=n.getShaderInfoLog(A)||"",j=n.getShaderInfoLog(C)||"",X=N.trim(),$=H.trim(),J=j.trim();let G=!0,ct=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,A,C);else{const ft=Cl(n,A,"vertex"),Rt=Cl(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ft+`
`+Rt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):($===""||J==="")&&(ct=!1);ct&&(L.diagnostics={runnable:G,programLog:X,vertexShader:{log:$,prefix:m},fragmentShader:{log:J,prefix:f}})}n.deleteShader(A),n.deleteShader(C),D=new ta(n,v),M=F0(n,v)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(v,C0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let Y0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Z0(t),e.set(t,i)),i}}class Z0{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}}function J0(s,t,e,i,n,a,r){const o=new fc,l=new K0,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,L,N,H){const j=N.fog,X=H.geometry,$=M.isMeshStandardMaterial?N.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||$),G=J&&J.mapping===ma?J.image.height:null,ct=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Rt=ft!==void 0?ft.length:0;let $t=0;X.morphAttributes.position!==void 0&&($t=1),X.morphAttributes.normal!==void 0&&($t=2),X.morphAttributes.color!==void 0&&($t=3);let he,pe,ie,Y;if(ct){const ne=gi[ct];he=ne.vertexShader,pe=ne.fragmentShader}else he=M.vertexShader,pe=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const Q=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Ot=H.isInstancedMesh===!0,Ct=H.isBatchedMesh===!0,Jt=!!M.map,Fe=!!M.matcap,R=!!J,me=!!M.aoMap,Bt=!!M.lightMap,kt=!!M.bumpMap,yt=!!M.normalMap,ge=!!M.displacementMap,bt=!!M.emissiveMap,Vt=!!M.metalnessMap,Le=!!M.roughnessMap,we=M.anisotropy>0,T=M.clearcoat>0,x=M.dispersion>0,F=M.iridescence>0,W=M.sheen>0,Z=M.transmission>0,V=we&&!!M.anisotropyMap,Tt=T&&!!M.clearcoatMap,st=T&&!!M.clearcoatNormalMap,wt=T&&!!M.clearcoatRoughnessMap,St=F&&!!M.iridescenceMap,it=F&&!!M.iridescenceThicknessMap,ut=W&&!!M.sheenColorMap,Ut=W&&!!M.sheenRoughnessMap,Et=!!M.specularMap,ht=!!M.specularColorMap,Ht=!!M.specularIntensityMap,I=Z&&!!M.transmissionMap,nt=Z&&!!M.thicknessMap,at=!!M.gradientMap,mt=!!M.alphaMap,tt=M.alphaTest>0,K=!!M.alphaHash,_t=!!M.extensions;let zt=Xi;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(zt=s.toneMapping);const de={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:pe,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&H._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&H.instanceColor!==null,instancingMorph:Ot&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Vn,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:Fe,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:G,aoMap:me,lightMap:Bt,bumpMap:kt,normalMap:yt,displacementMap:u&&ge,emissiveMap:bt,normalMapObjectSpace:yt&&M.normalMapType===Ph,normalMapTangentSpace:yt&&M.normalMapType===cc,metalnessMap:Vt,roughnessMap:Le,anisotropy:we,anisotropyMap:V,clearcoat:T,clearcoatMap:Tt,clearcoatNormalMap:st,clearcoatRoughnessMap:wt,dispersion:x,iridescence:F,iridescenceMap:St,iridescenceThicknessMap:it,sheen:W,sheenColorMap:ut,sheenRoughnessMap:Ut,specularMap:Et,specularColorMap:ht,specularIntensityMap:Ht,transmission:Z,transmissionMap:I,thicknessMap:nt,gradientMap:at,opaque:M.transparent===!1&&M.blending===On&&M.alphaToCoverage===!1,alphaMap:mt,alphaTest:tt,alphaHash:K,combine:M.combine,mapUv:Jt&&v(M.map.channel),aoMapUv:me&&v(M.aoMap.channel),lightMapUv:Bt&&v(M.lightMap.channel),bumpMapUv:kt&&v(M.bumpMap.channel),normalMapUv:yt&&v(M.normalMap.channel),displacementMapUv:ge&&v(M.displacementMap.channel),emissiveMapUv:bt&&v(M.emissiveMap.channel),metalnessMapUv:Vt&&v(M.metalnessMap.channel),roughnessMapUv:Le&&v(M.roughnessMap.channel),anisotropyMapUv:V&&v(M.anisotropyMap.channel),clearcoatMapUv:Tt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(M.sheenRoughnessMap.channel),specularMapUv:Et&&v(M.specularMap.channel),specularColorMapUv:ht&&v(M.specularColorMap.channel),specularIntensityMapUv:Ht&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:nt&&v(M.thicknessMap.channel),alphaMapUv:mt&&v(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(yt||we),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Jt||mt),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:$t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:zt,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:bt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_e,flipSided:M.side===Ne,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)b.push(L),b.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(b,M),w(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function w(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const b=g[M.type];let L;if(b){const N=gi[b];L=ad.clone(N.uniforms)}else L=M.uniforms;return L}function A(M,b){let L;for(let N=0,H=h.length;N<H;N++){const j=h[N];if(j.cacheKey===b){L=j,++L.usedTimes;break}}return L===void 0&&(L=new j0(s,b,M,a),h.push(L)),L}function C(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:D}}function Q0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:a}}function tm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Il(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ul(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(d,u,p,g,v,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function o(d,u,p,g,v,m){const f=r(d,u,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function l(d,u,p,g,v,m){const f=r(d,u,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||tm),i.length>1&&i.sort(u||Il),n.length>1&&n.sort(u||Il)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function em(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new Ul,s.set(i,[r])):n>=a.length?(r=new Ul,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function im(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Dt};break;case"SpotLight":e={position:new E,direction:new E,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function nm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sm=0;function am(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function rm(s){const t=new im,e=nm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);const n=new E,a=new ue,r=new ue;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,S=0,w=0,_=0,A=0,C=0,P=0;c.sort(am);for(let M=0,b=c.length;M<b;M++){const L=c[M],N=L.color,H=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*H,d+=N.g*H,u+=N.b*H;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],H);P++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,G=e.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=L.shadow.matrix,S++}i.directional[p]=$,p++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(N).multiplyScalar(H),$.distance=j,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[v]=$;const J=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=J.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=X,_++}v++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(N).multiplyScalar(H),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=$,m++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const J=L.shadow,G=e.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=L.shadow.matrix,w++}i.point[g]=$,g++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(H),$.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[f]=$,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==_||D.numSpotMaps!==A||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=_,D.numSpotMaps=A,D.numLightProbes=P,i.version=sm++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const w=c[f];if(w.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),d++}else if(w.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(w.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function kl(s){const t=new rm(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function om(s){let t=new WeakMap;function e(n,a=0){const r=t.get(n);let o;return r===void 0?(o=new kl(s),t.set(n,[o])):a>=r.length?(o=new kl(s),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hm(s,t,e){let i=new _o;const n=new gt,a=new gt,r=new le,o=new Dd({depthPacking:Rh}),l=new Id,c={},h=e.maxTextureSize,d={[Ui]:Ne,[Ne]:Ui,[_e]:_e},u=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let f=this.type;this.render=function(C,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(qi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=f!==Pi&&this.type===Pi,j=f===Pi&&this.type!==Pi;for(let X=0,$=C.length;X<$;X++){const J=C[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const ct=G.getFrameExtents();if(n.multiply(ct),a.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/ct.x),n.x=a.x*ct.x,G.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/ct.y),n.y=a.y*ct.y,G.mapSize.y=a.y)),G.map===null||H===!0||j===!0){const Rt=this.type!==Pi?{minFilter:hi,magFilter:hi}:{};G.map!==null&&G.map.dispose(),G.map=new mn(n.x,n.y,Rt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ft=G.getViewportCount();for(let Rt=0;Rt<ft;Rt++){const $t=G.getViewport(Rt);r.set(a.x*$t.x,a.y*$t.y,a.x*$t.z,a.y*$t.w),N.viewport(r),G.updateMatrices(J,Rt),i=G.getFrustum(),_(P,D,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Pi&&S(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,L)};function S(C,P){const D=t.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mn(n.x,n.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(P,null,D,u,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(P,null,D,p,v,null)}function w(C,P,D,M){let b=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)b=L;else if(b=D.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=b.uuid,H=P.uuid;let j=c[N];j===void 0&&(j={},c[N]=j);let X=j[H];X===void 0&&(X=b.clone(),j[H]=X,P.addEventListener("dispose",A)),b=X}if(b.visible=P.visible,b.wireframe=P.wireframe,M===Pi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:d[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=s.properties.get(b);N.light=D}return b}function _(C,P,D,M,b){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Pi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=t.update(C),j=C.material;if(Array.isArray(j)){const X=H.groups;for(let $=0,J=X.length;$<J;$++){const G=X[$],ct=j[G.materialIndex];if(ct&&ct.visible){const ft=w(C,ct,M,b);C.onBeforeShadow(s,C,P,D,H,ft,G),s.renderBufferDirect(D,null,H,ft,C,G),C.onAfterShadow(s,C,P,D,H,ft,G)}}}else if(j.visible){const X=w(C,j,M,b);C.onBeforeShadow(s,C,P,D,H,X,null),s.renderBufferDirect(D,null,H,X,C,null),C.onAfterShadow(s,C,P,D,H,X,null)}}const N=C.children;for(let H=0,j=N.length;H<j;H++)_(N[H],P,D,M,b)}function A(C){C.target.removeEventListener("dispose",A);for(const D in c){const M=c[D],b=C.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const dm={[vr]:xr,[_r]:Mr,[yr]:wr,[Bn]:br,[xr]:vr,[Mr]:_r,[wr]:yr,[br]:Bn};function um(s,t){function e(){let I=!1;const nt=new le;let at=null;const mt=new le(0,0,0,0);return{setMask:function(tt){at!==tt&&!I&&(s.colorMask(tt,tt,tt,tt),at=tt)},setLocked:function(tt){I=tt},setClear:function(tt,K,_t,zt,de){de===!0&&(tt*=zt,K*=zt,_t*=zt),nt.set(tt,K,_t,zt),mt.equals(nt)===!1&&(s.clearColor(tt,K,_t,zt),mt.copy(nt))},reset:function(){I=!1,at=null,mt.set(-1,0,0,0)}}}function i(){let I=!1,nt=!1,at=null,mt=null,tt=null;return{setReversed:function(K){if(nt!==K){const _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),nt=K;const zt=tt;tt=null,this.setClear(zt)}},getReversed:function(){return nt},setTest:function(K){K?Q(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(K){at!==K&&!I&&(s.depthMask(K),at=K)},setFunc:function(K){if(nt&&(K=dm[K]),mt!==K){switch(K){case vr:s.depthFunc(s.NEVER);break;case xr:s.depthFunc(s.ALWAYS);break;case _r:s.depthFunc(s.LESS);break;case Bn:s.depthFunc(s.LEQUAL);break;case yr:s.depthFunc(s.EQUAL);break;case br:s.depthFunc(s.GEQUAL);break;case Mr:s.depthFunc(s.GREATER);break;case wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=K}},setLocked:function(K){I=K},setClear:function(K){tt!==K&&(nt&&(K=1-K),s.clearDepth(K),tt=K)},reset:function(){I=!1,at=null,mt=null,tt=null,nt=!1}}}function n(){let I=!1,nt=null,at=null,mt=null,tt=null,K=null,_t=null,zt=null,de=null;return{setTest:function(ne){I||(ne?Q(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(ne){nt!==ne&&!I&&(s.stencilMask(ne),nt=ne)},setFunc:function(ne,Si,ui){(at!==ne||mt!==Si||tt!==ui)&&(s.stencilFunc(ne,Si,ui),at=ne,mt=Si,tt=ui)},setOp:function(ne,Si,ui){(K!==ne||_t!==Si||zt!==ui)&&(s.stencilOp(ne,Si,ui),K=ne,_t=Si,zt=ui)},setLocked:function(ne){I=ne},setClear:function(ne){de!==ne&&(s.clearStencil(ne),de=ne)},reset:function(){I=!1,nt=null,at=null,mt=null,tt=null,K=null,_t=null,zt=null,de=null}}}const a=new e,r=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,w=null,_=null,A=null,C=null,P=new Dt(0,0,0),D=0,M=!1,b=null,L=null,N=null,H=null,j=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=J>=2);let ct=null,ft={};const Rt=s.getParameter(s.SCISSOR_BOX),$t=s.getParameter(s.VIEWPORT),he=new le().fromArray(Rt),pe=new le().fromArray($t);function ie(I,nt,at,mt){const tt=new Uint8Array(4),K=s.createTexture();s.bindTexture(I,K),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _t=0;_t<at;_t++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(nt+_t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return K}const Y={};Y[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),r.setFunc(Bn),kt(!1),yt(Io),Q(s.CULL_FACE),me(qi);function Q(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function vt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Ot(I,nt){return d[I]!==nt?(s.bindFramebuffer(I,nt),d[I]=nt,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=nt),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ct(I,nt){let at=p,mt=!1;if(I){at=u.get(nt),at===void 0&&(at=[],u.set(nt,at));const tt=I.textures;if(at.length!==tt.length||at[0]!==s.COLOR_ATTACHMENT0){for(let K=0,_t=tt.length;K<_t;K++)at[K]=s.COLOR_ATTACHMENT0+K;at.length=tt.length,mt=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,mt=!0);mt&&s.drawBuffers(at)}function Jt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Fe={[hn]:s.FUNC_ADD,[ih]:s.FUNC_SUBTRACT,[nh]:s.FUNC_REVERSE_SUBTRACT};Fe[sh]=s.MIN,Fe[ah]=s.MAX;const R={[rh]:s.ZERO,[oh]:s.ONE,[lh]:s.SRC_COLOR,[mr]:s.SRC_ALPHA,[ph]:s.SRC_ALPHA_SATURATE,[uh]:s.DST_COLOR,[hh]:s.DST_ALPHA,[ch]:s.ONE_MINUS_SRC_COLOR,[gr]:s.ONE_MINUS_SRC_ALPHA,[fh]:s.ONE_MINUS_DST_COLOR,[dh]:s.ONE_MINUS_DST_ALPHA,[mh]:s.CONSTANT_COLOR,[gh]:s.ONE_MINUS_CONSTANT_COLOR,[vh]:s.CONSTANT_ALPHA,[xh]:s.ONE_MINUS_CONSTANT_ALPHA};function me(I,nt,at,mt,tt,K,_t,zt,de,ne){if(I===qi){v===!0&&(vt(s.BLEND),v=!1);return}if(v===!1&&(Q(s.BLEND),v=!0),I!==eh){if(I!==m||ne!==M){if((f!==hn||_!==hn)&&(s.blendEquation(s.FUNC_ADD),f=hn,_=hn),ne)switch(I){case On:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ce:s.blendFunc(s.ONE,s.ONE);break;case Uo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ko:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case On:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ce:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Uo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ko:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,w=null,A=null,C=null,P.set(0,0,0),D=0,m=I,M=ne}return}tt=tt||nt,K=K||at,_t=_t||mt,(nt!==f||tt!==_)&&(s.blendEquationSeparate(Fe[nt],Fe[tt]),f=nt,_=tt),(at!==S||mt!==w||K!==A||_t!==C)&&(s.blendFuncSeparate(R[at],R[mt],R[K],R[_t]),S=at,w=mt,A=K,C=_t),(zt.equals(P)===!1||de!==D)&&(s.blendColor(zt.r,zt.g,zt.b,de),P.copy(zt),D=de),m=I,M=!1}function Bt(I,nt){I.side===_e?vt(s.CULL_FACE):Q(s.CULL_FACE);let at=I.side===Ne;nt&&(at=!at),kt(at),I.blending===On&&I.transparent===!1?me(qi):me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const mt=I.stencilWrite;o.setTest(mt),mt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){b!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),b=I)}function yt(I){I!==Qc?(Q(s.CULL_FACE),I!==L&&(I===Io?s.cullFace(s.BACK):I===th?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),L=I}function ge(I){I!==N&&($&&s.lineWidth(I),N=I)}function bt(I,nt,at){I?(Q(s.POLYGON_OFFSET_FILL),(H!==nt||j!==at)&&(s.polygonOffset(nt,at),H=nt,j=at)):vt(s.POLYGON_OFFSET_FILL)}function Vt(I){I?Q(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function Le(I){I===void 0&&(I=s.TEXTURE0+X-1),ct!==I&&(s.activeTexture(I),ct=I)}function we(I,nt,at){at===void 0&&(ct===null?at=s.TEXTURE0+X-1:at=ct);let mt=ft[at];mt===void 0&&(mt={type:void 0,texture:void 0},ft[at]=mt),(mt.type!==I||mt.texture!==nt)&&(ct!==at&&(s.activeTexture(at),ct=at),s.bindTexture(I,nt||Y[I]),mt.type=I,mt.texture=nt)}function T(){const I=ft[ct];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){he.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function Ut(I){pe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),pe.copy(I))}function Et(I,nt){let at=c.get(nt);at===void 0&&(at=new WeakMap,c.set(nt,at));let mt=at.get(I);mt===void 0&&(mt=s.getUniformBlockIndex(nt,I.name),at.set(I,mt))}function ht(I,nt){const mt=c.get(nt).get(I);l.get(nt)!==mt&&(s.uniformBlockBinding(nt,mt,I.__bindingPointIndex),l.set(nt,mt))}function Ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,ft={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,w=null,_=null,A=null,C=null,P=new Dt(0,0,0),D=0,M=!1,b=null,L=null,N=null,H=null,j=null,he.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Q,disable:vt,bindFramebuffer:Ot,drawBuffers:Ct,useProgram:Jt,setBlending:me,setMaterial:Bt,setFlipSided:kt,setCullFace:yt,setLineWidth:ge,setPolygonOffset:bt,setScissorTest:Vt,activeTexture:Le,bindTexture:we,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:St,texImage3D:it,updateUBOMapping:Et,uniformBlockBinding:ht,texStorage2D:st,texStorage3D:wt,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:V,compressedTexSubImage3D:Tt,scissor:ut,viewport:Ut,reset:Ht}}function fm(s,t,e,i,n,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):oa("canvas")}function v(T,x,F){let W=1;const Z=we(T);if((Z.width>F||Z.height>F)&&(W=F/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(W*Z.width),Tt=Math.floor(W*Z.height);d===void 0&&(d=g(V,Tt));const st=x?g(V,Tt):d;return st.width=V,st.height=Tt,st.getContext("2d").drawImage(T,0,0,V,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+Tt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(T,x,F,W,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=x;if(x===s.RED&&(F===s.FLOAT&&(V=s.R32F),F===s.HALF_FLOAT&&(V=s.R16F),F===s.UNSIGNED_BYTE&&(V=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.R8UI),F===s.UNSIGNED_SHORT&&(V=s.R16UI),F===s.UNSIGNED_INT&&(V=s.R32UI),F===s.BYTE&&(V=s.R8I),F===s.SHORT&&(V=s.R16I),F===s.INT&&(V=s.R32I)),x===s.RG&&(F===s.FLOAT&&(V=s.RG32F),F===s.HALF_FLOAT&&(V=s.RG16F),F===s.UNSIGNED_BYTE&&(V=s.RG8)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RG8UI),F===s.UNSIGNED_SHORT&&(V=s.RG16UI),F===s.UNSIGNED_INT&&(V=s.RG32UI),F===s.BYTE&&(V=s.RG8I),F===s.SHORT&&(V=s.RG16I),F===s.INT&&(V=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RGB8UI),F===s.UNSIGNED_SHORT&&(V=s.RGB16UI),F===s.UNSIGNED_INT&&(V=s.RGB32UI),F===s.BYTE&&(V=s.RGB8I),F===s.SHORT&&(V=s.RGB16I),F===s.INT&&(V=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),F===s.UNSIGNED_INT&&(V=s.RGBA32UI),F===s.BYTE&&(V=s.RGBA8I),F===s.SHORT&&(V=s.RGBA16I),F===s.INT&&(V=s.RGBA32I)),x===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),x===s.RGBA){const Tt=Z?aa:te.getTransfer(W);F===s.FLOAT&&(V=s.RGBA32F),F===s.HALF_FLOAT&&(V=s.RGBA16F),F===s.UNSIGNED_BYTE&&(V=Tt===ae?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function _(T,x){let F;return T?x===null||x===pn||x===hs?F=s.DEPTH24_STENCIL8:x===Li?F=s.DEPTH32F_STENCIL8:x===cs&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pn||x===hs?F=s.DEPTH_COMPONENT24:x===Li?F=s.DEPTH_COMPONENT32F:x===cs&&(F=s.DEPTH_COMPONENT16),F}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hi&&T.minFilter!==xi?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&h.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),b(x)}function D(T){const x=i.get(T);if(x.__webglInit===void 0)return;const F=T.source,W=u.get(F);if(W){const Z=W[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(T),Object.keys(W).length===0&&u.delete(F)}i.remove(T)}function M(T){const x=i.get(T);s.deleteTexture(x.__webglTexture);const F=T.source,W=u.get(F);delete W[x.__cacheKey],r.memory.textures--}function b(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Z=0;Z<x.__webglFramebuffer[W].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[W][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)s.deleteFramebuffer(x.__webglFramebuffer[W]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let W=0,Z=F.length;W<Z;W++){const V=i.get(F[W]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(F[W])}i.remove(T)}let L=0;function N(){L=0}function H(){const T=L;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),L+=1,T}function j(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function X(T,x){const F=i.get(T);if(T.isVideoTexture&&Vt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,T,x);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function $(T,x){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function J(T,x){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,x);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function G(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){Q(F,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const ct={[sa]:s.REPEAT,[un]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},ft={[hi]:s.NEAREST,[Ah]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Sa]:s.LINEAR_MIPMAP_NEAREST,[fn]:s.LINEAR_MIPMAP_LINEAR},Rt={[Lh]:s.NEVER,[Fh]:s.ALWAYS,[Dh]:s.LESS,[hc]:s.LEQUAL,[Ih]:s.EQUAL,[Nh]:s.GEQUAL,[Uh]:s.GREATER,[kh]:s.NOTEQUAL};function $t(T,x){if(x.type===Li&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===xi||x.magFilter===Sa||x.magFilter===bs||x.magFilter===fn||x.minFilter===xi||x.minFilter===Sa||x.minFilter===bs||x.minFilter===fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ct[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ct[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ct[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ft[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hi||x.minFilter!==bs&&x.minFilter!==fn||x.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function he(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const W=x.source;let Z=u.get(W);Z===void 0&&(Z={},u.set(W,Z));const V=j(x);if(V!==T.__cacheKey){Z[V]===void 0&&(Z[V]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Z[V].usedTimes++;const Tt=Z[T.__cacheKey];Tt!==void 0&&(Z[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(x)),T.__cacheKey=V,T.__webglTexture=Z[V].texture}return F}function pe(T,x,F){return Math.floor(Math.floor(T/F)/x)}function ie(T,x,F,W){const V=T.updateRanges;if(V.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,F,W,x.data);else{V.sort((it,ut)=>it.start-ut.start);let Tt=0;for(let it=1;it<V.length;it++){const ut=V[Tt],Ut=V[it],Et=ut.start+ut.count,ht=pe(Ut.start,x.width,4),Ht=pe(ut.start,x.width,4);Ut.start<=Et+1&&ht===Ht&&pe(Ut.start+Ut.count-1,x.width,4)===ht?ut.count=Math.max(ut.count,Ut.start+Ut.count-ut.start):(++Tt,V[Tt]=Ut)}V.length=Tt+1;const st=s.getParameter(s.UNPACK_ROW_LENGTH),wt=s.getParameter(s.UNPACK_SKIP_PIXELS),St=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let it=0,ut=V.length;it<ut;it++){const Ut=V[it],Et=Math.floor(Ut.start/4),ht=Math.ceil(Ut.count/4),Ht=Et%x.width,I=Math.floor(Et/x.width),nt=ht,at=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Ht,I,nt,at,F,W,x.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,st),s.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function Y(T,x,F){let W=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=s.TEXTURE_3D);const Z=he(T,x),V=x.source;e.bindTexture(W,T.__webglTexture,s.TEXTURE0+F);const Tt=i.get(V);if(V.version!==Tt.__version||Z===!0){e.activeTexture(s.TEXTURE0+F);const st=te.getPrimaries(te.workingColorSpace),wt=x.colorSpace===Vi?null:te.getPrimaries(x.colorSpace),St=x.colorSpace===Vi||st===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let it=v(x.image,!1,n.maxTextureSize);it=Le(x,it);const ut=a.convert(x.format,x.colorSpace),Ut=a.convert(x.type);let Et=w(x.internalFormat,ut,Ut,x.colorSpace,x.isVideoTexture);$t(W,x);let ht;const Ht=x.mipmaps,I=x.isVideoTexture!==!0,nt=Tt.__version===void 0||Z===!0,at=V.dataReady,mt=A(x,it);if(x.isDepthTexture)Et=_(x.format===us,x.type),nt&&(I?e.texStorage2D(s.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Et,it.width,it.height,0,ut,Ut,null));else if(x.isDataTexture)if(Ht.length>0){I&&nt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,Ht[0].width,Ht[0].height);for(let tt=0,K=Ht.length;tt<K;tt++)ht=Ht[tt],I?at&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,ut,Ut,ht.data):e.texImage2D(s.TEXTURE_2D,tt,Et,ht.width,ht.height,0,ut,Ut,ht.data);x.generateMipmaps=!1}else I?(nt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,it.width,it.height),at&&ie(x,it,ut,Ut)):e.texImage2D(s.TEXTURE_2D,0,Et,it.width,it.height,0,ut,Ut,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Et,Ht[0].width,Ht[0].height,it.depth);for(let tt=0,K=Ht.length;tt<K;tt++)if(ht=Ht[tt],x.format!==ci)if(ut!==null)if(I){if(at)if(x.layerUpdates.size>0){const _t=dl(ht.width,ht.height,x.format,x.type);for(const zt of x.layerUpdates){const de=ht.data.subarray(zt*_t/ht.data.BYTES_PER_ELEMENT,(zt+1)*_t/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,zt,ht.width,ht.height,1,ut,de)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,it.depth,ut,ht.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Et,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,it.depth,ut,Ut,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Et,ht.width,ht.height,it.depth,0,ut,Ut,ht.data)}else{I&&nt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,Ht[0].width,Ht[0].height);for(let tt=0,K=Ht.length;tt<K;tt++)ht=Ht[tt],x.format!==ci?ut!==null?I?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Et,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,ut,Ut,ht.data):e.texImage2D(s.TEXTURE_2D,tt,Et,ht.width,ht.height,0,ut,Ut,ht.data)}else if(x.isDataArrayTexture)if(I){if(nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Et,it.width,it.height,it.depth),at)if(x.layerUpdates.size>0){const tt=dl(it.width,it.height,x.format,x.type);for(const K of x.layerUpdates){const _t=it.data.subarray(K*tt/it.data.BYTES_PER_ELEMENT,(K+1)*tt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ut,Ut,_t)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ut,Ut,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,ut,Ut,it.data);else if(x.isData3DTexture)I?(nt&&e.texStorage3D(s.TEXTURE_3D,mt,Et,it.width,it.height,it.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ut,Ut,it.data)):e.texImage3D(s.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,ut,Ut,it.data);else if(x.isFramebufferTexture){if(nt)if(I)e.texStorage2D(s.TEXTURE_2D,mt,Et,it.width,it.height);else{let tt=it.width,K=it.height;for(let _t=0;_t<mt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Et,tt,K,0,ut,Ut,null),tt>>=1,K>>=1}}else if(Ht.length>0){if(I&&nt){const tt=we(Ht[0]);e.texStorage2D(s.TEXTURE_2D,mt,Et,tt.width,tt.height)}for(let tt=0,K=Ht.length;tt<K;tt++)ht=Ht[tt],I?at&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ut,Ut,ht):e.texImage2D(s.TEXTURE_2D,tt,Et,ut,Ut,ht);x.generateMipmaps=!1}else if(I){if(nt){const tt=we(it);e.texStorage2D(s.TEXTURE_2D,mt,Et,tt.width,tt.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Ut,it)}else e.texImage2D(s.TEXTURE_2D,0,Et,ut,Ut,it);m(x)&&f(W),Tt.__version=V.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,F){if(x.image.length!==6)return;const W=he(T,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);const V=i.get(Z);if(Z.version!==V.__version||W===!0){e.activeTexture(s.TEXTURE0+F);const Tt=te.getPrimaries(te.workingColorSpace),st=x.colorSpace===Vi?null:te.getPrimaries(x.colorSpace),wt=x.colorSpace===Vi||Tt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const St=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!St&&!it?ut[K]=v(x.image[K],!0,n.maxCubemapSize):ut[K]=it?x.image[K].image:x.image[K],ut[K]=Le(x,ut[K]);const Ut=ut[0],Et=a.convert(x.format,x.colorSpace),ht=a.convert(x.type),Ht=w(x.internalFormat,Et,ht,x.colorSpace),I=x.isVideoTexture!==!0,nt=V.__version===void 0||W===!0,at=Z.dataReady;let mt=A(x,Ut);$t(s.TEXTURE_CUBE_MAP,x);let tt;if(St){I&&nt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Ht,Ut.width,Ut.height);for(let K=0;K<6;K++){tt=ut[K].mipmaps;for(let _t=0;_t<tt.length;_t++){const zt=tt[_t];x.format!==ci?Et!==null?I?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,zt.width,zt.height,Et,zt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Ht,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,zt.width,zt.height,Et,ht,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Ht,zt.width,zt.height,0,Et,ht,zt.data)}}}else{if(tt=x.mipmaps,I&&nt){tt.length>0&&mt++;const K=we(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(it){I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,Et,ht,ut[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ut[K].width,ut[K].height,0,Et,ht,ut[K].data);for(let _t=0;_t<tt.length;_t++){const de=tt[_t].image[K].image;I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,de.width,de.height,Et,ht,de.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Ht,de.width,de.height,0,Et,ht,de.data)}}else{I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,ht,ut[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Et,ht,ut[K]);for(let _t=0;_t<tt.length;_t++){const zt=tt[_t];I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Et,ht,zt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Ht,Et,ht,zt.image[K])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),V.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function vt(T,x,F,W,Z,V){const Tt=a.convert(F.format,F.colorSpace),st=a.convert(F.type),wt=w(F.internalFormat,Tt,st,F.colorSpace),St=i.get(x),it=i.get(F);if(it.__renderTarget=x,!St.__hasExternalTextures){const ut=Math.max(1,x.width>>V),Ut=Math.max(1,x.height>>V);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,V,wt,ut,Ut,x.depth,0,Tt,st,null):e.texImage2D(Z,V,wt,ut,Ut,0,Tt,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),bt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,it.__webglTexture,0,ge(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,it.__webglTexture,V),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(T,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const W=x.depthTexture,Z=W&&W.isDepthTexture?W.type:null,V=_(x.stencilBuffer,Z),Tt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=ge(x);bt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,V,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,V,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,V,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,T)}else{const W=x.textures;for(let Z=0;Z<W.length;Z++){const V=W[Z],Tt=a.convert(V.format,V.colorSpace),st=a.convert(V.type),wt=w(V.internalFormat,Tt,st,V.colorSpace),St=ge(x);F&&bt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,wt,x.width,x.height):bt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,wt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,wt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const Z=W.__webglTexture,V=ge(x);if(x.depthTexture.format===ds)bt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===us)bt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=W}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?Ct(x.__webglFramebuffer[0],T):Ct(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=s.createRenderbuffer(),Ot(x.__webglDepthbuffer[W],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,V)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ot(x.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,V)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(T,x,F){const W=i.get(T);x!==void 0&&vt(W.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Jt(T)}function R(T){const x=T.texture,F=i.get(T),W=i.get(x);T.addEventListener("dispose",P);const Z=T.textures,V=T.isWebGLCubeRenderTarget===!0,Tt=Z.length>1;if(Tt||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=x.version,r.memory.textures++),V){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let wt=0;wt<x.mipmaps.length;wt++)F.__webglFramebuffer[st][wt]=s.createFramebuffer()}else F.__webglFramebuffer[st]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)F.__webglFramebuffer[st]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let st=0,wt=Z.length;st<wt;st++){const St=i.get(Z[st]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&bt(T)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const wt=Z[st];F.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[st]);const St=a.convert(wt.format,wt.colorSpace),it=a.convert(wt.type),ut=w(wt.internalFormat,St,it,wt.colorSpace,T.isXRRenderTarget===!0),Ut=ge(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,F.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),$t(s.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)vt(F.__webglFramebuffer[st][wt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt);else vt(F.__webglFramebuffer[st],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let st=0,wt=Z.length;st<wt;st++){const St=Z[st],it=i.get(St);let ut=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,it.__webglTexture),$t(ut,St),vt(F.__webglFramebuffer,T,St,s.COLOR_ATTACHMENT0+st,ut,0),m(St)&&f(ut)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,W.__webglTexture),$t(st,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)vt(F.__webglFramebuffer[wt],T,x,s.COLOR_ATTACHMENT0,st,wt);else vt(F.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,st,0);m(x)&&f(st),e.unbindTexture()}T.depthBuffer&&Jt(T)}function me(T){const x=T.textures;for(let F=0,W=x.length;F<W;F++){const Z=x[F];if(m(Z)){const V=S(T),Tt=i.get(Z).__webglTexture;e.bindTexture(V,Tt),f(V),e.unbindTexture()}}}const Bt=[],kt=[];function yt(T){if(T.samples>0){if(bt(T)===!1){const x=T.textures,F=T.width,W=T.height;let Z=s.COLOR_BUFFER_BIT;const V=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=i.get(T),st=x.length>1;if(st)for(let St=0;St<x.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const wt=T.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let St=0;St<x.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const it=i.get(x[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,F,W,0,0,F,W,Z,s.NEAREST),l===!0&&(Bt.length=0,kt.length=0,Bt.push(s.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Bt.push(V),kt.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<x.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const it=i.get(x[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,it,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ge(T){return Math.min(n.maxSamples,T.samples)}function bt(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Vt(T){const x=r.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Le(T,x){const F=T.colorSpace,W=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Vn&&F!==Vi&&(te.getTransfer(F)===ae?(W!==ci||Z!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=R,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=bt}function pm(s,t){function e(i,n=Vi){let a;const r=te.getTransfer(n);if(i===bi)return s.UNSIGNED_BYTE;if(i===uo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===fo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===sc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===ec)return s.BYTE;if(i===ic)return s.SHORT;if(i===cs)return s.UNSIGNED_SHORT;if(i===ho)return s.INT;if(i===pn)return s.UNSIGNED_INT;if(i===Li)return s.FLOAT;if(i===ps)return s.HALF_FLOAT;if(i===ac)return s.ALPHA;if(i===rc)return s.RGB;if(i===ci)return s.RGBA;if(i===ds)return s.DEPTH_COMPONENT;if(i===us)return s.DEPTH_STENCIL;if(i===oc)return s.RED;if(i===po)return s.RED_INTEGER;if(i===lc)return s.RG;if(i===mo)return s.RG_INTEGER;if(i===go)return s.RGBA_INTEGER;if(i===Ks||i===Zs||i===Js||i===Qs)if(r===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ar||i===Cr||i===Rr||i===Pr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ar)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lr||i===Dr||i===Ir)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Lr||i===Dr)return r===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ir)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ur||i===kr||i===Nr||i===Fr||i===Or||i===zr||i===Br||i===Hr||i===Gr||i===Vr||i===Wr||i===qr||i===Xr||i===$r)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ur)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Or)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Br)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$r)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jr||i===Yr||i===Kr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===jr)return r===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zr||i===Jr||i===Qr||i===to)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Zr)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Jr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===to)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Tc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new wi({vertexShader:mm,fragmentShader:gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Ye(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends qn{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new vm,f={},S=e.getContextAttributes();let w=null,_=null;const A=[],C=[],P=new gt;let D=null;const M=new Xe;M.viewport=new le;const b=new Xe;b.viewport=new le;const L=[M,b],N=new Fd;let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=A[Y];return Q===void 0&&(Q=new $a,A[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=A[Y];return Q===void 0&&(Q=new $a,A[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=A[Y];return Q===void 0&&(Q=new $a,A[Y]=Q),Q.getHandSpace()};function X(Y){const Q=C.indexOf(Y.inputSource);if(Q===-1)return;const vt=A[Q];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||r),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",J);for(let Y=0;Y<A.length;Y++){const Q=C[Y];Q!==null&&(C[Y]=null,A[Y].disconnect(Q))}H=null,j=null,m.reset();for(const Y in f)delete f[Y];t.setRenderTarget(w),p=null,u=null,d=null,n=null,_=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(w=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",$),n.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ot=null,Ct=null;S.depth&&(Ct=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?us:ds,Ot=S.stencil?hs:pn);const Jt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Jt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new mn(u.textureWidth,u.textureHeight,{format:ci,type:bi,depthTexture:new Ec(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,e,vt),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new mn(p.framebufferWidth,p.framebufferHeight,{format:ci,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),ie.setContext(n),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Y){for(let Q=0;Q<Y.removed.length;Q++){const vt=Y.removed[Q],Ot=C.indexOf(vt);Ot>=0&&(C[Ot]=null,A[Ot].disconnect(vt))}for(let Q=0;Q<Y.added.length;Q++){const vt=Y.added[Q];let Ot=C.indexOf(vt);if(Ot===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=C.length){C.push(vt),Ot=Jt;break}else if(C[Jt]===null){C[Jt]=vt,Ot=Jt;break}if(Ot===-1)break}const Ct=A[Ot];Ct&&Ct.connect(vt)}}const G=new E,ct=new E;function ft(Y,Q,vt){G.setFromMatrixPosition(Q.matrixWorld),ct.setFromMatrixPosition(vt.matrixWorld);const Ot=G.distanceTo(ct),Ct=Q.projectionMatrix.elements,Jt=vt.projectionMatrix.elements,Fe=Ct[14]/(Ct[10]-1),R=Ct[14]/(Ct[10]+1),me=(Ct[9]+1)/Ct[5],Bt=(Ct[9]-1)/Ct[5],kt=(Ct[8]-1)/Ct[0],yt=(Jt[8]+1)/Jt[0],ge=Fe*kt,bt=Fe*yt,Vt=Ot/(-kt+yt),Le=Vt*-kt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Le),Y.translateZ(Vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const we=Fe+Vt,T=R+Vt,x=ge-Le,F=bt+(Ot-Le),W=me*R/T*we,Z=Bt*R/T*we;Y.projectionMatrix.makePerspective(x,F,W,Z,we,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Rt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let Q=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),N.near=b.near=M.near=Q,N.far=b.far=M.far=vt,(H!==N.near||j!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,j=N.far),N.layers.mask=Y.layers.mask|6,M.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;const Ot=Y.parent,Ct=N.cameras;Rt(N,Ot);for(let Jt=0;Jt<Ct.length;Jt++)Rt(Ct[Jt],Ot);Ct.length===2?ft(N,M,b):N.projectionMatrix.copy(M.projectionMatrix),$t(Y,N,Ot)};function $t(Y,Q,vt){vt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=io*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return f[Y]};let he=null;function pe(Y,Q){if(h=Q.getViewerPose(c||r),g=Q,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ot=!1;vt.length!==N.cameras.length&&(N.cameras.length=0,Ot=!0);for(let R=0;R<vt.length;R++){const me=vt[R];let Bt=null;if(p!==null)Bt=p.getViewport(me);else{const yt=d.getViewSubImage(u,me);Bt=yt.viewport,R===0&&(t.setRenderTargetTextures(_,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(_))}let kt=L[R];kt===void 0&&(kt=new Xe,kt.layers.enable(R),kt.viewport=new le,L[R]=kt),kt.matrix.fromArray(me.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(me.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),R===0&&(N.matrix.copy(kt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ot===!0&&N.cameras.push(kt)}const Ct=n.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const R=d.getDepthInformation(vt[0]);R&&R.isValid&&R.texture&&m.init(R,n.renderState)}if(Ct&&Ct.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let R=0;R<vt.length;R++){const me=vt[R].camera;if(me){let Bt=f[me];Bt||(Bt=new Tc,f[me]=Bt);const kt=d.getCameraImage(me);Bt.sourceTexture=kt}}}}for(let vt=0;vt<A.length;vt++){const Ot=C[vt],Ct=A[vt];Ot!==null&&Ct!==void 0&&Ct.update(Ot,Q,c||r)}he&&he(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ie=new Ic;ie.setAnimationLoop(pe),this.setAnimationLoop=function(Y){he=Y},this.dispose=function(){}}}const sn=new Mi,_m=new ue;function ym(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,vc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,S,w,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ne&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ne&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),w=S.envMap,_=S.envMapRotation;w&&(m.envMap.value=w,sn.copy(_),sn.x*=-1,sn.y*=-1,sn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),m.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(sn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function bm(s,t,e,i){let n={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const _=w.program;i.uniformBlockBinding(S,_)}function c(S,w){let _=n[S.id];_===void 0&&(g(S),_=h(S),n[S.id]=_,S.addEventListener("dispose",m));const A=w.program;i.updateUBOMapping(S,A);const C=t.render.frame;a[S.id]!==C&&(u(S),a[S.id]=C)}function h(S){const w=d();S.__bindingPointIndex=w;const _=s.createBuffer(),A=S.__size,C=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,_),_}function d(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=n[S.id],_=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let C=0,P=_.length;C<P;C++){const D=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,b=D.length;M<b;M++){const L=D[M];if(p(L,C,M,A)===!0){const N=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let X=0;X<H.length;X++){const $=H[X],J=v($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,N+j,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,w,_,A){const C=S.value,P=w+"_"+_;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const D=A[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return A[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(S){const w=S.uniforms;let _=0;const A=16;for(let P=0,D=w.length;P<D;P++){const M=Array.isArray(w[P])?w[P]:[w[P]];for(let b=0,L=M.length;b<L;b++){const N=M[b],H=Array.isArray(N.value)?N.value:[N.value];for(let j=0,X=H.length;j<X;j++){const $=H[j],J=v($),G=_%A,ct=G%J.boundary,ft=G+ct;_+=ct,ft!==0&&A-ft<J.storage&&(_+=A-ft),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=J.storage}}}const C=_%A;return C>0&&(_+=A-C),S.__size=_,S.__cache={},this}function v(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const _=r.indexOf(w.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete a[w.id]}function f(){for(const S in n)s.deleteBuffer(n[S]);r=[],n={},a={}}return{bind:l,update:c,dispose:f}}class Mm{constructor(t={}){const{canvas:e=zh(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Be;let C=0,P=0,D=null,M=-1,b=null;const L=new le,N=new le;let H=null;const j=new Dt(0);let X=0,$=e.width,J=e.height,G=1,ct=null,ft=null;const Rt=new le(0,0,$,J),$t=new le(0,0,$,J);let he=!1;const pe=new _o;let ie=!1,Y=!1;const Q=new ue,vt=new E,Ot=new le,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Fe(){return D===null?G:1}let R=i;function me(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lo}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),R===null){const U="webgl2";if(R=me(U,y),R===null)throw me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Bt,kt,yt,ge,bt,Vt,Le,we,T,x,F,W,Z,V,Tt,st,wt,St,it,ut,Ut,Et,ht,Ht;function I(){Bt=new Dp(R),Bt.init(),Et=new pm(R,Bt),kt=new Ep(R,Bt,t,Et),yt=new um(R,Bt),kt.reversedDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),ge=new kp(R),bt=new Q0,Vt=new fm(R,Bt,yt,bt,kt,Et,ge),Le=new Ap(_),we=new Lp(_),T=new Bd(R),ht=new wp(R,T),x=new Ip(R,T,ge,ht),F=new Fp(R,x,T,ge),it=new Np(R,kt,Vt),st=new Tp(bt),W=new J0(_,Le,we,Bt,kt,ht,st),Z=new ym(_,bt),V=new em,Tt=new om(Bt),St=new Mp(_,Le,we,yt,F,p,l),wt=new hm(_,F,kt),Ht=new bm(R,ge,kt,yt),ut=new Sp(R,Bt,ge),Ut=new Up(R,Bt,ge),ge.programs=W.programs,_.capabilities=kt,_.extensions=Bt,_.properties=bt,_.renderLists=V,_.shadowMap=wt,_.state=yt,_.info=ge}I();const nt=new xm(_,R);this.xr=nt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize($,J,!1))},this.getSize=function(y){return y.set($,J)},this.setSize=function(y,U,O=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,J=U,e.width=Math.floor(y*G),e.height=Math.floor(U*G),O===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set($*G,J*G).floor()},this.setDrawingBufferSize=function(y,U,O){$=y,J=U,G=O,e.width=Math.floor(y*O),e.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,U,O,z){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,U,O,z),yt.viewport(L.copy(Rt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy($t)},this.setScissor=function(y,U,O,z){y.isVector4?$t.set(y.x,y.y,y.z,y.w):$t.set(y,U,O,z),yt.scissor(N.copy($t).multiplyScalar(G).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(y){yt.setScissorTest(he=y)},this.setOpaqueSort=function(y){ct=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,O=!0){let z=0;if(y){let k=!1;if(D!==null){const et=D.texture.format;k=et===go||et===mo||et===po}if(k){const et=D.texture.type,dt=et===bi||et===pn||et===cs||et===hs||et===uo||et===fo,xt=St.getClearColor(),pt=St.getClearAlpha(),It=xt.r,Nt=xt.g,Pt=xt.b;dt?(g[0]=It,g[1]=Nt,g[2]=Pt,g[3]=pt,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=It,v[1]=Nt,v[2]=Pt,v[3]=pt,R.clearBufferiv(R.COLOR,0,v))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT),O&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),St.dispose(),V.dispose(),Tt.dispose(),bt.dispose(),Le.dispose(),we.dispose(),F.dispose(),ht.dispose(),Ht.dispose(),W.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ui),nt.removeEventListener("sessionend",Ao),Ki.stop()};function at(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=ge.autoReset,U=wt.enabled,O=wt.autoUpdate,z=wt.needsUpdate,k=wt.type;I(),ge.autoReset=y,wt.enabled=U,wt.autoUpdate=O,wt.needsUpdate=z,wt.type=k}function tt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const U=y.target;U.removeEventListener("dispose",K),_t(U)}function _t(y){zt(y),bt.remove(y)}function zt(y){const U=bt.get(y).programs;U!==void 0&&(U.forEach(function(O){W.releaseProgram(O)}),y.isShaderMaterial&&W.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,z,k,et){U===null&&(U=Ct);const dt=k.isMesh&&k.matrixWorld.determinant()<0,xt=$c(y,U,O,z,k);yt.setMaterial(z,dt);let pt=O.index,It=1;if(z.wireframe===!0){if(pt=x.getWireframeAttribute(O),pt===void 0)return;It=2}const Nt=O.drawRange,Pt=O.attributes.position;let Yt=Nt.start*It,se=(Nt.start+Nt.count)*It;et!==null&&(Yt=Math.max(Yt,et.start*It),se=Math.min(se,(et.start+et.count)*It)),pt!==null?(Yt=Math.max(Yt,0),se=Math.min(se,pt.count)):Pt!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,Pt.count));const be=se-Yt;if(be<0||be===1/0)return;ht.setup(k,z,xt,O,pt);let fe,ce=ut;if(pt!==null&&(fe=T.get(pt),ce=Ut,ce.setIndex(fe)),k.isMesh)z.wireframe===!0?(yt.setLineWidth(z.wireframeLinewidth*Fe()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(k.isLine){let Lt=z.linewidth;Lt===void 0&&(Lt=1),yt.setLineWidth(Lt*Fe()),k.isLineSegments?ce.setMode(R.LINES):k.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else k.isPoints?ce.setMode(R.POINTS):k.isSprite&&ce.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,ve=k._multiDrawCounts,Qt=k._multiDrawCount,Ke=pt?T.get(pt).bytesPerElement:1,gn=bt.get(z).currentProgram.getUniforms();for(let Ze=0;Ze<Qt;Ze++)gn.setValue(R,"_gl_DrawID",Ze),ce.render(Lt[Ze]/Ke,ve[Ze])}else if(k.isInstancedMesh)ce.renderInstances(Yt,be,k.count);else if(O.isInstancedBufferGeometry){const Lt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ve=Math.min(O.instanceCount,Lt);ce.renderInstances(Yt,be,ve)}else ce.render(Yt,be)};function de(y,U,O){y.transparent===!0&&y.side===_e&&y.forceSinglePass===!1?(y.side=Ne,y.needsUpdate=!0,ys(y,U,O),y.side=Ui,y.needsUpdate=!0,ys(y,U,O),y.side=_e):ys(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),f=Tt.get(O),f.init(U),w.push(f),O.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),y!==O&&y.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const z=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const et=k.material;if(et)if(Array.isArray(et))for(let dt=0;dt<et.length;dt++){const xt=et[dt];de(xt,O,k),z.add(xt)}else de(et,O,k),z.add(et)}),f=w.pop(),z},this.compileAsync=function(y,U,O=null){const z=this.compile(y,U,O);return new Promise(k=>{function et(){if(z.forEach(function(dt){bt.get(dt).currentProgram.isReady()&&z.delete(dt)}),z.size===0){k(y);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ne=null;function Si(y){ne&&ne(y)}function ui(){Ki.stop()}function Ao(){Ki.start()}const Ki=new Ic;Ki.setAnimationLoop(Si),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(y){ne=y,nt.setAnimationLoop(y),y===null?Ki.stop():Ki.start()},nt.addEventListener("sessionstart",ui),nt.addEventListener("sessionend",Ao),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,U,D),f=Tt.get(y,w.length),f.init(U),w.push(f),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),pe.setFromProjectionMatrix(Q,_i,U.reversedDepth),Y=this.localClippingEnabled,ie=st.init(this.clippingPlanes,Y),m=V.get(y,S.length),m.init(),S.push(m),nt.enabled===!0&&nt.isPresenting===!0){const et=_.xr.getDepthSensingMesh();et!==null&&Ma(et,U,-1/0,_.sortObjects)}Ma(y,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,ft),Jt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Jt&&St.addToRenderList(m,y),this.info.render.frame++,ie===!0&&st.beginShadows();const O=f.state.shadowsArray;wt.render(O,y,U),ie===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,k=m.transmissive;if(f.setupLights(),U.isArrayCamera){const et=U.cameras;if(k.length>0)for(let dt=0,xt=et.length;dt<xt;dt++){const pt=et[dt];Ro(z,k,y,pt)}Jt&&St.render(y);for(let dt=0,xt=et.length;dt<xt;dt++){const pt=et[dt];Co(m,y,pt,pt.viewport)}}else k.length>0&&Ro(z,k,y,U),Jt&&St.render(y),Co(m,y,U);D!==null&&P===0&&(Vt.updateMultisampleRenderTarget(D),Vt.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(_,y,U),ht.resetDefaultState(),M=-1,b=null,w.pop(),w.length>0?(f=w[w.length-1],ie===!0&&st.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ma(y,U,O,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||pe.intersectsSprite(y)){z&&Ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const dt=F.update(y),xt=y.material;xt.visible&&m.push(y,dt,xt,O,Ot.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||pe.intersectsObject(y))){const dt=F.update(y),xt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ot.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ot.copy(dt.boundingSphere.center)),Ot.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(xt)){const pt=dt.groups;for(let It=0,Nt=pt.length;It<Nt;It++){const Pt=pt[It],Yt=xt[Pt.materialIndex];Yt&&Yt.visible&&m.push(y,dt,Yt,O,Ot.z,Pt)}}else xt.visible&&m.push(y,dt,xt,O,Ot.z,null)}}const et=y.children;for(let dt=0,xt=et.length;dt<xt;dt++)Ma(et[dt],U,O,z)}function Co(y,U,O,z){const k=y.opaque,et=y.transmissive,dt=y.transparent;f.setupLightsView(O),ie===!0&&st.setGlobalState(_.clippingPlanes,O),z&&yt.viewport(L.copy(z)),k.length>0&&_s(k,U,O),et.length>0&&_s(et,U,O),dt.length>0&&_s(dt,U,O),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Ro(y,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new mn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?ps:bi,minFilter:fn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],dt=z.viewport||L;et.setSize(dt.z*_.transmissionResolutionScale,dt.w*_.transmissionResolutionScale);const xt=_.getRenderTarget(),pt=_.getActiveCubeFace(),It=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(j),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Jt&&St.render(O);const Nt=_.toneMapping;_.toneMapping=Xi;const Pt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),ie===!0&&st.setGlobalState(_.clippingPlanes,z),_s(y,O,z),Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let se=0,be=U.length;se<be;se++){const fe=U[se],ce=fe.object,Lt=fe.geometry,ve=fe.material,Qt=fe.group;if(ve.side===_e&&ce.layers.test(z.layers)){const Ke=ve.side;ve.side=Ne,ve.needsUpdate=!0,Po(ce,O,z,Lt,ve,Qt),ve.side=Ke,ve.needsUpdate=!0,Yt=!0}}Yt===!0&&(Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et))}_.setRenderTarget(xt,pt,It),_.setClearColor(j,X),Pt!==void 0&&(z.viewport=Pt),_.toneMapping=Nt}function _s(y,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let k=0,et=y.length;k<et;k++){const dt=y[k],xt=dt.object,pt=dt.geometry,It=dt.group;let Nt=dt.material;Nt.allowOverride===!0&&z!==null&&(Nt=z),xt.layers.test(O.layers)&&Po(xt,U,O,pt,Nt,It)}}function Po(y,U,O,z,k,et){y.onBeforeRender(_,U,O,z,k,et),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(_,U,O,z,y,et),k.transparent===!0&&k.side===_e&&k.forceSinglePass===!1?(k.side=Ne,k.needsUpdate=!0,_.renderBufferDirect(O,U,z,k,y,et),k.side=Ui,k.needsUpdate=!0,_.renderBufferDirect(O,U,z,k,y,et),k.side=_e):_.renderBufferDirect(O,U,z,k,y,et),y.onAfterRender(_,U,O,z,k,et)}function ys(y,U,O){U.isScene!==!0&&(U=Ct);const z=bt.get(y),k=f.state.lights,et=f.state.shadowsArray,dt=k.state.version,xt=W.getParameters(y,k.state,et,U,O),pt=W.getProgramCacheKey(xt);let It=z.programs;z.environment=y.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(y.isMeshStandardMaterial?we:Le).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",K),It=new Map,z.programs=It);let Nt=It.get(pt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===dt)return Do(y,xt),Nt}else xt.uniforms=W.getUniforms(y),y.onBeforeCompile(xt,_),Nt=W.acquireProgram(xt,pt),It.set(pt,Nt),z.uniforms=xt.uniforms;const Pt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Do(y,xt),z.needsLights=Yc(y),z.lightsStateVersion=dt,z.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.directionalShadowMap.value=k.state.directionalShadowMap,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotShadowMap.value=k.state.spotShadowMap,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMap.value=k.state.pointShadowMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function Lo(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ta.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Do(y,U){const O=bt.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function $c(y,U,O,z,k){U.isScene!==!0&&(U=Ct),Vt.resetTextureUnits();const et=U.fog,dt=z.isMeshStandardMaterial?U.environment:null,xt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vn,pt=(z.isMeshStandardMaterial?we:Le).get(z.envMap||dt),It=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Nt=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!O.morphAttributes.position,Yt=!!O.morphAttributes.normal,se=!!O.morphAttributes.color;let be=Xi;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(be=_.toneMapping);const fe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=fe!==void 0?fe.length:0,Lt=bt.get(z),ve=f.state.lights;if(ie===!0&&(Y===!0||y!==b)){const He=y===b&&z.id===M;st.setState(z,y,He)}let Qt=!1;z.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ve.state.version||Lt.outputColorSpace!==xt||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==pt||z.fog===!0&&Lt.fog!==et||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==It||Lt.vertexTangents!==Nt||Lt.morphTargets!==Pt||Lt.morphNormals!==Yt||Lt.morphColors!==se||Lt.toneMapping!==be||Lt.morphTargetsCount!==ce)&&(Qt=!0):(Qt=!0,Lt.__version=z.version);let Ke=Lt.currentProgram;Qt===!0&&(Ke=ys(z,U,k));let gn=!1,Ze=!1,jn=!1;const xe=Ke.getUniforms(),ti=Lt.uniforms;if(yt.useProgram(Ke.program)&&(gn=!0,Ze=!0,jn=!0),z.id!==M&&(M=z.id,Ze=!0),gn||b!==y){yt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xe.setValue(R,"projectionMatrix",y.projectionMatrix),xe.setValue(R,"viewMatrix",y.matrixWorldInverse);const qe=xe.map.cameraPosition;qe!==void 0&&qe.setValue(R,vt.setFromMatrixPosition(y.matrixWorld)),kt.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xe.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Ze=!0,jn=!0)}if(k.isSkinnedMesh){xe.setOptional(R,k,"bindMatrix"),xe.setOptional(R,k,"bindMatrixInverse");const He=k.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),xe.setValue(R,"boneTexture",He.boneTexture,Vt))}k.isBatchedMesh&&(xe.setOptional(R,k,"batchingTexture"),xe.setValue(R,"batchingTexture",k._matricesTexture,Vt),xe.setOptional(R,k,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",k._indirectTexture,Vt),xe.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",k._colorsTexture,Vt));const ei=O.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&it.update(k,O,Ke),(Ze||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,xe.setValue(R,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ti.envMap.value=pt,ti.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(ti.envMapIntensity.value=U.environmentIntensity),Ze&&(xe.setValue(R,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&jc(ti,jn),et&&z.fog===!0&&Z.refreshFogUniforms(ti,et),Z.refreshMaterialUniforms(ti,z,G,J,f.state.transmissionRenderTarget[y.id]),ta.upload(R,Lo(Lt),ti,Vt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ta.upload(R,Lo(Lt),ti,Vt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xe.setValue(R,"center",k.center),xe.setValue(R,"modelViewMatrix",k.modelViewMatrix),xe.setValue(R,"normalMatrix",k.normalMatrix),xe.setValue(R,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const He=z.uniformsGroups;for(let qe=0,wa=He.length;qe<wa;qe++){const Zi=He[qe];Ht.update(Zi,Ke),Ht.bind(Zi,Ke)}}return Ke}function jc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Yc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,U,O){const z=bt.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),bt.get(y.texture).__webglTexture=U,bt.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const O=bt.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Kc=R.createFramebuffer();this.setRenderTarget=function(y,U=0,O=0){D=y,C=U,P=O;let z=!0,k=null,et=!1,dt=!1;if(y){const pt=bt.get(y);if(pt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(pt.__webglFramebuffer===void 0)Vt.setupRenderTarget(y);else if(pt.__hasExternalTextures)Vt.rebindTextures(y,bt.get(y.texture).__webglTexture,bt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pt=y.depthTexture;if(pt.__boundDepthTexture!==Pt){if(Pt!==null&&bt.has(Pt)&&(y.width!==Pt.image.width||y.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(y)}}const It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const Nt=bt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?k=Nt[U][O]:k=Nt[U],et=!0):y.samples>0&&Vt.useMultisampledRTT(y)===!1?k=bt.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[O]:k=Nt,L.copy(y.viewport),N.copy(y.scissor),H=y.scissorTest}else L.copy(Rt).multiplyScalar(G).floor(),N.copy($t).multiplyScalar(G).floor(),H=he;if(O!==0&&(k=Kc),yt.bindFramebuffer(R.FRAMEBUFFER,k)&&z&&yt.drawBuffers(y,k),yt.viewport(L),yt.scissor(N),yt.setScissorTest(H),et){const pt=bt.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,O)}else if(dt){const pt=U;for(let It=0;It<y.textures.length;It++){const Nt=bt.get(y.textures[It]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+It,Nt.__webglTexture,O,pt)}}else if(y!==null&&O!==0){const pt=bt.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pt.__webglTexture,O)}M=-1},this.readRenderTargetPixels=function(y,U,O,z,k,et,dt,xt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt){yt.bindFramebuffer(R.FRAMEBUFFER,pt);try{const It=y.textures[xt],Nt=It.format,Pt=It.type;if(!kt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&O>=0&&O<=y.height-k&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xt),R.readPixels(U,O,z,k,Et.convert(Nt),Et.convert(Pt),et))}finally{const It=D!==null?bt.get(D).__webglFramebuffer:null;yt.bindFramebuffer(R.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,z,k,et,dt,xt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt)if(U>=0&&U<=y.width-z&&O>=0&&O<=y.height-k){yt.bindFramebuffer(R.FRAMEBUFFER,pt);const It=y.textures[xt],Nt=It.format,Pt=It.type;if(!kt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Yt),R.bufferData(R.PIXEL_PACK_BUFFER,et.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xt),R.readPixels(U,O,z,k,Et.convert(Nt),Et.convert(Pt),0);const se=D!==null?bt.get(D).__webglFramebuffer:null;yt.bindFramebuffer(R.FRAMEBUFFER,se);const be=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Bh(R,be,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Yt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,et),R.deleteBuffer(Yt),R.deleteSync(be),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,O=0){const z=Math.pow(2,-O),k=Math.floor(y.image.width*z),et=Math.floor(y.image.height*z),dt=U!==null?U.x:0,xt=U!==null?U.y:0;Vt.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,dt,xt,k,et),yt.unbindTexture()};const Zc=R.createFramebuffer(),Jc=R.createFramebuffer();this.copyTextureToTexture=function(y,U,O=null,z=null,k=0,et=null){et===null&&(k!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=k,k=0):et=0);let dt,xt,pt,It,Nt,Pt,Yt,se,be;const fe=y.isCompressedTexture?y.mipmaps[et]:y.image;if(O!==null)dt=O.max.x-O.min.x,xt=O.max.y-O.min.y,pt=O.isBox3?O.max.z-O.min.z:1,It=O.min.x,Nt=O.min.y,Pt=O.isBox3?O.min.z:0;else{const ei=Math.pow(2,-k);dt=Math.floor(fe.width*ei),xt=Math.floor(fe.height*ei),y.isDataArrayTexture?pt=fe.depth:y.isData3DTexture?pt=Math.floor(fe.depth*ei):pt=1,It=0,Nt=0,Pt=0}z!==null?(Yt=z.x,se=z.y,be=z.z):(Yt=0,se=0,be=0);const ce=Et.convert(U.format),Lt=Et.convert(U.type);let ve;U.isData3DTexture?(Vt.setTexture3D(U,0),ve=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Vt.setTexture2DArray(U,0),ve=R.TEXTURE_2D_ARRAY):(Vt.setTexture2D(U,0),ve=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=R.getParameter(R.UNPACK_ROW_LENGTH),Ke=R.getParameter(R.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ze=R.getParameter(R.UNPACK_SKIP_ROWS),jn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,fe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pt);const xe=y.isDataArrayTexture||y.isData3DTexture,ti=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const ei=bt.get(y),He=bt.get(U),qe=bt.get(ei.__renderTarget),wa=bt.get(He.__renderTarget);yt.bindFramebuffer(R.READ_FRAMEBUFFER,qe.__webglFramebuffer),yt.bindFramebuffer(R.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let Zi=0;Zi<pt;Zi++)xe&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.get(y).__webglTexture,k,Pt+Zi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,et,be+Zi)),R.blitFramebuffer(It,Nt,dt,xt,Yt,se,dt,xt,R.DEPTH_BUFFER_BIT,R.NEAREST);yt.bindFramebuffer(R.READ_FRAMEBUFFER,null),yt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||bt.has(y)){const ei=bt.get(y),He=bt.get(U);yt.bindFramebuffer(R.READ_FRAMEBUFFER,Zc),yt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Jc);for(let qe=0;qe<pt;qe++)xe?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ei.__webglTexture,k,Pt+qe):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ei.__webglTexture,k),ti?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,He.__webglTexture,et,be+qe):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,He.__webglTexture,et),k!==0?R.blitFramebuffer(It,Nt,dt,xt,Yt,se,dt,xt,R.COLOR_BUFFER_BIT,R.NEAREST):ti?R.copyTexSubImage3D(ve,et,Yt,se,be+qe,It,Nt,dt,xt):R.copyTexSubImage2D(ve,et,Yt,se,It,Nt,dt,xt);yt.bindFramebuffer(R.READ_FRAMEBUFFER,null),yt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ti?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(ve,et,Yt,se,be,dt,xt,pt,ce,Lt,fe.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(ve,et,Yt,se,be,dt,xt,pt,ce,fe.data):R.texSubImage3D(ve,et,Yt,se,be,dt,xt,pt,ce,Lt,fe):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,et,Yt,se,dt,xt,ce,Lt,fe.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,et,Yt,se,fe.width,fe.height,ce,fe.data):R.texSubImage2D(R.TEXTURE_2D,et,Yt,se,dt,xt,ce,Lt,fe);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ke),R.pixelStorei(R.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,jn),et===0&&U.generateMipmaps&&R.generateMipmap(ve),yt.unbindTexture()},this.initRenderTarget=function(y){bt.get(y).__webglFramebuffer===void 0&&Vt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Vt.setTextureCube(y,0):y.isData3DTexture?Vt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Vt.setTexture2DArray(y,0):Vt.setTexture2D(y,0),yt.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,yt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Kt=(s,t,e)=>Math.max(t,Math.min(e,s)),an=(s,t,e)=>s+(t-s)*e,ke=(s=0,t=1)=>s+Math.random()*(t-s),Nl=s=>s[Math.floor(Math.random()*s.length)],si=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),ao=(s,t)=>Math.atan2(Math.sin(t-s),Math.cos(t-s)),da=(s,t,e)=>s+ao(s,t)*e,Oc=s=>{const t=Math.max(0,Math.floor(s));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};function zc(s=1){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function fi(s=""){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function mi(s){return new Promise(t=>setTimeout(t,s))}function To(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<760}class wm{constructor(t){this.canvas=t,this.renderer=new Mm({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Be,this.renderer.toneMapping=Ql,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pr,this.renderer.setClearColor(592653,1),this.clock=new Od,this.scene=null,this.camera=null,this.update=null,this.paused=!1,this.quality="high",this.width=0,this.height=0,this.pixelRatio=1,this.onResize=null,this.frame=0,this.fps=60,this._fpsAccum=0,this._fpsFrames=0,this.resize(),window.addEventListener("resize",()=>this.resize()),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}resize(){const t=window.innerWidth,e=window.innerHeight;this.width=t,this.height=e;const i=this.quality==="low"?1:this.quality==="medium"?1.5:2;this.pixelRatio=Math.min(window.devicePixelRatio||1,i),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,e,!1),this.camera&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix()),this.onResize?.(t,e)}setQuality(t){this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.renderer.shadowMap.type=t==="high"?pr:co,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t==="low"?1:t==="medium"?1.5:2)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.scene?.traverse(e=>{e.isLight&&e.isDirectionalLight&&(e.castShadow=t!=="low",e.shadow&&e.shadow.mapSize.set(t==="high"?1536:768,t==="high"?1536:768))})}setScene(t,e,i){this.scene=t,this.camera=e,e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),this.update=i,this.clock.getDelta()}loop(){requestAnimationFrame(this.loop);const t=this.clock.getDelta(),e=Kt(t,0,.05);this._fpsAccum+=t,this._fpsFrames++,this._fpsAccum>1&&(this.fps=Math.round(this._fpsFrames/this._fpsAccum),this._fpsAccum=0,this._fpsFrames=0),this.scene&&this.camera&&(!this.paused&&this.update&&this.update(e),this.renderer.render(this.scene,this.camera)),this.frame++}}const Fl={KeyJ:"attack",KeyK:"heavy",Space:"dodge",KeyQ:"heal",KeyR:"skill",KeyE:"interact",KeyF:"interact",Enter:"continue",Escape:"pause"},Ol={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};class Sm{constructor(t){this.canvas=t,this.keys=new Set,this.actions=[],this.joystick={x:0,y:0},this.look={x:0,y:0},this.pointerLocked=!1,this.dragging=!1,this.dragId=null,this.lastPointer={x:0,y:0},this.blocked=!1,this.enabled=!1,this.isTouch=To(),this.onPause=null,this.onFirstGesture=null,this.sensitivity=.0024,this.sensitivityMul=1,this.bind()}bind(){window.addEventListener("keydown",i=>{if(i.code!=="Tab"){if(i.code==="Escape"){this.enabled&&this.onPause?.();return}this.enabled&&((i.code==="ShiftLeft"||i.code==="ShiftRight")&&this.keys.add("sprint"),Ol[i.code]&&(this.keys.add(i.code),i.preventDefault()),Fl[i.code]&&(i.preventDefault(),i.repeat||this.trigger(Fl[i.code])))}}),window.addEventListener("keyup",i=>{this.keys.delete(i.code),(i.code==="ShiftLeft"||i.code==="ShiftRight")&&this.keys.delete("sprint")}),this.canvas.addEventListener("pointerdown",i=>{if(this.onFirstGesture?.(),!(!this.enabled||this.blocked)){if(i.pointerType==="mouse"){if(i.button===2){this.trigger("heavy");return}if(document.pointerLockElement!==this.canvas){this.requestLock();return}this.trigger("attack");return}(i.pointerType==="touch"||i.pointerType==="pen")&&(this.dragging=!0,this.dragId=i.pointerId,this.lastPointer.x=i.clientX,this.lastPointer.y=i.clientY,this.canvas.setPointerCapture(i.pointerId))}}),this.canvas.addEventListener("pointermove",i=>{if(!(!this.enabled||this.blocked)){if(this.pointerLocked){this.look.x+=i.movementX*this.sensitivity*this.sensitivityMul,this.look.y+=i.movementY*this.sensitivity*.82*this.sensitivityMul;return}if(this.dragging&&i.pointerId===this.dragId){const n=i.clientX-this.lastPointer.x,a=i.clientY-this.lastPointer.y;this.lastPointer.x=i.clientX,this.lastPointer.y=i.clientY,this.look.x+=n*.0045*this.sensitivityMul,this.look.y+=a*.0036*this.sensitivityMul}}});const t=i=>{i.pointerId===this.dragId&&(this.dragging=!1,this.dragId=null)};this.canvas.addEventListener("pointerup",t),this.canvas.addEventListener("pointercancel",t),this.canvas.addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.canvas,document.body.classList.toggle("pointer-locked",this.pointerLocked)}),document.addEventListener("mousemove",i=>{!this.pointerLocked||!this.enabled||this.blocked||(this.look.x+=i.movementX*this.sensitivity*this.sensitivityMul,this.look.y+=i.movementY*this.sensitivity*.82*this.sensitivityMul)});const e=()=>this.onFirstGesture?.();window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0}),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.keys.clear()})}setSensitivity(t){this.sensitivityMul=Kt(t||1,.4,2)}requestLock(){this.isTouch||this.canvas.requestPointerLock?.()}releaseLock(){document.pointerLockElement&&document.exitPointerLock?.()}setEnabled(t){this.enabled=t,t||(this.keys.clear(),this.joystick.x=0,this.joystick.y=0,this.look.x=0,this.look.y=0,this.releaseLock())}setBlocked(t){this.blocked=t,t&&(this.keys.clear(),this.joystick.x=0,this.joystick.y=0,this.releaseLock())}setJoystick(t,e){this.enabled&&(this.joystick.x=Kt(t,-1,1),this.joystick.y=Kt(e,-1,1))}trigger(t){!this.enabled||this.blocked||this.actions.push(t)}consume(t){const e=this.actions.indexOf(t);return e===-1?!1:(this.actions.splice(e,1),!0)}consumeAny(){return this.actions.length?this.actions.shift():null}get moveVector(){let t=this.joystick.x,e=this.joystick.y;for(const n of this.keys){const a=Ol[n];a&&(t+=a[0],e+=a[1])}const i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,y:e}}get sprinting(){return this.keys.has("sprint")}takeLook(){const t={x:this.look.x,y:this.look.y};return this.look.x=0,this.look.y=0,t}clearActions(){this.actions.length=0}}const rt={D2:73.42,A2:110,F3:174.61,G3:196,C4:261.63,D4:293.66,F4:349.23,G4:392,A4:440,C5:523.25,D5:587.33,F5:698.46},zl={menu:{step:.52,melody:[rt.D4,0,rt.A4,0,rt.F4,0,rt.C5,0,rt.A4,0,rt.G4,0,rt.F4,0,rt.D4,0],bass:[rt.D2,0,0,0,rt.A2,0,0,0,rt.F4/2,0,0,0,rt.D2,0,0,0],drums:[1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],drumGain:.12,drone:[rt.D2,rt.A2],wind:.018},field:{step:.36,melody:[rt.D4,0,rt.F4,rt.G4,0,rt.A4,0,rt.C5,rt.A4,0,rt.G4,0,rt.F4,rt.D4,0,0],bass:[rt.D2,0,rt.D2,0,rt.F3/2,0,rt.C4/2,0,rt.D2,0,rt.A2,0,rt.F3/2,0,rt.G3/2,0],drums:[1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0],drumGain:.16,drone:[rt.D2,rt.F3/2],wind:.012},boss:{step:.245,melody:[rt.D5,0,rt.C5,0,rt.A4,0,rt.F4,0,rt.G4,0,rt.A4,0,rt.C5,0,rt.A4,rt.F4],bass:[rt.D2,rt.D2,0,rt.D2,rt.F3/2,0,rt.D2,0,rt.A2,rt.A2,0,rt.A2,rt.F3/2,0,rt.G3/2,0],drums:[1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1],drumGain:.2,drone:[rt.D2,rt.G3/2],wind:.006},ending:{step:.6,melody:[rt.D4,rt.A4,rt.C5,rt.A4,rt.G4,rt.F4,rt.D4,0,rt.F4,rt.A4,rt.G4,rt.F4,rt.D4,0,rt.C4,0],bass:[rt.D2,0,0,0,rt.A2,0,0,0,rt.F3/2,0,0,0,rt.D2,0,0,0],drums:[1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],drumGain:.09,drone:[rt.D2,rt.A2],wind:.014}};class Em{constructor(t){this.settings=t,this.ctx=null,this.master=null,this.musicBus=null,this.sfxBus=null,this.droneGain=null,this.windGain=null,this.mode="none",this.pendingMode=null,this.timer=null,this.step=0,this.nextTime=0,this.noiseBuffer=null,this.suspended=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&!this.suspended&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"});const e=this.ctx.createDynamicsCompressor();if(e.threshold.value=-16,e.knee.value=22,e.ratio.value=5,e.attack.value=.004,e.release.value=.22,e.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=this.settings.master,this.master.connect(e),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=1e-4,this.musicBus.connect(this.master),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.settings.sfx*.66,this.sfxBus.connect(this.master),this.noiseBuffer=this.makeNoiseBuffer(2),this.buildDrone(),this.buildWind(),this.pendingMode){const i=this.pendingMode;this.pendingMode=null,this.playMusic(i)}}makeNoiseBuffer(t=2){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);let a=0;for(let r=0;r<e;r++){const o=Math.random()*2-1;a=(a+.02*o)/1.02,n[r]=a*3.2}return i}buildDrone(){const t=this.ctx;this.droneGain=t.createGain(),this.droneGain.gain.value=1e-4,this.droneGain.connect(this.musicBus);const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=420,e.Q.value=.6,e.connect(this.droneGain),this.droneOsc=[rt.D2,rt.A2].map((i,n)=>{const a=t.createOscillator();a.type=n?"sine":"triangle",a.frequency.value=i,a.detune.value=n?5:-6;const r=t.createGain();return r.gain.value=n?.12:.18,a.connect(r),r.connect(e),a.start(),a})}buildWind(){const t=this.ctx;this.windGain=t.createGain(),this.windGain.gain.value=1e-4,this.windGain.connect(this.musicBus);const e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=720,i.Q.value=.3,e.connect(i),i.connect(this.windGain),e.start();const n=t.createOscillator();n.frequency.value=.07;const a=t.createGain();a.gain.value=280,n.connect(a),a.connect(i.frequency),n.start()}setSettings(t){this.settings=t,this.ctx&&(this.master.gain.setTargetAtTime(t.master,this.ctx.currentTime,.08),this.sfxBus.gain.setTargetAtTime(t.sfx*.66,this.ctx.currentTime,.08),this.musicBus.gain.setTargetAtTime(this.mode==="none"?1e-4:t.music*.42,this.ctx.currentTime,.16))}playMusic(t){if(t===this.mode)return;if(!this.ctx){this.pendingMode=t;return}this.mode=t,this.step=0,this.nextTime=this.ctx.currentTime+.08;const e=t==="none"?1e-4:this.settings.music*.42;if(this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime),this.musicBus.gain.setTargetAtTime(e,this.ctx.currentTime,.4),t==="none"){this.droneGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.4),this.windGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.4),clearInterval(this.timer),this.timer=null;return}const i=zl[t];i&&(this.droneGain.gain.setTargetAtTime(t==="menu"?.055:.075,this.ctx.currentTime,.8),this.windGain.gain.setTargetAtTime(i.wind,this.ctx.currentTime,1.2),this.droneOsc[0].frequency.setTargetAtTime(i.drone[0],this.ctx.currentTime,.5),this.droneOsc[1].frequency.setTargetAtTime(i.drone[1],this.ctx.currentTime,.5),clearInterval(this.timer),this.schedule(),this.timer=setInterval(()=>this.schedule(),100))}schedule(){if(!this.ctx||!this.mode)return;const t=zl[this.mode];if(!t)return;const e=this.ctx.currentTime;for(;this.nextTime<e+.3;)this.playStep(this.step,this.nextTime,t),this.step=(this.step+1)%16,this.nextTime+=t.step}playStep(t,e,i){const n=i.melody[t];n&&this.pluck(n,e,.9,.055),t%4===0&&i.bass[t]&&this.pluck(i.bass[t],e,1.4,.05,!0),i.drums[t]&&(t%4===0?this.taiko(e,i.drumGain):this.woodblock(e,i.drumGain*.55)),this.mode==="boss"&&t===8&&this.metal(e,.028),this.mode==="menu"&&t===0&&this.bell(rt.D4*2,e,.035)}pluck(t,e,i=.8,n=.05,a=!1){const r=this.ctx,o=r.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.008),o.gain.exponentialRampToValueAtTime(1e-4,e+i);const l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(a?480:2600,e),l.frequency.exponentialRampToValueAtTime(a?180:740,e+i);const c=r.createOscillator();c.type=a?"sine":"triangle",c.frequency.value=t;const h=r.createOscillator();h.type="sine",h.frequency.value=t*2.01;const d=r.createGain();d.gain.value=.18,c.connect(l),h.connect(d),d.connect(l),l.connect(o),o.connect(this.musicBus),c.start(e),h.start(e),c.stop(e+i+.05),h.stop(e+i+.05)}taiko(t,e=.16){const i=this.ctx,n=i.createOscillator(),a=i.createGain();n.type="sine",n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(46,t+.3),a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.42),n.connect(a),a.connect(this.musicBus),n.start(t),n.stop(t+.45);const r=i.createBufferSource();r.buffer=this.noiseBuffer;const o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=220;const l=i.createGain();l.gain.setValueAtTime(e*.42,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.16),r.connect(o),o.connect(l),l.connect(this.musicBus),r.start(t,ke(0,1)),r.stop(t+.2)}woodblock(t,e=.05){const i=this.ctx,n=i.createOscillator(),a=i.createGain();n.type="square",n.frequency.setValueAtTime(680,t),n.frequency.exponentialRampToValueAtTime(410,t+.05),a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.08);const r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=2,n.connect(r),r.connect(a),a.connect(this.musicBus),n.start(t),n.stop(t+.1)}metal(t,e=.03){[rt.A4*2.01,rt.D5*1.49,rt.F5*1.86].forEach((n,a)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.value=n,o.gain.setValueAtTime(e/(a+1),t),o.gain.exponentialRampToValueAtTime(1e-4,t+1.2),r.connect(o),o.connect(this.musicBus),r.start(t),r.stop(t+1.25)})}bell(t,e,i=.02){[1,2.76,5.4].forEach((n,a)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.value=t*n,o.gain.setValueAtTime(i/(a+1),e),o.gain.exponentialRampToValueAtTime(1e-4,e+2.2),r.connect(o),o.connect(this.musicBus),r.start(e),r.stop(e+2.3)})}noise(t,e,i,n="bandpass",a=1200,r=.8,o=this.sfxBus){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noiseBuffer;const h=l.createBiquadFilter();h.type=n,h.frequency.setValueAtTime(a,t),h.Q.value=r;const d=l.createGain();d.gain.setValueAtTime(i,t),d.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(h),h.connect(d),d.connect(o),c.start(t,ke(0,1.2)),c.stop(t+e+.02)}sfx(t){if(!this.ctx)return;const e=this.ctx.currentTime+.005;switch(this.ctx,t){case"ui":this.tone(880,e,.08,.035,"sine",1500),this.tone(1320,e+.02,.09,.02,"sine");break;case"confirm":this.tone(392,e,.16,.05,"triangle"),this.tone(587.33,e+.08,.24,.045,"triangle");break;case"back":this.tone(330,e,.12,.035,"triangle"),this.tone(220,e+.05,.16,.025,"sine");break;case"dialogue":this.tone(520+ke(-40,40),e,.035,.018,"square",900);break;case"swing":this.noise(e,.18,.13,"bandpass",2200,1.2),this.tone(240,e,.1,.02,"sawtooth",420);break;case"heavySwing":this.noise(e,.34,.18,"bandpass",840,.7),this.tone(90,e,.28,.06,"sawtooth",250);break;case"hit":this.noise(e,.14,.22,"lowpass",580,.9),this.tone(140,e,.16,.09,"sine",280,55);break;case"heavyHit":this.noise(e,.3,.28,"lowpass",420,.7),this.tone(88,e,.44,.14,"sine",220,38),this.metal(e,.012);break;case"hurt":this.noise(e,.22,.2,"lowpass",300,.8),this.tone(180,e,.15,.06,"square",400,70);break;case"dodge":this.noise(e,.24,.1,"bandpass",700,.8),this.tone(600,e,.22,.025,"sine",1200,300);break;case"perfect":this.bell(1046.5,e,.08),this.noise(e,.3,.07,"highpass",3e3,.8);break;case"freeze":[523.25,659.25,783.99,1046.5].forEach((i,n)=>this.tone(i,e+n*.055,.5,.035,"sine")),this.noise(e,.7,.07,"highpass",4200,.5);break;case"heal":[293.66,440,587.33,880].forEach((i,n)=>this.tone(i,e+n*.09,.5,.038,"triangle"));break;case"coin":this.tone(1318.5,e,.08,.03,"square",3200),this.tone(1760,e+.055,.16,.025,"sine",4200);break;case"relic":[261.63,392,523.25,783.99,1046.5].forEach((i,n)=>this.bell(i,e+n*.1,.06));break;case"gong":this.bell(110,e,.14),this.noise(e,1.6,.08,"lowpass",800,.4);break;case"death":this.bell(98,e,.1),this.tone(220,e+.2,2.4,.06,"sawtooth",380,48),this.noise(e+.1,1.8,.09,"lowpass",400,.4);break;case"roar":this.tone(110,e,.75,.09,"sawtooth",380,55),this.tone(82,e+.08,.7,.08,"square",300,44),this.noise(e,.65,.12,"bandpass",500,.4);break;case"bossSlam":this.tone(55,e,.7,.2,"sine",130,28),this.noise(e,.5,.22,"lowpass",350,.5);break;case"uiOpen":this.tone(293.66,e,.14,.03,"triangle"),this.tone(440,e+.06,.24,.025,"sine");break;case"uiClose":this.tone(440,e,.12,.025,"triangle"),this.tone(293.66,e+.05,.2,.02,"sine");break;default:this.noise(e,.1,.04,"bandpass",1e3,1)}}tone(t,e,i,n,a="sine",r=5e3,o=null){const l=this.ctx,c=l.createOscillator(),h=l.createGain(),d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=r,c.type=a,c.frequency.setValueAtTime(t,e),o&&c.frequency.exponentialRampToValueAtTime(o,e+i),h.gain.setValueAtTime(n,e),h.gain.exponentialRampToValueAtTime(1e-4,e+i),c.connect(d),d.connect(h),h.connect(this.sfxBus),c.start(e),c.stop(e+i+.02)}suspend(){this.ctx&&(this.suspended=!0,this.ctx.suspend().catch(()=>{}))}resume(){this.ctx&&(this.suspended=!1,this.ctx.resume().catch(()=>{}))}}const Bc="houji.save.v2",Hc="houji.settings.v2",Tm={master:.8,music:.72,sfx:.86,quality:"auto",shake:!0,subtitles:!0,typewriter:!0,cameraSensitivity:1},ea={version:2,started:!1,chapter:0,unlocked:0,difficulty:"normal",relics:[],coins:0,upgrades:{body:0,staff:0,gourd:0},seenCharacters:["mallow","keeper"],endings:[],deaths:0,kills:0,playTime:0,completed:!1,introSeen:!1,tutorialSeen:!1,updatedAt:0};function Gc(s){try{return s?JSON.parse(s):null}catch{return null}}function Am(){const s=Gc(localStorage.getItem(Bc));return s?{...structuredClone(ea),...s,upgrades:{...ea.upgrades,...s.upgrades||{}},relics:Array.isArray(s.relics)?s.relics:[],seenCharacters:Array.isArray(s.seenCharacters)?s.seenCharacters:["mallow","keeper"],endings:Array.isArray(s.endings)?s.endings:[]}:structuredClone(ea)}function Se(s){const t={...s,updatedAt:Date.now()};s.updatedAt=t.updatedAt;try{localStorage.setItem(Bc,JSON.stringify(t))}catch{}return t}function Bl(){const s=structuredClone(ea);return Se(s),s}function Cm(){const s=Gc(localStorage.getItem(Hc));return{...Tm,...s||{}}}function Rm(s){try{localStorage.setItem(Hc,JSON.stringify(s))}catch{}}const ls={mallow:{name:"马喽",title:"天命人 · 试用期第 999 天",glyph:"猴",color:"#d9a94e",avatar:"monkey",bio:"一只刚毕业的猴子。没有编制，没有社保，只有一根从闲鱼买的二手棍子。他坚信只要足够努力，老板就能过上想要的生活。",quote:"“转正之后，是不是就能开始试用期了？”"},keeper:{name:"土地公",title:"花果山物业 · 夜班",glyph:"土",color:"#c9a35b",avatar:"keeper",bio:"在花果山管了八百年物业。见过七次取经、三次大闹天宫、一次 IPO 失败。如今兼职共享充电宝和香火代购。",quote:"“年轻人，缺功德吗？我这里可以贷款。”"},bajie:{name:"猪八戒",title:"前员工 · 灵活就业",glyph:"猪",color:"#d98992",avatar:"pig",bio:"曾是天蓬元帅，后来成了净坛使者，再后来因为报销问题被优化。现在送外卖，兼职情感咨询，主业是劝人别上班。",quote:"“我当年就是信了‘转正’两个字。”"},bear:{name:"黑熊精",title:"黑风山 · 首席招聘官",glyph:"熊",color:"#b98a53",avatar:"bear",bio:"黑风山最资深的中层。面试过三千只妖怪，发了零个 offer。口头禅是“我们是一个大家庭”，家里没有一个人准时下班。",quote:"“你的职业规划是什么？”"},rat:{name:"黄风大圣",title:"黄风岭 · 金牌骑手",glyph:"风",color:"#d0b05b",avatar:"rat",bio:"三界跑单王。曾用一口黄风吹散十万天兵，现在用同一口气吹凉超时的麻辣烫。差评率 0.01%，因为差评的人都被吹走了。",quote:"“您的外卖已超时四百年，请给个五星。”"},yellowbrow:{name:"黄眉",title:"小西天 · 金牌讲师",glyph:"眉",color:"#d6b35d",avatar:"yellowbrow",bio:"自称弥勒佛转世，实际是团建公司老板。擅长把“加班”讲成“修行”，把“降薪”讲成“布施”，把“裁员”讲成“毕业”。",quote:"“大家把眼睛闭上，想象一片草原。”"},hundredEyes:{name:"百眼魔君",title:"盘丝洞 · 头部主播",glyph:"眼",color:"#c27fb4",avatar:"spider",bio:"一百只眼睛，九十九只盯着在线人数，剩下一只盯着退款率。口头禅是“家人们”，但没有一个家人知道他的真名。",quote:"“不要九块九，今天只要你的命！”"},redboy:{name:"红孩儿",title:"火焰山 · 烧烤摊少主",glyph:"火",color:"#e77950",avatar:"redboy",bio:"三百岁，小学二年级。因为爸爸牛魔王常年应酬，家长会一次没去过。会把三昧真火用来点炭，把作业本用来引火。",quote:"“大人不能进！儿童免单！”"},sixear:{name:"六耳猕猴",title:"花果山 · 外包项目经理",glyph:"六",color:"#9d938a",avatar:"sixear",bio:"真假美猴王事件的真正赢家。当年被打死的那个是甲方，他留下来做了外包。现在负责整个“复活大圣”项目的交付。",quote:"“你是我招来接盘的。”"},rock:{name:"石敢当",title:"花果山 · 保安队长",glyph:"石",color:"#9a9181",avatar:"rock",bio:"一块考了三次保安证才上岸的石头。执勤八百年，没放过一个没带工牌的人，也没放过一个带了工牌的人。",quote:"“站住！面试请先交简历。”"},wukong:{name:"孙悟空",title:"斗战胜佛 · 已离职",glyph:"佛",color:"#d8b35b",avatar:"wukong",bio:"齐天大圣，斗战胜佛，花果山文旅创始人（已注销）。因拒绝签署新一轮 996 合同，现已离职，定位显示在海南。",quote:"“这佛，谁爱当谁当。”"}},ua=[{id:"worker",name:"打工人",english:"CLOCK IN, CHILL OUT",desc:"敌人伤害降低，生命上限提高。适合下班后只想笑一笑的人。",enemyDamage:.62,playerDamage:1.25,playerHp:1.2,enemyHp:.9},{id:"normal",name:"加班",english:"THE STANDARD SUFFERING",desc:"标准难度。你会挨打，也会加班。非常公平。",enemyDamage:1,playerDamage:1,playerHp:1,enemyHp:1},{id:"hard",name:"创业",english:"FOUNDER MODE",desc:"敌人伤害 +55%，生命 +20%。没有社保，没有退路，只有梦想。",enemyDamage:1.55,playerDamage:.9,playerHp:.95,enemyHp:1.2}],rn={skyTop:1581357,skyBottom:12618581,fog:8087890,fogDensity:.011,ground:4739643,ground2:6713418,path:9009244,arena:6117452,sun:16766368,hemi:10466756,accent:12210995,rim:16754782,dust:16766106,clouds:7,dustCount:120,roof:3155999,wall:5847338,gold:13607759,gate:8072485},$e=[{id:"prologue",index:0,numeral:"序",chapterLabel:"序章",name:"入职",english:"ONBOARDING",location:"花果山 · 人才市场",locationSign:"花 果 山 · 人 才 市 场",subtitle:"一个关于转正的恐怖故事",seed:11,poem:["山门还是那道山门","工牌已不是那块工牌"],goal:"完成入职培训",gateText:"入 职 通 道",theme:{...rn,skyTop:2372677,skyBottom:14066027,fog:9272157,ground:5004093,ground2:7174732,path:10061407,arena:6578254,sun:16767393,hemi:11191512,accent:12541753,rim:16756831,dust:16766606,clouds:6,gate:8270120,wall:6701615,gateColor:8270120,gold:14265688},enemies:[{kind:"anxious",role:"melee",x:7,z:14},{kind:"anxious",role:"melee",x:-8,z:11},{kind:"anxious",role:"melee",x:10,z:4},{kind:"anxious",role:"ranged",x:-10,z:2},{kind:"anxious",role:"melee",x:5,z:8}],boss:{type:"rock",name:"石敢当",title:"花果山 · 保安队长",hp:280,damage:13,intro:[{who:"rock",text:"站住！面试请先交简历。"},{who:"mallow",text:"我没有简历。"},{who:"rock",text:"那就交命。"},{who:"mallow",text:"你们公司流程挺快啊。"}],outro:[{who:"rock",text:"停……停手！你通过了。"},{who:"mallow",text:"通过什么了？我连岗位都不知道。"},{who:"rock",text:"天命人。就是……齐天大圣的平替。"},{who:"mallow",text:"平替？有五险一金吗？"},{who:"rock",text:"有六根。"},{who:"mallow",text:"我问的是五险一金。"},{who:"rock",text:"我们管这个叫“福报”。"}]},intro:[{who:null,text:"三天前，灵山集团年会。"},{who:"wukong",text:"这佛，谁爱当谁当。"},{who:null,text:"斗战胜佛把工牌拍在桌上，原地辞职，从此人间蒸发。"},{who:null,text:"灵山集团市值蒸发三千亿。董事会连夜开会，得出一个结论：再找一只猴子。"},{who:"keeper",text:"醒醒！别睡了！你就是新来的天命人？"},{who:"mallow",text:"我是来面试保安的。"},{who:"keeper",text:"保安？格局小了。你现在是齐天大圣的平替，六根收集专员，花果山荣誉员工。"},{who:"mallow",text:"工资呢？"},{who:"keeper",text:"谈钱多伤感情。来，先打五只蕉绿猴练练手。"},{who:"mallow",text:"它们为什么是绿的？"},{who:"keeper",text:"因为它们天天担心被优化。"}],keeperIdle:[{who:"keeper",text:"看到你头顶那根金线了吗？那不是佛光，是 KPI。"},{who:"keeper",text:"打不过就闪。闪不过就跑。跑不过就说是来面试的。"},{who:"keeper",text:"这棍子是我从闲鱼买的，卖家说原味九成新。"}],completeLines:[{who:null,text:"石敢当倒下了。他从怀里掏出一本《新员工手册》，封面写着八个大字："},{who:null,text:"“自愿加班，快乐成长。”"},{who:"keeper",text:"恭喜你，正式成为试用期员工！"},{who:"mallow",text:"刚才不是已经试用期第 999 天了吗？"},{who:"keeper",text:"那是上一家公司。我们这家从 1 开始算。"},{who:"keeper",text:"大圣把六根抵押给了天庭小额贷款。眼、耳、鼻、舌、身、意。全没了。"},{who:"keeper",text:"第一根在黑风山。那里正在开春季招聘会，鱼龙混杂，HR 不是人。"},{who:"mallow",text:"我什么时候出发？"},{who:"keeper",text:"现在。加班费从明天开始算。"}],reward:180},{id:"blackwind",index:1,numeral:"第一回",chapterLabel:"第一回",name:"面经",english:"THE INTERVIEW",location:"黑风山 · 春季招聘会",locationSign:"黑 风 山 · 春 季 招 聘 会",subtitle:"山还是那座山，HR 已经不是那个 HR",seed:23,poem:["黑风山上招人忙","简历一摞比山高","若问五险和一金","菩萨摇头鬼叹气"],goal:"闯过招聘会，拿回眼根",gateText:"面 试 通 道",relic:{id:"eye",name:"眼根",item:"绩效之眼",desc:"一颗永远不会闭眼的监控摄像头。它不看你做错了什么，只看你还不够努力。",quote:"“看见了吗？那是我给你留的成长空间。”"},theme:{...rn,skyTop:1778736,skyBottom:11105610,fog:7101515,fogDensity:.012,ground:4082229,ground2:5857599,path:8548436,arena:5854280,sun:16761466,hemi:9545656,accent:11422513,rim:16752722,dust:14859395,clouds:6,night:!1,roof:3024156,wall:5911334,gate:7808799,gateColor:7808799,gold:13738317},enemies:[{kind:"resume",role:"melee",x:8,z:17},{kind:"resume",role:"melee",x:-9,z:13},{kind:"resume",role:"ranged",x:11,z:6},{kind:"resume",role:"melee",x:-6,z:2},{kind:"resume",role:"bomber",x:15,z:0},{kind:"resume",role:"melee",x:-14,z:-3},{kind:"resume",role:"ranged",x:4,z:-4}],boss:{type:"bear",name:"黑熊精",title:"黑风山 · 首席招聘官",hp:640,damage:17,intro:[{who:"bear",text:"请坐。先做个自我介绍吧。"},{who:"mallow",text:"我叫马喽，来拿眼根。"},{who:"bear",text:"很好，很有目标感。你的职业规划是什么？"},{who:"mallow",text:"活着。"},{who:"bear",text:"很好，很有野心。那我们谈谈福报。"},{who:"mallow",text:"我不想谈福报。"},{who:"bear",text:"那就谈谈赔偿。"},{who:"mallow",text:"……谈福报吧。"},{who:"bear",text:"迟了！"}],outro:[{who:"bear",text:"别打了别打了！眼根给你！"},{who:"mallow",text:"早这样不就好了？"},{who:"bear",text:"我也是被逼的。上面说今年要“降本增效”，我只能把面试流程从三轮加到九轮。"},{who:"bear",text:"你知道最离谱的是什么吗？第九轮还是群面。九个面试官，一个候选人。"},{who:"mallow",text:"那你们招到人了吗？"},{who:"bear",text:"招到了。他来了一天，第二天就去了对面黄风岭送外卖。"},{who:"bear",text:"眼根拿走吧。替我给大圣带句话：他的社保，还挂在黑风山。"}]},intro:[{who:null,text:"黑风山。山门上挂着一条横幅："},{who:null,text:"“加入黑风山，一起改变世界。（下班时间：待定）”"},{who:"mallow",text:"这招聘会怎么还有妖怪在排队？"},{who:"keeper",text:"因为这里五险一金。虽然只有“五险”，没有“一金”。"},{who:"keeper",text:"眼根就在黑熊精手里。他是这里最大的 HR，也是唯一一个 HR。"},{who:"mallow",text:"其他人呢？"},{who:"keeper",text:"都被他优化了。现在整个黑风山的招聘、培训、裁员，都是他一个人干。"},{who:"mallow",text:"那确实挺忙的。"},{who:"keeper",text:"所以他才特别暴躁。去吧，记得先投简历。"},{who:"mallow",text:"我没有简历。"},{who:"keeper",text:"那就投个胎。"}],keeperIdle:[{who:"keeper",text:"黑熊精以前是给观音看门的。后来看门看腻了，改看简历。"},{who:"keeper",text:"他的面试题只有一道：你能否接受无偿加班？答不能的，当场优化。"},{who:"keeper",text:"我年轻时也投过他的简历。现在我是物业。"}],completeLines:[{who:null,text:"黑熊精交出眼根。那是一只还在录像的摄像头，红灯一闪一闪。"},{who:"mallow",text:"这东西怎么用？"},{who:"keeper",text:"别用。你只要一睁眼，它就会告诉你：你还可以更努力。"},{who:"mallow",text:"那还是闭着吧。"},{who:"keeper",text:"下一根在黄风岭。最近那儿外卖爆单，黄风大圣已经四百年没睡过觉了。"},{who:"mallow",text:"他为什么不辞职？"},{who:"keeper",text:"因为他是“灵活就业”，辞不了。"}],reward:240},{id:"yellowwind",index:2,numeral:"第二回",chapterLabel:"第二回",name:"超时",english:"DELIVERY DELAYED",location:"黄风岭 · 超时外卖站",locationSign:"黄 风 岭 · 超 时 外 卖 站",subtitle:"您的外卖正在黄风中迷路",seed:37,poem:["黄风卷地起黄沙","外卖骑手不回家","若问订单何时到","先给五星再说话"],goal:"穿过沙暴，找回耳根",gateText:"出 餐 通 道",relic:{id:"ear",name:"耳根",item:"单只降噪耳机",desc:"一副只剩左边的降噪耳机。戴上之后听不见老板画饼，也听不见闹钟。右边那只被黄风大圣拿去抵超时罚款了。",quote:"“左耳进，右耳出。右耳已经没有了。”"},theme:{...rn,skyTop:7033400,skyBottom:14393437,fog:11568212,fogDensity:.0165,ground:8874307,ground2:10583117,path:11702882,arena:8218441,sun:16764812,hemi:13939847,accent:12080179,rim:16757605,dust:16044440,dustCount:220,clouds:4,roof:3812126,wall:6965804,gate:7288101,gateColor:7288101,gold:13870675},enemies:[{kind:"takeout",role:"melee",x:8,z:16},{kind:"takeout",role:"ranged",x:-10,z:13},{kind:"takeout",role:"melee",x:12,z:7},{kind:"takeout",role:"bomber",x:-5,z:5},{kind:"takeout",role:"melee",x:-14,z:-1},{kind:"takeout",role:"ranged",x:6,z:-2},{kind:"takeout",role:"melee",x:16,z:-4},{kind:"takeout",role:"melee",x:-8,z:-5}],boss:{type:"rat",name:"黄风大圣",title:"黄风岭 · 金牌骑手",hp:800,damage:19,intro:[{who:"rat",text:"您好，您的外卖已超时四百年。"},{who:"mallow",text:"我不饿。"},{who:"rat",text:"不饿也得给五星好评。"},{who:"mallow",text:"差评。"},{who:"rat",text:"你再说一遍？"},{who:"mallow",text:"差评。"},{who:"rat",text:"那就别怪我给你加料了！"}],outro:[{who:"rat",text:"不跑了……我不跑了……"},{who:"rat",text:"四百年。你知道四百年送了多少单吗？八百万单。零差评。"},{who:"mallow",text:"这么厉害？"},{who:"rat",text:"因为我每次都提前点“已送达”。"},{who:"mallow",text:"……那确实零差评。"},{who:"rat",text:"耳根在箱子里。拿去吧。"},{who:"rat",text:"还有，如果见到一个猪头，跟他说：他欠我的三十七块五，不用还了。"},{who:"mallow",text:"猪头？"},{who:null,text:"话音未落，旁边的巨型外卖箱突然打开，一个猪头钻了出来。"},{who:"bajie",text:"谁在叫我？"}]},intro:[{who:null,text:"黄风岭。能见度不足五米，空气中弥漫着麻辣烫和沙子的味道。"},{who:"mallow",text:"这地方怎么这么多外卖柜？"},{who:"keeper",text:"黄风大圣把整座山改成了配送站。据说这里每天能送出三万单，超时两万九。"},{who:"mallow",text:"那剩下的一百单呢？"},{who:"keeper",text:"被风刮到东海去了。东海龙王现在开了一家麻辣烫。"},{who:"mallow",text:"耳根在他身上？"},{who:"keeper",text:"在。他把耳根抵押给了平台，换了辆新电瓶车。"},{who:"mallow",text:"那平台呢？"},{who:"keeper",text:"平台跑路了。现在那辆车归黄风大圣，耳根归平台，平台归天庭国资委。"},{who:"mallow",text:"……你们三界的经济结构真复杂。"}],keeperIdle:[{who:"keeper",text:"黄风大圣的扇子不是用来扇风的，是用来给差评顾客“物理降温”的。"},{who:"keeper",text:"他的电瓶车是我帮他修的。换了三块电池，两块是偷的，一块是借的。"},{who:"keeper",text:"这年头，神仙也要还房贷。"}],completeLines:[{who:"bajie",text:"所以……你是新来的天命人？"},{who:"mallow",text:"你是谁？"},{who:"bajie",text:"猪八戒。前净坛使者，现八戒快送五星骑手，兼职情感博主。"},{who:"mallow",text:"你怎么在箱子里？"},{who:"bajie",text:"躲债。天庭小贷给我打了四百个电话，我把他们拉黑了。"},{who:"bajie",text:"耳根拿着。戴上之后你会清静很多，也会穷很多。"},{who:"mallow",text:"为什么？"},{who:"bajie",text:"因为你听不见老板叫你加班了。"},{who:"keeper",text:"下一站，小西天。黄眉在那边搞强制团建。"},{who:"bajie",text:"黄眉？那孙子还活着？"},{who:"keeper",text:"活得好着呢。现在叫“黄眉老师”，一场课八千八。"},{who:"bajie",text:"……我送一年外卖都赚不到八千八。"},{who:"mallow",text:"所以你跟我们一起去？"},{who:"bajie",text:"去。但我不打架。我只负责在旁边说风凉话。"}],companion:!0,reward:300},{id:"xiaoxitian",index:3,numeral:"第三回",chapterLabel:"第三回",name:"团建",english:"MANDATORY FUN",location:"小西天 · 强制团建基地",locationSign:"小 西 天 · 强 制 团 建 基 地",subtitle:"凝心聚力，卷死同行",seed:41,poem:["小西天里雪纷纷","黄眉老师讲人生","闭眼想象大草原","睁眼还在 PPT"],goal:"潜入团建，夺回鼻根",gateText:"团 建 通 道",relic:{id:"nose",name:"鼻根",item:"画饼味香薰",desc:"一瓶永远闻起来像“明年上市”的香薰。闻多了会产生幻觉：公司明天就上市、期权马上能兑现、老板把你当兄弟。",quote:"“你闻到的不是饼，是未来。”"},theme:{...rn,skyTop:5400444,skyBottom:14145226,fog:11780030,fogDensity:.015,ground:9609371,ground2:12042684,path:13684932,arena:9148564,sun:16249564,hemi:13097699,accent:8272692,rim:12641023,dust:15398655,dustCount:160,snow:!0,clouds:8,night:!1,roof:4340533,wall:6898490,gate:6893865,gateColor:6893865,gold:13938271},enemies:[{kind:"snowman",role:"melee",x:8,z:17},{kind:"snowman",role:"ranged",x:-9,z:14},{kind:"snowman",role:"melee",x:12,z:6},{kind:"snowman",role:"bomber",x:-12,z:5},{kind:"snowman",role:"melee",x:-5,z:1},{kind:"snowman",role:"ranged",x:14,z:-2},{kind:"snowman",role:"melee",x:-15,z:-4},{kind:"snowman",role:"melee",x:3,z:-5}],boss:{type:"yellowbrow",name:"黄眉",title:"小西天 · 金牌讲师",hp:920,damage:21,intro:[{who:"yellowbrow",text:"欢迎来到“觉醒领导力”三天两夜封闭营。我是你们的导师，黄眉。"},{who:"mallow",text:"我不是来团建的，我来拿鼻根。"},{who:"yellowbrow",text:"很好，很有觉知。来，大家把眼睛闭上，想象一片草原。"},{who:"mallow",text:"我睁着呢。"},{who:"yellowbrow",text:"不，你闭着。你看见的不是草原，是未来。"},{who:"mallow",text:"我看见的是你 PPT 卡了。"},{who:"yellowbrow",text:"那是你的心卡了。"},{who:"bajie",text:"老师，能不能先退一下款？"},{who:"yellowbrow",text:"退款的家人，请先完成“感恩冥想”二十一小时。"},{who:"mallow",text:"打吧。"}],outro:[{who:"yellowbrow",text:"这不可能……我讲了三百场课，没有人能坚持到第二天。"},{who:"bajie",text:"因为第二天要补尾款。"},{who:"yellowbrow",text:"鼻根给你。反正也是我从大圣那儿“知识付费”来的。"},{who:"mallow",text:"你付了多少？"},{who:"yellowbrow",text:"九块九。还送了张优惠券。"},{who:"bajie",text:"大圣要是知道，能从海南游回来打死你。"},{who:"yellowbrow",text:"对了，友情提示：六耳猕猴在花果山等你们。整个项目都是他在管。"},{who:"mallow",text:"六耳猕猴？"},{who:"yellowbrow",text:"嗯。他说，你们只是他外包出去的“增量团队”。"}]},intro:[{who:null,text:"小西天。零下十八度，所有妖怪都穿着统一的冲锋衣。"},{who:"keeper",text:"看横幅。“凝心聚力，卷死同行。”"},{who:"bajie",text:"这地方我熟。当年黄眉就爱搞这套，把我们关在金铙里，说要“突破舒适区”。"},{who:"mallow",text:"金铙是什么？"},{who:"bajie",text:"一个巨大的金色耳机盒。我在里面待了三天，听了七十二小时成功学。"},{who:"mallow",text:"难怪你现在这样。"},{who:"bajie",text:"我哪样？"},{who:"mallow",text:"一开口就像被优化过。"},{who:"keeper",text:"鼻根在黄眉手里。他把它做成了香薰，卖给学员，说是“财富自由的味道”。"},{who:"mallow",text:"闻了会怎么样？"},{who:"keeper",text:"会觉得自己马上就要上市了。"},{who:"bajie",text:"我闻过。现在我欠了十八万。"}],keeperIdle:[{who:"keeper",text:"黄眉的课有个规矩：不准提问。因为一问，就露馅了。"},{who:"keeper",text:"他现在是“知识付费头部 IP”。头部是真的，付费也是真的，知识不一定。"},{who:"bajie",text:"物业大爷，你这充电宝能借我用用吗？我手机快没电了，要抢单。"},{who:"keeper",text:"扫码。押金八十。"}],completeLines:[{who:"bajie",text:"鼻根拿到了。你闻闻。"},{who:"mallow",text:"……我闻到了海景房。"},{who:"bajie",text:"别闻了！闻多了要还花呗的！"},{who:"keeper",text:"还剩舌根、身根、意根。下一站盘丝洞。"},{who:"mallow",text:"盘丝洞？那儿不是蜘蛛精吗？"},{who:"keeper",text:"现在叫“盘丝洞 MCN 直播基地”。七位蜘蛛姐妹都是主播，百眼魔君是她们的老板。"},{who:"bajie",text:"百眼？那家伙一百只眼睛，九十九只盯着钱。"},{who:"mallow",text:"剩下一只呢？"},{who:"bajie",text:"盯着退款率。"}],companion:!0,reward:360},{id:"pansi",index:4,numeral:"第四回",chapterLabel:"第四回",name:"上链接",english:"LIVE FROM THE WEB",location:"盘丝洞 · 直播基地",locationSign:"盘 丝 洞 · 直 播 基 地",subtitle:"家人们，把价格打下来",seed:53,poem:["盘丝洞里灯火明","七位主播喊家人","九块九毛上链接","舌头卖了不知情"],goal:"冲进直播间，抢回舌根",gateText:"直 播 通 道",relic:{id:"tongue",name:"舌根",item:"直播麦克风",desc:"一支会自动把“不知道”说成“家人们”的麦克风。插上电就能直播，拔掉电还能继续讲三小时。",quote:"“上链接！上链接！上链接！”"},theme:{...rn,skyTop:1445152,skyBottom:5976401,fog:3809600,fogDensity:.0155,ground:3416124,ground2:4664655,path:7030888,arena:4074052,sun:15775199,hemi:11832523,accent:16732051,rim:16748501,dust:16759005,dustCount:150,clouds:3,night:!0,stars:!0,roof:2825517,wall:5057358,gate:5907024,gateColor:5907024,gold:14199247,lights:[{x:14,y:4,z:0,color:16732061,intensity:3,distance:22},{x:-16,y:5,z:12,color:9202431,intensity:2,distance:20}]},enemies:[{kind:"spider",role:"melee",x:8,z:17},{kind:"spider",role:"ranged",x:-9,z:14},{kind:"spider",role:"melee",x:12,z:6},{kind:"spider",role:"bomber",x:-12,z:5},{kind:"spider",role:"melee",x:-5,z:1},{kind:"spider",role:"ranged",x:14,z:-2},{kind:"spider",role:"melee",x:-15,z:-4},{kind:"spider",role:"melee",x:3,z:-5}],boss:{type:"hundredEyes",name:"百眼魔君",title:"盘丝洞 · 头部主播",hp:1080,damage:23,intro:[{who:"hundredEyes",text:"家人们！欢迎来到直播间！今天给家人们把价格打下来！"},{who:"mallow",text:"这是什么？我的舌头？"},{who:"hundredEyes",text:"这是舌根！原装正品！大圣同款！仅此一件！"},{who:"mallow",text:"那是我身上的东西。"},{who:"hundredEyes",text:"现在它是“大圣严选”的爆款。不要九百九十八，不要九十八，今天只要你的命！"},{who:"mallow",text:"……上链接。"},{who:"hundredEyes",text:"你说什么？"},{who:"mallow",text:"我说，上链接。"},{who:"hundredEyes",text:"你他妈——（直播信号中断）"}],outro:[{who:"hundredEyes",text:"别打了别打了！家人们还在看！给我留点体面！"},{who:"bajie",text:"你的家人们已经去隔壁直播间了。"},{who:"hundredEyes",text:"不可能！我有一百万粉丝！"},{who:"bajie",text:"九十九万是买的，剩下一万是来看你翻车的。"},{who:"hundredEyes",text:"……舌根给你。退货地址写花果山。"},{who:"mallow",text:"你为什么要卖它？"},{who:"hundredEyes",text:"因为六耳说，只要凑齐六根，就能复活大圣，然后做一场“齐天大圣回归”的直播，GMV 至少十个亿。"},{who:"bajie",text:"大圣知道这事吗？"},{who:"hundredEyes",text:"知道。他说，分成给他打八折就行。"},{who:"mallow",text:"……所以他现在到底在哪？"},{who:"hundredEyes",text:"海南。朋友圈刚发了套海景房，配文是“终于不用上班了”。"}]},intro:[{who:null,text:"盘丝洞。洞顶挂满环形补光灯，地上堆着没拆的快递。"},{who:"keeper",text:"欢迎来到盘丝洞 MCN。这里签约了七位蜘蛛主播，粉丝加起来比南天门还多。"},{who:"bajie",text:"那墙上怎么全是“仅退款”？"},{who:"keeper",text:"那是她们的新业务。卖货不赚钱，靠仅退款和违约金盈利。"},{who:"mallow",text:"舌根呢？"},{who:"bajie",text:"在百眼魔君手里。他把它做成了直播麦克风，一开播就能让所有人下单。"},{who:"mallow",text:"这么厉害？"},{who:"keeper",text:"不厉害。他卖的是“大圣同款洗脚盆”，进价三块，卖三百八。"},{who:"bajie",text:"我买过。"},{who:"mallow",text:"……"},{who:"bajie",text:"别这么看我。那盆确实能洗脚。"}],keeperIdle:[{who:"keeper",text:"直播间的灯不能关。一关，家人们就会发现主播是只蜘蛛。"},{who:"bajie",text:"蜘蛛怎么了？蜘蛛就不能当主播吗？"},{who:"keeper",text:"能。但退货率高。"},{who:"keeper",text:"看到那个“已售十万”了吗？上个月退回来九万九。"}],completeLines:[{who:"mallow",text:"舌根。这麦克风怎么还在自动说话？"},{who:null,text:"麦克风突然自己响了起来：“家人们，点点关注，不迷路！”"},{who:"bajie",text:"扔了扔了！这玩意儿比我还能说！"},{who:"keeper",text:"还剩身根和意根。身根在火焰山。"},{who:"mallow",text:"火焰山不是牛魔王的地盘吗？"},{who:"keeper",text:"对。现在改成了烧烤一条街，牛魔王是最大股东，红孩儿是摊主。"},{who:"bajie",text:"红孩儿？那熊孩子还没长大？"},{who:"keeper",text:"三界延迟退休，儿童也不例外。"}],companion:!0,reward:420},{id:"flame",index:5,numeral:"第五回",chapterLabel:"第五回",name:"免单",english:"FREE REFILL",location:"火焰山 · 烧烤一条街",locationSign:"火 焰 山 · 烧 烤 一 条 街",subtitle:"三昧真火，全场八折",seed:67,poem:["火焰山下烤串香","牛王醉倒不结账","儿童免单大人死","家长会上没有人"],goal:"穿过烧烤街，取回身根",gateText:"烧 烤 通 道",relic:{id:"body",name:"身根",item:"健身年卡",desc:"一张有效期五百年的健身年卡。办卡时销售说“每天只要一小时”，办完卡后你只去过一次，还是去洗澡。",quote:"“自律给我自由。月卡给我负债。”"},theme:{...rn,skyTop:1707794,skyBottom:10504748,fog:7616812,fogDensity:.0145,ground:5387565,ground2:7029815,path:9068615,arena:6437423,sun:16756835,hemi:12551277,accent:16735012,rim:16747334,dust:16752987,dustCount:190,clouds:5,night:!0,ash:!0,stars:!0,roof:2824983,wall:5976871,gate:7284766,gateColor:7284766,gold:14065740,lights:[{x:-12,y:3,z:12,color:16735780,intensity:2.4,distance:17},{x:14,y:2,z:-2,color:16747836,intensity:2,distance:15}]},enemies:[{kind:"ash",role:"melee",x:8,z:17},{kind:"ash",role:"ranged",x:-9,z:14},{kind:"ash",role:"melee",x:12,z:6},{kind:"ash",role:"bomber",x:-12,z:5},{kind:"ash",role:"melee",x:-5,z:1},{kind:"ash",role:"ranged",x:14,z:-2},{kind:"ash",role:"melee",x:-15,z:-4},{kind:"ash",role:"melee",x:3,z:-5},{kind:"ash",role:"melee",x:18,z:8}],boss:{type:"redboy",name:"红孩儿",title:"火焰山 · 烧烤摊少主",hp:1240,damage:25,intro:[{who:"redboy",text:"大人不能进！这里儿童免单！"},{who:"mallow",text:"我不是大人，我是猴。"},{who:"redboy",text:"猴也要买票！"},{who:"mallow",text:"我找消费者协会。"},{who:"redboy",text:"我爸就是协会！"},{who:"mallow",text:"你爸呢？"},{who:"redboy",text:"……在陪客户。"},{who:"bajie",text:"小朋友，你妈妈呢？"},{who:"redboy",text:"不许提我妈！"},{who:"mallow",text:"看来只能打了。"},{who:"redboy",text:"打就打！我三昧真火可是上过央视的！"}],outro:[{who:"redboy",text:"呜呜呜……你们都欺负小孩……"},{who:"bajie",text:"别哭了，叔叔给你买糖。"},{who:"redboy",text:"我不吃糖。我只想让我爸来开一次家长会。"},{who:"bajie",text:"……"},{who:"redboy",text:"他说他忙。可他朋友圈天天发跟客户喝酒。"},{who:"mallow",text:"你妈呢？"},{who:"redboy",text:"我妈在铁扇公主号直播带货。她让我别打扰她冲销量。"},{who:"bajie",text:"……身根给你。别哭了。"},{who:"redboy",text:"身根是我从大圣那儿赢来的。他说谁能在三分钟内吃完一百串，就归谁。"},{who:"mallow",text:"你吃完了？"},{who:"redboy",text:"没有。但我爸是评委。"},{who:"bajie",text:"懂了。"}]},intro:[{who:null,text:"火焰山。地表温度八十八度，空气中飘着孜然和 KPI 的味道。"},{who:"keeper",text:"牛魔王把火焰山改成了烧烤一条街。生意火爆，因为游客一边烤一边哭，显得很有故事。"},{who:"bajie",text:"红孩儿在管摊子？他才多大？"},{who:"keeper",text:"三百岁。按三界算法，小学二年级。"},{who:"mallow",text:"他爸妈呢？"},{who:"keeper",text:"牛魔王在陪客户，铁扇公主在直播。孩子一个人看摊，一天烤两千串。"},{who:"bajie",text:"……我忽然觉得我送外卖也没那么惨。"},{who:"keeper",text:"身根在他手里。他把它当会员卡，说充值满一万才给看。"},{who:"mallow",text:"那卡里有钱吗？"},{who:"keeper",text:"有。五百年会费，自动续费。"}],keeperIdle:[{who:"keeper",text:"牛魔王喝多了会变成牛。喝完三箱会变成奶牛。"},{who:"bajie",text:"那红孩儿怎么不去找他爸？"},{who:"keeper",text:"找了。牛魔王说“爸爸在谈一个很重要的项目”，然后继续划拳。"},{who:"keeper",text:"这年头，当爹不用考证，当儿子却要面试。"}],completeLines:[{who:"redboy",text:"身根给你。反正我也不健身。"},{who:"mallow",text:"你还小，多运动是好的。"},{who:"redboy",text:"我每天搬两百箱炭。"},{who:"mallow",text:"……那确实不用健身。"},{who:"bajie",text:"小朋友，跟叔叔走吧。叔叔带你去找你爸。"},{who:"redboy",text:"真的？"},{who:"bajie",text:"真的。不过叔叔现在没钱，车费你出。"},{who:"redboy",text:"……那我还是看摊吧。"},{who:"keeper",text:"最后一根，意根。在花果山。"},{who:"bajie",text:"花果山……好久没回去了。"},{who:"keeper",text:"六耳猕猴在那边等你们。他说，这是最后一轮面试。"},{who:"mallow",text:"面试什么？"},{who:"keeper",text:"面试你，配不配当下一只猴子。"}],companion:!0,reward:500},{id:"final",index:6,numeral:"终回",chapterLabel:"终回",name:"离职",english:"THE RESIGNATION",location:"花果山 · 最终面试",locationSign:"花 果 山 · 最 终 面 试",subtitle:"这一次，面试官是你自己",seed:89,poem:["花果山上起高楼","水帘洞里通网线","大圣已乘飞机去","此地空余打工人"],goal:"完成最终面试",gateText:"最 终 面 试",isFinal:!0,relic:{id:"mind",name:"意根",item:"齐天大圣工牌",desc:"一块烫金的工牌，背面刻着入职日期，正面印着“齐天大圣”。戴上的那一刻，你会自动学会微笑、点头和说“收到”。",quote:"“欢迎加入大家庭。”"},theme:{...rn,skyTop:2759724,skyBottom:13597770,fog:7951953,fogDensity:.013,ground:5063225,ground2:6903879,path:8876115,arena:6049090,sun:16759928,hemi:10915208,accent:14704180,rim:16753238,dust:16764305,dustCount:170,clouds:7,stars:!0,night:!1,roof:3024143,wall:6175531,gate:7286308,gateColor:7286308,gold:14068047},enemies:[{kind:"clerk",role:"melee",x:8,z:16},{kind:"clerk",role:"ranged",x:-9,z:14},{kind:"clerk",role:"melee",x:12,z:6},{kind:"clerk",role:"bomber",x:-12,z:5},{kind:"clerk",role:"melee",x:-5,z:1},{kind:"clerk",role:"ranged",x:14,z:-2},{kind:"clerk",role:"melee",x:-15,z:-4},{kind:"clerk",role:"melee",x:3,z:-5},{kind:"clerk",role:"melee",x:-18,z:8},{kind:"clerk",role:"ranged",x:18,z:-8}],boss:{type:"sixear",name:"六耳猕猴",title:"花果山 · 外包项目经理",hp:1720,damage:28,intro:[{who:"sixear",text:"你终于来了。比合同上的交付日期晚了三天。"},{who:"mallow",text:"你是谁？"},{who:"sixear",text:"六耳猕猴。这个项目的外包 PM。你可以叫我“六哥”。"},{who:"mallow",text:"孙悟空呢？"},{who:"sixear",text:"在海口。海景房，两室一厅，月供三万八。朋友圈刚发。"},{who:"mallow",text:"他不管花果山了？"},{who:"sixear",text:"管啊。他把六根抵押了，换首付。你是我招来接盘的。"},{who:"mallow",text:"所以我这一路算什么？"},{who:"sixear",text:"算入职背调。"},{who:"bajie",text:"六耳，你当年不是被打死了吗？"},{who:"sixear",text:"死的是甲方。我是外包，不在编制内。"},{who:"mallow",text:"……这也行？"},{who:"sixear",text:"当然行。三界最稳的岗位，就是外包。"},{who:"sixear",text:"工牌在我这。打赢我，它就是你的。"}],outro:[{who:"sixear",text:"不错。比我预期多撑了四分钟。"},{who:"sixear",text:"工牌拿去。戴上它，你就是新的齐天大圣。"},{who:"mallow",text:"然后呢？"},{who:"sixear",text:"然后继续取经。取完这一趟，还有下一趟。取完下一趟，还有 DLC。"},{who:"sixear",text:"KPI 永不封顶，佛祖永远满意。"},{who:"keeper",text:"孩子，别听他的。天庭的编制，进去就出不来。"},{who:"bajie",text:"我当年就是信了“转正”两个字。"},{who:"sixear",text:"八戒，你转正过吗？"},{who:"bajie",text:"……没有。"},{who:"sixear",text:"那你插什么嘴？"},{who:"bajie",text:"我插嘴怎么了？我插嘴至少不用还房贷！"},{who:null,text:"六耳把工牌放在地上，退后两步。工牌在夕阳里闪着金光。"},{who:"sixear",text:"选吧。戴上，或者不戴。"},{who:null,text:"这是你最后一次面试。面试官是你自己。"}]},intro:[{who:null,text:"花果山。水帘洞还在，但洞前盖了一栋写字楼，名字叫“大圣国际中心”。"},{who:"bajie",text:"……我走的时候，这里还是桃树。"},{who:"keeper",text:"后来搞文旅开发，桃树全砍了，改成了共享办公。"},{who:"mallow",text:"那桃子呢？"},{who:"keeper",text:"做成盲盒了。一个六十八，隐藏款是桃核。"},{who:"bajie",text:"有人买吗？"},{who:"keeper",text:"有。买的人还觉得自己赚了。"},{who:null,text:"写字楼门口挂着一块牌子：“花果山最终面试 · 通过即上岗”。"},{who:"mallow",text:"我这一路，到底是为了什么？"},{who:"bajie",text:"为了转正。"},{who:"mallow",text:"转正之后呢？"},{who:"bajie",text:"……再试用一次。"}],keeperIdle:[{who:"keeper",text:"这栋楼是六耳盖的。他说，花果山不能只有猴子，还要有产业。"},{who:"bajie",text:"产业呢？"},{who:"keeper",text:"在 PPT 里。"},{who:"keeper",text:"孩子，等会儿不管选什么，别后悔。后悔比加班还伤身。"}],completeLines:[],companion:!0,reward:800}],Pm=[{kicker:"灵山集团 · 年度总结",title:"三天前",text:"斗战胜佛把工牌拍在年会的桌上，说了一句让全场安静的话。"},{kicker:"现场录音 · 第 37 秒",title:"“这佛，谁爱当谁当。”",text:"随后他拔下一根毫毛，变成一辆网约车，扬长而去。"},{kicker:"财经快讯",title:"市值蒸发三千亿",text:"灵山集团连夜召开董事会。议题只有一个：再找一只猴子。"},{kicker:"招聘启事 · 急聘",title:"天命人（外包）",text:`要求：会棍法，能加班，接受出差，接受超度。
待遇：六根。五险一金面议。`},{kicker:"花果山 · 人才市场",title:"你醒了",text:`你叫马喽。刚毕业，没社保，有一根从闲鱼买的二手棍子。
HR 说，只要找回大圣抵押的六根，你就能转正。`},{kicker:"入职须知 · 第 1 条",title:"转正之后",text:`“转正之后，就可以开始试用期了。”
你点了点头。你觉得这很合理。`}],Lm={badge:{id:"badge",numeral:"结局一",title:"光荣上岗",subtitle:"斗战胜佛（试用期）",color:"#d8b35b",lines:["你捡起工牌，戴在脖子上。","金光从工牌里涌出，照得你睁不开眼。你听见无数个声音在耳边说：欢迎加入大家庭。","第二天，你坐上了花果山最高那间办公室。桌上摆着一份新的取经计划、一份新的 KPI、一份新的股权激励协议。","你签了字。","三个月后，你开始掉毛。六个月后，你学会了说“我们是一个团队”。一年后，你在年会上把工牌拍在桌上，说：“这佛，谁爱当谁当。”","然后你坐上那辆网约车，去了海南。","海景房月供三万八。你每天醒来第一件事，是给下一只猴子发面试邀请。","招聘启事上写着：要求会棍法，能加班，接受出差，接受超度。","待遇：六根。五险一金面议。"],quote:"“恭喜转正。现在，请开始你的试用期。”"},grill:{id:"grill",numeral:"结局二",title:"离职快乐",subtitle:"花果山猴急奶茶 · 创始人",color:"#78bfa8",lines:["你把工牌扔进了烧烤炉。","塑料烧焦的味道很难闻。六耳看着你，像看着一个不可理喻的失败者。","“你会后悔的。”他说。","“可能吧。”你说，“但至少今天不用打卡。”","三个月后，花果山脚下开了一家奶茶店，名字叫“猴急”。招牌饮品是“转正椰椰”和“离职百香果”。","猪八戒负责财务，每天算错三次账。土地公负责物业，把共享充电宝摆在了收银台。红孩儿周末来兼职，负责烤棉花糖。","开业第一天，第一位客人是一只戴着墨镜的猴子。他点了一杯“无糖去冰”，坐在角落里刷了一下午手机。","临走时，他说：“还是你们会生活。”","你没有问他是不是孙悟空。他也没有说。","那天晚上，你第一次在十点前睡着。"],quote:"“离职不是失败。离职是把自己从别人的 KPI 里赎回来。”"},resell:{id:"resell",numeral:"结局三",title:"财务自由",subtitle:"闲鱼年度最佳卖家",color:"#d39b6a",lines:["你捡起工牌，拍了九张照片，挂上了闲鱼。","标题：“齐天大圣·九成新，仅盘过两次，因个人原因忍痛割爱。”","描述：“戴上即可上岗，自带金箍，支持七天无理由退货（天庭不包邮）。”","三分钟后，有人拍下。","买家是天庭国资委。他们急需一个形象代言人来稳住股价。","成交价八万八。你用这笔钱买下了花果山的地皮，把写字楼改成了民宿，把“大圣国际中心”改成了“大圣农家乐”。","开业当天，六耳来应聘前台。你让他先填个表。","他填到“离职原因”那一栏，停了很久。","最后他写：“公司没有给我转正。”","你给他倒了杯茶，说：“先试用三个月。”"],quote:"“打工人最大的幻觉，是以为自己只能被雇佣。”"}},Dm=[{id:"badge",label:"戴上工牌",hint:"成为新的齐天大圣。五险一金，面议。",icon:"戴"},{id:"grill",label:"扔进烧烤炉",hint:"工牌化灰，你开了一家奶茶店。",icon:"扔"},{id:"resell",label:"挂上闲鱼",hint:"九成新，仅盘过两次。财务自由。",icon:"卖"}],Hl=["小提示：闪避没有冷却，但有良心。","小提示：Boss 放大招前会发红。就像老板的脸。","小提示：葫芦里装的不是酒，是工位旁的桶装水。","小提示：被击败后不会掉装备，只会掉头发。","小提示：金色光柱不是佛光，是任务目标。","小提示：共享香火可以升级。扫码即拜，押金八十。","小提示：长按方向键不会让你跑得更快，只会让你更累。","小提示：定身术对老板无效，因为老板本来就不动。","小提示：这游戏没有抽卡。这是它唯一比现实好的地方。","小提示：如果打不过，可以试试先升级。如果还打不过，可以试试退款。","小提示：每根都很有用。每根都不包邮。","小提示：BGM 是程序合成的。听久了会产生“我在上班”的错觉。","小提示：截图分享给朋友，可以显著增加他们的精神负担。","小提示：本作没有内购。因为开发组也不会做内购。","小提示：土地公的建议不一定有用，但他很热情。","小提示：猪八戒说的每一句话，都不要当真。","小提示：如果你觉得剧情很离谱，说明你还没上过班。","小提示：真结局需要你把工牌扔进烧烤炉。别问为什么。","小提示：横屏体验更佳。竖屏也能玩，但猴子会显得更长。","小提示：游戏可以随时暂停。现实不行。"],Gl=["你被优化了。","本次绩效：C。","你已不在编制内。","HR 说这不是裁员，是毕业。","你倒下了。工位还热着。","试用期未通过。","你的猴命，不如 KPI 值钱。","你申请了劳动仲裁。仲裁员是妖怪。","你死了。但项目还得继续。","死亡不是终点，是下一轮面试。"],Vl=["上香一次，功德无量。扫码支付，支持花呗。","年轻人，缺功德吗？我这里可以贷款。","这个充电宝柜是我从人间偷的。别告诉城管。","别碰那个红色按钮，那是格式化。","升级可以，但别升太多。升太高，上面会注意到你。","大圣以前也常来。他每次只充电，不上香。","物业费又涨了。三界通胀，没办法。","你要是死了，记得把装备还回来。"],Im=[["出品","花果山第七制片厂（没有注册）"],["制作人","一只不愿意透露姓名的猴子"],["导演","马喽"],["编剧","被裁掉的 HR"],["美术","几何体仓库管理员"],["程序","一只会写 JavaScript 的猴子"],["动画","偷偷抖腿的实习生"],["音乐","Web Audio API 本尊"],["音效","摔键盘的声音"],["动作捕捉","周一早上的地铁"],["本地化","一个人"],["测试","你"],["特别鸣谢","所有在周一早上醒来的人"],["法律顾问","不存在。我们没有法务。"],["免责声明","本作纯属虚构。如有雷同，说明你也加班。"]];Object.fromEntries($e.map(s=>[s.id,s]));const lr=$e.filter(s=>s.relic).map(s=>({...s.relic,chapter:s.index}));function Vc(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,l=new Me;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const p=s[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in a){const d=Wl(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let v=0;v<r[h].length;++v)p.push(r[h][v][u]);const g=Wl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Wl(s){let t,e,i,n=-1,a=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*e}const r=new t(a),o=new je(r,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else r.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const Ft=Math.PI,cr=new Map;function ba(s,t={}){const e=`m:${s}:${t.roughness??.88}:${t.metalness??0}:${t.emissive??0}:${t.emissiveIntensity??1}:${t.flatShading!==!1}:${t.transparent?1:0}:${t.opacity??1}`;if(!t.unique&&cr.has(e))return cr.get(e);const i=new Ii({color:s,roughness:t.roughness??.88,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,flatShading:t.flatShading!==!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Ui});return t.unique||cr.set(e,i),i}function B(s,t,e,i=[0,0,0],n=[0,0,0],a=[1,1,1]){const r=e?.isMaterial?e:ba(e),o=new Xt(t,r);return o.position.set(i[0],i[1],i[2]),o.rotation.set(n[0],n[1],n[2]),o.scale.set(a[0],a[1],a[2]),o.castShadow=!0,o.receiveShadow=!0,s&&s.add(o),o}const q=(s,t,e,i,n,a,r)=>B(r,new Ue(s,t,e),i,n,a),At=(s,t,e,i,n,a,r,o=8)=>B(r,new Ee(s,t,e,o),i,n,a),di=(s,t,e,i,n,a,r=6)=>B(a,new ki(s,t,r),e,i,n),ia=(s,t,e,i,n,a,r=8,o=6)=>B(a,new ji(s,t,o,r),e,i,n);function ot(s,t=[0,0,0],e=[0,0,0]){const i=new Zt;return i.position.set(...t),i.rotation.set(...e),s?.add(i),i}function Um(s,t={}){const{width:e=512,height:i=256,bg:n="rgba(0,0,0,0)",color:a="#e8c374",fontSize:r=96,font:o='"Noto Serif SC", "STKaiti", "KaiTi", serif',vertical:l=!1,align:c="center",border:h=!1,borderColor:d="#b98938",padding:u=30,weight:p=700}=t,g=document.createElement("canvas");g.width=e,g.height=i;const v=g.getContext("2d");if(v.clearRect(0,0,e,i),n&&n!=="transparent"&&(v.fillStyle=n,v.fillRect(0,0,e,i)),h&&(v.strokeStyle=d,v.lineWidth=6,v.strokeRect(8,8,e-16,i-16)),v.fillStyle=a,v.textAlign=c,v.textBaseline="middle",v.font=`${p} ${r}px ${o}`,l){const f=[...s],S=Math.min(r*1.12,(i-u*2)/Math.max(f.length,1)),w=i/2-(f.length-1)*S/2;f.forEach((_,A)=>{v.save(),_==="·"?v.fillText("·",e/2,w+A*S):v.fillText(_,e/2,w+A*S),v.restore()})}else{const f=s.split(`
`),S=r*1.18,w=i/2-(f.length-1)*S/2;f.forEach((_,A)=>{v.fillText(_,c==="left"?u:c==="right"?e-u:e/2,w+A*S)})}const m=new bo(g);return m.colorSpace=Be,m.anisotropy=4,m}function oe(s,t,e,i={}){const n=Um(s,i),a=new ye({map:n,transparent:!0,side:i.side??_e,depthWrite:!1,toneMapped:!1}),r=new Xt(new Ye(t,e),a);return r.renderOrder=2,r}function km(s,t,e,i={}){const n=new Zt,a=new Xt(new Ye(t,e,5,3),new Ii({color:i.bg??9379101,roughness:.95,side:_e,flatShading:!0}));a.receiveShadow=!0,n.add(a);const r=oe(s,t*.92,e*.92,{color:i.color??"#e8c374",fontSize:i.fontSize??86,vertical:i.vertical??!0,width:256,height:768});return r.position.z=.012,n.add(r),n}function Nm(s,t={}){const e=t.skin??14989710,i=t.fur??6175525,n=B(s,new qt(.4,7,6),e,[0,-.06,.37],[0,0,0],[1.02,.95,.42]);n.castShadow=!1,B(s,new qt(.09,7,5),1511694,[-.16,.1,.51],[0,0,0],[.9,1.2,.5]),B(s,new qt(.09,7,5),1511694,[.16,.1,.51],[0,0,0],[.9,1.2,.5]),B(s,new qt(.026,5,4),16774358,[-.16,.13,.555],[0,0,0],[.8,.8,.4]),B(s,new qt(.026,5,4),16774358,[.16,.13,.555],[0,0,0],[.8,.8,.4]);const a=B(s,new qt(.24,7,5),t.muzzle??15781802,[0,-.23,.48],[0,0,0],[1.1,.72,.5]);a.castShadow=!1,B(s,new Ue(.13,.07,.05),2758418,[0,-.19,.63]),B(s,new Ue(.17,.03,.03),3808278,[0,-.35,.6]),B(s,new Ue(.24,.045,.04),t.eyeShadow??12947509,[-.17,.22,.53],[0,0,-.14]),B(s,new Ue(.24,.045,.04),t.eyeShadow??12947509,[.17,.22,.53],[0,0,.14]);for(const r of[-1,1]){const o=B(s,new Ee(.2,.2,.09,8),i,[r*.48,.01,-.01],[0,0,Ft/2]);B(o,new Ee(.12,.12,.02,8),t.earInner??14131072,[0,r*.055,0],[0,0,0])}return s}function fa(s={}){const t=new Zt,e=s.fur??6307882,i=s.cloth??11747886,n=s.gold??14263361;s.dark;const a=ot(t,[0,.95,0]),r=ot(a,[0,0,0]);q(.88,1.02,.58,i,[0,.48,0],[0,0,0],r),q(1,.16,.62,2824982,[0,.03,0],[0,0,0],r),B(r,new Mt(.52,1),e,[0,.56,-.03],[0,0,0],[1.02,1.12,.62]),q(.44,.42,.05,n,[0,.53,.32],[0,0,Ft/4],r).scale.set(.7,.7,1);for(const S of[-1,1])B(r,new Mt(.28,0),n,[S*.55,.94,0],[0,0,0],[1.2,.7,1]);const o=ot(r,[0,.96,-.3]);q(.18,.8,.05,13124653,[.1,-.35,-.12],[.2,0,-.15],o),q(.14,.62,.04,13851956,[-.14,-.28,-.08],[.28,0,.2],o);const l=ot(r,[0,1.38,.03]);B(l,new Mt(.57,1),e,[0,0,0],[0,0,0],[1.02,1.03,.94]),Nm(l,{fur:e,skin:s.face??14131567});const c=ia(.55,.052,n,[0,.27,0],[Ft/2,0,0],l,12,5);c.scale.z=.95,B(l,new Ue(.22,.22,.09),15845212,[0,.3,.53],[0,0,Ft/4],l),B(l,new Ue(.1,.1,.1),10431265,[0,.3,.59],[0,0,0],l);const h=e;for(let S=0;S<7;S++){const w=S/7*Ft*2;di(.1,.3+S%3*.12,h,[Math.cos(w)*.26,.55,Math.sin(w)*.2-.03],[.5-Math.sin(w)*.3,0,Math.cos(w)*.5],l,5)}if(s.sixEars)for(const S of[-1,1]){const w=B(l,new Ee(.17,.17,.08,8),e,[S*.5,.26,-.12],[0,0,Ft/2]);B(w,new Ee(.1,.1,.02,8),13013113,[0,S*.05,0],[0,0,0])}const d={};for(const S of[-1,1]){const w=ot(r,[S*.58,.88,0]),_=ot(w,[0,-.18,0]);At(.16,.13,.56,e,[0,-.3,0],[0,0,0],_);const A=ot(_,[0,-.58,0]);At(.13,.11,.55,s.sleeve??i,[0,-.25,0],[0,0,0],A);const C=ot(A,[0,-.55,0]);B(C,new Mt(.16,0),13210983,[0,0,0],[0,0,0],[1.15,.9,1.1]),d[S<0?"left":"right"]={shoulder:w,upper:_,elbow:A,hand:C}}const u={};for(const S of[-1,1]){const w=ot(a,[S*.25,0,0]);At(.17,.14,.55,e,[0,-.26,0],[0,0,0],w);const _=ot(w,[0,-.52,0]);At(.14,.12,.48,e,[0,-.22,0],[0,0,0],_);const A=ot(_,[0,-.46,0]);q(.28,.16,.5,2957595,[0,-.02,.12],[0,0,0],A),u[S<0?"left":"right"]={hip:w,knee:_,foot:A}}const p=new Cc([new E(0,1,-.28),new E(.1,.7,-.74),new E(-.1,.8,-1.12),new E(.3,1.2,-1.25),new E(.15,1.55,-1.16)]),g=B(t,new So(p,12,.065,5,!1),e,[0,0,0]);g.userData.noMerge=!0,B(g,new Mt(.12,0),e,[.15,1.55,-1.16]);let v=null,m=null;if(s.staff!==!1&&(v=ot(d.right.hand,[0,-.1,.03],[.35,0,-.18]),m=ot(v,[0,0,0]),At(.055,.055,3.4,6234392,[0,.1,0],[0,0,0],m,8),At(.08,.08,.4,n,[0,1.7,0],[0,0,0],m,8),At(.08,.08,.4,n,[0,-1.5,0],[0,0,0],m,8),B(m,new Mt(.11,0),16044667,[0,1.93,0])),s.badge){const S=q(.27,.38,.04,15196107,[.34,.62,.31],[0,0,.08],r);q(.2,.06,.045,10169893,[0,.06,.01],[0,0,0],S)}const f={hips:a,torso:r,head:l,arms:d,legs:u,tail:g,staffPivot:v,staff:m,scarf:o};return t.userData.rig=f,t}function Fm(){const s=new Zt,t=ot(s,[0,.62,0]);At(.26,.48,.9,5522477,[0,.3,0],[0,0,0],t,7),q(.65,.09,.48,12093755,[0,.55,0],[0,0,0],t);const e=ot(t,[0,.92,0]);B(e,new Mt(.3,1),14203016,[0,0,0],[0,0,0],[1,.95,.9]),B(e,new ki(.22,.65,6),15328211,[0,-.3,.17],[.18,0,0],e),B(e,new Ue(.5,.15,.12),7151387,[0,.22,.05],[0,0,0],e),q(.46,.075,.3,2826264,[-.05,.37,.02],[0,.1,0],e),q(.28,.12,.16,1383448,[0,.45,.05],[0,0,0],e),B(e,new qt(.04,5,4),14131786,[-.09,-.02,.27]),B(e,new qt(.04,5,4),14131786,[.09,-.02,.27]),q(.16,.36,.12,2238500,[.38,.35,.1],[0,0,-.1],t),q(.04,.2,.04,10658971,[.43,.66,.1],[0,0,0],t),At(.035,.035,2.1,5059874,[-.5,.55,.02],[0,0,.06],s,6);const i=ot(s,[-.62,1.6,.02]);At(.16,.16,.3,14263361,[0,0,0],[0,0,0],i,6),B(i,new Mt(.12,0),16751682,[0,0,0]);const n=new Ie(16751432,1.2,6,2);n.position.set(0,0,0),i.add(n),q(.26,.36,.04,14275261,[.18,.22,.32],[0,0,.1],t);const a=oe("物业",.24,.11,{color:"#3b2d1c",fontSize:54,width:256,height:128});return a.position.set(.18,.25,.345),a.rotation.z=.1,t.add(a),s.userData.rig={body:t,head:e},s}function Om(){const s=new Zt,t=ot(s,[0,.9,0]);B(t,new Mt(.78,1),4877191,[0,.32,0],[0,0,0],[1.12,1,.9]),q(.9,.5,.24,4087415,[0,.38,.62],[0,0,0],t),q(.7,.12,.26,14856512,[0,.39,.75],[0,0,0],t);const e=ot(t,[0,1.18,.05]);B(e,new Mt(.52,1),15047324,[0,0,0],[0,0,0],[1,.9,.92]),B(e,new Ee(.3,.38,.25,8),14256270,[0,-.18,.35],[Ft/2,0,0],e),B(e,new Ee(.11,.11,.08,6),11888754,[0,-.16,.55],[Ft/2,0,0],e);for(const o of[-1,1])B(e,new ki(.2,.38,5),14060178,[o*.45,.28,-.06],[0,0,o*.6],e),B(e,new qt(.065,5,4),2168082,[o*.18,.08,.46]),B(e,new qt(.02,4,3),16774104,[o*.18,.1,.52]);At(.3,.36,.16,15118650,[0,.48,0],[0,0,0],e,7),q(.4,.05,.4,15118650,[0,.44,.27],[0,0,0],e);const i=oe("八戒快送",.5,.16,{color:"#2d2617",fontSize:40,width:512,height:128});i.position.set(0,.56,.31),e.add(i);const n=oe("08",.28,.22,{color:"#f5d276",fontSize:100,width:256,height:256});n.position.set(.33,.38,.73),t.add(n);const a=ot(s,[.8,.35,.1],[0,.1,0]);q(.52,.65,.34,8272685,[0,0,0],[0,0,0],a),q(.54,.1,.36,13212234,[0,.2,0],[0,0,0],a),q(.22,.05,.05,3877664,[0,.42,0],[0,0,0],a);const r=ot(s,[-.85,1.1,.1],[0,0,-.22]);At(.035,.035,1.9,7293483,[0,0,0],[0,0,0],r,6),q(.6,.12,.12,10132111,[0,.95,0],[0,0,0],r);for(let o=-2;o<=2;o++)q(.06,.36,.06,11842728,[o*.13,1.13,0],[0,0,0],r);return s.userData.rig={body:t,head:e},s}function zm(s,t={}){const e=new Zt,i=t.accent??11819580,n=t.enemy??7174997,a=t.enemySkin??12886906,r=ot(e,[0,.68,0]);let o;if(s==="resume"){for(let d=0;d<4;d++)q(.72-d*.04,.08,.5,14998986,[0,.2+d*.1,0],[0,.05*d,0],r);q(.66,.7,.08,15525330,[0,.55,0],[0,0,0],r),q(.5,.08,.02,4147796,[0,.65,.05],[0,0,0],r),q(.36,.07,.02,8139820,[0,.5,.05],[0,0,0],r),q(.14,.3,.08,10169893,[0,.15,.28],[0,0,0],r),o=ot(r,[0,.95,0]),B(o,new Mt(.35,0),14274488,[0,0,0],[0,0,0],[1,.8,.6]),B(o,new qt(.06,5,4),1710616,[-.12,0,.29]),B(o,new qt(.06,5,4),1710616,[.12,0,.29]),q(.18,.03,.02,1710616,[0,-.13,.32])}else if(s==="takeout"){q(.8,.86,.6,14200938,[0,.32,0],[0,0,0],r),q(.84,.12,.64,9919278,[0,.7,0],[0,0,0],r),q(.52,.18,.04,15063479,[0,.42,.32],[0,0,0],r),o=ot(r,[0,.98,0]),B(o,new Mt(.34,0),13804150,[0,0,0],[0,0,0],[1,.9,.9]),At(.38,.4,.11,i,[0,.16,0],[0,0,0],o,8),q(.46,.1,.4,i,[0,.11,.18],[0,0,0],o),B(o,new Ue(.38,.14,.12),1778215,[0,.02,.3],[0,0,0],o),q(.65,.4,.2,11027247,[0,.58,-.38],[.1,0,0],r);const d=oe("超时",.35,.18,{color:"#f3d88d",fontSize:58,width:256,height:128});d.position.set(0,.58,-.27),d.rotation.y=Ft,r.add(d)}else if(s==="snowman"){for(let d=0;d<3;d++)B(r,new Mt(.44-d*.07,1),15265520,[0,.15+d*.36,0]);o=ot(r,[0,1.16,0]),B(o,new Mt(.3,1),15660277,[0,0,0]),B(o,new ki(.08,.34,5),15246145,[0,0,.38],[Ft/2,0,0],o),B(o,new qt(.045,5,4),1315860,[-.11,.07,.27]),B(o,new qt(.045,5,4),1315860,[.11,.07,.27]),At(.2,.25,.2,2829099,[0,.28,0],[0,0,0],o,7),q(.48,.08,.3,1711133,[0,.38,.05],[0,0,0],o),q(.3,.45,.05,15123044,[0,.3,-.44],[0,0,0],r)}else if(s==="spider"){B(r,new Mt(.52,0),4138829,[0,.32,0],[0,0,0],[.9,.8,1.15]);for(let u=0;u<4;u++)for(const p of[-1,1]){const g=At(.035,.02,.95,2759733,[p*.4,.25,-.18+u*.15],[0,0,p*.85-(u-1.5)*.12],r,5);g.rotation.x=(u-1.5)*.25}o=ot(r,[0,.93,.15]),B(o,new Mt(.32,0),4926810,[0,0,0],[0,0,0],[1,.9,.9]);for(const u of[-1,0,1])B(o,new qt(.06,5,4),14241132,[u*.11,.02,.28]);q(.24,.34,.04,14273e3,[.2,.55,.24],[0,0,0],r);const d=oe("实习",.2,.08,{color:"#3f274d",fontSize:40,width:256,height:128});d.position.set(.2,.55,.27),r.add(d)}else if(s==="ash"){B(r,new Mt(.5,0),4861225,[0,.3,0],[0,0,0],[1,.9,.85]),o=ot(r,[0,.9,.05]),B(o,new Mt(.33,0),7224111,[0,0,0]);for(let u=0;u<5;u++)di(.1,.45+u%2*.2,15758122,[Math.cos(u*1.7)*.2,.3,Math.sin(u*1.7)*.16],[0,0,0],o,5);B(o,new qt(.055,5,4),16765562,[-.11,0,.29]),B(o,new qt(.055,5,4),16765562,[.11,0,.29]);const d=new Ie(16736036,.8,3,2);d.position.set(0,.3,0),r.add(d)}else if(s==="clerk"){B(r,new Mt(.52,0),5330523,[0,.32,0],[0,0,0],[1,1,.8]),q(.36,.5,.05,15262933,[0,.3,.31],[0,0,0],r),q(.12,.28,.06,9382949,[0,.3,.35],[0,0,0],r),o=ot(r,[0,.98,.02]),B(o,new Mt(.34,0),7367520,[0,0,0]),B(o,new qt(.05,5,4),16739658,[-.11,.02,.3]),B(o,new qt(.05,5,4),16739658,[.11,.02,.3]),At(.07,.07,.28,14207920,[0,.43,0],[0,0,0],o,5);const d=oe("外包",.26,.11,{color:"#e8e4d5",fontSize:42,width:256,height:128});d.position.set(0,.31,.35),r.add(d)}else{B(r,new Mt(.45,0),n,[0,.32,0],[0,0,0],[1,1,.85]),o=ot(r,[0,.9,.03]),B(o,new Mt(.34,0),n,[0,0,0]),B(o,new qt(.2,6,5),13349004,[0,-.05,.25],[0,0,0],[1,.8,.5]),B(o,new qt(.045,5,4),1118481,[-.1,.05,.3]),B(o,new qt(.045,5,4),1118481,[.1,.05,.3]),B(o,new Ee(.1,.1,.05,7),9284952,[-.36,0,0],[0,0,Ft/2],o),B(o,new Ee(.1,.1,.05,7),9284952,[.36,0,0],[0,0,Ft/2],o),B(o,new ki(.05,.16,4),10413536,[.3,.24,.08],[0,0,Ft],o),q(.3,.36,.04,14209723,[0,.5,.24],[0,0,0],r);const d=oe("KPI",.3,.1,{color:"#384a25",fontSize:58,width:256,height:128});d.position.set(0,.52,.265),r.add(d)}const l=ot(r,[0,.05,0]),c={};for(const d of[-1,1]){const u=ot(l,[d*.45,.58,0]);At(.1,.08,.62,s==="snowman"?15265520:n,[0,-.28,0],[0,0,d*.1],u,5),B(u,new Mt(.12,0),a,[0,-.62,.02]),c[d<0?"left":"right"]=u}const h={};for(const d of[-1,1]){const u=ot(e,[d*.22,.5,0]);At(.1,.08,.5,s==="snowman"?15265520:n,[0,-.22,0],[0,0,0],u,5),q(.2,.12,.34,2629915,[0,-.46,.08],[0,0,0],u),h[d<0?"left":"right"]=u}return e.userData.rig={body:r,head:o,arms:c,legs:h},s==="resume"&&e.scale.setScalar(.92),e}function Bm(s,t={}){const e=new Zt,i={};if(t.bossAccent,s==="bear"){const n=ot(e,[0,.8,0]);B(n,new Mt(1.25,1),3024676,[0,.85,0],[0,0,0],[1.15,1.25,.9]),B(n,new Mt(1.02,1),3419176,[0,.8,.24],[0,0,0],[.9,1.1,.6]),q(1.7,1,.18,3554378,[0,.65,.92],[0,0,0],n),q(.72,.66,.2,14012610,[0,.78,1.01],[0,0,0],n),q(.18,.58,.22,9844013,[0,.8,1.06],[0,0,.06],n),q(.36,.08,.05,2961984,[.25,.91,1.12],[0,0,0],n),q(.36,.08,.05,2961984,[.4,.84,1.12],[0,0,0],n);for(const l of[-1,1]){const c=ot(e,[l*.5,.62,0]);At(.28,.3,.7,2368290,[0,-.25,0],[0,0,0],c,6),q(.48,.22,.75,1644567,[0,-.58,.15],[0,0,0],c);const h=ot(n,[l*1.22,1.28,0]);At(.22,.18,.8,2170654,[0,-.35,0],[0,0,l*.12],h,6),B(h,new Mt(.25,0),1776153,[0,-.8,0]),i[l<0?"armL":"armR"]=h}const a=ot(n,[0,2.02,.12]);B(a,new Mt(.68,1),1973275,[0,0,0],[0,0,0],[1.1,.95,.9]);for(const l of[-1,1])B(a,new Ee(.22,.22,.16,7),1512981,[l*.5,.52,0],[0,0,Ft/2],a),B(a,new Ee(.12,.12,.18,7),5914673,[l*.51,.52,0],[0,0,Ft/2],a);B(a,new qt(.35,7,5),6637878,[0,-.16,.5],[0,0,0],[1.1,.7,.6]),q(.22,.1,.08,1183759,[0,-.05,.72]),q(.62,.18,.12,855308,[0,.17,.58],[0,0,0],a),q(.24,.1,.02,6196112,[-.18,.17,.65],[0,0,0],a),q(.24,.1,.02,6196112,[.18,.17,.65],[0,0,0],a),q(.3,.42,.12,10825513,[-1.1,.42,.22],[0,0,0],e);const r=oe("HR",.22,.11,{color:"#f4d97b",fontSize:68,width:256,height:128});r.position.set(-1.1,.42,.28),e.add(r);const o=ot(n,[1.32,1.25,.35],[.1,-.2,-.2]);q(.72,.92,.08,9067570,[0,0,0],[0,0,0],o),q(.58,.76,.03,15524814,[0,0,.06],[0,0,0],o),q(.28,.07,.04,7156008,[0,.28,.08],[0,0,0],o),q(.4,.035,.04,4934988,[-.04,.05,.08],[0,0,0],o),q(.32,.035,.04,4934988,[-.08,-.08,.08],[0,0,0],o),i.head=a,i.body=n,e.userData.baseScale=1.05}else if(s==="rat"){const n=ot(e,[0,.9,0]);B(n,new Mt(.9,1),8351814,[0,.4,0],[0,0,0],[1,1.1,.85]),B(n,new ki(1.2,1.7,7,1,!0),11833404,[0,.5,-.1],[0,0,0],n),q(.68,.7,.22,10385727,[0,.46,.66],[0,0,0],n),q(.44,.4,.1,5719095,[0,.44,.79],[0,0,0],n),q(1.05,1,.55,10172974,[0,1.1,-.86],[0,0,0],e);const a=oe("黄风快送",.8,.3,{color:"#f5d174",fontSize:56,width:512,height:256});a.position.set(0,1.16,-1.15),a.rotation.y=Ft,e.add(a);for(const l of[-1,1]){const c=ot(e,[l*.35,.68,0]);At(.18,.15,.68,6179635,[0,-.28,0],[0,0,0],c,5),q(.3,.18,.65,2893600,[0,-.58,.1],[0,0,0],c);const h=ot(n,[l*.82,1.1,0]);At(.13,.1,.8,7363903,[0,-.33,0],[0,0,l*.1],h,5),Hm(h),i[l<0?"armL":"armR"]=h}const r=ot(n,[0,1.55,.08]);B(r,new Mt(.52,1),8285e3,[0,0,0],[0,0,0],[1,.9,1.05]),B(r,new ki(.08,.6,5),9204816,[.1,-.1,.64],[Ft/2,0,.1],r);for(const l of[-1,1])B(r,new Ee(.17,.17,.1,7),7232318,[l*.46,.34,-.04],[0,0,Ft/2],r),B(r,new qt(.06,5,4),1381653,[l*.16,.06,.46]);B(r,new qt(.55,8,5,0,Ft*2,0,Ft/2),13870654,[0,.2,0],[0,0,0],r),q(.8,.08,.3,13870654,[0,.22,.48],[.1,0,0],r),q(.56,.18,.08,2895402,[0,.05,.5],[0,0,0],r);const o=ot(n,[-1.25,1.45,.15],[.1,0,.2]);At(.07,.07,2.3,7293480,[0,-.7,0],[0,0,0],o,5);for(let l=0;l<7;l++){const c=l/7*Ft*2;q(.12,1.2,.04,14005354,[Math.cos(c)*.58,.8,Math.sin(c)*.58],[c,0,0],o)}B(o,new Ee(.18,.18,.14,7),13013812,[0,.8,0],[0,0,0],o),i.head=r,i.body=n,i.fan=o}else if(s==="yellowbrow"){const n=ot(e,[0,1,0]);B(n,new Mt(1.22,1),14204267,[0,.5,0],[0,0,0],[1.1,1.3,.96]),q(1.9,1.6,.2,10497576,[0,.52,.88],[0,0,0],n),q(.18,1.55,.22,14332749,[.35,.52,.99],[0,0,.2],n);for(const l of[-1,1]){const c=ot(n,[l*1,1.18,0]);At(.24,.2,.85,13874270,[0,-.35,0],[0,0,l*.15],c,6),B(c,new Mt(.24,0),13213809,[0,-.82,0]),i[l<0?"armL":"armR"]=c}for(const l of[-1,1]){const c=ot(e,[l*.45,.62,0]);At(.26,.32,.6,14006122,[0,-.2,0],[0,0,0],c,6)}const a=ot(n,[0,1.68,.05]);B(a,new Mt(.6,1),14727293,[0,0,0],[0,0,0],[1,1.08,.95]),B(a,new qt(.28,7,5),13148270,[0,-.22,.48],[0,0,0],[1,.8,.45]);for(const l of[-1,1])B(a,new qt(.17,6,4),2827291,[l*.46,.06,.3],[0,0,0],[1,1.4,.6]),B(a,new qt(.19,6,4),15062972,[l*.46,.12,.33],[0,0,0],[1,1.2,.5]),B(a,new qt(.055,5,4),1381137,[l*.16,.04,.54]);q(.36,.05,.02,5978156,[0,-.16,.61]);const r=ot(e,[0,2.4,-.5],[Ft/2,0,0]);ia(1.3,.08,15055954,[0,0,0],[0,0,0],r,20,5),ia(1.08,.04,16768910,[0,0,0],[0,0,0],r,20,4),i.halo=r;const o=ot(n,[1.05,1.25,.55],[.2,0,-.3]);At(.05,.05,.7,3354926,[0,-.2,0],[0,0,0],o,5),B(o,new Mt(.13,0),4868678,[0,.18,0]),q(.38,.26,.12,2960426,[1.05,1.38,.38],[0,0,0],n),i.head=a,i.body=n}else if(s==="hundredEyes"){const n=ot(e,[0,1,0]);B(n,new Ee(.5,.9,2.1,7),3809607,[0,.55,0],[0,0,0],n),B(n,new Mt(.85,0),2890038,[0,.2,0],[0,0,0],[1,.7,.8]);for(const h of[-1,1]){const d=ot(n,[h*.78,1.15,0],[0,0,h*.22]);At(.15,.11,1,4926298,[0,-.42,0],[0,0,0],d,5),B(d,new Mt(.18,0),12687995,[0,-.95,0]),i[h<0?"armL":"armR"]=d}const a=ot(n,[0,1.65,.02]);B(a,new Mt(.43,1),11636085,[0,0,0],[0,0,0],[.9,1.1,.9]);for(const h of[-1,1])B(a,new qt(.1,5,4),1774104,[h*.17,.08,.36]),B(a,new qt(.04,5,4),13911899,[h*.17,.08,.44]);q(.34,.06,.03,4201006,[0,-.22,.4]);const r=[];for(let h=0;h<14;h++){const d=h/14*Ft*2,u=B(n,new qt(.08,5,4),14796655,[Math.cos(d)*.55,.55+Math.sin(h*2.1)*.75,Math.sin(d)*.5+.3]);B(u,new qt(.035,4,3),3937568,[0,0,.07]),r.push(u)}const o=ot(e,[0,2.05,-.55],[0,0,0]);ia(.9,.06,16770241,[0,0,0],[0,0,0],o,24,5);const l=new Ie(16757713,2.2,8,2);l.position.set(0,0,.2),o.add(l);const c=ot(n,[.95,1.2,.55],[.1,0,-.2]);At(.025,.025,1.4,2499620,[0,0,0],[0,0,0],c,5),q(.28,.5,.06,1776154,[0,.75,0],[0,0,0],c),i.head=a,i.body=n,i.eyes=r,i.ring=o}else if(s==="redboy"){const n=ot(e,[0,.75,0]);B(n,new Mt(.62,1),11815989,[0,.35,0],[0,0,0],[1,1.05,.85]),q(.56,.45,.08,2958626,[0,.37,.51],[0,0,0],n),q(.5,.35,.08,8613978,[0,.02,.01],[0,0,0],n);for(const o of[-1,1]){const l=ot(e,[o*.26,.5,0]);At(.12,.1,.48,12089168,[0,-.2,0],[0,0,0],l,5),q(.22,.14,.4,14896684,[0,-.44,.12],[0,0,0],l);const c=ot(n,[o*.58,.85,0]);At(.1,.08,.55,13206104,[0,-.24,0],[0,0,o*.15],c,5),B(c,new Mt(.12,0),14130545,[0,-.53,0]),i[o<0?"armL":"armR"]=c}const a=ot(n,[0,1.02,.03]);B(a,new Mt(.4,1),14721133,[0,0,0],[0,0,0]);for(const o of[-1,1])B(a,new qt(.055,5,4),16773592,[o*.14,.07,.34]),B(a,new qt(.025,4,3),1773840,[o*.14,.07,.39]);q(.2,.05,.03,7152925,[0,-.16,.38]);for(let o=0;o<8;o++){const l=o/8*Ft*2;di(.1,.55+o%3*.2,o%2?16031789:14960940,[Math.cos(l)*.28,.46,Math.sin(l)*.24],[Math.cos(l)*.5,0,Math.sin(l)*.5],a,5)}const r=ot(n,[.95,.8,.3],[.2,0,-.1]);At(.035,.035,2.8,12360811,[0,0,0],[0,0,0],r,5);for(let o=0;o<4;o++)q(.3,.25,.22,9322027,[0,-.8+o*.45,0],[0,.4*o,0],r);di(.12,.3,13616302,[0,1.5,0],[0,0,0],r,4),i.head=a,i.body=n,i.skewer=r}else if(s==="sixear"){const n=fa({fur:2827555,cloth:2108212,gold:11118241,face:13088678,sixEars:!0,badge:!0,staff:!0});n.scale.setScalar(1.45),e.add(n),i.monkey=n,i.body=n.userData.rig.torso,i.head=n.userData.rig.head,i.arms=n.userData.rig.arms,i.legs=n.userData.rig.legs;const a=B(e,new Mt(1.5,1),ba(1182994,{transparent:!0,opacity:.18,side:Ne}),[0,1.5,0]);a.castShadow=!1,i.aura=a}else if(s==="rock"){const n=ot(e,[0,.9,0]);B(n,new yi(1.1,0),7038556,[0,.65,0],[.1,.2,.05],[1.1,1.15,.9]),B(n,new yi(.7,0),5920076,[0,1.6,0],[0,.5,.2]),At(.42,.62,.25,2305835,[0,2,0],[0,0,0],n,7),q(.75,.1,.48,2305835,[0,1.92,.32],[0,0,0],n),q(.16,.1,.05,16758602,[-.18,1.65,.66],[0,0,0],n),q(.16,.1,.05,16758602,[.18,1.65,.66],[0,0,0],n),q(.3,.45,.06,14209213,[0,.9,.8],[0,0,.08],n);const a=oe("保安",.24,.1,{color:"#31352e",fontSize:48,width:256,height:128});a.position.set(0,.95,.85),a.rotation.z=.08,n.add(a);const r=ot(n,[-1.25,1,.2],[0,.2,.15]);At(.04,.04,2.1,9276028,[0,-.2,0],[0,0,0],r,5),B(r,new Ee(.5,.5,.08,8),11811374,[0,.75,0],[Ft/2,0,0]);const o=oe("停",.55,.55,{color:"#f5e9cf",fontSize:150,width:256,height:256});o.position.set(0,.75,.05),r.add(o);for(const l of[-1,1]){const c=ot(n,[l*.95,1,0]);B(c,new yi(.22,0),7038556,[0,-.2,0]),i[l<0?"armL":"armR"]=c}i.body=n,e.userData.baseScale=1.1}return e.userData.rig=i,e}function Hm(s){B(s,new Mt(.13,0),11898467,[0,-.78,0])}function Gm(s=14197817){const t=new Zt;q(.45,.18,1.5,s,[0,.55,0],[0,0,0],t),q(.2,.55,.2,2763303,[0,.85,.55],[.2,0,0],t),At(.08,.08,1.1,2302753,[0,1.15,.62],[Ft/2,0,0],t,6),q(.5,.4,.65,10697773,[0,.75,-.55],[0,0,0],t);for(const e of[-.6,.6]){const i=At(.28,.28,.15,1842202,[0,.28,e],[0,0,Ft/2],t,8);i.rotation.z=Ft/2}return t}function Vm(){const s=new Zt;q(1.15,1.8,.5,2501415,[0,.9,0],[0,0,0],s),q(1.25,.16,.6,7035704,[0,1.86,0],[0,0,0],s),q(.95,.6,.06,1120019,[0,1.45,.27],[0,0,0],s);for(let n=0;n<3;n++)for(let a=0;a<3;a++)q(.2,.12,.04,14265680,[-.3+a*.3,1.26+n*.16,.31],[0,0,0],s);const t=oe("共享香火",.95,.22,{color:"#f1cf7b",fontSize:60,width:512,height:128});t.position.set(0,1.74,.31),s.add(t);const e=oe("土地公物业 · 扫码即拜",.98,.15,{color:"#c9bd99",fontSize:36,width:512,height:96});e.position.set(0,1.56,.305),s.add(e);const i=new Ie(16762472,1.2,5,2);return i.position.set(0,1.5,.7),s.add(i),s.userData.interact="shrine",s.userData.label="共享香火",s}function Wm(){const s=new Zt;q(.85,.5,.55,8014637,[0,.25,0],[0,0,0],s),q(.9,.12,.6,12422210,[0,.48,0],[0,0,0],s),q(.12,.22,.06,13939041,[0,.28,.3],[0,0,0],s);const t=new Ie(16761693,.6,2.4,2);return t.position.set(0,.7,.2),s.add(t),s}function ro(s={}){const t=new Zt,e=s.gate??8268324,i=s.gold??13672781;for(const a of[-1,1])At(.28,.38,5.5,e,[a*4.2,2.75,0],[0,0,0],t,7),At(.45,.55,.3,4075556,[a*4.2,.15,0],[0,0,0],t,7);q(9.6,.5,.6,e,[0,5.2,0],[0,0,0],t),q(10.5,.22,1.1,i,[0,5.55,0],[0,0,0],t),q(9,.2,.85,3090980,[0,5.72,0],[0,0,0],t),q(9.8,.28,1.4,3090980,[0,5.9,0],[0,0,0],t);const n=oe(s.gateText??"面 试 通 道",4.2,.8,{color:"#f0cf7b",fontSize:92,width:1024,height:192});n.position.set(0,4.5,.36),t.add(n);for(const a of[-1,1]){const r=ot(t,[a*2.9,4.4,.1]);At(.18,.24,.55,11874343,[0,0,0],[0,0,0],r,6),B(r,new Mt(.2,0),16757597,[0,-.02,0]);const o=new Ie(16743228,1.4,8,2);o.position.set(0,0,.2),r.add(o)}return t}function Nn(s="peach",t=Math.random){const e=new Zt,i=s==="bamboo"?5860668:s==="pine"?3878435:4928547,n=s==="bamboo"?5.5:2.8+t()*1.8;if(At(.14,.32,n,i,[0,n/2,0],[0,0,0],e,6),s==="bamboo")for(let a=0;a<4;a++){const r=t()*Ft*2,o=3.5+t()*2.5,l=ot(e,[Math.cos(r)*.5,0,Math.sin(r)*.5],[.05*(t()-.5),0,.05*(t()-.5)]);At(.08,.1,o,6124863,[0,o/2,0],[0,0,0],l,5);for(let c=0;c<5;c++){const h=q(.05,.02,.7,8162897,[0,o-c*.45,0],[.4,t()*Ft,0],l);h.rotation.z=.5}}else{const a=s==="pine"?3100728:s==="dead"?6048568:7177029;if(s==="pine")for(let r=0;r<4;r++)di(1.8-r*.33,1.4,a,[0,n-.2+r*.8,0],[0,t()*Ft,0],e,6);else if(s==="dead")for(let r=0;r<4;r++){const o=t()*Ft*2;At(.05,.1,1.5,i,[Math.cos(o)*.7,n-.8+r*.15,Math.sin(o)*.7],[.9,o,0],e,5)}else if(s==="peach")for(let r=0;r<7;r++){const o=t()*Ft*2,l=1.1+t()*1.5;B(e,new Mt(.9+t()*.6,0),a,[Math.cos(o)*l,n+t()*1,Math.sin(o)*l],[0,t()*Ft,0],[1,.8,1]),r<4&&B(e,new Mt(.16,0),15047302,[Math.cos(o)*(l-.2),n+.2+t()*1.2,Math.sin(o)*(l-.2)])}else for(let r=0;r<5;r++){const o=t()*Ft*2;B(e,new Mt(1.1+t()*.8,0),a,[Math.cos(o)*1.3,n+t()*1,Math.sin(o)*1.3],[0,t()*Ft,0],[1,.8,1])}}return e}function cn(s=1,t=7169622){const e=new Zt;return B(e,new yi(1.3*s,0),t,[0,.75*s,0],[0,Math.random()*Ft,.1],[1.3,.9,1]),B(e,new yi(.6*s,0),5788230,[.9*s,.3*s,.3],[.3,.2,0]),e}function qm(s=1){const t=new Zt;for(let i=0;i<5;i++)B(t,new Mt(1.2*s,0),14542305,[(i-2)*1.1*s,Math.sin(i)*.25*s,Math.random()*.8],[0,0,0],[1.3,.55,.9]);const e=t.children[0].material;return e.transparent=!0,e.opacity=.32,e.depthWrite=!1,t}function ql(s={}){const t=new Zt;for(let e=0;e<5;e++){const i=2.8-e*.45;q(i,1,i,s.wall??5913645,[0,.5+e*1.1,0],[0,0,0],t),q(i+.8,.18,i+.8,s.roof??3155998,[0,1.05+e*1.1,0],[0,0,0],t);for(const n of[-1,1])for(const a of[-1,1])q(.5,.14,.16,s.roof??3155998,[n*(i/2+.3),1.14+e*1.1,a*(i/2+.3)],[0,n*a*.4,0],t)}return t}function Xl(){const s=new Zt;return q(.85,1.5,.6,1907739,[0,.75,0],[0,0,0],s),B(s,new Ee(.28,.28,.06,12),4867906,[0,1.05,.31],[Ft/2,0,0]),B(s,new Ee(.18,.18,.06,12),4867906,[0,.5,.31],[Ft/2,0,0]),s}function hr(){const s=new Zt;q(1.9,.12,.9,7558458,[0,.82,0],[0,0,0],s);for(const t of[-1,1])for(const e of[-1,1])q(.12,.8,.12,4207658,[t*.8,.4,e*.35],[0,0,0],s);return q(.55,.35,.06,2041124,[0,1.15,-.05],[-.15,0,0],s),q(.2,.06,.12,3094067,[0,.92,.05],[0,0,0],s),s}function Xm(){const s=new Zt;q(1.9,.8,.85,3487029,[0,.5,0],[0,0,0],s),q(2,.12,.95,5921365,[0,.95,0],[0,0,0],s);for(let e=0;e<7;e++)At(.03,.03,1.5,9073758,[-.7+e*.23,1.01,0],[0,0,Ft/2],s,5);for(let e=0;e<6;e++)q(.18,.08,.18,9387562,[-.6+e*.25,1.06,.1],[0,.2*e,0],s);for(let e=0;e<4;e++){const i=di(.15,.45,e%2?15756330:16757058,[-.6+e*.4,.25,0],[0,0,0],s,5);i.material.emissive=new Dt(16731161),i.material.emissiveIntensity=1.8}const t=new Ie(16742955,2.5,8,2);return t.position.set(0,1.3,0),s.add(t),s}function Wc(s=11614762,t=1){const e=new Zt;At(.2*t,.26*t,.6*t,s,[0,0,0],[0,0,0],e,7),At(.3*t,.3*t,.06*t,13869901,[0,.31*t,0],[0,0,0],e,7),At(.3*t,.3*t,.06*t,13869901,[0,-.31*t,0],[0,0,0],e,7);const i=new Ie(16747838,1.2,7,2);return i.position.set(0,0,0),e.add(i),e}function dr(s,t={}){const e=new Zt;At(.05,.07,3.2,6178864,[0,1.6,0],[0,0,0],e,5);const i=km(s,.75,2,{bg:t.bg??10299682,color:t.color??"#efcf7a",vertical:!0,fontSize:72});return i.position.set(.45,2.1,0),e.add(i),e}function $m(s=15776074){const t=new Ye(8.4,5,12,8),e=new ye({color:s,transparent:!0,opacity:.28,side:_e,blending:Ce,depthWrite:!1}),i=new Xt(t,e);i.position.set(0,2.5,0);const n=[];for(let a=0;a<8;a++){const r=oe(["封","印","通","行","面","试","中","止"][a],.42,.42,{color:"#ffe2a0",fontSize:140,width:256,height:256});r.position.set(-3.2+a%4*2.1,1.4+Math.floor(a/4)*2.1,.03),r.material.opacity=.55,i.add(r),n.push(r)}return i.userData.runes=n,i}function jm(s=16762719){const t=new Zt,e=new Ee(.28,.7,12,8,1,!0),i=new ye({color:s,transparent:!0,opacity:.2,side:_e,blending:Ce,depthWrite:!1}),n=new Xt(e,i);n.position.y=6,t.add(n);const a=new Xt(new ji(1.1,.04,5,24),new ye({color:s,transparent:!0,opacity:.55,blending:Ce,depthWrite:!1}));a.rotation.x=Ft/2,a.position.y=.06,t.add(a);const r=new Xt(new va(.3,0),new ye({color:16769440,transparent:!0,opacity:.9}));return r.position.y=3.2,t.add(r),t.userData.ring=a,t.userData.diamond=r,t.userData.beam=n,t}function Ym(){const s=new Zt,t=ba(15120727,{metalness:.7,roughness:.28,emissive:7027973,emissiveIntensity:.8}),e=B(s,new va(.38,0),t,[0,1.1,0]),i=B(s,new ji(.64,.035,5,28),t,[0,1.1,0],[Ft/2,0,0]),n=B(s,new ji(.82,.02,4,28),t,[0,1.1,0],[Ft/3,Ft/5,0]),a=new Ie(16766074,3,8,2);return a.position.set(0,1.2,0),s.add(a),s.userData.rig={core:e,ring:i,ring2:n,pt:a},s}function na(s=120,t=16766106,e=30,i=8){const n=new Float32Array(s*3),a=new Float32Array(s);for(let c=0;c<s;c++){const h=Math.random()*Ft*2,d=Math.sqrt(Math.random())*e;n[c*3]=Math.cos(h)*d,n[c*3+1]=Math.random()*i,n[c*3+2]=Math.sin(h)*d,a[c]=Math.random()*Ft*2}const r=new Me;r.setAttribute("position",new je(n,3));const o=new yo({color:t,size:.08,transparent:!0,opacity:.65,blending:Ce,depthWrite:!1,sizeAttenuation:!0}),l=new Sc(r,o);return l.userData.phases=a,l.userData.base=n.slice(),l}function qc(s=16770478,t=14){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d"),n=i.createRadialGradient(256,256,10,256,256,250);n.addColorStop(0,"rgba(255,247,219,1)"),n.addColorStop(.38,"rgba(255,228,168,0.92)"),n.addColorStop(.55,"rgba(255,210,132,0.18)"),n.addColorStop(1,"rgba(255,200,100,0)"),i.fillStyle=n,i.fillRect(0,0,512,512);const a=new bo(e);a.colorSpace=Be;const r=new bc({map:a,transparent:!0,depthWrite:!1,blending:Ce,fog:!1,toneMapped:!1}),o=new ud(r);return o.scale.set(t,t,1),o}function Xc(s=9407106){const t=new Zt;for(let e=0;e<4;e++){const i=ba(s,{transparent:!0,opacity:.13}),n=new Xt(new Mt(.6+Math.random()*.8,0),i);n.position.set((Math.random()-.5)*1.2,e*.5,(Math.random()-.5)*1.2),t.add(n)}return t}function Km(s=16764783,t=12){const e=new Zt,i=new ye({color:s,transparent:!0,blending:Ce,depthWrite:!1});for(let n=0;n<t;n++){const a=new Xt(new wo(.06+Math.random()*.08),i.clone());a.userData.vel=new E((Math.random()-.5)*6,Math.random()*5+1,(Math.random()-.5)*6),a.userData.life=.6+Math.random()*.5,e.add(a)}return e}function pa(s=16761436){const t=new Xt(new xa(.5,.62,32),new ye({color:s,transparent:!0,opacity:.8,side:_e,blending:Ce,depthWrite:!1}));return t.rotation.x=-Ft/2,t.position.y=.04,t}function Zm(s){const t=s?.attributes?.position?.array;if(!t)return!0;for(let e=0;e<t.length;e++)if(Number.isNaN(t[e]))return!0;return!1}function Wi(s){if(!s)return s;s.updateMatrixWorld(!0);const t=[];s.traverse(e=>{e.isObject3D&&t.push(e)});for(const e of t){const i=new Map,n=[];for(const a of[...e.children]){if(!a.isMesh||a.isSkinnedMesh||a.isInstancedMesh||a.children.length||a.userData.noMerge)continue;const r=a.material;if(!r||Array.isArray(r)||r.isShaderMaterial||r.isSpriteMaterial||r.map||r.transparent||r.vertexColors||!a.geometry?.attributes?.position)continue;const o=`${r.uuid}|${a.castShadow?1:0}|${a.receiveShadow?1:0}`;i.has(o)||i.set(o,{mat:r,cast:a.castShadow,receive:a.receiveShadow,list:[]});const l=i.get(o);a.updateMatrix();const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.applyMatrix4(a.matrix);for(const h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);c.getAttribute("normal")||c.computeVertexNormals(),l.list.push(c),n.push({child:a,bucket:l})}for(const a of i.values()){if(a.list.length<2){a.list.forEach(l=>l.dispose());continue}const r=Vc(a.list,!1);if(a.list.forEach(l=>l.dispose()),!r||Zm(r)){r?.dispose();continue}const o=new Xt(r,a.mat);o.castShadow=a.cast,o.receiveShadow=a.receive,e.add(o),n.filter(l=>l.bucket===a).forEach(({child:l})=>l.removeFromParent())}}return s}class Jm{constructor(){this.scene=new yc,this.camera=new Xe(45,window.innerWidth/window.innerHeight,.1,220),this.scene.background=new Dt(527117),this.scene.fog=new ga(856595,.017),this.time=0,this.pointer={x:0,y:0},this.target={x:0,y:0},this.rnd=zc(421),this.build(),window.addEventListener("pointermove",t=>{this.target.x=(t.clientX/window.innerWidth-.5)*2,this.target.y=(t.clientY/window.innerHeight-.5)*2})}build(){this.buildSky(),this.buildLights(),this.buildGround(),this.buildTemple(),this.buildStatue(),this.buildMountains(),this.buildAtmosphere(),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const t=window.innerHeight>window.innerWidth;this.camera.fov=t?58:46,this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.base=t?new E(0,5.2,21):new E(.4,5,15.5)}buildSky(){const t=new qt(160,28,16),e=new wi({side:Ne,depthWrite:!1,uniforms:{top:{value:new Dt(329481)},bottom:{value:new Dt(2761754)}},vertexShader:"varying vec3 vWorld; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorld=wp.xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){ float h=normalize(vWorld+vec3(0.0,14.0,0.0)).y; float t=pow(max(h,0.0),0.62); gl_FragColor=vec4(mix(bottom,top,t),1.0); }"});this.scene.add(new Xt(t,e));const i=qc(16769442,34);i.position.set(17,20,-54),this.scene.add(i),this.moon=i;for(let n=0;n<100;n++){const a=new Xt(new qt(.04+this.rnd()*.1,4,3),new ye({color:16771250,transparent:!0,opacity:.2+this.rnd()*.5}));a.position.set((this.rnd()-.5)*150,25+this.rnd()*55,-20-this.rnd()*100),this.scene.add(a)}}buildLights(){this.scene.add(new Pc(9546168,1577999,.68));const t=new os(12572906,2.4);t.position.set(22,32,-28),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),t.shadow.camera.left=-26,t.shadow.camera.right=26,t.shadow.camera.top=30,t.shadow.camera.bottom=-18,t.shadow.camera.far=90,t.shadow.bias=-.001,this.scene.add(t);const e=new os(16757095,2.1);e.position.set(-16,9,10),this.scene.add(e);const i=new os(16765322,1.3);i.position.set(10,6,-20),this.scene.add(i),this.warmLight=e;for(let n=0;n<4;n++){const a=Wc(11876391,1.15);a.position.set(-8+n*5.5,3.4+Math.sin(n)*.5,-4-n*1.3),this.scene.add(a),this.lamp=a}}buildGround(){const t=this.makeStoneTexture(),e=new Ye(140,140,30,30);e.rotateX(-Math.PI/2);const i=e.attributes.position;for(let c=0;c<i.count;c++){const h=i.getX(c),d=i.getZ(c);Math.hypot(h,d+8)>18&&i.setY(c,Math.sin(h*.24)*.8+Math.cos(d*.3)*.6)}e.computeVertexNormals();const n=new Xt(e,new Ii({map:t,color:2631716,roughness:1,metalness:.03,flatShading:!0}));n.receiveShadow=!0,this.scene.add(n);for(let c=0;c<18;c++){const h=22-c*2.2,d=q(4.4+this.rnd()*1.2,.12,1.7,c%2?3683629:4209714,[(this.rnd()-.5)*.8,.02,h],[0,(this.rnd()-.5)*.08,0],this.scene);d.receiveShadow=!0}const a=ot(this.scene,[-5.5,0,7]);At(.8,1,.5,2960167,[0,.25,0],[0,0,0],a,10);for(let c=0;c<4;c++)At(.05,.05,1+c*.1,3812127,[Math.cos(c*1.6)*.25,.75,Math.sin(c*1.6)*.25],[.1,0,.05],a,5);const r=new Ie(16743730,1.2,6,2);r.position.set(0,.8,0),a.add(r);for(let c=0;c<3;c++){const h=Xc(11117979);h.position.set(-5.5+(this.rnd()-.5)*1.5,1.1+c*1,7+(this.rnd()-.5)*.8),this.scene.add(h),this.smoke=this.smoke||[],this.smoke.push(h)}const o=cn(2.1,4868161);o.position.set(-12,0,8),o.scale.set(1.4,1.1,1.2),this.scene.add(o);const l=ot(this.scene,[-11,0,8],[.22,0,.28]);At(.07,.07,11,4858651,[0,5.3,0],[0,0,0],l,8),At(.12,.12,1.3,13738317,[0,10.8,0],[0,0,0],l,8),B(l,new Mt(.16,0),15913341,[0,11.5,0])}makeStoneTexture(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d");e.fillStyle="#2b2a26",e.fillRect(0,0,512,512);for(let n=0;n<5e3;n++){const a=25+Math.random()*35;e.fillStyle=`rgba(${a},${a-2},${a-5},${Math.random()*.5})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*3,1+Math.random()*3)}for(let n=0;n<22;n++){e.strokeStyle=`rgba(10,10,9,${.15+Math.random()*.2})`,e.lineWidth=.5+Math.random(),e.beginPath();let a=Math.random()*512,r=Math.random()*512;e.moveTo(a,r);for(let o=0;o<5;o++)a+=(Math.random()-.5)*90,r+=(Math.random()-.5)*90,e.lineTo(a,r);e.stroke()}const i=new bo(t);return i.wrapS=i.wrapT=sa,i.repeat.set(10,10),i.colorSpace=Be,i}buildTemple(){const t=ro({gate:7217436,gold:12950095,gateText:"花 果 山"});t.position.set(1,0,-19),t.scale.setScalar(2.25),this.scene.add(t);const e=oe("灵山集团 · 花果山分公司",8.4,.85,{color:"#e8c477",fontSize:58,width:1024,height:128,bg:"rgba(12,10,8,0.55)",border:!0,borderColor:"#8d6a31"});e.position.set(1,7.4,-18.2),this.scene.add(e);for(let n=0;n<4;n++){const a=q(17-n*.6,.22,3.2,3815471,[1,.11+n*.22,-10.8],[0,0,0],this.scene);a.receiveShadow=!0}for(const n of[-1,1]){const a=ot(this.scene,[n*8.5,0,-10]);At(.06,.08,8.5,4075298,[0,4.2,0],[0,0,0],a,6);const r=new Xt(new Ye(1.15,4.2,4,8),new Ii({color:n<0?9185312:3030579,roughness:1,side:_e,flatShading:!0}));r.position.set(.58,5.2,0),a.add(r);const o=oe(n<0?"急":"猴",.9,3.8,{color:"#d8b25f",fontSize:250,vertical:!0,width:256,height:1024});o.position.set(.58,5.2,.02),a.add(o)}const i=fa({fur:3814445,cloth:4143664,gold:9205310,staff:!1,badge:!1});i.position.set(4.2,.1,-7.5),i.rotation.y=2.7,i.scale.setScalar(.9),this.scene.add(i),this.monk=i}buildStatue(){const t=fa({fur:3816247,cloth:3421745,gold:9008710,face:5197897,staff:!0,badge:!1});t.position.set(13.5,2.3,-14),t.rotation.y=-.8,t.scale.setScalar(2.25),t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),this.scene.add(t);const e=ot(this.scene,[13.5,0,-14]);for(let n=0;n<4;n++)di(5.5-n*.55,1.1,3618867,[0,.55+n*1.1,0],[0,n*.4,0],e,7);this.statue=t;const i=new Ie(16761963,1.8,16,2);i.position.set(10,8,-10),this.scene.add(i)}buildMountains(){for(let t=0;t<18;t++){const e=this.rnd()*Math.PI*2,i=48+this.rnd()*30;if(Math.sin(e)>.2)continue;const n=16+this.rnd()*34;di(9+this.rnd()*12,n,t%2?1448731:1843229,[Math.cos(e)*i,n/2-2,Math.sin(e)*i-8],[0,this.rnd()*3,0],this.scene,6)}for(let t=0;t<5;t++){const e=Nn("pine",this.rnd);e.position.set(-22+t*9,0,-27-this.rnd()*10),e.scale.setScalar(2.3),this.scene.add(e)}}buildAtmosphere(){const t=na(220,16765322,34,18);t.material.size=.1,t.material.opacity=.8,t.position.z=-2,this.scene.add(t),this.dust=t;const e=new ye({color:9144952,transparent:!0,opacity:.06,depthWrite:!1,side:_e});for(let i=0;i<5;i++){const n=new Xt(new Ye(60,14),e.clone());n.rotation.x=-Math.PI/2,n.position.set((this.rnd()-.5)*20,.25+i*.16,2-i*9),n.material.opacity=.04+i*.015,this.scene.add(n),this.mist=this.mist||[],this.mist.push(n)}}update(t){this.time+=t,this.pointer.x+=(this.target.x-this.pointer.x)*Math.min(1,t*2.2),this.pointer.y+=(this.target.y-this.pointer.y)*Math.min(1,t*2.2);const e=this.time,i=Math.sin(e*.1)*.6,n=this.base||new E(.4,5,15.5);if(this.camera.position.set(n.x+i+this.pointer.x*1.1,n.y+Math.sin(e*.24)*.08-this.pointer.y*.45,n.z+Math.sin(e*.12)*.35),this.camera.lookAt(.5+this.pointer.x*.4,3.4-this.pointer.y*.2,-8),this.dust){const a=this.dust.geometry.attributes.position,r=this.dust.userData.base,o=this.dust.userData.phases;for(let l=0;l<a.count;l++){const c=l*3;a.array[c]=r[c]+Math.sin(e*.22+o[l])*1.4,a.array[c+1]=(r[c+1]+e*.35+o[l]*.2)%18,a.array[c+2]=r[c+2]+Math.cos(e*.2+o[l])*1.4}a.needsUpdate=!0}this.monk&&(this.monk.userData.rig.head.rotation.y=Math.sin(e*.5)*.15,this.monk.userData.rig.tail.rotation.y=Math.sin(e*.9)*.25),this.smoke&&this.smoke.forEach((a,r)=>{a.position.y+=t*(.12+r*.03),a.rotation.y+=t*.08,a.position.y>8&&(a.position.y=1.1)}),this.mist&&this.mist.forEach((a,r)=>{a.position.x=Math.sin(e*.05+r)*3+(r%2?4:-4),a.material.opacity=.04+r*.012+Math.sin(e*.2+r)*.01}),this.warmLight&&(this.warmLight.intensity=2+Math.sin(e*1.3)*.14),this.moon&&(this.moon.material.opacity=.92+Math.sin(e*.5)*.04),this.statue&&(this.statue.rotation.y=-.8+Math.sin(e*.08)*.02)}}const ur={monkey:{bg1:"#2a2419",bg2:"#0b0b09",fur:"#6d4a2f",fur2:"#4b311f",face:"#d9a572",accent:"#d8a744",cloth:"#a63b2b",rim:"#f0c56e"},wukong:{bg1:"#2c2415",bg2:"#0c0a07",fur:"#7c532f",fur2:"#5a3820",face:"#e0ac76",accent:"#f1c666",cloth:"#a57b2a",rim:"#ffe2a0"},sixear:{bg1:"#242425",bg2:"#08090a",fur:"#34302e",fur2:"#222020",face:"#b9afa2",accent:"#8d8982",cloth:"#202b34",rim:"#b8c5d3"},keeper:{bg1:"#2a251a",bg2:"#0b0a08",fur:"#6d5a3d",fur2:"#4b3d28",face:"#d3b083",accent:"#c6a45e",cloth:"#5a472d",rim:"#e8d19b"},pig:{bg1:"#2a1d1f",bg2:"#0b0809",fur:"#d78f96",fur2:"#b36d79",face:"#e7a2a7",accent:"#d6a95b",cloth:"#46647c",rim:"#ffd0d0"},bear:{bg1:"#241c16",bg2:"#090807",fur:"#252321",fur2:"#161514",face:"#634735",accent:"#b78b52",cloth:"#2d3240",rim:"#e2b270"},rat:{bg1:"#2a2415",bg2:"#0a0907",fur:"#7c6a46",fur2:"#584a31",face:"#a18963",accent:"#d3ac52",cloth:"#4d5c3c",rim:"#f0d28d"},yellowbrow:{bg1:"#2b2518",bg2:"#0b0a07",fur:"#d8b06e",fur2:"#b78a4c",face:"#e2b87d",accent:"#e8c35d",cloth:"#9f2e28",rim:"#ffe6a3"},spider:{bg1:"#25152a",bg2:"#09060b",fur:"#4a2b56",fur2:"#2e1937",face:"#b28d76",accent:"#d58bc4",cloth:"#3d2349",rim:"#ff9fdc"},redboy:{bg1:"#2b1812",bg2:"#0c0706",fur:"#d77d51",fur2:"#a94d32",face:"#e3a272",accent:"#f1a238",cloth:"#a53a2c",rim:"#ffb05e"},rock:{bg1:"#24231d",bg2:"#090908",fur:"#6b665b",fur2:"#4d4941",face:"#807a6c",accent:"#b0a276",cloth:"#2b342e",rim:"#d6c79c"}};function Qm(s,t){return`
  <defs>
    <radialGradient id="bg-${s}" cx="50%" cy="36%" r="80%">
      <stop offset="0%" stop-color="${t.bg1}"/><stop offset="100%" stop-color="${t.bg2}"/>
    </radialGradient>
    <linearGradient id="fur-${s}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${t.fur}"/><stop offset="100%" stop-color="${t.fur2}"/>
    </linearGradient>
    <linearGradient id="face-${s}" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="${t.face}"/><stop offset="100%" stop-color="${t.fur2}"/>
    </linearGradient>
    <linearGradient id="gold-${s}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f6dfa0"/><stop offset="50%" stop-color="${t.accent}"/><stop offset="100%" stop-color="#8c6324"/>
    </linearGradient>
    <pattern id="hatch-${s}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="${t.rim}" stroke-width="0.6" opacity="0.08"/>
    </pattern>
    <filter id="roughen-${s}">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.1" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>`}function pi(s,t,e){return`<svg class="avatar-svg" viewBox="0 0 220 260" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    ${Qm(s,t)}
    <rect width="220" height="260" fill="url(#bg-${s})"/>
    <rect width="220" height="260" fill="url(#hatch-${s})"/>
    <circle cx="110" cy="110" r="88" fill="none" stroke="${t.accent}" stroke-width="0.7" opacity="0.22"/>
    <circle cx="110" cy="110" r="78" fill="none" stroke="${t.rim}" stroke-width="0.35" opacity="0.12" stroke-dasharray="2 7"/>
    <g filter="url(#roughen-${s})">${e}</g>
    <path d="M18 22 h28 M18 22 v28 M202 22 h-28 M202 22 v28 M18 238 h28 M18 238 v-28 M202 238 h-28 M202 238 v-28" fill="none" stroke="${t.accent}" stroke-width="1" opacity="0.55"/>
    <rect x="8" y="8" width="204" height="244" fill="none" stroke="${t.accent}" stroke-width="0.5" opacity="0.22"/>
  </svg>`}function fr(s,t,e=""){return pi(s,t,`
    <path d="M110 238 C56 238 39 207 39 176 C39 152 55 143 68 143 L152 143 C169 143 182 154 182 177 C182 209 162 238 110 238 Z" fill="${t.cloth}"/>
    <path d="M68 143 L92 168 L110 158 L128 168 L152 143 Z" fill="${t.accent}" opacity="0.55"/>
    <path d="M82 154 L110 205 L138 154" fill="none" stroke="${t.rim}" stroke-width="2" opacity="0.28"/>
    <ellipse cx="60" cy="106" rx="23" ry="29" fill="url(#fur-${s})" transform="rotate(-12 60 106)"/>
    <ellipse cx="160" cy="106" rx="23" ry="29" fill="url(#fur-${s})" transform="rotate(12 160 106)"/>
    <ellipse cx="60" cy="106" rx="11" ry="16" fill="${t.face}" opacity="0.8"/>
    <ellipse cx="160" cy="106" rx="11" ry="16" fill="${t.face}" opacity="0.8"/>
    <path d="M110 44 C153 44 178 70 178 108 C178 148 151 178 110 178 C69 178 42 148 42 108 C42 70 67 44 110 44 Z" fill="url(#fur-${s})"/>
    <path d="M110 70 C137 70 149 89 149 111 C149 138 132 154 110 154 C88 154 71 138 71 111 C71 89 83 70 110 70 Z" fill="${t.face}" opacity="0.92"/>
    <path d="M71 106 C71 83 85 68 110 68 C135 68 149 83 149 106" fill="none" stroke="${t.accent}" stroke-width="7" opacity="0.95"/>
    <path d="M110 68 l11 10 l-11 11 l-11 -11 Z" fill="url(#gold-${s})"/>
    <path d="M91 110 q10 -9 20 0" fill="none" stroke="#20140e" stroke-width="5" stroke-linecap="round"/>
    <path d="M119 110 q10 -9 20 0" fill="none" stroke="#20140e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="101" cy="115" r="3.5" fill="${t.rim}"/><circle cx="129" cy="115" r="3.5" fill="${t.rim}"/>
    <path d="M99 128 q11 -8 22 0" fill="none" stroke="${t.accent}" stroke-width="3" opacity="0.8"/>
    <path d="M110 126 q-5 11 3 13 q7 2 8 -7" fill="none" stroke="#3a2017" stroke-width="2.4"/>
    <path d="M97 139 q13 9 26 0" fill="none" stroke="#4a251c" stroke-width="3" stroke-linecap="round"/>
    <path d="M62 55 l-8 -21 l19 9 l-3 16 Z" fill="${t.fur2}"/>
    <path d="M158 55 l8 -21 l-19 9 l3 16 Z" fill="${t.fur2}"/>
    ${e}
  `)}function oo(s){s={mallow:"monkey",bajie:"pig",hundredEyes:"spider"}[s]||s;const e=ur[s]||ur.monkey;switch(s){case"monkey":return fr(s,e);case"wukong":return fr(s,e,`
        <path d="M54 96 q12 -10 24 0" fill="none" stroke="#1b110c" stroke-width="6"/>
        <path d="M142 96 q12 -10 24 0" fill="none" stroke="#1b110c" stroke-width="6"/>
        <path d="M78 173 l32 34 l32 -34" fill="none" stroke="${e.rim}" stroke-width="2" opacity="0.4"/>
      `);case"sixear":return fr(s,e,`
        <ellipse cx="44" cy="74" rx="17" ry="24" fill="${e.fur2}" transform="rotate(-20 44 74)"/>
        <ellipse cx="176" cy="74" rx="17" ry="24" fill="${e.fur2}" transform="rotate(20 176 74)"/>
        <ellipse cx="44" cy="74" rx="8" ry="13" fill="${e.face}" opacity="0.5"/>
        <ellipse cx="176" cy="74" rx="8" ry="13" fill="${e.face}" opacity="0.5"/>
        <rect x="126" y="188" width="42" height="55" rx="2" fill="#e4ddca" transform="rotate(8 147 215)"/>
        <rect x="135" y="207" width="24" height="6" fill="#80332b" transform="rotate(8 147 210)"/>
      `);case"keeper":return pi(s,e,`
        <path d="M110 245 C60 245 45 211 46 176 C48 148 76 144 110 144 C144 144 172 148 174 176 C175 211 160 245 110 245 Z" fill="${e.cloth}"/>
        <path d="M75 146 L110 198 L145 146" fill="none" stroke="${e.accent}" stroke-width="3" opacity="0.5"/>
        <path d="M82 134 C82 102 89 65 110 65 C131 65 138 102 138 134 Z" fill="${e.face}"/>
        <path d="M80 92 C80 58 91 38 110 38 C129 38 140 58 140 92 Z" fill="${e.fur2}"/>
        <path d="M76 102 q34 -18 68 0" fill="none" stroke="${e.accent}" stroke-width="7" stroke-linecap="round"/>
        <path d="M80 100 q30 8 60 0" fill="none" stroke="#2c2018" stroke-width="4" opacity="0.6"/>
        <path d="M90 102 q7 -6 14 0 M116 102 q7 -6 14 0" fill="none" stroke="#20140f" stroke-width="4"/>
        <path d="M89 96 q8 -8 17 -1 M114 95 q8 -7 17 1" fill="none" stroke="#d9d0bd" stroke-width="3" stroke-linecap="round"/>
        <path d="M110 112 q-4 12 4 13" fill="none" stroke="#6a4932" stroke-width="2"/>
        <path d="M100 127 q10 7 20 0" fill="none" stroke="#4a2e20" stroke-width="3"/>
        <path d="M88 137 C87 170 101 193 110 214 C119 193 133 170 132 137 C120 146 100 146 88 137 Z" fill="#e6e0d1" opacity="0.92"/>
        <path d="M97 154 q13 8 26 0 M99 170 q11 7 22 0 M103 185 q7 5 14 0" fill="none" stroke="#b8b29f" stroke-width="1.2"/>
        <path d="M66 157 l-8 66 M154 157 l8 66" stroke="${e.fur2}" stroke-width="2" opacity="0.4"/>
      `);case"pig":return pi(s,e,`
        <path d="M110 246 C52 246 36 214 38 178 C40 151 64 144 110 144 C156 144 180 151 182 178 C184 214 168 246 110 246 Z" fill="${e.cloth}"/>
        <path d="M70 151 L110 200 L150 151" fill="none" stroke="${e.accent}" stroke-width="3" opacity="0.5"/>
        <path d="M110 42 C151 42 174 72 174 112 C174 153 150 180 110 180 C70 180 46 153 46 112 C46 72 69 42 110 42 Z" fill="url(#fur-${s})"/>
        <path d="M53 74 q-19 -42 11 -44 q17 0 21 27 Z" fill="${e.fur2}"/>
        <path d="M167 74 q19 -42 -11 -44 q-17 0 -21 27 Z" fill="${e.fur2}"/>
        <ellipse cx="110" cy="126" rx="39" ry="31" fill="${e.face}"/>
        <ellipse cx="98" cy="124" rx="8" ry="11" fill="${e.fur2}"/>
        <ellipse cx="122" cy="124" rx="8" ry="11" fill="${e.fur2}"/>
        <path d="M82 96 q11 -9 22 -1 M116 95 q11 -8 22 1" fill="none" stroke="#3a1e24" stroke-width="4" stroke-linecap="round"/>
        <circle cx="92" cy="104" r="4" fill="#271419"/><circle cx="128" cy="104" r="4" fill="#271419"/>
        <path d="M96 146 q14 -8 28 0" fill="none" stroke="#7e3c4a" stroke-width="3"/>
        <path d="M60 170 q50 22 100 0" fill="none" stroke="${e.accent}" stroke-width="4" opacity="0.5"/>
        <rect x="130" y="172" width="44" height="54" rx="3" fill="#e2d9c4" transform="rotate(6 152 199)"/>
        <rect x="139" y="190" width="26" height="6" fill="#9c3b31" transform="rotate(6 152 195)"/>
      `);case"bear":return pi(s,e,`
        <path d="M110 246 C52 246 35 211 37 177 C39 150 65 142 110 142 C155 142 181 150 183 177 C185 211 168 246 110 246 Z" fill="${e.cloth}"/>
        <path d="M80 149 L110 224 L140 149" fill="#d9d2c1"/>
        <path d="M104 154 L110 222 L116 154 Z" fill="#8d3028"/>
        <path d="M110 46 C156 46 182 77 182 117 C182 157 155 182 110 182 C65 182 38 157 38 117 C38 77 64 46 110 46 Z" fill="url(#fur-${s})"/>
        <circle cx="48" cy="69" r="27" fill="${e.fur2}"/><circle cx="172" cy="69" r="27" fill="${e.fur2}"/>
        <circle cx="48" cy="69" r="12" fill="#5b4230" opacity="0.7"/><circle cx="172" cy="69" r="12" fill="#5b4230" opacity="0.7"/>
        <ellipse cx="110" cy="134" rx="38" ry="29" fill="${e.face}"/>
        <ellipse cx="110" cy="122" rx="15" ry="11" fill="#201713"/>
        <path d="M64 98 h43 q7 0 7 8 v13 q0 7 -7 7 h-43 q-7 0 -7 -7 v-13 q0 -8 7 -8 Z" fill="#111211" stroke="#5a5b56" stroke-width="1.5"/>
        <path d="M113 98 h43 q7 0 7 8 v13 q0 7 -7 7 h-43 q-7 0 -7 -7 v-13 q0 -8 7 -8 Z" fill="#111211" stroke="#5a5b56" stroke-width="1.5"/>
        <rect x="68" y="104" width="35" height="9" fill="#54777e" opacity="0.6"/>
        <rect x="117" y="104" width="35" height="9" fill="#54777e" opacity="0.6"/>
        <path d="M78 150 q32 20 64 0" fill="none" stroke="#2e201a" stroke-width="3"/>
        <path d="M75 169 L110 224 L145 169" fill="none" stroke="${e.accent}" stroke-width="3" opacity="0.5"/>
        <rect x="127" y="188" width="40" height="50" rx="2" fill="#e5ddca" transform="rotate(7 147 213)"/>
        <rect x="136" y="205" width="22" height="5" fill="#7c302a" transform="rotate(7 147 208)"/>
      `);case"rat":return pi(s,e,`
        <path d="M110 246 C54 246 38 212 40 179 C42 152 66 144 110 144 C154 144 178 152 180 179 C182 212 166 246 110 246 Z" fill="${e.cloth}"/>
        <path d="M42 192 q68 30 136 0 l-10 50 h-116 Z" fill="${e.accent}" opacity="0.5"/>
        <path d="M110 54 C149 54 170 82 170 116 C170 151 149 176 110 176 C71 176 50 151 50 116 C50 82 71 54 110 54 Z" fill="url(#fur-${s})"/>
        <path d="M52 78 q-26 -38 8 -50 q24 0 23 40 Z" fill="${e.fur2}"/>
        <path d="M168 78 q26 -38 -8 -50 q-24 0 -23 40 Z" fill="${e.fur2}"/>
        <path d="M110 164 q-8 18 6 20 q12 2 14 -12" fill="none" stroke="#5f4d34" stroke-width="4"/>
        <path d="M65 101 q45 -17 90 0" fill="none" stroke="#d1a441" stroke-width="11" stroke-linecap="round"/>
        <path d="M67 99 h86 v18 h-86 Z" fill="#202321" opacity="0.9"/>
        <rect x="74" y="102" width="32" height="10" fill="#7f9c8a" opacity="0.5"/>
        <rect x="114" y="102" width="32" height="10" fill="#7f9c8a" opacity="0.5"/>
        <path d="M73 86 q37 -12 74 0" fill="none" stroke="${e.accent}" stroke-width="4" opacity="0.6"/>
        <path d="M82 134 q10 -7 20 0 M118 134 q10 -7 20 0" fill="none" stroke="#3a2c19" stroke-width="3"/>
        <ellipse cx="110" cy="145" rx="13" ry="9" fill="#5d4b34"/>
        <path d="M99 154 q11 8 22 0" fill="none" stroke="#4a3522" stroke-width="2.5"/>
        <path d="M150 176 l38 22" stroke="${e.accent}" stroke-width="5" opacity="0.7"/>
      `);case"yellowbrow":return pi(s,e,`
        <path d="M110 246 C50 246 34 211 36 177 C38 150 64 141 110 141 C156 141 182 150 184 177 C186 211 170 246 110 246 Z" fill="${e.cloth}"/>
        <path d="M74 148 L110 230 L146 148" fill="none" stroke="${e.accent}" stroke-width="5" opacity="0.55"/>
        <circle cx="110" cy="108" r="69" fill="url(#fur-${s})"/>
        <circle cx="110" cy="108" r="69" fill="none" stroke="${e.accent}" stroke-width="2" opacity="0.5"/>
        <path d="M56 83 C67 49 90 38 110 38 C130 38 153 49 164 83 C140 65 80 65 56 83 Z" fill="${e.fur2}" opacity="0.5"/>
        <path d="M79 104 q12 -9 24 -1 M117 103 q12 -8 24 1" fill="none" stroke="#3a2b18" stroke-width="4" stroke-linecap="round"/>
        <path d="M83 116 q27 16 54 0" fill="none" stroke="#5d3d25" stroke-width="4" stroke-linecap="round"/>
        <path d="M84 145 q26 20 52 0" fill="none" stroke="#6d3d29" stroke-width="3"/>
        <path d="M90 151 q20 12 40 0" fill="none" stroke="#d9b681" stroke-width="5" opacity="0.5"/>
        <circle cx="50" cy="128" r="16" fill="none" stroke="url(#gold-${s})" stroke-width="2.4"/>
        <circle cx="170" cy="128" r="16" fill="none" stroke="url(#gold-${s})" stroke-width="2.4"/>
        <path d="M98 172 l12 22 l12 -22" fill="url(#gold-${s})"/>
      `);case"spider":return pi(s,e,`
        <path d="M110 246 C50 246 34 210 36 176 C38 148 66 141 110 141 C154 141 182 148 184 176 C186 210 170 246 110 246 Z" fill="${e.cloth}"/>
        <path d="M110 47 C151 47 174 76 174 112 C174 151 149 178 110 178 C71 178 46 151 46 112 C46 76 69 47 110 47 Z" fill="url(#fur-${s})"/>
        <path d="M72 89 q38 -27 76 0 q5 24 -10 40 q-28 22 -56 0 q-15 -16 -10 -40 Z" fill="${e.face}" opacity="0.92"/>
        <g fill="${e.rim}">
          <circle cx="84" cy="105" r="6"/><circle cx="110" cy="102" r="6"/><circle cx="136" cy="105" r="6"/>
          <circle cx="94" cy="119" r="4"/><circle cx="126" cy="119" r="4"/>
        </g>
        <g fill="#29112e">
          <circle cx="84" cy="105" r="2.4"/><circle cx="110" cy="102" r="2.4"/><circle cx="136" cy="105" r="2.4"/>
          <circle cx="94" cy="119" r="1.6"/><circle cx="126" cy="119" r="1.6"/>
        </g>
        <path d="M87 143 q23 14 46 0" fill="none" stroke="#642644" stroke-width="3"/>
        <path d="M53 63 l-16 -25 M167 63 l16 -25" stroke="${e.fur2}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="110" cy="221" r="46" fill="none" stroke="${e.accent}" stroke-width="4" opacity="0.35"/>
        <circle cx="110" cy="221" r="52" fill="none" stroke="${e.rim}" stroke-width="1" opacity="0.3" stroke-dasharray="3 6"/>
        <rect x="132" y="180" width="38" height="50" rx="3" fill="#e1d7c6" transform="rotate(6 151 205)"/>
        <rect x="140" y="197" width="22" height="5" fill="#8c3458" transform="rotate(6 151 200)"/>
      `);case"redboy":return pi(s,e,`
        <path d="M110 246 C55 246 40 210 42 178 C44 152 68 143 110 143 C152 143 176 152 178 178 C180 210 165 246 110 246 Z" fill="${e.cloth}"/>
        <path d="M110 60 C144 60 164 85 164 116 C164 147 143 169 110 169 C77 169 56 147 56 116 C56 85 76 60 110 60 Z" fill="${e.face}"/>
        <path d="M110 25 l12 26 l23 -9 l-10 25 l26 5 l-25 17 l21 18 l-31 1 l7 29 l-23 -14 l-13 26 l-10 -27 l-25 10 l11 -26 l-26 -4 l25 -18 l-20 -19 l31 1 Z" fill="#f2a02d" opacity="0.9"/>
        <path d="M110 43 l7 20 l17 -9 l-8 21 l18 5 l-18 13 l13 14 l-21 -1 l3 21 l-13 -13 l-10 19 l-5 -21 l-18 8 l8 -20 l-19 -3 l17 -13 l-14 -14 l21 1 Z" fill="#e84b2c" opacity="0.85"/>
        <circle cx="89" cy="109" r="5.5" fill="#fff1d8"/><circle cx="131" cy="109" r="5.5" fill="#fff1d8"/>
        <circle cx="90" cy="110" r="2.4" fill="#2b1410"/><circle cx="130" cy="110" r="2.4" fill="#2b1410"/>
        <path d="M80 96 q10 -9 21 -2 M119 94 q11 -7 21 2" fill="none" stroke="#6c2e20" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M97 133 q13 -8 26 0" fill="none" stroke="#783022" stroke-width="3"/>
        <path d="M70 169 q40 20 80 0" fill="none" stroke="${e.accent}" stroke-width="3" opacity="0.55"/>
        <path d="M140 175 l44 -22" stroke="#c7a477" stroke-width="4"/>
        <rect x="136" y="184" width="34" height="48" rx="3" fill="#d8ccb5" transform="rotate(8 153 208)" opacity="0.8"/>
      `);case"rock":return pi(s,e,`
        <path d="M110 246 C48 246 31 208 35 171 C39 144 69 137 110 137 C151 137 181 144 185 171 C189 208 172 246 110 246 Z" fill="${e.cloth}"/>
        <path d="M42 92 L70 45 L105 62 L138 36 L174 82 L161 145 L128 169 L81 160 L48 140 Z" fill="url(#fur-${s})"/>
        <path d="M42 92 L70 45 L105 62 L87 105 Z" fill="${e.fur2}" opacity="0.7"/>
        <path d="M138 36 L174 82 L161 145 L130 130 Z" fill="#575248" opacity="0.65"/>
        <path d="M62 116 L92 102 L96 117 L67 133 Z" fill="#e9a744"/>
        <path d="M130 103 L158 116 L153 133 L126 118 Z" fill="#e9a744"/>
        <path d="M77 143 L110 155 L143 143" fill="none" stroke="#3d3932" stroke-width="4"/>
        <path d="M70 45 L110 13 L151 47 L138 57 L110 35 L82 57 Z" fill="#242f2a"/>
        <path d="M86 13 h48 l-6 26 h-36 Z" fill="#2d3a33"/>
        <rect x="125" y="174" width="39" height="50" rx="2" fill="#d8d0bd" transform="rotate(6 144 199)"/>
      `);default:return pi("monkey",ur.monkey,'<text x="110" y="145" font-size="90" text-anchor="middle" fill="#d9a94e">?</text>')}}class tg{constructor(t,e,i){this.callbacks=t,this.save=e,this.settings=i,this.selectedDifficulty="normal",this.currentScreen=null,this.toastTimer=null,this.el=document.createElement("section"),this.el.id="menu-ui",this.el.className="menu-ui",this.el.innerHTML=this.template(),document.getElementById("ui-root").appendChild(this.el),this.bind(),this.updateSave(e)}template(){return`
      <div class="menu-shade"></div>
      <header class="menu-topbar">
        <div class="menu-studio">
          <div class="studio-mark">花</div>
          <div>
            <b>花果山第七制片厂</b>
            <small>FLOWER FRUIT MOUNTAIN PICTURES · EST. 2024</small>
          </div>
        </div>
        <div class="menu-top-actions">
          <button class="top-link" data-menu-action="sound"><i></i><span data-sound-label>声音：开</span></button>
          <button class="top-link" data-menu-action="fullscreen">全屏模式 ↗</button>
          <span class="menu-build">VER 1.0.0 · 抢先受苦版</span>
        </div>
      </header>

      <div class="menu-layout">
        <div class="menu-hero">
          <div class="hero-eyebrow"><span>非官方</span> 西游题材 · 抽象动作角色扮演</div>
          <div class="hero-title-wrap">
            <div class="hero-title-line">黑 神 话</div>
            <div class="hero-title-main">猴<span>急</span></div>
            <div class="hero-seal">急</div>
          </div>
          <div class="hero-en"><span>BLACK MYTH</span><i></i><span>MONKEY RUSH</span></div>
          <div class="hero-copy">六根未净，班还没下。<br><em>一个关于转正的恐怖故事。</em></div>
          <nav class="menu-nav">
            <button class="menu-nav-item featured" data-menu-action="new">
              <span class="nav-index">01</span>
              <span class="nav-label">新的轮回</span>
              <span class="nav-sub">NEW GAME</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="continue">
              <span class="nav-index">02</span>
              <span class="nav-label">继续取经</span>
              <span class="nav-sub" data-continue-label>NO SAVE</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="chapters">
              <span class="nav-index">03</span>
              <span class="nav-label">章节选择</span>
              <span class="nav-sub">CHAPTERS</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="gallery">
              <span class="nav-index">04</span>
              <span class="nav-label">影神图</span>
              <span class="nav-sub">BESTIARY</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="settings">
              <span class="nav-index">05</span>
              <span class="nav-label">设置</span>
              <span class="nav-sub">SETTINGS</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="credits">
              <span class="nav-index">06</span>
              <span class="nav-label">制作名单</span>
              <span class="nav-sub">CREDITS</span>
              <span class="nav-arrow">→</span>
            </button>
          </nav>
        </div>

        <aside class="menu-archive">
          <div class="archive-head">
            <span class="archive-label">轮回档案 / SAVE DATA</span>
            <span class="archive-dot"></span>
          </div>
          <div data-archive></div>
        </aside>
      </div>

      <footer class="menu-footer">
        <div class="legal">
          非官方恶搞同人作品，与《黑神话：悟空》及游戏科学无关。<br>
          本作不含任何内购、抽卡与真实猴子。请勿在上班时间游玩。
        </div>
        <div class="ticker"><b>公告</b><span>修复了猴子过于帅气的 bug（未成功） · 建议佩戴耳机 · 横屏体验更佳</span></div>
        <div class="keys"><b>建议</b> 横屏 · 耳机 · 下班后</div>
      </footer>

      <div class="menu-screen screen" data-menu-screen></div>
    `}bind(){this.el.addEventListener("click",t=>{this.callbacks.onSound?.("ui");const e=t.target.closest("[data-menu-action]");if(e){const r=e.dataset.menuAction;r==="sound"?this.toggleSound():r==="fullscreen"?this.callbacks.onFullscreen?.():this.onAction(r);return}if(t.target.closest("[data-close-screen]")){this.closeScreen();return}const i=t.target.closest("[data-difficulty]");if(i){this.selectedDifficulty=i.dataset.difficulty,this.renderDifficulty();return}if(t.target.closest("[data-start-difficulty]")){const r=this.selectedDifficulty;this.closeScreen(),this.callbacks.onStartNewGame?.(r);return}const n=t.target.closest("[data-chapter]");if(n&&!n.classList.contains("locked")){const r=Number(n.dataset.chapter);this.closeScreen(),this.callbacks.onStartChapter?.(r);return}const a=t.target.closest("[data-gallery]");if(a&&!a.classList.contains("locked")){this.openGalleryDetail(a.dataset.gallery);return}if(t.target.closest("[data-confirm-yes]")){const r=this.confirmResolve;this.confirmResolve=null,this.closeScreen(),r?.(!0);return}if(t.target.closest("[data-confirm-no]")){const r=this.confirmResolve;this.confirmResolve=null,this.closeScreen(),r?.(!1);return}if(t.target.closest("[data-reset-save]")){this.confirm("清空轮回档案？","所有六根、功德、死亡记录与结局都会被删除。土地公不会退款。","确认清空","再想想").then(r=>{r&&(this.closeScreen(),this.callbacks.onResetSave?.())});return}t.target.closest("[data-screen-close]")&&this.closeScreen()}),this.el.addEventListener("input",t=>{const e=t.target.closest("[data-setting]");if(!e)return;const i=e.dataset.setting;e.type==="range"&&(this.settings[i]=Number(e.value)/100),this.syncSettingsUI(),this.callbacks.onSettingsChange?.(this.settings)}),this.el.addEventListener("click",t=>{const e=t.target.closest("[data-seg-setting]");if(e){const[n,a]=e.dataset.segSetting.split(":");this.settings[n]=a,this.syncSettingsUI(),this.callbacks.onSettingsChange?.(this.settings);return}const i=t.target.closest("[data-toggle-setting]");if(i){const n=i.dataset.toggleSetting;this.settings[n]=!this.settings[n],i.classList.toggle("on",!!this.settings[n]),this.callbacks.onSettingsChange?.(this.settings)}}),window.addEventListener("keydown",t=>{t.code==="Escape"&&this.currentScreen&&this.closeScreen()})}onAction(t){switch(t){case"new":this.requestNewGame();break;case"continue":this.save.started?this.callbacks.onContinue?.():this.toast("还没有档案。先入职吧。");break;case"chapters":this.openChapters();break;case"gallery":this.openGallery();break;case"settings":this.openSettings();break;case"credits":this.openCredits();break}}async requestNewGame(){this.save.started&&!await this.confirm("开始新的轮回？","上一段取经进度会被覆盖。六根、功德、死亡次数，统统带不走。","喝下孟婆汤","还是继续吧")||this.openDifficulty()}toggleSound(){this.settings.master=this.settings.master>0?0:.8,this.syncSoundLabel(),this.callbacks.onSettingsChange?.(this.settings)}syncSoundLabel(){const t=this.el.querySelector("[data-sound-label]");t&&(t.textContent=`声音：${this.settings.master>0?"开":"关"}`)}updateSave(t){this.save=t;const e=this.el.querySelector("[data-archive]");if(!e)return;const i=$e[Math.min(t.chapter??0,$e.length-1)],n=t.relics?.length??0,a=Math.round(n/lr.length*100);t.started?e.innerHTML=`
        <div class="archive-chapter"><b>${fi(i.chapterLabel)} · ${fi(i.name)}</b><span>${t.completed?"DEAD END":"IN PROGRESS"}</span></div>
        <div class="archive-loc">${fi(i.location)}</div>
        <div class="archive-track"><i style="width:${a}%"></i></div>
        <div class="archive-stats">
          <div class="archive-stat"><span>六根</span><b>${n}/${lr.length}</b></div>
          <div class="archive-stat"><span>功德</span><b>${t.coins??0}</b></div>
          <div class="archive-stat"><span>死亡</span><b>${t.deaths??0}</b></div>
          <div class="archive-stat"><span>结局</span><b>${t.endings?.length??0}/3</b></div>
        </div>
        <div class="archive-quote"><em>“${fi(i.subtitle)}”</em><br>游玩时长 ${Oc(t.playTime??0)} · 难度 ${fi(ua.find(l=>l.id===t.difficulty)?.name??"加班")}</div>
      `:e.innerHTML=`
        <div class="archive-chapter"><b>尚未入职</b><span>NO RECORD</span></div>
        <div class="archive-loc">档案为空。你甚至还没开始试用。</div>
        <div class="archive-track"><i style="width:0%"></i></div>
        <div class="archive-stats">
          <div class="archive-stat"><span>六根</span><b>0/6</b></div>
          <div class="archive-stat"><span>功德</span><b>0</b></div>
          <div class="archive-stat"><span>死亡</span><b>0</b></div>
          <div class="archive-stat"><span>结局</span><b>0/3</b></div>
        </div>
        <div class="archive-quote"><em>“转正之后，就可以开始试用期了。”</em><br>—— 灵山集团 HR 部</div>
      `;const r=this.el.querySelector('[data-menu-action="continue"]'),o=this.el.querySelector("[data-continue-label]");r&&(r.disabled=!t.started),o&&(t.started?t.completed?o.textContent="ENDGAME":o.textContent=`${i.chapterLabel} · ${i.name}`:o.textContent="NO SAVE"),this.syncSoundLabel()}show(){this.el.classList.add("visible")}hide(){this.el.classList.remove("visible"),this.closeScreen()}openScreen(t,{wide:e=!1}={}){const i=this.el.querySelector("[data-menu-screen]");i.classList.add("open"),i.innerHTML=`<div class="screen-inner ${e?"wide":""}">${t}</div>`,this.currentScreen=i,requestAnimationFrame(()=>i.classList.add("open"))}closeScreen(){const t=this.el.querySelector("[data-menu-screen]");if(t){if(this.confirmResolve){const e=this.confirmResolve;this.confirmResolve=null,e(!1)}t.classList.remove("open"),this.currentScreen=null,setTimeout(()=>{t.classList.contains("open")||(t.innerHTML="")},320)}}screenHead(t,e,i=""){return`
      <div class="screen-head">
        <div>
          <div class="screen-title">${t}</div>
          <div class="screen-sub">${e}</div>
        </div>
        <div class="screen-meta">${i}</div>
      </div>
      <button class="btn-icon screen-close" data-close-screen aria-label="关闭">×</button>
    `}openDifficulty(){this.selectedDifficulty=this.save.started?this.save.difficulty:"normal",this.renderDifficulty()}renderDifficulty(){const t=ua.map((e,i)=>`
      <button class="difficulty-card ${this.selectedDifficulty===e.id?"selected":""}" data-difficulty="${e.id}">
        <span class="d-num">0${i+1} / ${e.id.toUpperCase()}</span>
        <span class="d-name">${e.name}</span>
        <span class="d-en">${e.english}</span>
        <span class="d-desc">${e.desc}</span>
        ${e.id==="hard"?'<span class="d-tag">友情提示：不建议第一次玩选这个。</span>':""}
      </button>
    `).join("");this.openScreen(`
      ${this.screenHead("选择难度","DIFFICULTY · 反正最后都要加班","入职登记表 / 第 1 页")}
      <div class="screen-body">
        <div class="difficulty-grid">${t}</div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">难度随时不能改。就像你的岗位。</div>
        <button class="btn" data-close-screen>再想想</button>
        <button class="btn primary" data-start-difficulty>签下合同，开始轮回</button>
      </div>
    `)}openChapters(){const t=$e.map(e=>{const i=e.index<=(this.save.unlocked??0),n=this.save.started&&e.index===this.save.chapter,a=e.relic?`<span class="c-relic"><i></i>${e.relic.name} · ${e.relic.item}</span>`:'<span class="c-relic"><i></i>入职培训 · 无六根</span>';return`
        <button class="chapter-card ${i?"":"locked"} ${n?"current":""}" data-chapter="${e.index}">
          ${n?'<span class="c-badge">当前</span>':""}
          <span class="chapter-num">${e.numeral}</span>
          <span class="chapter-info">
            <h4>${e.name}</h4>
            <span class="c-loc">${e.location}</span>
            ${a}
          </span>
        </button>
      `}).join("");this.openScreen(`
      ${this.screenHead("章节选择","CHAPTERS · 已解锁的苦难",`进度 ${this.save.relics?.length??0}/${lr.length} 六根`)}
      <div class="screen-body">
        <div class="chapter-progress-line"><span>取经进度</span><i></i><span>${this.save.unlocked+1}/${$e.length}</span></div>
        <div class="chapter-grid">${t}</div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">未解锁的章节会显示为灰色。这不是 bug，是人生的隐喻。</div>
        <button class="btn" data-close-screen>返回</button>
      </div>
    `)}openGallery(){const t=new Set(this.save.seenCharacters??[]),e=Object.keys(ls),i=e.map(n=>{const a=ls[n],r=t.has(n);return`
        <button class="gallery-card ${r?"":"locked"}" data-gallery="${n}">
          <div class="portrait-art">${oo(n)}</div>
          <b>${r?a.name:"？？？"}</b>
          <small>${r?a.title:"尚未遇见"}</small>
        </button>
      `}).join("");this.openScreen(`
      ${this.screenHead("影神图","BESTIARY · 已遇见的妖魔鬼怪与同事",`${t.size}/${e.length} 已收录`)}
      <div class="screen-body">
        <div class="gallery-toolbar">
          <span class="gallery-count">点击已解锁的画像查看档案。未遇见的角色不会剧透。</span>
          <span class="gallery-count">含 3 位人类、7 位妖怪、1 位外包</span>
        </div>
        <div class="gallery-grid">${i}</div>
        <div class="gallery-detail" data-gallery-detail></div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">“影神图”是内部资料。请勿外传，否则 HR 会找你。</div>
        <button class="btn" data-close-screen>返回</button>
      </div>
    `,{wide:!0})}openGalleryDetail(t){const e=ls[t],i=this.el.querySelector("[data-gallery-detail]");!e||!i||(i.innerHTML=`
      <div class="portrait-art">${oo(t)}</div>
      <div class="gallery-detail-info">
        <h3>${e.name}</h3>
        <div class="g-title">${e.title}</div>
        <div class="g-bio">${e.bio}</div>
        <div class="g-quote">${e.quote}</div>
      </div>
    `,i.classList.add("open"),i.scrollIntoView({behavior:"smooth",block:"nearest"}))}openSettings(){const t=this.settings,e=t.quality||"auto";this.openScreen(`
      ${this.screenHead("设置","SETTINGS · 调完也不会变强","本地存档 / 自动保存")}
      <div class="screen-body">
        <div class="settings-grid">
          <div class="settings-section">
            <h4>声音 / AUDIO</h4>
            ${this.sliderRow("master","总音量",t.master)}
            ${this.sliderRow("music","音乐",t.music)}
            ${this.sliderRow("sfx","音效",t.sfx)}
            <div class="setting-row">
              <div><label>声音开关</label><span class="setting-hint">关闭后，世界会安静很多。</span></div>
              <button class="toggle ${t.master>0?"on":""}" data-toggle-setting="master" aria-label="声音开关"></button>
            </div>
          </div>
          <div class="settings-section">
            <h4>画面 / DISPLAY</h4>
            <div class="setting-row">
              <div><label>画质</label><span class="setting-hint">自动检测的时候，猴子会自己选。</span></div>
              <div class="segmented">
                ${["auto","low","medium","high"].map(i=>`<button class="${e===i?"on":""}" data-seg-setting="quality:${i}">${{auto:"自动",low:"低",medium:"中",high:"高"}[i]}</button>`).join("")}
              </div>
            </div>
            <div class="setting-row">
              <div><label>屏幕震动</label><span class="setting-hint">关闭后，被 boss 打也不会晕。</span></div>
              <button class="toggle ${t.shake?"on":""}" data-toggle-setting="shake" aria-label="屏幕震动"></button>
            </div>
            <div class="setting-row">
              <div><label>字幕</label><span class="setting-hint">其实没有语音。但字幕很努力。</span></div>
              <button class="toggle ${t.subtitles?"on":""}" data-toggle-setting="subtitles" aria-label="字幕"></button>
            </div>
            ${this.sliderRow("cameraSensitivity","镜头灵敏度",t.cameraSensitivity,.6,1.6)}
          </div>
          <div class="settings-section">
            <h4>叙事 / STORY</h4>
            <div class="setting-row">
              <div><label>打字机效果</label><span class="setting-hint">关闭后，猴子的废话会一次性说完。</span></div>
              <button class="toggle ${t.typewriter?"on":""}" data-toggle-setting="typewriter" aria-label="打字机效果"></button>
            </div>
          </div>
          <div class="settings-section">
            <h4>关于 / ABOUT</h4>
            <div class="setting-row"><div><label>版本</label></div><div class="setting-value">1.0.0</div></div>
            <div class="setting-row"><div><label>引擎</label></div><div class="setting-hint">Three.js · 纯手工低模</div></div>
            <div class="setting-row"><div><label>开发时长</label></div><div class="setting-hint">比取经短一点</div></div>
          </div>
        </div>
        <div class="settings-danger">
          <p>清空存档会删除所有进度，包括你死过的 999 次。<br>建议先截图留念。</p>
          <button class="btn danger" data-reset-save>清空轮回档案</button>
        </div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">设置会自动保存。和你的努力一样，无人看见。</div>
        <button class="btn primary" data-close-screen>完成</button>
      </div>
    `,{wide:!0})}sliderRow(t,e,i,n=0,a=1){return`
      <div class="setting-row">
        <div><label>${e}</label></div>
        <div class="setting-control">
          <input type="range" min="${Math.round(n*100)}" max="${Math.round(a*100)}" value="${Math.round((i??1)*100)}" data-setting="${t}" />
          <span class="setting-value" data-setting-value="${t}">${Math.round((i??1)*100)}</span>
        </div>
      </div>
    `}syncSettingsUI(){this.el.querySelectorAll("[data-setting-value]").forEach(e=>{const i=e.dataset.settingValue;e.textContent=Math.round((this.settings[i]??0)*100)})}openCredits(){const t=Im.map(([e,i])=>`<div class="credit-row"><span>${e}</span><span>${fi(i)}</span></div>`).join("");this.openScreen(`
      ${this.screenHead("制作名单","CREDITS · 一个人，三只猴子，一台旧电脑","特别鸣谢：你")}
      <div class="screen-body">
        <div class="credits-scroll">${t}</div>
        <div class="credits-note">“做游戏很难。做猴子更难。”</div>
        <div class="credits-small">本作是一款非官方恶搞同人作品，与《黑神话：悟空》、游戏科学无任何关联。<br>所有角色、剧情与公司均为虚构。如有雷同，说明你也在加班。<br>没有猴子在制作过程中受到伤害。除了制作人。</div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">感谢游玩。现在，去下班吧。</div>
        <button class="btn" data-close-screen>返回</button>
      </div>
    `,{wide:!0})}confirm(t,e,i="确认",n="取消"){return new Promise(a=>{this.confirmResolve=a,this.openScreen(`
        <div class="confirm-card">
          <div class="screen-title">${fi(t)}</div>
          <p>${fi(e)}</p>
          <div class="confirm-actions">
            <button class="btn" data-confirm-no>${fi(n)}</button>
            <button class="btn primary" data-confirm-yes>${fi(i)}</button>
          </div>
        </div>
      `)})}toast(t){let e=this.el.querySelector(".menu-toast");e||(e=document.createElement("div"),e.className="menu-toast",this.el.appendChild(e)),e.textContent=t,e.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>e.classList.remove("show"),2200)}refreshSettings(){this.currentScreen&&this.currentScreen.querySelector("[data-setting]")&&this.syncSettingsUI(),this.syncSoundLabel()}}const eg={eye:"眼",ear:"耳",nose:"鼻",tongue:"舌",body:"身",mind:"意"},$l={body:{icon:"体",name:"体质",desc:"上限提高 24 点。多挨几下，才能活得久一点。"},staff:{icon:"棍",name:"棍法",desc:"攻击力提高 13%。技术不够，数值来凑。"},gourd:{icon:"葫",name:"葫芦",desc:"多一口回血。多一条命，少一次崩溃。"}};class ig{constructor(t){this.settings=t,this.input=null,this.game=null,this.isTouch=To(),this.damageItems=[],this.dialogueResolve=null,this.dialogueTyping=!1,this.dialogueTimer=null,this.dialogueLines=null,this.dialogueIndex=0,this.dialogueOpts=null,this.skipDialogue=null,this._keyHandler=null,this.bossMoveTimer=null,this.toastCount=0,this.joystickActive=!1,this.joystickId=null,this.el=document.createElement("section"),this.el.className=`game-ui hidden ${this.isTouch?"is-touch":"is-desktop"}`,this.el.id="game-ui",this.el.innerHTML=this.template(),document.getElementById("ui-root").appendChild(this.el),this.cache(),this.bind(),document.body.classList.toggle("is-touch",this.isTouch)}template(){return`
      <div class="vignette"></div>
      <div class="low-hp" data-low-hp></div>
      <div class="hit-flash" data-hit-flash></div>
      <div class="hud" data-hud>
        <div class="hud-left">
          <div class="player-seal">猴</div>
          <div class="vitals">
            <div class="vitals-head">
              <span class="vitals-name">马喽</span>
              <span class="vitals-title">天命人 · 试用期第 999 天</span>
            </div>
            <div class="bar hp"><i data-bar="hp"></i></div>
            <div class="bar-row">
              <div class="bar stamina"><i data-bar="stamina"></i></div>
              <div class="bar mana"><i data-bar="mana"></i></div>
            </div>
            <div class="bar-labels"><span>体力</span><span>法力</span></div>
            <div class="focus-row">
              <span class="focus-label">专注</span>
              <div class="focus-pips">
                <span class="focus-pip"><i data-focus="0"></i></span>
                <span class="focus-pip"><i data-focus="1"></i></span>
                <span class="focus-pip"><i data-focus="2"></i></span>
              </div>
              <div class="gourd-row">
                <span class="gourd-dot"></span><span class="gourd-dot"></span><span class="gourd-dot"></span>
                <span class="gourd-label" data-gourd-label>3 / 3</span>
              </div>
            </div>
          </div>
        </div>

        <div class="quest" data-quest>
          <span class="quest-mark">目</span>
          <div class="quest-body">
            <small>当前任务 / OBJECTIVE</small>
            <b><span data-objective>清理拦路的妖怪</span><em data-progress></em></b>
          </div>
          <span class="quest-arrow" data-quest-arrow>↑</span>
        </div>

        <div class="hud-right">
          <span class="chip relic-chip"><span class="chip-icon">根</span><b data-relic-count>0</b>/6</span>
          <span class="chip"><span class="chip-icon">功</span><b data-coins>0</b></span>
          <button class="util-btn" data-hud-action="pause" aria-label="暂停菜单">Ⅱ</button>
          <span class="coin-pop" data-coin-pop></span>
        </div>

        <div class="boss-wrap" data-boss>
          <div class="boss-head">
            <span class="boss-name" data-boss-name>黑熊精</span>
            <span class="boss-title" data-boss-title>黑风山 · 首席招聘官</span>
          </div>
          <div class="boss-bar"><i data-boss-fill></i></div>
          <div class="boss-meta"><span>妖王 / YAOGUAI</span><span class="phase" data-boss-phase>PHASE 1</span></div>
        </div>
        <div class="boss-move" data-boss-move></div>
        <div class="toast-stack" data-toasts></div>
        <div class="damage-layer" data-damage-layer></div>

        <div class="desktop-hints">
          <span class="key-hint"><b>WASD</b>移动</span>
          <span class="key-hint"><b>鼠标</b>视角</span>
          <span class="key-hint"><b>左键 / J</b>轻击</span>
          <span class="key-hint"><b>右键 / K</b>重棍</span>
          <span class="key-hint"><b>空格</b>闪避</span>
          <span class="key-hint"><b>R</b>定身</span>
          <span class="key-hint"><b>Q</b>葫芦</span>
          <span class="key-hint"><b>E</b>交互</span>
        </div>

        <div class="interact-prompt" data-interact>
          <span class="interact-key">E</span>
          <span class="interact-body"><b>共享香火</b><small>上香 / 升级</small></span>
        </div>

        <div class="touch-controls">
      <div class="joystick-area" data-joystick>
        <div class="joystick-base"></div>
        <div class="joystick-knob" data-joystick-knob></div>
        <div class="joystick-label">移动 / MOVE</div>
      </div>
      <div class="action-pad">
        <button class="action-btn attack" data-control="attack" aria-label="轻击">
          <b>攻</b><small>轻击</small>
        </button>
        <button class="action-btn dodge" data-control="dodge" aria-label="闪避">
          <b>闪</b><small>闪避</small>
        </button>
        <button class="action-btn heavy" data-control="heavy" aria-label="重棍">
          <b>重</b><small>重棍</small>
        </button>
        <button class="action-btn skill" data-control="skill" aria-label="定身">
          <b>定</b><small>定身</small><span class="cd" data-cd="skill"></span>
        </button>
        <button class="action-btn heal" data-control="heal" aria-label="喝葫芦">
          <b>葫</b><small>回血</small><span class="count" data-gourd-count>3</span>
        </button>
      </div>
    </div>
      </div>
    `}cache(){this.hud=this.el.querySelector("[data-hud]"),this.barHp=this.el.querySelector('[data-bar="hp"]'),this.barStamina=this.el.querySelector('[data-bar="stamina"]'),this.barMana=this.el.querySelector('[data-bar="mana"]'),this.focusEls=[...this.el.querySelectorAll("[data-focus]")],this.gourdDots=[...this.el.querySelectorAll(".gourd-dot")],this.gourdLabel=this.el.querySelector("[data-gourd-label]"),this.gourdCount=this.el.querySelector("[data-gourd-count]"),this.coinsEl=this.el.querySelector("[data-coins]"),this.relicCountEl=this.el.querySelector("[data-relic-count]"),this.objectiveEl=this.el.querySelector("[data-objective]"),this.progressEl=this.el.querySelector("[data-progress]"),this.questArrow=this.el.querySelector("[data-quest-arrow]"),this.bossEl=this.el.querySelector("[data-boss]"),this.bossName=this.el.querySelector("[data-boss-name]"),this.bossTitle=this.el.querySelector("[data-boss-title]"),this.bossFill=this.el.querySelector("[data-boss-fill]"),this.bossPhaseEl=this.el.querySelector("[data-boss-phase]"),this.bossMoveEl=this.el.querySelector("[data-boss-move]"),this.toastsEl=this.el.querySelector("[data-toasts]"),this.damageLayer=this.el.querySelector("[data-damage-layer]"),this.interactEl=this.el.querySelector("[data-interact]"),this.toastList=[],this.lowHpEl=this.el.querySelector("[data-low-hp]"),this.hitFlashEl=this.el.querySelector("[data-hit-flash]"),this.coinPop=this.el.querySelector("[data-coin-pop]"),this.joystickArea=this.el.querySelector("[data-joystick]"),this.joystickKnob=this.el.querySelector("[data-joystick-knob]"),this.cdBtns={skill:this.el.querySelector('[data-control="skill"]'),heavy:this.el.querySelector('[data-control="heavy"]'),heal:this.el.querySelector('[data-control="heal"]')},this.cdSkill=this.el.querySelector('[data-cd="skill"]')}bind(){this.el.addEventListener("click",e=>{const i=e.target.closest("[data-hud-action]");if(i){i.dataset.hudAction==="pause"&&this.game?.app?.togglePause();return}e.target.closest("[data-interact]")&&this.input?.trigger("interact")}),this.el.addEventListener("pointerdown",e=>{const i=e.target.closest("[data-control]");if(!i)return;e.preventDefault();const n=i.dataset.control;this.input?.trigger(n),i.classList.add("pressed"),navigator.vibrate&&navigator.vibrate(8)}),this.el.addEventListener("pointerup",e=>{e.target.closest("[data-control]")?.classList.remove("pressed")}),this.el.addEventListener("pointercancel",e=>{e.target.closest("[data-control]")?.classList.remove("pressed")}),this.joystickArea.addEventListener("pointerdown",e=>{this.input&&(e.preventDefault(),this.joystickActive=!0,this.joystickId=e.pointerId,this.joystickArea.setPointerCapture(e.pointerId),this.moveJoystick(e))}),this.joystickArea.addEventListener("pointermove",e=>{!this.joystickActive||e.pointerId!==this.joystickId||(e.preventDefault(),this.moveJoystick(e))});const t=e=>{e.pointerId===this.joystickId&&(this.joystickActive=!1,this.joystickId=null,this.joystickKnob.style.transform="translate(-50%, -50%)",this.input?.setJoystick(0,0))};this.joystickArea.addEventListener("pointerup",t),this.joystickArea.addEventListener("pointercancel",t),window.addEventListener("keydown",e=>{!this.el.classList.contains("hidden")&&e.code==="KeyH"&&this.showTutorial(this.game?.player,this.game?.chapter,this.game)})}attachInput(t){this.input=t,t.isTouch=this.isTouch,t.setSensitivity(this.settings.cameraSensitivity);const e=this.el.querySelector(".interact-key");e&&(e.textContent=this.isTouch?"点":"E")}moveJoystick(t){const e=this.joystickArea.getBoundingClientRect(),i=e.left+e.width/2,n=e.top+e.height/2,a=e.width*.32;let r=t.clientX-i,o=t.clientY-n;const l=Math.hypot(r,o);l>a&&(r=r/l*a,o=o/l*a),this.joystickKnob.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${o}px))`,this.input?.setJoystick(r/a,o/a)}setupGame(t,e){this.el.classList.remove("hidden"),this.setHudVisible(!1),this.clearDamageNumbers(),this.hideBossBar(),this.clearInteractPrompt();const i=this.el.querySelector("[data-relic-count]");i&&(i.textContent=e.relics?.length??0),this.el.dataset.chapter=t.id,this.game=this.game}setGame(t){this.game=t}setHudVisible(t){this.hud.classList.toggle("visible",t)}show(){this.el.classList.remove("hidden")}hide(){this.el.classList.add("hidden"),this.setHudVisible(!1),this.clearInteractPrompt(),this.hideBossBar()}updateHud(t,e=!1){if(!t)return;if(this.barHp.style.width=`${Kt(t.hp/t.maxHp,0,1)*100}%`,this.barStamina.style.width=`${Kt(t.stamina/t.maxStamina,0,1)*100}%`,this.barMana.style.width=`${Kt(t.mana/t.maxMana,0,1)*100}%`,this.focusEls.forEach((n,a)=>{const r=Kt(t.focus-a,0,1);n.style.width=`${r*100}%`,n.parentElement.classList.toggle("full",r>=.99)}),this.gourdDots.length!==t.maxGourd){const n=this.gourdDots[0]?.parentElement;if(n){n.querySelectorAll(".gourd-dot").forEach(a=>a.remove());for(let a=0;a<t.maxGourd;a++){const r=document.createElement("span");r.className="gourd-dot",n.insertBefore(r,this.gourdLabel)}this.gourdDots=[...n.querySelectorAll(".gourd-dot")]}}this.gourdDots.forEach((n,a)=>n.classList.toggle("empty",a>=t.gourd)),this.gourdLabel.textContent=`${t.gourd} / ${t.maxGourd}`,this.gourdCount.textContent=t.gourd,this.coinsEl.textContent=t.coins,this.relicCountEl.textContent=t.relics,this.objectiveEl.textContent=t.objective||"",this.progressEl.textContent=t.objectiveProgress||"",this.lowHpEl.classList.toggle("active",t.hpRatio!==void 0?t.hpRatio<.28:t.hp/t.maxHp<.28);const i=t.skillCd>0?1-t.skillCd/14:1;if(this.cdSkill&&(this.cdSkill.style.setProperty("--cd",`${Kt(1-i,0,1)*100}%`),this.cdSkill.style.background=t.skillCd>0?"":"none"),this.cdBtns.skill.classList.toggle("disabled",t.skillCd>0||t.mana<30),this.cdBtns.heavy.classList.toggle("disabled",t.focus<1),this.cdBtns.heal.classList.toggle("disabled",t.gourd<=0||t.healCd>0),t.objectivePos&&t.playerX!==void 0){const n=t.objectivePos.x-t.playerX,a=t.objectivePos.z-t.playerZ,r=t.cameraYaw??0,o=-Math.sin(r),l=-Math.cos(r),c=Math.cos(r),h=-Math.sin(r),d=n*o+a*l,u=n*c+a*h,p=Math.atan2(u,d)*(180/Math.PI);this.questArrow.style.transform=`rotate(${p}deg)`,this.questArrow.style.opacity="1"}else this.questArrow.style.opacity="0.2"}setObjective(t,e=""){this.objectiveEl.textContent=t,this.progressEl.textContent=e}showBossBar(t,e,i=1){this.bossName.textContent=t,this.bossTitle.textContent=e,this.bossFill.style.width=`${i*100}%`,this.bossEl.classList.add("visible"),this.bossPhaseEl.textContent="PHASE 1"}updateBossBar(t){this.bossFill.style.width=`${Kt(t,0,1)*100}%`}bossPhase(t){this.bossPhaseEl.textContent=`PHASE ${t}`,this.bossFill.style.background=t===2?"linear-gradient(90deg, #7d1c16, #c34c31 50%, #f0a75e)":"linear-gradient(90deg, #7e211b, #b1422f 60%, #d99a5e)"}hideBossBar(){this.bossEl?.classList.remove("visible")}bossMove(t){this.bossMoveEl&&(this.bossMoveEl.textContent=t,this.bossMoveEl.classList.add("show"),clearTimeout(this.bossMoveTimer),this.bossMoveTimer=setTimeout(()=>this.bossMoveEl.classList.remove("show"),1700))}setInteractPrompt(t){if(!t)return this.clearInteractPrompt();const e=this.el.querySelector(".interact-key"),i=this.el.querySelector(".interact-body b"),n=this.el.querySelector(".interact-body small");e&&(e.textContent=this.isTouch?"点":"E"),i&&(i.textContent=t.label||t.prompt||"交互"),n&&(n.textContent=`${t.prompt||"查看"} · ${t.icon||""}`),this.interactEl.classList.add("visible")}clearInteractPrompt(){this.interactEl?.classList.remove("visible")}toast(t,e="info"){if(!t)return;const i=document.createElement("div");for(i.className=`toast ${e}`,i.textContent=t,this.toastsEl.appendChild(i),this.toastList.push(i);this.toastList.length>4;)this.toastList.shift().remove();setTimeout(()=>{i.remove(),this.toastList=this.toastList.filter(n=>n!==i)},3600)}coinGain(t){this.coinPop&&(this.coinPop.textContent=`+${t}`,this.coinPop.classList.remove("show"),this.coinPop.offsetWidth,this.coinPop.classList.add("show"))}damageNumber(t,e,i="enemy"){if(!t)return;const n=document.createElement("div");n.className=`damage-number ${i}`,n.textContent=i==="heal"?`+${e}`:`${e}`,this.damageLayer.appendChild(n),this.damageItems.push({el:n,position:t.clone(),offsetX:(Math.random()-.5)*32,offsetY:(Math.random()-.5)*12,life:.85,age:0})}updateDamageNumbers(t,e){if(!t||!this.damageItems.length)return;const i=window.innerWidth,n=window.innerHeight;for(let a=this.damageItems.length-1;a>=0;a--){const r=this.damageItems[a];if(r.age+=e,r.age>r.life){r.el.remove(),this.damageItems.splice(a,1);continue}const o=r.position.clone().project(t);if(o.z>1){r.el.style.opacity="0";continue}const l=(o.x*.5+.5)*i+r.offsetX,c=(-o.y*.5+.5)*n+r.offsetY;r.el.style.left=`${l}px`,r.el.style.top=`${c}px`}}clearDamageNumbers(){this.damageItems.forEach(t=>t.el.remove()),this.damageItems=[]}hitFlash(){this.hitFlashEl&&(this.hitFlashEl.classList.remove("flash"),this.hitFlashEl.offsetWidth,this.hitFlashEl.classList.add("flash"))}flashVignette(t="#f5d48a"){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;z-index:44;pointer-events:none;background:radial-gradient(circle at 50% 50%, transparent 30%, ${t}44 100%);opacity:0;transition:opacity .12s;`,document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1",setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),280)},90)})}openingCinematic(t){return new Promise(e=>{const i=document.createElement("div");i.className="opening-screen",i.innerHTML=`
        <div class="opening-inner">
          <div class="opening-kicker" data-open-kicker></div>
          <div class="opening-title" data-open-title></div>
          <div class="opening-rule"></div>
          <div class="opening-text" data-open-text></div>
          <div class="opening-count" data-open-count></div>
          <div class="opening-hint">点击继续 <span>·</span> 空格 / 回车</div>
        </div>
        <button class="opening-skip">跳过序章 ›</button>
      `,this.el.appendChild(i),requestAnimationFrame(()=>i.classList.add("open"));let n=0,a=!1;const r=i.querySelector("[data-open-kicker]"),o=i.querySelector("[data-open-title]"),l=i.querySelector("[data-open-text]"),c=i.querySelector("[data-open-count]"),h=()=>{const g=t[n];r.textContent=g.kicker,o.textContent=g.title,l.textContent=g.text,c.textContent=`${String(n+1).padStart(2,"0")} / ${String(t.length).padStart(2,"0")}`,o.style.animation="none",o.offsetWidth,o.style.animation="opening-in 0.8s ease forwards"},d=()=>{a||(a=!0,window.removeEventListener("keydown",p),i.classList.remove("open"),setTimeout(()=>i.remove(),800),e())},u=()=>{n+=1,n>=t.length?d():h()},p=g=>{(g.code==="Space"||g.code==="Enter")&&(g.preventDefault(),u())};h(),i.addEventListener("pointerdown",g=>{g.target.closest(".opening-skip")?d():u()}),window.addEventListener("keydown",p)})}chapterCard(t){return new Promise(e=>{const i=document.createElement("div");i.className="chapter-card-screen",i.innerHTML=`
        <div class="chapter-card-inner">
          <div class="chapter-card-kicker">${t.numeral} · ${t.index===0?"PROLOGUE":`CHAPTER ${t.index}`}</div>
          <div class="chapter-card-title">${t.name}</div>
          <div class="chapter-card-en">${t.english}</div>
          <div class="chapter-card-rule"></div>
          <div class="chapter-card-loc">${t.location}</div>
          <div class="chapter-card-poem">${t.poem.map(o=>`<div>${o}</div>`).join("")}</div>
        </div>
        <button class="chapter-card-skip">跳过 ›</button>
      `,this.el.appendChild(i),requestAnimationFrame(()=>i.classList.add("open"));let n=!1;const a=()=>{n||(n=!0,clearTimeout(r),i.classList.remove("open"),setTimeout(()=>i.remove(),750),e())},r=setTimeout(a,4700);i.addEventListener("pointerdown",o=>{(o.target.closest(".chapter-card-skip")||o.isPrimary)&&a()})})}showLoading(t,e=""){this.hideLoading();const i=document.createElement("div");i.className="loading-screen",i.innerHTML=`
      <div class="loading-inner">
        <div class="loading-seal">猴</div>
        <div class="loading-kicker">${t.numeral} · ${t.english}</div>
        <div class="loading-title">${t.name}</div>
        <div class="loading-loc">${t.location}</div>
        <div class="loading-bar-wrap">
          <div class="loading-bar"><i data-load-fill></i></div>
          <div class="loading-meta"><span>LOADING · 正在加载猴子</span><span data-load-percent>0%</span></div>
        </div>
        <div class="loading-tip"><b>小提示</b><span data-load-tip>${e}</span></div>
        <div class="loading-fineprint">非官方恶搞同人作品 · 本作不含真实猴子 · 请勿在上班时间游玩</div>
      </div>
    `,this.el.appendChild(i),requestAnimationFrame(()=>i.classList.add("open")),this.loadingEl=i,this.setLoadingProgress(8)}setLoadingProgress(t,e){if(!this.loadingEl)return;const i=Kt(t,0,100),n=this.loadingEl.querySelector("[data-load-fill]"),a=this.loadingEl.querySelector("[data-load-percent]");if(n&&(n.style.width=`${i}%`),a&&(a.textContent=`${Math.round(i)}%`),e){const r=this.loadingEl.querySelector("[data-load-tip]");r&&(r.textContent=e)}}hideLoading(){if(!this.loadingEl)return;const t=this.loadingEl;this.loadingEl=null,t.classList.remove("open"),setTimeout(()=>t.remove(),600)}dialogue(t,e={}){return t?.length?new Promise(i=>{this.dialogueResolve=i,this.dialogueLines=t,this.dialogueIndex=0,this.dialogueOpts=e,this.dialogueTyping=!1,this.el.classList.add("dialogue-mode"),this.hudWasVisible=this.hud.classList.contains("visible"),this.hud.classList.remove("visible");const n=this.getDialogueLayer();n.classList.add("open"),n.classList.remove("is-narration");const a=n.querySelector("[data-dialogue-chapter]"),r=n.querySelector("[data-dialogue-location]");a&&(a.textContent=e.title||""),r&&(r.textContent=e.subtitle||"");const o=n.querySelector(".dialogue-skip");o&&(o.style.display=e.allowSkip===!1?"none":""),this.showDialogueLine()}):Promise.resolve(null)}getDialogueLayer(){if(this.dialogueEl)return this.dialogueEl;const t=document.createElement("div");return t.className="dialogue-layer",t.innerHTML=`
      <div class="dialogue-letterbox"></div>
      <div class="dialogue-letterbox bottom"></div>
      <div class="dialogue-topline"><span class="dialogue-chapter" data-dialogue-chapter></span><span class="dialogue-location" data-dialogue-location></span></div>
      <button class="dialogue-skip">跳过 / SKIP</button>
      <div class="dialogue-choices" data-dialogue-choices></div>
      <div class="dialogue-box">
        <div class="dialogue-portrait" data-dialogue-portrait></div>
        <div class="dialogue-content">
          <div class="dialogue-name-row"><span class="dialogue-name" data-dialogue-name></span><span class="dialogue-title" data-dialogue-speaker-title></span></div>
          <p class="dialogue-text" data-dialogue-text></p>
          <div class="dialogue-next"><span>点击继续</span><span class="tri"></span></div>
        </div>
      </div>
    `,this.el.appendChild(t),this.dialogueEl=t,t.addEventListener("pointerdown",e=>{if(e.target.closest(".dialogue-skip")){this.finishDialogue();return}e.target.closest(".dialogue-choice")||this.dialogueEl.classList.contains("open")&&this.advanceDialogue()}),t.querySelector(".dialogue-skip").addEventListener("pointerdown",e=>{e.stopPropagation(),this.finishDialogue()}),this._keyHandler=e=>{this.dialogueEl?.classList.contains("open")&&(e.code==="Space"||e.code==="Enter"||e.code==="KeyE")&&(e.preventDefault(),this.advanceDialogue())},window.addEventListener("keydown",this._keyHandler),t}showDialogueLine(){const t=this.dialogueLines[this.dialogueIndex];if(!t)return this.finishDialogue();const e=this.dialogueEl,i=t.who?ls[t.who]:null,n=!t.who;e.classList.toggle("is-narration",n),e.querySelector("[data-dialogue-name]").textContent=i?.name??"旁白",e.querySelector("[data-dialogue-speaker-title]").textContent=i?.title??"";const a=e.querySelector("[data-dialogue-portrait]");i?a.innerHTML=`<div class="portrait-art">${oo(t.who)}</div>`:a.innerHTML="";const r=e.querySelector("[data-dialogue-text]");r.textContent="",this.dialogueTyping=!0,this.audioFeedback("dialogue");const o=t.text;if(!this.settings.typewriter)r.textContent=o,this.dialogueTyping=!1;else{let c=0;clearInterval(this.dialogueTimer),this.dialogueTimer=setInterval(()=>{c+=1,r.textContent=o.slice(0,c),c>=o.length&&(clearInterval(this.dialogueTimer),this.dialogueTyping=!1)},26)}const l=e.querySelector(".dialogue-next");l&&(l.style.opacity="0"),setTimeout(()=>{!this.dialogueTyping&&l&&(l.style.opacity="1")},this.settings.typewriter?Math.min(1400,o.length*26):60)}advanceDialogue(){if(this.dialogueEl){if(this.dialogueTyping){clearInterval(this.dialogueTimer);const t=this.dialogueLines[this.dialogueIndex];this.dialogueEl.querySelector("[data-dialogue-text]").textContent=t.text,this.dialogueTyping=!1;const e=this.dialogueEl.querySelector(".dialogue-next");e&&(e.style.opacity="1");return}this.dialogueIndex+=1,this.dialogueIndex>=this.dialogueLines.length?this.finishDialogue():this.showDialogueLine()}}finishDialogue(t=null){if(!this.dialogueEl?.classList.contains("open"))return;clearInterval(this.dialogueTimer);const e=this.dialogueResolve;this.dialogueResolve=null,this.dialogueEl.classList.remove("open"),this.el.classList.remove("dialogue-mode"),this.hudWasVisible&&this.hud.classList.add("visible"),this._keyHandler&&(window.removeEventListener("keydown",this._keyHandler),this._keyHandler=null),setTimeout(()=>{this.dialogueEl&&(this.dialogueEl.querySelector("[data-dialogue-choices]").innerHTML="")},300),e?.(t)}relicReveal(t,e){return new Promise(i=>{const n=document.createElement("div");n.className="relic-reveal",n.innerHTML=`
        <div class="relic-reveal-inner">
          <div class="relic-glyph"><span>${t.id==="manual"?"册":eg[t.id]||"根"}</span></div>
          <div class="relic-kicker">${t.id==="manual"?"入职礼物 · WELCOME KIT":`六根 · 其${["一","二","三","四","五","六"][e.index-1]??"六"}`}</div>
          <div class="relic-title">${t.name}</div>
          <div class="relic-item">${t.item}</div>
          <div class="relic-rule"></div>
          <div class="relic-desc">${t.desc}</div>
          <div class="relic-quote">${t.quote}</div>
          <button class="btn primary relic-confirm">收入囊中</button>
        </div>
      `,this.el.appendChild(n),requestAnimationFrame(()=>n.classList.add("open"));const a=()=>{n.classList.remove("open"),setTimeout(()=>n.remove(),600),i()};n.querySelector(".relic-confirm").addEventListener("click",a),n.addEventListener("pointerdown",r=>{r.target===n&&a()})})}endingChoice(t,e){return new Promise(i=>{const n=document.createElement("div");n.className="choice-screen",n.innerHTML=`
        <div class="choice-inner">
          <div class="choice-kicker">最终面试 · FINAL INTERVIEW</div>
          <div class="choice-title">工牌在等你</div>
          <div class="choice-sub">六根已齐。这是你最后一次面试，面试官是你自己。</div>
          <div class="choice-grid">
            ${t.map(a=>`
              <button class="choice-card" data-ending="${a.id}">
                <span class="choice-icon">${a.icon}</span>
                <span class="choice-label">${a.label}</span>
                <span class="choice-hint">${a.hint}</span>
              </button>
            `).join("")}
          </div>
          <div class="choice-foot">选择没有对错。只有 KPI 和离职证明。</div>
        </div>
      `,this.el.appendChild(n),requestAnimationFrame(()=>n.classList.add("open")),n.querySelectorAll("[data-ending]").forEach(a=>{a.addEventListener("click",()=>{const r=a.dataset.ending;n.classList.remove("open"),setTimeout(()=>n.remove(),650),i(r)})})})}deathScreen(t){return new Promise(e=>{const i=document.createElement("div");i.className="death-screen",i.innerHTML=`
        <div class="death-inner">
          <div class="death-kicker">YOU HAVE BEEN OPTIMIZED</div>
          <div class="death-title">你被优化了</div>
          <div class="death-quote">${t.quote}</div>
          <div class="death-stats">
            <div class="death-stat"><b>${Oc(t.stats.time)}</b><span>本次存活</span></div>
            <div class="death-stat"><b>${t.stats.kills}</b><span>清理同事</span></div>
            <div class="death-stat"><b>${t.stats.damage}</b><span>造成伤害</span></div>
            <div class="death-stat"><b>${t.stats.perfect}</b><span>完美闪避</span></div>
          </div>
          <div class="death-actions">
            <button class="btn" data-death="menu">回主菜单</button>
            <button class="btn primary" data-death="retry">再次投递</button>
          </div>
        </div>
      `,this.el.appendChild(i),requestAnimationFrame(()=>i.classList.add("open")),i.querySelectorAll("[data-death]").forEach(n=>{n.addEventListener("click",()=>{i.classList.remove("open"),setTimeout(()=>i.remove(),600),e(n.dataset.death)})})})}chapterComplete(t,e){return new Promise(i=>{const n=document.createElement("div");n.className="clear-screen";const a=t.relic;n.innerHTML=`
        <div class="clear-inner">
          <div class="clear-kicker">${t.numeral} · CHAPTER CLEAR</div>
          <div class="clear-title">${t.numeral==="序"?"入职成功":"此回已了"}</div>
          <div class="clear-sub">${t.location} · ${t.name}</div>
          ${a?`<div class="clear-relic"><b>${a.name}</b>${a.item}<span>已收入囊中</span></div>`:""}
          <div class="clear-stats">
            <div class="clear-stat"><b>${e.relics}/6</b><span>六根</span></div>
            <div class="clear-stat"><b>${e.coins}</b><span>功德</span></div>
            <div class="clear-stat"><b>${Math.round(e.time/60)}</b><span>分钟</span></div>
            <div class="clear-stat"><b>${e.deaths}</b><span>死亡</span></div>
          </div>
          <div class="clear-next">
            <button class="btn primary">继续取经 →</button>
          </div>
        </div>
      `,this.el.appendChild(n),requestAnimationFrame(()=>n.classList.add("open")),n.querySelector(".clear-next .btn").addEventListener("click",()=>{n.classList.remove("open"),setTimeout(()=>n.remove(),550),i()})})}showEnding(t,e){return new Promise(i=>{const n=document.createElement("div");n.className="ending-screen",n.innerHTML=`
        <div class="ending-scroll scroll" data-ending-scroll>
          <div class="ending-kicker">${t.numeral} · ENDING</div>
          <div class="ending-title">${t.title}</div>
          <div class="ending-sub">${t.subtitle}</div>
          <div class="ending-rule"></div>
          <div class="ending-lines">${t.lines.map(a=>`<p>${a}</p>`).join("")}</div>
          <div class="ending-quote">${t.quote}</div>
          <div class="ending-credits">六根 ${e.relics}/6 · 功德 ${e.coins} · 死亡 ${e.deaths} · 结局收集 ${e.endings}/3<br>黑神话：猴急 · BLACK MYTH: MONKEY RUSH<br>感谢游玩。现在，请下班。</div>
        </div>
        <div class="ending-bottom">
          <button class="btn" data-ending-action="credits">制作名单</button>
          <button class="btn primary" data-ending-action="menu">回到主菜单</button>
        </div>
      `,this.el.appendChild(n),requestAnimationFrame(()=>n.classList.add("open")),n.querySelectorAll("[data-ending-action]").forEach(a=>{a.addEventListener("click",()=>{if(a.dataset.endingAction==="credits"){const r=n.querySelector("[data-ending-scroll]");r?.scrollTo({top:r.scrollHeight,behavior:"smooth"});return}n.classList.remove("open"),setTimeout(()=>n.remove(),1e3),i()})})})}openShrine({game:t}){return this.game=t,new Promise(e=>{const i=document.createElement("div");i.className="screen shrine-screen open",this.el.appendChild(i),this.shrineEl=i;let n=!1,a=null;const r=()=>{n||(n=!0,a&&window.removeEventListener("keydown",a),i.classList.remove("open"),setTimeout(()=>i.remove(),350),this.shrineEl=null,e())},o=()=>{const l=t.save,c=Vl[Math.floor(Math.random()*Vl.length)],h=Object.keys($l).map(d=>{const u=$l[d],p=l.upgrades?.[d]??0,g=t.getUpgradeCost(d),v=p>=5,m=g!==null&&l.coins>=g;return`
            <div class="upgrade-card ${v?"max":""}">
              <div class="upgrade-icon">${u.icon}</div>
              <div class="upgrade-name">${u.name} <span style="font-size:8px;color:var(--muted)">Lv.${p}</span></div>
              <div class="upgrade-desc">${u.desc}</div>
              <div class="upgrade-levels">${[0,1,2,3,4].map(f=>`<i class="${f<p?"on":""}"></i>`).join("")}</div>
              <div class="upgrade-buy">
                <span class="upgrade-cost">${v?"已满级":`${g}<small>功德</small>`}</span>
                <button class="upgrade-buy-btn" data-upgrade="${d}" ${v||!m?"disabled":""}>${v?"圆满":"升级"}</button>
              </div>
            </div>
          `}).join("");i.innerHTML=`
          <div class="screen-inner">
            <div class="screen-head">
              <div>
                <div class="screen-title">共享香火</div>
                <div class="screen-sub">土地公物业 · 扫码即拜 · 押金八十</div>
              </div>
              <div class="screen-meta">状态已回满 / RESTED</div>
            </div>
            <button class="btn-icon screen-close" data-shrine-close aria-label="关闭">×</button>
            <div class="screen-body">
              <div class="shrine-quote">“${c}”</div>
              <div class="shrine-top">
                <div class="shrine-coins"><span>可用功德</span><b>${l.coins}</b><span>点</span></div>
                <div class="shrine-hint">升级不可退款。和健身房一样。</div>
              </div>
              <div class="upgrade-grid">${h}</div>
              <div class="shrine-message" data-shrine-message></div>
            </div>
            <div class="screen-footer">
              <div class="screen-note">离开时会自动保存。土地公不会偷你的功德（大概）。</div>
              <button class="btn primary" data-shrine-close>离开</button>
            </div>
          </div>
        `,i.querySelectorAll("[data-shrine-close]").forEach(d=>d.addEventListener("click",r)),i.querySelectorAll("[data-upgrade]").forEach(d=>{d.addEventListener("click",()=>{const u=t.upgrade(d.dataset.upgrade);o();const p=i.querySelector("[data-shrine-message]");p&&(p.textContent=u.message),this.audioFeedback?.(u.ok?"confirm":"back")})})};o(),a=l=>{l.code==="Escape"&&r()},window.addEventListener("keydown",a),i.addEventListener("pointerdown",l=>{l.target===i&&r()})})}pauseScreen(t={}){return new Promise(e=>{const i=document.createElement("div");i.className="pause-screen",i.innerHTML=`
        <div class="pause-panel">
          <div class="pause-kicker">PAUSED · 暂停营业</div>
          <div class="pause-title">摸鱼中</div>
          <div class="pause-sub">${t.chapterLabel||""} · ${t.chapterName||""}</div>
          <div class="pause-buttons">
            <button class="btn primary" data-pause="resume">继续受苦</button>
            <button class="btn" data-pause="fullscreen">切换全屏</button>
            <button class="btn" data-pause="menu">返回主菜单</button>
          </div>
          <div class="pause-controls">${this.isTouch?"左侧摇杆移动 · 右侧按钮战斗 · 拖动画面旋转视角":"WASD 移动 · 鼠标旋转视角 · 左键轻击 · 右键重棍 · 空格闪避 · R 定身 · Q 葫芦 · E 交互"}</div>
        </div>
      `,this.el.appendChild(i),requestAnimationFrame(()=>i.classList.add("open"));const n=r=>{window.removeEventListener("keydown",a),i.classList.remove("open"),setTimeout(()=>i.remove(),380),e(r)},a=r=>{r.code==="Escape"&&n("resume")};window.addEventListener("keydown",a),i.querySelectorAll("[data-pause]").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.pause;if(o==="fullscreen"){this.audioFeedback?.("ui"),this.el.dispatchEvent(new CustomEvent("game-fullscreen",{bubbles:!0}));return}n(o)})})})}showTutorial(t,e,i){if(this.tutorialEl)return;const n=this.isTouch,a=document.createElement("div");a.className="tutorial-hint open",a.innerHTML=`
      <div class="tutorial-card">
        <div class="tutorial-title">入职须知</div>
        <div class="tutorial-sub">${n?"手机操作 · 横屏更佳":"键鼠操作 · 随时可按 ESC 暂停"}</div>
        <div class="tutorial-keys ${n?"tutorial-touch":"tutorial-keyboard"}">
          ${n?`
            <div class="tut-key"><b>左</b>摇杆移动</div>
            <div class="tut-key"><b>右</b>拖动视角</div>
            <div class="tut-key"><b>攻</b>轻击 / 连段</div>
            <div class="tut-key"><b>闪</b>闪避 / 无敌帧</div>
            <div class="tut-key"><b>重</b>重棍 / 消耗专注</div>
            <div class="tut-key"><b>定</b>定身术</div>
          `:`
            <div class="tut-key"><b>WASD</b>移动</div>
            <div class="tut-key"><b>鼠标</b>视角</div>
            <div class="tut-key"><b>左键 / J</b>轻击</div>
            <div class="tut-key"><b>右键 / K</b>重棍</div>
            <div class="tut-key"><b>空格</b>闪避</div>
            <div class="tut-key"><b>R</b>定身</div>
          `}
        </div>
        <div class="tutorial-mobile-note">左侧摇杆移动，右侧拖动画面转视角。<br>打不过就闪，闪不过就跑，跑不过就说是来面试的。<br>靠近目标后点按屏幕提示交互 · 右上角可暂停。</div>
        <button class="btn primary tutorial-close">知道了，开始受苦</button>
      </div>
    `,this.el.appendChild(a),this.tutorialEl=a;const r=i?.paused;i?.setPaused(!0);const o=()=>{a.classList.remove("open"),setTimeout(()=>a.remove(),360),this.tutorialEl=null,i&&!r&&i.setPaused(!1)};a.querySelector(".tutorial-close").addEventListener("click",o),a.addEventListener("pointerdown",l=>{l.target===a&&o()})}audioFeedback(t){window.dispatchEvent(new CustomEvent("houji-audio",{detail:t}))}resetToMenu(){if(clearTimeout(this.bossMoveTimer),clearInterval(this.dialogueTimer),this.dialogueResolve){const t=this.dialogueResolve;this.dialogueResolve=null,t(null)}this.dialogueEl?.classList.remove("open"),this.el.classList.remove("dialogue-mode"),this.el.classList.add("hidden"),this.hud.classList.remove("visible"),this.clearInteractPrompt(),this.hideBossBar(),this.clearDamageNumbers(),this.toastsEl.innerHTML="",this.toastList=[],this.tutorialEl?.remove(),this.tutorialEl=null,this.loadingEl&&(this.loadingEl.remove(),this.loadingEl=null),this.el.querySelectorAll(".chapter-card-screen, .opening-screen, .relic-reveal, .clear-screen, .ending-screen, .choice-screen, .death-screen, .pause-screen, .screen, .tutorial-hint").forEach(t=>t.remove()),this.shrineEl=null,this.setHudVisible(!1)}resize(){}}const ng={skyTop:1713461,skyBottom:12949595,fog:10126181,fogDensity:.011,ground:4937017,ground2:7173192,path:9075551,arena:6118221,sun:16767392,hemi:10335690,accent:12737334,rim:16757599},ni=(s,t,e)=>new E(s,t,e);function jl(s){s.traverse(t=>{t.geometry&&t.geometry.dispose()})}function sg(s,t,e,i=.035){const n=[],a=[],r=[],o=t/2;for(let h=0;h<s.length;h++){const d=s[Math.max(0,h-1)],u=s[Math.min(s.length-1,h+1)],p=new E(u.x-d.x,0,u.z-d.z).normalize(),g=new E(-p.z,0,p.x),v=s[h].clone().addScaledVector(g,o),m=s[h].clone().addScaledVector(g,-o);if(n.push(v.x,i,v.z,m.x,i,m.z),a.push(0,h/s.length,1,h/s.length),h<s.length-1){const f=h*2;r.push(f,f+1,f+2,f+1,f+3,f+2)}}const l=new Me;l.setAttribute("position",new ee(n,3)),l.setAttribute("uv",new ee(a,2)),l.setIndex(r),l.computeVertexNormals();const c=new Xt(l,new Ii({color:e,roughness:.98,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-1}));return c.receiveShadow=!0,c}function ag(s,t){const e=new qt(180,24,14),i=new wi({side:Ne,depthWrite:!1,uniforms:{topColor:{value:new Dt(s)},bottomColor:{value:new Dt(t)},offset:{value:20},exponent:{value:.72}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
        float t = max(pow(max(h, 0.0), exponent), 0.0);
        gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
      }
    `});return new Xt(e,i)}class rg{constructor(t){this.def=t,this.theme={...ng,...t.theme||{}},this.scene=new yc,this.camera=new Xe(58,window.innerWidth/window.innerHeight,.1,240),this.colliders=[],this.interactables=[],this.effects=[],this.sway=[],this.dust=[],this.clouds=[],this.lanterns=[],this.time=0,this.gateOpen=!1,this.barrierOpacity=.28,this.rnd=zc(t.seed??7),this.enemySpawns=[],this.chests=[],this.objectiveTarget=null,this.spawnPoint=ni(0,0,29),this.bossPoint=ni(0,0,-24),this.shrinePoint=ni(6,0,27),this.keeperPoint=ni(-5,0,27),this.build()}build(){const t=this.theme;this.scene.fog=new ga(t.fog,t.fogDensity),this.scene.background=new Dt(t.fog),this.buildSky(),this.buildLights(),this.buildTerrain(),this.buildArena(),this.buildGate(),this.buildShrine(),this.buildNpc(),this.buildProps(),this.buildAtmosphere(),this.buildObjective(),this.optimizeStatic(),this.camera.position.set(0,6,39),this.camera.lookAt(0,2,0)}optimizeStatic(){this.scene.updateMatrixWorld(!0);const t=new Set([this.sky,this.terrain,this.path,this.gate,this.gateWalls,this.barrier,this.shrine,this.keeper,this.bajie,this.objective,this.arenaSet,this.cloudLayer,this.dustPoints,this.snowPoints,this.ashPoints,...this.chests,...this.sway.map(n=>n.object),...this.clouds]),e=n=>{let a=n;for(;a&&a!==this.scene;){if(t.has(a))return!0;a=a.parent}return!1},i=new Map;this.scene.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.isSkinnedMesh||n.material?.isShaderMaterial||n.material?.isSpriteMaterial||Array.isArray(n.material)||n.material?.map||n.material?.transparent||n.material?.vertexColors||n.castShadow===!1&&n.receiveShadow===!1&&!n.material?.isMeshStandardMaterial||e(n)||!n.geometry?.attributes?.position)return;const a=`${n.material.uuid}|${n.castShadow?1:0}|${n.receiveShadow?1:0}`;i.has(a)||i.set(a,{material:n.material,geometry:[],cast:n.castShadow,receive:n.receiveShadow,meshes:[]});const r=i.get(a);let o=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();o.applyMatrix4(n.matrixWorld);for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.getAttribute("normal")||o.computeVertexNormals(),r.geometry.push(o),r.meshes.push(n)});for(const n of i.values()){if(n.geometry.length<2){n.geometry.forEach(c=>c.dispose());continue}const a=Vc(n.geometry,!1);if(n.geometry.forEach(c=>c.dispose()),!a)continue;const r=a.getAttribute("position")?.array;let o=!r;if(r){for(let c=0;c<r.length;c++)if(Number.isNaN(r[c])){o=!0;break}}if(o){a.dispose();continue}const l=new Xt(a,n.material);l.castShadow=n.cast,l.receiveShadow=n.receive,l.matrixAutoUpdate=!1,l.updateMatrix(),this.scene.add(l);for(const c of n.meshes)c.removeFromParent()}}buildSky(){const t=this.theme;this.sky=ag(t.skyTop,t.skyBottom),this.scene.add(this.sky);const e=t.sunPosition??[18,36,-108];this.sunDisc=qc(t.sun,t.sunSize??17),this.sunDisc.position.set(e[0],e[1],e[2]),this.scene.add(this.sunDisc);const i=this.rnd;if(t.stars){const r=new Float32Array(780);for(let c=0;c<260;c++)r[c*3]=(i()-.5)*180,r[c*3+1]=35+i()*80,r[c*3+2]=(i()-.5)*180;const o=new Me;o.setAttribute("position",new je(r,3));const l=new yo({color:16770222,size:.38,transparent:!0,opacity:.75,depthWrite:!1});this.scene.add(new Sc(o,l))}this.cloudLayer=new Zt,this.scene.add(this.cloudLayer);const n=t.clouds??8;for(let a=0;a<n;a++){const r=qm(2.5+i()*4);r.position.set((i()-.5)*150,15+i()*18,-30-i()*70),r.userData.speed=.4+i()*.6,this.cloudLayer.add(r),this.clouds.push(r)}}buildLights(){const t=this.theme,e=new Pc(t.hemi,t.ground,t.night?1.45:1.6);if(this.scene.add(e),t.night){const r=new Nd(t.hemi,.38);this.scene.add(r)}const i=new os(t.sun,t.night?2.1:2.45);i.position.set(-22,36,18),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),i.shadow.camera.left=-42,i.shadow.camera.right=42,i.shadow.camera.top=46,i.shadow.camera.bottom=-38,i.shadow.camera.near=1,i.shadow.camera.far=100,i.shadow.bias=-.0012,i.shadow.normalBias=.02,this.scene.add(i),this.sunLight=i;const n=new os(t.rim,t.night?2.2:1.05);n.position.set(20,12,-32),this.scene.add(n),this.rimLight=n;const a=new Ie(t.accent,t.night?2.2:1.1,48,2);a.position.set(0,6,-20),this.scene.add(a),this.fillLight=a}buildTerrain(){const t=this.theme,e=this.rnd,i=new Ye(120,120,34,34);i.rotateX(-Math.PI/2);const n=i.attributes.position,a=[],r=new Dt(t.ground),o=new Dt(t.ground2??t.ground),l=new Dt(t.accent),c=new Dt;for(let v=0;v<n.count;v++){const m=n.getX(v),f=n.getZ(v),S=Math.hypot(m,f+1);let w=0;if(S>42){const A=Kt((S-42)/24,0,1);w=(Math.sin(m*.18)+Math.cos(f*.15)+e()*.8)*2.8*A}n.setY(v,w);const _=(Math.sin(m*.31)+Math.cos(f*.23)+2)/4;c.copy(r).lerp(o,_),e()>.9&&c.lerp(l,.12),a.push(c.r,c.g,c.b)}i.setAttribute("color",new ee(a,3)),i.computeVertexNormals();const h=new Ii({vertexColors:!0,roughness:1,flatShading:!0,metalness:0}),d=new Xt(i,h);d.receiveShadow=!0,this.scene.add(d),this.terrain=d;const u=[];for(let v=0;v<=28;v++){const m=31-v*2.4;u.push(ni(Math.sin((m+4)*.089)*1.7,0,m))}const p=sg(u,6.2,t.path);p.receiveShadow=!0,this.scene.add(p),this.path=p;const g=new Xt(new xs(13.5,30),new Ii({color:t.arena,roughness:1,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-1}));g.rotation.x=-Math.PI/2,g.position.set(0,.042,-23),g.receiveShadow=!0,this.scene.add(g);for(let v=0;v<32;v++){const m=30-v*2;for(const f of[-1,1])if(e()>.5){const S=B(this.scene,new yi(.28+e()*.24,0),t.ground2,[f*(3.4+e()*.8)+Math.sin(m*.1)*1.7,.1,m],[0,e()*Math.PI,.1],[1.2,.6,1]);S.receiveShadow=!0}}for(let v=0;v<30;v++){const m=v/30*Math.PI*2,f=54+e()*12,S=8+e()*14,w=di(7+e()*6,S,v%3?t.ground2:t.ground,[Math.cos(m)*f,S/2-1.5,Math.sin(m)*f-1],[0,e()*Math.PI,0],this.scene,7);w.receiveShadow=!0,w.castShadow=!1}if(this.def.id!=="final"){const v=ql({roof:t.roof??2958878,wall:t.wall??5584940});v.position.set(26,0,-29),v.scale.setScalar(1.8),this.scene.add(v)}}buildArena(){const t=this.theme,e={prologue:"入 职 大 典",blackwind:"最 终 面 试",yellowwind:"超 时 罚 站",xiaoxitian:"结 营 典 礼",pansi:"直 播 决 赛",flame:"烧 烤 大 赛",final:"最 终 面 试"};for(let o=0;o<10;o++){const l=o/10*Math.PI*2;if(Math.abs(l-Math.PI/2)<.4)continue;const c=Math.cos(l)*14,h=-23+Math.sin(l)*14,d=ot(this.scene,[c,0,h]);if(At(.28,.4,2.5,t.wall??4865068,[0,1.25,0],[0,0,0],d,6),At(.42,.42,.18,t.gold??12161357,[0,2.5,0],[0,0,0],d,6),o%3===0){const u=ot(d,[0,2.8,0]);B(u,new Mt(.2,0),16752955,[0,0,0]);const p=new Ie(16743468,1.5,9,2);p.position.set(0,.4,0),u.add(p),this.lanterns.push(u)}this.addCollider(c,h,.65)}const i=new ye({color:t.gold??14069083,transparent:!0,opacity:.38,side:_e,depthWrite:!1,blending:Ce});for(const[o,l]of[[12.9,13.2],[12.1,12.22],[8.2,8.3]]){const c=new Xt(new xa(o,l,72),i.clone());c.rotation.x=-Math.PI/2,c.position.set(0,.09,-23),this.scene.add(c)}const n=new Ie(t.gold??16766090,2.4,34,2);n.position.set(0,8.5,-21),this.scene.add(n);const a=oe("面",7,7,{color:t.sigilColor??"#d2b26a",fontSize:440,width:512,height:512});a.rotation.x=-Math.PI/2,a.rotation.z=.15,a.position.set(0,.1,-23),a.material.opacity=.3,a.renderOrder=2,this.scene.add(a),this.arenaSet=new Zt,this.arenaSet.visible=!1,this.scene.add(this.arenaSet);const r=ro({gate:this.def.gateColor??7350821,gold:t.gold??12950865,gateText:e[this.def.id]??"最 终 面 试"});r.position.set(0,0,-36.2),r.scale.setScalar(1.85),Wi(r),this.arenaSet.add(r),this.arenaGate=r;for(const o of[-1,1]){const l=ot(this.arenaSet,[o*11.8,0,-30]);At(.09,.12,9.5,4928545,[0,4.7,0],[0,0,0],l,6);const c=new Xt(new Ye(1.2,4.6,4,8),new Ii({color:o<0?9382691:6957601,side:_e,roughness:1,flatShading:!0}));c.position.set(-o*.62,6.2,0),l.add(c);const h=oe(o<0?"卷":"忍",.9,4.1,{color:"#e7c477",fontSize:260,vertical:!0,width:256,height:1024});h.position.set(-o*.62,6.2,.02),l.add(h)}}showArenaSet(){this.arenaSet&&(this.arenaSet.visible=!0)}buildGate(){const t=ro({gate:this.def.gateColor??7350821,gold:this.theme.gold??12950865,gateText:this.def.gateText??"面 试 通 道"});t.position.set(0,0,-9.2),this.scene.add(t),this.gate=t,this.barrier=$m(this.theme.gold??14725978),this.barrier.position.set(0,0,-9.1),this.scene.add(this.barrier),this.barrierBase=this.barrier.material.opacity,this.gateWalls=new Zt;for(const e of[-1,1]){const i=new Zt;for(let n=0;n<5;n++)B(i,new yi(2.4+this.rnd()*1.8,0),this.theme.ground2,[e*(6+n*4.4),1.1,-9+(this.rnd()-.5)*1.3],[0,this.rnd()*3,0],[1,.9,.8]);this.gateWalls.add(i)}this.scene.add(this.gateWalls)}buildShrine(){const t=Vm();Wi(t),t.position.copy(this.shrinePoint),t.rotation.y=-.45,this.scene.add(t),this.shrine=t,this.interactables.push({id:"shrine",type:"shrine",object:t,label:"共享香火 · 土地公物业",position:this.shrinePoint.clone().add(ni(0,1.1,.8)),radius:2.4,prompt:"上香 / 升级",icon:"香"}),this.addCollider(this.shrinePoint.x,this.shrinePoint.z,.9)}buildNpc(){const t=Fm();if(Wi(t),t.position.copy(this.keeperPoint),t.rotation.y=.55,this.scene.add(t),this.keeper=t,this.interactables.push({id:"keeper",type:"npc",object:t,label:"土地公 · 花果山物业",position:this.keeperPoint.clone().add(ni(0,1.2,0)),radius:2.3,prompt:"聊天",icon:"话"}),this.addCollider(this.keeperPoint.x,this.keeperPoint.z,.55),this.def.companion){const e=Om();Wi(e),e.position.set(4.2,0,23.5),e.rotation.y=-.65,this.scene.add(e),this.bajie=e,this.interactables.push({id:"bajie",type:"npc",object:e,label:"猪八戒 · 灵活就业",position:ni(4.2,1.3,23.5),radius:2.3,prompt:"唠两句",icon:"猪"}),this.addCollider(4.2,23.5,.65)}}buildProps(){const t=this.theme,e=this.def.id,i=this.rnd,n=(o,l,c,h=i()*Math.PI*2,d=0)=>(o.position.set(l,0,c),o.rotation.y=h,this.scene.add(o),d&&this.addCollider(l,c,d),o),a=(o,l,c,h=0)=>{const d=[];for(let u=0;u<o;u++){const p=i()*Math.PI*2,g=l+i()*(c-l),v=Math.cos(p)*g,m=h+Math.sin(p)*g;m>-9&&Math.abs(v)<6.5||m<-9&&Math.hypot(v,m+23)<16.2||d.push([v,m])}return d};if(e==="prologue"||e==="final"){for(const[o,l]of a(16,9,29))n(Nn(i()>.25?"peach":"dead",i),o,l,i()*6,1.4);for(const[o,l]of a(8,5,28))n(cn(.8+i(),t.ground2),o,l,i()*6,1.2);if(e==="prologue"){const o=n(hr(),8.5,17,-.8,1.1);q(.5,.08,.4,9977907,[0,1,.1],[0,0,0],o);const l=oe("入职登记",2.2,.55,{color:"#efcf7a",fontSize:72,width:512,height:128});l.position.set(8.5,1.8,16.5),l.rotation.y=-.2,this.scene.add(l);for(let c=0;c<3;c++){const h=ot(this.scene,[10-c*2.2,0,9-c*.4]);At(.18,.26,1.1,6636590,[0,.55,0],[0,0,0],h,6),q(.9,1.1,.35,12559210,[0,1.2,0],[0,0,0],h);const d=oe("KPI",.55,.18,{color:"#4c3821",fontSize:56,width:256,height:128});d.position.set(0,1.2,.2),h.add(d)}}else{for(let c=0;c<5;c++){const h=-23+c*9.5,d=ot(this.scene,[h,0,4+i()*2]);q(1.2,2.1,.8,2567213,[0,1.05,0],[0,0,0],d);for(let u=0;u<4;u++)q(.9,.08,.03,9479821,[0,.55+u*.35,.42],[0,0,0],d);this.addCollider(h,4.5,.9)}const o=dr("天道酬勤",{bg:6170400,color:"#d5b77a"});n(o,-12,-14,.2);const l=oe("最终面试 · 通过即上岗",5.2,1,{color:"#e8c678",fontSize:72,width:1024,height:192});l.position.set(0,3,11),this.scene.add(l)}}else if(e==="blackwind"){for(const[l,c]of a(20,7,30))n(Nn("bamboo",i),l,c,0,.8);for(const[l,c]of a(4,8,26))n(cn(.7+i()*1.2,6118224),l,c,0,1.1);["招","聘","卷","薪","福报","上市"].forEach((l,c)=>{const h=c%2?1:-1,d=dr(l,{bg:c%3===0?9316130:7284511});n(d,h*(8+c%3*3.2),12-c*5.5,.1,.3)});for(let l=0;l<3;l++){const c=n(hr(),-11+l*3.2,14-l*1.5,.2+l*.3,1.1),h=oe(l===0?"面试":l===1?"复试":"终面",.8,.28,{color:"#d8c596",fontSize:56,width:256,height:128});h.position.set(0,1.45,.1),c.add(h)}for(let l=0;l<6;l++){const c=Wc(l%2?13212238:10956582);n(c,(l%2?1:-1)*(10+l%3*2),8-l*3.2,0,0),c.position.y=3.2}n(ql({roof:2958621,wall:5912104}),25,-26,.2).scale.setScalar(2.2)}else if(e==="yellowwind"){for(const[l,c]of a(14,10,31))n(Nn("dead",i),l,c,0,1);for(const[l,c]of a(14,6,30))n(cn(1+i()*1.8,9072970),l,c,0,1.5);for(let l=0;l<3;l++){const c=Gm(l%2?14067773:11946546);n(c,-13+l*11,8-l*7,.4+l*.8,.5)}for(let l=0;l<12;l++){const c=ot(this.scene,[(i()-.5)*36,.4,14-i()*30]);q(.8,.7,.8,13151100,[0,0,0],[0,i(),0],c),q(.82,.08,.82,9321515,[0,.38,0],[0,0,0],c),c.rotation.y=i()*4}for(let l=0;l<6;l++)q(2.2,2.8,.8,12879677,[22+l%2*2.3,1.4,12-l*2.6],[0,.2,0],this.scene);const o=oe("黄风快送 · 超时免单（不免）",5.4,1,{color:"#f0cf80",fontSize:66,width:1024,height:192});o.position.set(22,3.5,10),o.rotation.y=-.5,this.scene.add(o)}else if(e==="xiaoxitian"){for(const[h,d]of a(18,8,31))n(Nn("pine",i),h,d,0,1.1);for(const[h,d]of a(10,6,29))n(cn(.9+i(),12174788),h,d,0,1.1);for(let h=0;h<5;h++){const d=h/5*Math.PI*2,u=dr(["团","建","共","赢","卷"][h],{bg:6038562,color:"#d7be84"});n(u,Math.cos(d)*12,-14+Math.sin(d)*7,0,.3)}const o=ot(this.scene,[0,0,-31]);q(9,5,.3,3091243,[0,3.2,0],[0,0,0],o);const l=oe(`凝心聚力
卷死同行`,8.2,4.2,{color:"#f0ead8",fontSize:100,width:1024,height:512,bg:"#e9e6d8"});l.position.set(0,3.2,.2),o.add(l);for(let h=0;h<4;h++){const d=n(hr(),-9+h*6,11,.1,1.1);q(.35,.05,.28,14010789,[.2,.93,.15],[0,0,0],d)}const c=Xl();n(c,8,17,-.6,.5),n(Xl(),-12,5,.5,.5)}else if(e==="pansi"){for(const[u,p]of a(10,9,30))n(cn(1.2+i(),4862807),u,p,0,1.4);for(let u=0;u<12;u++){const p=u/12*Math.PI*2,g=ot(this.scene,[Math.cos(p)*(18+i()*8),0,Math.sin(p)*(18+i()*8)]);for(let m=0;m<3;m++){const f=di(.5+i()*.5,2+i()*4,u%2?10112399:7290257,[(i()-.5)*1.4,1.2,(i()-.5)*1.4],[.2,i(),.2],g,5);f.material.emissive=new Dt(4792410),f.material.emissiveIntensity=1.2}const v=new Ie(u%2?16740277:10187775,.8,8,2);v.position.set(0,2,0),g.add(v)}const o=ot(this.scene,[13,0,-1]);q(8,.3,5,2825776,[0,.15,0],[0,0,0],o);const l=B(o,new ji(2,.1,6,28),16748484,[0,3,-1.2],[0,0,0]);l.material.emissive=new Dt(16732061),l.material.emissiveIntensity=2;const c=oe("家人们！",3.8,1.4,{color:"#ffd7e9",fontSize:160,width:512,height:256});c.position.set(0,4.2,-1.2),o.add(c);const h=new Ie(16735142,3.2,18,2);h.position.set(0,3,0),o.add(h);for(let u=0;u<10;u++){const p=ot(this.scene,[16+(i()-.5)*8,.4+i()*2,-7+(i()-.5)*10]);q(.8,.8,.8,12951977,[0,0,0],[0,i(),0],p)}const d=new wc({color:13880288,transparent:!0,opacity:.28});for(let u=0;u<7;u++){const p=[ni(-25+u*2,.5,22),ni(-10+u*1.2,6.2,9),ni(6+u*1.6,4.4,-8)],g=new Me().setFromPoints(p);this.scene.add(new gd(g,d))}}else if(e==="flame"){for(const[c,h]of a(12,11,31))n(Nn("dead",i),c,h,0,1);for(const[c,h]of a(12,6,30)){const d=cn(1+i()*2,5978928);n(d,c,h,0,1.5);const u=new Ie(16735780,.8,8,2);u.position.set(0,1.2,0),d.add(u)}const o=di(20,30,3417636,[34,11,-38],[0,0,0],this.scene,7);o.material.emissive=new Dt(7150856),o.material.emissiveIntensity=.28;for(let c=0;c<4;c++){const h=n(Xm(),-16+c*10,12-c*1.5,.2+c*.25,1),d=oe(["烧烤","烤冷面","悟空同款","免单券"][c],1.5,.45,{color:"#f7d68b",fontSize:70,width:512,height:128,bg:"#64231d"});d.position.set(0,1.9,.25),h.add(d)}for(let c=0;c<3;c++){const h=Xc(10128256);h.position.set(-18+c*12,1.8,10-c*2),this.scene.add(h),this.sway.push({object:h,phase:c})}const l=ot(this.scene,[20,0,-7],[0,.2,-.12]);At(.13,.13,16,13217403,[0,8,0],[0,0,0],l,6);for(let c=0;c<6;c++)q(2.4,1.8,1.6,9254951,[0,2+c*2.4,0],[0,.2*c,0],l)}const r=this.def.chests??[[-15,5],[18,-16]];for(const[o,l]of r){const c=Wm();Wi(c),c.position.set(o,0,l),c.rotation.y=this.rnd()*Math.PI*2,this.scene.add(c),this.chests.push(c),this.interactables.push({id:`chest_${this.chests.length}`,type:"chest",object:c,label:"功德箱（私人）",position:ni(o,.8,l),radius:2,prompt:"打开",icon:"宝",used:!1})}if(this.def.lights)for(const o of this.def.lights){const l=new Ie(o.color??16757086,o.intensity??2,o.distance??15,2);l.position.set(o.x,o.y??2,o.z),this.scene.add(l)}}buildAtmosphere(){const t=this.theme,e=t.dustCount??140,i=na(e,t.dust??16766106,34,10);if(this.scene.add(i),this.dustPoints=i,t.snow){const a=na(260,15398655,42,22);a.material.size=.13,a.material.opacity=.85,this.scene.add(a),this.snowPoints=a}if(t.ash){const a=na(160,16752216,40,16);a.material.size=.1,a.material.opacity=.6,this.scene.add(a),this.ashPoints=a}const n=new ye({color:t.fog,transparent:!0,opacity:.18,depthWrite:!1,side:_e});for(let a=0;a<4;a++){const r=new Xt(new Ye(28+a*8,7+a*2),n.clone());r.rotation.x=-Math.PI/2,r.position.set((a%2?-1:1)*(8+a*3),.16+a*.12,18-a*13),r.material.opacity=.08+a*.02,this.scene.add(r),this.sway.push({object:r,phase:a,fog:!0})}}buildObjective(){const t=jm(this.theme.gold??16762719);t.position.set(0,0,-8),this.scene.add(t),this.objective=t}addCollider(t,e,i){this.colliders.push({x:t,z:e,r:i})}setObjective(t){if(this.objectiveTarget=t?.clone?.()??null,!!this.objective){if(!t){this.objective.visible=!1;return}this.objective.visible=!0,this.objective.position.set(t.x,0,t.z)}}addCompanionPoint(t){this.bajiePoint=t}setGateOpen(){this.gateOpen||(this.gateOpen=!0,this.barrierOpenAt=this.time)}resolveCollision(t,e=.6){t.x=Kt(t.x,-33,33),t.z=Kt(t.z,-35.5,32.5),!this.gateOpen&&t.z<-7.7&&(t.z=-7.7);for(const i of this.colliders){const n=t.x-i.x,a=t.z-i.z,r=i.r+e,o=Math.hypot(n,a);if(o<r&&o>1e-4){const l=(r-o)/o;t.x+=n*l,t.z+=a*l}}return t}spawnSparks(t,e=16763758,i=12){const n=Km(e,i);return n.position.copy(t),this.scene.add(n),this.effects.push({type:"spark",object:n,life:1.1,age:0}),n}spawnRing(t,e=16761436,i=1){const n=pa(e);return n.position.set(t.x,Math.max(.08,t.y),t.z),n.scale.setScalar(i),this.scene.add(n),this.effects.push({type:"ring",object:n,life:.55,age:0,scale:i}),n}spawnShockwave(t,e=15250526){for(let i=0;i<3;i++){const n=pa(e);n.position.set(t.x,.1+i*.02,t.z),n.scale.setScalar(.6+i*.3),this.scene.add(n),this.effects.push({type:"shock",object:n,life:.8,age:-i*.08,scale:.6+i*.3})}}update(t){this.time+=t;const e=this.time;this.objective?.userData.ring&&(this.objective.userData.ring.rotation.z=e*.4),this.objective?.visible&&(this.objective.userData.diamond.rotation.y=e*1.1,this.objective.userData.diamond.position.y=3.1+Math.sin(e*2.2)*.18,this.objective.userData.ring.scale.setScalar(1+Math.sin(e*2.5)*.05)),this.barrier&&(this.gateOpen?this.barrierOpacity=Math.max(0,this.barrierOpacity-t*.75):this.barrierOpacity=.2+Math.sin(e*1.9)*.07,this.barrier.material.opacity=this.barrierOpacity,this.barrier.userData.runes?.forEach((i,n)=>{i.material.opacity=this.gateOpen?this.barrierOpacity*2:.35+Math.sin(e*2+n)*.2,i.position.y+=Math.sin(e*1.2+n)*.001}),this.barrier.visible=this.barrierOpacity>.005);for(const i of this.clouds)i.position.x+=i.userData.speed*t,i.position.x>90&&(i.position.x=-90);this.dustPoints&&this.animateDust(this.dustPoints,t,e,.5),this.snowPoints&&this.animateDust(this.snowPoints,t,e,1.9),this.ashPoints&&this.animateDust(this.ashPoints,t,e,1.2);for(const i of this.sway)i.fog?(i.object.position.x+=Math.sin(e*.08+i.phase)*.002,i.object.material.opacity=.07+Math.sin(e*.4+i.phase)*.02):(i.object.position.y+=Math.sin(e*.7+i.phase)*.001,i.object.rotation.y+=Math.sin(e*.3+i.phase)*4e-4);this.bajie&&(this.bajie.userData.rig.body.position.y=.9+Math.sin(e*1.3)*.02),this.keeper&&(this.keeper.userData.rig.head.rotation.y=Math.sin(e*.5)*.08),this.shrine&&(this.shrine.rotation.y=-.45+Math.sin(e*.4)*.01);for(let i=this.effects.length-1;i>=0;i--){const n=this.effects[i];if(n.age+=t,n.type==="spark")for(const a of n.object.children)a.userData.vel.y-=9*t,a.position.addScaledVector(a.userData.vel,t),a.rotation.x+=t*8,a.material.opacity=Kt(1-n.age/n.life,0,1);else if((n.type==="ring"||n.type==="shock")&&n.age>=0){const a=Kt(n.age/n.life,0,1);n.object.scale.setScalar(n.scale*(1+a*4)),n.object.material.opacity=(1-a)*.85}n.age>n.life&&(this.scene.remove(n.object),jl(n.object),this.effects.splice(i,1))}}animateDust(t,e,i,n){const a=t.geometry.attributes.position,r=t.userData.base,o=t.userData.phases;for(let l=0;l<a.count;l++){const c=l*3,h=o[l];a.array[c]=r[c]+Math.sin(i*.35+h)*.6,a.array[c+1]=(r[c+1]+i*n+h)%10,a.array[c+2]=r[c+2]+Math.cos(i*.3+h)*.6}a.needsUpdate=!0}dispose(){jl(this.scene),this.scene.clear(),this.colliders=[],this.interactables=[],this.effects=[]}}class og{constructor(t){this.game=t,this.world=t.world,this.difficulty=t.difficulty,this.save=t.save,this.model=t.models.player,Wi(this.model),this.rig=this.model.userData.rig,this.world.scene.add(this.model),this.model.position.copy(this.world.spawnPoint),this.model.rotation.y=Math.PI,this.position=this.model.position,this.facing=Math.PI,this.radius=.65;const e=this.save.upgrades?.body??0,i=this.save.upgrades?.staff??0,n=this.save.upgrades?.gourd??0;this.maxHp=Math.round((150+e*24)*this.difficulty.playerHp),this.hp=this.maxHp,this.maxStamina=100,this.stamina=100,this.maxMana=100,this.mana=100,this.attackPower=this.difficulty.playerDamage*(1+i*.13),this.maxGourd=3+n,this.gourd=this.maxGourd,this.focus=0,this.maxFocus=3,this.state="idle",this.stateTime=0,this.attackStep=0,this.attackHitDone=!1,this.queuedAttack=!1,this.invuln=0,this.dodgeTime=0,this.perfectWindow=0,this.perfectUsed=!1,this.cooldownSkill=0,this.cooldownHeal=0,this.staminaDelay=0,this.isMoving=!1,this.moveDir=new E(0,0,-1),this.knockback=new E,this.animTime=0,this.slashes=[],this.dead=!1,this.afterimages=0,this.stats={damageDealt:0,perfectDodges:0,heavies:0}}get alive(){return!this.dead}get hpRatio(){return Kt(this.hp/this.maxHp,0,1)}get forward(){return new E(Math.sin(this.facing),0,Math.cos(this.facing))}update(t){this.dead||(this.animTime+=t,this.stateTime+=t,this.invuln=Math.max(0,this.invuln-t),this.perfectWindow=Math.max(0,this.perfectWindow-t),this.cooldownSkill=Math.max(0,this.cooldownSkill-t),this.cooldownHeal=Math.max(0,this.cooldownHeal-t),this.staminaDelay=Math.max(0,this.staminaDelay-t),this.regen(t),this.game.input.blocked||this.handleActions(),this.state==="dodge"?this.updateDodge(t):this.state==="attack"?this.updateAttack(t):this.state==="heavy"?this.updateHeavy(t):this.state==="hurt"?this.updateHurt(t):this.state==="heal"?this.updateHeal(t):this.state==="skill"?this.updateSkill(t):this.updateMovement(t),this.position.addScaledVector(this.knockback,t),this.knockback.multiplyScalar(Math.exp(-9*t)),this.world.resolveCollision(this.position,this.radius),this.model.position.y=0,this.animate(t))}regen(t){this.state!=="dodge"&&this.staminaDelay<=0&&(this.stamina=Math.min(this.maxStamina,this.stamina+30*t)),this.mana=Math.min(this.maxMana,this.mana+3.2*t)}handleActions(){const t=this.game.input;this.state==="dodge"||this.state==="hurt"||this.state==="heal"||this.state==="skill"||this.state==="dead"?(t.consume("attack"),t.consume("heavy"),t.consume("skill"),t.consume("heal"),this.state==="dodge"&&t.consume("dodge")):t.consume("attack")?this.state==="attack"?this.queuedAttack=!0:this.startAttack(1):t.consume("heavy")&&this.focus>=1?this.startHeavy():t.consume("dodge")?this.startDodge():t.consume("skill")&&this.mana>=30&&this.cooldownSkill<=0?this.startSkill():t.consume("heal")&&this.gourd>0&&this.hp<this.maxHp&&this.cooldownHeal<=0&&this.startHeal()}updateMovement(t){const e=this.game.input,i=e.moveVector,n=Math.hypot(i.x,i.y);if(this.isMoving=n>.08,this.isMoving){const a=this.game.cameraRig.yaw,r=-Math.sin(a),o=-Math.cos(a),l=Math.cos(a),c=-Math.sin(a),h=r*-i.y+l*i.x,d=o*-i.y+c*i.x,u=Math.hypot(h,d)||1;this.moveDir.set(h/u,0,d/u),this.facing=da(this.facing,Math.atan2(this.moveDir.x,this.moveDir.z),1-Math.exp(-12*t));const p=e.sprinting&&this.stamina>1,g=p?7:4.5;p&&(this.stamina=Math.max(0,this.stamina-18*t),this.staminaDelay=.3),this.position.addScaledVector(this.moveDir,g*t),this.model.rotation.y=this.facing,p&&Math.random()<t*8&&this.game.world.spawnSparks(this.position.clone().add(new E(0,.1,0)),13219211,2)}else this.moveDir.set(0,0,0)}startAttack(t){this.state="attack",this.stateTime=0,this.attackStep=t,this.attackHitDone=!1,this.queuedAttack=!1,this.model.rotation.y=this.facing,this.stamina=Math.max(0,this.stamina-5),this.staminaDelay=.5,this.game.audio.sfx(t===3?"heavySwing":"swing")}updateAttack(t){this.game.input;const e=this.attackStep===3?.28:.16,i=e+(this.attackStep===3?.17:.13),n=this.attackStep===3?.62:.44;if(this.stateTime>=e&&this.stateTime<=i&&!this.attackHitDone){this.attackHitDone=!0;const a=[0,16,18,28][this.attackStep]*this.attackPower,r=this.attackStep===3?3.8:3.2,o=this.attackStep===3?Math.PI*1.15:Math.PI*.75;this.game.damageEnemiesInArc(this.position,r,o,a,this.facing,{knockback:this.attackStep===3?5:2,type:"light"})&&(this.focus=Math.min(this.maxFocus,this.focus+.34),this.game.hitStop(this.attackStep===3?.09:.05),this.game.cameraRig.shake(.16+this.attackStep*.03,.16)),this.spawnSlash(this.attackStep===3?1.6:1,this.attackStep===2?-1:1)}if(this.stateTime>=n&&(this.queuedAttack&&this.attackStep<3?this.startAttack(this.attackStep+1):(this.state="idle",this.stateTime=0,this.attackStep=0)),this.stateTime>.1){const a=this.attackStep===3?.9:1.3;this.position.addScaledVector(this.forward,a*t)}}startHeavy(){if(this.focus<1){this.game.ui.toast("专注不足。多打几下，或者多挨几下。","warn");return}this.state="heavy",this.stateTime=0,this.heavyPoints=Math.min(3,Math.floor(this.focus)),this.focus=Math.max(0,this.focus-this.heavyPoints),this.attackHitDone=!1,this.stats.heavies++,this.stamina=Math.max(0,this.stamina-12),this.staminaDelay=.6,this.game.audio.sfx("heavySwing")}updateHeavy(t){if(this.stateTime>=.36&&!this.attackHitDone){this.attackHitDone=!0;const e=(52+this.heavyPoints*26)*this.attackPower,i=this.game.damageEnemiesInArc(this.position,4.6,Math.PI*2,e,this.facing,{knockback:9,type:"heavy"});this.game.world.spawnShockwave(this.position.clone().add(new E(0,0,1.2)),15975529),this.game.world.spawnSparks(this.position.clone().add(new E(0,1.2,1)),16764530,24),this.game.cameraRig.shake(.65,.38),this.game.audio.sfx("heavyHit"),this.game.audio.sfx("bossSlam"),this.game.hitStop(.13),i&&this.game.ui.toast(`重棍命中 ${i} 个目标。这就是福报。`,"good")}this.stateTime>=.85&&(this.state="idle",this.stateTime=0)}startDodge(){if(this.stamina<26){this.game.ui.toast("体力不足。建议先摸一会儿鱼。","warn");return}this.stamina=Math.max(0,this.stamina-26),this.staminaDelay=.7,this.state="dodge",this.stateTime=0,this.dodgeTime=0,this.invuln=.38,this.perfectWindow=.32,this.perfectUsed=!1;const t=this.game.input.moveVector;if(Math.hypot(t.x,t.y)>.1){const e=this.game.cameraRig.yaw,i=-Math.sin(e),n=-Math.cos(e),a=Math.cos(e),r=-Math.sin(e),o=i*-t.y+a*t.x,l=n*-t.y+r*t.x,c=Math.hypot(o,l)||1;this.moveDir.set(o/c,0,l/c)}else this.moveDir.copy(this.forward).multiplyScalar(-1);this.facing=Math.atan2(this.moveDir.x,this.moveDir.z),this.model.rotation.y=this.facing,this.game.audio.sfx("dodge")}updateDodge(t){this.dodgeTime+=t;const e=this.dodgeTime<.3?12.5:an(10,0,Kt((this.dodgeTime-.3)/.2,0,1));this.position.addScaledVector(this.moveDir,e*t),this.dodgeTime>.12&&Math.random()<t*30&&this.world.spawnSparks(this.position.clone().add(new E(0,.15,0)),14075552,2),this.stateTime>=.5&&(this.state="idle",this.stateTime=0)}startSkill(){this.state="skill",this.stateTime=0,this.mana-=30,this.cooldownSkill=14,this.model.rotation.y=this.facing,this.game.audio.sfx("freeze"),this.game.cameraRig.shake(.2,.25)}updateSkill(t){if(this.stateTime>=.18&&!this.skillApplied){this.skillApplied=!0;const e=this.game.immobilizeEnemies(this.position,9,2.8);this.game.world.spawnShockwave(this.position.clone(),9626879),this.game.world.spawnRing(this.position.clone(),10479871,1.5),this.game.ui.toast(e?`定身成功。${e} 个目标开始怀疑人生。`:"定身成功。但没有目标，只有你。",e?"good":"info")}this.stateTime>=.72&&(this.state="idle",this.stateTime=0,this.skillApplied=!1)}startHeal(){this.state="heal",this.stateTime=0,this.healApplied=!1,this.gourd--,this.cooldownHeal=3.5,this.game.audio.sfx("heal")}updateHeal(t){if(this.stateTime>=.55&&!this.healApplied){this.healApplied=!0;const e=this.maxHp*.42;this.hp=Math.min(this.maxHp,this.hp+e),this.game.ui.damageNumber(this.position.clone().add(new E(0,2.8,0)),Math.round(e),"heal"),this.game.world.spawnSparks(this.position.clone().add(new E(0,1.3,0)),9430448,18),this.game.audio.sfx("heal")}this.stateTime>=1&&(this.state="idle",this.stateTime=0)}updateHurt(t){this.stateTime>=.4&&(this.state="idle",this.stateTime=0)}takeDamage(t,e,i={}){if(this.dead)return!1;if(this.invuln>0)return this.state==="dodge"&&this.perfectWindow>0&&!this.perfectUsed&&(this.perfectUsed=!0,this.onPerfectDodge()),!1;const n=Math.max(1,Math.round(t));if(this.hp-=n,this.invuln=.85,this.state="hurt",this.stateTime=0,this.game.audio.sfx("hurt"),this.game.ui.damageNumber(this.position.clone().add(new E(0,2.6,0)),n,"hurt"),this.game.ui.hitFlash(),this.game.cameraRig.shake(.3,.22),e){const a=new E().subVectors(this.position,e).normalize();this.knockback.copy(a).multiplyScalar(5.5)}return navigator.vibrate&&navigator.vibrate(35),this.hp<=0&&(this.hp=0,this.die()),!0}onPerfectDodge(){this.focus=Math.min(this.maxFocus,this.focus+.8),this.stats.perfectDodges++,this.game.audio.sfx("perfect"),this.game.slowMotion(.38,.35),this.game.ui.toast("完美闪避！您已成功躲避一次周一。","perfect"),this.game.ui.flashVignette("#f5d48a"),this.game.world.spawnRing(this.position.clone(),16769440,1.2),this.game.world.spawnSparks(this.position.clone().add(new E(0,1.2,0)),16769440,16)}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}refill(){this.hp=this.maxHp,this.stamina=this.maxStamina,this.mana=this.maxMana,this.gourd=this.maxGourd,this.cooldownHeal=0,this.cooldownSkill=0}addFocus(t){this.focus=Kt(this.focus+t,0,this.maxFocus)}die(){this.dead||(this.dead=!0,this.state="dead",this.model.rotation.z=1.35,this.game.onPlayerDeath())}reviveAtSpawn(){this.dead=!1,this.hp=this.maxHp,this.stamina=this.maxStamina,this.mana=this.maxMana,this.gourd=this.maxGourd,this.state="idle",this.stateTime=0,this.invuln=1.2,this.model.rotation.set(0,Math.PI,0),this.position.copy(this.world.spawnPoint)}spawnSlash(t=1,e=1){const i=new ji(2.4*t,.07+t*.02,4,22,Math.PI*1.1),n=new ye({color:16766851,transparent:!0,opacity:.85,blending:Ce,depthWrite:!1,side:_e}),a=new Xt(i,n);a.position.copy(this.position).add(new E(0,1.35,0)),a.rotation.x=Math.PI/2,a.rotation.z=this.facing+(e>0?-.5:2.4),a.scale.setScalar(.7),this.world.scene.add(a),this.slashes.push({mesh:a,life:.28,age:0,direction:e})}updateSlashes(t){for(let e=this.slashes.length-1;e>=0;e--){const i=this.slashes[e];i.age+=t;const n=Kt(i.age/i.life,0,1);i.mesh.scale.setScalar(.7+n*.55),i.mesh.material.opacity=(1-n)*.85,i.mesh.rotation.z+=t*8*i.direction,i.age>=i.life&&(this.world.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.slashes.splice(e,1))}}animate(t){this.updateSlashes(t);const e=this.rig,i=this.animTime,n=this.isMoving,r=n&&this.game.input.sprinting?12:8,o=n?Math.sin(i*r):0,l=n?Math.abs(Math.sin(i*r))*.06:Math.sin(i*1.7)*.015;if(e.hips.position.y=.95+l,e.hips.rotation.y=0,e.hips.rotation.x=0,e.torso.rotation.x=n?.08:Math.sin(i*1.2)*.02,e.torso.rotation.z=0,e.head.rotation.y=n?0:Math.sin(i*.6)*.1,e.head.rotation.x=0,e.tail.rotation.y=Math.sin(i*1.5)*.2,e.tail.rotation.x=Math.sin(i*1.1)*.08,e.legs.left.hip.rotation.x=o*.6,e.legs.right.hip.rotation.x=-o*.6,e.legs.left.knee.rotation.x=Math.max(0,-o)*.55,e.legs.right.knee.rotation.x=Math.max(0,o)*.55,e.arms.left.shoulder.rotation.x=-o*.5,e.arms.left.shoulder.rotation.z=.08,e.arms.right.shoulder.rotation.x=o*.28,e.arms.right.shoulder.rotation.z=-.08,e.arms.left.elbow.rotation.x=-.2,e.arms.right.elbow.rotation.x=-.22,e.staffPivot.rotation.set(.35,0,-.18),e.staffPivot.position.set(0,-.1,.03),this.model.rotation.z=0,this.model.position.y=0,this.state==="attack"){const c=Kt(this.stateTime/.44,0,1),h=Math.sin(c*Math.PI);if(this.attackStep===1)e.torso.rotation.y=-.6*h,e.arms.right.shoulder.rotation.x=-1.8*h,e.arms.right.shoulder.rotation.z=-.5*h,e.arms.left.shoulder.rotation.x=.7*h,e.staffPivot.rotation.x=1.2-h*2.2,e.staffPivot.rotation.z=-.4-h*.8;else if(this.attackStep===2)e.torso.rotation.y=.8*h,e.arms.right.shoulder.rotation.x=-.5,e.arms.right.shoulder.rotation.z=1.5*h,e.arms.left.shoulder.rotation.x=-.9*h,e.staffPivot.rotation.x=1.5-h*1.8,e.staffPivot.rotation.z=.8*h;else{const d=Kt((this.stateTime-.2)/.35,0,1);e.torso.rotation.x=-.2+d*.7,e.arms.right.shoulder.rotation.x=-3+d*4.2,e.arms.left.shoulder.rotation.x=-2.6+d*4,e.arms.right.shoulder.rotation.z=.2,e.arms.left.shoulder.rotation.z=-.2,e.staffPivot.rotation.x=.2,e.staffPivot.rotation.z=Math.sin(d*Math.PI)*1.5,this.model.position.y=Math.sin(d*Math.PI)*.15}}else if(this.state==="heavy"){const c=Kt(this.stateTime/.85,0,1);if(c<.45){const h=c/.45;e.arms.right.shoulder.rotation.x=an(0,-3.2,h),e.arms.left.shoulder.rotation.x=an(0,-3,h),e.torso.rotation.x=an(0,-.3,h),e.staffPivot.rotation.x=-.1,this.model.position.y=h*.35}else{const h=(c-.45)/.55;e.arms.right.shoulder.rotation.x=an(-3.2,1,Math.min(1,h*2.2)),e.arms.left.shoulder.rotation.x=an(-3,1,Math.min(1,h*2.2)),e.torso.rotation.x=an(-.3,.6,Math.min(1,h*2.2)),e.staffPivot.rotation.x=.3,this.model.position.y=Math.max(0,.35-h*.5)}}else if(this.state==="dodge"){const c=Kt(this.stateTime/.5,0,1);this.model.rotation.z=Math.sin(c*Math.PI)*.6,e.torso.rotation.x=.55*Math.sin(c*Math.PI),e.arms.right.shoulder.rotation.x=.6,e.arms.left.shoulder.rotation.x=.6,e.legs.left.hip.rotation.x=.8,e.legs.right.hip.rotation.x=-.4,this.model.position.y=Math.sin(c*Math.PI)*.18}else if(this.state==="hurt"){const c=Kt(this.stateTime/.4,0,1);this.model.rotation.z=-Math.sin(c*Math.PI)*.3,e.torso.rotation.x=-.35,e.head.rotation.x=-.2}else if(this.state==="heal"){const c=Kt(this.stateTime/1,0,1);e.arms.right.shoulder.rotation.x=-2.1,e.arms.right.elbow.rotation.x=-1.4,e.arms.left.shoulder.rotation.x=-.7,e.head.rotation.x=-.25,this.model.rotation.z=Math.sin(c*Math.PI)*.05}else if(this.state==="skill"){const c=Kt(this.stateTime/.72,0,1);e.arms.left.shoulder.rotation.x=-2.7,e.arms.right.shoulder.rotation.x=-2.7,e.arms.left.elbow.rotation.x=-1.1,e.arms.right.elbow.rotation.x=-1.1,e.torso.rotation.x=-.1,this.model.position.y=Math.sin(c*Math.PI)*.12}else this.dead&&(this.model.rotation.z=1.35,e.arms.left.shoulder.rotation.x=.4,e.arms.right.shoulder.rotation.x=-.3);this.state!=="attack"&&this.state!=="heavy"&&(e.torso.rotation.y=n?Math.sin(i*r)*.08:Math.sin(i*1.2)*.03),this.state==="idle"&&!n&&(e.arms.left.shoulder.rotation.x=Math.sin(i*1.2)*.03,e.arms.right.shoulder.rotation.x=.05+Math.sin(i*1.2+.6)*.03)}}class lg{constructor(t){this.game=t,this.camera=t.world.camera,this.yaw=0,this.pitch=.18,this.distance=window.innerWidth<760?9.2:8,this.targetHeight=2.15,this.current=new E(0,4,38),this.lookTarget=new E(0,2,25),this.shakeAmount=0,this.shakeTime=0,this.shakeDuration=0,this.offset=new E,this.focus=null,this.sensitivity=1,this.camera.fov=window.innerWidth<760?64:58,this.camera.updateProjectionMatrix()}setPlayer(t){this.player=t,this.current.set(t.position.x,t.position.y+4,t.position.z+9),this.lookTarget.copy(t.position).add(new E(0,this.targetHeight,0))}update(t,e){if(!this.player)return;const i=e.takeLook();this.yaw-=i.x*(e.isTouch?1.15:1),this.pitch=Kt(this.pitch+i.y*.9,-.34,.88);const n=this.player.position,a=new E(n.x,n.y+this.targetHeight,n.z);this.focus&&a.lerp(this.focus.position,this.focus.weight);const r=this.distance*(this.focus?.85:1),o=Math.cos(this.pitch)*r,l=e.isTouch?.55:.92,c=new E(a.x+Math.sin(this.yaw)*o+Math.cos(this.yaw)*l,a.y+Math.sin(this.pitch)*r+1.25,a.z+Math.cos(this.yaw)*o-Math.sin(this.yaw)*l);c.y<1.2&&(c.y=1.2);const h=1-Math.exp(-(this.focus?3:10)*t);if(this.current.lerp(c,h),this.lookTarget.lerp(a,1-Math.exp(-(this.focus?4:14)*t)),this.camera.position.copy(this.current),this.shakeTime>0){this.shakeTime=Math.max(0,this.shakeTime-t);const d=this.shakeAmount*(this.shakeTime/Math.max(this.shakeDuration,.001));this.camera.position.x+=(Math.random()-.5)*d,this.camera.position.y+=(Math.random()-.5)*d*.7,this.camera.position.z+=(Math.random()-.5)*d*.5,this.lookTarget.x+=(Math.random()-.5)*d*.25,this.lookTarget.y+=(Math.random()-.5)*d*.18}this.camera.lookAt(this.lookTarget)}shake(t=.3,e=.25){this.game.settings.shake&&(this.shakeAmount=Math.max(this.shakeAmount*.4,t),this.shakeDuration=e,this.shakeTime=e)}setFocus(t,e=.5){this.focus={position:t.clone(),weight:e}}clearFocus(){this.focus=null}reset(){this.yaw=0,this.pitch=.18,this.focus=null,this.player&&(this.current.set(this.player.position.x,4,this.player.position.z+9),this.lookTarget.copy(this.player.position).add(new E(0,this.targetHeight,0)))}}const kn={melee:{hp:1,damage:1,speed:2.7,range:2.35,cooldown:1.8,radius:.56},ranged:{hp:.72,damage:.8,speed:2.2,range:10,cooldown:2.6,radius:.54},bomber:{hp:.62,damage:1.35,speed:4,range:2.6,cooldown:2.3,radius:.5}};class Yl{constructor(t,e,i={}){this.game=t,this.world=t.world,this.spawn=e,this.kind=e.kind||"anxious",this.role=e.role||"melee",this.summoned=!!i.summoned,this.model=zm(this.kind,this.world.theme),Wi(this.model),this.model.position.set(e.x,0,e.z),this.model.rotation.y=ke(0,Math.PI*2),this.world.scene.add(this.model),this.rig=this.model.userData.rig,this.position=this.model.position,this.radius=kn[this.role].radius;const n=this.game.chapter.index,a=44+n*10;this.maxHp=Math.round(a*kn[this.role].hp*this.game.difficulty.enemyHp),this.hp=this.maxHp,this.baseDamage=(7.5+n*1.65)*kn[this.role].damage*this.game.difficulty.enemyDamage,this.speed=kn[this.role].speed*(this.game.difficulty.id==="hard"?1.1:1),this.attackRange=kn[this.role].range,this.attackCooldownMax=kn[this.role].cooldown,this.attackCooldown=ke(.4,1.8),this.state="idle",this.stateTime=0,this.frozen=0,this.hitFlash=0,this.dead=!1,this.deathTime=0,this.aggro=!1,this.wanderAngle=ke(0,Math.PI*2),this.wanderTimer=ke(1,4),this.knockback=new E,this.telegraph=null,this.freezeFx=null,this.walkPhase=ke(0,10),this.spawnedAt=this.game.time,this.hitMaterials=[],this.flashMesh=B(this.model,new Mt(.86,1),new ye({color:16767392,transparent:!0,opacity:0,depthWrite:!1,blending:Ce}),[0,.9,0]),this.flashMesh.castShadow=!1,this.flashMesh.visible=!1,this.coins=Math.round(8+n*4+(this.role==="bomber"?4:0))}get alive(){return!this.dead}update(t){if(this.dead){this.deathTime+=t;const n=Kt(this.deathTime/1.1,0,1);this.model.scale.setScalar(1-n*.55),this.model.rotation.z=n*1.2,this.model.position.y=-n*.6,this.deathTime>1.3&&this.remove();return}if(this.stateTime+=t,this.attackCooldown-=t,this.hitFlash=Math.max(0,this.hitFlash-t*5),this.flashMesh.visible=this.hitFlash>.01,this.flashMesh.material.opacity=this.hitFlash*.25,this.frozen>0){this.frozen-=t,this.freezeFx&&(this.freezeFx.rotation.y+=t*.7,this.freezeFx.material.opacity=.16+Math.sin(this.game.time*4)*.04),this.frozen<=0&&this.unfreeze(),this.animateFrozen(t);return}const e=this.game.player;if(!e||!e.alive)return;const i=si(this.position,e.position);if(!this.aggro&&i<11.5&&(this.aggro=!0,this.state="chase"),this.knockback.multiplyScalar(Math.exp(-10*t)),this.position.addScaledVector(this.knockback,t),this.state==="hit")this.stateTime>.22&&(this.state=this.aggro?"chase":"idle",this.stateTime=0);else if(this.state==="windup"){this.faceTarget(e.position.x,e.position.z,t,5),this.updateTelegraph(t);const n=this.role==="bomber"?.95:this.role==="ranged"?.62:.5;this.stateTime>=n&&this.executeAttack()}else this.state==="recover"?this.stateTime>.5&&(this.state="chase",this.stateTime=0):this.aggro?this.updateCombat(t,i,e):this.updateWander(t);this.world.resolveCollision(this.position,this.radius),this.separate(),this.animate(t)}updateWander(t){if(this.wanderTimer-=t,this.wanderTimer<=0&&(this.wanderTimer=ke(2,5),this.wanderAngle=ke(0,Math.PI*2)),this.wanderTimer>2.4){const e=Math.cos(this.wanderAngle)*this.speed*.3*t,i=Math.sin(this.wanderAngle)*this.speed*.3*t;this.position.x+=e,this.position.z+=i,this.model.rotation.y=da(this.model.rotation.y,this.wanderAngle,t*3)}}updateCombat(t,e,i){this.role==="ranged"?(this.faceTarget(i.position.x,i.position.z,t,6),e>9.5?this.moveToward(i.position,this.speed*.75,t):e<5.5&&this.moveAway(i.position,this.speed*.8,t),this.attackCooldown<=0&&e<12&&this.startWindup()):this.role==="bomber"?(this.faceTarget(i.position.x,i.position.z,t,7),e>2.4&&this.moveToward(i.position,this.speed,t),e<4.2&&this.attackCooldown<=0&&this.startWindup()):(this.faceTarget(i.position.x,i.position.z,t,6),e>this.attackRange-.3&&this.moveToward(i.position,this.speed,t),e<this.attackRange+.5&&this.attackCooldown<=0&&this.startWindup())}moveToward(t,e,i){const n=t.x-this.position.x,a=t.z-this.position.z,r=Math.hypot(n,a)||1;this.position.x+=n/r*e*i,this.position.z+=a/r*e*i}moveAway(t,e,i){const n=this.position.x-t.x,a=this.position.z-t.z,r=Math.hypot(n,a)||1;this.position.x+=n/r*e*i,this.position.z+=a/r*e*i}faceTarget(t,e,i,n=5){const a=Math.atan2(t-this.position.x,e-this.position.z);this.model.rotation.y=da(this.model.rotation.y,a,1-Math.exp(-n*i))}startWindup(){if(this.state="windup",this.stateTime=0,this.role==="melee"||this.role==="bomber"){const t=this.role==="bomber"?4.8:2.8;this.telegraph=this.makeTelegraph(this.position,t,this.role==="bomber"?.95:.5,this.role==="bomber"?16733752:14918211)}this.role==="ranged"&&this.game.audio.sfx("swing")}makeTelegraph(t,e,i,n=16756810){const a=new Zt,r=pa(n);r.scale.setScalar(e),a.add(r);const o=new Xt(new xs(e,24),new ye({color:n,transparent:!0,opacity:.1,side:_e,depthWrite:!1,blending:Ce}));return o.rotation.x=-Math.PI/2,o.position.y=.02,a.add(o),a.position.set(t.x,.05,t.z),this.world.scene.add(a),{group:a,ring:r,disc:o,age:0,duration:i,radius:e,color:n}}updateTelegraph(t){if(!this.telegraph)return;this.telegraph.age+=t;const e=1+Math.sin(this.game.time*14)*.04;this.telegraph.ring.scale.setScalar(this.telegraph.radius*e),this.telegraph.disc.material.opacity=.05+Math.min(1,this.telegraph.age/this.telegraph.duration)*.12}clearTelegraph(){this.telegraph&&(this.world.scene.remove(this.telegraph.group),this.telegraph.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}),this.telegraph=null)}executeAttack(){const t=this.game.player;if(!t||!t.alive)return;const e=si(this.position,t.position);if(this.clearTelegraph(),this.role==="bomber"){this.game.world.spawnShockwave(this.position.clone(),16739126),this.game.world.spawnSparks(this.position.clone().add(new E(0,.8,0)),16743234,26),this.game.cameraRig.shake(.5,.3),this.game.audio.sfx("bossSlam"),e<4.8&&t.takeDamage(this.baseDamage*1.25,this.position,{explode:!0}),this.die(!0);return}if(this.role==="ranged"){const i=this.position.clone().add(new E(0,1.4,0)),n=t.position.clone().add(new E(0,1.2,0)),a=new E().subVectors(n,i).normalize();this.game.spawnProjectile({position:i,velocity:a.multiplyScalar(12),damage:this.baseDamage,kind:this.projectileKind(),owner:this}),this.attackCooldown=this.attackCooldownMax,this.state="recover",this.stateTime=0,this.game.audio.sfx("swing");return}this.game.audio.sfx("swing"),e<3.1&&t.takeDamage(this.baseDamage,this.position),this.game.world.spawnSparks(this.position.clone().add(new E(0,1,0)),14856810,8),this.attackCooldown=this.attackCooldownMax,this.state="recover",this.stateTime=0}projectileKind(){return this.kind==="resume"?"resume":this.kind==="takeout"?"takeout":this.kind==="snowman"?"snow":this.kind==="spider"?"tag":this.kind==="ash"?"fire":this.kind==="clerk"?"ink":"banana"}separate(){for(const t of this.game.enemies){if(t===this||!t.alive)continue;const e=this.position.x-t.position.x,i=this.position.z-t.position.z,n=Math.hypot(e,i),a=this.radius+t.radius;if(n<a&&n>.001){const r=(a-n)*.3;this.position.x+=e/n*r,this.position.z+=i/n*r}}}takeDamage(t,e={}){if(this.dead||this.state==="intro")return!1;if(this.hp-=t,this.hitFlash=1,this.game.audio.sfx(e.heavy?"heavyHit":"hit"),this.game.world.spawnSparks(this.position.clone().add(new E(0,1.1,0)),e.heavy?16765546:16172170,e.heavy?18:7),this.game.ui.damageNumber(this.position.clone().add(new E(0,1.8,0)),Math.round(t),e.heavy?"heavy":"enemy"),e.knockback){const i=new E().subVectors(this.position,e.from||this.game.player.position).normalize();this.knockback.copy(i).multiplyScalar(e.knockback)}return this.hp<=0?this.die():e.stagger!==!1&&(this.state="hit",this.stateTime=0,this.clearTelegraph()),!0}freeze(t=2.5){return this.dead?!1:(this.frozen=Math.max(this.frozen,t),this.state="idle",this.stateTime=0,this.clearTelegraph(),this.freezeFx||(this.freezeFx=B(this.model,new Mt(.95,0),new ye({color:10479871,transparent:!0,opacity:.2,depthWrite:!1,blending:Ce}),[0,.9,0]),this.freezeFx.castShadow=!1),this.freezeFx.visible=!0,this.game.world.spawnRing(this.position.clone(),10479871,.8),!0)}unfreeze(){this.freezeFx&&(this.freezeFx.visible=!1),this.game.world.spawnSparks(this.position.clone().add(new E(0,1,0)),10479871,8)}die(t=!1){this.dead||(this.dead=!0,this.deathTime=0,this.clearTelegraph(),this.game.onEnemyKilled(this,t),t||this.game.audio.sfx("hit"))}remove(){if(this.removed)return;this.removed=!0,this.world.scene.remove(this.model),this.model.traverse(e=>{e.geometry&&e.geometry.dispose()});const t=this.game.enemies.indexOf(this);t!==-1&&this.game.enemies.splice(t,1)}animate(t){const e=this.rig;if(!e)return;const i=this.game.time+this.walkPhase,n=this.state==="chase",a=n?Math.sin(i*9):0;if(e.body&&(e.body.position.y=e.body.userData.baseY??e.body.position.y),e.body&&(e.body.position.y=.68+Math.abs(Math.sin(i*9))*(n?.05:.01)),e.head&&(e.head.rotation.y=Math.sin(i*.8)*.05,e.head.rotation.x=this.state==="windup"?-.2:0),e.arms&&(e.arms.left.rotation.x=a*.5,e.arms.right.rotation.x=-a*.5,this.state==="windup"&&(e.arms.left.rotation.x=-2.2,e.arms.right.rotation.x=-2.2)),e.legs&&(e.legs.left.rotation.x=-a*.65,e.legs.right.rotation.x=a*.65),this.role==="bomber"&&this.state==="windup"){const r=Kt(this.stateTime/.95,0,1);this.model.scale.setScalar(1+r*.18);const o=Math.sin(this.game.time*26)>0;this.flashMesh.visible=o,this.flashMesh.material.opacity=.3}else this.dead||this.model.scale.lerp(new E(1,1,1),t*8)}animateFrozen(t){this.rig?.head&&(this.rig.head.rotation.z=Math.sin(this.game.time*3)*.02)}}const Kl={rock:[{id:"slam",name:"停车牌压制",type:"slam",radius:4.2,delay:.85,damage:1.1,range:22},{id:"fan",name:"石子三连",type:"fan",count:5,spread:.9,delay:.55,damage:.7,range:26},{id:"dash",name:"保安冲刺",type:"dash",delay:.55,damage:1,range:22}],bear:[{id:"slam",name:"已读不回",type:"slam",radius:5,delay:.95,damage:1.15,range:20},{id:"fan",name:"简历风暴",type:"fan",count:7,spread:1.35,delay:.65,damage:.7,range:26},{id:"dash",name:"面试冲刺",type:"dash",delay:.6,damage:1.05,range:24},{id:"summon",name:"叫两个同事",type:"summon",delay:.8,damage:0,count:2,range:30}],rat:[{id:"fan",name:"差评狂风",type:"fan",count:9,spread:1.9,delay:.65,damage:.68,range:28},{id:"rain",name:"外卖雨",type:"rain",count:7,delay:.9,damage:.8,range:30},{id:"dash",name:"电瓶车冲锋",type:"dash",delay:.52,damage:1.1,range:26}],yellowbrow:[{id:"slam",name:"金铙扣头",type:"slam",radius:5.4,delay:.95,damage:1.2,range:24},{id:"rings",name:"格局打开",type:"rings",count:12,delay:.8,damage:.65,range:30},{id:"rain",name:"PPT 暴雨",type:"rain",count:9,delay:.8,damage:.75,range:34},{id:"summon",name:"优秀学员",type:"summon",delay:.9,damage:0,count:2,range:32}],hundredEyes:[{id:"fan",name:"家人们冲",type:"fan",count:11,spread:2.2,delay:.7,damage:.62,range:30},{id:"rings",name:"全网最低价",type:"rings",count:16,delay:.8,damage:.7,range:32},{id:"rain",name:"退款雨",type:"rain",count:10,delay:.85,damage:.8,range:34},{id:"slam",name:"补光灯砸脸",type:"slam",radius:5,delay:.9,damage:1.2,range:24}],redboy:[{id:"slam",name:"三昧烤串",type:"slam",radius:5.6,delay:.95,damage:1.25,range:24},{id:"rain",name:"天降孜然",type:"rain",count:10,delay:.85,damage:.82,range:34},{id:"dash",name:"熊孩子冲撞",type:"dash",delay:.48,damage:1.15,range:26},{id:"rings",name:"全场免单",type:"rings",count:14,delay:.8,damage:.7,range:30}],sixear:[{id:"combo",name:"真假猴王·三连",type:"combo",delay:.55,damage:1,range:26},{id:"rings",name:"六耳回响",type:"rings",count:18,delay:.7,damage:.72,range:32},{id:"rain",name:"外包调令",type:"rain",count:12,delay:.75,damage:.8,range:38},{id:"summon",name:"临时工支援",type:"summon",delay:.8,damage:0,count:3,range:34}]};class cg{constructor(t){this.game=t,this.world=t.world,this.def=t.chapter.boss,this.model=Bm(this.def.type,this.world.theme),Wi(this.model);const e={rock:1.55,bear:1.35,rat:1.3,yellowbrow:1.28,hundredEyes:1.24,redboy:1.46,sixear:1.2};this.model.scale.setScalar(e[this.def.type]??1.1),this.model.position.copy(this.world.bossPoint),this.model.position.y=0,this.model.rotation.y=0,this.world.scene.add(this.model),this.rig=this.model.userData.rig,this.position=this.model.position,this.radius=this.def.type==="rock"?1.2:1.45,this.maxHp=Math.round(this.def.hp*t.difficulty.enemyHp),this.hp=this.maxHp,this.baseDamage=this.def.damage*t.difficulty.enemyDamage,this.state="dormant",this.stateTime=0,this.moveCooldown=1.1,this.currentMove=null,this.moveTime=0,this.phase=1,this.dead=!1,this.frozen=0,this.freezeFx=null,this.hitFlash=0,this.flashMesh=B(this.model,new Mt(this.def.type==="sixear"?2.2:1.6,1),new ye({color:16769955,transparent:!0,opacity:0,depthWrite:!1,blending:Ce}),[0,1.7,0]),this.flashMesh.castShadow=!1,this.flashMesh.visible=!1,this.moves=Kl[this.def.type]||Kl.bear,this.moveIndex=0,this.telegraphs=[],this.comboCount=0,this.summoned=[],this.deathTime=0,this.name=this.def.name,this.title=this.def.title,this.engaged=!1,this.introLock=!0}engage(){this.state="idle",this.engaged=!0,this.introLock=!1,this.model.rotation.y=Math.PI,this.game.audio.sfx("roar"),this.game.ui.showBossBar(this.name,this.title,1)}release(){this.introLock=!1}update(t){if(this.dead){this.deathTime+=t;const i=Kt(this.deathTime/2.2,0,1);this.model.rotation.z=i*.7,this.model.position.y=-i*.7,this.deathTime>2.4&&!this.removed&&(this.removed=!0,this.world.scene.remove(this.model));return}if(!this.engaged)return;if(this.stateTime+=t,this.moveTime+=t,this.moveCooldown-=t,this.hitFlash=Math.max(0,this.hitFlash-t*5),this.flashMesh.visible=this.hitFlash>.02,this.flashMesh.material.opacity=this.hitFlash*.2,this.frozen>0){this.frozen-=t,this.freezeFx&&(this.freezeFx.rotation.y+=t*.5),this.frozen<=0&&this.freezeFx&&(this.freezeFx.visible=!1),this.animateFrozen(t);return}const e=this.game.player;if(!(!e||!e.alive)){if(this.hp/this.maxHp<.5&&this.phase===1&&this.enterPhaseTwo(),this.state==="stagger")this.stateTime>.45&&(this.state="idle",this.stateTime=0);else if(this.state==="idle"){const i=si(this.position,e.position);this.faceTarget(e.position.x,e.position.z,t,4),i>4.6&&this.moveToward(e.position,this.phase===2?3.5:2.8,t),this.moveCooldown<=0&&this.startMove(i)}else this.state==="move"&&this.updateMove(t);this.world.resolveCollision(this.position,this.radius*.6),this.updateTelegraphs(t),this.animate(t)}}faceTarget(t,e,i,n=4){const a=Math.atan2(t-this.position.x,e-this.position.z);this.model.rotation.y=da(this.model.rotation.y,a,1-Math.exp(-n*i))}moveToward(t,e,i){const n=t.x-this.position.x,a=t.z-this.position.z,r=Math.hypot(n,a)||1;this.position.x+=n/r*e*i,this.position.z+=a/r*e*i}startMove(t){const e=this.moves.filter(n=>t<n.range);if(!e.length)return;let i=e[this.moveIndex%e.length];if(this.moveIndex++,this.phase===2&&Math.random()<.4&&(i=e[Math.floor(Math.random()*e.length)]),this.currentMove=i,this.state="move",this.stateTime=0,this.moveTime=0,this.moveDone=!1,this.moveApplied=!1,this.moveTarget=this.game.player.position.clone(),this.moveDir=new E().subVectors(this.game.player.position,this.position).setY(0).normalize(),this.game.ui.bossMove(`${this.name}使出了「${i.name}」`),this.game.audio.sfx(i.type==="slam"?"bossSlam":"roar"),i.type==="slam"){const n=i.radius*(this.phase===2?1.15:1),a=this.game.player.position.clone();this.addTelegraph(a,n,i.delay,16739909)}else if(i.type==="dash")this.addDashTelegraph(this.moveDir,i.delay,12);else if(i.type==="rain"){const n=this.game.player.position.clone();this.addTelegraph(n,7.5,i.delay,16756810)}}updateMove(t){const e=this.currentMove;if(!e){this.state="idle";return}if(e.type==="slam"){const i=Math.sin(Kt(this.moveTime/e.delay,0,1)*Math.PI);this.model.position.y=i*1.2,this.moveTime>=e.delay&&!this.moveApplied&&(this.moveApplied=!0,this.applySlam(e)),this.moveTime>=e.delay+.75&&this.endMove()}else if(e.type==="fan")this.moveTime>=e.delay&&!this.moveApplied&&(this.moveApplied=!0,this.applyFan(e)),this.moveTime>=e.delay+.8&&this.endMove();else if(e.type==="dash"){if(this.moveTime>=e.delay&&!this.moveApplied&&(this.moveApplied=!0,this.chargeDir=this.moveDir.clone(),this.game.audio.sfx("swing")),this.moveApplied&&this.moveTime<e.delay+.42){const i=24*(this.phase===2?1.2:1);this.position.addScaledVector(this.chargeDir,i*t),this.world.spawnSparks(this.position.clone().add(new E(0,.8,0)),14267772,2),!this.dashHit&&si(this.position,this.game.player.position)<2.5&&(this.dashHit=!0,this.game.player.takeDamage(this.baseDamage*e.damage,this.position))}this.moveTime>=e.delay+.85&&(this.dashHit=!1,this.endMove())}else e.type==="rain"?(this.moveTime>=e.delay&&!this.moveApplied&&(this.moveApplied=!0,this.applyRain(e)),this.moveTime>=e.delay+.8&&this.endMove()):e.type==="rings"?(this.moveTime>=e.delay&&!this.moveApplied&&(this.moveApplied=!0,this.applyRings(e)),this.moveTime>=e.delay+.7&&this.endMove()):e.type==="summon"?(this.moveTime>=e.delay&&!this.moveApplied&&(this.moveApplied=!0,this.applySummon(e)),this.moveTime>=e.delay+.9&&this.endMove()):e.type==="combo"&&this.updateCombo(t,e)}endMove(){this.model.position.y=0,this.state="idle",this.stateTime=0,this.moveCooldown=this.phase===2?.7:1.1,this.currentMove=null,this.clearTelegraphs()}applySlam(t){const e=this.game.player,i=this.moveTarget||e.position,n=t.radius*(this.phase===2?1.15:1);this.world.spawnShockwave(i.clone(),15774042),this.world.spawnRing(i.clone(),16765038,2),this.world.spawnSparks(i.clone().add(new E(0,.4,0)),16761962,26),this.game.cameraRig.shake(.6,.35),this.game.audio.sfx("bossSlam"),si(i,e.position)<n+.7&&e.takeDamage(this.baseDamage*t.damage,i),this.model.position.y=0}applyFan(t){const e=this.game.player,i=new E().subVectors(e.position,this.position).setY(0).normalize(),n=Math.atan2(i.x,i.z),a=t.count+(this.phase===2?2:0);for(let r=0;r<a;r++){const o=a===1?.5:r/(a-1),l=n-t.spread/2+o*t.spread,c=14;this.game.spawnProjectile({position:this.position.clone().add(new E(0,1.45,0)),velocity:new E(Math.sin(l)*c,.5,Math.cos(l)*c),damage:this.baseDamage*t.damage,kind:this.projectileKind(),owner:this})}this.game.world.spawnSparks(this.position.clone().add(new E(0,1.6,0)),14791256,16)}applyRain(t){const e=this.game.player,i=t.count+(this.phase===2?3:0);for(let n=0;n<i;n++){const a=ke(0,Math.PI*2),r=ke(0,6),o=e.position.clone().add(new E(Math.cos(a)*r,0,Math.sin(a)*r));this.game.spawnProjectile({position:o.clone().add(new E(0,12+n*.2,0)),velocity:new E(ke(-.4,.4),-4.5,ke(-.4,.4)),damage:this.baseDamage*t.damage,kind:this.projectileKind(),owner:this,gravity:8,life:4,radius:1})}this.world.spawnRing(e.position.clone(),16756810,2.3)}applyRings(t){const e=t.count+(this.phase===2?4:0);for(let i=0;i<e;i++){const n=i/e*Math.PI*2+this.game.time*.2;this.game.spawnProjectile({position:this.position.clone().add(new E(0,1.2,0)),velocity:new E(Math.sin(n)*9,.2,Math.cos(n)*9),damage:this.baseDamage*t.damage,kind:this.projectileKind(),owner:this,life:2.4})}this.world.spawnShockwave(this.position.clone(),16760926),this.game.cameraRig.shake(.25,.2)}applySummon(t){for(let e=0;e<t.count;e++){const i=e/t.count*Math.PI*2,n=this.position.clone().add(new E(Math.cos(i)*4.5,0,Math.sin(i)*4.5)),a=this.game.spawnMinion(n,this.chapterEnemyKind());this.summoned.push(a)}this.world.spawnShockwave(this.position.clone(),9401272),this.game.ui.bossMove(`${this.name}叫来了 ${t.count} 个同事。`)}chapterEnemyKind(){return this.game.chapter.enemies?.[0]?.kind||"clerk"}updateCombo(t,e){const i=e.delay,n=i*3+.6;this.comboCount=Math.min(3,Math.floor(this.moveTime/i)+1);const a=this.moveTime%i/i;this.moveTime>=(this.comboCount-1)*i+i*.6&&!this["comboHit"+this.comboCount]&&(this["comboHit"+this.comboCount]=!0,this.position.addScaledVector(this.moveDir,1.4),this.game.world.spawnSlashEffect?.(this.position.clone().add(new E(0,1.1,0)),10386431,2.2),this.game.world.spawnSparks(this.position.clone().add(new E(0,1.2,0)),11834367,10),si(this.position,this.game.player.position)<3.4&&this.game.player.takeDamage(this.baseDamage*e.damage*.8,this.position),this.game.audio.sfx("swing")),this.model.position.y=Math.abs(Math.sin(a*Math.PI))*.15,this.moveTime>=n&&(this.comboHit1=this.comboHit2=this.comboHit3=!1,this.endMove())}projectileKind(){return{bear:"resume",rat:"takeout",yellowbrow:"gold",hundredEyes:"tag",redboy:"fire",sixear:"ink",rock:"stone"}[this.def.type]||"ink"}addTelegraph(t,e,i,n=16735802){const a=new Zt,r=pa(n);r.scale.setScalar(e),a.add(r);const o=new Xt(new xs(e,28),new ye({color:n,transparent:!0,opacity:.08,side:_e,depthWrite:!1,blending:Ce}));o.rotation.x=-Math.PI/2,o.position.y=.03,a.add(o),a.position.set(t.x,.06,t.z),this.world.scene.add(a),this.telegraphs.push({group:a,ring:r,disc:o,age:0,duration:i,radius:e,color:n})}addDashTelegraph(t,e,i){const n=new Ye(2.8,i);n.rotateX(-Math.PI/2),n.translate(0,0,-i/2);const a=new ye({color:16737087,transparent:!0,opacity:.13,side:_e,depthWrite:!1,blending:Ce}),r=new Xt(n,a);r.position.copy(this.position).add(new E(0,.05,0)),r.rotation.y=Math.atan2(t.x,t.z),this.world.scene.add(r),this.telegraphs.push({group:r,ring:r,disc:r,age:0,duration:e,radius:1,color:16737087,dash:!0})}updateTelegraphs(t){for(let e=this.telegraphs.length-1;e>=0;e--){const i=this.telegraphs[e];i.age+=t;const n=Kt(i.age/i.duration,0,1);i.dash?i.group.material.opacity=.05+n*.18:(i.ring.scale.setScalar(i.radius*(1+Math.sin(this.game.time*16)*.03)),i.disc.material.opacity=.05+n*.16),i.age>i.duration+.15&&(this.world.scene.remove(i.group),i.group.traverse?.(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),this.telegraphs.splice(e,1))}}clearTelegraphs(){for(const t of this.telegraphs)this.world.scene.remove(t.group),t.group.traverse?.(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()});this.telegraphs=[]}takeDamage(t,e={}){return this.dead||!this.engaged||this.introLock?!1:(this.hp-=t,this.hitFlash=1,this.game.audio.sfx(e.heavy?"heavyHit":"hit"),this.game.world.spawnSparks(this.position.clone().add(new E(0,1.8,0)),16765818,e.heavy?22:9),this.game.ui.damageNumber(this.position.clone().add(new E(0,3,0)),Math.round(t),e.heavy?"heavy":"boss"),this.game.ui.updateBossBar(Kt(this.hp/this.maxHp,0,1)),this.game.cameraRig.shake(e.heavy?.45:.15,.18),this.hp<=0&&this.die(),!0)}freeze(t=2.5){return this.dead?!1:(this.frozen=Math.max(this.frozen,Math.min(1.35,t*.55)),this.freezeFx||(this.freezeFx=B(this.model,new Mt(this.def.type==="sixear"?2.2:1.6,0),new ye({color:10479871,transparent:!0,opacity:.16,depthWrite:!1,blending:Ce}),[0,1.7,0]),this.freezeFx.castShadow=!1),this.freezeFx.visible=!0,this.game.world.spawnRing(this.position.clone(),10479871,1.5),!0)}enterPhaseTwo(){this.phase=2,this.game.ui.toast(`${this.name}进入了第二阶段：开始谈情怀。`,"boss"),this.game.ui.bossPhase(2),this.game.audio.sfx("roar"),this.game.cameraRig.shake(.7,.6),this.world.spawnShockwave(this.position.clone(),16743242),this.moveCooldown=.5,this.state="stagger",this.stateTime=0,this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.06),this.game.ui.updateBossBar(this.hp/this.maxHp)}die(){this.dead||(this.dead=!0,this.deathTime=0,this.clearTelegraphs(),this.game.audio.sfx("gong"),this.game.cameraRig.shake(.8,.8),this.world.spawnShockwave(this.position.clone(),16765818),this.game.onBossDefeated(this))}animate(t){const e=this.rig;if(!e)return;const i=this.game.time;if(this.def.type==="sixear"&&e.monkey){const n=e.monkey.userData.rig;if(n.hips.position.y=.95+Math.abs(Math.sin(i*2))*.02,n.tail.rotation.y=Math.sin(i*2)*.2,n.head.rotation.y=Math.sin(i*.8)*.06,this.state==="move"){const a=Kt(this.moveTime/.8,0,1);n.arms.right.shoulder.rotation.x=-2.8+a*3.8,n.staffPivot.rotation.z=Math.sin(a*Math.PI)*1.5}return}if(e.head&&(e.head.rotation.y=Math.sin(i*.7)*.05),e.armL&&(e.armL.rotation.x=Math.sin(i*1.2)*.04),e.armR&&(e.armR.rotation.x=Math.sin(i*1.2+.7)*.04),this.state==="move"&&this.currentMove){const n=Kt(this.moveTime/Math.max(this.currentMove.delay,.2),0,1);this.currentMove.type==="slam"?(e.armL&&(e.armL.rotation.x=-2.5+n*4),e.armR&&(e.armR.rotation.x=-2.5+n*4),e.head&&(e.head.rotation.x=-.2+n*.3)):(this.currentMove.type==="fan"||this.currentMove.type==="rings"||this.currentMove.type==="rain")&&(this.currentMove.type==="fan"&&e.fan&&(e.fan.rotation.z=.2-Math.sin(n*Math.PI)*1.3),e.halo&&(e.halo.rotation.z+=t*1.5),e.ring&&(e.ring.rotation.z+=t*.8),e.eyes&&e.eyes.forEach((a,r)=>{a.scale.setScalar(1+Math.sin(i*4+r)*.1)}))}e.body&&(e.body.position.y=.9+Math.sin(i*1.7)*.024),e.halo&&(e.halo.rotation.z+=t*.2)}animateFrozen(t){this.rig?.head&&(this.rig.head.rotation.z=Math.sin(this.game.time*2)*.012)}}class hg{constructor(t,e){this.game=t,this.world=t.world,this.position=e.position.clone(),this.velocity=e.velocity.clone(),this.damage=e.damage,this.kind=e.kind||"ink",this.owner=e.owner,this.gravity=e.gravity??0,this.life=e.life??3,this.age=0,this.radius=e.radius??.45,this.dead=!1,this.mesh=this.makeMesh(),this.mesh.position.copy(this.position),this.world.scene.add(this.mesh),this.trailTimer=0}makeMesh(){const t=new Zt,i={resume:15262157,takeout:12683845,snow:14151935,tag:15115736,fire:16740660,ink:4206663,stone:8551794,gold:14856785,banana:14271066}[this.kind]||16765818,n=new Ii({color:i,roughness:.7,metalness:.1,emissive:i,emissiveIntensity:this.kind==="fire"?2.2:.35,flatShading:!0,transparent:!0,opacity:.98});let a;this.kind==="resume"?a=new Ue(.55,.04,.72):this.kind==="takeout"?a=new Ue(.5,.5,.5):this.kind==="snow"?a=new Mt(.28,0):this.kind==="tag"?a=new Ue(.42,.26,.04):this.kind==="fire"?a=new Mt(.32,0):this.kind==="stone"?a=new yi(.3,0):a=new Mt(.26,0);const r=new Xt(a,n);r.castShadow=!0,t.add(r);const o=new Xt(new Mt(.65,0),new ye({color:i,transparent:!0,opacity:.12,depthWrite:!1,blending:Ce}));if(t.add(o),this.kind==="resume"){const l=new Xt(new Ue(.36,.01,.03),new ye({color:4149084}));l.position.set(0,.03,.08),t.add(l)}return t}update(t){if(this.dead)return;this.age+=t,this.velocity.y-=this.gravity*t,this.position.addScaledVector(this.velocity,t),this.mesh.position.copy(this.position),this.mesh.rotation.x+=t*8,this.mesh.rotation.z+=t*5,this.trailTimer-=t,this.trailTimer<=0&&(this.trailTimer=.08,(this.kind==="fire"||this.kind==="gold"||this.kind==="tag")&&this.world.spawnSparks(this.position.clone(),this.kind==="tag"?16748498:16757086,2));const e=this.game.player;if(e?.alive){const i=e.position.clone().add(new E(0,1.25,0));if(this.position.distanceTo(i)<this.radius+.6){if(e.takeDamage(this.damage,this.position)){this.world.spawnSparks(this.position.clone(),16751454,8),this.destroy();return}if(e.state==="dodge"){this.destroy();return}}}(this.position.y<-.2||this.age>this.life||this.world.gateOpen===!1&&this.position.z<-9.1&&this.position.z>-9.5)&&(this.position.y<.1&&this.age>.15&&this.world.spawnSparks(this.position.clone(),14791274,5),this.destroy())}destroy(){this.dead||(this.dead=!0,this.world.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}}const dg=[80,130,200,300,430],ug={id:"manual",name:"员工手册",item:"入职礼物 · 非卖品",desc:"一本薄薄的小册子。第一页写着“公司是你家”，第二页写着“请勿留宿”。第三页被撕掉了，据说是年假那一页。",quote:"“欢迎加入大家庭。现在，请把这里当成自己家，然后立刻开始加班。”"},fg={prologue:"我？我就是个路过的。你继续，别管我。",blackwind:"黑熊精的面试我参加过。他问我能不能接受无偿加班，我说能。他当场把我录用了。",yellowwind:"我跟黄风大圣不熟。真的。那三十七块五是我凭本事欠的。",xiaoxitian:"黄眉的课我上过。三天两夜，我睡了三天两夜。醒来发现尾款已经扣了。",pansi:"百眼魔君卖我的洗脚盆，现在还在用。别说，确实能洗脚。",flame:"红孩儿那孩子……其实挺可怜的。他爸连他读几年级都不知道。",final:"我跟大师兄五百年没见了。他要是真在海南，我高低得让他请顿海鲜。"};class pg{constructor(t){this.app=t,this.engine=t.engine,this.ui=t.ui,this.audio=t.audio,this.input=t.input,this.save=t.save,this.settings=t.settings,this.chapterIndex=0,this.chapter=$e[0],this.time=0,this.active=!1,this.paused=!1,this.dialogueOpen=!1,this.shopOpen=!1,this.hitStopTimer=0,this.slowTimer=0,this.slowScale=1,this.enemies=[],this.projectiles=[],this.boss=null,this.generation=0,this.hudTimer=0,this.objectiveTimer=0,this.gateOpen=!1,this.gatePending=0,this.kills=0,this.requiredKills=0,this.phase="explore",this.deathHandled=!1,this.relic=null,this.relicCollecting=!1,this.bossTriggered=!1,this.bossDefeated=!1,this.interactTarget=null,this.objectiveText="",this.objectiveProgress="",this.arrowTarget=null,this.dirtySaveTimer=0,this.tutorialShown=!1,this.lastTip="",this.debugStartedBoss=!1}get difficulty(){return ua.find(t=>t.id===this.save.difficulty)||ua[1]}loadChapter(t,e={}){this.generation++,this.disposed=!1,this.disposeCurrent(),this.chapterIndex=t,this.chapter=$e[t],this.time=0,this.active=!1,this.paused=!1,this.dialogueOpen=!1,this.shopOpen=!1,this.hitStopTimer=0,this.slowTimer=0,this.enemies=[],this.projectiles=[],this.boss=null,this.gateOpen=!1,this.gatePending=0,this.kills=0,this.requiredKills=this.chapter.enemies.length,this.phase="explore",this.deathHandled=!1,this.relic=null,this.relicCollecting=!1,this.bossTriggered=!1,this.bossDefeated=!1,this.interactTarget=null,this.objectiveTimer=0,this.hudTimer=0,this.arrowTarget=null,this.tutorialShown=e.skipIntro||!1,this.save.chapter=t,this.save.started=!0,this.save.seenCharacters||(this.save.seenCharacters=[]),Se(this.save),this.world=new rg(this.chapter),this.models={player:fa({badge:!0,fur:5978660,cloth:12010542,gold:14395466,face:14263666})},this.player=new og(this),this.cameraRig=new lg(this),this.cameraRig.setPlayer(this.player),this.engine.setScene(this.world.scene,this.world.camera,i=>this.update(i)),this.engine.setQuality(this.settings.quality==="auto"?this.autoQuality():this.settings.quality);for(const i of this.chapter.enemies)this.enemies.push(new Yl(this,i));return this.ui.setupGame(this.chapter,this.save),this.ui.setGame(this),this.ui.hideBossBar(),this.ui.setHudVisible(!1),this.ui.clearInteractPrompt(),this.ui.setObjective(this.chapter.goal,""),this.input.setEnabled(!1),this.input.setBlocked(!0),this.input.clearActions(),this.updateHud(!0),this.objectiveText=this.chapter.goal,this.objectiveProgress="",this.audio.playMusic("menu"),this}autoQuality(){return window.innerWidth<820||/Mobi|Android/i.test(navigator.userAgent)?"medium":"high"}async begin(t={}){const e=this.generation;this.audio.playMusic("field"),!(!t.skipChapterCard&&(await this.ui.chapterCard(this.chapter),e!==this.generation))&&(!t.skipIntro&&this.chapter.intro?.length&&(await this.playDialogue(this.chapter.intro,{title:`${this.chapter.numeral} · ${this.chapter.name}`,subtitle:this.chapter.location,cinematic:!0}),e!==this.generation)||(this.active=!0,this.input.setEnabled(!0),this.input.setBlocked(!1),this.input.clearActions(),this.ui.setHudVisible(!0),this.cameraRig.reset(),this.updateObjectives(!0),this.updateHud(!0),this.save.tutorialSeen||(this.save.tutorialSeen=!0,Se(this.save),setTimeout(()=>{e===this.generation&&this.ui.showTutorial(this.player,this.chapter,this)},600)),this.audio.sfx("gong")))}async playDialogue(t,e={}){if(!t?.length)return;for(const a of t)a.who&&ls[a.who]&&!this.save.seenCharacters.includes(a.who)&&this.save.seenCharacters.push(a.who);const i=this.generation;this.dialogueOpen=!0,this.input.setBlocked(!0),this.ui.clearInteractPrompt();const n=await this.ui.dialogue(t,{...e,game:this});return i!==this.generation||(this.dialogueOpen=!1,!this.paused&&!this.shopOpen&&this.active&&this.input.setBlocked(!1),Se(this.save)),n}setPaused(t){this.paused=t,this.input.setBlocked(t||this.dialogueOpen||this.shopOpen),t?this.input.setEnabled(!1):this.active&&this.input.setEnabled(!0),!t&&this.active&&this.input.clearActions()}update(t){if(this.disposed)return;this.time+=t,this.hitStopTimer=Math.max(0,this.hitStopTimer-t),this.slowTimer>0&&(this.slowTimer-=t);let i=this.hitStopTimer>0?.06:this.slowTimer>0?this.slowScale:1;this.dialogueOpen&&(i*=.2),(this.paused||this.shopOpen)&&(i=0);const n=Math.min(t,.05)*i;if(this.world.update(t),this.relic){this.relic.rotation.y+=t*.8;const a=this.relic.userData.rig;a&&(a.core.rotation.y+=t*1.4,a.core.rotation.x+=t*.6,a.ring.rotation.z+=t*.5,a.ring2.rotation.x+=t*.8,a.core.position.y=1.1+Math.sin(this.time*2.2)*.12,a.ring.position.y=1.1+Math.sin(this.time*2.2)*.12,a.ring2.position.y=1.1+Math.sin(this.time*2.2)*.12)}if(!this.active){this.player&&this.cameraRig&&this.cameraRig.update(t,this.input),this.ui.updateDamageNumbers?.(this.world.camera,t);return}if(this.dialogueOpen||this.paused||this.shopOpen){this.player&&this.cameraRig&&this.cameraRig.update(t,this.input),this.ui.updateDamageNumbers?.(this.world.camera,t),this.updateHud();return}if(n>0){this.player.update(n);for(const a of[...this.enemies])a.update(n);this.boss&&this.boss.update(n);for(let a=this.projectiles.length-1;a>=0;a--){const r=this.projectiles[a];r.update(n),r.dead&&this.projectiles.splice(a,1)}}this.cameraRig.update(t,this.input),this.updateInteraction(),this.updateObjectives(),this.updateHud(),this.ui.updateDamageNumbers?.(this.world.camera,t),this.dirtySaveTimer+=t,this.dirtySaveTimer>12&&(this.dirtySaveTimer=0,Se(this.save))}updateInteraction(){if(!this.player?.alive||this.dialogueOpen){this.ui.clearInteractPrompt();return}let t=null,e=1/0;for(const i of this.world.interactables){if(i.used||!i.object?.visible)continue;const n=si(this.player.position,i.position);n<i.radius&&n<e&&(t=i,e=n)}t!==this.interactTarget&&(this.interactTarget=t,t?this.ui.setInteractPrompt(t):this.ui.clearInteractPrompt()),this.interactTarget&&this.input.consume("interact")&&this.handleInteraction(this.interactTarget)}async handleInteraction(t){t&&(this.ui.clearInteractPrompt(),this.interactTarget=null,t.type==="shrine"?await this.openShrine():t.type==="npc"?await this.talkToNpc(t.id):t.type==="chest"?this.openChest(t):t.type==="relic"&&await this.collectRelic())}openChest(t){if(t.used)return;t.used=!0;const e=55+this.chapterIndex*18+Math.round(ke(0,40));this.addCoins(e),this.audio.sfx("coin");const i=t.position.clone();this.world.spawnSparks(i,16765303,20),this.world.spawnRing(i,16765303,.8),this.ui.toast(`打开了功德箱。获得 ${e} 功德。里面还有一张“下次一定”的欠条。`,"loot"),t.object.visible=!1,t.object.traverse(n=>{n.isLight&&(n.visible=!1)})}async talkToNpc(t){if(t==="keeper"){const e=[...this.chapter.keeperIdle||[]];e.length||e.push({who:"keeper",text:"继续走吧。前面还有更离谱的。"}),e.push({who:"keeper",text:"对了，共享香火可以升级。扫码即拜，押金八十。"}),await this.playDialogue(e,{title:"土地公 · 花果山物业"})}else if(t==="bajie"){const e=[{who:"bajie",text:fg[this.chapter.id]||"别看我。我只是个路过的外卖员。"},{who:"bajie",text:"你要是缺功德，就去开宝箱。你要是缺德，就去找六耳。"}];await this.playDialogue(e,{title:"猪八戒 · 灵活就业"})}}async openShrine(){if(this.shopOpen)return;this.shopOpen=!0,this.input.setBlocked(!0),this.audio.sfx("uiOpen"),this.player.refill(),this.player.invuln=.8,this.updateHud(!0),this.ui.toast("香火已续。生命、体力、法力、葫芦全部回满。","good");const t=this.generation;await this.ui.openShrine({game:this,chapter:this.chapter,onClose:()=>{}}),t===this.generation&&(this.shopOpen=!1,this.active&&(this.input.setBlocked(!1),this.input.setEnabled(!0),this.input.clearActions()),Se(this.save),this.audio.sfx("uiClose"))}getUpgradeCost(t){const e=this.save.upgrades?.[t]??0;return e>=5?null:dg[e]}upgrade(t){const e=this.save.upgrades?.[t]??0;if(e>=5)return{ok:!1,message:"已满级。再升就要交个税了。"};const i=this.getUpgradeCost(t);return this.save.coins<i?(this.audio.sfx("back"),{ok:!1,message:`功德不足。还差 ${i-this.save.coins}。建议去开点宝箱。`}):(this.save.coins-=i,this.save.upgrades[t]=e+1,t==="body"?(this.player.maxHp=Math.round((150+(e+1)*24)*this.difficulty.playerHp),this.player.hp=Math.min(this.player.maxHp,this.player.hp+24)):t==="staff"?this.player.attackPower=this.difficulty.playerDamage*(1+(e+1)*.13):t==="gourd"&&(this.player.maxGourd=3+e+1,this.player.gourd=Math.min(this.player.maxGourd,this.player.gourd+1)),Se(this.save),this.audio.sfx("confirm"),this.ui.updateHud(this.hudPayload(),!0),{ok:!0,message:`${{body:"体质",staff:"棍法",gourd:"葫芦"}[t]}提升至 Lv.${e+1}。`,coins:this.save.coins})}updateObjectives(t=!1){if(this.phase==="explore"&&!this.gateOpen){const e=this.enemies.filter(r=>!r.summoned&&r.alive),i=Math.max(0,this.requiredKills-this.kills),n=i>0?"清理拦路的妖怪":"面试通道已开放",a=i>0?`${this.kills}/${this.requiredKills}`:"";if((t||n!==this.objectiveText||a!==this.objectiveProgress)&&(this.objectiveText=n,this.objectiveProgress=a,this.ui.setObjective(n,a),this.world.setObjective(null)),this.objectiveTimer-=1/60,e.length&&this.objectiveTimer<=0){this.objectiveTimer=.4;let r=e[0],o=1/0;for(const l of e){const c=si(l.position,this.player.position);c<o&&(o=c,r=l)}this.arrowTarget=r.position}else e.length||(this.arrowTarget=new E(0,0,-10));i<=0&&(this.gatePending+=1/60,this.gatePending>.8&&this.openGate())}else this.phase==="explore"&&this.gateOpen&&!this.bossTriggered?(this.arrowTarget=this.arrowTarget||new E(0,0,-10),this.player.position.z<-10.4&&this.world.gate?.visible&&(this.world.gate.visible=!1,this.world.gateWalls&&(this.world.gateWalls.visible=!1),this.world.barrier&&(this.world.barrier.visible=!1)),t&&(this.objectiveText="穿过面试通道",this.objectiveProgress="前往面试场",this.ui.setObjective(this.objectiveText,this.objectiveProgress),this.world.setObjective(new E(0,0,-10))),this.player.position.z<-13.4&&this.triggerBoss()):this.phase==="boss"?(this.arrowTarget=null,t&&(this.objectiveText=`击败 ${this.boss?.name??"Boss"}`,this.objectiveProgress="",this.ui.setObjective(this.objectiveText,""),this.world.setObjective(null))):this.phase==="relic"&&this.relic&&(this.arrowTarget=this.relic.position,t&&(this.objectiveText="拾取六根之一",this.objectiveProgress=this.chapter.relic?.name??"",this.ui.setObjective(this.objectiveText,this.objectiveProgress),this.world.setObjective(this.relic.position)))}openGate(){this.gateOpen||(this.gateOpen=!0,this.phase="explore",this.world.setGateOpen(),this.audio.sfx("gong"),this.ui.toast("面试通道已开放。请携带简历和遗书前往。","good"),this.objectiveText="穿过面试通道",this.objectiveProgress="前往面试场",this.ui.setObjective(this.objectiveText,this.objectiveProgress),this.world.setObjective(new E(0,0,-10)),this.arrowTarget=new E(0,0,-10),Se(this.save))}async triggerBoss(){if(this.bossTriggered||this.bossDefeated||!this.active)return;this.bossTriggered=!0,this.phase="bossIntro",this.input.setBlocked(!0),this.world.setObjective(null),this.world.showArenaSet(),this.boss=new cg(this),this.ui.showBossBar(this.boss.name,this.boss.title,1),this.audio.playMusic("boss"),this.audio.sfx("roar"),this.cameraRig.setFocus(this.boss.position.clone().add(new E(0,1.6,0)),.45);const t=this.generation;await mi(500),t===this.generation&&(await this.playDialogue(this.boss.def.intro,{title:`${this.boss.name} · ${this.boss.title}`,subtitle:this.chapter.location,cinematic:!0}),t===this.generation&&(this.cameraRig.clearFocus(),this.boss.engage(),this.phase="boss",this.input.setBlocked(!1),this.input.setEnabled(!0),this.objectiveText=`击败 ${this.boss.name}`,this.objectiveProgress="",this.ui.setObjective(this.objectiveText,""),this.ui.bossPhase(1),this.ui.toast("Boss 战开始。打不过可以跑，但跑不出这个项目。","boss")))}async onBossDefeated(t){if(this.bossDefeated)return;this.bossDefeated=!0,this.phase="bossOutro",this.input.setBlocked(!0),this.input.clearActions(),this.save.kills+=1,this.addCoins(120+this.chapterIndex*45);for(const i of[...this.enemies])i.summoned&&i.die(!0);this.ui.updateBossBar(0),this.slowMotion(.25,1.2),this.cameraRig.shake(.5,.8),this.ui.toast(`击败 ${t.name}。绩效暂定为 B+。`,"boss");const e=this.generation;if(await mi(1300),e===this.generation&&(this.ui.hideBossBar(),await this.playDialogue(this.chapter.boss.outro,{title:`${this.chapter.numeral} · 战毕`,subtitle:this.chapter.location,cinematic:!0}),e===this.generation)){if(!this.chapter.relic){if(this.phase="prologueClear",await this.ui.relicReveal(ug,this.chapter),e!==this.generation||(await this.playDialogue(this.chapter.completeLines,{title:`${this.chapter.numeral} · 完`,subtitle:this.chapter.location,cinematic:!0}),e!==this.generation))return;this.active=!1,this.input.setEnabled(!1),Se(this.save),this.app.chapterComplete(this.chapter);return}this.spawnRelic(),this.boss?.model&&(this.boss.model.visible=!1),this.phase="relic",this.input.setBlocked(!1),this.input.setEnabled(!0),this.updateObjectives(!0),this.audio.playMusic(this.chapter.isFinal?"ending":"field"),this.ui.toast("六根现世。去捡起来吧，别让保洁阿姨当垃圾收了。","relic")}}spawnRelic(){const t=Ym();t.position.set(0,0,-20.2),this.world.scene.add(t),this.relic=t,this.world.interactables.push({id:"relic",type:"relic",object:t,label:this.chapter.relic?.item??"六根",position:new E(0,1.1,-20.2),radius:3.4,prompt:"拾取",icon:"根"}),this.world.spawnSparks(new E(0,1.2,-20.2),16765818,30),this.world.spawnShockwave(new E(0,0,-20.2),16765818),this.arrowTarget=new E(0,0,-20.2),this.audio.sfx("relic")}async collectRelic(){if(this.relicCollecting||!this.relic)return;this.relicCollecting=!0,this.input.setBlocked(!0),this.ui.setHudVisible(!1),this.ui.hideBossBar();const t=this.chapter.relic;this.save.relics.includes(t.id)||this.save.relics.push(t.id),this.save.coins+=this.chapter.reward??200,Se(this.save),this.world.setObjective(null),this.arrowTarget=null,this.world.spawnSparks(new E(0,1.2,-20.2),16765818,36),this.audio.sfx("relic");const e=this.generation;if(await this.ui.relicReveal(t,this.chapter),e!==this.generation)return;this.relic.visible=!1,this.relic=null;const i=this.world.interactables.find(n=>n.type==="relic");if(i&&(i.used=!0),this.chapter.isFinal){const n=await this.ui.endingChoice(Dm,t);if(e!==this.generation)return;this.save.completed=!0,Se(this.save),this.app.finishEnding(n);return}await this.playDialogue(this.chapter.completeLines,{title:`${this.chapter.numeral} · 完`,subtitle:this.chapter.location,cinematic:!0}),e===this.generation&&(this.active=!1,this.input.setEnabled(!1),Se(this.save),this.app.chapterComplete(this.chapter))}damageEnemiesInArc(t,e,i,n,a,r={}){let o=0;for(const l of this.enemies){if(!l.alive||si(t,l.position)>e+l.radius)continue;const h=Math.atan2(l.position.x-t.x,l.position.z-t.z);if(i<Math.PI*1.9&&Math.abs(ao(a,h))>i/2)continue;const d=n*ke(.92,1.08);l.takeDamage(d,{heavy:r.type==="heavy",knockback:r.knockback,from:t,stagger:r.type!=="heavy"})&&(o++,this.player.stats.damageDealt+=d)}if(this.boss&&!this.boss.dead&&this.boss.engaged&&!this.boss.introLock&&si(t,this.boss.position)<=e+this.boss.radius){const c=Math.atan2(this.boss.position.x-t.x,this.boss.position.z-t.z);if(i>=Math.PI*1.9||Math.abs(ao(a,c))<=i/2+.2){const h=n*ke(.92,1.08);this.boss.takeDamage(h,{heavy:r.type==="heavy"})&&(o++,this.player.stats.damageDealt+=h)}}return o}immobilizeEnemies(t,e,i){let n=0;for(const a of this.enemies)a.alive&&si(t,a.position)<=e&&a.freeze(i)&&n++;return this.boss&&this.boss.engaged&&!this.boss.dead&&si(t,this.boss.position)<=e+1.2&&this.boss.freeze(i)&&n++,n}spawnProjectile(t){this.projectiles.push(new hg(this,t))}spawnMinion(t,e){const i=Math.random()<.35?"ranged":"melee",n={kind:e,role:i,x:t.x,z:t.z},a=new Yl(this,n,{summoned:!0});return a.aggro=!0,a.state="chase",this.enemies.push(a),this.world.spawnRing(t.clone(),10255812,.7),a}onEnemyKilled(t,e=!1){t.summoned||this.kills++,this.save.kills=(this.save.kills??0)+1,this.addCoins(t.coins),this.player.addFocus(.06),e||(this.audio.sfx("coin"),this.world.spawnSparks(t.position.clone().add(new E(0,1,0)),16765818,8)),this.ui&&this.ui.updateHud(this.hudPayload(),!0)}addCoins(t){this.save.coins=(this.save.coins??0)+t,this.ui.coinGain?.(t)}onPlayerDeath(){if(this.deathHandled)return;this.deathHandled=!0,this.active=!1,this.input.setEnabled(!1),this.input.setBlocked(!0),this.save.deaths=(this.save.deaths??0)+1,Se(this.save),this.audio.playMusic("none"),this.audio.sfx("death"),this.ui.setHudVisible(!1),this.ui.hideBossBar(),this.ui.clearInteractPrompt(),this.slowMotion(.2,1.4),this.cameraRig.shake(.5,.5);const t=this.generation;setTimeout(async()=>{if(t!==this.generation)return;const e=Gl[Math.floor(Math.random()*Gl.length)],i=await this.ui.deathScreen({quote:e,chapter:this.chapter,stats:{time:Math.round(this.time),kills:this.kills,damage:Math.round(this.player.stats.damageDealt),perfect:this.player.stats.perfectDodges}});t===this.generation&&(i==="retry"?this.app.retryChapter():this.app.returnToMenu())},1300)}hitStop(t){this.hitStopTimer=Math.max(this.hitStopTimer,t)}slowMotion(t,e){this.slowScale=t,this.slowTimer=e}hudPayload(){const t=this.player;return{hp:Math.max(0,Math.ceil(t.hp)),maxHp:Math.ceil(t.maxHp),stamina:Math.max(0,Math.ceil(t.stamina)),maxStamina:t.maxStamina,mana:Math.max(0,Math.ceil(t.mana)),maxMana:t.maxMana,focus:t.focus,maxFocus:t.maxFocus,gourd:t.gourd,maxGourd:t.maxGourd,coins:this.save.coins,relics:this.save.relics.length,chapter:this.chapter,objective:this.objectiveText,objectiveProgress:this.objectiveProgress,skillCd:t.cooldownSkill,healCd:t.cooldownHeal,time:this.time,challenge:this.chapter.isFinal?"终回":this.chapter.chapterLabel,playerX:t.position.x,playerZ:t.position.z,objectivePos:this.arrowTarget||this.world?.objectiveTarget,cameraYaw:this.cameraRig?.yaw??0}}updateHud(t=!1){this.hudTimer-=1/60,!(!t&&this.hudTimer>0)&&(this.hudTimer=.08,this.ui.updateHud(this.hudPayload(),t))}debugClearEnemies(){for(const t of[...this.enemies])t.summoned||(t.hp=0,t.die(!0),t.remove());this.kills=this.requiredKills,this.openGate()}debugTeleportToBoss(){this.gateOpen||this.openGate(),this.player.position.set(0,0,-13.6),!(this.phase==="boss"||this.phase==="bossIntro")&&(this.boss&&!this.boss.dead&&(this.boss.hp=Math.min(this.boss.hp,1)),this.boss&&this.boss.takeDamage(9999,{heavy:!0}))}debugKillBoss(){this.boss&&!this.boss.dead&&(this.boss.hp=1,this.boss.takeDamage(9999,{heavy:!0}))}debugSkipBossIntro(){this.boss&&this.boss.engage()}disposeCurrent(){if(this.world){this.player?.slashes?.forEach(t=>{this.world.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()});for(const t of this.projectiles)t.destroy();this.world.dispose()}this.world=null,this.player=null,this.cameraRig=null,this.enemies=[],this.projectiles=[],this.boss=null,this.relic=null,this.interactTarget=null,this.ui?.hideBossBar(),this.ui?.setHudVisible(!1),this.ui?.clearInteractPrompt()}dispose(){this.disposed=!0,this.generation++,this.active=!1,this.input?.setEnabled(!1),this.disposeCurrent(),this.audio?.playMusic("none")}}class mg{constructor(){this.settings=Cm(),this.save=Am(),this.currentMode="menu",this.currentMusic="menu",this.transitioning=!1,this.pauseOpen=!1,this.autoPaused=!1,this.canvas=document.getElementById("game-canvas"),this.boot=document.getElementById("boot"),this.fade=document.getElementById("fade-layer"),this.engine=new wm(this.canvas),this.input=new Sm(this.canvas),this.audio=new Em(this.settings),this.ui=new ig(this.settings),this.ui.attachInput(this.input),this.menuScene=new Jm,this.game=new pg(this),this.ui.setGame(this.game),this.menu=new tg({onSound:t=>{this.audio.init(),this.audio.setSettings(this.settings),t&&this.audio.sfx(t)},onFullscreen:()=>this.toggleFullscreen(),onStartNewGame:t=>this.startNewGame(t),onContinue:()=>this.continueGame(),onStartChapter:t=>this.startChapter(t),onSettingsChange:t=>this.applySettings(t),onResetSave:()=>this.resetProgress()},this.save,this.settings),this.bind(),this.applyQuality(),this.engine.setScene(this.menuScene.scene,this.menuScene.camera,t=>this.menuScene.update(t)),this.audio.setSettings(this.settings),this.audio.playMusic("menu"),this.input.onFirstGesture=()=>{this.audio.init(),this.audio.setSettings(this.settings),this.currentMusic&&this.audio.playMusic(this.currentMusic)},this.input.onPause=()=>this.togglePause(),this.input.setSensitivity(this.settings.cameraSensitivity),this.bootSequence()}bind(){window.addEventListener("houji-audio",e=>{this.audio.init(),this.audio.sfx(e.detail)}),this.ui.el.addEventListener("game-fullscreen",()=>this.toggleFullscreen()),window.addEventListener("resize",()=>this.applyQuality(!0)),window.addEventListener("beforeunload",()=>{this.game?.active&&(this.save.playTime=(this.save.playTime??0)+this.game.time),Se(this.save)}),document.addEventListener("visibilitychange",()=>{document.hidden?(this.audio.suspend(),this.game?.active&&!this.game.paused&&!this.game.dialogueOpen&&!this.game.shopOpen&&(this.game.setPaused(!0),this.autoPaused=!0)):(this.audio.resume(),this.autoPaused&&(this.autoPaused=!1,this.pauseOpen||this.togglePause(!0)))}),document.getElementById("rotate-anyway")?.addEventListener("click",()=>{document.body.classList.add("allow-portrait"),this.audio.sfx("confirm")})}async bootSequence(){const t=performance.now();try{await Promise.race([document.fonts.ready,mi(1800)])}catch{}const e=Math.max(0,900-(performance.now()-t));await mi(e),this.menu.show(),this.menu.updateSave(this.save),this.boot?.classList.add("hidden"),setTimeout(()=>this.boot?.remove(),1e3),this.audio.playMusic("menu"),this.engine.paused=!1;const i=new URLSearchParams(window.location.search);if(i.get("debug")==="1"&&i.get("chapter")){const n=i.get("chapter"),a=n==="prologue"?0:Number(n);setTimeout(()=>this.startChapter(Number.isFinite(a)?a:1,{debug:!0}),350)}}applyQuality(t=!1){const e=this.settings.quality==="auto"?To()?"medium":"high":this.settings.quality;(t||this.engine.quality!==e)&&this.engine.setQuality(e)}applySettings(t){this.settings=t,Rm(t),this.audio.setSettings(t),this.input.setSensitivity(t.cameraSensitivity),this.applyQuality(),this.ui.settings=t}toggleFullscreen(){this.audio.init(),this.audio.sfx("ui"),document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch?.(()=>{})}setFade(t){this.fade.classList.toggle("active",!!t)}async startNewGame(t){const e=Bl();Object.assign(this.save,e),this.save.difficulty=t||"normal",this.save.started=!0,this.save.chapter=0,this.save.unlocked=0,this.save.introSeen=!1,this.save.tutorialSeen=!1,Se(this.save),this.menu.updateSave(this.save),this.game.save=this.save,this.audio.playMusic("none"),await this.startRun(0,{newGame:!0,skipIntro:!1,chapterCard:!0})}async continueGame(){if(!this.save.started){this.menu.toast("还没有档案。先入职吧。");return}const t=Math.min(this.save.chapter??0,$e.length-1);await this.startRun(t,{skipIntro:!0,chapterCard:!0})}async startChapter(t,e={}){if(this.save.started||(this.save.started=!0,this.save.unlocked=Math.max(this.save.unlocked??0,0)),t>(this.save.unlocked??0)&&!e.debug){this.menu.toast("这一回还没解锁。先去把上一回干完。");return}this.save.chapter=t,Se(this.save),this.menu.updateSave(this.save),await this.startRun(t,{skipIntro:e.skipIntro??!1,chapterCard:!0})}async startRun(t,e={}){if(!this.transitioning){this.transitioning=!0;try{this.menu.closeScreen(),this.menu.hide(),this.ui.show();const i=$e[t],n=Nl(Hl);this.ui.showLoading(i,n),this.audio.playMusic("none"),this.currentMode="game",await mi(120),this.ui.setLoadingProgress(34),await mi(160),this.game.loadChapter(t),this.engine.paused=!1,this.ui.setLoadingProgress(67),await mi(420),this.ui.setLoadingProgress(88,Nl(Hl)),await mi(360),this.ui.setLoadingProgress(100),await mi(260),this.ui.hideLoading(),e.newGame&&!this.save.introSeen&&(this.save.introSeen=!0,Se(this.save),await this.ui.openingCinematic(Pm)),document.body.classList.add("in-game"),await mi(60),await this.game.begin({skipIntro:e.skipIntro,skipChapterCard:e.chapterCard===!1}),this.currentMusic="field",this.applyQuality()}finally{this.transitioning=!1}}}chapterComplete(t){this.save.relics.includes(t.relic?.id),this.save.playTime=(this.save.playTime??0)+this.game.time,this.save.unlocked=Math.max(this.save.unlocked??0,Math.min(t.index+1,$e.length-1)),t.index+1<$e.length&&(this.save.chapter=t.index+1),Se(this.save),this.menu.updateSave(this.save),this.audio.playMusic("ending"),this.ui.setHudVisible(!1),this.ui.chapterComplete(t,{relics:this.save.relics.length,coins:this.save.coins,time:this.game.time,deaths:this.save.deaths}).then(()=>{t.index+1<$e.length?this.startRun(t.index+1,{skipIntro:!1,chapterCard:!0}):this.returnToMenu()})}async finishEnding(t){this.save.playTime=(this.save.playTime??0)+this.game.time,this.save.endings.includes(t)||this.save.endings.push(t),this.save.completed=!0,Se(this.save),this.menu.updateSave(this.save),this.ui.setHudVisible(!1),this.ui.hideBossBar(),this.audio.playMusic("ending");const e=Lm[t];await this.ui.showEnding(e,{relics:this.save.relics.length,coins:this.save.coins,deaths:this.save.deaths,endings:this.save.endings.length}),await this.returnToMenu()}async retryChapter(){const t=Math.min(this.game.chapterIndex??0,$e.length-1);this.save.playTime=(this.save.playTime??0)+(this.game.time??0),this.save.chapter=t,Se(this.save),await this.startRun(t,{skipIntro:!0,chapterCard:!1})}async returnToMenu(){if(!this.transitioning){this.transitioning=!0;try{this.game?.active&&(this.save.playTime=(this.save.playTime??0)+this.game.time),Se(this.save),this.menu.updateSave(this.save),this.ui.resetToMenu(),this.game.dispose(),document.body.classList.remove("in-game","allow-portrait"),this.audio.playMusic("menu"),this.currentMode="menu",this.currentMusic="menu",this.engine.setScene(this.menuScene.scene,this.menuScene.camera,t=>this.menuScene.update(t)),this.applyQuality(!0),this.input.setEnabled(!1),this.input.setBlocked(!0),this.input.releaseLock(),this.menu.show(),this.menu.updateSave(this.save),this.setFade(!1)}finally{this.transitioning=!1}}}togglePause(t=!1){!this.game?.active||this.pauseOpen||this.transitioning||this.game.dialogueOpen||this.game.shopOpen||(this.pauseOpen=!0,this.game.setPaused(!0),this.audio.playMusic("none"),this.ui.pauseScreen({chapterLabel:this.game.chapter.chapterLabel,chapterName:this.game.chapter.name}).then(e=>{this.pauseOpen=!1,e==="resume"||!e?this.game.active&&(this.game.setPaused(!1),this.audio.playMusic(this.game.phase==="boss"?"boss":"field")):e==="menu"&&this.returnToMenu()}))}async resetProgress(){const t=Bl();Object.assign(this.save,t),this.game.save=this.save,this.menu.updateSave(this.save),this.menu.toast("档案已清空。你又是新猴子了。"),this.audio.sfx("gong")}}function gg(s){const t=document.getElementById("ui-root");if(!t)return;const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#07090a;color:#d9c8a4;font-family:serif;text-align:center;padding:30px;",e.innerHTML=`<div><div style="font-size:34px;margin-bottom:14px">猴子罢工了</div><div style="font-size:12px;line-height:2;color:#8d8778">${s}<br>请刷新页面，或者换一个支持 WebGL 的浏览器。</div></div>`,t.appendChild(e)}function Zl(){try{const s=new mg;window.__HOUJI__=s}catch(s){console.error(s),gg(String(s?.message||s));const t=document.getElementById("boot");t&&t.classList.add("hidden")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zl,{once:!0}):Zl();
