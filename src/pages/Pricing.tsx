import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle,
  Star,
  Clock,
  FileText,
  Phone,
  Mail,
  Calculator,
  Building2,
  Users
} from 'lucide-react';
import { pricingTiers } from '../data/pricing';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-texas-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Clear, upfront pricing with no hidden fees. Choose the service level that matches your project requirements and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.id} 
                className={`relative ${tier.popular ? 'ring-2 ring-texas-accent' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-texas-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-texas-navy mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-texas-accent mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? 'primary' : 'secondary'}
                    size="lg"
                  >
                    Choose {tier.name}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Custom & Enterprise Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For large-scale projects, ongoing partnerships, or specialized requirements, we offer custom pricing and enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-texas-navy mb-6">
                Enterprise Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Volume Discounts</p>
                    <p className="text-gray-600">Reduced rates for multiple projects or ongoing partnerships</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Dedicated Account Manager</p>
                    <p className="text-gray-600">Single point of contact for all your estimating needs</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Custom Reporting</p>
                    <p className="text-gray-600">Tailored report formats to match your company standards</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Priority Support</p>
                    <p className="text-gray-600">Expedited processing and dedicated support channels</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">API Integration</p>
                    <p className="text-gray-600">Direct integration with your project management systems</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <Card className="p-8">
              <h3 className="text-xl font-bold text-texas-navy mb-4">Request Custom Quote</h3>
              <p className="text-gray-600 mb-6">
                Tell us about your requirements and we'll create a custom pricing package that fits your needs.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Calculator className="w-5 h-5 text-texas-accent" />
                  <span className="text-gray-700">Volume-based pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-texas-accent" />
                  <span className="text-gray-700">Project-specific solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-texas-accent" />
                  <span className="text-gray-700">Dedicated team assignment</span>
                </div>
              </div>

              <Link to="/contact">
                <Button className="w-full mb-4">Request Enterprise Quote</Button>
              </Link>
              
              <div className="text-center text-sm text-gray-600">
                <p>Or contact us directly:</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a href="tel:+441234567890" className="flex items-center text-texas-accent hover:text-orange-600">
                    <Phone className="w-4 h-4 mr-1" />
                    +44 123 456 7890
                  </a>
                  <a href="mailto:enterprise@texasestimators.co.uk" className="flex items-center text-texas-accent hover:text-orange-600">
                    <Mail className="w-4 h-4 mr-1" />
                    Enterprise
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              What Affects Pricing?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our pricing is based on several factors to ensure you get the most accurate quote for your specific project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-12 h-12 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-texas-accent" />
              </div>
              <h3 className="text-lg font-semibold text-texas-navy mb-2">Project Size</h3>
              <p className="text-gray-600 text-sm">
                Larger projects may qualify for volume discounts
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-texas-accent" />
              </div>
              <h3 className="text-lg font-semibold text-texas-navy mb-2">Complexity</h3>
              <p className="text-gray-600 text-sm">
                Specialized systems or unique requirements
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-texas-accent" />
              </div>
              <h3 className="text-lg font-semibold text-texas-navy mb-2">Timeline</h3>
              <p className="text-gray-600 text-sm">
                Rush jobs may incur expedite fees
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-texas-accent" />
              </div>
              <h3 className="text-lg font-semibold text-texas-navy mb-2">Trade Count</h3>
              <p className="text-gray-600 text-sm">
                Number of different trades involved
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Pricing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-texas-navy mb-3">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-600">
                No, our pricing is completely transparent. The quote you receive includes all costs with no hidden fees or surprises.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-texas-navy mb-3">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-600">
                For large projects or enterprise clients, we can arrange flexible payment terms. Contact us to discuss your specific needs.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-texas-navy mb-3">
                What if I need revisions?
              </h3>
              <p className="text-gray-600">
                Minor revisions are included in all our packages. Major scope changes may incur additional fees, which we'll discuss with you beforehand.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-texas-navy mb-3">
                How do I get a custom quote?
              </h3>
              <p className="text-gray-600">
                Simply contact us with your project details, and we'll provide a detailed quote within 2 hours. All quotes are free and without obligation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Quote?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for a free, detailed quote tailored to your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+441234567890">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-texas-navy">
                Call: +44 123 456 7890
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};