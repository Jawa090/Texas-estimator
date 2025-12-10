import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { locations } from '../data/locations';

export const Locations: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-texas-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              UK-Wide Construction Estimating Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Professional construction estimating services available across all major UK cities and regions. 
              Local expertise with national coverage, ensuring accurate pricing for your specific location.
            </p>
          </div>
        </div>
      </section>

      {/* Main Office */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our UK Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based in London with nationwide coverage, we serve construction professionals across the entire UK.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-texas-navy mb-6">Texas Estimators UK</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-texas-accent mt-1" />
                      <div>
                        <p className="font-medium text-texas-navy">Address</p>
                        <p className="text-gray-600">123 Business Park<br />London, UK SW1A 1AA</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-texas-accent" />
                      <div>
                        <p className="font-medium text-texas-navy">Phone</p>
                        <a href="tel:+441234567890" className="text-gray-600 hover:text-texas-accent">
                          +44 123 456 7890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-texas-accent" />
                      <div>
                        <p className="font-medium text-texas-navy">Email</p>
                        <a href="mailto:info@texasestimators.co.uk" className="text-gray-600 hover:text-texas-accent">
                          info@texasestimators.co.uk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-texas-accent mt-1" />
                      <div>
                        <p className="font-medium text-texas-navy">Business Hours</p>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide construction estimating services across all major UK cities and regions, 
              with local market knowledge and regional pricing expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} hover>
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-texas-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-texas-navy mb-1">
                      {location.city}
                    </h3>
                    <p className="text-sm text-gray-500">{location.region}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {location.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-texas-navy mb-2">Nearby Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {location.nearbyAreas.slice(0, 4).map((area, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                    {location.nearbyAreas.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{location.nearbyAreas.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-texas-navy mb-2">Typical Projects:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {location.typicalProjects.slice(0, 3).map((project, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-texas-accent rounded-full mr-2"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <Button variant="ghost" size="sm" className="w-full">
                    Get Quote for {location.city}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Regional Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our estimators understand regional variations in pricing, regulations, and construction practices across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Local Market Knowledge</h3>
              <p className="text-gray-600">
                We understand regional pricing variations, local suppliers, and market conditions across different UK regions.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Regional Regulations</h3>
              <p className="text-gray-600">
                Expertise in local building regulations, planning requirements, and regional construction standards.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-texas-accent" />
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Local Support</h3>
              <p className="text-gray-600">
                Direct communication with estimators who understand your local market and construction environment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving Your Location
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            No matter where your project is located in the UK, we provide accurate, locally-informed construction estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Local Quote
              </Button>
            </Link>
            <a href="tel:+441234567890">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-texas-navy">
                Call Now: +44 123 456 7890
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};