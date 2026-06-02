/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'scheduled' | 'actioned';
  budget?: string;
  projectType: 'residential' | 'commercial' | 'maintenance' | 'other';
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  longDescription: string;
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovations' | 'Maintenance';
  image: string;
  description: string;
  location: string;
}

export interface Review {
  id: string;
  name: string;
  role?: string;
  location: string;
  rating: number;
  comment: string;
  projectType: string;
  avatarBlurHash?: string;
}
