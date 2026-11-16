'use client';

import { useState } from 'react';
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, ChevronDown, Check, Loader2 } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const inquiryOptions = [
    "Investor Relations & Capital",
    "SunStaker Microgrid Pilot / Telemetry",
    "Binaa Homes Hostel Leasehold Partnership",
    "Statutory & Legal Compliance"
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: inquiryOptions[0],
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050914] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL & PARTNER INQUIRIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Connect with <span className="text-gradient-emerald">Arkan Technologies</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Direct channel for real estate developers, renewable energy partners, venture investors, and statutory inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: DIRECT CONTACT DETAILS */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-100">Registered Corporate Headquarters</h3>
              
              <div className="space-y-4 text-xs font-mono text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block mb-0.5">Physical Address:</span>
                    <span className="text-slate-200 leading-relaxed font-sans">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block mb-0.5">Corporate Email:</span>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-emerald-400 hover:underline">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block mb-0.5">Telephone:</span>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-cyan-400 hover:underline">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CAC RC: {COMPANY_DETAILS.rcNumber}</span>
              </div>
              <span className="text-cyan-400">TIN: {COMPANY_DETAILS.tin}</span>
            </div>
          </div>

          {/* RIGHT: FORM WITH BACKEND INTEGRATION */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-800 relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">Inquiry Transmitted</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you for reaching out to Arkan Technologies Limited. Your inquiry has been stored and routed directly to our executive inbox.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-slate-100 mb-2">Send an Institutional Inquiry</h3>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-400">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Olumide Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Corporate / Personal Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Organization / Entity</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Firm / Institutional Fund / Partner"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                  />
                </div>

                {/* GLASSMORPHIC CUSTOM DROPDOWN */}
                <div className="relative">
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Inquiry Focus</label>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs flex items-center justify-between focus:outline-none focus:border-emerald-500 transition-all font-sans text-left cursor-pointer"
                  >
                    <span>{formData.inquiryType}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute z-30 left-0 right-0 mt-2 rounded-xl bg-[#0b1220]/95 backdrop-blur-md border border-slate-700 shadow-2xl py-1 overflow-hidden font-sans">
                      {inquiryOptions.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            setFormData({ ...formData, inquiryType: option });
                            setDropdownOpen(false);
                          }}
                          className={`px-4 py-3 text-xs flex items-center justify-between cursor-pointer hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors ${
                            formData.inquiryType === option ? 'text-emerald-400 bg-slate-900/80 font-semibold' : 'text-slate-300'
                          }`}
                        >
                          <span>{option}</span>
                          {formData.inquiryType === option && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details of your proposal or institutional request..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}