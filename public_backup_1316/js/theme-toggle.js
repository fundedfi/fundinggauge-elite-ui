(function(){
  const root = document.documentElement;
  const key = 'fg-mode';
  const initial = localStorage.getItem(key) || 'blue';
  document.body.dataset.mode = initial;

  function set(mode){
    document.body.dataset.mode = mode;
    localStorage.setItem(key, mode);
    const pill = document.getElementById('mode-toggle');
    if (pill) pill.textContent = `Mode: ${mode[0].toUpperCase()+mode.slice(1)}`;
  }

  window.FGMode = {set, toggle(){ set((document.body.dataset.mode||'blue')==='blue'?'green':'blue'); }};
  document.addEventListener('click', (e)=>{
    if(e.target && e.target.id==='mode-toggle'){ FGMode.toggle(); }
  });

  // paint initial label on hydration
  queueMicrotask(()=>set(initial));
})();
