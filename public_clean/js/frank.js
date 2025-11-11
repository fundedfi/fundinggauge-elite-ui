(()=>{const b=document.createElement('button');b.id='frank-btn';b.textContent='Frank';Object.assign(b.style,{position:'fixed',right:'16px',bottom:'16px',zIndex:9999,padding:'10px 14px',borderRadius:'999px',border:'1px solid #0ff',background:'rgba(0,0,0,.6)',color:'#fff',backdropFilter:'blur(8px)',cursor:'pointer'});document.body.appendChild(b);
const box=document.createElement('div');box.id='frank-box';Object.assign(box.style,{position:'fixed',right:'16px',bottom:'70px',width:'320px',maxWidth:'90vw',height:'380px',display:'none',zIndex:9999,background:'rgba(0,0,0,.6)',border:'1px solid rgba(0,255,255,.35)',borderRadius:'14px',backdropFilter:'blur(10px)',color:'#fff',overflow:'hidden'});
box.innerHTML=`<div style="padding:10px;font:700 12px/1.2 Orbitron, sans-serif;letter-spacing:.08em;border-bottom:1px solid rgba(255,255,255,.12)">Frank — FundingGauge</div>
<div id="frank-log" style="height:270px;overflow:auto;padding:10px;font:400 13px/1.4 'Space Grotesk',sans-serif"></div>
<form id="frank-form" style="display:flex;gap:8px;padding:10px;border-top:1px solid rgba(255,255,255,.12)">
  <input id="frank-input" placeholder="Ask Frank…" style="flex:1;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.35);color:#fff"/>
  <button style="padding:8px 12px;border-radius:8px;border:1px solid #0ff;background:transparent;color:#0ff">Send</button>
</form>`;
document.body.appendChild(box);
b.onclick=()=>{box.style.display=box.style.display==='none'?'block':'none'};
const log=box.querySelector('#frank-log');const form=box.querySelector('#frank-form');const inp=box.querySelector('#frank-input');
form.addEventListener('submit',async(e)=>{e.preventDefault();const q=inp.value.trim();if(!q) return;log.innerHTML+=`<div><b>You:</b> ${q}</div>`;inp.value='';try{const r=await fetch('/api/claude',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:q}]})});const j=await r.json();log.innerHTML+=`<div style="margin-top:6px"><b>Frank:</b> ${j.reply||'(no reply)'}</div>`;log.scrollTop=log.scrollHeight}catch(_){log.innerHTML+=`<div style="opacity:.7;margin-top:6px">Frank: (mock) Give me your top goal and one data point.</div>`}});
})();
