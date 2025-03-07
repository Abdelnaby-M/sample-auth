(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1541:(e,t,s)=>{"use strict";s.d(t,{A:()=>l,AuthProvider:()=>c});var a=s(5155),n=s(4422),o=s(5841),r=s(2115);let i=(0,r.createContext)(void 0);function c(e){let{children:t}=e,[s,c]=(0,r.useState)(null);(0,r.useEffect)(()=>{let e=localStorage.getItem("access_Token");!e||(null==s?void 0:s.email)||(async()=>{try{let t=await (0,n.Ni)();t.email&&t.name?c({token:e,email:t.email,name:t.name}):l()}catch(e){console.error("Failed to fetch user:",e),l()}})()},[s]);let l=()=>{c(null),localStorage.removeItem("access_Token"),o.A.success("Logged Out, Successfully")};return(0,a.jsx)(i.Provider,{value:{user:s,logout:l},children:t})}function l(){let e=(0,r.useContext)(i);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},3133:(e,t,s)=>{"use strict";s.d(t,{HomeContent:()=>l});var a=s(5155),n=s(5695),o=s(7569),r=s(5358),i=s(5857),c=s(1541);function l(){let e=(0,n.useRouter)(),{user:t,logout:s}=(0,c.A)();return(0,a.jsx)("div",{className:"flex flex-col items-center space-y-4",children:t?(0,a.jsxs)(o.A,{spacing:2,alignItems:"center",children:[(0,a.jsxs)(r.default,{align:"center",children:["You are signed in as ",(0,a.jsx)("strong",{children:t.name})]}),(0,a.jsx)(i.A,{onClick:s,variant:"outlined",sx:{minWidth:200},children:"Logout"})]}):(0,a.jsxs)(o.A,{spacing:2,sx:{width:"100%"},children:[(0,a.jsx)(i.A,{onClick:()=>e.push("/signup"),variant:"contained",fullWidth:!0,children:"Sign Up"}),(0,a.jsx)(i.A,{onClick:()=>e.push("/signin"),variant:"outlined",fullWidth:!0,children:"Sign In"})]})})}},4422:(e,t,s)=>{"use strict";s.d(t,{Ni:()=>l,Pm:()=>c,$5:()=>i});var a=s(3464),n=s(5841);let o=s(9509).env.NEXT_PUBLIC_BACKEND,r=e=>new Promise(async(t,s)=>{var r;let{url:i,method:c,params:l,data:u,headers:d}=e;await a.A.request({baseURL:o,url:i,headers:{Authorization:"Bearer ".concat(null===(r=localStorage)||void 0===r?void 0:r.getItem("access_Token")),...d},params:l,method:c,data:u}).then(e=>{200===e.status||201===e.status?t(e.data):s(e)}).catch(e=>{console.log(e.re),e.response?(n.A.error(e.response.data.message),s(e.response.data.message)):(n.A.error(e.message),s(e.message))})});async function i(e){var t=await r({url:"/auth/signup",method:"POST",data:e});return t.access_token&&localStorage.setItem("access_Token",t.access_token),t}async function c(e){var t=await r({url:"/auth/signin",method:"POST",data:e});return t.access_token&&localStorage.setItem("access_Token",t.access_token),t}async function l(){return await r({url:"/user/me",method:"GET"})}},4596:(e,t,s)=>{Promise.resolve().then(s.bind(s,3133)),Promise.resolve().then(s.bind(s,1541))},5841:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var a=s(5182);s(501);class n{static success(e){a.options.toastClass="toastr",a.options.positionClass="toast-bottom-left",a.success(e)}static error(e){a.options.toastClass="toastr",a.options.positionClass="toast-bottom-left",a.error(e)}}}},e=>{var t=t=>e(e.s=t);e.O(0,[508,740,256,441,684,358],()=>t(4596)),_N_E=e.O()}]);