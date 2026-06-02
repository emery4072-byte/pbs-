/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, X, Phone, Clock, Send, ShieldCheck, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Residential Construction');
  const [clientName, setClientName] = useState('');
  const [customDetail, setCustomDetail] = useState('');

  const services = [
    { name: 'Residential Construction', desc: 'New houses, concrete extensions, veranda additions' },
    { name: 'Commercial Construction', desc: 'Plazas, commercial foundation, structural steel' },
    { name: 'Building Renovations', desc: 'Overhauls, premium modern kitchen / tile fitouts' },
    { name: 'Property Maintenance', desc: 'Slab inspections, roof sealants, Coastal treatments' },
    { name: 'General Contracting', desc: 'Owner-direct build projects & materials logistics' },
    { name: 'Repairs & Upgrades', desc: 'Hardwood upgrades, concrete reinforcements' }
  ];

  // Helper to generate the URL for WhatsApp
  const phoneVal = '5926982072'; // +592 698-2072
  const buildWhatsAppUrl = () => {
    let text = `Hello PSB Contracting!`;
    
    if (clientName.trim()) {
      text += ` My name is ${clientName.trim()}.`;
    }
    
    text += ` I am interested in your "${selectedService}" service.`;
    
    if (customDetail.trim()) {
      text += ` Specifically: ${customDetail.trim()}.`;
    } else {
      text += ` I would like to arrange a free physical site inspection and cost estimate in West Demerara / EBE Coast area.`;
    }

    text += ` Could you please let me know when your estimator can contact me?`;

    return `https://wa.me/${phoneVal}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-5 left-5 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 transform hover:scale-[1.05] active:scale-95 transition-all outline-none focus:ring-4 focus:ring-emerald-500/30 group cursor-pointer border border-emerald-500"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 1 }}
          title="Chat directly on WhatsApp"
        >
          {/* Pulse ring animation around the WhatsApp bubble */}
          <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping pointer-events-none scale-125"></span>
          
          <MessageCircle className="h-5.5 w-5.5" />
          
          <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-xs font-bold font-mono tracking-wider uppercase whitespace-nowrap inline-block text-white">
            WhatsApp PSB
          </span>

          {/* Quick unread dot representation for human interaction realism */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border border-white rounded-full animate-pulse"></span>
        </motion.button>
      </div>

      {/* Floating Chat Panel overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-24 left-5 z-55 w-[calc(100vw-40px)] max-w-sm">
            {/* Backdrop for close trigger click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-transparent z-0 pointer-events-auto"
            />

            {/* Widget Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative z-10 w-full"
            >
              {/* Card Green Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-5 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 p-1.5 rounded-lg transition text-white cursor-pointer"
                  aria-label="Close WhatsApp chat panel"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-white/10 p-2.5 rounded-full border border-white/20 flex items-center justify-center">
                      <MessageCircle className="h-5.5 w-5.5 text-white" />
                    </div>
                    {/* Active green status indicator */}
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-sm uppercase tracking-wider leading-tight text-white flex items-center gap-1.5">
                      PSB Master-Builder
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-100 font-mono">
                      <span>●</span>
                      <span>Devindra Sukhdeo - Head Office</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content - Forms and Controls */}
              <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto bg-slate-50 text-slate-800 text-left">
                
                {/* Intro pitch */}
                <div className="bg-emerald-50 border border-emerald-100 p-3.5 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 font-mono flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> Hyper-accessible local support
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Choose your service below to generate a pre-filled template message. We will reply instantly via WhatsApp screen!
                  </p>
                </div>

                {/* Input 1: Client Name */}
                <div className="space-y-1">
                  <label htmlFor="wa-client-name" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      id="wa-client-name"
                      type="text"
                      placeholder="e.g. Sharda Ramnarine"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-sans text-left"
                    />
                  </div>
                </div>

                {/* Input 2: Choose Service of Interest */}
                <div className="space-y-1">
                  <label htmlFor="wa-service-select" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block">
                    Interested Service
                  </label>
                  <select
                    id="wa-service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold cursor-pointer text-left"
                  >
                    {services.map((srv) => (
                      <option key={srv.name} value={srv.name}>
                        {srv.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Input 3: Optional custom detail */}
                <div className="space-y-1">
                  <label htmlFor="wa-message-details" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono block">
                    Custom Project Details <span className="text-[9px] text-slate-400 font-normal font-sans">(Optional)</span>
                  </label>
                  <textarea
                    id="wa-message-details"
                    rows={2}
                    placeholder="e.g. Verification on standard Coastal concrete specs layout..."
                    value={customDetail}
                    onChange={(e) => setCustomDetail(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none font-sans text-left"
                  />
                </div>

                {/* Live Message Preview Bubble to raise CTR */}
                <div className="bg-emerald-100/40 border border-emerald-500/10 p-3 rounded-2xl relative space-y-1.5 shadow-inner">
                  <span className="text-[9px] font-mono font-bold text-emerald-800 uppercase tracking-wider block">Live Pre-filled Message Preview</span>
                  <div className="bg-[#DCF8C6] border border-emerald-200 text-slate-800 text-xs p-3 rounded-xl rounded-tl-none font-sans leading-relaxed relative">
                    <p className="line-clamp-4">
                      Hello PSB Contracting! 
                      {clientName.trim() && ` My name is ${clientName.trim()}.`} I am interested in your "{selectedService}" service.
                      {customDetail.trim() ? ` Specifically: ${customDetail.trim()}` : ` I would like to arrange a free physical site inspection and cost estimate in West Demerara / EBE Coast area.`} Could you please let me know when your estimator can contact me?
                    </p>
                    {/* Styling triangle decorator for WhatsApp message bubble */}
                    <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-[#DCF8C6] border-r-[8px] border-r-transparent"></div>
                  </div>
                </div>

                {/* Hot direct click CTA button */}
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4" />
                  <span>Initiate WhatsApp Chat</span>
                </a>

                {/* Fallbacks link and header info */}
                <div className="pt-2.5 border-t border-slate-200 text-center space-y-1.5 text-slate-500 text-[10.5px]">
                  <div className="flex items-center justify-center gap-2 font-mono">
                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Office Active 7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>Or direct phone line:</span>
                    <a href="tel:+5926982072" className="text-blue-700 hover:underline font-bold font-mono">
                      +592 698-2072
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
