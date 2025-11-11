(function(){
  const btn = document.getElementById('fg-start');
  const flash = document.getElementById('fg-flash');
  const audio = document.getElementById('fg-audio');
  if(!btn || !flash) return;

  btn.addEventListener('click', async () => {
    try { if(audio) await audio.play().catch(()=>{}); } catch {}
    document.body.classList.add('starting');   // slows starfield + adds ambient
    flash.classList.add('on');                 // green/blue flash

    // Give the starfield moment to breathe before we leave
    setTimeout(() => { console.log('stay on starfield'); }, 1400);
  });
})();
console.log('ignite -> /fg-site.html');
console.log('ignite -> /fg-site.html');
