'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#050914]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Clean Logo Image & Corporate Title (Outer box container removed) */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <Image
            src="/logo.png"
            alt="Arkan Technologies Limited Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-wider text-slate-100 group-hover:text-emerald-400 transition-colors">
              ARKAN
            </span>
            <span className="text-[10px] tracking-[0.2em] font-mono text-slate-400 uppercase -mt-1">
              Technologies Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-sans">
          <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
            Overview
          </Link>
          <Link href="/portfolio" className="text-slate-300 hover:text-emerald-400 transition-colors">
            Portfolio & DePIN
          </Link>
          <Link href="/governance" className="text-slate-300 hover:text-emerald-400 transition-colors">
            Governance
          </Link>
          <Link href="/team" className="text-slate-300 hover:text-emerald-400 transition-colors">
            Leadership
          </Link>
        </nav>

        {/* Institutional Verification Badge / Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>RC: {COMPANY_DETAILS.rcNumber}</span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 font-sans">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-2 text-sm">
            Overview
          </Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-2 text-sm">
            Portfolio & DePIN
          </Link>
          <Link href="/governance" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-2 text-sm">
            Governance
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-2 text-sm">
            Leadership
          </Link>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">RC: {COMPANY_DETAILS.rcNumber}</span>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs uppercase"
            >
              Inquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}