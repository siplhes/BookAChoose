import{_ as q,r as n,z,y as j,g as P,j as y,c as U,k as d,l as B,u as H,a as e,t as E,b as O,w as g,v as b,D as C,d as F,F as G,f as A,q as J,o as I,H as K,n as D,p as Q,i as W,e as X}from"./index-D3DjweKQ.js";const p=f=>(Q("data-v-51c31a32"),f=f(),W(),f),Y={class:"p-6 max-w-6xl min-w-lg mx-auto bg-slate-900/30 text-white min-h-fit"},Z={key:0},ee={class:"text-2xl font-bold mb-6 text-center"},te={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},oe={class:"mb-4"},ae=p(()=>e("label",{for:"title",class:"block text-lg font-medium"},"Title",-1)),se={class:"mb-4"},le=p(()=>e("label",{for:"author",class:"block text-lg font-medium"},"Author",-1)),ne={class:"mb-4"},re=p(()=>e("label",{for:"description",class:"block text-lg font-medium"},"Description",-1)),ie={class:"mb-4"},ue=p(()=>e("label",{for:"image",class:"block text-lg font-medium"},"Cover",-1)),ce=p(()=>e("label",{for:"toggle",class:"toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"},null,-1)),de=p(()=>e("label",{for:"toggle",class:"text-xs text-white"},"Toggle to switch between upload and enter URL.",-1)),pe=["src"],ve={__name:"book_edit",setup(f){const i=n(""),h=n(""),_=n(""),v=n(null),m=n(""),r=n(""),R=z(),k=j(),w=n(null),S=n(null),u=n(!1),x="http://localhost:3000/api",V=async()=>{try{const o=await A.get(`${x}/book/${k.params.bookId}`);i.value=o.data.title,h.value=o.data.author,_.value=o.data.description,v.value=o.data.image,m.value=o.data.image}catch{r.value="Error loading book"}},L=async()=>{var a,s;const o=X.get("accessToken");if(!o){r.value="Authorization token is missing.";return}let t=u.value?m.value:v.value;if(!u.value&&w.value){const l=await $(w.value);if(l)t=l;else throw new Error("File upload failed")}try{(await A.put(`${x}/book/update/${k.params.bookId}`,{title:i.value,author:h.value,description:_.value,image:t},{headers:{Authorization:`Bearer ${o}`}})).status===200&&(r.value="Book updated successfully",R.push(`/book/${k.params.bookId}`))}catch(l){console.error("Error updating book:",l),r.value="Error updating book: "+(((s=(a=l.response)==null?void 0:a.data)==null?void 0:s.message)||l.message)}},T=async()=>{J.value||R.push("/403")};async function $(o){if(!o)return r.value="Please select a file first",null;const t=new FormData;t.append("file",o);try{const s=await(await fetch(`${x}/api/upload`,{method:"POST",body:t})).json();return s.success?s.url:(r.value="File upload failed: "+s.message,null)}catch(a){return r.value="An error occurred: "+a.message,null}}function M(){u.value=!u.value,u.value?S.value=m.value:S.value=null}function N(o){const t=o.target.files[0];if(t){w.value=t;const a=new FileReader;a.onload=s=>{v.value=s.target.result},a.readAsDataURL(t)}}return P(()=>{T(),V()}),(o,t)=>{const a=y("Separator"),s=y("Btn"),l=y("ErrorMessage");return I(),U(G,null,[d(H(K),null,{default:B(()=>[e("title",null,`\r
            Edit `+E(i.value)+" | "+E(o.SITE_NAME)+`\r
        `,1)]),_:1}),e("main",Y,[i.value?(I(),U("div",Z,[e("h1",ee,"Edit "+E(i.value),1),d(a),e("form",{onSubmit:O(L,["prevent"]),class:"space-y-6"},[e("div",te,[e("div",null,[e("div",oe,[ae,g(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=c=>i.value=c),required:"",class:"input"},null,512),[[b,i.value]])]),e("div",se,[le,g(e("input",{type:"text",id:"author","onUpdate:modelValue":t[1]||(t[1]=c=>h.value=c),required:"",class:"input"},null,512),[[b,h.value]])]),e("div",ne,[re,g(e("textarea",{id:"description","onUpdate:modelValue":t[2]||(t[2]=c=>_.value=c),required:"",rows:"auto",class:"peer input resize-none h-fit min-h-[30vh]"},null,512),[[b,_.value]])]),e("div",ie,[ue,e("div",{class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[e("input",{type:"checkbox",name:"toggle",id:"toggle",onClick:M,class:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}),ce]),de,g(e("input",{type:"file",id:"image",onChange:N,class:"input"},null,544),[[C,!u.value]]),g(e("input",{type:"text",id:"imageURL","onUpdate:modelValue":t[3]||(t[3]=c=>m.value=c),class:"input"},null,512),[[b,m.value],[C,u.value]])])]),e("div",null,[v.value?(I(),U("img",{key:0,src:v.value,alt:"Book Image",class:"h-[25veh] aspect-auto mt-4 rounded-xs border border-gray-600 p-4"},null,8,pe)):F("",!0)])]),d(s,{variant:"yellow",class:"w-1/4 text-black justify-center"},{default:B(()=>[D("Update Book")]),_:1})],32)])):F("",!0),d(l,{message:r.value,type:"error",autoClose:!1,autoCloseDelay:5e3},null,8,["message"]),d(a),e("p",null,[d(s,{variant:"danger w-1/4",href:"/books"},{default:B(()=>[D("Back")]),_:1})])])],64)}}},ge=q(ve,[["__scopeId","data-v-51c31a32"]]);export{ge as default};
