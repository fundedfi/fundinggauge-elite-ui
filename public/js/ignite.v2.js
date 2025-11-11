(()=> {
  const startBtn = document.getElementById('fg-start');
  const audio = document.getElementById('fg-audio');
  const flash = document.getElementById('fg-flash');
  const canvas = document.getElementById('fg-stars');

  function ignite(){
    // audio
    if(audio){
      try{ audio.currentTime = 0; }catch(_){}
      audio.volume = 1;
      audio.play().catch(()=>{});
    }
    // flash
    if(flash){
      flash.classList.add('on');
      setTimeout(()=>flash.classList.remove('on'), 1200);
    }

    // stay on starfield longer
    const dwellMs = 5200;

    // fade audio before leaving
    if(audio){
      const t0 = performance.now();
      const fade = ()=>{
        const t = (performance.now()-t0)/1200;
        if(t<1 && !audio.paused){
          audio.volume = Math.max(0, 1-t);
          requestAnimationFrame(fade);
        } else {
          audio.pause(); audio.currentTime=0; audio.volume=1;
        }
      };
      setTimeout(()=>requestAnimationFrame(fade), dwellMs-1300);
    }

    // go to site page
    setTimeout(()=>{ window.location.href='/fg-site.html'; }, dwellMs);
  }

  if(startBtn) startBtn.addEventListener('click', ignite);
  if(canvas)   canvas.addEventListener('click', ignite);
})();
