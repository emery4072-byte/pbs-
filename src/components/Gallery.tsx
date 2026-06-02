/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, X, ArrowUpRight, Search, ZoomIn, Calendar, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  onSelectService: (serviceName: string) => void;
}

export default function Gallery({ onSelectService }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Renovations'>('All');
  const [selectedProject, setSelectedProject] = useState<GalleryItem | null>(null);

  const filterTags: ('All' | 'Residential' | 'Commercial' | 'Renovations')[] = [
    'All',
    'Residential',
    'Commercial',
    'Renovations'
  ];

  const filteredProjects = GALLERY_DATA.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  const handleInquireSimilar = (proj: GalleryItem) => {
    setSelectedProject(null);
    let targetService = 'Residential Construction';
    if (proj.category === 'Commercial') targetService = 'Commercial Construction';
    else if (proj.category === 'Renovations') targetService = 'Building Renovations';
    
    onSelectService(targetService);

    // Smooth scroll to hero form
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const selectElem = document.getElementById('service-select');
      heroSection.scrollIntoView({ behavior: 'smooth' });
      
      // Auto-focus Hero form
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
    <section id="gallery" className="relative bg-white py-20 sm:py-24 border-b border-slate-200">
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10.5px] font-bold text-blue-700 uppercase tracking-widest font-mono">
            Bespoke Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight font-display">
            Completed Projects Showcase
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-sans">
            Real structures designed, engineered, and completed across West Demerara, Essequibo, and Georgetown. Every image represents real construction.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`text-xs font-semibold py-2.5 px-4 rounded-xl transition-all uppercase tracking-wider font-mono cursor-pointer ${
                activeFilter === tag
                  ? 'bg-blue-700 text-white font-bold shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm cursor-pointer group flex flex-col justify-between hover:bg-white transition-all hover:shadow-md"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 duration-300 transition-opacity flex items-center justify-center p-4">
                    <div className="bg-blue-700 text-white p-3 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 duration-300 transition-transform">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Absolute badging inside image */}
                  <span className="absolute top-4 left-4 bg-white/95 border border-slate-200 text-blue-700 text-[10px] font-bold font-mono py-1 px-2.5 rounded-full uppercase tracking-wider">
                    {proj.category}
                  </span>
                </div>

                {/* Content description */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-medium font-sans">
                      <MapPin className="h-3.5 w-3.5 text-blue-700" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-800 font-display mt-1 group-hover:text-blue-700 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-2 font-sans leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-blue-700 font-bold font-mono uppercase tracking-wider">
                    <span>Inspect structures</span>
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-slate-200 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-700 p-2 sm:p-2.5 rounded-lg hover:bg-slate-100 hover:scale-105 transition cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Big Image display */}
              <div className="relative aspect-[16/10] bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:left-6">
                  <span className="bg-blue-700 text-white text-[9.5px] font-bold font-mono tracking-widest py-1 px-2.5 rounded-full uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-2 sm:mt-1.5 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Metadata details */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="h-4 w-4 text-blue-700" />
                    <span>Location: <strong className="text-slate-800">{selectedProject.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Calendar className="h-4 w-4 text-blue-700" />
                    <span>Completed: <strong className="text-slate-800">Recent Case Study</strong></span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                    <HardHat className="h-3.5 w-3.5 text-blue-700" />
                    Project Specifications & Scope
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-sans font-normal">
                    {selectedProject.description} Designed according to engineering and load specs to withstand coastal Guyana geotechnical features. Handed over fully vetted.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-150">
                  <button
                    onClick={() => handleInquireSimilar(selectedProject)}
                    className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-700/20 transition-all cursor-pointer"
                  >
                    <span>Request Details for Similar Build</span>
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 font-semibold py-3 px-5 rounded-xl border border-slate-200 text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Back to portfolio
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
