import{_ as F,z as A,r as u,q as x,g as T,j as g,c as U,k as i,l as w,u as y,a as e,w as _,v,B as V,C as $,F as z,e as N,f as R,o as P,t as j,H as q,S as B,n as M,p as H,i as L}from"./index-D3DjweKQ.js";import{c as O}from"./checkAuth-Clbgpe5M.js";const c=d=>(H("data-v-0800741d"),d=d(),L(),d),W={class:"px-6 max-w-6xl w-full mx-auto h-full min-h-screen"},G=c(()=>e("h1",{class:"text-xl font-bold text-slate-100 mb-6"},"Create a New Book",-1)),J=c(()=>e("h2",{class:"text-slate-200"},"Welcome to the Book creation wizard",-1)),K={class:"grid grid-cols-2 space-x-12"},Q={class:"mb-4"},X=c(()=>e("label",{for:"title",class:"block text-sm font-medium text-white"},"Title",-1)),Y={class:"mb-4"},Z=c(()=>e("label",{for:"author",class:"block text-sm font-medium text-white"},"Author",-1)),ee={class:"mb-4"},te=c(()=>e("label",{for:"description",class:"block text-sm font-medium text-white"},"Description",-1)),oe={class:"mb-4"},se=c(()=>e("label",{for:"image",class:"block text-sm font-medium text-white"},"Image URL",-1)),ae={__name:"book_create",setup(d){const k="http://localhost:3000/api",C=A(),p=u(""),m=u(""),b=u(""),n=u(""),h=x.value.name,f=u(null),E=async o=>{var s,a;o.preventDefault();const t=N.get("accessToken");if(!t){n.value="Authorization token is missing. Please log in again.";return}let r=b.value;if(f.value){const l=await S(f.value);if(l)r=l;else throw new Error("Book upload failed")}try{const{data:l}=await R.post(`${k}/book/create`,{title:p.value,author:h,description:m.value,image:r},{headers:{Authorization:`Bearer ${t}`}});n.value=`Book created successfully with ID: ${l.id}`,I(),C.push(`/book/${l.id}`)}catch(l){console.error("Error creating book:",l),n.value=((a=(s=l.response)==null?void 0:s.data)==null?void 0:a.error)||"Error creating book"}},I=()=>{p.value="",m.value="",b.value=""};async function S(o){if(!o)return n.value="Please select a file first",null;const t=new FormData;t.append("file",o);try{const s=await(await fetch(`${k}/upload`,{method:"POST",body:t})).json();return s.success?s.url:(n.value="File upload failed: "+s.message,null)}catch(r){return n.value="An error occurred: "+r.message,null}}function D(o){f.value=o.target.files[0]}return T(()=>{O(x)}),(o,t)=>{const r=g("Btn"),s=g("Back");return P(),U(z,null,[i(y(q),null,{default:w(()=>[e("title",null,`\r
            Create book | `+j(o.SITE_NAME)+`\r
        `,1)]),_:1}),e("section",W,[e("form",{onSubmit:E},[G,J,i(B),e("div",K,[e("div",null,[e("div",Q,[X,_(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=a=>p.value=a),required:"",placeholder:"Enter the book title",class:"input transition duration-200"},null,512),[[v,p.value]])]),e("div",Y,[Z,_(e("input",{type:"text",id:"author","onUpdate:modelValue":t[1]||(t[1]=a=>V(h)?h.value=a:null),placeholder:"Enter the book author",class:"input cursor-not-allowed"},null,512),[[v,y(h)]])]),e("div",ee,[te,_(e("textarea",{id:"description","onUpdate:modelValue":t[2]||(t[2]=a=>m.value=a),required:"",placeholder:"Enter the book description",class:"input transit ion duration-200 resize-none h-32"},null,512),[[v,m.value]])])]),e("div",null,[e("div",oe,[se,e("input",{type:"file",id:"image",onChange:D,class:"input"},null,32)])])]),i(r,{class:"w-1/4 flex justify-center",variant:"yellow",type:"submit"},{default:w(()=>[M("Create Book")]),_:1})],32),i($,{message:n.value,type:"error",autoClose:!1,autoCloseDelay:5e3},null,8,["message"]),i(B),i(s)])],64)}}},re=F(ae,[["__scopeId","data-v-0800741d"]]);export{re as default};
