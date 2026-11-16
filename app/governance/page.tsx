import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ShieldCheck, FileText, Download, Building2, CheckCircle, ExternalLink } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";

export default function GovernancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050914] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STATUTORY COMPLIANCE & GOVERNANCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Corporate Governance & <span className="text-gradient-emerald">Compliance</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Official statutory records, company registration verification, and regulatory compliance under the Companies and Allied Matters Act (CAMA) 2020.
          </p>
        </div>

        {/* REGISTRATION CARDS */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 relative space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs uppercase font-semibold">
              <Building2 className="w-5 h-5" />
              <span>Corporate Affairs Commission (CAC)</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100">{COMPANY_DETAILS.legalName}</h3>
            <div className="space-y-2 text-xs font-mono text-slate-300 pt-2">
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">RC Number:</span>
                <span className="text-emerald-400 font-semibold">{COMPANY_DETAILS.rcNumber}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Tax Identification No (TIN):</span>
                <span className="text-cyan-400 font-semibold">{COMPANY_DETAILS.tin}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Legal Entity Type:</span>
                <span>Private Limited Liability Company</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Governing Statute:</span>
                <span>CAMA 2020 (Federal Republic of Nigeria)</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800 relative space-y-4">
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase font-semibold">
              <ShieldCheck className="w-5 h-5" />
              <span>Secretariat & Registered Office</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Olanrewaju Wahab & Co</h3>
            <p className="text-xs text-slate-400 font-mono">Company Secretary</p>
            <div className="space-y-2 text-xs font-mono text-slate-300 pt-2">
              <div className="py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400 block mb-1">Registered Address:</span>
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Startup Act Status:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Labeling Application Active
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">IP Transfer Status:</span>
                <span className="text-emerald-400">Executed & Vested in Company</span>
              </div>
            </div>
          </div>

        </section>

        {/* PUBLIC VERIFICATION & DOWNLOADABLE DOCUMENTS */}
        <section className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <FileText className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-slate-100">Statutory Documents & Engineering Audits</h2>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Access official technical reports and legal assignment deeds.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            
            {/* AUDIT REPORT DOWNLOAD */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200">Energy Infrastructure Audit & DePIN Feasibility</h4>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">Ref: ATL/SAR/2026/01 • Firdaus-Gate CBT Center</p>
              </div>
              <a
                href="/documents/ENERGY_INFRASTRUCTURE_AUDIT_REPORT.pdf"
                download="Arkan_Energy_Infrastructure_Audit_Report.pdf"
                className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>

            {/* DEED OF IP ASSIGNMENT DOWNLOAD */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-200">Deed of Intellectual Property Assignment</h4>
                <p className="text-[10px] font-mono text-slate-400 mt-0.5">SunStaker Firmware & Binaa Homes Protocol</p>
              </div>
              <a
                href="/documents/DEED_OF_INTELLECTUAL_PROPERTY_ASSIGNMENT.pdf"
                download="Arkan_Deed_of_IP_Assignment.pdf"
                className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}