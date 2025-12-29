import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Users,
  CheckCircle,
  FileText,
  Target,
  TrendingUp,
  Clipboard,
  Layout,
  Clock
} from 'lucide-react';

export const About: React.FC = () => {
  const services = [
    {
      title: 'Material & Quantity Takeoffs',
      description: 'Accurate and detailed material lists to help you order exactly what you need.',
      icon: <Clipboard className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Bid & Tender Estimates',
      description: 'Comprehensive estimates designed to help you strictly meet bid requirements and deadlines.',
      icon: <Target className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Budget & Initial Estimates',
      description: 'Early-stage cost assessments to help developers and owners plan project feasibility.',
      icon: <TrendingUp className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Contractor Support',
      description: 'Dedicated cost estimating assistance for busy contractors and subcontractors.',
      icon: <Users className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Trade-Specific Estimating',
      description: 'Specialized estimates tailored to the specific needs of your trade and project scope.',
      icon: <Layout className="w-8 h-8 text-texas-accent" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Correct & Well-Organized',
      description: 'Estimates that are easy to read and understand, reducing confusion and errors.',
      icon: <CheckCircle className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Quick Turnaround',
      description: 'We respect your deadlines and ensure you have your numbers ready for bid day.',
      icon: <Clock className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Clear & Detailed',
      description: 'Amounts and costs are clearly broken down, giving you full transparency.',
      icon: <FileText className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Contractor-Focused',
      description: 'Output is prepared specifically to be useful for both bidding and buying materials.',
      icon: <Users className="w-6 h-6 text-texas-accent" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative bg-texas-navy text-white py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/about-hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-texas-navy/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Construction Estimating Texas
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              ConstructionEstimatingTexas is your reliable partner for construction estimating and material takeoff services in Texas.
              We help contractors, subcontractors, builders, and developers bid smarter by giving them accurate quantities,
              realistic prices, and clear estimate reports.
            </p>
            <p className="text-lg text-texas-accent font-medium">
              Win more projects while keeping your profit margins safe.
            </p>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-6">
                What We Are?
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  The main goal of <strong>Construction Estimating Texas</strong> is to provide reliable, detailed, and timely construction estimates
                  that help people bid with confidence and plan their projects better.
                </p>
                <p>
                  We use professional takeoff methods and a structured estimating process to give you organized,
                  trade-specific results that you can trust. No more guessing games or last-minute panic.
                </p>
                <div className="pt-4">
                  <Link to="/contact">
                    <Button>Get Your Estimate Today</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                alt="Construction planning"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ConstructionEstimatingTexas offers professional estimating services that will help you get more work done and
              make your bids more accurate. We're here to make your work easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-texas-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 italic">
              Whether you need help estimating one project or ongoing help during busy bidding seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Contractors Choose <br />Construction Estimating Texas?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We focus on what matters most in estimating: accuracy, clarity, and how long it takes to get the job done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-white rounded-full p-2 mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-texas-accent">
                    {item.title}
                  </h3>
                  <p className="text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-8">
              You can count on help, so you don't have to guess when deadlines are coming up.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-texas-accent hover:bg-orange-600 text-white border-none">
                Start Your Next Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};