async function include(id, file){
  const el=document.getElementById(id); if(!el) return;
  try{const r=await fetch(file,{cache:'no-cache'}); el.innerHTML=await r.text(); initMenu(); initLuxurySlider(); initWhatsAppForm(); initPackageButtons(); initPwaInstallButton();
  if(new URLSearchParams(location.search).get('enquiry')==='whatsapp') setTimeout(()=>openWhatsAppForm('General Tour Enquiry'),500);}
  catch(e){console.warn('Include failed:',file,e)}
}
function initMenu(){
  const btn=document.querySelector('.menu-toggle'); const menu=document.querySelector('.menu');
  if(btn&&menu&&!btn.dataset.ready){
    btn.dataset.ready='1';
    btn.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});
  }
}

const RUDRA_SLIDES = {"varanasi": [{"title": "Ganga Aarti", "kicker": "Varanasi", "heading": "Ganga Aarti in Varanasi", "text": "Witness the evening Ganga Aarti and experience the spiritual rhythm of Varanasi.", "image": "/img/varanasi/gangaarti.jpg", "link": "/varanasi/", "button": "Plan Varanasi"}, {"title": "Sarnath", "kicker": "Varanasi", "heading": "Sarnath in Varanasi", "text": "Visit the Buddhist site where Lord Buddha gave his first sermon.", "image": "/img/varanasi/sarnath1.jpg", "link": "/varanasi/", "button": "Plan Varanasi"}, {"title": "Ayodhya", "kicker": "Varanasi", "heading": "Ayodhya in Varanasi", "text": "Add Ayodhya for Ram Mandir darshan and a sacred extension from Varanasi.", "image": "/img/varanasi/ayodhya1.jpg", "link": "/varanasi/", "button": "Plan Varanasi"}, {"title": "Prayagraj", "kicker": "Varanasi", "heading": "Prayagraj in Varanasi", "text": "Visit Triveni Sangam and important temples on a practical day route.", "image": "/img/varanasi/prayagraj1.jpg", "link": "/varanasi/", "button": "Plan Varanasi"}], "chardham": [{"title": "Chardham Yatra", "kicker": "Chardham", "heading": "Chardham Yatra in Chardham", "text": "A sacred route covering Yamunotri, Gangotri, Kedarnath and Badrinath.", "image": "/img/chardham/chardham1.jpg", "link": "/chardham/", "button": "Plan Chardham"}, {"title": "Haridwar", "kicker": "Chardham", "heading": "Haridwar in Chardham", "text": "Begin the yatra from Haridwar with Ganga darshan and route preparation.", "image": "/img/chardham/haridwar1.jpg", "link": "/chardham/", "button": "Plan Chardham"}, {"title": "Rishikesh", "kicker": "Chardham", "heading": "Rishikesh in Chardham", "text": "Gateway to the Himalayas with spiritual atmosphere and travel support.", "image": "/img/chardham/rishikesh1.jpg", "link": "/chardham/", "button": "Plan Chardham"}, {"title": "Kedarnath & Badrinath Planning", "kicker": "Chardham", "heading": "Kedarnath & Badrinath Planning in Chardham", "text": "Plan temple visits, stays and vehicle movement according to weather and group needs.", "image": "/img/chardham/chardham1.jpg", "link": "/chardham/", "button": "Plan Chardham"}], "buddhistcircuit": [{"title": "Sarnath", "kicker": "Buddhist Circuit", "heading": "Sarnath in Buddhist Circuit", "text": "The place where Lord Buddha delivered his first sermon.", "image": "/img/buddhist/sarnath1.jpg", "link": "/buddhistcircuit/", "button": "Plan Buddhist Circuit"}, {"title": "Bodh Gaya", "kicker": "Buddhist Circuit", "heading": "Bodh Gaya in Buddhist Circuit", "text": "Visit the Mahabodhi Temple area and the sacred enlightenment site.", "image": "/img/buddhist/gaya1.jpg", "link": "/buddhistcircuit/", "button": "Plan Buddhist Circuit"}, {"title": "Nalanda", "kicker": "Buddhist Circuit", "heading": "Nalanda in Buddhist Circuit", "text": "Explore ancient learning heritage connected with Buddhist history.", "image": "/img/buddhist/nalanda1.jpg", "link": "/buddhistcircuit/", "button": "Plan Buddhist Circuit"}, {"title": "Lumbini", "kicker": "Buddhist Circuit", "heading": "Lumbini in Buddhist Circuit", "text": "Add Nepal route planning for the birthplace of Lord Buddha.", "image": "/img/buddhist/lumbini1.jpg", "link": "/buddhistcircuit/", "button": "Plan Buddhist Circuit"}], "kashmir": [{"title": "Srinagar", "kicker": "Kashmir", "heading": "Srinagar in Kashmir", "text": "Stay in Srinagar and enjoy gardens, markets and scenic drives.", "image": "/img/JAndK/srinagar1.jpg", "link": "/kashmir/", "button": "Plan Kashmir"}, {"title": "Dal Lake", "kicker": "Kashmir", "heading": "Dal Lake in Kashmir", "text": "Plan shikara rides and peaceful lake experiences.", "image": "/img/JAndK/dallake1.jpg", "link": "/kashmir/", "button": "Plan Kashmir"}, {"title": "Gulmarg", "kicker": "Kashmir", "heading": "Gulmarg in Kashmir", "text": "Include Gulmarg for meadows, snow season and mountain views.", "image": "/img/JAndK/gulmarg1.jpg", "link": "/kashmir/", "button": "Plan Kashmir"}, {"title": "Kashmir Valley", "kicker": "Kashmir", "heading": "Kashmir Valley in Kashmir", "text": "A relaxed holiday plan for families, couples and groups.", "image": "/img/JAndK/kashmir4.jpg", "link": "/kashmir/", "button": "Plan Kashmir"}], "goldentriangle": [{"title": "Taj Mahal, Agra", "kicker": "Golden Triangle", "heading": "Taj Mahal, Agra in Golden Triangle", "text": "Visit the most iconic monument of India with proper timing support.", "image": "/img/goldentriangle/tajmahal2.jpg", "link": "/goldentriangle/", "button": "Plan Golden Triangle"}, {"title": "India Gate, Delhi", "kicker": "Golden Triangle", "heading": "India Gate, Delhi in Golden Triangle", "text": "See Delhi landmarks, markets and heritage routes.", "image": "/img/goldentriangle/indiagate.jpg", "link": "/goldentriangle/", "button": "Plan Golden Triangle"}, {"title": "Jaipur", "kicker": "Golden Triangle", "heading": "Jaipur in Golden Triangle", "text": "Explore the Pink City with forts, palaces and markets.", "image": "/img/goldentriangle/jaipur1.jpg", "link": "/goldentriangle/", "button": "Plan Golden Triangle"}, {"title": "Amber Fort", "kicker": "Golden Triangle", "heading": "Amber Fort in Golden Triangle", "text": "Add Amber Fort for grand Rajput architecture.", "image": "/img/goldentriangle/amberfort1.jpg", "link": "/goldentriangle/", "button": "Plan Golden Triangle"}], "goa": [{"title": "Goa Beaches", "kicker": "Goa", "heading": "Goa Beaches in Goa", "text": "Relax at popular beaches with a practical local sightseeing plan.", "image": "/img/goa/goabeach1.jpg", "link": "/goa/", "button": "Plan Goa"}, {"title": "Goa Holiday", "kicker": "Goa", "heading": "Goa Holiday in Goa", "text": "A flexible leisure package for families, friends and groups.", "image": "/img/goa/goa1.jpg", "link": "/goa/", "button": "Plan Goa"}, {"title": "Western Ghats", "kicker": "Goa", "heading": "Western Ghats in Goa", "text": "Add nature drives and scenic experiences around Goa.", "image": "/img/goa/westernghats1.jpg", "link": "/goa/", "button": "Plan Goa"}, {"title": "Leisure Time", "kicker": "Goa", "heading": "Leisure Time in Goa", "text": "Keep enough time for rest, food, beach walks and shopping.", "image": "/img/goa/goabeach1.jpg", "link": "/goa/", "button": "Plan Goa"}], "gujarat": [{"title": "Rann of Kutch", "kicker": "Gujarat", "heading": "Rann of Kutch in Gujarat", "text": "Experience the vast salt desert and seasonal cultural charm.", "image": "/img/gujarat/rann1.jpg", "link": "/gujarat/", "button": "Plan Gujarat"}, {"title": "Dwarka", "kicker": "Gujarat", "heading": "Dwarka in Gujarat", "text": "Plan Dwarkadhish Temple darshan and coastal pilgrimage stops.", "image": "/img/gujarat/dwarka1.jpg", "link": "/gujarat/", "button": "Plan Gujarat"}, {"title": "Somnath", "kicker": "Gujarat", "heading": "Somnath in Gujarat", "text": "Visit Somnath Jyotirlinga and nearby sacred sites.", "image": "/img/gujarat/somnath1.jpg", "link": "/gujarat/", "button": "Plan Gujarat"}, {"title": "Gir Forest", "kicker": "Gujarat", "heading": "Gir Forest in Gujarat", "text": "Add Gir Forest for wildlife and nature interest.", "image": "/img/gujarat/girforest1.jpg", "link": "/gujarat/", "button": "Plan Gujarat"}], "himachal": [{"title": "Manali", "kicker": "Himachal", "heading": "Manali in Himachal", "text": "Enjoy mountain views, local sightseeing and seasonal snow routes.", "image": "/img/himachal/manali1.jpg", "link": "/himachal/", "button": "Plan Himachal"}, {"title": "Shimla", "kicker": "Himachal", "heading": "Shimla in Himachal", "text": "Plan a classic hill station stay with Mall Road and nearby sights.", "image": "/img/himachal/shimla2.jpg", "link": "/himachal/", "button": "Plan Himachal"}, {"title": "Dalhousie", "kicker": "Himachal", "heading": "Dalhousie in Himachal", "text": "Add a peaceful hill station route for families and groups.", "image": "/img/himachal/dalhousie1.jpg", "link": "/himachal/", "button": "Plan Himachal"}, {"title": "Dharamshala", "kicker": "Himachal", "heading": "Dharamshala in Himachal", "text": "Include monasteries, mountain views and local culture.", "image": "/img/himachal/dharmashala1.jpg", "link": "/himachal/", "button": "Plan Himachal"}], "nepal": [{"title": "Kathmandu", "kicker": "Nepal", "heading": "Kathmandu in Nepal", "text": "Explore temples, heritage sites and city experiences.", "image": "/img/nepal/kathmandu1.jpg", "link": "/nepal/", "button": "Plan Nepal"}, {"title": "Pokhara", "kicker": "Nepal", "heading": "Pokhara in Nepal", "text": "Enjoy lake views, mountains and relaxed holiday time.", "image": "/img/nepal/pokharan1.jpg", "link": "/nepal/", "button": "Plan Nepal"}, {"title": "Bhaktapur", "kicker": "Nepal", "heading": "Bhaktapur in Nepal", "text": "Visit heritage squares and traditional architecture.", "image": "/img/nepal/bhaktapur1.jpg", "link": "/nepal/", "button": "Plan Nepal"}, {"title": "Nepal Views", "kicker": "Nepal", "heading": "Nepal Views in Nepal", "text": "A flexible Nepal plan for families, students and groups.", "image": "/img/nepal/nepal1.jpg", "link": "/nepal/", "button": "Plan Nepal"}], "northeast": [{"title": "Gangtok", "kicker": "North East", "heading": "Gangtok in North East", "text": "Plan a beautiful Sikkim hill route with local sightseeing.", "image": "/img/northeast/gangtok-1.jpg", "link": "/northeast/", "button": "Plan North East"}, {"title": "Darjeeling", "kicker": "North East", "heading": "Darjeeling in North East", "text": "Add tea gardens, toy train interest and mountain views.", "image": "/img/northeast/darjeeling-1.jpg", "link": "/northeast/", "button": "Plan North East"}, {"title": "Manas National Park", "kicker": "North East", "heading": "Manas National Park in North East", "text": "Include wildlife and nature interest when suitable.", "image": "/img/northeast/manas-rhino1.jpg", "link": "/northeast/", "button": "Plan North East"}, {"title": "Northeast Hills", "kicker": "North East", "heading": "Northeast Hills in North East", "text": "A flexible plan for nature lovers, students and families.", "image": "/img/northeast/gangtok-1.jpg", "link": "/northeast/", "button": "Plan North East"}], "rajasthan": [{"title": "Jaisalmer", "kicker": "Rajasthan", "heading": "Jaisalmer in Rajasthan", "text": "Plan desert, fort and cultural experiences.", "image": "/img/rajasthan/jaisalmer1.jpg", "link": "/rajasthan/", "button": "Plan Rajasthan"}, {"title": "Jodhpur Fort", "kicker": "Rajasthan", "heading": "Jodhpur Fort in Rajasthan", "text": "Explore the Blue City and grand fort views.", "image": "/img/rajasthan/jodhpurfort1.jpg", "link": "/rajasthan/", "button": "Plan Rajasthan"}, {"title": "Udaipur City Palace", "kicker": "Rajasthan", "heading": "Udaipur City Palace in Rajasthan", "text": "Add lakes, palaces and romantic heritage stays.", "image": "/img/rajasthan/udaipur-citypalace1.jpg", "link": "/rajasthan/", "button": "Plan Rajasthan"}, {"title": "Hawa Mahal", "kicker": "Rajasthan", "heading": "Hawa Mahal in Rajasthan", "text": "Include Jaipur heritage and market sightseeing.", "image": "/img/rajasthan/hawamahal1.jpg", "link": "/rajasthan/", "button": "Plan Rajasthan"}], "uttaranchal": [{"title": "Rishikesh", "kicker": "Uttaranchal", "heading": "Rishikesh in Uttaranchal", "text": "Spiritual, scenic and adventure-friendly gateway.", "image": "/img/uttaranchal/rishikesh1.jpg", "link": "/uttaranchal/", "button": "Plan Uttaranchal"}, {"title": "Haridwar", "kicker": "Uttaranchal", "heading": "Haridwar in Uttaranchal", "text": "Ganga Aarti and pilgrimage route support.", "image": "/img/uttaranchal/haridwar1.jpg", "link": "/uttaranchal/", "button": "Plan Uttaranchal"}, {"title": "Mussoorie", "kicker": "Uttaranchal", "heading": "Mussoorie in Uttaranchal", "text": "Classic hill station stay for families.", "image": "/img/uttaranchal/mussoorie1.jpg", "link": "/uttaranchal/", "button": "Plan Uttaranchal"}, {"title": "Nainital", "kicker": "Uttaranchal", "heading": "Nainital in Uttaranchal", "text": "Lake city holiday planning and sightseeing.", "image": "/img/uttaranchal/nainital1.jpg", "link": "/uttaranchal/", "button": "Plan Uttaranchal"}], "vaishnodevi": [{"title": "Vaishno Devi", "kicker": "Vaishno Devi", "heading": "Vaishno Devi Tour Package", "text": "Plan darshan, stay and travel support for Mata Vaishno Devi.", "image": "/img/JAndK/vaishnodevi1.jpg", "link": "/vaishnodevi/", "button": "Plan Vaishno Devi"}, {"title": "Katra Route", "kicker": "Vaishno Devi", "heading": "Katra Route in Vaishno Devi", "text": "Coordinate the yatra base and movement according to your group.", "image": "/img/JAndK/vaishno-devi-5191240_1920.jpg", "link": "/vaishnodevi/", "button": "Plan Vaishno Devi"}, {"title": "Jammu Tawi", "kicker": "Vaishno Devi", "heading": "Jammu Tawi in Vaishno Devi", "text": "Useful arrival point for train and road transfers.", "image": "/img/VaishnoDevi/Jammu_Tawi.jpg", "link": "/vaishnodevi/", "button": "Plan Vaishno Devi"}, {"title": "Pilgrimage Support", "kicker": "Vaishno Devi", "heading": "Pilgrimage Support in Vaishno Devi", "text": "Flexible planning for families and senior travellers where possible.", "image": "/img/VaishnoDevi/vaishnodevi1.jpg", "link": "/vaishnodevi/", "button": "Plan Vaishno Devi"}], "shirdisaibabashanishingnapur": [{"title": "Shirdi Sai Baba", "kicker": "Shirdi Sai Baba", "heading": "Shirdi Sai Baba and Shani Shingnapur Tour Package", "text": "Plan Sai Baba darshan and stay coordination in Shirdi.", "image": "/img/shirdi/shirdi1.jpg", "link": "/shirdisaibabashanishingnapur/", "button": "Plan Shirdi Sai Baba"}, {"title": "Shani Shingnapur", "kicker": "Shirdi Sai Baba", "heading": "Shani Shingnapur in Shirdi Sai Baba", "text": "Add Shani Shingnapur as a pilgrimage stop.", "image": "/img/shirdi/shingnapur1.jpg", "link": "/shirdisaibabashanishingnapur/", "button": "Plan Shirdi Sai Baba"}, {"title": "Temple Route", "kicker": "Shirdi Sai Baba", "heading": "Temple Route in Shirdi Sai Baba", "text": "Flexible temple route planning for families and groups.", "image": "/img/shirdi/sundaram-4567756_1920.jpg", "link": "/shirdisaibabashanishingnapur/", "button": "Plan Shirdi Sai Baba"}], "familytours": [{"title": "Family Holiday", "kicker": "Family Tours", "heading": "Family Holiday in Family Tours", "text": "Comfortable plans for parents, children and senior family members.", "image": "/img/family/family1.jpg", "link": "/familytours/", "button": "Plan Family Tours"}, {"title": "Relaxed Sightseeing", "kicker": "Family Tours", "heading": "Relaxed Sightseeing in Family Tours", "text": "Avoid rushed itineraries and keep the trip enjoyable.", "image": "/img/family/one.jpg", "link": "/familytours/", "button": "Plan Family Tours"}, {"title": "Safe Travel Support", "kicker": "Family Tours", "heading": "Safe Travel Support in Family Tours", "text": "Hotel, vehicle and route choices suited to family comfort.", "image": "/img/family/two.jpg", "link": "/familytours/", "button": "Plan Family Tours"}, {"title": "Memorable Trips", "kicker": "Family Tours", "heading": "Memorable Trips in Family Tours", "text": "Create family memories with practical planning.", "image": "/img/family/three.jpg", "link": "/familytours/", "button": "Plan Family Tours"}], "pilgrimagetours": [{"title": "Pilgrimage Routes", "kicker": "Pilgrimage Tours", "heading": "Pilgrimage Routes in Pilgrimage Tours", "text": "Custom routes for sacred destinations across India and Nepal.", "image": "/img/pilgrimage/pilgrimage1.jpg", "link": "/pilgrimagetours/", "button": "Plan Pilgrimage Tours"}, {"title": "Temples", "kicker": "Pilgrimage Tours", "heading": "Temples in Pilgrimage Tours", "text": "Temple-focused plans with practical route support.", "image": "/img/pilgrimage/temple.jpg", "link": "/pilgrimagetours/", "button": "Plan Pilgrimage Tours"}, {"title": "Holy Places", "kicker": "Pilgrimage Tours", "heading": "Holy Places in Pilgrimage Tours", "text": "Plan meaningful visits with comfortable travel.", "image": "/img/pilgrimage/holyplace.jpg", "link": "/pilgrimagetours/", "button": "Plan Pilgrimage Tours"}, {"title": "Sightseeing Around Temples", "kicker": "Pilgrimage Tours", "heading": "Sightseeing Around Temples in Pilgrimage Tours", "text": "Add nearby sightseeing where the schedule allows.", "image": "/img/pilgrimage/sighseeing.jpg", "link": "/pilgrimagetours/", "button": "Plan Pilgrimage Tours"}], "studenttours": [{"title": "Student Group Tours", "kicker": "Student Tours", "heading": "Student Group Tours in Student Tours", "text": "Practical travel planning for schools, colleges and learning groups.", "image": "/img/student/student1.jpg", "link": "/studenttours/", "button": "Plan Student Tours"}, {"title": "Educational Visits", "kicker": "Student Tours", "heading": "Educational Visits in Student Tours", "text": "Sightseeing connected with history, culture and learning.", "image": "/img/student/studenttours1.jpg", "link": "/studenttours/", "button": "Plan Student Tours"}, {"title": "Botanical Visit", "kicker": "Student Tours", "heading": "Botanical Visit in Student Tours", "text": "Add nature and science-related learning stops.", "image": "/img/student/botanical1.jpg", "link": "/studenttours/", "button": "Plan Student Tours"}, {"title": "Trekking Activity", "kicker": "Student Tours", "heading": "Trekking Activity in Student Tours", "text": "Include safe adventure elements where suitable.", "image": "/img/student/trekking1.jpg", "link": "/studenttours/", "button": "Plan Student Tours"}], "corporatetours": [{"title": "Corporate Travel", "kicker": "Corporate Tours", "heading": "Corporate Travel in Corporate Tours", "text": "Business-focused travel planning with reliable coordination.", "image": "/img/corporate/corporate1.jpg", "link": "/corporatetours/", "button": "Plan Corporate Tours"}, {"title": "Meetings", "kicker": "Corporate Tours", "heading": "Meetings in Corporate Tours", "text": "Support for meeting-linked travel and venue coordination.", "image": "/img/corporate/meetings1.jpg", "link": "/corporatetours/", "button": "Plan Corporate Tours"}, {"title": "Hotels", "kicker": "Corporate Tours", "heading": "Hotels in Corporate Tours", "text": "Hotel category selection according to company needs.", "image": "/img/corporate/hotels1.jpg", "link": "/corporatetours/", "button": "Plan Corporate Tours"}, {"title": "Team Outings", "kicker": "Corporate Tours", "heading": "Team Outings in Corporate Tours", "text": "Add relaxed team activities and sightseeing.", "image": "/img/corporate/funplaces1.jpg", "link": "/corporatetours/", "button": "Plan Corporate Tours"}], "conferencetours": [{"title": "Conference Planning", "kicker": "Conference Tours", "heading": "Conference Planning in Conference Tours", "text": "Coordinate travel around conferences and formal events.", "image": "/img/conference/conference1.jpg", "link": "/conferencetours/", "button": "Plan Conference Tours"}, {"title": "Event Support", "kicker": "Conference Tours", "heading": "Event Support in Conference Tours", "text": "Plan guest movement and event-linked schedules.", "image": "/img/conference/event-1597531_1920.jpg", "link": "/conferencetours/", "button": "Plan Conference Tours"}, {"title": "Business Meetings", "kicker": "Conference Tours", "heading": "Business Meetings in Conference Tours", "text": "Add meeting support, stay and local transfers.", "image": "/img/conference/meetings-1149198_1920.jpg", "link": "/conferencetours/", "button": "Plan Conference Tours"}, {"title": "Professional Travel", "kicker": "Conference Tours", "heading": "Professional Travel in Conference Tours", "text": "Keep logistics simple for guests and delegates.", "image": "/img/conference/businessman-2606509_1920.jpg", "link": "/conferencetours/", "button": "Plan Conference Tours"}], "home": [{"title": "Varanasi", "kicker": "Rudra Tours • From Varanasi", "heading": "Spiritual and holiday tours across India", "text": "Plan Varanasi, Chardham, Buddhist Circuit, Kashmir, Goa, Nepal and more with Rudra Tours.", "image": "/img/varanasi/gangaarti.jpg", "link": "/varanasi/", "button": "Explore Varanasi"}, {"title": "Chardham", "kicker": "Pilgrimage Planning", "heading": "Chardham Yatra with practical support", "text": "Yamunotri, Gangotri, Kedarnath and Badrinath route planning.", "image": "/img/chardham/chardham1.jpg", "link": "/chardham/", "button": "View Chardham"}, {"title": "Buddhist Circuit", "kicker": "Sacred Buddhist Route", "heading": "Sarnath, Bodh Gaya, Nalanda and Lumbini", "text": "A focused Buddhist pilgrimage route with matching destinations.", "image": "/img/buddhist/buddha2.jpg", "link": "/buddhistcircuit/", "button": "Buddhist Circuit"}, {"title": "Kashmir", "kicker": "Holiday Packages", "heading": "Kashmir, Goa, Gujarat and classic India tours", "text": "Beautiful holidays for families, students and groups.", "image": "/img/JAndK/kashmir2.jpg", "link": "/kashmir/", "button": "View Kashmir"}]};
function currentTourSlug(){
  const path=window.location.pathname.replace(/^\/+|\/+$/g,'');
  return path ? path.split('/')[0].toLowerCase() : 'home';
}
function buildLuxurySlider(slider){
  if(slider.dataset.built) return;
  slider.dataset.built='1';
  const slug=currentTourSlug();
  const slides=RUDRA_SLIDES[slug] || RUDRA_SLIDES.home;
  const before=slider.querySelector('.lux-control.prev') || slider.firstChild;
  const thumbs=slider.querySelector('.lux-thumbs');
  slides.forEach((s,i)=>{
    const slide=document.createElement('div');
    slide.className='lux-slide'+(i===0?' is-active':'');
    slide.dataset.title=s.title;
    slide.dataset.link=s.link;
    slide.style.setProperty('--slide-img',`url('${s.image}')`);
    slide.innerHTML=`<div class="lux-overlay"></div><div class="container lux-content"><span class="lux-kicker">${s.kicker}</span><h2>${s.heading}</h2><p>${s.text}</p><div class="lux-actions"><a class="btn" href="${s.link}">${s.button}</a><a class="btn alt" href="#" data-package="${s.heading}" data-open-whatsapp-form>WhatsApp Enquiry</a></div></div>`;
    slider.insertBefore(slide,before);
    if(thumbs){
      const b=document.createElement('button'); b.type='button'; b.dataset.slide=String(i); b.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span>${s.title}`; thumbs.appendChild(b);
    }
  });
}

function initLuxurySlider(){
  const slider=document.querySelector('.lux-slider'); if(!slider||slider.dataset.ready) return; buildLuxurySlider(slider); slider.dataset.ready='1';
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

let deferredPwaInstallPrompt=null;
function isPwaInstalled(){
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function setInstallButtonsVisible(visible){
  document.querySelectorAll('[data-pwa-install]').forEach(btn=>{
    btn.hidden=!visible;
    btn.classList.toggle('is-visible', !!visible);
  });
}
function initPwaInstallButton(){
  const buttons=[...document.querySelectorAll('[data-pwa-install]')];
  if(!buttons.length) return;
  if(isPwaInstalled()) { setInstallButtonsVisible(false); return; }
  setInstallButtonsVisible(!!deferredPwaInstallPrompt);
  buttons.forEach(btn=>{
    if(btn.dataset.installReady) return;
    btn.dataset.installReady='1';
    btn.addEventListener('click', async ()=>{
      if(!deferredPwaInstallPrompt){
        alert('Install is available after the browser confirms this site is installable. On mobile Chrome, you can also use the browser menu and choose “Add to Home screen”.');
        return;
      }
      deferredPwaInstallPrompt.prompt();
      try{ await deferredPwaInstallPrompt.userChoice; }catch(e){}
      deferredPwaInstallPrompt=null;
      setInstallButtonsVisible(false);
    });
  });
}
window.addEventListener('beforeinstallprompt', event=>{
  event.preventDefault();
  deferredPwaInstallPrompt=event;
  initPwaInstallButton();
  setInstallButtonsVisible(true);
});
window.addEventListener('appinstalled', ()=>{
  deferredPwaInstallPrompt=null;
  setInstallButtonsVisible(false);
});

document.addEventListener('DOMContentLoaded',()=>{
  registerServiceWorker();
  include('site-header','/header.html'); include('site-footer','/footer.html');
  initWhatsAppForm();
  initPackageButtons();
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeWhatsAppForm();});
});

function registerServiceWorker(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}
