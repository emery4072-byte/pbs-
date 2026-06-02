/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, GalleryItem, Review } from './types';

// Importing our custom generated images
import heroBg from './assets/images/hero_construction_1780355640017.png';
import resProjectImage from './assets/images/residential_project_1780355657289.png';
import commProjectImage from './assets/images/commercial_building_1780355670705.png';
import renoProjectImage from './assets/images/interior_renovation_project_1780355691982.png';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential',
    name: 'Residential Construction',
    description: 'Custom family homes built from foundation to finishes. Made for the climate of Guyana with elite structural integrity.',
    icon: 'Home',
    longDescription: 'Our signature service. We construct luxury and standard multi-bedroom residences tailored to Guyanese conditions, ensuring robust deep concrete pile foundations, custom structural framing, secure roofing, and modern styling.',
    benefits: [
      'Tailored architectural layout designs',
      'Engineered foundations for coastal/inland soils',
      'Sourcing premium local & imported hardwoods',
      'Elite tiling, electrical, & plumbing details'
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial Construction',
    description: 'Bespoke retail facades, modern office layouts, and durable commercial concrete warehouse structures.',
    icon: 'Building2',
    longDescription: 'Enhance your business reach. We construct functional, compliant, and durable commercial spaces designed for high structural safety, maximum physical spacing, and beautiful contemporary street-front appeal.',
    benefits: [
      'Strict compliance with building codes',
      'Timely handovers to minimize operational downtime',
      'High-grade reinforced concrete and structural steelwork',
      'Adaptive layouts for retail, dining, and offices'
    ]
  },
  {
    id: 'renovations',
    name: 'Building Renovations',
    description: 'Full-scale remodeling of kitchens, baths, concrete extensions, and modern painting adjustments.',
    icon: 'Hammer',
    longDescription: 'Breathe new life into aging spaces. Whether adding a modern master suite, an open-concept kitchen, or custom timber carpentry, we turn your current address into your absolute dream destination.',
    benefits: [
      'Complete strip-out and structural reconstruction',
      'Elite carpentry and cabinetry fabrication',
      'Moisture-proofing and modern weather sealants',
      'Dust and debris mitigation protocols'
    ]
  },
  {
    id: 'maintenance',
    name: 'Property Maintenance',
    description: 'Preventative structural health maintenance, roof sealing, wall coating, and facility upkeep.',
    icon: 'ShieldAlert',
    longDescription: 'Protect your real estate investment. We offer scheduled and rapid-response property maintenance for local real estate developers, investors, and busy homeowners across Guyana.',
    benefits: [
      'Roofing leaks prevention & membrane sealant treatments',
      'High-end paint coatings designed for tropical humidity',
      'Regular structural integrity status assessments',
      'Commercial property facility support agreements'
    ]
  },
  {
    id: 'contracting',
    name: 'General Contracting',
    description: 'End-to-end procurement, site supervision, material logistics, and trusted local subcontractor direction.',
    icon: 'Briefcase',
    longDescription: 'Stress-free building. We manage the supply chains, regulatory paperwork, machinery rentals, and master tradesmen so that your project advances seamlessly from blueprint to reality.',
    benefits: [
      'Centralized single point of communication',
      'Transparent material ledger bill audits',
      'Dedicated on-site project safety manager',
      'Guaranteed milestones compliance'
    ]
  },
  {
    id: 'repairs',
    name: 'Repairs & Upgrades',
    description: 'Quick concrete restorations, plumbing, custom tile placements, and structural reinforcement edits.',
    icon: 'Wrench',
    longDescription: 'No job is too big or too small. We complete premium-grade repairs on water distribution lines, crack restorations in masonry, customized security grille installations, and premium hardwood ceiling upgrades.',
    benefits: [
      'Transparent standard labor rates',
      'Highest quality replacement components used',
      'Timely completion schedules',
      'Post-repair cleanup operations guaranteed'
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'proj-1',
    title: 'The Tuschen Coastal Villa',
    category: 'Residential',
    image: resProjectImage,
    description: 'A luxurious 4-bedroom modern home featuring a robust deep structural foundation, elevated ground floor, double glazed windows, and custom timber decorative framing.',
    location: 'Tuschen, Guyana'
  },
  {
    id: 'proj-2',
    title: 'Vreed-en-Hoop Plaza Exterior',
    category: 'Commercial',
    image: commProjectImage,
    description: 'Complete commercial exterior development including modern architectural facade treatments, dual-door egress layouts, stable steel framing, and weather-proof perimeter structures.',
    location: 'Vreed-en-Hoop, Guyana'
  },
  {
    id: 'proj-3',
    title: 'Georgetown Modern Kitchen Remodel',
    category: 'Renovations',
    image: renoProjectImage,
    description: 'Immaculate master kitchen space overhaul complete with handcrafted white quartz kitchen island, premium shaker cabinets, gold-finished plumbing hardware, and modern tile work.',
    location: 'Queenstown, Georgetown'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Devindra Sukhdeo',
    role: 'Commercial Developer',
    location: 'Vreed-en-Hoop, West Demerara',
    rating: 5,
    comment: 'PSB Contracting handled our commercial storefront renovation seamlessly. In Guyana, it can be hard to find contractors who stick to timelines, but PSB was incredibly disciplined, kept of budget, and updated us with weekly videos.',
    projectType: 'Commercial Renovation'
  },
  {
    id: 'rev-2',
    name: 'Sharda Ramnarine',
    role: 'Homeowner',
    location: 'Tuschen, East Bank Essequibo',
    rating: 5,
    comment: 'They built our concrete home extension and beautiful front veranda. The level of carpentry in the custom pine ceiling is outstanding. They are very reliable, honest about material costs, and cleaned up the site perfectly every single afternoon.',
    projectType: 'Residential Extension'
  },
  {
    id: 'rev-3',
    name: 'Richard Ally',
    role: 'Real Estate Investor',
    location: 'Subryanville, Georgetown',
    rating: 5,
    comment: 'I rely on PSB Contracting for property maintenance and repairs across my rental units. Their plumbing repairs are quick, their structural roof sealants hold up against heavy tropical rains, and they act as a complete true partner.',
    projectType: 'Property Maintenance'
  }
];

export const TRUST_BADGES_DATA = [
  {
    id: 'tb-1',
    title: 'Guyana Registered Provider',
    description: 'Fully licensed and locally registered contracting enterprise operating transparently.',
    icon: 'ShieldCheck'
  },
  {
    id: 'tb-2',
    title: '15+ Years Track Record',
    description: 'Decades of combined engineering, masonry, carpentry, and site management expertise.',
    icon: 'Award'
  },
  {
    id: 'tb-3',
    title: 'Clear Material Statements',
    description: 'We audit every receipt. Absolutely hidden cost-free transparency on all steel and timber.',
    icon: 'FileText'
  },
  {
    id: 'tb-4',
    title: 'Old Scheme 52 Grounded',
    description: 'Locally headquartered right here in Tuschen, ensuring rapid site visits and responsive support.',
    icon: 'MapPin'
  }
];

// Re-export the raw asset images for quick styling or dynamic styling backgrounds
export const IMAGES = {
  heroBg,
  resProjectImage,
  commProjectImage,
  renoProjectImage
};
