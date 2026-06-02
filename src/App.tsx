/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import FloatingContact from './components/FloatingContact';
import { Lead } from './types';
import { LayoutDashboard } from 'lucide-react';

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedPresetService, setSelectedPresetService] = useState('Residential Construction');

  // Load leads from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('psb_leads');
      if (stored) {
        setLeads(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Error parsing stored leads:', err);
    }
  }, []);

  // Save leads to localStorage on changes
  const saveLeadsToStorage = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    try {
      localStorage.setItem('psb_leads', JSON.stringify(updatedLeads));
    } catch (err) {
      console.error('Error storing leads:', err);
    }
  };

  const handleLeadSubmit = (newLead: Lead) => {
    const updated = [newLead, ...leads];
    saveLeadsToStorage(updated);
  };

  const handleUpdateLeadStatus = (id: string, status: Lead['status']) => {
    const updated = leads.map((lead) =>
      lead.id === id ? { ...lead, status } : lead
    );
    saveLeadsToStorage(updated);
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter((lead) => lead.id !== id);
    saveLeadsToStorage(updated);
  };

  const handleGenerateMockLeads = () => {
    const sampleLeads: Lead[] = [
      {
        id: 'mock-1',
        name: 'Devindra Sukhdeo',
        email: 'devindra@sukhdeopplaza.com',
        phone: '+592 698-1122',
        service: 'Commercial Construction',
        projectDetails: 'We are expanding our retail space facade in Vreed-en-Hoop Plaza. Need structural steel fabrication and modern storefront doors installed within 4 months.',
        submittedAt: new Date(Date.now() - 3600000 * 2).toISOString(), // 2 hours ago
        status: 'new',
        budget: '$45,000 - $100,000 USD equivalent',
        projectType: 'commercial'
      },
      {
        id: 'mock-2',
        name: 'Sharda Ramnarine',
        email: 'sharda.ram@gmail.com',
        phone: '+592 644-8899',
        service: 'Residential Construction',
        projectDetails: 'Looking to add a concrete extension to my cottage property and a custom timber veranda with a hardwood ceiling layout in Tuschen EBE.',
        submittedAt: new Date(Date.now() - 3600000 * 5).toISOString(), // 5 hours ago
        status: 'contacted',
        budget: '$15,000 - $35,000 USD equivalent',
        projectType: 'residential'
      },
      {
        id: 'mock-3',
        name: 'Richard Ally',
        email: 'rich.ally.invest@yahoo.com',
        phone: '+592 612-4545',
        service: 'Property Maintenance',
        projectDetails: 'Need regular structural roof sealants and preventative inspection treatments on three rental complexes in Queenstown, Georgetown.',
        submittedAt: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
        status: 'scheduled',
        budget: 'Under $5,000 USD equivalent',
        projectType: 'maintenance'
      }
    ];

    const currentIds = new Set(leads.map((l) => l.id));
    // Merge only if not already added to avoid duplication confusion
    const toAdd = sampleLeads.filter((sample) => !currentIds.has(sample.id));
    
    if (toAdd.length > 0) {
      saveLeadsToStorage([...leads, ...toAdd]);
    } else {
      // Just add a randomized lead if all defaults are already loaded
      const randId = Date.now();
      const randomDemoLead: Lead = {
        id: 'mock-' + randId,
        name: 'Michael Allicock',
        email: `m_allicock_${randId % 100}@gmail.com`,
        phone: `+592 630-${String(randId).slice(-4)}`,
        service: 'Building Renovations',
        projectDetails: 'Need a professional cost estimate for a full-scale modern kitchen overhaul with custom cabinets and island countertops.',
        submittedAt: new Date().toISOString(),
        status: 'new',
        budget: '$5,000 - $15,050 USD equivalent',
        projectType: 'other'
      };
      saveLeadsToStorage([randomDemoLead, ...leads]);
    }
  };

  const handleClearAll = () => {
    saveLeadsToStorage([]);
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedPresetService(serviceName);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen relative antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic Header */}
      <Header
        onOpenLeadsPortal={() => setIsAdminOpen(true)}
        leadsCount={leads.length}
      />

      {/* Hero Section with Contact Form */}
      <Hero
        onLeadSubmit={handleLeadSubmit}
        selectedPresetService={selectedPresetService}
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Our Services */}
      <Services onSelectService={handleSelectServiceFromCard} />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Project Gallery */}
      <Gallery onSelectService={handleSelectServiceFromCard} />

      {/* Reviews Checklist */}
      <Reviews />

      {/* One Last Call to Action & Info Footer */}
      <Footer />

      {/* Sliding Leads Tracker Admin Panel */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        leads={leads}
        onUpdateLeadStatus={handleUpdateLeadStatus}
        onDeleteLead={handleDeleteLead}
        onGenerateMockLeads={handleGenerateMockLeads}
        onClearAll={handleClearAll}
      />

      {/* Floating Interactive WhatsApp Chat Companion */}
      <FloatingContact />

      {/* Discreet floating helper launch badge for testing dynamic lead entries */}
      <div className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => setIsAdminOpen(true)}
          className="bg-blue-700 text-white hover:bg-blue-800 p-3 sm:p-3.5 rounded-full shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105 transition-all text-xs font-bold border border-blue-650 group cursor-pointer"
          title="Open staff leads tracking panel"
        >
          <LayoutDashboard className="h-4.5 w-4.5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-300 font-mono tracking-wider font-extrabold uppercase inline-block font-sans">
            Leads Tracker Dashboard
          </span>
          {leads.length > 0 && (
            <span className="absolute -top-1.5 -right-1 bg-emerald-500 border-2 border-white text-white font-extrabold text-[9px] w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
              {leads.length}
            </span>
          )}
        </button>
      </div>

    </div>
  );
}
