import{r as c,g,j as h,c as a,k as l,l as i,u as m,a as e,t as s,m as b,n as d,F as p,h as v,f as y,o,H as B,q as $,s as w,x as E}from"./index-BFBO9Br6.js";const S=e("meta",{name:"robots",content:"index,follow"},null,-1),C={class:"px-6 max-w-6xl mx-auto"},N={class:"text-slate-100"},j={class:"text-2xl font-bold mb-4 text-white text-start"},F={class:"flex mb-2"},L={key:1,class:"text-slate-100 text-xl"},V={key:0,class:"flex justify-center"},A={class:"text-red-500"},H={key:1,class:"flex justify-center items-center mx-auto"},I={class:"grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"},z={__name:"book_index",setup(M){const u=c([]),n=c(""),f=c(0),k="https://api-db-dbxo.onrender.com/api";return g(async()=>{try{const{data:t}=await y.get(`${k}/books`);u.value=t,f.value=t.length}catch(t){console.error("Error fetching books:",t),n.value=`Error fetching books: ${t.message}`}}),(t,U)=>{const x=h("Separator"),_=h("Btn");return o(),a(p,null,[l(m(B),null,{default:i(()=>[e("title",null,s(t.$t("books.title"))+" | "+s(t.SITE_NAME),1),S]),_:1}),e("div",C,[e("div",N,[e("h1",j,s(t.$t("books.title")),1),e("h2",null,s(t.$t("books.subtitle")),1)]),l(x),e("div",F,[m($)?(o(),b(_,{key:0,variant:"primary",href:"/book/create"},{default:i(()=>[d(s(t.$t("books.createBtn")),1)]),_:1})):(o(),a("p",L,[l(_,{class:"text-xl",href:"/register"},{default:i(()=>[d(s(t.$t("account.register")),1)]),_:1}),d(" "+s(t.$t("books.signUpLabel"))+". ",1)]))]),n.value?(o(),a("div",V,[e("p",A,s(n.value),1)])):(o(),a("div",H,[e("div",I,[(o(!0),a(p,null,v(u.value,r=>(o(),a("div",{key:r.id,class:"p-1"},[l(E,{book:r,style:w(`${r.image}`)},null,8,["book","style"])]))),128))])]))])],64)}}};export{z as default};
