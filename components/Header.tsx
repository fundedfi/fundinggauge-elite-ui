"use client";
import Image from "next/image";
import BrandWordmark from "./BrandWordmark";
import ThemeToggle from "./ThemeToggle";
export default function Header(){
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <Image src="/img/logo.png" alt="FundingGauge logo" width={40} height={40} />
        <BrandWordmark />
      </div>
      <div className="flex items-center gap-2">
        <a className="btn-sec" href="#dashboard">Dashboard</a>
        <a className="btn-sec" href="#calculator">Calculator</a>
        <a className="btn-sec" href="#partners">Partners</a>
        <ThemeToggle/>
      </div>
    </header>
  );
}
