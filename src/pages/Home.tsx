import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePageSEO } from '../hooks/usePageSEO';
import { SEOHead } from '../components/SEOHead';



import { Hero } from '../components/sections/Hero';
import { FeatureList } from '../components/sections/FeatureList';
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
  MapPin,
  CheckCircle,
  Upload,
  DollarSign,
  FileCheck
} from 'lucide-react';

export const Home: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  const keyFeatures = [
    {
      title: 'Fast Turnaround Time',
      description: 'We complete our calculations in a short timeframe. It helps contractors meet deadlines without stress. We designed our process to avoid any delays.',
      icon: <Clock className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'Skilled and Experienced Team',
      description: 'Our team includes professionals who understand project needs. This experience helps us avoid mistakes and missing items.',
      icon: <Users className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'High Bid Success Rate',
      description: 'We prepare and submit stronger bids that win more. Our prices will be clear and detailed to help you get projects.',
      icon: <TrendingUp className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'Detailed and Exact Numbers',
      description: 'Every number includes the right measurements with cost details. This will help in better planning and avoiding cost changes.',
      icon: <Calculator className="w-12 h-12 text-texas-accent" />
    },
    {
      title: 'Support for all CSI Trades',
      description: 'We include all CSI trades in our construction estimating services Texas. This will help you cover the complete project without errors.',
      icon: <Building2 className="w-12 h-12 text-texas-accent" />
    },
    {
      title: '24/7 Client Support',
      description: 'Our team will be available to you all the time to help. We will answer your questions and update you at the right times.',
      icon: <Shield className="w-12 h-12 text-texas-accent" />
    }
  ];

  const serviceTypes = [
    {
      title: 'Residential Estimating Services',
      description: 'Residential cost projections need careful control to meet quality needs. With years of experience, we handle homes of all sizes. We will also focus on detail and accuracy in all values. We also cover renovations, additions, and remodeling work. Thus, you can make a realistic budget and save costs. This makes us the best construction estimating services Texas.',
      icon: <HomeIcon className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Commercial Estimating Services',
      description: 'Commercial projects need accurate numbers to stay on time. Early planning and bidding improve your success rate. We will give you clear breakdowns for commercial materials. Our team covers all trades in the project for larger constructions. You will receive clear and reliable numbers for warehouses and buildings.',
      icon: <Building2 className="w-8 h-8 text-texas-accent" />
    },
    {
      title: 'Industrial Estimating Services',
      description: 'Industrial works require technical knowledge with proper planning. Our team covers all the piping and gas systems in these constructions. We also use proper tools and meet industry standards. Our expert construction estimators Texas help you plan and bid with confidence.',
      icon: <Factory className="w-8 h-8 text-texas-accent" />
    }
  ];

  const constructionTrades = [
    {
      title: 'MEP Estimating Services',
      description: 'MEP services cover mechanical, electrical, and plumbing systems. We prepare accurate numbers for HVAC units and other fittings. These exact numbers will help you work with other trades. You will be able to control the budget and plan labor better. We focus on all systems at our construction estimating services Texas.',
      icon: <Zap className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Concrete Estimating Services',
      description: 'Our concrete cost estimations include foundations and slabs. We calculate all the material and labor needs with care. This will help contractors bid right and win. You will also avoid any surprise costs in construction.',
      icon: <Building2 className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Drywall Estimating and Takeoff',
      description: 'Drywall estimations include walls and finishing material. We measure quantities according to layout and height. Our team will include setup costs to give you precise results. This will help you with a smoother workflow. This detailed work makes us the #1 estimating company in Texas.',
      icon: <FileText className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Steel Estimating Services',
      description: 'Steel estimating includes structural and additional steel. We measure all columns and connections with care. We will list each component to help with ordering. The right values will decrease delays in the process.',
      icon: <Shield className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Lumber Takeoff Services',
      description: 'Lumber takeoffs include all the framing and finish wood. We calculate quantities for studs and beams with other components. Also, we will organize the material by size and type. This will help you reduce waste and control the budget. Attention to detail makes us a trustworthy construction estimating company.',
      icon: <HomeIcon className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Earthwork Estimating Services',
      description: 'These services include all the sitework preparation. We will measure quantities for grading and backfilling. These will help you with equipment and labor needs. Clear earthwork numbers will support realistic site planning. So, you will not be running into surprise expenses.',
      icon: <MapPin className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Openings Estimating Services',
      description: 'Opening cost projections include doors, windows, and hardware. We will measure all the needs from the drawings and details. This will also help in a smooth fitting process. The right cost projection will also help with fewer issues on the site.',
      icon: <FileCheck className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Masonry Estimating Services',
      description: 'Masonry services include bricks, stones, and mortars. We calculate each quantity according to all sizes and designs. Clear takeoffs will help plan labor and equipment without any wastage. With precise numbers, you can bid with confidence. Get the most reliable construction estimating services Texas with us.',
      icon: <Building2 className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Roofing Estimating Services',
      description: 'Our roofing services cover all roof types, like built-up roofs. We will calculate exact material quantities with accessories for the best output. You will get measurements of all insulation and flashing material as well.',
      icon: <HomeIcon className="w-6 h-6 text-texas-accent" />
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Share your Plans',
      description: 'First of all, upload your drawings and project details. You can include notes and bid deadlines as well. Our team will review them to understand the scope and trades. This will help us prepare the correct numbers from the start.',
      icon: <Upload className="w-8 h-8 text-texas-accent" />
    },
    {
      step: '2',
      title: 'Get Quotes and Confirm',
      description: 'After this, we will send a clear quote with pricing. We will also include service charges details in it. Then, you will complete the payment to confirm the order.',
      icon: <DollarSign className="w-8 h-8 text-texas-accent" />
    },
    {
      step: '3',
      title: 'Receive your Report',
      description: 'Lastly, you will get your report with detailed material quantities. We will include all the cost values as well as exact quantities in it. It will be in a format that is easy to review and bid. Our team remains available for questions and revisions.',
      icon: <FileCheck className="w-8 h-8 text-texas-accent" />
    }
  ];

  const clientBase = [
    'General Contractors',
    'Subcontractors',
    'Trade contractors',
    'Real Estate Developers',
    'Project Owners',
    'Construction Managers',
    'Architects',
    'Design Firms',
    'Engineering Firms'
  ];

  const whyOutsource = [
    {
      title: 'Competitive Pricing',
      description: 'Our services are clear and friendly to your wallet. You will pay for the services you need without any extra charges. We give you correct construction cost estimating services Texas.',
      icon: <DollarSign className="w-6 h-6 text-texas-accent" />
    },
    {
      title: 'Proposal and Bid Help',
      description: 'We will help you organize bid documents in a professional way. This will make submission easier and effective.',
      icon: <FileText className="w-6 h-6 text-texas-accent" />
    }
  ];


  // Fetch Dynamic SEO
  const { seoData } = usePageSEO('home');



  return (
    <div className="min-h-screen">
      <SEOHead
        data={seoData}
      />


      {/* Hero Section */}
      <Hero
        title="Texas Construction Estimating Services"
        subtitle="Construction in Texas requires accurate budgets and careful planning. Many contractors struggle with tight margins and fluctuating material costs. Inaccurate estimates lead to underbidding and cost overrun. realistic budgets with the right planning. At Construction Estimating Texas, we help contractors win more jobs with accurate cost estimates."
        backgroundImage="/images/home-hero.png"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-6">
                Texas Construction Estimating Services and Takeoffs
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  We also use current labor rates and local pricing for the best results. Working with us, you will get the right quantities for CSI trades. We help you prepare bids for increased chances of winning. With our services, you can manage costs and increase profits. You can complete your projects with confidence with our accurate numbers. You will have clear cost details and cost control to avoid sudden expenses.
                </p>
                <p>
                  Work with us to get the best out of construction estimating services in Texas. Our team combines 15 years of experience with local market knowledge. We support household buildings to large commercial sites. By outsourcing estimations with us, you save time and reduce errors. Thus, you can manage the construction with better decisions. We will also help you stay in a budget and increase profits.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/images/about-hero.png"
                alt="Construction Estimating Team"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complete Construction Estimating Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our Complete Construction Estimating Services Texas
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviceTypes.map((service, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <Card hover className="h-full">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-texas-navy ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Construction Takeoff Services */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/images/pricing-hero.png"
                alt="Digital Construction Takeoff"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-6">
                Construction takeoff services for Texas Contractors
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  We give you reliable and exact takeoff services for contractors across Texas. Our clients include general contractors and developers, among others. We review your plans and drawings to get every detail. Our team will prepare quantity lists and material takeoffs in exact numbers. This exact measurement will allow you to avoid material waste.
                </p>
                <p>
                  This helps you avoid material waste and shortages. While you look for estimating services near me, we are the best fit for you. You will be able to bid on more projects to increase the winning rate. Now, you know the best construction estimating services in Texas. Contact us today and receive your exact value in 9-24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Client Base */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our Client Base
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We serve the given professionals with our construction estimating services Texas:
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {clientBase.map((client, index) => (
              <motion.div key={index} variants={item} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-soft hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="w-5 h-5 text-texas-accent mr-3" />
                <span className="font-medium text-texas-navy">{client}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Outsource */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-6">
                Why should you outsource Texas construction estimating services?
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  Contractors can miss bids due to a lack of time, staff, or resources. This can slow your business growth and profits. We help you overcome this with the right cost projections. Thus, you can bid on more projects without extra internal cost. Our team supports busy contractors in Texas with detailed and clear cost breakdowns.
                </p>
                <p>
                  When you outsource cost values from us, you save time and reduce overhead costs. You will also get more profit from your construction jobs. Here is how we are one of the top construction estimating services Texas:
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/images/contact-hero.png"
                alt="Contractor Meeting"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <FeatureList
        title="Why Choose Construction Estimating Texas?"
        features={keyFeatures}
        className="bg-gray-50"
      />

      {/* Additional Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {whyOutsource.map((benefit, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <Card hover className="h-full">
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-semibold text-texas-navy ml-3">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simple Estimation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Simple Estimation Process
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={item} className="text-center">
                <div className="w-16 h-16 bg-texas-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4 text-texas-navy">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-texas-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* Construction Trades We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our Portfolio
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-texas-navy mb-6">
              Construction Trades We Serve
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {constructionTrades.map((trade, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <Card hover className="h-full">
                  <div className="flex items-center mb-3">
                    {trade.icon}
                    <h3 className="text-lg font-semibold text-texas-navy ml-3">{trade.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{trade.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-lg text-texas-accent font-semibold mb-4">
              Get up to 30% Discount Today.
            </p>
          </div>
        </div>
      </section>

      {/* Our Foolproof Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Our Foolproof Approach
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Clear Client Communication</h3>
                <p className="text-gray-600">We stay in close contact with our clients in the calculation process. Our team will confirm details and assumptions with you. This will help avoid any confusion and mistakes.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Complete Project Reviews</h3>
                <p className="text-gray-600">Our team reviews drawings and the scope to understand all details. Texas construction estimating services help you make realistic budgets. In this way, you can avoid any shortage or wastage.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Advanced Estimation Tools and Software</h3>
                <p className="text-gray-600">We use modern tools and software to get exact calculations. These tools will help manage complex data. So, you will get fast results without compromise on quality.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Latest Cost Data</h3>
                <p className="text-gray-600">Our firm applies current market rates of labor and material. We match your work cost to your exact needs. These real values will support budgets and best bidding decisions.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Smoother Workflow</h3>
                <p className="text-gray-600">Our smoother workflow reduces delays and waste. This allows us to meet deadlines with accurate numbers. Thus, you will achieve efficient results without delays.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Risk Management</h3>
                <p className="text-gray-600">We manage all risks and pricing uncertainties early in the process. This helps with better planning without extra expenses mid-process. With this, we become the best construction estimating services Texas.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Value Engineering</h3>
                <p className="text-gray-600">Our team evaluates all the alternative materials and methods. This helps you avoid the overall cost and maintain quality. We focus on maintaining performance with better project value.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Insights from Past Work</h3>
                <p className="text-gray-600">We study our experiences from completed projects for better results. These real-world lessons help us deliver consistent results. Hence, we are able to maintain quality in all kinds of projects.</p>
              </Card>
            </motion.div>

            <motion.div variants={item} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold text-texas-navy mb-3">Quality checks and Final Review</h3>
                <p className="text-gray-600">Every calculation goes through a quality control process. We do a final review before submission to match the project with expectations.</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {/* Manual motion divs for cards since they aren't in a map */}
              <motion.div variants={item} className="mb-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-texas-navy mb-3">
                    Do your projections follow Texas construction standards and codes?
                  </h3>
                  <p className="text-gray-600">
                    Yes, all our cost values follow Texas construction standards. We use the local building goals and best practices for exact results. Our expert construction estimators Texas give numbers you can trust.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={item} className="mb-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-texas-navy mb-3">
                    How do I get started with your construction estimating services Texas?
                  </h3>
                  <p className="text-gray-600">
                    It is a simple process to get our construction estimating services. You will share your plans and details in the first step. Our team will send you a quote and timeline. Then, you will get your final report in the given timeframe.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={item} className="mb-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-texas-navy mb-3">
                    What kind of projects do you include in your services?
                  </h3>
                  <p className="text-gray-600">
                    We handle all residential, commercial, and industrial constructions. It includes new buildings, renovations, and remodeling projects. We match our calculations to your scope details and needs.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={item} className="mb-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-texas-navy mb-3">
                    Can you give us value engineering advice to save costs?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer value engineering advice to help you reduce costs. Our team will review plans to tell you about alternative options. These options would be materials, design, and methods. Get our construction estimating services in Texas for the best savings.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={item} className="mb-4">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-texas-navy mb-3">
                    What is a construction estimate? Does a contractor have to provide one?
                  </h3>
                  <p className="text-gray-600">
                    A construction estimate is a detailed calculation of all costs of a work. It includes material, labor, and equipment, with other expenses. Contractors give an estimate to give clients a clear understanding of the budget. Accurate cost values help you avoid surprise expenses and shortages.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-texas-navy text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, #FF7A18 2px, transparent 2px)",
            backgroundSize: "30px 30px"
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today and receive your exact value in 9-24 hours. Get the most reliable construction estimating services Texas with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us/">
                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-orange-500/20">
                  Get Free Quote Now
                </Button>
              </Link>
              <Link to="/pricing/">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto hover:bg-white/90">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};