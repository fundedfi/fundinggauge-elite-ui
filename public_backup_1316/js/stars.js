(()=> {
  const c = document.getElementById('fg-stars');
  if(!c) return;
  const ctx = c.getContext('2d');
  let stars = [], W=0, H=0;

  function resize(){
    W = c.width  = c.clientWidth  = window.innerWidth;
    H = c.height = c.clientHeight = window.innerHeight;
    const count = Math.round((W*H)/9000);
    stars = Array.from({length: count}, ()=>({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*1.6 + 0.2,
      a: Math.random()*Math.PI*2,
      tw: Math.random()*0.015 + 0.005
    }));
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    for(const s of stars){
      s.a += s.tw;
      const alpha = 0.35 + 0.35*Math.sin(s.a);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, {passive:true});
  resize(); draw();
})();
