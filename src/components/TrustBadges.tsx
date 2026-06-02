/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Award, FileText, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { TRUST_BADGES_DATA } from '../data';

export default function TrustBadges() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="h-7 w-7 text-blue-700" />;
      case 'Award':
        return <Award className="h-7 w-7 text-blue-700" />;
      case 'FileText':
        return <FileText className="h-7 w-7 text-blue-700" />;
      case 'MapPin':
        return <MapPin className="h-7 w-7 text-blue-700" />;
      default:
        return <ShieldCheck className="h-7 w-7 text-blue-700" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="relative bg-white border-y border-slate-200 py-16">
      <div className="absolute inset-0 bg-slate-50/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-[10.5px] font-bold text-blue-700 uppercase tracking-widest font-mono">
            Direct Accountability
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-display">
            The PSB Contracting Commitment
          </h2>
          <p className="text-xs sm:text-sm text-slate-550 mt-2 font-sans">
            We operate with absolute commercial professionalism, premium local carpentry, and meticulous concrete execution.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TRUST_BADGES_DATA.map((badge) => (
            <motion.div
              key={badge.id}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: '#1d4ed8' }}
              className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left transition-all backdrop-blur-sm group hover:bg-white"
            >
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl mb-4 group-hover:bg-blue-100 transition-all flex items-center justify-center">
                {getIcon(badge.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors font-display animate-fade-in">
                {badge.title}
              </h3>
              <p className="text-xs text-slate-550 leading-relaxed mt-2 font-sans">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
