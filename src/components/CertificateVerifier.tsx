import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_CERTIFICATES } from '../data/mockData';
import { CertificateRecord } from '../types';
import {
  FileCheck,
  ShieldCheck,
  Search,
  CheckCircle2,
  Award,
  Download,
  Share2,
  QrCode,
  Calendar,
  Sparkles
} from 'lucide-react';

export const CertificateVerifier: React.FC = () => {
  const { showToast } = useApp();
  const [certIdInput, setCertIdInput] = useState('BL-2026-IND-8942');
  const [searchedCert, setSearchedCert] = useState<CertificateRecord | null>(ALL_CERTIFICATES[0]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = certIdInput.trim().toUpperCase();
    const found = ALL_CERTIFICATES.find((c) => c.certificateId.toUpperCase() === query);
    setSearchedCert(found || null);
    setHasSearched(true);
    if (found) {
      showToast('Certificate Verified in National Registry', 'success');
    } else {
      showToast('No record found with that Certificate ID', 'error');
    }
  };

  return (
    <div id="certificate-verifier-view" className="py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          National Credential Registry
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
          Digital Certificate Verification
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Verify tamper-proof credentials issued by the BharatLearn digital education ecosystem. Every certificate is cryptographically backed and mapped to national skill frameworks.
        </p>

        {/* Verification Search Form */}
        <form onSubmit={handleSearch} className="pt-3 max-w-lg mx-auto flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={certIdInput}
              onChange={(e) => setCertIdInput(e.target.value)}
              placeholder="Enter Certificate ID (e.g. BL-2026-IND-8942)"
              className="w-full pl-9 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 uppercase font-mono tracking-wider"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-emerald-950 flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" /> Verify
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
          <span>Sample IDs:</span>
          <button
            onClick={() => setCertIdInput('BL-2026-IND-8942')}
            className="text-amber-400 hover:underline font-mono"
          >
            BL-2026-IND-8942
          </button>
          <span>•</span>
          <button
            onClick={() => setCertIdInput('BL-2026-IND-5521')}
            className="text-amber-400 hover:underline font-mono"
          >
            BL-2026-IND-5521
          </button>
        </div>
      </div>

      {/* Result Display */}
      {hasSearched && (
        <div className="max-w-3xl mx-auto">
          {searchedCert ? (
            <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
              
              {/* Decorative Corner Seals */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 block">
                      OFFICIALLY VERIFIED & ACTIVE
                    </span>
                    <span className="text-[10px] text-slate-400">
                      National Registry Status: Cryptographically Valid
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  {searchedCert.certificateId}
                </span>
              </div>

              {/* Certificate Canvas Body */}
              <div className="text-center space-y-4 py-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-emerald-500 p-0.5">
                    <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center text-xs font-black text-amber-400">
                      भ
                    </div>
                  </div>
                  <span className="text-lg font-black tracking-wider text-white font-display uppercase">
                    <span className="text-bharat">Bharat</span>Learn National Credential
                  </span>
                </div>

                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  This is to certify that
                </p>

                <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200 font-display">
                  {searchedCert.studentName}
                </h3>

                <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                  has demonstrated rigorous conceptual mastery and completed national hands-on practical requirements for:
                </p>

                <h4 className="text-xl sm:text-2xl font-black text-white font-display">
                  {searchedCert.courseTitle}
                </h4>

                <div className="flex items-center justify-center gap-4 text-xs pt-2">
                  <span className="text-slate-300">
                    Grade/Score: <strong className="text-emerald-400 font-bold">{searchedCert.gradeScore}</strong>
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300">
                    Issued: <strong className="text-slate-100">{searchedCert.dateIssued}</strong>
                  </span>
                </div>

                {/* Skills Verified Tags */}
                <div className="pt-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Verified Competency Outcomes:
                  </span>
                  <div className="flex flex-wrap justify-center gap-1.5 max-w-md mx-auto">
                    {searchedCert.skillsVerified.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-sky-300"
                      >
                        ✓ {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Signatures & QR Code */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-lg">
                    {/* Simulated SVG QR Code */}
                    <div className="w-full h-full bg-slate-950 rounded flex items-center justify-center text-white">
                      <QrCode className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="text-left space-y-0.5">
                    <p className="font-bold text-slate-200">Scan for Verification</p>
                    <p className="text-[10px] text-slate-500 font-mono">SHA-256 Signature Verified</p>
                    <p className="text-[10px] text-emerald-400">Issuer: {searchedCert.issuerAuthority}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => showToast('Certificate downloaded as PDF', 'success')}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      showToast('Verification URL copied to clipboard', 'info');
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Share Credential
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">No Certificate Found</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No active registry record matches “{certIdInput}”. Please check for typographical errors or try sample ID <strong>BL-2026-IND-8942</strong>.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
