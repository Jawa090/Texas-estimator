import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Layers,
  Square,
  Hammer,
  Grid3x3,
  Palette,
  Triangle,
  Wrench,
  Trees,
  Zap,
  Thermometer,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { trades } from '../data/trades';

export const Trades: React.FC = () => {
  const tradeIcons = {
    Layers,
    Square,
    Hammer,
    Grid3x3,
    Palette,
    Triangle,
    Wrench,
    Trees,
    Zap,
    Thermometer
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-texas-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Trades We Cover
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive estimating services across all major construction trades. 
              Our specialists understand the unique requirements, materials, and labour costs for each trade.
            </p>
          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trades.map((trade) => {
              const IconComponent = tradeIcons[trade.icon as keyof typeof tradeIcons];
              return (
                <Card key={trade.id} hover className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {IconComponent && (
                        <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-texas-accent" />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-texas-navy mb-3">
                        {trade.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {trade.description}
                      </p>
                      
                      {/* Deliverables */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-texas-navy mb-3">What We Provide:</h4>
                        <ul className="space-y-2">
                          {trade.deliverables.map((deliverable, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to="/contact">
                        <Button variant="ghost" className="w-full">
                          Get {trade.name} Estimate <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trade Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Trade-Specific Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our estimators specialize in different trades, ensuring expert knowledge and accurate pricing for every aspect of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Specialized Knowledge</h3>
              <p className="text-gray-600">
                Each estimator focuses on specific trades, developing deep expertise in materials, methods, and pricing.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Trade-specific quality checks ensure accuracy in quantities, specifications, and pricing for each discipline.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Current Pricing</h3>
              <p className="text-gray-600">
                Regular updates to material costs, labour rates, and equipment pricing for each trade across UK regions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Trade Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Multi-Trade Project Coordination
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For complex projects involving multiple trades, we coordinate between specialists to ensure comprehensive and accurate estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-texas-navy mb-6">
                Comprehensive Project Coverage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Coordinated Estimates</p>
                    <p className="text-gray-600">All trades work together to ensure no overlaps or gaps in coverage</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Interface Management</p>
                    <p className="text-gray-600">Clear definition of trade boundaries and interface responsibilities</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Unified Reporting</p>
                    <p className="text-gray-600">Single comprehensive report covering all trades with clear breakdowns</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-texas-navy">Schedule Coordination</p>
                    <p className="text-gray-600">Trade sequencing and timing considerations included in estimates</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-texas-navy mb-4">Typical Multi-Trade Projects:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-texas-accent rounded-full mr-3"></span>
                  Complete building fit-outs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-texas-accent rounded-full mr-3"></span>
                  New construction projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-texas-accent rounded-full mr-3"></span>
                  Major renovations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-texas-accent rounded-full mr-3"></span>
                  Industrial facilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-texas-accent rounded-full mr-3"></span>
                  Infrastructure projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Estimates for Multiple Trades?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get comprehensive estimates covering all trades for your project. Our specialists work together to ensure accuracy and completeness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Multi-Trade Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-texas-navy">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};