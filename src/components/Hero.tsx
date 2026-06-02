/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle, Clock, ShieldCheck, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Lead } from '../types';

import heroBg from '../assets/images/hero_construction_1780355640017.png';

interface HeroProps {
  onLeadSubmit: (lead: Lead) => void;
  selectedPresetService?: string;
}

export default function Hero({ onLeadSubmit, selectedPresetService }: HeroProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Construction',
    projectType: 'residential' as 'residential' | 'commercial' | 'maintenance' | 'other',
    details: '',
    budget: '$5,000 - $15,050 USD equivalent' // updated format
  });

  useEffect(() => {
    if (selectedPresetService) {
      let mappedType: 'residential' | 'commercial' | 'maintenance' | 'other' = 'other';
      if (selectedPresetService === 'Residential Construction') mappedType = 'residential';
      else if (selectedPresetService === 'Commercial Construction') mappedType = 'commercial';
      else if (selectedPresetService === 'Property Maintenance' || selectedPresetService === 'Repairs & Upgrades') mappedType = 'maintenance';
      
      setFormData((prev) => ({
        ...prev,
        service: selectedPresetService,
        projectType: mappedType
      }));
    }
  }, [selectedPresetService]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: 'residential', label: 'Residential Construction' },
    { value: 'commercial', label: 'Commercial Construction' },
    { value: 'renovations', label: 'Building Renovations' },
    { value: 'maintenance', label: 'Property Maintenance' },
    { value: 'contracting', label: 'General Contracting' },
    { value: 'repairs', label: 'Repairs & Upgrades' }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'service') {
      let mappedType: 'residential' | 'commercial' | 'maintenance' | 'other' = 'other';
      if (value === 'Residential Construction') mappedType = 'residential';
      else if (value === 'Commercial Construction') mappedType = 'commercial';
      else if (value === 'Property Maintenance' || value === 'Repairs & Upgrades') mappedType = 'maintenance';
      
      setFormData((prev) => ({
        ...prev,
        service: value,
        projectType: mappedType
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newLead: Lead = {
      id: 'lead-' + Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      projectDetails: formData.details || 'No details provided.',
      submittedAt: new Date().toISOString(),
      status: 'new',
      budget: formData.budget,
      projectType: formData.projectType
    };

    onLeadSubmit(newLead);
    setIsSubmitted(true);
  };

  return (
    <section id="home" className="relative bg-slate-50 min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Image Layer with rich overlay gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="PSB Contracting Underway"
          className="w-full h-full object-cover opacity-15 filter brightness-95 scale-105 transform hover:scale-100 transition-transform duration-10000"
          referrerPolicy="no-referrer"
        />
        {/* Subtle radial and linear overlays to highlight text & form */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-205/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Left Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-sm self-start"
            >
              <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase font-mono">
                Licensed Guyana General Contractors
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-display"
            >
              Building Quality <br />
              <span className="text-blue-700">
                You Can Trust
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans"
            >
              Professional construction, renovation, and contracting services delivering reliable results across Guyana. Headquartered in Old Scheme 52, Tuschen.
            </motion.p>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-2 max-w-md"
            >
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Guaranteed Quality</h4>
                  <p className="text-xs text-slate-500">Premium hard finishes</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Insured & Registered</h4>
                  <p className="text-xs text-slate-500">Total client protection</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">On-Time Completion</h4>
                  <p className="text-xs text-slate-500">Precise structural schedules</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex items-center text-amber-500 flex-shrink-0 mt-1">
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">5-Star Rated</h4>
                  <p className="text-xs text-slate-500">In West Demerara & beyond</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 flex items-center gap-3 bg-blue-50 border border-blue-105 p-3 rounded-xl w-fit"
            >
              <div className="bg-blue-700 text-white p-2 rounded-lg">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 font-mono">Direct Builder Line</p>
                <a href="tel:+5926982072" className="text-base font-bold text-slate-850 hover:text-blue-700 transition-colors">
                  +592 698-2072
                </a>
              </div>
            </motion.div>
          </div>

          {/* Column 2: High Converting Form on the Right */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-md"
            >
              {/* Form header */}
              <div className="mb-6 relative z-10 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Get a Free Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Submit your details and get a customized site valuation estimate.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="quote-form"
                    onSubmit={handleSubmit}
                    className="space-y-4 relative z-10"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div>
                      <label htmlFor="service-select" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Service Requested *
                      </label>
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all font-semibold cursor-pointer"
                        required
                      >
                        {services.map((srv) => (
                          <option key={srv.value} value={srv.label} className="bg-white text-slate-800">
                            {srv.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="client-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          id="client-name"
                          type="text"
                          name="name"
                          placeholder="Devindra Sukhdeo"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="client-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          id="client-phone"
                          type="tel"
                          name="phone"
                          placeholder="+592 6XX-XXXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="client-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="project-details" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Project Details / Scope
                      </label>
                      <textarea
                        id="project-details"
                        name="details"
                        rows={3}
                        placeholder="Describe what you want to construct, renovate, or repair..."
                        value={formData.details}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:border-blue-700 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                      <span>Submit Quote Request</span>
                    </button>

                    <div className="text-center">
                      <span className="text-[10.5px] text-slate-400 font-mono inline-flex items-center gap-1.5 justify-center">
                        <Clock className="w-3 h-3 text-blue-700" />
                        Average contractor reply: 2 hours
                      </span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 relative z-10 space-y-4"
                  >
                    <div className="inline-flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 p-4 rounded-full w-fit mx-auto mb-2 animate-bounce">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-900 font-display">
                      Project Received, {formData.name}!
                    </h4>
                    
                    <div className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Thank you for contacting PSB Contracting. We have logged your request for <strong className="text-blue-700">{formData.service}</strong> to our Tuschen headquarters.
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-sm mx-auto text-left space-y-2">
                      <div className="text-xs font-bold uppercase text-slate-500 tracking-wide">Next steps for you:</div>
                      <ol className="text-xs text-slate-600 space-y-1.5 list-decimal pl-4">
                        <li>Our managing estimator will call you at <strong className="text-slate-900">{formData.phone}</strong>.</li>
                        <li>We will coordinate a convenient, free physical site inspection.</li>
                        <li>You will receive a complete itemized material list & budget quote.</li>
                      </ol>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors uppercase tracking-wider font-mono bg-slate-50 border border-slate-200 py-2 px-4 rounded-xl hover:bg-slate-100 cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
