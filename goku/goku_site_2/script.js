// ====== Shared Slider (appears on all pages with .hero-slot) ======
(function(){
  const IMAGES = [
    "https://wallpapers.com/images/featured/fondos-de-goku-vhm3f71ddueli0kl.jpg",
    "https://wallpapers.com/images/featured/goku-e2us8ym3rraxbnve.jpg",
    "https://alfabetajuega.com/hero/2025/05/captura.1748259070.1247.png?width=1200",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokcw_DpUNzuq2vGLmghZHnAtwIP7pTIjhMA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCabYVl_T_AfUYM-xnPX72ZGS3WO0bcj_h6A&s"
  ];
  const slot = document.querySelector(".hero-slot");
  if(!slot) return;

  slot.innerHTML = `
  <figure class="slider" aria-label="Galería de Goku">
    <div class="slides" id="slides">
      ${IMAGES.map(src=>`<figure class="slide"><img alt="Goku" src="${src}" /></figure>`).join("")}
    </div>
    <div class="ctrl">
      <button class="btn" id="prev" aria-label="Anterior">◀</button>
      <button class="btn" id="next" aria-label="Siguiente">▶</button>
    </div>
    <div class="dots" role="tablist" aria-label="Paginación" id="dots"></div>
  </figure>`;
})();

// ===== Slider logic (only runs if #slides exists) =====
(function(){
  const slides = document.getElementById('slides');
  if(!slides) return;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dots = document.getElementById('dots');
  const total = slides.children.length; let index = 0; let timer;
  function go(i){ index=(i+total)%total; slides.style.transform=`translateX(${-index*100}%)`; [...dots.children].forEach((d,di)=>d.setAttribute('aria-current', di===index)); restart(); }
  function restart(){ clearInterval(timer); timer=setInterval(()=>go(index+1), 4500) }
  for(let i=0;i<total;i++){ const d=document.createElement('button'); d.className='dot'; d.setAttribute('aria-label',`Ir a la imagen ${i+1}`); d.addEventListener('click',()=>go(i)); dots.appendChild(d); }
  go(0); prev.addEventListener('click',()=>go(index-1)); next.addEventListener('click',()=>go(index+1));
  slides.addEventListener('mouseenter',()=>clearInterval(timer)); slides.addEventListener('mouseleave',restart);
})();

// ===== Drawer móvil =====
(function(){
  const openMenu=document.getElementById('openMenu');
  const closeMenu=document.getElementById('closeMenu');
  const drawer=document.getElementById('drawer');
  const scrim=document.getElementById('scrim');
  function showDrawer(show){ if(!drawer) return; drawer.style.transform=show?'translateX(0)':'translateX(110%)'; drawer.setAttribute('aria-hidden',!show); if(scrim) scrim.classList.toggle('show',show) }
  openMenu && openMenu.addEventListener('click',()=>showDrawer(true));
  closeMenu && closeMenu.addEventListener('click',()=>showDrawer(false));
  scrim && scrim.addEventListener('click',()=>showDrawer(false));
  drawer && drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>showDrawer(false)));
})();