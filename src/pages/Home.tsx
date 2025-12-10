import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Hero } from '../components/sections/Hero';
import { FeatureList } from '../components/sections/FeatureList';
import { TestimonialSlider } from '../components/sections/TestimonialSlider';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Clock, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield,
  Calculator,
  Building2,
  Home as HomeIcon,
  Factory,
  Zap,
  Lightbulb,
  ArrowRight,

  MapPin
} from 'lucide-react';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

export const Home: React.FC = () => {
  const keyFeatures = [
    {
      title: 'Fast 24-48h Turnaround',
      description: 'Get your detailed estimates quickly without compromising on accuracy. Perfect for tight tender deadlines.',
      icon: <Clock className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'UK Pricing & RICS-Compatible',
      description: 'All estimates use current UK market rates and follow RICS standards for professional compliance.',
      icon: <FileText className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'Trade-Specific Specialists',
      description: 'Our estimators specialize in different trades, ensuring expert knowledge for every aspect of your project.',
      icon: <Users className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'Tender-Ready BOQ',
      description: 'Receive professionally formatted Bills of Quantities ready for submission with your tenders.',
      icon: <TrendingUp className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. Clear, upfront pricing based on project scope and complexity.',
      icon: <Shield className="w-12 h-12 text-texas-accent" />
    }
  ];

  const serviceIcons = {
    Calculator,
    Building2,
    Home: HomeIcon,
    Factory,
    Zap,
    Lightbulb
  };

  const processSteps = [
    {
      step: '1',
      title: 'Upload Your Plans',
      description: 'Send us your drawings, specifications, or project details through our secure upload system.'
    },
    {
      step: '2',
      title: 'Receive Free Quote',
      description: 'Get a detailed quote within 2 hours outlining scope, timeline, and pricing for your estimate.'
    },
    {
      step: '3',
      title: 'Professional Estimating',
      description: 'Our certified estimators create detailed takeoffs and cost analysis using industry-standard software.'
    },
    {
      step: '4',
      title: 'Delivery & Support',
      description: 'Receive your RICS-compliant estimate in Excel and PDF formats with ongoing support included.'
    }
  ];

  const majorCities = [
    'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 
    'Glasgow', 'Edinburgh', 'Cardiff', 'Bristol', 'Newcastle'
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Texas Estimators",
    "url": "https://texasestimators.co.uk",
    "logo": "https://texasestimators.co.uk/images/logo.png",
    "description": "Professional construction estimating and takeoff services for the UK market",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Park",
      "addressLocality": "London",
      "postalCode": "SW1A 1AA",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-123-456-7890",
      "contactType": "customer service",
      "email": "info@texasestimators.co.uk"
    },
    "sameAs": [
      "https://www.linkedin.com/company/texas-estimators",
      "https://twitter.com/texasestimators"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Texas Estimators — Construction Estimating & Takeoff Services UK"
        description="Accurate BOQs, fast takeoffs, and UK-ready cost estimates. 24–48h turnaround. RICS-compliant reports for all construction trades. Request a free quote today."
        keywords="construction estimating UK, BOQ services, takeoff services, quantity surveying, RICS compliant estimates, construction cost estimates"
        canonical="/"
        structuredData={organizationSchema}
      />
      {/* Hero Section */}
      <Hero
        title="Texas Estimators — Accurate Construction Estimating for the UK"
        subtitle="Professional construction takeoffs and cost estimates with 24-48 hour turnaround. RICS-compliant reports for all UK construction trades."
      />

      {/* Key Features */}
      <FeatureList
        title="Why Choose Texas Estimators?"
        features={keyFeatures}
        className="bg-white"
      />

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our Estimating Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction estimating services covering all trades and project types across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <Card key={service.id} hover className="h-full">
                  <div className="flex items-center mb-4">
                    {IconComponent && <IconComponent className="w-8 h-8 text-texas-accent mr-3" />}
                    <h3 className="text-xl font-semibold text-texas-navy">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{service.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-texas-accent font-semibold">{service.pricing}</span>
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="ghost" size="sm">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get accurate estimates quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-texas-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-texas-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/process">
              <Button variant="secondary" size="lg">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Serving Major UK Cities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional construction estimating services available across all major UK cities and regions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {majorCities.map((city) => (
              <div key={city} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-soft">
                <MapPin className="w-5 h-5 text-texas-accent mr-2" />
                <span className="font-medium text-texas-navy">{city}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/locations">
              <Button variant="secondary" size="lg">
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonials} />

      {/* CTA Section */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get your free quote today and see why construction professionals across the UK trust Texas Estimators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Quote Now
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