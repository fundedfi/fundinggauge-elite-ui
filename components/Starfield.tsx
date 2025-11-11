"use client";
import { useEffect, useRef } from "react";
export default function Starfield(){
  const ref=useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{
    const c=ref.current!; const ctx=c.getContext("2d")!;
    let w=0,h=0,raf=0; const stars=Array.from({length:160},()=>({x:Math.random(),y:Math.random(),z:Math.random()}));
    const resize=()=>{ w=window.innerWidth; h=window.innerHeight; c.width=w; c.height=h; };
    const step=()=>{ ctx.clearRect(0,0,w,h); ctx.fillStyle="white";
      stars.forEach(s=>{ s.y+= (0.12 + s.z*0.4)/100; if(s.y>1) s.y=0;
        const x=s.x*w, y=s.y*h; const a=0.2+0.6*s.z; ctx.globalAlpha=a; ctx.fillRect(x, y, 2, 2); });
      ctx.globalAlpha=1; raf=requestAnimationFrame(step);
    };
    resize(); window.addEventListener("resize",resize);
    raf=requestAnimationFrame(step);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 opacity-60"></canvas>;
}
