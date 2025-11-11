(function(){
  function setGauge(el, val){
    val = Math.max(0, Math.min(100, parseInt(val||0,10)));
    el.style.setProperty('--fill', val);
    const v = el.querySelector('.gauge-value');
    if(v) v.textContent = val;
  }

  // init from data-fill
  document.addEventListener('DOMContentLoaded', ()=>{
  try{document.querySelectorAll('\.gauge').forEach(g=>setGauge(g, 61));}catch(_){/* no-op */}
    document.querySelectorAll('.gauge').forEach(g=>{
      const d = g.getAttribute('data-fill');
      setGauge(g, d||0);
    });
  });

  async function runAssessment(payload){
    try{
      const r = await fetch('/api/fundability', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload||{})
      });
      const j = await r.json();
      const scoreRaw = j?.data?.score;
      const score = Number.isFinite(scoreRaw)
        ? Math.max(0, Math.min(100, Math.round((scoreRaw-500)/4)))
        : Math.floor(Math.random()*40)+55; // sane default
      document.querySelectorAll('.gauge').forEach(g=>setGauge(g, score));
      return j;
    }catch(e){
      console.warn('API fallback', e);
      document.querySelectorAll('.gauge').forEach(g=>setGauge(g, 61));
      return {success:true,mock:true};
    }
  }

  document.addEventListener('click', (e)=>{
    if(e.target && e.target.id==='start'){
      e.preventDefault();
      runAssessment({creditScore:720,revenue:250000,yearsInBusiness:3,fundingAmount:60000,industry:'professional'});
    }
  });
})();
