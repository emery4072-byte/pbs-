/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, HardHat, Sparkles, Scale, CheckCircle2, ChevronRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState<'assessment' | 'materials' | 'supervision' | 'handover'>('assessment');

  const lifecycleSteps = [
    {
      id: 'assessment',
      title: '1. On-Site Assessment',
      subtitle: 'The foundation of planning',
      description: 'We visit your property, drill soil samples if needed, measure parameters, and discuss structural layouts in detail to coordinate an itemized, exact physical action scope.',
      checklist: ['Free site assessments in Tuschen & surrounding areas', 'Full structural condition diagnostics', 'Elevation and boundary inspections']
    },
    {
      id: 'materials',
      title: '2. Material Procurement Audits',
      subtitle: 'Recipe for durable construction',
      description: 'We supply high-grade certified concrete mixes, reinforcement rebar, and premium treated Guyanese hardwoods. You audit every single direct invoice before purchase.',
      checklist: ['Guaranteed raw product grades', 'Local procurement logs checked twice', '0% markup on logistics delivery']
    },
    {
      id: 'supervision',
      title: '3. Supervised Workmanship',
      subtitle: 'Daily expert coordination',
      description: 'Every site has an experienced master-builder and general foreman. We communicate daily by send video and image progress logs directly to your WhatsApp.',
      checklist: ['No unsupervised subcontractor builders', 'Weekly progress reporting schedule', 'High physical site safety rules enforced']
    },
    {
      id: 'handover',
      title: '4. Quality Finish Sign-off',
      subtitle: 'Guaranteeing your dream space',
      description: 'Before we hand over keys or sign off, we execute a comprehensive 120-point checklist covering electrical loads, water pressure lines, tiling consistency, and paint sealants.',
      checklist: ['Elite micro-gap joint alignments', 'Professional cleanups and debris hauling', 'Standard post-build structural warranty support']
    }
  ];

  const activeStepData = lifecycleSteps.find((s) => s.id === activeTab) || lifecycleSteps[0];

  const sellingPoints = [
    {
      title: 'Local Tuschen Presence',
      description: 'Our HQ is located at Old Scheme 52, Tuschen. We live and build here, making us hyper-accessible for local site reviews.',
      icon: <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
    },
    {
      title: 'Rigorous Code Compliance',
      description: 'Our concrete mix ratios and structural steel depths adhere to international and Guyana standards to resist humidity and shifts.',
      icon: <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
    },
    {
      title: '0% Surprise Expenses',
      description: 'We commit to a rigid fixed-price contract. What we quote is what you pay—no sudden additions midway.',
      icon: <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
    },
    {
      title: 'Owner-Direct Accountability',
      description: 'Speak directly to the managing builder. Call +592 698-2072 for responsive resolutions during projects.',
      icon: <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
    }
  ];

  return (
    <section id="why-us" className="relative bg-white py-20 sm:py-24 border-b border-slate-205">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-[10.5px] font-bold text-blue-700 uppercase tracking-widest font-mono">
            Structural Integrity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight font-display">
            Why Guyana Chooses PSB Contracting
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-sans">
            We reject corner-cutting and high-pressure sales. We run our construction sites with clean management, transparency, and top-tier local craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Build Lifecycle Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden backdrop-blur-sm self-stretch">
            <div className="flex items-center gap-2 mb-6">
              <HardHat className="h-5 w-5 text-blue-700 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                How We Execute Your Build Plan
              </h3>
            </div>

            {/* Stepper Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3 h-auto">
              {lifecycleSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id as any)}
                  className={`text-xs font-semibold py-2 px-3 rounded-xl transition-all cursor-pointer ${
                    activeTab === step.id
                      ? 'bg-blue-700 text-white shadow-md font-bold'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {step.title.split('.')[1].trim()}
                </button>
              ))}
            </div>

            {/* Tab content viewer */}
            <div className="min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 font-display flex items-center gap-2 flex-wrap">
                      {activeStepData.title}
                      <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-normal font-mono uppercase">
                        {activeStepData.subtitle}
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-sans mt-2">
                      {activeStepData.description}
                    </p>
                  </div>

                  <div className="bg-white p-4 border border-slate-200 rounded-xl space-y-2 shadow-sm">
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-450 tracking-wider">
                      Included Work Processes
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeStepData.checklist.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-blue-700 flex-shrink-0" />
                          <span className="truncate font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Key Value points & Brand Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Stats list */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center shadow-sm">
                <span className="block font-display font-extrabold text-3xl text-blue-700">100%</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono mt-1 block">Tuschen Quality</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center shadow-sm">
                <span className="block font-display font-extrabold text-3xl text-blue-700">0</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono mt-1 block">Hidden Extras</span>
              </div>
            </div>

            {/* Core USPs */}
            <div className="space-y-4">
              {sellingPoints.map((pt, i) => (
                <div key={i} className="flex gap-3 bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/50 p-4 rounded-2xl transition">
                  {pt.icon}
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 font-display">{pt.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1 font-sans">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* High Converting Action Banner */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-5 shadow-lg relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 translate-y-1/3 translate-x-1/6 pointer-events-none opacity-10 text-white">
                <ShieldCheck className="h-32 w-32" />
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-white leading-tight">
                    Want to inspect material logs?
                  </h4>
                  <p className="text-xs text-blue-100 font-medium font-sans mt-1">
                    See our standard material breakdowns and price lists today.
                  </p>
                </div>
                <a
                  href="tel:+5926982072"
                  className="bg-white hover:bg-slate-100 text-blue-700 font-bold px-4 py-2.5 rounded-xl text-xs uppercase font-mono tracking-wider transition-all shadow-md flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  Request list Call
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
