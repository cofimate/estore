(this.webpackJsonpestore=this.webpackJsonpestore||[]).push([[0],{55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(32),i=n.n(c),s=n(18),l=n(8),o=n(41),u=n(19),d=n(34),b=n(42),p=n.n(b),m=n(43),h=n.n(m),j=n(5),O="SET_CURRENT_USER",g={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},x=n(44),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(x.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},w=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case v.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:w(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},E={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},T={key:"root",storage:h.a,whitelist:["cart"]},S=Object(u.c)({user:f,cart:N,directory:C,shop:U}),M=Object(d.a)(T,S),A=[p.a],B=Object(u.d)(M,u.a.apply(void 0,A)),R=Object(d.b)(B),_=(n(55),n(16)),D=n.n(_),P=n(20),G=n(26),q=n(27),W=n(29),H=n(28),J=n(9),L=n(7),z=(n(57),n(21)),V=Object(L.a)([function(e){return e.directory}],(function(e){return e.sections})),F=(n(58),n(1)),X=Object(J.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,a=e.history,c=e.linkUrl,i=e.match;return Object(F.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(c))},children:[Object(F.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(F.jsxs)("div",{className:"content",children:[Object(F.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(F.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),Y=(n(61),Object(L.b)({sections:V})),K=Object(l.b)(Y)((function(e){var t=e.sections;return Object(F.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(z.a)(e,["id"]);return Object(F.jsx)(X,Object(j.a)({},n),t)}))})})),Q=(n(62),function(){return Object(F.jsx)("div",{className:"homepage",children:Object(F.jsx)(K,{})})}),Z=(n(63),function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,a=Object(z.a)(e,["children","isGoogleSignIn","inverted"]);return Object(F.jsx)("button",Object(j.a)(Object(j.a)({className:"".concat(r?"inverted":""," \n        ").concat(n?"google-sign-in":"","\n         custom-button")},a),{},{children:t}))}),$=function(){return{type:v.TOGGLE_CART_HIDDEN}},ee=function(e){return{type:v.ADD_ITEM,payload:e}},te=(n(64),Object(l.b)(null,(function(e){return{addItem:function(t){return e(ee(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,a=t.price,c=t.imageUrl;return Object(F.jsxs)("div",{className:"collection-item",children:[Object(F.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(F.jsxs)("div",{className:"collection-footer",children:[Object(F.jsxs)("span",{className:"name",children:[r," "]}),Object(F.jsxs)("span",{className:"price",children:[a," "]})]}),Object(F.jsx)(Z,{onClick:function(){return n(t)},inverted:!0,children:"Add to Cart"})]})}))),ne=(n(65),function(e){var t=e.title,n=e.items;return Object(F.jsxs)("div",{className:"collection-preview",children:[Object(F.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(F.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(F.jsx)(te,{item:e},e.id)}))})]})}),re=Object(L.a)([function(e){return e.shop}],(function(e){return e.collections})),ae=Object(L.a)([re],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),ce=(n(66),Object(L.b)({collections:ae})),ie=Object(l.b)(ce)((function(e){var t=e.collections;return Object(F.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(z.a)(e,["id"]);return Object(F.jsx)(ne,Object(j.a)({},n),t)}))})})),se=(n(67),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(L.a)([re],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection;console.log(t);var n=t.title,r=t.items;return Object(F.jsxs)("div",{className:"collection-page",children:[Object(F.jsx)("h2",{className:"title",children:n}),Object(F.jsx)("div",{className:"items",children:r.map((function(e){return Object(F.jsx)(te,{item:e},e.id)}))})]})}))),le=function(e){var t=e.match;return Object(F.jsxs)("div",{className:"shop-page",children:[Object(F.jsx)(J.b,{exact:!0,path:"".concat(t.path),component:ie}),Object(F.jsx)(J.b,{path:"".concat(t.path,"/:collectionId"),component:se})]})},oe=n(25),ue=(n(68),function(e){var t=e.handleChange,n=e.label,r=Object(z.a)(e,["handleChange","label"]);return Object(F.jsxs)("div",{className:"group",children:[Object(F.jsx)("input",Object(j.a)({className:"form-input",onChange:t},r)),n?Object(F.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})}),de=n(30),be=(n(82),n(70),function(){var e=Object(P.a)(D.a.mark((function e(t,n){var r,a,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=me.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(j.a)({displayName:a,email:c,createAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());de.a.initializeApp({apiKey:"AIzaSyDsjoXI_Z2qaMYycttaxdaOqTMsTmdWm-w",authDomain:"estore-793e1.firebaseapp.com",projectId:"estore-793e1",storageBucket:"estore-793e1.appspot.com",messagingSenderId:"1081469408485",appId:"1:1081469408485:web:291929f79f79209ac3700c",measurementId:"G-N46C0BYJ3H"});var pe=de.a.auth(),me=de.a.firestore(),he=new de.a.auth.GoogleAuthProvider;he.setCustomParameters({prompt:"select_account"});var je=function(){return pe.signInWithPopup(he)},Oe=(de.a,n(72),function(e){Object(W.a)(n,e);var t=Object(H.a)(n);function n(e){var r;return Object(G.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(P.a)(D.a.mark((function e(t){var n,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,a=n.email,c=n.password,e.prev=2,e.next=5,pe.signInWithEmailAndPassword(a,c);case 5:r.setState({email:" ",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(oe.a)({},a,n))},r.state={email:"",password:""},r}return Object(q.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("div",{className:"sign-in",children:[Object(F.jsx)("h2",{children:" I already have an account"}),Object(F.jsx)("span",{children:"Signin with your email and password"}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(F.jsx)(ue,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(F.jsx)(ue,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(F.jsxs)("div",{className:"buttons",children:[Object(F.jsx)(Z,{type:"submit",children:"Sign In"}),Object(F.jsx)(Z,{onClick:je,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(a.a.Component)),ge=(n(73),function(e){Object(W.a)(n,e);var t=Object(H.a)(n);function n(){var e;return Object(G.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(P.a)(D.a.mark((function t(n){var r,a,c,i,s,l,o;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,a=r.displayName,c=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,pe.createUserWithEmailAndPassword(c,i);case 8:return l=t.sent,o=l.user,t.next=12,be(o,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(oe.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(q.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,a=e.confirmPassword;return Object(F.jsxs)("div",{className:"sign-up",children:[Object(F.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(F.jsx)("span",{children:"Sign up with your email and password"}),Object(F.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(F.jsx)(ue,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(F.jsx)(ue,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(F.jsx)(ue,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(F.jsx)(ue,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(F.jsx)(Z,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),fe=(n(74),function(){return Object(F.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(F.jsx)(Oe,{}),Object(F.jsx)(ge,{})]})}),ve=(n(75),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(ee(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,a=e.removeItem,c=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(F.jsxs)("div",{className:"checkout-item",children:[Object(F.jsx)("div",{className:"image-container",children:Object(F.jsx)("img",{src:i,alt:"item"})}),Object(F.jsx)("span",{className:"name",children:c}),Object(F.jsxs)("span",{className:"quantity",children:[Object(F.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(F.jsx)("span",{className:"value",children:l}),Object(F.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(F.jsx)("span",{className:"price",children:s}),Object(F.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),xe=function(e){return e.cart},ye=Object(L.a)([xe],(function(e){return e.cartItems})),we=Object(L.a)([xe],(function(e){return e.hidden})),ke=Object(L.a)([ye],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ne=Object(L.a)([ye],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ee=(n(76),Object(L.b)({cartItems:ye,total:Ne})),Ce=Object(l.b)(Ee)((function(e){var t=e.cartItems,n=e.total;return Object(F.jsxs)("div",{className:"checkout-page",children:[Object(F.jsxs)("div",{className:"checkout-header",children:[Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Product"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Description"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Quantity"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Prize"})}),Object(F.jsx)("div",{className:"header-block",children:Object(F.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(F.jsx)(ve,{cartItem:e},e.id)})),Object(F.jsx)("div",{className:"total",children:Object(F.jsxs)("span",{children:["TOTAL: $",n]})})]})}));function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Te=r.createElement("g",null),Se=r.createElement("g",null),Me=r.createElement("g",null),Ae=r.createElement("g",null),Be=r.createElement("g",null),Re=r.createElement("g",null),_e=r.createElement("g",null),De=r.createElement("g",null),Pe=r.createElement("g",null),Ge=r.createElement("g",null),qe=r.createElement("g",null),We=r.createElement("g",null),He=r.createElement("g",null),Je=r.createElement("g",null),Le=r.createElement("g",null);function ze(e,t){var n=e.title,a=e.titleId,c=Ue(e,["title","titleId"]);return r.createElement("svg",Ie({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Te,Se,Me,Ae,Be,Re,_e,De,Pe,Ge,qe,We,He,Je,Le)}var Ve=r.forwardRef(ze),Fe=(n.p,n(77),Object(L.b)({itemCount:ke})),Xe=Object(l.b)(Fe,(function(e){return{toggleCartHidden:function(){return e($())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(F.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(F.jsx)(Ve,{className:"shopping-icon"}),Object(F.jsx)("span",{class:"item-count",children:n})]})})),Ye=(n(78),function(e){var t=e.item,n=t.imageUrl,r=t.price,a=t.name,c=t.quantity;return Object(F.jsxs)("div",{className:"cart-item",children:[Object(F.jsx)("img",{src:n,alt:"item"}),Object(F.jsxs)("div",{className:"item-details",children:[Object(F.jsx)("span",{className:"name",children:a}),Object(F.jsxs)("span",{className:"price",children:[c," X $",r]})]})]})}),Ke=(n(79),Object(L.b)({cartItems:ye})),Qe=Object(J.g)(Object(l.b)(Ke,null)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(F.jsxs)("div",{className:"cart-dropdown",children:[Object(F.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(F.jsx)(Ye,{item:e},e.id)})):Object(F.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(F.jsx)(Z,{onClick:function(){n.push("/checkout"),r($())},children:"GO TO CHECKOUT"})]})}))),Ze=Object(L.a)([function(e){return e.user}],(function(e){return e.currentUser}));function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function et(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var tt=r.createElement("desc",null,"Created with Sketch."),nt=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function rt(e,t){var n=e.title,a=e.titleId,c=et(e,["title","titleId"]);return r.createElement("svg",$e({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"Group"):n?r.createElement("title",{id:a},n):null,tt,nt)}var at=r.forwardRef(rt),ct=(n.p,n(80),Object(L.b)({currentUser:Ze,hidden:we})),it=Object(l.b)(ct)((function(e){var t=e.currentUser,n=e.hidden;return Object(F.jsxs)("div",{className:"header",children:[Object(F.jsx)(s.b,{className:"logo-container",to:"/",children:Object(F.jsx)(at,{className:"logo"})}),Object(F.jsxs)("div",{className:"options",children:[Object(F.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(F.jsx)(s.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(F.jsx)("div",{className:"option",onClick:function(){return pe.signOut()},children:"SIGN OUT"}):Object(F.jsx)(s.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(F.jsx)(Xe,{})]}),n?null:Object(F.jsx)(Qe,{})]})})),st=function(e){Object(W.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(G.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=pe.onAuthStateChanged(function(){var t=Object(P.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,be(n);case 3:t.sent.onSnapshot((function(t){e(Object(j.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{children:[Object(F.jsx)(it,{}),Object(F.jsxs)(J.d,{children:[Object(F.jsx)(J.b,{exact:!0,path:"/",component:Q}),Object(F.jsx)(J.b,{exact:!0,path:"/estore",component:Q}),Object(F.jsx)(J.b,{path:"/shop",component:le}),Object(F.jsx)(J.b,{exact:!0,path:"/checkout",component:Ce}),Object(F.jsx)(J.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(F.jsx)(J.a,{to:"/estore"}):Object(F.jsx)(fe,{})}})]})]})}}]),n}(a.a.Component),lt=Object(L.b)({currentUser:Ze}),ot=Object(l.b)(lt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(st);i.a.render(Object(F.jsx)(l.a,{store:B,children:Object(F.jsx)(s.a,{children:Object(F.jsx)(o.a,{persistor:R,children:Object(F.jsx)(ot,{})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.a7686fb9.chunk.js.map