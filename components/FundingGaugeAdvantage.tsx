import { Shield, Gauge, Zap, Network, ActivitySquare, Award } from "lucide-react";
export default function FundingGaugeAdvantage(){
  const items=[
    {icon:Gauge, title:"Real-Time Fundability", desc:"Live scoring adapts as your inputs change.", tag:"Live"},
    {icon:Zap,   title:"47-Second Processing", desc:"Parallelized pipeline for near-instant results.", tag:"<1m"},
    {icon:Network, title:"500+ Lender Network", desc:"Banks, fintechs, niche programs—curated.", tag:"500+"},
    {icon:ActivitySquare, title:"Predictive Modeling", desc:"Approval odds + stack order via ensembles.", tag:"AI"},
    {icon:Award, title:"3.2× Lift", desc:"Higher approvals and better terms on average.", tag:"3.2×"},
    {icon:Shield, title:"Bank-Level Security", desc:"AES-256, TLS 1.3, least-privilege, audits.", tag:"Secure"},
  ];
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12" id="features">
      <h2 className="chrome-text neon text-3xl font-semibold mb-4">FUNDINGGAUG<span className="eq">≡</span>™ <span className="text-white">Advantage</span></h2>
      <p className="text-zinc-300 mb-6">Fundability intelligence that actually moves the needle.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({icon:Icon,title,desc,tag})=>(
          <div key={title} className="glass p-5 rounded-2xl hover:scale-[1.01] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg" style={{background:"rgba(255,255,255,.06)"}}>
                <Icon className="h-5 w-5" color="var(--accent)"/>
              </div>
              <span className="text-xs px-2 py-0.5 border rounded" style={{borderColor:"var(--panel-border)"}}>{tag}</span>
            </div>
            <div className="text-base font-semibold mb-1">{title}</div>
            <div className="text-sm text-zinc-400">{desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-3">
        <a className="btn-primary" href="#calculator">Get Fundability Score</a>
        <a className="btn-sec" href="#how-it-works">How it Works</a>
        <span className="text-xs text-zinc-400">Avg time <b>47s</b> • Lenders <b>500+</b> • Lift <b>3.2×</b></span>
      </div>
    </section>
  );
}
