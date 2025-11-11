(function(){
  const btn = document.getElementById('fg-start');
  const flash = document.getElementById('fg-flash');
  const audio = document.getElementById('fg-audio');
  const mark = document.querySelector('.logo .mark');
  if(mark) mark.classList.add('pulse');
  if(!btn||!flash) return;

  btn.addEventListener('click', async () => {
    btn.classList.add('engaged');
    try{ if(audio) await audio.play().catch(()=>{});}catch{}
    flash.classList.add('on');
    // keep the starfield visible a bit longer
    setTimeout(()=>{ window.location.href='/fundinggauge.html'; }, 1600);
  });
})();
