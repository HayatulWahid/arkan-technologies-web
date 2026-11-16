'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS, VERTICALS } from '@/lib/constants';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full glass-panel border-t border-slate-800 bg-[#030712]/90 text-slate-400 mt-20 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* COLUMN 1 & 2: CORPORATE IDENTITY */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group inline-flex">
              <Image
                src="/logo.png"
                alt="Arkan Technologies Limited Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wider text-slate-100 group-hover:text-emerald-400 transition-colors">
                  ARKAN
                </span>
                <span className="text-[10px] tracking-[0.2em] font-mono text-slate-400 uppercase -mt-1">
                  Technologies Ltd
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              Arkan Technologies Limited is a registered deep-tech holding enterprise engineering Internet-of-Things (IoT) solar telemetry protocols, smart metering hardware, and real-world asset leasehold infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>RC: {COMPANY_DETAILS.rcNumber}</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400">
                <span>TIN: {COMPANY_DETAILS.tin}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: VERTICALS */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              Verticals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/portfolio" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                  <span>{VERTICALS.sunstaker.title} (DePIN)</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                  <span>{VERTICALS.binaaHomes.title} (RWA)</span>
                </Link>
              </li>
              <li>
                <a 
                  href={VERTICALS.sunstaker.zenodoRecord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors inline-flex items-center gap-1 text-[11px] font-mono text-slate-400"
                >
                  <span>Zenodo Record</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CORPORATE */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Company Overview
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-emerald-400 transition-colors">
                  Statutory Governance
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-emerald-400 transition-colors">
                  Board & Executive Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Investor & Partner Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: REGISTERED OFFICE */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              Registered Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-slate-200 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-slate-200 transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {currentYear} {COMPANY_DETAILS.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>CAMA 2020 Compliant</span>
            <a 
              href={COMPANY_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}