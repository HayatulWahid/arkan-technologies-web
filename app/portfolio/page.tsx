import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Cpu, Home, Zap, Layers, Server, Activity, ExternalLink, CheckCircle2, BookOpen } from "lucide-react";
import { VERTICALS } from "@/lib/constants";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050914] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TECHNOLOGY ARCHITECTURE & VERTICALS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Portfolio & <span className="text-gradient-emerald">Deep-Tech Stack</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Detailed technical overview of Arkan Technologies Limited&apos;s dual core initiatives across decentralized energy microgrids and real-world asset leaseholds.
          </p>
        </div>

        {/* SECTION 1: SUNSTAKER (IoT DePIN) */}
        <section className="mb-20 glass-panel p-8 md:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* HEADER BADGE & LINKS */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  {VERTICALS.sunstaker.title}
                </h2>
                <span className="text-xs font-mono text-slate-400">
                  {VERTICALS.sunstaker.subtitle}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={VERTICALS.sunstaker.gitbookDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-400 flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>GitBook Protocol Docs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={VERTICALS.sunstaker.zenodoRecord}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2 transition-colors"
              >
                <span>Zenodo Publication</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-10 max-w-4xl font-light">
            SunStaker is an open-source decentralized physical infrastructure network (DePIN) designed for solar telemetry, remote metering, and automated microgrid circuit isolation. Built on ESP32 microcontrollers running high-speed C++ telemetry firmware, SunStaker bridges off-grid commercial solar arrays directly to distributed ledger smart contract treasuries.
          </p>

          {/* SPECS GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-semibold">
                <Server className="w-4 h-4" />
                <span>Edge Microcontroller</span>
              </div>
              <h3 className="font-bold text-slate-200 text-sm">ESP32 & RTOS Architecture</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                High-voltage telemetry sampling via PZEM-004T sensors, real-time power logging, and sub-second fault detection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-semibold">
                <Activity className="w-4 h-4" />
                <span>High-Voltage Control</span>
              </div>
              <h3 className="font-bold text-slate-200 text-sm">Automated Microgrid Relays</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Heavy-duty magnetic contactors (60A–100A) for remote circuit isolation and automated over-current protection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-semibold">
                <Layers className="w-4 h-4" />
                <span>Protocol Settlement</span>
              </div>
              <h3 className="font-bold text-slate-200 text-sm">Hedera & Base Smart Contracts</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                On-chain kWh generation verification, automated prosumer micropayments, and decentralized yield distribution.
              </p>
            </div>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-emerald-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pilot Site Audit: Firdaus-Gate CBT Center (30kW Deye Hybrid + 425.6V High-Voltage Lithium ESS)</span>
            </div>
            <span className="text-slate-400">Status: Testnet Active</span>
          </div>

        </section>

        {/* SECTION 2: BINAA HOMES */}
        <section className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Home className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {VERTICALS.binaaHomes.title}
              </h2>
              <span className="text-xs font-mono text-slate-400">
                {VERTICALS.binaaHomes.subtitle}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-10 max-w-4xl font-light">
            Binaa Homes structures real-world asset (RWA) leasehold tokenization and automated property management for student accommodation across university ecosystems. The platform optimizes master-lease co-ownership, tenant onboarding, rent reconciliation, and maintenance routing.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-semibold">
                <Layers className="w-4 h-4" />
                <span>Leasehold Master-Lease</span>
              </div>
              <h3 className="font-bold text-slate-200 text-sm">Hostel Fractional Co-Ownership</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Legal tokenization of long-term commercial leasehold rights, opening direct yield to verified retail investors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-semibold">
                <Server className="w-4 h-4" />
                <span>Automated Treasury</span>
              </div>
              <h3 className="font-bold text-slate-200 text-sm">Smart Contract Rent Distribution</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Direct automated routing of rental receipts, operational overhead, and investor dividend splits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-semibold">
                <Activity className="w-4 h-4" />
                <span>Tenant OS</span>
              </div>
              <h3 className="font-bold text-slate-200 text-sm">Facility Management Suite</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Digital key issuance, maintenance dispatch, and automated electricity token metering for student residents.
              </p>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}