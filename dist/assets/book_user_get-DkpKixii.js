import{_ as l,y as u,r as p,g as h,c as s,a as n,t as g,u as m,F as k,h as f,f as v,o,k as b,E as x,p as y,i as B}from"./index-D3DjweKQ.js";const I=e=>(y("data-v-2830970b"),e=e(),B(),e),S={class:"p-6 max-w-6xl mx-auto"},w={class:"text-2xl font-bold text-gray-100 mb-6"},E={key:0},N={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},$={key:1},F=I(()=>n("p",{class:"text-gray-600"},"No books available or failed to fetch data.",-1)),L=[F],R={__name:"book_user_get",setup(e){const d=u(),a=p([]),_="http://localhost:3000/api",i=async()=>{const r=d.params.username;try{const{data:t}=await v.get(`${_}/${r}/books`);a.value=t}catch(t){console.error(`Error fetching books for user ${r}`,t)}};return h(()=>{i()}),(r,t)=>(o(),s("div",S,[n("h1",w,g(m(d).params.username)+"'s books",1),a.value.length>0?(o(),s("div",E,[n("div",N,[(o(!0),s(k,null,f(a.value,c=>(o(),s("div",{key:c.id,class:"p-2"},[b(x,{book:c,cover:c.image},null,8,["book","cover"])]))),128))])])):(o(),s("div",$,L))]))}},V=l(R,[["__scopeId","data-v-2830970b"]]);export{V as default};
