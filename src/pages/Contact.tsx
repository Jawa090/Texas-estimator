import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  MapPin,
  Phone,
  Mail,
  Upload,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import { SEOHead } from '../components/SEOHead';

export const Contact: React.FC = () => {
  const { seoData } = usePageSEO('contact');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: '',
    files: null as FileList | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const projectTypes = [
    'Construction Takeoff',
    'Commercial Estimating',
    'Residential Estimating',
    'Industrial Estimating',
    'MEP Estimating',
    'Electrical Estimating',
    'Multi-Trade Project',
    'Other'
  ];

  const texasCities = [
    'Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth',
    'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Lubbock',
    'Other'
  ];

  const faqs = [
    {
      question: 'What projects do you estimate?',
      answer: 'Residential, commercial, renovations, and infrastructure in Texas.'
    },
    {
      question: 'How accurate are your estimates?',
      answer: 'Up to 99% success rate with 2D/3D clash detection.'
    },
    {
      question: 'Turnaround time?',
      answer: '24-48 hours for most bids.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      files: e.target.files
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        location: '',
        message: '',
        files: null
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        data={seoData}
      />

      {/* Header */}
      <section className="relative bg-texas-navy text-white py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/contact-hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-texas-navy/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us Construction Estimating Texas
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to get accurate construction estimates for your Texas project?
              ConstructionEstimatingTexas provides professional estimating services to help contractors
              win bids and manage costs effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-texas-navy mb-6">
                  Project Details
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700">
                      Thank you! We've received your request and will respond within 2 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-700">
                      There was an error submitting your request. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Location *
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent"
                      >
                        <option value="">Select location</option>
                        {texasCities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-texas-accent focus:border-transparent"
                      placeholder="Please describe your project, including size, scope, and any specific requirements..."
                    />
                  </div>

                  <div>
                    <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Files (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-texas-accent transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.zip"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="files" className="cursor-pointer">
                        <span className="text-texas-accent font-medium">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                      </label>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DWG, DXF, JPG, PNG, ZIP up to 20MB
                      </p>
                      {formData.files && (
                        <div className="mt-2 text-sm text-gray-600">
                          {Array.from(formData.files).map((file, index) => (
                            <p key={index}>{file.name}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </Card>
            </div>

            {/* Steps & Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-texas-navy mb-2">
                  Get a Free Quote Today!
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Starting is simple and tailored to your needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-texas-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-700 text-sm mt-1">
                      Upload plans or email project details for a custom quote within hours.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-texas-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-700 text-sm mt-1">
                      Specify scope, timeline, and location for Texas-specific pricing.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-texas-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-700 text-sm mt-1">
                      Receive detailed estimates including soft/hard costs and price fluctuations.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-texas-navy mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-texas-accent mt-1" />
                    <div>
                      <p className="font-medium text-texas-navy">Address</p>
                      <p className="text-gray-600">12828 Willow Centre Dr Ste D
Houston TX 77066</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-texas-accent" />
                    <div>
                      <p className="font-medium text-texas-navy">Phone</p>
                      <a href="tel:+17187196171" className="text-gray-600 hover:text-texas-accent">
                        (718) 719-6171
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-texas-accent" />
                    <div>
                      <p className="font-medium text-texas-navy">Email</p>
                      <a href="mailto:sales@constructionestimatingtexas.com" className="text-gray-600 hover:text-texas-accent">
                        sales@constructionestimatingtexas.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-texas-navy mb-6">Why Contact ConstructionEstimatingTexas?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our team delivers precise takeoffs, cost breakdowns, and bid-winning estimates using the latest software
              for residential, commercial, and industrial projects across Texas. Expect fast turnaround times,
              98% bid-win rates, and detailed reports covering materials, labor, and overhead to boost your profitability.
            </p>
            <p className="text-lg text-texas-accent font-medium">
              Whether you're a busy contractor or subcontractor, we handle complex estimates so you focus on building.
            </p>
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
                  <span className="font-semibold text-texas-navy">{faq.question}</span>
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