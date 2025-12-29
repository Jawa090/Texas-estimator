import {
  Calculator,
  Building2,
  Home,
  Factory,
  Zap,
  Lightbulb
} from 'lucide-react';

export const serviceCategories = [
  'Residential Estimating',
  'Commercial Estimating',
  'Industrial Estimating',
  'MEP Estimating',
  'Concrete Estimating',
  'Drywall Estimating',
  'Steel Estimating',
  'Lumber Takeoff',
  'Earthwork Estimating',
  'Masonry Estimating',
  'Roofing Estimating'
];

export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  included: string[];
  deliverables: string[];
  pricing: string;
}

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Estimating',
    slug: 'residential-estimating',
    icon: 'Home',
    shortDescription: 'Accurate cost estimates for single-family homes, multi-family units, and renovations.',
    description: 'Our residential estimating services provide comprehensive cost breakdowns for all types of residential projects. From new custom home builds to small renovations, we help contractors and homeowners understand the true costs before construction begins. We account for all materials, labor, and local market rates.',
    benefits: ['Increase bid accuracy', 'Save time on takeoffs', 'Win more projects'],
    included: ['Material Takeoff', 'Labor Costs', 'Subcontractor Quotes'],
    deliverables: ['Excel Spreadsheet', 'PDF Report', 'Material List'],
    pricing: 'From $200'
  },
  {
    id: 'commercial',
    title: 'Commercial Estimating',
    slug: 'commercial-estimating',
    icon: 'Building2',
    shortDescription: 'Detailed estimates for office buildings, retail spaces, and commercial developments.',
    description: 'We specialize in commercial construction estimating, offering detailed quantity takeoffs and cost estimates for offices, retail stores, warehouses, and more. Our team is experienced with complex commercial blueprints and specifications.',
    benefits: ['Competitive bidding', 'Budget control', 'Project feasibility'],
    included: ['CSI Division Breakdown', 'Bid Reviews', 'Value Engineering'],
    deliverables: ['Detailed Cost Estimate', 'Bid Forms', 'Quantity Takeoff'],
    pricing: 'From $350'
  },
  {
    id: 'industrial',
    title: 'Industrial Estimating',
    slug: 'industrial-estimating',
    icon: 'Factory',
    shortDescription: ' Specialized estimates for factories, warehouses, and industrial facilities.',
    description: 'Industrial projects require a unique understanding of specialized materials and heavy-duty construction. We provide accurate estimates for manufacturing plants, warehouses, and other industrial facilities.',
    benefits: ['Specialized expertise', 'Risk mitigation', 'Accurate material sourcing'],
    included: ['Structural Steel', 'Heavy Equipment', 'MEP Systems'],
    deliverables: ['Comprehensive Estimate', 'Schedule of Values', 'Risk Analysis'],
    pricing: 'From $500'
  },
  {
    id: 'mep',
    title: 'MEP Estimating',
    slug: 'mep-estimating',
    icon: 'Zap',
    shortDescription: 'Mechanical, Electrical, and Plumbing estimates for projects of all sizes.',
    description: 'Our MEP estimating team covers all mechanical, electrical, and plumbing trades. We provide detailed counts and cost estimates for HVAC systems, wiring, lighting, piping, and fixtures.',
    benefits: ['System implementation planning', 'Cost optimization', 'Conflict detection'],
    included: ['HVAC', 'Electrical Work', 'Plumbing & Piping'],
    deliverables: ['MEP Takeoff', 'Cost Summary', 'System Breakdown'],
    pricing: 'From $300'
  },
  // Adding generic entries for remaining categories to verify functionality
  ...serviceCategories.slice(4).map(cat => ({
    id: generateSlug(cat),
    title: cat,
    slug: generateSlug(cat),
    icon: 'Calculator', // Default icon
    shortDescription: `Professional ${cat.toLowerCase()} services for your construction needs.`,
    description: `We provide accurate and reliable ${cat.toLowerCase()} services. Our team ensures that every detail is accounted for to give you the most precise estimate possible.`,
    benefits: ['Accuracy', 'Speed', 'reliability'],
    included: [`${cat} Takeoff`, 'Cost Analysis', 'Detailed Report'],
    deliverables: ['Excel Estimate', 'PDF Summary'],
    pricing: 'Contact for Quote'
  }))
];
