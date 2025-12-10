import type { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: '1',
    name: 'Standard',
    price: 'From £150',
    description: 'Perfect for small to medium projects requiring basic takeoffs and estimates',
    features: [
      'Basic material takeoff',
      'Quantity calculations',
      'Excel deliverable',
      '48-hour turnaround',
      'Email support',
      'Single trade focus',
      'Standard templates'
    ]
  },
  {
    id: '2',
    name: 'Professional',
    price: 'From £300',
    popular: true,
    description: 'Comprehensive estimating for commercial projects with detailed analysis',
    features: [
      'Detailed cost breakdown',
      'Multi-trade estimates',
      'RICS-compliant BOQ',
      '24-hour turnaround',
      'Phone & email support',
      'CAD markup drawings',
      'Labour analysis',
      'Risk assessment',
      'PDF & Excel formats'
    ]
  },
  {
    id: '3',
    name: 'Premium',
    price: 'From £500',
    description: 'Complete estimating solution for large-scale and complex projects',
    features: [
      'Comprehensive estimates',
      'All trades included',
      'Custom BOQ format',
      'Same-day turnaround',
      'Dedicated project manager',
      'Video consultations',
      'Detailed specifications',
      'Tender documentation',
      'Multiple revisions',
      'Project scheduling',
      'Cost optimization'
    ]
  }
];