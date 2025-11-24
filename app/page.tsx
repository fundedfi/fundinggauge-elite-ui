"use client";
import React, { useState } from "react";
import Starfield from "./components/Starfield";
import NavBar from "./components/NavBar";
import HeroCockpit from "./components/HeroCockpit";
import FundabilityWidget from "./components/FundabilityWidget";
import FundingConfigurator from "./components/FundingConfigurator";

export default function Page() {
  const [configuratorOpen, setConfiguratorOpen] = useState(false);

  return (
    <>
      <Starfield />
      <div className="relative z-10 min-h-screen bg-carbon">
        <NavBar onConfigureClick={() => setConfiguratorOpen(true)} />

        <main className="container mx-auto px-4 pt-32 pb-20">
          <HeroCockpit />

          <div className="mt-16 flex justify-center">
            <FundabilityWidget />
          </div>
        </main>

        <FundingConfigurator
          isOpen={configuratorOpen}
          onClose={() => setConfiguratorOpen(false)}
        />
      </div>
    </>
  );
}
