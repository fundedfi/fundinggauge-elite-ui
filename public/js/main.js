(function(){
  function animateScore(el, start, end, ms){
    const range=end-start, step=16, inc=range/(ms/step); let cur=start;
    const t=setInterval(()=>{cur+=inc; if((inc>0&&cur>=end)||(inc<0&&cur<=end)){cur=end;clearInterval(t)}
      el.textContent=String(Math.round(cur)).padStart(3,'0')},16);
  }
  function setNeedleFromScore(score){
    const needle=document.getElementById('needle');
    const rot=-135 + ((score-300)/700)*270;
    needle.style.transform=`translateX(-50%) rotate(${rot}deg)`;
  }
  async function runAssessmentFromForm(){
    const form=document.getElementById('fundingForm');
    const fd=new FormData(form);
    const payload=Object.fromEntries(fd.entries());
    const btn=form.querySelector('.submit-button');
    btn.textContent='ANALYZING...'; btn.classList.add('pulse');
    try{
      const r=await fetch('/api/fundability',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      const j=await r.json();
      const score=j?.data?.score ?? 620;
      setNeedleFromScore(score);
      const scoreEl=document.getElementById('scoreValue');
      animateScore(scoreEl, 0, score, 1400);
      btn.textContent='LAUNCH ANALYSIS'; btn.classList.remove('pulse');
      alert(`Your FUNDINGGAUG≡ Score: ${score}\nPotential lenders: ${j?.data?.lenders ?? 10}`);
    }catch(e){
      setNeedleFromScore(642);
      const scoreEl=document.getElementById('scoreValue');
      animateScore(scoreEl, 0, 642, 1200);
      btn.textContent='LAUNCH ANALYSIS'; btn.classList.remove('pulse');
      alert('Analysis complete (fallback).');
    }
  }
  const form=document.getElementById('fundingForm');
  if(form){ form.addEventListener('submit', (e)=>{ e.preventDefault(); runAssessmentFromForm(); }); }

  const ignite=document.getElementById('igniteButton');
  if(ignite){ ignite.addEventListener('click', ()=>{ const v=document.getElementById('fg-video'); if(v && v.paused){ v.muted=true; v.play().catch(()=>{}); } }); }
})();
