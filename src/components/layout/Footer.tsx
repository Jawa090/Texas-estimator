import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-texas-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Texas Estimators" className="h-24 md:h-40 w-auto" />
            </div>
            <p className="text-gray-300 text-sm">
              Professional construction estimating and takeoff services for the UK market.
              Fast, accurate, and RICS-compliant estimates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-texas-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-texas-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-texas-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/construction-takeoff" className="text-gray-300 hover:text-texas-accent transition-colors">Construction Takeoff</Link></li>
              <li><Link to="/services/commercial-estimating" className="text-gray-300 hover:text-texas-accent transition-colors">Commercial Estimating</Link></li>
              <li><Link to="/services/residential-estimating" className="text-gray-300 hover:text-texas-accent transition-colors">Residential Estimating</Link></li>
              <li><Link to="/services/mep-estimating" className="text-gray-300 hover:text-texas-accent transition-colors">MEP Estimating</Link></li>
              <li><Link to="/services/electrical-estimating" className="text-gray-300 hover:text-texas-accent transition-colors">Electrical Estimating</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="text-gray-300 hover:text-texas-accent transition-colors">About Us</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-texas-accent transition-colors">Our Process</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-texas-accent transition-colors">Pricing</Link></li>
              <li><Link to="/locations" className="text-gray-300 hover:text-texas-accent transition-colors">Locations</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-texas-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-texas-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-texas-accent" />
                <div>
                  <p>123 Business Park</p>
                  <p>London, UK SW1A 1AA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-texas-accent" />
                <a href="tel:+441234567890" className="hover:text-texas-accent transition-colors">
                  +44 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-texas-accent" />
                <a href="mailto:info@texasestimators.co.uk" className="hover:text-texas-accent transition-colors">
                  info@texasestimators.co.uk
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="mt-1 text-texas-accent" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} Texas Estimators. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-texas-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-texas-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-texas-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};