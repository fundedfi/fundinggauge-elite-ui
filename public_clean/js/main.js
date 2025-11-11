function setGauge(el,val){
  el.style.background=`conic-gradient(var(--accent) ${val*3.6}deg,rgba(255,255,255,.1) 0deg)`;
  el.textContent=val;
}

function runAssessment(){
  const gauge=document.querySelector('.gauge');
  let v=0;
  const t=setInterval(()=>{setGauge(gauge,++v); if(v>=75) clearInterval(t);},30);
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('start').addEventListener('click',runAssessment);
});
