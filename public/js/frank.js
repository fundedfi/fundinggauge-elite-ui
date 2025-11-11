(()=>{const S=(t)=>localStorage.setItem('fg-mode',t),G=()=>localStorage.getItem('fg-mode')||'blue';
function h(t){const e=document.createElement('div');e.className='frank-fab';e.title='Chat with Frank';
e.innerHTML='<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 19v-9a7 7 0 1114 0v5a3 3 0 01-3 3h-1l-3 3v-3H9a5 5 0 01-5-5" stroke="#000" stroke-width="2"/></svg><div class="frank-badge">FRANK</div>';
e.addEventListener('click',()=>{const p=document.querySelector('.frank-panel');p.style.display=p.style.display==='block'?'none':'block'});document.body.appendChild(e)
const p=document.createElement('div');p.className='frank-panel';p.innerHTML=`
  <div class="frank-head"><b>FRANK – FundingGauge</b><button id="fg-close" style="background:transparent;border:0;color:#fff;cursor:pointer;font-weight:700">×</button></div>
  <div class="frank-body" id="fg-body"><div class="frank-msg frank-bot">Online. What’s your goal? I’ll ask one key question next.</div></div>
  <div class="frank-input"><input id="fg-input" placeholder="Type a message…" /><button id="fg-send">Send</button></div>`;
document.body.appendChild(p);document.getElementById('fg-close')?.addEventListener('click',()=>p.style.display='none')
async function send(m){const b=document.getElementById('fg-body');const add=(txt,cls)=>{const d=document.createElement('div');d.className=`frank-msg ${cls}`;d.textContent=txt;b.appendChild(d);b.scrollTop=b.scrollHeight}
add(m,'frank-me');try{const r=await fetch('/api/claude',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:m}]})});const j=await r.json();add(j?.reply||'OK','frank-bot')}catch(_){add('OK','frank-bot')}}
const input=()=>document.getElementById('fg-input') as HTMLInputElement;document.getElementById('fg-send')?.addEventListener('click',()=>{const val=input().value.trim();if(!val)return;input().value='';send(val)})
document.getElementById('fg-input')?.addEventListener('keydown',(ev)=>{if(ev.key==='Enter'){const val=input().value.trim();if(!val)return;input().value='';send(val)}})
const mode=G();document.documentElement.setAttribute('data-mode',mode)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',()=>h())}else{h()}
})();
