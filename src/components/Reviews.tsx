/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, MessageSquareCode, Quote, User, PlusCircle, Check, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Review } from '../types';
import { REVIEWS_DATA } from '../data';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Homeowner',
    location: '',
    rating: 5,
    comment: '',
    projectType: 'Residential Extension'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment || !newReview.location) return;

    const submitted: Review = {
      id: 'rev-' + Date.now(),
      name: newReview.name,
      role: newReview.role,
      location: newReview.location + ', Guyana',
      rating: Number(newReview.rating),
      comment: newReview.comment,
      projectType: newReview.projectType
    };

    setReviews((prev) => [submitted, ...prev]);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsFormOpen(false);
      setNewReview({
        name: '',
        role: 'Homeowner',
        location: '',
        rating: 5,
        comment: '',
        projectType: 'Residential Extension'
      });
    }, 2000);
  };

  return (
    <section id="reviews" className="relative bg-slate-50 py-20 sm:py-24 border-b border-slate-205">
      <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl text-left">
            <span className="text-[10.5px] font-bold text-blue-700 uppercase tracking-widest font-mono">
              Vouched Loyalty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight font-display">
              Endorsed by Local Families & Businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-sans">
              Don’t just take our word for it. Read honest ratings from property owners across West Essequibo, Demerara, and Georgetown areas.
            </p>
          </div>

          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-xl text-xs uppercase font-mono tracking-widest transition-all cursor-pointer self-start md:self-auto hover:scale-[1.02] shadow-md shadow-blue-700/10"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Write a review</span>
          </button>
        </div>

        {/* Expandable Write-Review Form Panel */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
                {showSuccess ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-6 space-y-3"
                  >
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full p-3 w-fit mx-auto animate-bounce">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-extrabold text-lg text-slate-900">Review Appended!</h3>
                    <p className="text-xs text-slate-550 font-sans">
                      Thank you for sharing your experience. Your review is now live on our board.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-4 text-left">
                    <h3 className="text-base font-bold text-slate-800 uppercase tracking-wider font-mono border-b border-slate-200 pb-2">
                      Share Your Experience With PSB Contracting
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="rev-author" className="block text-[10.5px] font-bold text-slate-500 uppercase font-mono mb-1">
                          Your Name *
                        </label>
                        <input
                          id="rev-author"
                          type="text"
                          name="name"
                          placeholder="Devindra Sukhdeo"
                          value={newReview.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-755 focus:bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="rev-loc" className="block text-[10.5px] font-bold text-slate-500 uppercase font-mono mb-1">
                          City / Region in Guyana *
                        </label>
                        <input
                          id="rev-loc"
                          type="text"
                          name="location"
                          placeholder="Tuschen, EBE"
                          value={newReview.location}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-755 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="rev-role" className="block text-[10.5px] font-bold text-slate-500 uppercase font-mono mb-1">
                          Your Role / Identity
                        </label>
                        <select
                          id="rev-role"
                          name="role"
                          value={newReview.role}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none cursor-pointer focus:bg-white"
                        >
                          <option value="Homeowner">Homeowner</option>
                          <option value="Commercial Client">Commercial Client</option>
                          <option value="Property Developer">Property Developer</option>
                          <option value="Real Estate Investor">Real Estate Investor</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="rev-proj" className="block text-[10.5px] font-bold text-slate-500 uppercase font-mono mb-1">
                          Project Done for You
                        </label>
                        <input
                          id="rev-proj"
                          type="text"
                          name="projectType"
                          placeholder="Concrete Extension"
                          value={newReview.projectType}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-755 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="rev-rating" className="block text-[10.5px] font-bold text-slate-500 uppercase font-mono mb-1">
                          Star Assessment
                        </label>
                        <select
                          id="rev-rating"
                          name="rating"
                          value={newReview.rating}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-705 focus:outline-none cursor-pointer focus:bg-white border-none"
                        >
                          <option value="5">5 Stars (Excellent Finish)</option>
                          <option value="4">4 Stars (Good Skill)</option>
                          <option value="3">3 Stars (Average Work)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="rev-comment" className="block text-[10.5px] font-bold text-slate-500 uppercase font-mono mb-1">
                        Review Comments *
                      </label>
                      <textarea
                        id="rev-comment"
                        name="comment"
                        rows={3}
                        placeholder="Detail the quality, attitude, and structural work done by the team..."
                        value={newReview.comment}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-755 focus:bg-white resize-none"
                        required
                      />
                    </div>

                    <div className="flex gap-3 justify-end pt-3">
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 py-2.5 px-4 rounded-xl text-xs uppercase font-mono tracking-wider transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-xl text-xs uppercase font-mono tracking-wider transition shadow-lg cursor-pointer"
                      >
                        Publish Review Panel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-sm relative group transition duration-300 text-left"
            >
              {/* Quotation mark decoration */}
              <div className="absolute top-4 right-4 text-slate-100 group-hover:text-blue-700/5 transition-colors pointer-events-none duration-300">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div>
                {/* Stars and Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4 select-none">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-slate-400 font-bold ml-1.5 uppercase">
                    ({rev.rating}.5 / 5.0)
                  </span>
                </div>

                {/* Main comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6 italic relative z-10">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-xl text-slate-400 h-10 w-10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-blue-700 duration-300 transition-all">
                  <User className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-800 font-display truncate">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1 text-slate-500 font-sans text-[11px] mt-0.5 min-w-0">
                    <MapPin className="h-3 w-3 text-blue-700 flex-shrink-0" />
                    <span className="truncate">{rev.location}</span>
                  </div>
                  <span className="inline-block bg-blue-50 text-blue-700 text-[9.5px] font-bold font-mono tracking-wider py-0.5 px-2 rounded mt-1.5 uppercase border border-blue-100/50">
                    {rev.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
