(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{1541:(e,t,a)=>{"use strict";a.d(t,{A:()=>c,AuthProvider:()=>i});var s=a(5155),r=a(4422),n=a(5841),o=a(2115);let l=(0,o.createContext)(void 0);function i(e){let{children:t}=e,[a,i]=(0,o.useState)(null);(0,o.useEffect)(()=>{let e=localStorage.getItem("access_Token");!e||(null==a?void 0:a.email)||(async()=>{try{let t=await (0,r.Ni)();t.email&&t.name?i({token:e,email:t.email,name:t.name}):c()}catch(e){console.error("Failed to fetch user:",e),c()}})()},[a]);let c=()=>{i(null),localStorage.removeItem("access_Token"),n.A.success("Logged Out, Successfully")};return(0,s.jsx)(l.Provider,{value:{user:a,logout:c},children:t})}function c(){let e=(0,o.useContext)(l);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},2851:(e,t,a)=>{"use strict";a.d(t,{SignUpForm:()=>m});var s=a(5155),r=a(2115),n=a(5695),o=a(2269),l=a(3205),i=a(7569),c=a(7384),u=a(5857),d=a(4422);function m(){let e=(0,n.useRouter)(),[t,a]=(0,r.useState)({name:"",email:"",password:""}),[m,h]=(0,r.useState)(""),v=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/,p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,f=e=>{let{name:t,value:s}=e.target;a(e=>({...e,[t]:s}))},g=async a=>{if(a.preventDefault(),h(""),!t.name||!t.email||!t.password){h("All fields are required");return}if(t.name.length<3){h("Name must be at least 3 character in length.");return}if(!p.test(t.email)){h("Please enter a valid email address.");return}if(!v.test(t.password)){h("Password must be at least 8 characters long, contain at least one letter, one number, and one special character.");return}try{(await (0,d.$5)({name:t.name,email:t.email,password:t.password})).access_token&&e.push("/")}catch(e){console.error(e),h("Failed to create an account")}};return(0,s.jsxs)(o.default,{component:"form",onSubmit:g,sx:{width:"100%"},children:[m&&(0,s.jsx)(l.A,{severity:"error",sx:{mb:2},children:m}),(0,s.jsxs)(i.A,{spacing:2,children:[(0,s.jsx)(c.A,{label:"Name",name:"name",fullWidth:!0,value:t.name,onChange:f,required:!0,variant:"outlined"}),(0,s.jsx)(c.A,{label:"Email",name:"email",type:"email",fullWidth:!0,value:t.email,onChange:f,required:!0,variant:"outlined",helperText:"Enter a valid email address"}),(0,s.jsx)(c.A,{label:"Password",name:"password",type:"password",fullWidth:!0,value:t.password,onChange:f,required:!0,variant:"outlined",helperText:"Must be at least 8 characters, contain letters, numbers, and special characters"}),(0,s.jsx)(u.A,{type:"submit",variant:"contained",fullWidth:!0,sx:{mt:2},children:"Sign Up"})]})]})}},4272:(e,t,a)=>{Promise.resolve().then(a.bind(a,7764)),Promise.resolve().then(a.bind(a,5358)),Promise.resolve().then(a.t.bind(a,6874,23)),Promise.resolve().then(a.bind(a,2851)),Promise.resolve().then(a.bind(a,1541))},4422:(e,t,a)=>{"use strict";a.d(t,{Ni:()=>c,Pm:()=>i,$5:()=>l});var s=a(3464),r=a(5841);let n=a(9509).env.NEXT_PUBLIC_BACKEND,o=e=>new Promise(async(t,a)=>{var o;let{url:l,method:i,params:c,data:u,headers:d}=e;await s.A.request({baseURL:n,url:l,headers:{Authorization:"Bearer ".concat(null===(o=localStorage)||void 0===o?void 0:o.getItem("access_Token")),...d},params:c,method:i,data:u}).then(e=>{200===e.status||201===e.status?t(e.data):a(e)}).catch(e=>{console.log(e.re),e.response?(r.A.error(e.response.data.message),a(e.response.data.message)):(r.A.error(e.message),a(e.message))})});async function l(e){var t=await o({url:"/auth/signup",method:"POST",data:e});return t.access_token&&localStorage.setItem("access_Token",t.access_token),t}async function i(e){var t=await o({url:"/auth/signin",method:"POST",data:e});return t.access_token&&localStorage.setItem("access_Token",t.access_token),t}async function c(){return await o({url:"/user/me",method:"GET"})}},5841:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var s=a(5182);a(501);class r{static success(e){s.options.toastClass="toastr",s.options.positionClass="toast-bottom-left",s.success(e)}static error(e){s.options.toastClass="toastr",s.options.positionClass="toast-bottom-left",s.error(e)}}}},e=>{var t=t=>e(e.s=t);e.O(0,[508,740,256,54,441,684,358],()=>t(4272)),_N_E=e.O()}]);