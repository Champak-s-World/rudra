async function include(id, file){
  const el=document.getElementById(id); if(!el) return;
  try{const r=await fetch(file,{cache:'no-cache'}); el.innerHTML=await r.text(); initMenu(); initLuxurySlider(); initWhatsAppForm(); initPackageButtons();}
  catch(e){console.warn('Include failed:',file,e)}
}
function initMenu(){
  const btn=document.querySelector('.menu-toggle'); const menu=document.querySelector('.menu');
  if(btn&&menu&&!btn.dataset.ready){
    btn.dataset.ready='1';
    btn.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});
  }
}
function initLuxurySlider(){
  const slider=document.querySelector('.lux-slider'); if(!slider||slider.dataset.ready) return; slider.dataset.ready='1';
  const slides=[...slider.querySelectorAll('.lux-slide')];
  const dots=slider.querySelector('.lux-dots');
  const thumbs=[...slider.querySelectorAll('.lux-thumbs button')];
  let index=0, timer=null, delay=7000, startX=0;
  slides.forEach((slide,i)=>{slide.setAttribute('role','group');slide.setAttribute('aria-roledescription','slide');slide.setAttribute('aria-label',`${i+1} of ${slides.length}: ${slide.dataset.title||'Featured tour'}`)});
  slides.forEach((_,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Show slide '+(i+1));b.addEventListener('click',()=>go(i,true));dots.appendChild(b);});
  const dotButtons=[...dots.querySelectorAll('button')];
  function paint(){
    slides.forEach((s,i)=>s.classList.toggle('is-active',i===index));
    dotButtons.forEach((b,i)=>b.classList.toggle('is-active',i===index));
    thumbs.forEach((b,i)=>b.classList.toggle('is-active',i===index));
    const progress=slider.querySelector('.lux-progress span'); if(progress){progress.style.animation='none'; progress.offsetHeight; progress.style.animation='luxProgress 7s linear infinite';}
  }
  function go(i,user){index=(i+slides.length)%slides.length;paint(); if(user) restart();}
  function next(){go(index+1,false)}
  function restart(){clearInterval(timer); timer=setInterval(next,delay)}
  slider.querySelector('.prev')?.addEventListener('click',()=>go(index-1,true));
  slider.querySelector('.next')?.addEventListener('click',()=>go(index+1,true));
  thumbs.forEach((b,i)=>b.addEventListener('click',()=>go(i,true)));
  slider.addEventListener('mouseenter',()=>{slider.classList.add('is-paused');clearInterval(timer)});
  slider.addEventListener('mouseleave',()=>{slider.classList.remove('is-paused');restart()});
  slider.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')go(index-1,true); if(e.key==='ArrowRight')go(index+1,true)});
  slider.tabIndex=0;
  slider.addEventListener('touchstart',e=>{startX=e.changedTouches[0].screenX},{passive:true});
  slider.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-startX;if(Math.abs(dx)>45)go(index+(dx<0?1:-1),true)},{passive:true});
  paint(); restart();
}
function whatsappMessage(form){
  const data=new FormData(form);
  const lines=[
    'Rudra Tours Enquiry',
    'Name: '+(data.get('name')||''),
    'Phone: '+(data.get('phone')||''),
    'Package: '+(data.get('package')||document.title),
    'Travel Date: '+(data.get('date')||''),
    'Travellers: '+(data.get('travellers')||''),
    'Message: '+(data.get('message')||'')
  ].filter(line=>!line.endsWith(': '));
  const url='https://wa.me/919580614977?text='+encodeURIComponent(lines.join('\n'));
  window.open(url,'_blank','noopener');
  closeWhatsAppForm();
  return false;
}
function currentPackageName(){
  const h1=document.querySelector('h1');
  if(h1&&h1.textContent.trim()) return h1.textContent.trim();
  return document.title.replace(' | Rudra Tours','').trim() || 'General Tour Enquiry';
}
function openWhatsAppForm(packageName){
  const modal=document.getElementById('whatsappModal');
  if(!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  const select=modal.querySelector('select[name="package"]');
  const name=packageName||currentPackageName();
  if(select){
    const found=[...select.options].find(o=>o.value.toLowerCase()===name.toLowerCase()||name.toLowerCase().includes(o.value.toLowerCase().replace(' package','')));
    if(found) select.value=found.value; else select.value='General Tour Enquiry';
  }
  const first=modal.querySelector('input[name="name"]');
  setTimeout(()=>first&&first.focus(),60);
}
function closeWhatsAppForm(){
  const modal=document.getElementById('whatsappModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
function initWhatsAppForm(){
  document.querySelectorAll('[data-open-whatsapp-form]').forEach(btn=>{
    if(btn.dataset.ready) return;
    btn.dataset.ready='1';
    btn.addEventListener('click',e=>{e.preventDefault();openWhatsAppForm(btn.getAttribute('data-package')||'');});
  });
  document.querySelectorAll('[data-close-whatsapp-form]').forEach(btn=>{
    if(btn.dataset.ready) return;
    btn.dataset.ready='1';
    btn.addEventListener('click',closeWhatsAppForm);
  });
}
function initPackageButtons(){
  document.querySelectorAll('[data-package]').forEach(a=>{
    if(a.dataset.packageReady) return;
    a.dataset.packageReady='1';
    a.addEventListener('click',e=>{e.preventDefault();openWhatsAppForm(a.getAttribute('data-package')||'');});
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  include('site-header','header.html'); include('site-footer','footer.html');
  initWhatsAppForm();
  initPackageButtons();
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeWhatsAppForm();});
});
