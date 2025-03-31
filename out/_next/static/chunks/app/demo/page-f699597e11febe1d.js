(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{17138:(e,s,l)=>{Promise.resolve().then(l.bind(l,36688))},36688:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>E});var a=l(95155),t=l(19373);async function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=new URLSearchParams;void 0!==e.isMain&&s.append("isMain",e.isMain.toString()),void 0!==e.isActive&&s.append("isActive",e.isActive.toString());let l=await fetch("/api/quests".concat(s.toString()?"?".concat(s.toString()):""));if(!l.ok)throw Error("Failed to fetch quests");return l.json()}var i=l(66766),d=l(53999);function c(e){let{imagePath:s,splashText:l,className:t}=e;return(0,a.jsxs)("div",{className:(0,d.cn)("relative w-full h-[50vh] -z-10",t),children:[(0,a.jsx)(i.default,{src:s,alt:"Hero background",fill:!0,className:"object-cover brightness-[.25]"}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background to-transparent"}),(0,a.jsx)("div",{className:"absolute inset-0 flex items-center pb-[15%] justify-center",children:(0,a.jsx)("h1",{className:"text-6xl font-bold text-slate-50",children:l})})]})}var n=l(97168),o=l(12115);let x=o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:s,className:(0,d.cn)("w-full caption-bottom text-sm",l),...t})})});x.displayName="Table",o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("thead",{ref:s,className:(0,d.cn)("[&_tr]:border-b",l),...t})}).displayName="TableHeader";let m=o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("tbody",{ref:s,className:(0,d.cn)("[&_tr:last-child]:border-0",l),...t})});m.displayName="TableBody",o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("tfoot",{ref:s,className:(0,d.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",l),...t})}).displayName="TableFooter";let u=o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("tr",{ref:s,className:(0,d.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",l),...t})});u.displayName="TableRow",o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("th",{ref:s,className:(0,d.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",l),...t})}).displayName="TableHead";let h=o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("td",{ref:s,className:(0,d.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",l),...t})});function f(e){let{quests:s}=e;return(0,a.jsxs)("div",{className:"max-w-7xl mx-auto w-full px-4",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Proposed Quests"}),(0,a.jsx)("div",{children:(0,a.jsx)(x,{children:(0,a.jsx)(m,{children:s.map(e=>(0,a.jsxs)(u,{className:"hover:bg-muted/50 border-b last:border-0",children:[(0,a.jsx)(h,{className:"font-medium py-4",children:e.title}),(0,a.jsx)(h,{className:"text-right py-4",children:(0,a.jsx)(n.$,{variant:"outline",size:"sm",className:"text-muted-foreground",disabled:!0,children:"Read More"})})]},e.id))})})})]})}h.displayName="TableCell",o.forwardRef((e,s)=>{let{className:l,...t}=e;return(0,a.jsx)("caption",{ref:s,className:(0,d.cn)("mt-4 text-sm text-muted-foreground",l),...t})}).displayName="TableCaption";var j=l(88482),p=l(41397);function g(e){let{className:s,...l}=e;return(0,a.jsx)("div",{className:(0,d.cn)("animate-pulse rounded-md bg-primary/10",s),...l})}function v(){return(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)(j.Zp,{className:"p-6 flex flex-col h-full",children:[(0,a.jsxs)("div",{className:"flex-grow flex flex-col gap-6",children:[(0,a.jsx)(g,{className:"h-8 w-2/3"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-8",children:[(0,a.jsxs)("div",{className:"md:w-3/5 space-y-2",children:[(0,a.jsx)(g,{className:"h-4 w-full"}),(0,a.jsx)(g,{className:"h-4 w-5/6"}),(0,a.jsx)(g,{className:"h-4 w-4/6"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:flex md:flex-col md:w-2/5 md:items-end",children:[(0,a.jsx)("div",{className:"col-span-1 w-full md:w-32",children:(0,a.jsx)(g,{className:"h-10 w-full"})}),(0,a.jsx)("div",{className:"col-span-1 w-full md:w-32",children:(0,a.jsx)(g,{className:"h-10 w-full"})})]})]})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)(g,{className:"h-4 w-full"})})]})})}var N=l(11037),b=l(13995),w=l(6874),y=l.n(w);function k(e){let{id:s}=e;return(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(v,{}),children:(0,a.jsx)(A,{id:s})})}function A(e){let{id:s}=e,{data:l,isLoading:r,error:d}=(0,t.I)({queryKey:["quest",s],queryFn:async()=>{let e=await fetch("/api/quests/".concat(s));if(!e.ok)throw Error("Failed to fetch quest");return e.json()}});if(r)return(0,a.jsx)(v,{});if(d)return(0,a.jsx)("div",{children:"Error loading quest"});if(!l)return null;let{title:c,summary:o,progress:x,isMain:m,link:u}=l,h=100===x;return(0,a.jsxs)("div",{className:"relative",children:[m&&(0,a.jsxs)("div",{className:"absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full",children:[(0,a.jsx)(i.default,{src:"/image/ether-guild-logo.png",alt:"EtherGuild Logo",width:16,height:16}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"Main Quest"})]}),(0,a.jsxs)(j.Zp,{className:"p-6 flex flex-col h-full border-slate-800/20 dark:border-slate-700/30",children:[(0,a.jsxs)("div",{className:"flex-grow flex flex-col gap-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:c}),m?(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-8",children:[(0,a.jsx)("p",{className:"text-slate-600 dark:text-slate-300",children:o}),(0,a.jsxs)("div",{className:"grid grid-cols-2 sm:flex sm:flex-row gap-4 md:ml-auto",children:[(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsx)(n.$,{variant:"outline",size:"lg",className:"w-full",asChild:!0,children:(0,a.jsx)(y(),{href:"/quest",children:"Read More"})})}),(0,a.jsx)("div",{className:"col-span-1",children:h?u?(0,a.jsx)(n.$,{variant:"default",size:"lg",className:"w-full",asChild:!0,children:(0,a.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"Complete! ↗"})}):(0,a.jsx)(n.$,{variant:"default",size:"lg",className:"w-full",disabled:!0,children:"Complete!"}):(0,a.jsx)("div",{className:"!w-full [&>div]:!w-full [&>div>div]:!w-full [&_button]:!w-full",children:(0,a.jsx)(N.A,{text:"Fund",call:b.A,contractAddress:l.contractAddress})})})]})]}):(0,a.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,a.jsx)("p",{className:"text-slate-600 dark:text-slate-300",children:o}),(0,a.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(n.$,{variant:"outline",size:"lg",className:"w-full text-muted-foreground",disabled:!0,children:"Read More"})}),(0,a.jsx)("div",{className:"w-full",children:h?u?(0,a.jsx)(n.$,{variant:"default",size:"lg",className:"w-full",asChild:!0,children:(0,a.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:"Complete!"})}):(0,a.jsx)(n.$,{variant:"default",size:"lg",className:"w-full",disabled:!0,children:"Complete!"}):(0,a.jsx)("div",{className:"!w-full [&>div]:!w-full [&>div>div]:!w-full [&_button]:!w-full",children:(0,a.jsx)(N.A,{text:"Fund",call:b.A,contractAddress:l.contractAddress})})})]})]})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)(p.k,{value:x,className:"h-4 bg-slate-200 dark:bg-slate-800",children:(0,a.jsx)("div",{className:"h-full bg-primary",style:{width:"".concat(x,"%")}})})})]})]})}function R(){return(0,a.jsxs)("div",{className:"max-w-7xl mx-auto w-full px-4",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Proposed Quests"}),(0,a.jsx)("div",{className:"space-y-4",children:["60%","75%","45%","80%","65%","70%","50%","85%","55%","40%"].map((e,s)=>(0,a.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-slate-800",children:[(0,a.jsx)(g,{className:"h-5 rounded",style:{width:e}}),(0,a.jsx)(g,{className:"h-8 w-24 rounded"})]},s))})]})}let q=[{house:"Bankless",social:"https://x.com/RyanSAdams",website:"https://www.bankless.com/",logo:"/image/bankless-logo.png",person:"Ryan Sean Adams"},{house:"The Daily Gwei",social:"https://x.com/sassal0x",website:"https://thedailygwei.substack.com/",logo:"/image/gwei-logo.png",person:"Anthony Sassano"},{house:"GrowthePie",social:"https://x.com/tobschcom",website:"https://www.growthepie.xyz/",logo:"/image/growthepie-logo.png",person:"Tobias Schreier"},{house:"Etherealize",social:"https://x.com/gphummer",website:"https://www.etherealize.io/",logo:"/image/etherealize-logo.png",person:"Grant Hummer"},{house:"Metal",social:"https://x.com/its_everdred",website:"https://metal.build/",logo:"/image/metal-logo.png",person:"Everdred"}];function z(){return(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-center",children:"Guild Houses"}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-4 md:gap-8",children:q.map((e,s)=>(0,a.jsx)("div",{className:"relative group",children:(0,a.jsx)(i.default,{src:e.logo,alt:"".concat(e.house," logo"),width:60,height:60,className:"rounded-full shadow-md transition-transform duration-300 hover:scale-110"})},s))})]})}var C=l(78975);function E(){let{data:e,isLoading:s,error:l}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.I)({queryKey:["quests",e],queryFn:()=>r(e)})}(),{setShowWallet:i,setShowNavbar:d}=(0,C.y)();if((0,o.useEffect)(()=>(i(!0),d(!0),()=>{i(!1),d(!0)}),[i,d]),s)return(0,a.jsx)("div",{children:"Loading..."});if(l)return(0,a.jsx)("div",{children:"Error loading quests"});if(!e)return null;let n=e.find(e=>e.isMain),x=e.filter(e=>e.isActive&&!e.isMain),m=e.filter(e=>!e.isActive);return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col",children:[(0,a.jsx)(c,{imagePath:"/image/ether-guild-hero.png",splashText:"Fund ETH Initiatives"}),(0,a.jsx)("div",{className:"-mt-[15%] relative z-10",children:n&&(0,a.jsx)("div",{className:"max-w-7xl mx-auto w-full px-4",children:(0,a.jsx)(k,{id:n.id},n.id)})}),(0,a.jsx)("div",{className:"mt-16",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto w-full px-4",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8",children:"Active Quests"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:x.map(e=>(0,a.jsx)(k,{id:e.id},e.id))})]})}),(0,a.jsx)("div",{className:"mt-16 mb-16",children:(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(R,{}),children:(0,a.jsx)(f,{quests:m})})}),(0,a.jsx)("div",{className:"container mx-auto px-4 py-4 mb-20",children:(0,a.jsx)(z,{})})]})}},78975:(e,s,l)=>{"use strict";l.d(s,{NavbarProvider:()=>i,y:()=>d});var a=l(95155),t=l(12115);let r=(0,t.createContext)(void 0);function i(e){let{children:s}=e,[l,i]=(0,t.useState)(!1),[d,c]=(0,t.useState)(!0);return(0,a.jsx)(r.Provider,{value:{showWallet:l,setShowWallet:i,showNavbar:d,setShowNavbar:c},children:s})}function d(){let e=(0,t.useContext)(r);if(void 0===e)throw Error("useNavbar must be used within a NavbarProvider");return e}}},e=>{var s=s=>e(e.s=s);e.O(0,[690,390,63,594,259,832,701,522,441,684,358],()=>s(17138)),_N_E=e.O()}]);