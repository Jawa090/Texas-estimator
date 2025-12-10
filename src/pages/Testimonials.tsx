import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Star, Quote, Building2, MapPin, Calendar } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const caseStudies = [
    {
      id: '1',
      title: 'Manchester Office Development',
      client: 'Mitchell Construction Ltd',
      challenge: 'Complex 15-story office building with mixed-use ground floor requiring detailed MEP estimates within 24 hours for tender submission.',
      solution: 'Our team provided comprehensive estimates covering all trades including specialized HVAC systems and high-end finishes.',
      results: [
        'Won £2.3M contract',
        'Delivered 6 hours ahead of deadline',
        'Estimate accuracy within 3% of final costs',
        'Client secured additional projects based on competitive pricing'
      ],
      image: '/images/case-study-1.jpg',
      location: 'Manchester',
      projectValue: '£2.3M',
      timeline: '24 hours'
    },
    {
      id: '2',
      title: 'Birmingham Residential Estate',
      client: 'Thompson & Associates',
      challenge: '120-unit residential development requiring detailed estimates for all trades with regional pricing variations.',
      solution: 'Provided comprehensive residential estimates with Birmingham-specific pricing and local supplier rates.',
      results: [
        'Secured planning approval',
        'Reduced material costs by 12%',
        'Improved profit margins by 8%',
        'Established ongoing partnership'
      ],
      image: '/images/case-study-2.jpg',
      location: 'Birmingham',
      projectValue: '£18M',
      timeline: '48 hours'
    },
    {
      id: '3',
      title: 'Leeds Industrial Facility',
      client: 'Chen Engineering Solutions',
      challenge: 'Specialized manufacturing facility with complex MEP requirements and tight environmental controls.',
      solution: 'Our MEP specialists provided detailed estimates for specialized HVAC, electrical, and process systems.',
      results: [
        'Won competitive tender',
        'Identified cost savings opportunities',
        'Delivered under budget',
        'Client expanded operations'
      ],
      image: '/images/case-study-3.jpg',
      location: 'Leeds',
      projectValue: '£5.2M',
      timeline: '36 hours'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-texas-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              See how Texas Estimators has helped construction professionals across the UK 
              win more projects and deliver better outcomes through accurate, timely estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what construction professionals 
              across the UK say about our estimating services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-texas-accent mb-4" />
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-texas-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-texas-accent font-medium text-sm">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore detailed case studies showing how our estimates helped clients 
              win projects and achieve successful outcomes.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <Building2 className="w-6 h-6 text-texas-accent" />
                      <h3 className="text-2xl font-bold text-texas-navy">
                        {study.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-texas-accent" />
                        <span className="text-gray-600">{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-texas-accent" />
                        <span className="text-gray-600">{study.timeline}</span>
                      </div>
                      <div className="text-texas-accent font-semibold">
                        {study.projectValue}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-texas-navy mb-2">Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-texas-navy mb-2">Our Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-texas-navy mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Client: <span className="font-medium text-texas-navy">{study.client}</span>
                      </p>
                    </div>
                  </div>

                  <div className={`bg-gray-100 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center text-gray-500 p-8">
                      <Building2 className="w-16 h-16 mx-auto mb-4" />
                      <p>Project Image</p>
                      <p className="text-sm">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our Track Record
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to accuracy, speed, and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-texas-accent mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-texas-accent mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-texas-accent mb-2">95%+</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-texas-accent mb-2">24-48h</div>
              <div className="text-gray-600">Average Turnaround</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Experience the Texas Estimators difference. Get accurate estimates that help you 
            win more projects and deliver better outcomes for your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Your Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-texas-navy">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};