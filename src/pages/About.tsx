import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Users,
  Award,
  Globe,
  Target,
  CheckCircle,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';

export const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Managing Director',
      experience: '15+ years',
      specialization: 'Commercial Estimating',
      qualifications: 'MRICS, BSc Construction Management'
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Estimator',
      experience: '12+ years',
      specialization: 'MEP Systems',
      qualifications: 'MCIOB, MEng Electrical Engineering'
    },
    {
      name: 'David Wilson',
      role: 'Lead Estimator',
      experience: '10+ years',
      specialization: 'Residential & Industrial',
      qualifications: 'MRICS, BSc Quantity Surveying'
    },
    {
      name: 'Emma Davis',
      role: 'Estimating Specialist',
      experience: '8+ years',
      specialization: 'Structural & Civil',
      qualifications: 'MCIOB, BEng Civil Engineering'
    }
  ];

  const companyStats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '24-48h', label: 'Average Turnaround' },
    { number: '95%+', label: 'Accuracy Rate' }
  ];

  const values = [
    {
      title: 'Accuracy',
      description: 'We pride ourselves on delivering precise estimates that help our clients win projects and avoid costly overruns.',
      icon: <Target className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Speed',
      description: 'Fast turnaround times without compromising quality, helping you meet tight tender deadlines.',
      icon: <TrendingUp className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Expertise',
      description: 'RICS-qualified professionals with deep knowledge of UK construction markets and regulations.',
      icon: <Award className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Service',
      description: 'Dedicated support throughout the process, from initial quote to final delivery and beyond.',
      icon: <Users className="w-8 h-8 text-texas-accent" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-texas-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Texas Estimators
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Bringing Texas expertise to the UK construction market. We combine American innovation 
              with British precision to deliver the most accurate construction estimates in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in Texas with over two decades of experience in construction estimating, 
                  Texas Estimators expanded to the UK to bring our proven methodologies and expertise 
                  to British construction professionals.
                </p>
                <p>
                  Our team combines the best of both worlds: American innovation in estimating technology 
                  and processes, with deep understanding of UK building standards, regulations, and market conditions.
                </p>
                <p>
                  We've successfully completed over 500 projects across residential, commercial, and industrial 
                  sectors, helping contractors win bids and complete projects on time and within budget.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-texas-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to revolutionizing construction estimating in the UK through 
              accuracy, speed, and exceptional service.
            </p>
          </div>

          <div className="mb-12">
            <Card className="text-center p-8">
              <h3 className="text-2xl font-bold text-texas-navy mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                To provide the most accurate, reliable, and timely construction estimates in the UK, 
                empowering contractors and developers to make informed decisions, win more projects, 
                and deliver successful outcomes for their clients.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-texas-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of RICS-qualified estimators brings decades of combined 
              experience across all construction sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-texas-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-texas-accent" />
                </div>
                <h3 className="text-lg font-semibold text-texas-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-texas-accent font-medium mb-2">
                  {member.role}
                </p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>{member.experience} experience</p>
                  <p className="font-medium">{member.specialization}</p>
                  <p className="text-xs">{member.qualifications}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RICS Alignment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              RICS Compliance & Professional Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our estimates follow RICS standards and UK building regulations, 
              ensuring professional compliance and industry recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <Award className="w-16 h-16 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-3">RICS Qualified Team</h3>
              <p className="text-gray-600">
                Our senior estimators are RICS members with extensive UK market experience and ongoing professional development.
              </p>
            </Card>

            <Card className="text-center">
              <CheckCircle className="w-16 h-16 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Industry Standards</h3>
              <p className="text-gray-600">
                All estimates follow RICS New Rules of Measurement (NRM) and UK building regulations for professional compliance.
              </p>
            </Card>

            <Card className="text-center">
              <Globe className="w-16 h-16 text-texas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-texas-navy mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Regular training and updates ensure our team stays current with evolving UK construction standards and practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* UK Expansion */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-6">
                Why We Chose the UK
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The UK construction market presented the perfect opportunity to apply our proven 
                  estimating methodologies in a sophisticated, regulation-rich environment.
                </p>
                <p>
                  We recognized the need for faster, more accurate estimating services that could 
                  help UK contractors compete more effectively in an increasingly competitive market.
                </p>
                <p>
                  Our expansion allows us to serve clients across England, Scotland, Wales, and 
                  Northern Ireland with localized expertise and understanding of regional variations.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/locations">
                  <Button>View Our Service Areas</Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-xl font-bold text-texas-navy mb-6">UK Office</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-texas-accent mt-1" />
                  <div>
                    <p className="font-medium text-texas-navy">London Headquarters</p>
                    <p className="text-gray-600">123 Business Park<br />London, UK SW1A 1AA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-texas-accent" />
                  <div>
                    <p className="font-medium text-texas-navy">Established</p>
                    <p className="text-gray-600">2020 - UK Operations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-texas-accent" />
                  <div>
                    <p className="font-medium text-texas-navy">Team Size</p>
                    <p className="text-gray-600">15+ UK-based professionals</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-texas-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Experience the Texas Estimators difference. Get accurate, professional estimates 
            that help you win more projects and deliver better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Today
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