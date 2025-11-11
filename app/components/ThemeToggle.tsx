"use client";
import React, {useEffect, useState} from "react";
export default function ThemeToggle(){
  const [blue,setBlue]=useState(false);
  useEffect(()=>{ document.documentElement.classList.toggle('theme-blue', blue); },[blue]);
  return (
    <button
      onClick={()=>setBlue(v=>!v)}
      className="fixed top-4 right-4 z-50 rounded-full px-3 py-1 text-sm border border-white/20 bg-black/40 text-white backdrop-blur"
      style={{boxShadow:'0 0 12px var(--fg-accent)'}}
      aria-label="Toggle Accent Theme"
      title="Toggle Accent Theme"
    >
      {blue ? "Blue" : "Green"}
    </button>
  );
}
