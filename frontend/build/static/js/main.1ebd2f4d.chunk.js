(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{242:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(32),o=n.n(s),i=(n(67),n(5)),r=n(3),l=n(4),u=(n(39),n(0));var j=function(e){var t=Object(r.f)(),n=Object(r.g)(),c=e.sPostsUpd,a=e.searchHandler,s=e.searchKw;return Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"cpart",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("a",{href:"/",className:"href",children:"myBlogg"})}),Object(u.jsx)("div",{className:"searchinput",children:Object(u.jsx)("input",{type:"text",placeholder:"Search...",value:e.searchKw,onBlur:function(){s.length<1&&(t.goBack(),a(""),c([]))},onChange:function(e){a(e.target.value),"/search"!==n.pathname&&s.length>1&&t.push("/search"),s.length>1?fetch("http://10.0.0.18:3001/search",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({searchKw:s})}).then((function(e){e.json().then((function(e){c(e.posts)}))})).catch((function(e){console.log(e)})):c([])}})})]})})},d=n(8),h=n.n(d),p=n(13),b=n(10),O=n(12),f=n.n(O);var m=function(e){var t=new Date(e.date),n=t.toLocaleString("en-GB",{day:"numeric",month:"long",year:"numeric"});return Object(u.jsxs)("div",{className:"post",children:[Object(u.jsx)("img",{src:e.image,alt:""}),Object(u.jsxs)("div",{className:"postdescription",children:[Object(u.jsx)("h5",{children:n}),Object(u.jsx)(i.b,{to:"/".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.toLocaleString("en-GB",{day:"2-digit"}),"/").concat(f.a.kebabCase(e.title)),children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)(i.b,{to:"/".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.toLocaleString("en-GB",{day:"2-digit"}),"/").concat(f.a.kebabCase(e.title)),children:Object(u.jsx)("h5",{className:"tbtm",children:e.description})}),Object(u.jsxs)("h5",{children:["Author: ",e.author]})]})]})};var x=function(e){return Object(u.jsx)("div",{className:"loadwrapper",children:Object(u.jsx)("div",{onClick:e.handler,className:"load",children:e.loadable?"Load more...":"No more posts."})})};var g=function(e){var t=e.allPosts,n=e.updatePosts,c=e.currentcount,s=e.updateCurrentCount,o=e.loadable,i=e.isLoadable,r=e.alreadyloaded,l=e.isAlrLoaded;return a.a.useEffect((function(){r||j()}),[]),a.a.useEffect((function(){s(t.length)}),[t]),Object(u.jsxs)("main",{className:"indexmain",children:[Object(u.jsx)("div",{className:"elements",children:t.map((function(e,t){var n=(e.description[0].toUpperCase()+e.description.slice(1)).slice(0,400),c=n.slice(0,n.lastIndexOf(" "))+"...";return Object(u.jsx)(m,{image:e.image,title:e.title,description:c,content:e.content,date:e.date,author:e.author},e._id)}))}),Object(u.jsx)(x,{handler:j,loadable:o})]});function j(){return d.apply(this,arguments)}function d(){return(d=Object(b.a)(h.a.mark((function e(){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&(a=c,s=c+5,fetch("http://10.0.0.18:3001/allposts",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({skip:a,limit:s})}).then((function(e){e.json().then((function(e){n([].concat(Object(p.a)(t),Object(p.a)(e.posts))),l(!0),e.length>s?i(!0):i(!1)}))})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}};var v=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("h2",{children:"This is my React.js blog!"}),Object(u.jsx)("h2",{children:"Norbert@2021"})]})},k=n(55);var N=function(e){var t=Object(r.f)(),n=Object(r.g)().pathname.slice(1),c=a.a.useState(""),s=Object(l.a)(c,2),o=s[0],i=s[1],j=a.a.useState(""),d=Object(l.a)(j,2),h=d[0],p=d[1],b=a.a.useState(""),O=Object(l.a)(b,2),f=O[0],m=O[1],x=a.a.useState(""),g=Object(l.a)(x,2),v=g[0],N=g[1],y=a.a.useState(""),S=Object(l.a)(y,2),T=S[0],C=S[1];return a.a.useEffect((function(){e.useProps?(i(e.image),p(e.title),m(e.content)):fetch("http://10.0.0.18:3001/"+n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){200===e.status?e.json().then((function(e){if(9===function(e){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(e)){i(e.image),p(e.title),m(e.content),N(e.author);var n=new Date(e.date).toLocaleString("en-GB",{day:"numeric",month:"long",year:"numeric"});C(n)}else t.push("/404")})):t.push("/404")})).catch((function(e){console.log(e)}))}),[]),Object(u.jsxs)("div",{className:"postcontent",children:[Object(u.jsx)("p",{onClick:t.goBack,className:"closebtn",children:"x"}),Object(u.jsx)("img",{src:o,alt:"",className:"mainimg"}),Object(u.jsx)("h1",{className:"posttitle",children:h}),e.useProps?"":Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("h5",{className:"dabar",children:["Author: ",v," | ",T]})}),Object(k.a)(f),e.useProps?"":Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h5",{onClick:t.goBack,className:"backbtn",children:"Go back"})})]})};var y=function(e){var t=e.sPosts,n=e.searchHandler,c=e.sPostsUpd,a=Object(r.f)();return Object(u.jsxs)("div",{className:"postcontent",children:[Object(u.jsx)("p",{onClick:function(){a.goBack(),n(""),c([])},className:"closebtn",children:"x"}),t.map((function(e,t){var n=new Date(e.date),c=n.toLocaleString("en-GB",{day:"numeric",month:"long",year:"numeric"});return Object(u.jsxs)("div",{className:"searchpd postdescription",children:[Object(u.jsx)(i.b,{to:"/".concat(n.getFullYear(),"/").concat(n.getMonth()+1,"/").concat(n.toLocaleString("en-GB",{day:"2-digit"}),"/").concat(f.a.kebabCase(e.title)),children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)("h5",{children:c}),Object(u.jsx)(i.b,{to:"/".concat(n.getFullYear(),"/").concat(n.getMonth()+1,"/").concat(n.toLocaleString("en-GB",{day:"2-digit"}),"/").concat(f.a.kebabCase(e.title)),children:Object(u.jsx)("h5",{className:"tbtm",children:e.description})}),Object(u.jsxs)("h5",{children:["Author: ",e.author]})]},e._id)}))]})};var S=function(){return Object(u.jsx)("main",{className:"notfoundmain",children:Object(u.jsx)("div",{className:"elements notfound",children:Object(u.jsx)("h1",{children:"404 - Not Found"})})})};var T=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=a.a.useState(0),o=Object(l.a)(s,2),i=o[0],d=o[1],h=a.a.useState(!0),p=Object(l.a)(h,2),b=p[0],O=p[1],f=a.a.useState(!1),m=Object(l.a)(f,2),x=m[0],k=m[1],T=a.a.useState(""),C=Object(l.a)(T,2),P=C[0],w=C[1],A=a.a.useState([]),E=Object(l.a)(A,2),I=E[0],L=E[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{sPostsUpd:L,searchHandler:w,searchKw:P}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",children:Object(u.jsx)(g,{allPosts:n,updatePosts:c,currentcount:i,updateCurrentCount:d,loadable:b,isLoadable:O,alreadyloaded:x,isAlrLoaded:k})}),Object(u.jsx)(r.a,{path:"/search/",children:Object(u.jsx)(y,{sPosts:I,searchHandler:w,sPostsUpd:L})}),Object(u.jsx)(r.a,{exact:!0,path:"/404",children:Object(u.jsx)(S,{})}),Object(u.jsx)(r.a,{path:"*",children:Object(u.jsx)(N,{useProps:!1})})]}),Object(u.jsx)(v,{})]})},C=(n(88),n(56));var P=function(){var e,t=Object(r.f)(),n=a.a.useState(""),c=Object(l.a)(n,2),s=c[0],o=c[1],i=a.a.useState(""),j=Object(l.a)(i,2),d=j[0],h=j[1],p=a.a.useState(),b=Object(l.a)(p,2),O=b[0],f=b[1];return-1!=="; ".concat(document.cookie).indexOf("Token")&&t.push("/panel/posts"),Object(u.jsx)("main",{className:"loginmain",children:Object(u.jsxs)("div",{className:"loginbox",children:[Object(u.jsx)("h1",{children:"myBlogg login!"}),Object(u.jsxs)("form",{method:"post",children:[Object(u.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"User",value:s,onChange:function(e){o(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Password",value:d,onChange:function(e){h(e.target.value)},required:!0}),Object(u.jsx)("p",{children:O}),Object(u.jsx)("button",{onClick:function(){clearTimeout(e),f(""),s.length<1||d.length<1?(f("Complete email and password!"),e=setTimeout((function(){f("")}),3e3)):fetch("http://10.0.0.18:3001/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:s,password:d})}).then((function(n){return n.json().then((function(c){if(401===n.status)f(c.error),e=setTimeout((function(){f("")}),3e3);else if(200===n.status){var a=Object(C.a)(c.token),s=new Date(1e3*a.exp);document.cookie="Token=".concat(c.token,"; Expires=").concat(s,"; path=/;"),t.push("/panel/posts")}else f("Server error! Check console!"),console.log(c)}))})).catch((function(e){console.log(e)}))},type:"button",children:"Login"})]})]})})};var w=function(){return Object(u.jsx)("div",{className:"indicator",children:"1"})};var A=function(e){return Object(u.jsxs)("button",{className:"btnnew",children:[e.name,e.indicator?Object(u.jsx)(w,{}):""]})};var E=function(){var e=Object(r.f)();return Object(u.jsx)("button",{onClick:function(){e.push("/");var t=new Date;document.cookie="Token=null; Expires=".concat(t,"; path=/;")},className:"logout",children:"Logout"})};var I=function(){var e=Object(r.h)();return Object(u.jsxs)("aside",{children:[Object(u.jsx)("h1",{children:"Admin Tools"}),Object(u.jsx)(i.b,{to:"".concat(e.url,"/posts"),children:Object(u.jsx)(A,{name:"Posts",indicator:!1})}),Object(u.jsx)(E,{})]})};var L=function(){return Object(u.jsx)("div",{className:"addbtn",children:"Add new post"})};var M=function(e){return Object(u.jsx)("h1",{children:e.title})};var B=function(){return Object(u.jsx)("h3",{children:"Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit mattis ullamcorper. Sed suscipit efficitur risus, et ornare lacus ultricies eu. Nam eleifend justo eu sagittis luctus. Vivamus eleifend hendrerit dapibus. Integer at molestie lacus. "})};var G=function(){return Object(u.jsx)("button",{className:"abtn",children:"Accept"})};var J=function(e){var t=Object(r.f)(),n=function(e){var n="; ".concat(document.cookie);if(-1===n.indexOf("Token"))t.push("/login");else{var c=n.split("; ".concat(e,"="));if(2===c.length)return c.pop().split(";").shift()}}("Token");return Object(u.jsx)("button",{onClick:function(){window.confirm("Are You sure? Your changes will not be save.")&&fetch("http://10.0.0.18:3001/"+e.postId,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Token:n}}).then((function(t){t.ok?e.getPosts(e.postId):e.updateMsg("Error")})).catch((function(t){console.log(t),e.updateMsg("Error, check console.")}))},className:"dbtn",children:"Delete"})};var D=function(){return Object(u.jsx)("button",{className:"ebtn",children:"Edit"})};var F=function(e){var t=Object(r.f)(),n=function(e){var n="; ".concat(document.cookie);if(-1===n.indexOf("Token"))t.push("/login");else{var c=n.split("; ".concat(e,"="));if(2===c.length)return c.pop().split(";").shift()}}("Token");return Object(u.jsx)("button",{onClick:function(){fetch("http://10.0.0.18:3001/"+e.postId,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Token:n},body:JSON.stringify({publish:!0})}).then((function(t){t.ok?e.uPubStatus(!0):e.updateMsg("Error")})).catch((function(t){console.log(t),e.updateMsg("Error, check console.")}))},className:"pbtn",children:"Publish"})};var U=function(e){var t=Object(r.f)(),n=function(e){var n="; ".concat(document.cookie);if(-1===n.indexOf("Token"))t.push("/login");else{var c=n.split("; ".concat(e,"="));if(2===c.length)return c.pop().split(";").shift()}}("Token");return Object(u.jsx)("button",{onClick:function(){fetch("http://10.0.0.18:3001/"+e.postId,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Token:n},body:JSON.stringify({publish:!1})}).then((function(t){t.ok?e.uPubStatus(!1):e.updateMsg("Error")})).catch((function(t){console.log(t),e.updateMsg("Error, check console.")}))},className:"upbtn",children:"Unpub"})};var Y=function(e){var t=Object(r.h)();return"post"===e.type?Object(u.jsxs)("div",{className:"buttons",children:[e.published?Object(u.jsx)(U,{uPubStatus:e.uPubStatus,postId:e.postId,updateMsg:e.updateMsg}):Object(u.jsx)(F,{uPubStatus:e.uPubStatus,postId:e.postId,updateMsg:e.updateMsg}),Object(u.jsx)(i.b,{to:"".concat(t.url,"/edit/").concat(e.postId),children:Object(u.jsx)(D,{})}),Object(u.jsx)(J,{getPosts:e.getPosts,postId:e.postId})]}):Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(G,{}),Object(u.jsx)(D,{}),Object(u.jsx)(J,{})]})};var H=function(e){return Object(u.jsx)("div",{className:"info",children:e.msg})};var K=function(){return Object(u.jsx)("p",{children:"Date"})};var _=function(e){var t=a.a.useState(""),n=Object(l.a)(t,2),c=n[0],s=n[1],o=a.a.useState(e.published),i=Object(l.a)(o,2),r=i[0],j=i[1];return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)(M,{title:e.title}),"comment"===e.type?Object(u.jsx)(B,{}):"","comment"===e.type?Object(u.jsx)(K,{}):"",Object(u.jsx)(H,{msg:c}),Object(u.jsx)(Y,{type:e.type,published:r,uPubStatus:j,getPosts:e.getPosts,postId:e.postId,updateMsg:s})]})};var R=function(e){return Object(u.jsx)("div",{onClick:e.handler,className:"loadmore",children:Object(u.jsx)("p",{children:e.loadable?"Load more results":"Nothing more to load"})})};var q=function(){var e=Object(r.h)(),t=Object(r.f)(),n=a.a.useState([]),c=Object(l.a)(n,2),s=c[0],o=c[1],j=a.a.useState(0),d=Object(l.a)(j,2),O=d[0],f=d[1],m=a.a.useState(!0),x=Object(l.a)(m,2),g=x[0],v=x[1],k="; ".concat(document.cookie).split("; Token=").pop().split(";").shift();return a.a.useEffect((function(){-1==="; ".concat(document.cookie).indexOf("Token")?t.push("/login"):N(0,5)}),[]),a.a.useEffect((function(){f(s.length)}),[s]),Object(u.jsxs)("main",{className:"panelmain",children:[Object(u.jsx)(i.b,{to:"".concat(e.url,"/add"),children:Object(u.jsx)(L,{})}),s.map((function(e,t){return Object(u.jsx)(_,{type:"post",postId:e._id,title:e.title,published:e.published,getPosts:S},e._id)})),Object(u.jsx)(R,{loadable:g,handler:N})]});function N(){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g&&(t=O,n=O+5,fetch("http://10.0.0.18:3001/posts",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Token:k},body:JSON.stringify({skip:t,limit:n})}).then((function(e){e.json().then((function(e){o([].concat(Object(p.a)(s),Object(p.a)(e.posts))),e.length>n?v(!0):v(!1)}))})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t=s.filter((function(t){return t._id!==e}));o(t)}},z=n(57),V=n.n(z);var Q=function(e){return Object(u.jsxs)("div",{className:"image-input",children:[Object(u.jsx)("input",{type:"file",name:"image",id:"image",accept:"image/*",onChange:function(e){return t.apply(this,arguments)}}),Object(u.jsx)("label",{htmlFor:"image",children:"Select image"})]});function t(){return(t=Object(b.a)(h.a.mark((function t(c){var a,s,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.target.files[0],s=c.target.files[0].name,t.next=4,n(a);case 4:o=t.sent,e.setImgName(s),e.getImg(o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(e){return c.apply(this,arguments)}function c(){return(c=Object(b.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,c){try{V.a.imageFileResizer(n,1920,1080,"JPEG",100,0,(function(e){t(e)}),"base64")}catch(a){c(a),e.setImgName("Image file compression error")}})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},W=n(58),X=n.n(W);n(162);var Z,$,ee=function(e){return Object(u.jsx)(X.a,{modules:{toolbar:{container:[[{size:["small",!1]}],[{header:1},{header:2}],["bold","italic","underline","strike"],["blockquote","code-block","link","image"],[{script:"sub"},{script:"super"}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}]]}},theme:"snow",value:e.content,onChange:e.setContent})},te=n(35),ne=n(59),ce=n(36),ae=Object(ce.b)(Z||(Z=Object(te.a)(["",""])),ne.flash),se=ce.a.div($||($=Object(te.a)(["animation: 3s "," infinite"])),ae);var oe=function(){return Object(u.jsx)(se,{className:"savingelement",children:Object(u.jsx)("h1",{children:"SAVING!"})})};var ie=function(e){return Object(u.jsx)("p",{children:e.status})};var re=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],h=Object(c.useState)(""),p=Object(l.a)(h,2),b=p[0],O=p[1],f=Object(c.useState)(0),m=Object(l.a)(f,2),x=m[0],g=m[1],v=Object(c.useState)(""),k=Object(l.a)(v,2),y=k[0],S=k[1],T=Object(c.useState)(!1),C=Object(l.a)(T,2),P=C[0],w=C[1],A=Object(c.useState)(!1),E=Object(l.a)(A,2),I=E[0],L=E[1],M=Object(c.useState)(""),B=Object(l.a)(M,2),G=B[0],J=B[1],D=Object(c.useState)(!1),F=Object(l.a)(D,2),U=F[0],Y=F[1],H=Object(c.useState)(""),K=Object(l.a)(H,2),_=K[0],R=K[1],q=Object(c.useState)("This is Read More text under post title."),z=Object(l.a)(q,2),V=z[0],W=z[1],X=Object(r.f)(),Z=Object(r.g)(),$=Object(c.useRef)(),te="; ".concat(document.cookie).split("; Token=").pop().split(";").shift();function ne(){I?J("..."):w(!0),!U&&b.length>1?fetch("http://10.0.0.18:3001/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Token:te},body:JSON.stringify({image:j,title:b,content:y,description:V})}).then((function(e){e.json().then((function(e){R(e.id),Y(!0),I&&(J("OK"),setTimeout((function(){J("")}),5e3))})),w(!1)})).catch((function(e){console.log(e),J("Error")})):U?(b.length<1?O("Add title"):O(b),fetch("http://10.0.0.18:3001/"+_,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Token:te},body:JSON.stringify({image:j,title:b.length<1?"Add title":b,content:y,description:V})}).then((function(e){e.json().then((function(e){R(e.id),I&&(J("OK"),setTimeout((function(){J("")}),5e3))})),w(!1)})).catch((function(e){console.log(e),J("ErroR")}))):(w(!1),alert("Draft needs to have title to be saved."))}return a.a.useEffect((function(){var e="; ".concat(document.cookie),t=e.split("; Token=");if(-1===e.indexOf("Token"))X.push("/login");else if(2===t.length&&-1!==Z.pathname.indexOf("/edit/")){var n=Z.pathname.slice(Z.pathname.indexOf("/edit/")+6,Z.pathname.indexOf("/edit/")+30),c=Z.pathname.slice(Z.pathname.indexOf("/edit/")+6);n.length<24||c.length>24?X.push("/panel/404"):fetch("http://10.0.0.18:3001/"+n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Token:te}}).then((function(e){e.json().then((function(e){null!==e?(R(e._id),S(e.content),O(e.title),d(e.image),W(e.description),Y(!0)):X.push("/panel/404")}))})).catch((function(e){console.log(e)}))}}),[]),a.a.useEffect((function(){$.current=ne}),[ne]),a.a.useEffect((function(){var e;if(I){e=setInterval((function(){$.current()}),2e4)}return function(){clearInterval(e)}}),[I]),Object(u.jsx)("main",{className:"panelmain",children:P?Object(u.jsx)(oe,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{className:"title",children:["Title:",b]}),Object(u.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"",value:b,onChange:function(e){O(e.target.value)}}),Object(u.jsxs)("h2",{className:"image",children:["Image: ",n]}),Object(u.jsx)(Q,{postid:"dontknowyet",setImgName:s,getImg:d}),Object(u.jsx)("div",{className:"qeditor",children:Object(u.jsx)(ee,{setContent:S,content:y})}),Object(u.jsx)("h2",{className:"image",children:"Post description:"}),Object(u.jsx)("textarea",{rows:"6",className:"pDesc",onChange:function(e){W(e.target.value)},value:V}),Object(u.jsxs)("div",{className:"buttons editorbuttons",children:[Object(u.jsx)("button",{className:"sbtn",onClick:ne,children:"Save"}),Object(u.jsx)("input",{type:"checkbox",name:"autosave",id:"asave",checked:I,onChange:function(){L(!I)}}),Object(u.jsx)("p",{children:"Autosave"}),Object(u.jsx)(ie,{status:G}),Object(u.jsx)("button",{className:"pbtn",onClick:function(){g(x?0:1)},children:"Post review"}),Object(u.jsx)("button",{className:"cbtn",onClick:function(){window.confirm("Are You sure? Unsaved changes will be lost.")&&X.push("/panel/posts")},children:"Cancel"})]}),x?Object(u.jsx)(N,{useProps:!0,title:b,image:j,content:y}):""]})})};n(242);var le=function(){var e=Object(r.f)(),t=Object(r.h)();return a.a.useEffect((function(){-1==="; ".concat(document.cookie).indexOf("Token")&&e.push("/login")}),[]),Object(u.jsxs)("div",{className:"mainwrapper",children:[Object(u.jsx)(I,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:t.url+"/posts/add",children:Object(u.jsx)(re,{})}),Object(u.jsx)(r.a,{path:t.url+"/posts/edit",children:Object(u.jsx)(re,{})}),Object(u.jsx)(r.a,{exact:!0,path:t.url+"/posts",children:Object(u.jsx)(q,{})}),Object(u.jsx)(r.a,{path:t.url+"/*",children:Object(u.jsx)(S,{})})]})]})};var ue=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/login",children:Object(u.jsx)(P,{})}),Object(u.jsx)(r.a,{path:"/panel",children:Object(u.jsx)(le,{})}),Object(u.jsx)(r.a,{path:"/",children:Object(u.jsx)(T,{})})]})})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ue,{})}),document.getElementById("root"))},39:function(e,t,n){},67:function(e,t,n){},88:function(e,t,n){}},[[243,1,2]]]);
//# sourceMappingURL=main.1ebd2f4d.chunk.js.map