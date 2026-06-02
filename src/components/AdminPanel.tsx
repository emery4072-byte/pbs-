/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, LayoutDashboard, Copy, Trash2, Calendar, Phone, Mail, FileText, CheckCircle2, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Lead } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  leads: Lead[];
  onUpdateLeadStatus: (id: string, status: Lead['status']) => void;
  onDeleteLead: (id: string) => void;
  onGenerateMockLeads: () => void;
  onClearAll: () => void;
}

export default function AdminPanel({
  isOpen,
  onClose,
  leads,
  onUpdateLeadStatus,
  onDeleteLead,
  onGenerateMockLeads,
  onClearAll
}: AdminPanelProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'new':
        return <span className="bg-blue-50 text-blue-700 border border-blue-250 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase">New Request</span>;
      case 'contacted':
        return <span className="bg-sky-50 text-sky-700 border border-sky-250 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase font-medium">Contacted</span>;
      case 'scheduled':
        return <span className="bg-indigo-50 text-indigo-700 border border-indigo-250 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase">Scheduled Site Visit</span>;
      case 'actioned':
        return <span className="bg-emerald-50 text-emerald-700 border border-emerald-250 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase">Contract Bid Offered</span>;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"
          ></motion.div>

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-white border-l border-slate-200 flex flex-col shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="h-5 w-5 text-blue-700" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">Quote Requests Portal</h3>
                    <p className="text-[10px] text-slate-500 font-mono">PSB Lead Management Dashboard</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="bg-slate-50 border border-slate-200 p-2 text-slate-500 hover:text-slate-800 rounded-lg transition cursor-pointer"
                  aria-label="Close panel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Lead entries content list */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {leads.length === 0 ? (
                  <div className="text-center py-16 space-y-4 flex flex-col items-center justify-center">
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-full text-slate-400">
                      <LayoutDashboard className="h-8 w-8" />
                    </div>
                    <div className="max-w-xs space-y-1">
                      <h4 className="text-sm font-bold text-slate-700 font-display">No requests entered yet</h4>
                      <p className="text-xs text-slate-550 font-sans leading-relaxed">
                        Form inquiries submitted via the Hero landing page will instantly populate in this tracking view.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col gap-2 w-full max-w-[240px]">
                      <button
                        onClick={onGenerateMockLeads}
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-mono transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        Generate Demo Leads
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Control Bar */}
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs">
                      <span className="text-slate-600 font-mono">
                        Active leads tracked: <strong>{leads.length}</strong>
                      </span>
                      <button
                        onClick={onClearAll}
                        className="text-[10px] hover:text-rose-600 text-slate-400 transition uppercase font-bold font-mono tracking-wider cursor-pointer"
                      >
                        Clear Leads Stored
                      </button>
                    </div>

                    {/* Leads Cards */}
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-4 relative group shadow-sm hover:shadow-md transition-all"
                      >
                        {/* Title block */}
                        <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-3">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <User className="h-4 w-4 text-blue-700" />
                              <h4 className="text-sm font-bold text-slate-800 truncate max-w-[180px] font-display">
                                {lead.name}
                              </h4>
                            </div>
                            <span className="text-[9.5px] text-slate-500 block mt-0.5 font-mono font-medium">
                              Request: {new Date(lead.submittedAt).toLocaleDateString()} at {new Date(lead.submittedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </span>
                          </div>
                          
                          <button
                            onClick={() => onDeleteLead(lead.id)}
                            className="p-1.5 bg-white text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 rounded-lg transition cursor-pointer"
                            title="Delete record"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        {/* Middle attributes (contacts) */}
                        <div className="space-y-2 text-xs font-sans text-slate-700">
                          {lead.phone && (
                            <div className="flex items-center justify-between gap-2">
                              <span className="flex items-center gap-1.5 text-slate-500 font-mono text-[10.5px]">
                                <Phone className="h-3.5 w-3.5 text-blue-700/60" />
                                PHONE
                              </span>
                              <div className="flex items-center gap-1.5">
                                <a href={`tel:${lead.phone}`} className="hover:text-blue-700 text-slate-800 transition font-mono font-bold">
                                  {lead.phone}
                                </a>
                                <button
                                  onClick={() => copyToClipboard(lead.phone, lead.id + '-phone')}
                                  className="text-[9.5px] text-slate-450 hover:text-slate-805 transition font-mono uppercase font-bold cursor-pointer"
                                >
                                  {copiedId === lead.id + '-phone' ? 'Copied' : 'Copy'}
                                </button>
                              </div>
                            </div>
                          )}

                          {lead.email && (
                            <div className="flex items-center justify-between gap-2">
                              <span className="flex items-center gap-1.5 text-slate-500 font-mono text-[10.5px]">
                                <Mail className="h-3.5 w-3.5 text-blue-700/60" />
                                EMAIL
                              </span>
                              <div className="flex items-center gap-1.5 max-w-[60%] font-mono">
                                <span className="truncate text-slate-805 font-medium">{lead.email}</span>
                                <button
                                  onClick={() => copyToClipboard(lead.email, lead.id + '-email')}
                                  className="text-[9.5px] text-slate-450 hover:text-slate-805 transition uppercase font-bold cursor-pointer"
                                >
                                  {copiedId === lead.id + '-email' ? 'Copied' : 'Copy'}
                                </button>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-slate-500 font-mono text-[10.5px]">
                              <FileText className="h-3.5 w-3.5 text-blue-700/60" />
                              SERVICE
                            </span>
                            <span className="font-bold text-blue-700 truncate max-w-[65%]">
                              {lead.service}
                            </span>
                          </div>

                          {lead.budget && (
                            <div className="flex items-center justify-between">
                              <span className="text-slate-500 font-mono text-[10.5px]">BUDGET</span>
                              <span className="bg-white border border-slate-200 text-slate-700 text-[10px] font-mono py-0.5 px-2 rounded-md font-bold">
                                {lead.budget}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Message details box */}
                        <div className="bg-white border border-slate-200 p-3 rounded-xl">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block mb-1">Project Message block:</span>
                          <p className="text-xs text-slate-650 leading-relaxed font-sans mt-0.5 truncate group-hover:whitespace-normal group-hover:break-all transition-all duration-300">
                            {lead.projectDetails}
                          </p>
                        </div>

                        {/* Status selector triggers */}
                        <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1">
                            {getStatusBadge(lead.status)}
                          </div>
                          
                          <select
                            value={lead.status}
                            onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as Lead['status'])}
                            className="bg-white border border-slate-200 text-[10.5px] text-slate-700 rounded-lg px-2 py-1 focus:outline-none cursor-pointer font-mono font-bold hover:text-slate-900 hover:bg-slate-50 transition"
                          >
                            <option value="new">Set New</option>
                            <option value="contacted">Set Contacted</option>
                            <option value="scheduled">Set Scheduled</option>
                            <option value="actioned">Set Bid Offered</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom sample creator drawer */}
              {leads.length > 0 && (
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex gap-2">
                  <button
                    onClick={onGenerateMockLeads}
                    className="flex-1 bg-white hover:bg-slate-100 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs uppercase font-mono tracking-wider border border-slate-200 transition cursor-pointer shadow-sm text-center"
                  >
                    Add Demo Lead
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
