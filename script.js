const headerElement=document.querySelector("[data-header]");
const menuButtonElement=document.querySelector("[data-menu-button]");
const navigationElement=document.querySelector("[data-navigation]");
const yearElements=document.querySelectorAll("[data-year]");
const contactFormElement=document.querySelector("[data-contact-form]");
const revealElements=document.querySelectorAll(".reveal");

const updateHeaderState=()=>{if(headerElement){headerElement.classList.toggle("scrolled",window.scrollY>24);}};
const closeMenu=()=>{if(!menuButtonElement||!navigationElement){return;}menuButtonElement.setAttribute("aria-expanded","false");navigationElement.classList.remove("open");document.body.classList.remove("menu-open");};

if(menuButtonElement&&navigationElement){menuButtonElement.addEventListener("click",()=>{const isExpanded=menuButtonElement.getAttribute("aria-expanded")==="true";menuButtonElement.setAttribute("aria-expanded",String(!isExpanded));navigationElement.classList.toggle("open",!isExpanded);document.body.classList.toggle("menu-open",!isExpanded);});navigationElement.querySelectorAll("a").forEach((navigationLinkElement)=>{navigationLinkElement.addEventListener("click",closeMenu);});}

window.addEventListener("scroll",updateHeaderState,{passive:true});updateHeaderState();
yearElements.forEach((yearElement)=>{yearElement.textContent=String(new Date().getFullYear());});

if("IntersectionObserver" in window){const revealObserver=new IntersectionObserver((entries,observer)=>{entries.forEach((entry)=>{if(!entry.isIntersecting){return;}entry.target.classList.add("in-view");observer.unobserve(entry.target);});},{threshold:.12});revealElements.forEach((revealElement)=>{revealObserver.observe(revealElement);});}else{revealElements.forEach((revealElement)=>{revealElement.classList.add("in-view");});}

if(contactFormElement){contactFormElement.addEventListener("submit",(submitEvent)=>{submitEvent.preventDefault();const formData=new FormData(contactFormElement);const name=String(formData.get("name")||"");const email=String(formData.get("email")||"");const company=String(formData.get("company")||"");const contactType=String(formData.get("contactType")||"");const budget=String(formData.get("budget")||"");const goals=String(formData.get("goals")||"");const emailSubject=encodeURIComponent(`Manwa Partners inquiry - ${company||name}`);const emailBody=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany / channel: ${company}\nType: ${contactType}\nBudget: ${budget}\n\nGoals:\n${goals}`);window.location.href=`mailto:hello@manwapartners.com?subject=${emailSubject}&body=${emailBody}`;});}
