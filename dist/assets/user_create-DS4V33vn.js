import{r as t,c as p,a as e,w as i,v as d,b as _,t as b,d as f,o as m,e as w,f as y}from"./index-UL2W14HF.js";const h={class:"user-form"},U=e("h2",null,"Create New User",-1),x=e("label",{for:"name"},"Name:",-1),V=e("label",{for:"password"},"Password:",-1),k=e("label",{for:"email"},"Email:",-1),g=e("label",{for:"lvl"},"Level:",-1),q=e("button",{class:"btn",type:"submit"},"Create User",-1),B={key:0},C={__name:"user_create",setup(N){const l=t(""),o=t(""),r=t(""),n=t(""),u=t(""),c=async()=>{const v=w.get("accessToken");try{const a=await y.post("https://api-db-dbxo.onrender.com/api/users/create",{name:l.value,password:o.value,email:r.value,lvl:n.value},{headers:{Authorization:`Bearer ${v}`}});u.value=`User created successfully with ID: ${a.data.id}`,l.value="",o.value="",r.value="",n.value=""}catch(a){u.value=`Error: ${a.response.data.error||a.message}`}};return(v,a)=>(m(),p("div",h,[U,e("form",{onSubmit:_(c,["prevent"])},[e("div",null,[x,i(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>l.value=s),id:"name",required:""},null,512),[[d,l.value]])]),e("div",null,[V,i(e("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s),id:"password",required:""},null,512),[[d,o.value]])]),e("div",null,[k,i(e("input",{type:"email","onUpdate:modelValue":a[2]||(a[2]=s=>r.value=s),id:"email",required:""},null,512),[[d,r.value]])]),e("div",null,[g,i(e("input",{type:"number","onUpdate:modelValue":a[3]||(a[3]=s=>n.value=s),id:"lvl",required:""},null,512),[[d,n.value]])]),q],32),u.value?(m(),p("div",B,[e("p",null,b(u.value),1)])):f("",!0)]))}};export{C as default};
