import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import { Users, ExternalLink, ShieldCheck } from "lucide-react";
import { FOUNDERS, COMPANY_DETAILS } from "@/lib/constants";

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050914] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>EXECUTIVE GOVERNANCE & FOUNDERS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Leadership & <span className="text-gradient-emerald">Board of Directors</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            The founding executive team directing technology architecture, commercial expansion, and operational deployment for Arkan Technologies Limited.
          </p>
        </div>

        {/* FOUNDERS GRID */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          
          {FOUNDERS.map((founder) => (
            <div
              key={founder.id}
              className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-5">
                {/* JPG PROFILE PHOTO DISPLAY */}
                <div className="flex items-center justify-between">
                  <div className="relative w-20 h-20 rounded-2xl bg-slate-900 border-2 border-slate-800 overflow-hidden flex items-center justify-center text-xl font-bold text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800/40">
                    Executive Director
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {founder.role}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light pt-2 border-t border-slate-800/80">
                  {founder.focus}
                </p>
              </div>

              {/* LINKEDIN PROFILE BUTTON */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Board Member</span>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400 flex items-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          ))}

        </section>

        {/* SECRETARY & ADVISORY PANEL */}
        <section className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100">Olanrewaju Wahab & Co</h4>
              <p className="text-xs font-mono text-slate-400">Statutory Company Secretariat & Legal Counsel</p>
            </div>
          </div>
          <a
            href={COMPANY_DETAILS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-2 transition-colors"
          >
            <span>GitHub Organization</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
}