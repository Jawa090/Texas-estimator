import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Calculator,
  Building2,
  Home,
  Factory,
  Zap,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { services } from '../data/services';

export const Services: React.FC = () => {
  const serviceIcons = {
    Calculator,
    Building2,
    Home,
    Factory,
    Zap,
    Lightbulb
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-texas-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Estimating Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Professional construction estimating and takeoff services for the UK market. 
              From residential projects to large commercial developments, we provide accurate, 
              RICS-compliant estimates with fast turnaround times.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <Card key={service.id} hover className="h-full">
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
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-texas-navy mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-texas-accent">{service.pricing}</span>
                          <span className="text-gray-500 ml-2">starting price</span>
                        </div>
                        <Link to={`/services/${service.slug}`}>
                          <Button>
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Why Choose Our Estimating Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine Texas expertise with UK market knowledge to deliver the most accurate and reliable construction estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">RICS Compliant</h3>
              <p className="text-gray-600">
                All our estimates follow RICS standards and UK building regulations for professional compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                24-48 hour delivery on most projects, perfect for tight tender deadlines and quick decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">UK Market Expertise</h3>
              <p className="text-gray-600">
                Current UK pricing, local suppliers, and regional variations all factored into our estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Estimate?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Every project is unique. Contact us for a tailored estimating solution that meets your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-texas-navy">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};