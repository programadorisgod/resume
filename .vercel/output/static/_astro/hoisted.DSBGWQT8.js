const w=document.querySelector(".header-options-button-theme"),S=document.querySelector("body"),d={themeLight:"/assets/theme.svg",themeDark:"/assets/theme-dark.svg",personDark:"/assets/person-dark.svg",personLight:"/assets/person.svg",projectLight:"/assets/projects.svg",projectDark:"/assets/projects-dark.svg",historyLight:"/assets/history.svg",historyDark:"/assets/history-dark.svg",homeLight:"/assets/home.svg",homeDark:"/assets/home-dark.svg",apiLight:"/assets/api.svg",apiDark:"/assets/api-dark.svg",broDark:"/assets/bro-yellow.svg",broLight:"/assets/bro-blue.svg",arrowLight:"/assets/arrow-up-right.svg",arrowDark:"/assets/arrow-up-dark.svg"},i={dark:"dark",light:"light",theme:"theme"},D=["home","project","history","api"];let m=localStorage.getItem(i.theme)??i.light;S.dataset.theme=m;_({savedTheme:m});w.addEventListener("click",()=>{m=m===i.light?i.dark:i.light,S.dataset.theme=m,_({savedTheme:m}),localStorage.setItem(i.theme,m)});function _({savedTheme:t}){const s=document.querySelector(".layout-header"),e=document.querySelector(".sub-header-section-1-image-text img"),o=document.querySelectorAll(".aside-left-options img"),c=document.querySelector(".section-home-first-section-article-header img"),l=document.querySelectorAll(".arrow-image");o.forEach((u,r)=>{const p=`${D[r]}${t===i.dark?"Dark":"Light"}`;u.setAttribute("src",d[p])}),s.querySelector("button img").setAttribute("src",t===i.dark?d.themeDark:d.themeLight),e.setAttribute("src",t===i.dark?d.personDark:d.personLight),c.setAttribute("src",t===i.dark?d.broDark:d.broLight),l.forEach(u=>{u.setAttribute("src",t===i.dark?d.arrowDark:d.arrowLight)})}function j(t,s){t[0].classList.add("tab_focus"),t[0].querySelector(".point")?.classList.add("visible"),t.forEach((e,o)=>{e.addEventListener("click",()=>{const c=e.querySelector(".point");t.forEach(l=>{l.classList.remove("tab_focus"),l.querySelector(".point")?.classList.remove("visible")}),e.classList.add("tab_focus"),c?.classList.add("visible"),s.length&&s[o].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})})}function $(t,s,e){s.forEach((o,c)=>{o.addEventListener("click",l=>{l.stopPropagation(),t[c+1].classList.remove("visible","focus_tab"),c++;const a=c-1;e.length>0&&e[a].scrollIntoView({behavior:"smooth",block:"start",inline:"start"}),t.forEach((u,r)=>{const n=t[a].querySelector(".point"),p=t[r].querySelector(".point");t[r].classList.remove("tab_focus"),p?.classList.remove("visible"),t[a].classList.add("tab_focus"),n?.classList.add("visible")})})})}const q=document.querySelectorAll(".sub-header-section-2 div"),E=document.querySelectorAll(".main-content section"),A=document.querySelectorAll(".sub-header-section-2 .close_tab");j(q,E);$(q,A,E);const b=document.querySelectorAll(".aside-left-options div"),L=document.querySelectorAll(".main-content section"),h=document.querySelectorAll(".sub-header-section-2 div");b[0].classList.add("active");h[0].classList.add("tab_focus");h[0].querySelector(".point")?.classList.add("visible");b.forEach((t,s)=>{t.addEventListener("click",()=>{b.forEach(e=>e.classList.remove("active")),t.classList.add("active"),h[s].classList.add("visible"),C(h,s),L.length>0&&L[s].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})});function C(t,s){const e=t[s].querySelector(".point");t.forEach(o=>{o.classList.remove("tab_focus"),o.querySelector(".point")?.classList.remove("visible")}),t[s].classList.add("tab_focus"),e?.classList.add("visible")}const T=document.querySelector(".start-project"),f=document.querySelectorAll(".aside-left-options div"),v=document.querySelectorAll(".sub-header-section-2 div"),g=document.querySelectorAll(".main-content section");f[0].classList.add("active");v[0].classList.add("tab_focus");v[0].querySelector(".point")?.classList.add("visible");f.forEach((t,s)=>{T?.addEventListener("click",()=>{f.forEach(e=>e.classList.remove("active")),t.classList.add("active"),v[s].classList.add("visible"),I(v,s),g.length>0&&g[g.length-1].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})});function I(t,s){const e=t[s].querySelector(".point");t.forEach(o=>{o.classList.remove("tab_focus"),o.querySelector(".point")?.classList.remove("visible")}),t[s].classList.add("tab_focus"),e?.classList.add("visible")}const y=document.querySelector(".contact-form");function k(t,s=3e3){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.remove("hidden"),e.classList.add("visible"),setTimeout(()=>{e.classList.remove("visible"),e.classList.add("hidden")},s))}y&&y.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(t.target),e=Object.fromEntries(s.entries());try{const o=await fetch("http://localhost:4321/api/send-email.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!o.ok)throw new Error(`Error: ${o.status} ${o.statusText}`);await o.json(),y.reset(),k("¡Correo enviado con éxito!",5e3)}catch{k("Error al enviar el correo. Intenta de nuevo.",5e3)}});document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#editableTable")?.addEventListener("click",s=>{const e=s.target,o=e.querySelector("input"),c=document.querySelectorAll("tbody td"),a=Array.from(c).indexOf(e);if(e.tagName==="TD"&&a===1||a===3&&o===null){const u=e.textContent.trim(),r=document.createElement("input");r.type="text",r.value=u,e.textContent="",e.appendChild(r),r.focus(),r.addEventListener("blur",()=>{e.textContent=r.value}),r.addEventListener("keydown",n=>{n.key==="Enter"&&(e.textContent=r.value)})}})});const x=[{title:"Proyecto 1",description:"Descripción del proyecto 1.Descripción del proyecto 1. Descripción del proyecto 1. Descripción del proyecto 1.",link:"/proyecto1",tecnologies:["Svelte","Firebase"],img:"ua.jpg",category:"backend"},{title:"Proyecto 2",description:"Descripción del proyecto 2.",link:"/proyecto2",tecnologies:["Node.js","Express","Mongo DB"],img:"3.jpg",category:"backend"},{title:"Proyecto 3",description:"Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1Descripción del proyecto 1.",link:"/proyecto1",tecnologies:["Node.js","Express","Mongo DB","Svelte"],img:"ua.jpg",category:"frontend"},{title:"Proyecto 4",description:"Descripción del proyecto 2.",link:"/proyecto2",tecnologies:["Node.js","Express","Mongo DB","Svelte"],img:"web scrapping.jpg",category:"frontend"}],M=document.querySelector(".send");M?.addEventListener("click",()=>{const t=document.querySelectorAll("tbody  td"),s=document.querySelector(".search"),e=document.querySelector(".project-list"),o=t[0].textContent,c=t[1].textContent,l=`https://jerson-tapias/${o}/${c}`;s&&(s.value=l);const a=x.filter(r=>c?.toLocaleLowerCase().trim()==="all"?!0:c?r.category.toLocaleLowerCase()===c?.trim().toLocaleLowerCase():!0);e&&(e.innerHTML="",e.style.display="flex",e.innerHTML=`
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                <div class="wheel"></div>
                <div class="hamster">
                    <div class="hamster__body">
                        <div class="hamster__head">
                            <div class="hamster__ear"></div>
                            <div class="hamster__eye"></div>
                            <div class="hamster__nose"></div>
                        </div>
                        <div class="hamster__limb hamster__limb--fr"></div>
                        <div class="hamster__limb hamster__limb--fl"></div>
                        <div class="hamster__limb hamster__limb--br"></div>
                        <div class="hamster__limb hamster__limb--bl"></div>
                        <div class="hamster__tail"></div>
                    </div>
                </div>
                <div class="spoke"></div>
            </div>
        `,u(a));function u(r){setTimeout(()=>{e&&(e.style.display="",e.innerHTML="",r.forEach(n=>{e.innerHTML+=`
                        <article class="card-item">
                                <header>
                                    <img
                                        src=${`/assets/${encodeURIComponent(n.img)}`}
                                        alt=${`Image project:${n.title}`}
                                        
                                        class="project-image"
                                    />
                                </header>

                                <div class="project-content">
                                    <h4 class="project-title">
                                        ${n.title}
                                        <span>
                                            <img
                                                src=/assets/arrow-up-right.svg
                                                alt=Image arrow
                                                loading="lazy"
                                                class="arrow-image"
                                            />
                                        </span>
                                    </h4>
                                    <p class="project-description">
                                        ${n.description}
                                    </p>
                                    <footer class="project-tags">
                                        ${n.tecnologies.map(p=>`<span>${p}</span>`).join("")}
                                    </footer>
                                </div>
                            </article>
                    `}))},500)}});
