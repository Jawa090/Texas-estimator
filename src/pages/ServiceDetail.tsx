import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle,
  FileText,
  Download,
  Clock,
  ArrowLeft,
  Calculator,
  Building2,
  Home,
  Factory,
  Zap,
  Lightbulb
} from 'lucide-react';
import { services } from '../data/services';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-texas-navy mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const serviceIcons = {
    Calculator,
    Building2,
    Home,
    Factory,
    Zap,
    Lightbulb
  };

  const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-texas-accent">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-texas-accent">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-texas-navy font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/services" className="mr-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Services
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                {IconComponent && (
                  <div className="w-16 h-16 bg-texas-accent bg-opacity-10 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-8 h-8 text-texas-accent" />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-texas-navy mb-2">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-texas-navy mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-texas-navy mb-6">What's Included</h2>
                <Card>
                  <ul className="space-y-3">
                    {service.included.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-texas-accent mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-texas-navy mb-6">Sample Deliverables</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.deliverables.map((deliverable, index) => (
                    <Card key={index} className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-texas-accent flex-shrink-0" />
                      <span className="text-gray-700">{deliverable}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-texas-accent mb-2">
                    {service.pricing}
                  </div>
                  <p className="text-gray-600">Starting price</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-texas-accent" />
                    <span>24-48 hour turnaround</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <FileText className="w-4 h-4 text-texas-accent" />
                    <span>RICS-compliant reports</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Download className="w-4 h-4 text-texas-accent" />
                    <span>Excel & PDF formats</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/contact" className="block">
                    <Button className="w-full" size="lg">
                      Request This Service
                    </Button>
                  </Link>
                  <Link to="/pricing" className="block">
                    <Button variant="secondary" className="w-full">
                      View All Pricing
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-texas-navy mb-3">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Speak with our estimating experts about your specific requirements.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+441234567890" className="flex items-center text-texas-accent hover:text-orange-600">
                      <span>+44 123 456 7890</span>
                    </a>
                    <a href="mailto:info@texasestimators.co.uk" className="flex items-center text-texas-accent hover:text-orange-600">
                      <span>info@texasestimators.co.uk</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-texas-navy mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => {
                const RelatedIcon = serviceIcons[relatedService.icon as keyof typeof serviceIcons];
                return (
                  <Card key={relatedService.id} hover>
                    <div className="flex items-center mb-4">
                      {RelatedIcon && <RelatedIcon className="w-6 h-6 text-texas-accent mr-3" />}
                      <h3 className="text-lg font-semibold text-texas-navy">{relatedService.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-texas-accent font-semibold">{relatedService.pricing}</span>
                      <Link to={`/services/${relatedService.slug}`}>
                        <Button variant="ghost" size="sm">Learn More</Button>
                      </Link>
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};