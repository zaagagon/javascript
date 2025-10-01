// Slider (solo en index si existe el contenedor)
(function(){
  const slides = document.getElementById('slides');
  if(!slides) return;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dots = document.getElementById('dots');
  const total = slides.children.length; let index = 0; let timer;
  function go(i){ index=(i+total)%total; slides.style.transform=`translateX(${-index*100}%)`; [...dots.children].forEach((d,di)=>d.setAttribute('aria-current', di===index)); restart(); }
  function restart(){ clearInterval(timer); timer=setInterval(()=>go(index+1), 5000) }
  for(let i=0;i<total;i++){ const d=document.createElement('button'); d.className='dot'; d.setAttribute('aria-label',`Ir a la imagen ${i+1}`); d.addEventListener('click',()=>go(i)); dots.appendChild(d); }
  go(0); prev.addEventListener('click',()=>go(index-1)); next.addEventListener('click',()=>go(index+1));
  slides.addEventListener('mouseenter',()=>clearInterval(timer)); slides.addEventListener('mouseleave',restart);
})();

// Drawer móvil
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