
(function(){
  const btn = document.createElement('button');
  btn.id='frank-bubble';
  btn.setAttribute('aria-label','Ask Frank');
  btn.innerHTML='🎤';
  Object.assign(btn.style,{position:'fixed',right:'22px',bottom:'22px',width:'56px',height:'56px',
    borderRadius:'50%',border:'1px solid #19ff6e',background:'rgba(0,0,0,.45)',color:'#19ff6e',
    boxShadow:'0 0 20px rgba(25,255,110,.25)',backdropFilter:'blur(8px)',zIndex:9999});
  document.body.appendChild(btn);

  const box = document.createElement('div');
  box.id='frank-box';
  Object.assign(box.style,{position:'fixed',right:'22px',bottom:'90px',width:'320px',maxHeight:'420px',
    display:'none',background:'rgba(0,0,0,.75)',border:'1px solid #19ff6e',borderRadius:'14px',
    boxShadow:'0 0 30px rgba(25,255,110,.25)',backdropFilter:'blur(10px)',overflow:'hidden',zIndex:9999});
  box.innerHTML = '<div style="padding:10px 12px;font-weight:600;color:#19ff6e">Frank — FundingGauge</div>\
  <div id="frank-log" style="padding:10px 12px;height:260px;overflow:auto;font-size:13px;color:#cfead7"></div>\
  <div style="display:flex;gap:6px;padding:10px 12px">\
    <input id="frank-input" placeholder="Ask Frank..." style="flex:1;padding:10px;border-radius:10px;border:1px solid #2b4; background:rgba(0,0,0,.35); color:#eafff3">\
    <button id="frank-send" style="padding:10px 14px;border-radius:10px;border:1px solid #2b4;background:#102819;color:#19ff6e">Send</button>\
  </div>';
  document.body.appendChild(box);

  btn.onclick=()=>{ box.style.display = box.style.display==='none'?'block':'none'; };
  async function send(){
    const input = document.getElementById('frank-input');
    const log = document.getElementById('frank-log');
    const q = input.value.trim(); if(!q) return;
    log.innerHTML += '<div><b>You:</b> '+q+'</div>';
    input.value='';
    try{
      const r = await fetch('/api/claude',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({q})});
      const j = await r.json();
      log.innerHTML += '<div><b>Frank:</b> '+(j.answer||'…')+'</div>';
      log.scrollTop = log.scrollHeight;
    }catch(e){ log.innerHTML += '<div><b>Frank:</b> offline</div>'; }
  }
  document.getElementById('frank-send').onclick=send;
  document.getElementById('frank-input').addEventListener('keydown',e=>{if(e.key==='Enter') send();});
})();
