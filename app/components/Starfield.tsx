"use client";
import React, {useEffect, useRef} from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    // Boost state
    let speedMultiplier = 1;
    let boostTimeout: number | null = null;

    function fit() {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      ctx.setTransform(DPR,0,0,DPR,0,0);
    }

    const STARCOUNT = Math.min(600, Math.floor(window.innerWidth * 0.6));
    let stars = Array.from({length: STARCOUNT}).map(() => ({
      x: Math.random()*window.innerWidth,
      y: Math.random()*window.innerHeight,
      z: Math.random()*1+0.2,
      tw: Math.random()*0.8+0.2
    }));

    // Listen for boost events
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === 'STARFIELD_BOOST') {
        speedMultiplier = event.data.speed || 2.5;
        if (boostTimeout) clearTimeout(boostTimeout);
        boostTimeout = window.setTimeout(() => {
          // Ease back to normal over ~500ms
          const easeBack = () => {
            speedMultiplier = Math.max(1, speedMultiplier - 0.05);
            if (speedMultiplier > 1) requestAnimationFrame(easeBack);
          };
          easeBack();
        }, 3000);
      }
    }
    window.addEventListener('message', handleMessage);

    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0,0,canvas.width/DPR,canvas.height/DPR);

      // vignette
      const grd = ctx.createRadialGradient(canvas.width/(2*DPR), canvas.height/(2*DPR), 50, canvas.width/(2*DPR), canvas.height/(2*DPR), Math.max(canvas.width,canvas.height)/(2*DPR));
      grd.addColorStop(0,"rgba(0,0,0,0)");
      grd.addColorStop(1,"rgba(0,0,0,0.65)");
      ctx.fillStyle = grd;
      ctx.fillRect(0,0,canvas.width/DPR,canvas.height/DPR);

      const t = performance.now()*0.001;
      for (const s of stars){
        const r = 0.6 + 0.6*Math.sin(t*2 + s.x*0.01 + s.y*0.01);
        const size = (0.6 + s.tw*r)*1.4;
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 3+6*s.z);
        const acc = '#22d3ee';
        glow.addColorStop(0, acc);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 3+6*s.z, 0, Math.PI*2);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, Math.PI*2);
        ctx.fill();

        // Apply speed multiplier for boost effect
        s.x += (0.02 + 0.08*s.z) * speedMultiplier;
        if (s.x > window.innerWidth+5) { s.x = -5; s.y = Math.random()*window.innerHeight; }
      }
      requestAnimationFrame(draw);
    }
    function onResize(){ fit(); }
    fit(); requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('message', handleMessage);
      if (boostTimeout) clearTimeout(boostTimeout);
    };
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{position:"fixed", inset:0, zIndex:0}}
      aria-hidden="true"
    />
  );
}
