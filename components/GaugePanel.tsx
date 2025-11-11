"use client";
import { useEffect, useRef, useState } from "react";
export default function GaugePanel(){
  const [score,setScore]=useState(0);
  const needleRef=useRef<HTMLDivElement|null>(null);
  function setNeedle(s:number){ const deg=-135 + ((Math.min(Math.max(s,300),1000)-300)/700)*270; if(needleRef.current){ needleRef.current.style.transform = `translateX(-50%) rotate(${deg}deg)`; } }
  useEffect(()=>{ setNeedle(score); },[score]);
  function animate(to:number){ const start=performance.now(), from=score; const dur=1100;
    function tick(t:number){ const k=Math.min(1,(t-start)/dur); const v=Math.round(from+(to-from)*k); setScore(v); if(k<1) requestAnimationFrame(tick); }
    requestAnimationFrame(tick);
  }
  return (
    <section id="dashboard" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-black chrome-text neon">FUNDABILITY INTELLIGENCE</h1>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="gauge-ring">
          <div className="gauge-core">
            <div ref={needleRef} className="needle" style={{left:"50%"}}/>
            <div className="score"><span>{String(score).padStart(3,"0")}</span>&nbsp;<span style={{color:"var(--accent)"}}>GAUG≡™</span></div>
          </div>
        </div>
        <button className="btn-primary" onClick={()=>{ animate(820) }}>IGNITE</button>
      </div>
    </section>
  );
}
