import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Construction Takeoff Services',
    shortDescription: 'Accurate material takeoffs and quantity surveys for all construction trades',
    description: 'Professional construction takeoff services providing detailed material quantities, measurements, and cost estimates. Our experienced estimators use industry-standard software to deliver precise takeoffs for all construction trades.',
    benefits: [
      'Accurate material quantities',
      'Reduced waste and overordering',
      'Competitive bidding advantage',
      'Time-saving automation',
      'RICS-compliant reporting'
    ],
    included: [
      'Detailed material takeoff',
      'Quantity calculations',
      'Measurement schedules',
      'CAD plan analysis',
      'Excel and PDF deliverables'
    ],
    deliverables: [
      'Excel spreadsheet with quantities',
      'PDF measurement report',
      'CAD markup drawings',
      'Material specifications list'
    ],
    pricing: 'From £150',
    icon: 'Calculator',
    slug: 'construction-takeoff'
  },
  {
    id: '2',
    title: 'Commercial Estimating',
    shortDescription: 'Comprehensive cost estimates for commercial construction projects',
    description: 'Complete commercial construction estimating services including detailed cost breakdowns, labour analysis, and project scheduling. Suitable for office buildings, retail spaces, and industrial facilities.',
    benefits: [
      'Detailed cost breakdowns',
      'Labour and material analysis',
      'Market-rate pricing',
      'Risk assessment included',
      'Tender-ready documentation'
    ],
    included: [
      'Complete cost estimate',
      'Labour rate analysis',
      'Material cost breakdown',
      'Overhead calculations',
      'Profit margin recommendations'
    ],
    deliverables: [
      'Comprehensive cost estimate',
      'Bill of quantities (BOQ)',
      'Labour analysis report',
      'Risk assessment document'
    ],
    pricing: 'From £300',
    icon: 'Building2',
    slug: 'commercial-estimating'
  },
  {
    id: '3',
    title: 'Residential Estimating',
    shortDescription: 'Detailed estimates for residential construction and renovation projects',
    description: 'Specialized residential construction estimating for new builds, extensions, and renovations. Includes detailed breakdowns for all trades and materials with UK building standards compliance.',
    benefits: [
      'Residential-focused expertise',
      'Building regulations compliance',
      'Detailed trade breakdowns',
      'Renovation specialists',
      'Homeowner-friendly reports'
    ],
    included: [
      'Room-by-room estimates',
      'Trade-specific costs',
      'Material specifications',
      'Labour calculations',
      'Timeline estimates'
    ],
    deliverables: [
      'Detailed cost breakdown',
      'Material specifications',
      'Trade scheduling',
      'Permit requirement list'
    ],
    pricing: 'From £200',
    icon: 'Home',
    slug: 'residential-estimating'
  },
  {
    id: '4',
    title: 'Industrial Estimating',
    shortDescription: 'Specialized estimates for industrial and manufacturing facilities',
    description: 'Expert industrial construction estimating for manufacturing facilities, warehouses, and specialized industrial buildings. Includes heavy equipment, structural steel, and specialized systems.',
    benefits: [
      'Industrial expertise',
      'Heavy equipment knowledge',
      'Structural steel specialists',
      'Safety compliance included',
      'Specialized systems coverage'
    ],
    included: [
      'Structural analysis',
      'Equipment specifications',
      'Safety system costs',
      'Utility requirements',
      'Specialized materials'
    ],
    deliverables: [
      'Industrial cost estimate',
      'Equipment schedule',
      'Structural drawings markup',
      'Safety compliance report'
    ],
    pricing: 'From £500',
    icon: 'Factory',
    slug: 'industrial-estimating'
  },
  {
    id: '5',
    title: 'MEP Estimating',
    shortDescription: 'Mechanical, electrical, and plumbing system estimates',
    description: 'Comprehensive MEP estimating services covering mechanical systems, electrical installations, and plumbing networks. Includes HVAC, lighting, power distribution, and water systems.',
    benefits: [
      'MEP system expertise',
      'Energy efficiency focus',
      'Code compliance assured',
      'System integration planning',
      'Maintenance cost analysis'
    ],
    included: [
      'HVAC system design costs',
      'Electrical load calculations',
      'Plumbing fixture schedules',
      'Control system pricing',
      'Installation labour costs'
    ],
    deliverables: [
      'MEP cost breakdown',
      'System specifications',
      'Load calculation reports',
      'Equipment schedules'
    ],
    pricing: 'From £400',
    icon: 'Zap',
    slug: 'mep-estimating'
  },
  {
    id: '6',
    title: 'Electrical Estimating',
    shortDescription: 'Detailed electrical system estimates and specifications',
    description: 'Specialized electrical estimating services for all types of electrical installations. Includes power distribution, lighting systems, control panels, and specialized electrical equipment.',
    benefits: [
      'Electrical code expertise',
      'Load calculation accuracy',
      'Safety compliance focus',
      'Energy efficiency planning',
      'Future expansion consideration'
    ],
    included: [
      'Electrical load analysis',
      'Panel and circuit design',
      'Lighting calculations',
      'Cable and conduit takeoffs',
      'Labour time estimates'
    ],
    deliverables: [
      'Electrical cost estimate',
      'Load calculation sheets',
      'Panel schedules',
      'Cable schedule and routes'
    ],
    pricing: 'From £250',
    icon: 'Lightbulb',
    slug: 'electrical-estimating'
  }
];