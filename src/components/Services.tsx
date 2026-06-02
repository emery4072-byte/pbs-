/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Home, Building2, Hammer, ShieldAlert, Briefcase, Wrench, ChevronRight, ArrowRight, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="h-6 w-6 text-blue-700" />;
      case 'Building2':
        return <Building2 className="h-6 w-6 text-blue-700" />;
      case 'Hammer':
        return <Hammer className="h-6 w-6 text-blue-700" />;
      case 'ShieldAlert':
        return <ShieldAlert className="h-6 w-6 text-blue-700" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-blue-700" />;
      case 'Wrench':
        return <Wrench className="h-6 w-6 text-blue-700" />;
      default:
        return <Hammer className="h-6 w-6 text-blue-700" />;
    }
  };

  const handleInquireClick = (service: ServiceItem) => {
    setActiveModalService(null);
    onSelectService(service.name);
    
    // Smooth scroll to hero form
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const selectElem = document.getElementById('service-select');
      heroSection.scrollIntoView({ behavior: 'smooth' });
      
      // Highlight the select input box temporarily
      setTimeout(() => {
        if (selectElem) {
          selectElem.focus();
          selectElem.classList.add('ring-2', 'ring-blue-700');
          setTimeout(() => {
            selectElem.classList.remove('ring-2', 'ring-blue-700');
          }, 1500);
        }
      }, 800);
    }
  };

  return (
    <section id="services" className="relative bg-slate-50 py-20 sm:py-24 border-b border-slate-200">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10.5px] font-bold text-blue-700 uppercase tracking-widest font-mono">
            Craftsmanship Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight font-display">
            Our Professional Contracting Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-sans">
            From luxury custom homes to commercial warehouses, we deploy fully supervised construction tradesmen for maximum structural excellence.
          </p>
        </div>

        {/* Services Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200 hover:border-blue-500/30 shadow-sm duration-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer hover:shadow-md"
              onClick={() => setActiveModalService(service)}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl group-hover:bg-blue-100 group-hover:border-blue-700/20 transition-all font-bold">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors font-display">
                    {service.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-550 leading-relaxed font-sans mb-6 line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 group-hover:text-blue-700 duration-300 font-mono uppercase tracking-wider">
                <span>Explore service benefits</span>
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1.5 duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setActiveModalService(null)}
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-slate-200 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 bg-slate-50 border border-slate-200 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                aria-label="Close panel"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3.5 mb-4 mt-2">
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                  {getServiceIcon(activeModalService.icon)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {activeModalService.name}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest font-mono">Overview Description</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1.5 font-sans">
                    {activeModalService.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest font-mono mb-2">Key Quality Deliverables</h4>
                  <ul className="space-y-2.5">
                    {activeModalService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-650">
                        <span className="bg-blue-100 text-blue-700 p-0.5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-sans font-medium line-clamp-2">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-150 mt-2">
                  <button
                    onClick={() => handleInquireClick(activeModalService)}
                    className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-750/20 transition-all cursor-pointer"
                  >
                    <span>Instant Quote Request</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setActiveModalService(null)}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 font-semibold py-3 px-4 rounded-xl border border-slate-200 text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Close info dialog
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
