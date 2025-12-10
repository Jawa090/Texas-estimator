import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Upload,
  FileText,
  Calculator,
  Download,
  Clock,
  CheckCircle,
  MessageSquare,
  Shield,
  Repeat
} from 'lucide-react';

export const Process: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Upload Your Plans',
      description: 'Send us your drawings, specifications, or project details through our secure upload system. We accept PDF, DWG, DXF, and image files up to 20MB.',
      icon: <Upload className="w-12 h-12 text-texas-accent" />,
      details: [
        'Secure file upload system',
        'Multiple file format support',
        'Up to 20MB file size limit',
        'Automatic virus scanning',
        'Instant upload confirmation'
      ]
    },
    {
      step: 2,
      title: 'Receive Free Quote',
      description: 'Get a detailed quote within 2 hours outlining scope, timeline, and pricing for your estimate. No obligation and completely free.',
      icon: <FileText className="w-12 h-12 text-texas-accent" />,
      details: [
        '2-hour response time',
        'Detailed scope breakdown',
        'Clear pricing structure',
        'Timeline confirmation',
        'No hidden costs'
      ]
    },
    {
      step: 3,
      title: 'Professional Estimating',
      description: 'Our certified estimators create detailed takeoffs and cost analysis using industry-standard software and current UK market rates.',
      icon: <Calculator className="w-12 h-12 text-texas-accent" />,
      details: [
        'RICS-qualified estimators',
        'Industry-standard software',
        'Current UK market rates',
        'Quality assurance checks',
        'Detailed documentation'
      ]
    },
    {
      step: 4,
      title: 'Delivery & Support',
      description: 'Receive your RICS-compliant estimate in Excel and PDF formats with ongoing support included for any questions or clarifications.',
      icon: <Download className="w-12 h-12 text-texas-accent" />,
      details: [
        'Multiple file formats',
        'RICS-compliant reports',
        'Ongoing support included',
        'Revision options available',
        'Professional presentation'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What file formats do you accept?',
      answer: 'We accept PDF, DWG, DXF, JPG, PNG, and most common drawing formats. Files can be up to 20MB in size.'
    },
    {
      question: 'How accurate are your estimates?',
      answer: 'Our estimates typically have an accuracy of ±5-10% depending on the level of detail provided. We use current UK market rates and have extensive experience across all construction trades.'
    },
    {
      question: 'What if I need revisions?',
      answer: 'Minor revisions are included in our service. Major scope changes may require additional fees, which we\'ll discuss with you beforehand.'
    },
    {
      question: 'Do you provide estimates for all UK regions?',
      answer: 'Yes, we provide estimates for all UK regions and adjust pricing based on local market conditions and regional variations.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We use secure, encrypted file transfer systems and maintain strict confidentiality agreements. Your project data is never shared with third parties.'
    },
    {
      question: 'Can you work with tight deadlines?',
      answer: 'Yes, we offer expedited services for urgent projects. Same-day delivery is available for an additional fee depending on project complexity.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-texas-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Estimating Process
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A streamlined, professional process designed to deliver accurate construction estimates 
              quickly and efficiently. From upload to delivery in just 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.step} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-texas-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {step.step}
                    </div>
                    <h2 className="text-3xl font-bold text-texas-navy">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gray-50 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Typical Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our efficient process ensures you get accurate estimates without delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <Clock className="w-12 h-12 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-2">0-2 Hours</h3>
              <p className="text-gray-600">Initial review and free quote provided</p>
            </Card>
            <Card className="text-center">
              <Calculator className="w-12 h-12 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-2">2-24 Hours</h3>
              <p className="text-gray-600">Detailed estimating and quality checks</p>
            </Card>
            <Card className="text-center">
              <FileText className="w-12 h-12 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-2">24-48 Hours</h3>
              <p className="text-gray-600">Final report preparation and delivery</p>
            </Card>
            <Card className="text-center">
              <MessageSquare className="w-12 h-12 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-2">Ongoing</h3>
              <p className="text-gray-600">Support and clarifications as needed</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Quality Assurance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every estimate goes through our rigorous quality assurance process to ensure accuracy and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-16 h-16 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-3">RICS Compliance</h3>
              <p className="text-gray-600">
                All estimates follow RICS standards and UK building regulations for professional compliance and accuracy.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Double-Check Process</h3>
              <p className="text-gray-600">
                Every estimate is reviewed by a senior estimator to ensure accuracy and catch any potential issues.
              </p>
            </div>
            <div className="text-center">
              <Repeat className="w-16 h-16 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                We regularly update our processes and pricing databases to maintain the highest standards of accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our estimating process and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-texas-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Upload your plans today and receive a free quote within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-texas-navy">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};