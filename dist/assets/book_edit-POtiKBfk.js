import{_ as N,r as n,z as q,y as z,g as j,j as w,c as y,k as c,l as U,u as H,a as e,t as B,b as P,w as g,v as _,D as S,d as C,F as O,f as F,q as G,o as E,H as J,n as D,p as K,i as Q,e as W}from"./index-UL2W14HF.js";const p=f=>(K("data-v-841bc11f"),f=f(),Q(),f),X={class:"p-6 max-w-6xl min-w-lg mx-auto bg-slate-900/30 text-white min-h-fit"},Y={key:0},Z={class:"text-2xl font-bold mb-6 text-center"},ee={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},te={class:"mb-4"},oe=p(()=>e("label",{for:"title",class:"block text-lg font-medium"},"Title",-1)),ae={class:"mb-4"},se=p(()=>e("label",{for:"author",class:"block text-lg font-medium"},"Author",-1)),le={class:"mb-4"},ne=p(()=>e("label",{for:"description",class:"block text-lg font-medium"},"Description",-1)),re={class:"mb-4"},ie=p(()=>e("label",{for:"image",class:"block text-lg font-medium"},"Cover",-1)),ue=p(()=>e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"},null,-1)),de=p(()=>e("label",{for:"toggle",class:"text-xs text-white"},"Toggle to switch between upload and enter URL.",-1)),ce=["src"],pe={__name:"book_edit",setup(f){const i=n(""),b=n(""),h=n(""),v=n(null),m=n(""),r=n(""),I=q(),k=z(),x=n(null),R=n(null),u=n(!1),V=async()=>{try{const o=await F.get(`https://api-db-dbxo.onrender.com/api/book/${k.params.bookId}`);i.value=o.data.title,b.value=o.data.author,h.value=o.data.description,v.value=o.data.image,m.value=o.data.image}catch{r.value="Error loading book"}},A=async()=>{var a,s;const o=W.get("accessToken");if(!o){r.value="Authorization token is missing.";return}let t=u.value?m.value:v.value;if(!u.value&&x.value){const l=await $(x.value);if(l)t=l;else throw new Error("File upload failed")}try{(await F.put(`https://api-db-dbxo.onrender.com/api/book/update/${k.params.bookId}`,{title:i.value,author:b.value,description:h.value,image:t},{headers:{Authorization:`Bearer ${o}`}})).status===200&&(r.value="Book updated successfully",I.push(`/book/${k.params.bookId}`))}catch(l){console.error("Error updating book:",l),r.value="Error updating book: "+(((s=(a=l.response)==null?void 0:a.data)==null?void 0:s.message)||l.message)}},T=async()=>{G.value||I.push("/403")};async function $(o){if(!o)return r.value="Please select a file first",null;const t=new FormData;t.append("file",o);try{const s=await(await fetch("https://api-db-dbxo.onrender.com/api/api/upload",{method:"POST",body:t})).json();return s.success?s.url:(r.value="File upload failed: "+s.message,null)}catch(a){return r.value="An error occurred: "+a.message,null}}function L(){u.value=!u.value,u.value?R.value=m.value:R.value=null}function M(o){const t=o.target.files[0];if(t){x.value=t;const a=new FileReader;a.onload=s=>{v.value=s.target.result},a.readAsDataURL(t)}}return j(()=>{T(),V()}),(o,t)=>{const a=w("Separator"),s=w("Btn"),l=w("ErrorMessage");return E(),y(O,null,[c(H(J),null,{default:U(()=>[e("title",null,`\r
            Edit `+B(i.value)+" | "+B(o.SITE_NAME)+`\r
        `,1)]),_:1}),e("main",X,[i.value?(E(),y("div",Y,[e("h1",Z,"Edit "+B(i.value),1),c(a),e("form",{onSubmit:P(A,["prevent"]),class:"space-y-6"},[e("div",ee,[e("div",null,[e("div",te,[oe,g(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d),required:"",class:"input"},null,512),[[_,i.value]])]),e("div",ae,[se,g(e("input",{type:"text",id:"author","onUpdate:modelValue":t[1]||(t[1]=d=>b.value=d),required:"",class:"input"},null,512),[[_,b.value]])]),e("div",le,[ne,g(e("textarea",{id:"description","onUpdate:modelValue":t[2]||(t[2]=d=>h.value=d),required:"",rows:"auto",class:"peer input resize-none h-fit min-h-[30vh]"},null,512),[[_,h.value]])]),e("div",re,[ie,e("div",{class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[e("input",{type:"checkbox",name:"toggle",id:"toggle",onClick:L,class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}),ue]),de,g(e("input",{type:"file",id:"image",onChange:M,class:"input"},null,544),[[S,!u.value]]),g(e("input",{type:"text",id:"imageURL","onUpdate:modelValue":t[3]||(t[3]=d=>m.value=d),class:"input"},null,512),[[_,m.value],[S,u.value]])])]),e("div",null,[v.value?(E(),y("img",{key:0,src:v.value,alt:"Book Image",class:"h-[25veh] aspect-auto mt-4 rounded-xs border border-gray-600 p-4"},null,8,ce)):C("",!0)])]),c(s,{variant:"yellow",class:"w-1/4 text-black justify-center"},{default:U(()=>[D("Update Book")]),_:1})],32)])):C("",!0),c(l,{message:r.value,type:"error",autoClose:!1,autoCloseDelay:5e3},null,8,["message"]),c(a),e("p",null,[c(s,{variant:"danger w-1/4",href:"/books"},{default:U(()=>[D("Back")]),_:1})])])],64)}}},me=N(pe,[["__scopeId","data-v-841bc11f"]]);export{me as default};
