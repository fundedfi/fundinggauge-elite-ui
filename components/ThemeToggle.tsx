"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle(){
  const [mode,setMode]=useState<string>(()=>typeof window==='undefined'?'green':(localStorage.getItem('fg_theme')||'green'));
  useEffect(()=>{ document.documentElement.setAttribute('data-theme', mode==='blue'?'blue':'green'); localStorage.setItem('fg_theme',mode); },[mode]);
  return <button className="btn-sec" onClick={()=>setMode(m=>m==='green'?'blue':'green')}>Mode: {mode==='green'?'Green':'Blue'}</button>;
}
