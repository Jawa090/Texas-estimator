import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  CheckCircle,
  Star,
  Clock,
  FileText,
  Phone,
  Mail,
  Calculator,
  Shield,
  Zap,
  MapPin,
  Upload,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const Pricing: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const packages = [
    {
      name: 'Single Trade',
      type: 'Single Trade Package',
      price: '$150 - $250',
      period: 'per project',
      description: 'Ideal for subcontractors focusing on a single trade (e.g., electrical, plumbing, HVAC).',
      features: [
        'Detailed Quantity takeoffs',
        'Trade-specific cost analysis',
        'Turnaround: Within 2 working days',
        'Revisions: Multiple revisions allowed',
        'Coverage: All USA Regions'
      ],
      popular: false
    },
    {
      name: 'Standard Package',
      type: 'Multiple Trade / GC',
      price: '$400 - $600',
      period: 'per project',
      description: 'Best for general contractors handling small to mid size projects.',
      features: [
        'Complete trade breakdown',
        'CSI-Coded summary and pricing sheets',
        'Turnaround: Within 4 working days',
        'Revisions: Multiple revisions allowed',
        'Coverage: All USA Regions'
      ],
      popular: false
    },
    {
      name: 'Premium Packages',
      type: 'Full Project Estimation',
      price: '$1,000 - $1,500',
      period: 'per project',
      description: 'Designed for large GC or developers needing Comprehensive and prioritized estimates.',
      features: [
        'Value engineering',
        'Detailed reports and clarifications',
        'Turnaround: Within 4 working days',
        'Revisions: Unlimited revisions',
        'Coverage: All USA Regions'
      ],
      popular: true
    },
    {
      name: 'Residential Monthly',
      type: 'Residential Project',
      price: '$2,500 - $3,500',
      period: 'per month',
      description: 'For builders or contractors managing residential projects per month.',
      features: [
        'No. of Projects: 15',
        'Two story buildings',
        'Includes recurring report & project tracking',
        'Turnaround: 3 days per project',
        'Coverage: All USA Regions'
      ],
      popular: false
    },
    {
      name: 'Commercial Monthly',
      type: 'Commercial Project',
      price: '$3,500 - $4,500',
      period: 'per month',
      description: 'For commercial GCs and developers needing consistent monthly estimating support.',
      features: [
        'No. of Projects: 15',
        'Project Size: 10,000 SF to 20,000 SF',
        'Includes material takeoffs & dedicated estimator',
        'Turnaround: 3 days per project',
        'Coverage: All USA Regions'
      ],
      popular: false
    }
  ];

  const factors = [
    {
      title: 'Project Scope and Complexity',
      description: 'Larger builds or jobs with complex designs have higher prices, while smaller or simpler projects are more affordable.'
    },
    {
      title: 'Required Turnaround Time',
      description: 'If you request a fast turnaround, such as a 9–24-hour delivery, some companies may charge an extra fee for the rushed service.'
    },
    {
      title: 'Level of Detail Needed',
      description: 'Including markups, specific cost codes, or deeper breakdowns requires more time and expertise, leading to a slightly higher price.'
    },
    {
      title: 'Extra Services Included',
      description: 'Services like software guidance, cost engineering, or full material takeoffs add more value and may increase the overall cost.'
    },
    {
      title: 'Location-Based Pricing Data',
      description: 'We use location-specific databases (e.g., RSMeans) to adjust material and labor costs based on regional market rates.'
    }
  ];

  const benefits = [
    'You get accurate numbers, not guesswork.',
    'You meet deadlines without rushing.',
    'You pay less than typical market rates.',
    'You get ongoing support without extra charges.',
    'Each estimate is formatted to be easy to plug into your bid.'
  ];

  const reasons = [
    '100% accurate and reliable takeoffs',
    'Competitive pricing that beats market rates',
    'Fast turnaround — no missed deadlines',
    '24/7 customer support',
    'Revisions & clarifications included (based on plan)'
  ];

  const faqs = [
    {
      question: 'Are revisions included in your estimating plans?',
      answer: 'Yes. Depending on the plan you choose, we offer limited, free, or unlimited revisions. For small projects, revisions may be basic. While our Customized Premium Plan includes full revision without an extra charge.'
    },
    {
      question: 'Do you charge extra for urgent or rush estimates?',
      answer: 'Yes, if you require a turnaround faster than our standard times (e.g., 9-24 hours), a rush fee may apply to prioritize your project.'
    },
    {
      question: 'How do I know which pricing plan is best for me?',
      answer: 'Consider your project volume and type. If you have a single trade job, the Single Trade package is ideal. For ongoing work, our Monthly packages offer the best value per estimate.'
    },
    {
      question: 'Do you offer discounts for repeat clients or bulk projects?',
      answer: 'Yes, our monthly packages are designed specifically to offer significant discounts for repeat clients and bulk project volumes.'
    },
    {
      question: 'Can I get a custom price for a complex or industrial project?',
      answer: 'Absolutely. For highly complex or industrial projects that fall outside standard packages, please contact us for a custom quote tailored to your specific needs.'
    },
    {
      question: 'What payment methods do you accept for estimation?',
      answer: 'We accept all major credit cards, bank transfers, and online payment methods for your convenience.'
    },
    {
      question: 'Are your estimating rates lower than other companies?',
      answer: 'We strive to offer competitive rates that beat market averages while maintaining superior accuracy and detail in our reports.'
    },
    {
      question: 'How much do construction estimating services typically cost?',
      answer: 'Costs vary by project size and complexity. Our single trade estimates start at $150, while full project estimations start at $1,000, which is generally lower than hiring a full-time estimator.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-texas-navy text-white py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/pricing-hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-texas-navy/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Texas Estimators
            </h1>
            <p className="text-2xl text-texas-accent mb-4 font-semibold">
              Best Estimates at a Reasonable Budget
            </p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Are you looking for a platform that provides accurate construction estimates at low rates?
              We have been providing the best construction Estimating Services for 20 years.
              We have supported thousands of contractors, builders, developers, architects, and homeowners
              to achieve budget accuracy and bid-win ratio upto 99%.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:7187196171">
                <Button size="lg" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us: (718) 719-6171
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Schedule a Meeting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-texas-navy mb-6">Our Construction Estimating Plans</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Cost is the most important factor in estimation. It should be clear before the project starts.
            Generally, smaller or simpler projects come with a straightforward, fixed fee.
            For simple projects, the estimation fee averages around $200 per project.
            This option is good for contractors who need estimates or only handle a few jobs.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            If you manage multiple projects every month, choose a monthly estimating package.
            Because it is most cost-effective for you. Many estimating companies offer plans starting from about $1,500 per month.
            These include a dedicated estimator and a set number of estimates.
            This approach not only saves time but also brings consistency.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-texas-navy">Pick a plan based on your budget</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative flex flex-col h-full ${pkg.popular ? 'border-2 border-texas-accent shadow-xl transform scale-105 z-10' : 'hover:shadow-lg transition-shadow'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-texas-accent text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-md">
                      <Star className="w-4 h-4 mr-1" fill="white" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 pt-4">
                  <h3 className="text-xl font-bold text-texas-navy">{pkg.name}</h3>
                  <div className="text-sm text-gray-500 font-medium mb-2">{pkg.type}</div>
                  <div className="text-3xl font-bold text-texas-accent mt-4">{pkg.price}</div>
                  <div className="text-gray-400 text-sm">{pkg.period}</div>
                </div>

                <div className="mb-6 px-4 text-center">
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                <div className="border-t border-gray-100 py-4 px-4 bg-gray-50/50 flex-grow">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3 text-center">Package Details</div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 mt-auto">
                  <Link to="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-texas-accent hover:bg-orange-600' : 'bg-texas-navy hover:bg-slate-800'}`}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Affecting Price */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-texas-navy mb-4">
              Factors that Affect the Estimation Prices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The final price can vary widely. Several key factors influence what you will pay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factors.map((factor, index) => (
              <Card key={index} className="p-6">
                <div className="w-10 h-10 bg-texas-navy text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-texas-navy mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {factor.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Pricing Works & Best Choice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-texas-navy mb-6">Why Our Pricing Works for Contractors</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-white p-1 rounded-full shadow-sm mr-3 mt-1">
                      <CheckCircle className="w-5 h-5 text-texas-accent" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-texas-navy mb-6">Why We Are the Best Choice</h2>
              <p className="text-gray-600 mb-6">
                We combine speed, accuracy, affordability, and industry-tested experience to help contractors win more projects without stress.
              </p>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-texas-accent/10 p-1 rounded-full mr-3 mt-1">
                      <Star className="w-5 h-5 text-texas-accent" />
                    </div>
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote Form & Turnaround */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Turnaround Time</h2>
              <div className="flex items-center text-5xl font-bold text-texas-accent mb-6">
                <Clock className="w-12 h-12 mr-4" />
                9-24 Hours
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Need it fast? We prioritize speed without compromising quality.
                Get your accurate estimate in as little as 9 hours.
              </p>
              <div className="flex flex-col gap-4">
                <a href="tel:7187196171">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-texas-navy border-none">
                    Book a Consultation Call
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-gray-900 shadow-2xl">
              <h3 className="text-2xl font-bold text-texas-navy mb-6">Get Your Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent outline-none" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your project</label>
                  <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent outline-none" placeholder="Project type, size, scope, etc."></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Plan (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-texas-accent cursor-pointer transition-colors">
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-500">Click to upload files</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">Submit Request</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-texas-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-texas-navy text-lg">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-texas-accent" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};