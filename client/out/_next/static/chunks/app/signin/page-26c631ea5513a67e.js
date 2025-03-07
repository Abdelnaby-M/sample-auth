(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{1330:(e,t,s)=>{Promise.resolve().then(s.bind(s,2269)),Promise.resolve().then(s.bind(s,3159)),Promise.resolve().then(s.bind(s,7764)),Promise.resolve().then(s.bind(s,5358)),Promise.resolve().then(s.t.bind(s,6874,23)),Promise.resolve().then(s.bind(s,9737)),Promise.resolve().then(s.bind(s,1541))},1541:(e,t,s)=>{"use strict";s.d(t,{A:()=>u,AuthProvider:()=>l});var a=s(5155),r=s(4422),o=s(5841),i=s(2115);let n=(0,i.createContext)(void 0);function l(e){let{children:t}=e,[s,l]=(0,i.useState)(null);(0,i.useEffect)(()=>{let e=localStorage.getItem("access_Token");!e||(null==s?void 0:s.email)||(async()=>{try{let t=await (0,r.Ni)();t.email&&t.name?l({token:e,email:t.email,name:t.name}):u()}catch(e){console.error("Failed to fetch user:",e),u()}})()},[s]);let u=()=>{l(null),localStorage.removeItem("access_Token"),o.A.success("Logged Out, Successfully")};return(0,a.jsx)(n.Provider,{value:{user:s,logout:u},children:t})}function u(){let e=(0,i.useContext)(n);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},3159:(e,t,s)=>{"use strict";s.d(t,{default:()=>f});var a=s(2115),r=s(2596),o=s(1112),i=s(5386),n=s(5438),l=s(3093),u=s(4750),d=s(4291),c=s(5155);let m=(0,d.A)(),h=(0,u.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:s}=e;return[t.root,t[`maxWidth${(0,n.A)(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),p=e=>(0,l.A)({props:e,name:"MuiContainer",defaultTheme:m}),v=(e,t)=>{let{classes:s,fixed:a,disableGutters:r,maxWidth:l}=e,u={root:["root",l&&`maxWidth${(0,n.A)(String(l))}`,a&&"fixed",r&&"disableGutters"]};return(0,i.A)(u,e=>(0,o.Ay)(t,e),s)};var g=s(9571),b=s(5881),x=s(4526);let f=function(e={}){let{createStyledComponent:t=h,useThemeProps:s=p,componentName:o="MuiContainer"}=e,i=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,s)=>{let a=e.breakpoints.values[s];return 0!==a&&(t[e.breakpoints.up(s)]={maxWidth:`${a}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return a.forwardRef(function(e,t){let a=s(e),{className:n,component:l="div",disableGutters:u=!1,fixed:d=!1,maxWidth:m="lg",classes:h,...p}=a,g={...a,component:l,disableGutters:u,fixed:d,maxWidth:m},b=v(g,o);return(0,c.jsx)(i,{as:l,ownerState:g,className:(0,r.A)(b.root,n),ref:t,...p})})}({createStyledComponent:(0,b.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:s}=e;return[t.root,t["maxWidth".concat((0,g.A)(String(s.maxWidth)))],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,x.b)({props:e,name:"MuiContainer"})})},4422:(e,t,s)=>{"use strict";s.d(t,{Ni:()=>l,Pm:()=>n,$5:()=>i});var a=s(3464),r=s(5841);let o=e=>new Promise(async(t,s)=>{var o;let{url:i,method:n,params:l,data:u,headers:d}=e;await a.A.request({baseURL:"http://localhost:3000/",url:i,headers:{Authorization:"Bearer ".concat(null===(o=localStorage)||void 0===o?void 0:o.getItem("access_Token")),...d},params:l,method:n,data:u}).then(e=>{200===e.status||201===e.status?t(e.data):s(e)}).catch(e=>{console.log(e.re),e.response?(r.A.error(e.response.data.message),s(e.response.data.message)):(r.A.error(e.message),s(e.message))})});async function i(e){var t=await o({url:"/auth/signup",method:"POST",data:e});return t.access_token&&localStorage.setItem("access_Token",t.access_token),t}async function n(e){var t=await o({url:"/auth/signin",method:"POST",data:e});return t.access_token&&localStorage.setItem("access_Token",t.access_token),t}async function l(){return await o({url:"/user/me",method:"GET"})}},5841:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(5182);s(501);class r{static success(e){a.options.toastClass="toastr",a.options.positionClass="toast-bottom-left",a.success(e)}static error(e){a.options.toastClass="toastr",a.options.positionClass="toast-bottom-left",a.error(e)}}},9737:(e,t,s)=>{"use strict";s.d(t,{SignInForm:()=>m});var a=s(5155),r=s(2115),o=s(5695),i=s(2269),n=s(3205),l=s(7569),u=s(7384),d=s(5857),c=s(4422);function m(){let e=(0,o.useRouter)(),[t,s]=(0,r.useState)({email:"",password:""}),[m,h]=(0,r.useState)(""),p=e=>{let{name:t,value:a}=e.target;s(e=>({...e,[t]:a}))},v=async s=>{if(s.preventDefault(),h(""),!t.email||!t.password){h("All fields are required");return}try{(await (0,c.Pm)({email:t.email,password:t.password})).access_token&&e.push("/")}catch(e){console.error(e),h("Invalid email or password")}};return(0,a.jsxs)(i.default,{component:"form",onSubmit:v,sx:{width:"100%"},children:[m&&(0,a.jsx)(n.A,{severity:"error",sx:{mb:2},children:m}),(0,a.jsxs)(l.A,{spacing:2,children:[(0,a.jsx)(u.A,{label:"Email",name:"email",type:"email",fullWidth:!0,value:t.email,onChange:p,required:!0,variant:"outlined"}),(0,a.jsx)(u.A,{label:"Password",name:"password",type:"password",fullWidth:!0,value:t.password,onChange:p,required:!0,variant:"outlined"}),(0,a.jsx)(d.A,{type:"submit",variant:"contained",fullWidth:!0,sx:{mt:2},children:"Sign In"})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[508,740,256,54,441,684,358],()=>t(1330)),_N_E=e.O()}]);