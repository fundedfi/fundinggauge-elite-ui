(function(){
  const key='fg-mode';
  const current=localStorage.getItem(key)||'blue';
  document.documentElement.setAttribute('data-mode', current);
  function toggle(){
    const m=document.documentElement.getAttribute('data-mode')==='blue'?'green':'blue';
    document.documentElement.setAttribute('data-mode', m); localStorage.setItem(key,m);
    const pill=document.getElementById('fg-mode-pill'); if(pill) pill.textContent='Mode: '+m;
  }
  function mount(){
    if(document.getElementById('fg-mode-pill')) return;
    const div=document.createElement('div');
    div.id='fg-mode-pill'; div.textContent='Mode: '+(localStorage.getItem(key)||'blue');
    div.style.cssText='position:fixed;left:18px;bottom:24px;background:rgba(0,0,0,.7);color:#fff;border:1px solid rgba(255,255,255,.2);padding:8px 12px;border-radius:999px;backdrop-filter:blur(8px);cursor:pointer;z-index:9999';
    div.onclick=toggle; document.body.appendChild(div);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded', mount)}else{mount()}
})();
