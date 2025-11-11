"use client";
import React, {useEffect, useState} from "react";

export default function Gauge() {
  const [score,setScore]=useState(0);
  const [angle,setAngle]=useState(-120);
  useEffect(()=>{
    const target=820;const dur=1200;const t0=performance.now();
    function tick(t:number){
      const k=Math.min(1,(t-t0)/dur);
      const s=Math.round(300+(target-300)*ease(k));
      setScore(s);
      setAngle(-120+240*((s-300)/700));
      if(k<1)requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  },[]);
  return(
    <div className="mx-auto my-10 flex flex-col items-center">
      <svg viewBox="0 0 200 200" width="280" height="280" style={{filter:"drop-shadow(0 0 18px var(--fg-accent))"}}>
        <defs>
          <linearGradient id="needle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4d5e"/><stop offset="100%" stopColor="#ffd0d5"/>
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="rgba(0,0,0,0.9)" stroke="rgba(40,40,40,0.9)" strokeWidth="2"/>
        <circle cx="100" cy="100" r="84" fill="none" stroke="var(--fg-accent)" strokeWidth="2" opacity="0.3"/>
        <g transform={`translate(100,100) rotate(${angle})`}>
          <rect x="0" y="-1" width="70" height="2" fill="url(#needle)"/>
          <circle cx="0" cy="0" r="5" fill="#fff" stroke="var(--fg-accent)" strokeWidth="2"/>
        </g>
        <g transform="translate(100,120)">
          <rect x="-28" y="-10" width="56" height="20" rx="6" fill="#000" stroke="var(--fg-accent)" strokeWidth="1.2"/>
          <text x="0" y="5" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10" fill="#b7ffe8">
            {String(score).padStart(3,'0')} GAUG≡™
          </text>
        </g>
      </svg>
      <button
        onClick={()=>{}}
        className="relative mt-6 rounded-2xl px-8 py-3 text-black font-semibold bg-gradient-to-b from-white to-gray-200 hover:brightness-110 active:scale-95"
        style={{
          boxShadow:"0 0 14px var(--fg-accent), inset 0 0 20px rgba(255,255,255,.35)",
          border:"1px solid rgba(255,255,255,.3)"
        }}>
        IGNITE
      </button>
    </div>
  );
}

function ease(t:number){return 1-Math.pow(1-t,3);}
