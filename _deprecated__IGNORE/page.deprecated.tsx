'use client';
import Image from "next/image";
import { useEffect, useState } from 'react';
import Starfield from "./components/Starfield";
import FundingGauge from "./components/FundingGauge";
import FundingVitalsStrip from "./components/FundingVitalsStrip";
import LenderPanel from "./components/LenderPanel";
import PipelineCard from "./components/PipelineCard";
import QuickStatsCard from "./components/QuickStatsCard";

// Mock data for lenders
const mockLenders = [
  {
    id: "1",
    name: "Capital One Commercial",
    code: "C1",
    summary: "FICO 720+ • 2.9% APR",
    stackSlots: 3,
    activeSlots: 3,
  },
  {
    id: "2",
    name: "Wells Fargo SBA",
    code: "WF",
    summary: "FICO 680+ • SBA 7(a)",
    stackSlots: 3,
    activeSlots: 2,
  },
  {
    id: "3",
    name: "Bluevine LOC",
    code: "BV",
    summary: "Rev $100K+ • Fast approval",
    stackSlots: 3,
    activeSlots: 2,
  },
  {
    id: "4",
    name: "Fundbox",
    code: "FB",
    summary: "Invoice factoring • Net 30",
    stackSlots: 3,
    activeSlots: 1,
  },
];

// Mock data for pipeline
const mockPipeline = [
  {
    id: "1",
    title: "Equipment Line",
    amount: "$125K",
    dueLabel: "Due in 5 days",
    scoreLabel: "Score: 840",
    lendersCount: 4,
  },
  {
    id: "2",
    title: "Working Capital",
    amount: "$75K",
    dueLabel: "Due in 12 days",
    scoreLabel: "Score: 780",
    lendersCount: 6,
  },
  {
    id: "3",
    title: "SBA Express",
    amount: "$350K",
    dueLabel: "Due in 21 days",
    scoreLabel: "Score: 810",
    lendersCount: 3,
  },
];

export default function Page() {
  const [fundingData, setFundingData] = useState({
    health: 85,
    opportunities: 12,
    alerts: [] as string[],
  });

  useEffect(() => {
    async function fetchFundingHealth() {
      try {
        const res = await fetch('/api/funding-health');
        if (res.ok) {
          const data = await res.json();
          setFundingData(data);
        }
      } catch (error) {
        console.error('Failed to fetch funding health:', error);
      }
    }

    fetchFundingHealth();
    const interval = setInterval(fetchFundingHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <Starfield />
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center gap-3 px-6 sm:px-8 lg:px-12 py-6">
        <Image
          src="/img/logo-gauge.png"
          alt="FUNDINGGAUGE™"
          width={160}
          height={48}
          className="pointer-events-none select-none"
        />
        <h1 className="fg-wordmark text-3xl md:text-4xl font-black">
          FUNDINGGAUG≡™
        </h1>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 sm:px-8 lg:px-12 py-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-platinum tracking-tight mb-4">
          Precision-Engineered{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bolt to-emerald">
            Funding Excellence
          </span>
        </h2>
        <p className="text-platinum/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Where AI-driven analytics meet bespoke financial solutions
        </p>

        {/* Gauge Card - constrained width */}
        <div className="max-w-[420px] mx-auto">
          <FundingGauge value={fundingData.health} />
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="relative z-10 px-6 sm:px-8 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <LenderPanel lenders={mockLenders} />
            <PipelineCard items={mockPipeline} />
            <QuickStatsCard
              totalPipeline="$550K"
              avgApprovalRate="87%"
              activeLenders={14}
              bureauScore={812}
            />
          </div>
        </div>
      </section>

      {/* Funding Vitals Strip */}
      <FundingVitalsStrip
        health={fundingData.health}
        opportunities={fundingData.opportunities}
        alerts={fundingData.alerts}
      />
    </main>
  );
}
