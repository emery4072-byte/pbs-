/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MapPin, Clock, Hammer, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('home');
    if (element) {
      const selectElem = document.getElementById('service-select');
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus
      setTimeout(() => {
        if (selectElem) {
          selectElem.focus();
        }
      }, 800);
    }
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 text-slate-300 group">
      
      {/* 1. Final Call To Action (Requested CTA section) */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 py-16 sm:py-20 border-b border-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.08),rgba(0,0,0,0))]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-blue-105 text-[10.5px] font-bold font-mono px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <ShieldCheck className="h-4.5 w-4.5 text-white animate-pulse" />
            0% Consultation Commitment
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display max-w-2xl mx-auto">
            Ready to Build Your <br className="hidden sm:inline" />
            <span className="text-sky-305">Dream Structure?</span>
          </h2>

          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
            Get an honest, complete physical site inspection and a detailed, transparent budget quote—absolutely free, with no obligation to construct.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#home"
              onClick={handleScrollToForm}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-blue-800 font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-white/20 transition-all text-xs uppercase font-mono tracking-widest text-center cursor-pointer"
            >
              Get Free Assessment Quote
            </a>
            <a
              href="tel:+5926982072"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-8 border border-white/20 rounded-xl text-xs uppercase font-mono tracking-widest text-center flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Phone className="h-4.5 w-4.5 text-white" />
              <span>Call +592 698-2072</span>
            </a>
          </div>

          <div className="text-[11px] text-blue-200/80 font-mono pt-2">
            * Headquartered at Old Scheme 52, Tuschen. Sourcing direct hardwood and high-grade steel *
          </div>
        </div>
      </div>

      {/* 2. Structured Information Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Identity info representation */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-1">
              <div className="bg-blue-700 text-white p-2 rounded-lg font-bold">
                <Hammer className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  PSB CONTRACTING
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              PSB Contracting is an authorized and locally registered Guyana construction company that services residential, commercial, and industrial property developments with absolute accountability.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Old Scheme 52, Tuschen, East Bank Essequibo, Guyana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-blue-500 flex-shrink-0" />
                <a href="tel:+5926982072" className="hover:text-blue-450 transition">
                  +592 698-2072
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4.5 w-4.5 text-blue-500 flex-shrink-0" />
                <span>Monday - Saturday: 7:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Our Coverage Radius in Guyana
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              We mobilize our construction crews and heavy machinery to sites throughout the following primary locations:
            </p>

            <ul className="text-xs text-slate-400 grid grid-cols-2 gap-2 font-sans font-medium">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Tuschen / EBE
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Vreed-en-Hoop
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Parika / Hubu
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Leonora / Stewartville
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Georgetown / Region 4
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                East Coast Demerara
              </li>
            </ul>
          </div>

          {/* Interactive Mock Map/Radius Card */}
          <div className="md:col-span-4 space-y-3 w-full">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              HQ Site Location Map
            </h3>

            {/* Custom stylized vector map of EBE Guyana Coastline area for premium representation */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 overflow-hidden relative shadow-inner">
              <div className="absolute top-1 right-2 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider font-mono bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800 text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                Tuschen Center
              </div>

              {/* Graphic map grid illustration */}
              <div className="h-28 flex flex-col justify-between relative max-w-full">
                
                {/* Simulated Coastline line */}
                <div className="absolute top-2 w-full h-[2px] bg-slate-800"></div>
                <div className="absolute top-1.5 left-[40%] px-1.5 py-0.5 rounded bg-slate-900/70 text-[7px] text-slate-500 uppercase tracking-widest font-mono">Atlantic Ocean</div>

                {/* Simulated Roads layout */}
                <div className="absolute left-[30%] w-[1px] h-full bg-slate-800"></div>
                <div className="absolute top-12 left-0 w-full h-[1px] bg-slate-800"></div>
                
                {/* Essequibo River representation */}
                <div className="absolute left-1.5 top-5 w-12 h-20 bg-blue-950/20 rounded-full blur-sm border border-blue-900/10"></div>
                <div className="absolute left-4 top-14 text-[7px] font-mono text-slate-600 uppercase">Essequibo River</div>

                {/* Main highway label */}
                <div className="absolute top-[37px] right-2 text-[7px] font-mono text-slate-600 uppercase tracking-wider">West Coast Highway</div>
                <div className="absolute top-10 left-0 w-full h-[2px] bg-blue-500/5"></div>

                {/* Local marker pin */}
                <div className="absolute top-12 left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
                  <div className="w-7 h-7 bg-blue-700 text-white flex items-center justify-center rounded-full shadow-lg border-2 border-white animate-bounce">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="bg-slate-900 text-white text-[8px] font-mono py-0.5 px-1.5 rounded border border-slate-800 block mt-1">
                    PSB HQ
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 text-left font-mono leading-tight">
              * Old Scheme 52, Tuschen. Reach our planning supervisors for free physical layout drawings. *
            </p>
          </div>

        </div>

        {/* 3. Sub-footer Rights Block */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} PSB Contracting. All rights protected under local registration.</p>
            <p className="text-[10.5px]">Old Scheme 52, Tuschen, East Bank Essequibo, Guyana.</p>
          </div>

          <div className="flex items-center gap-1 font-mono text-[10px] hover:text-blue-400 transition cursor-pointer" title="Authentic Professional Execution">
            <span>Constructed with precision & integrity in Guyana</span>
            <Heart className="h-3 w-3 text-blue-500 fill-blue-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
