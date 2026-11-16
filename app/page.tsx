import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { Cpu, Home, ArrowUpRight, FileText, ExternalLink } from "lucide-react";
import { VERTICALS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050914] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* HERO SECTION */}
        <section className="relative text-center py-12 md:py-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>INSTITUTIONAL HARDWARE & RWA INFRASTRUCTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Engineering Telemetry & <br />
            <span className="text-gradient-emerald">Real-World Assets</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Arkan Technologies Limited designs proprietary IoT solar telemetry hardware, automated microgrid circuit protocols, and enterprise real-world asset solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] inline-flex items-center gap-2"
            >
              <span>Explore SunStaker DePIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/governance"
              className="px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800/80 text-slate-200 font-medium text-sm tracking-wide transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Corporate Governance</span>
            </Link>
          </div>
        </section>

        {/* DUAL VERTICAL SHOWCASE CARDS */}
        <section className="py-12 grid md:grid-cols-2 gap-8">
          
          {/* VERTICAL 1: SUNSTAKER */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Cpu className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800/40">
                IoT & DePIN
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              {VERTICALS.sunstaker.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
              {VERTICALS.sunstaker.subtitle}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {VERTICALS.sunstaker.description}
            </p>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <a
                href={VERTICALS.sunstaker.zenodoRecord}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
              >
                <span>Zenodo Record</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
              <Link href="/portfolio" className="text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                Read Spec →
              </Link>
            </div>
          </div>

          {/* VERTICAL 2: BINAA HOMES */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Home className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/40">
                PropTech & RWA
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {VERTICALS.binaaHomes.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
              {VERTICALS.binaaHomes.subtitle}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {VERTICALS.binaaHomes.description}
            </p>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Leasehold Smart Contracts</span>
              <Link href="/portfolio" className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                Explore Platform →
              </Link>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}