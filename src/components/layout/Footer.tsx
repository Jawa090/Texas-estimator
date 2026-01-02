import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin,  Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-texas-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Texas Estimators" className="h-28 md:h-48 w-auto" />
            </div>
            <p className="text-gray-300 text-sm">
              {/* Professional construction estimating and takeoff services for the UK market.
              Fast, accurate, and RICS-compliant estimates. */}
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us/" className="text-gray-300 hover:text-texas-accent transition-colors">About Us</Link></li>          
              <li><Link to="/pricing/" className="text-gray-300 hover:text-texas-accent transition-colors">Pricing</Link></li>
              <li><Link to="/contact-us/" className="text-gray-300 hover:text-texas-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-texas-accent" />
                <div>
                  <p>Address 12828 Willow Centre Dr Ste D</p>
                  <p>Houston TX 77066</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-texas-accent" />
                <a href="tel:+17187196171" className="hover:text-texas-accent transition-colors">
                  (718) 719-6171
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-texas-accent" />
                <a href="mailto:sales@texasestimators.co.uk" className="hover:text-texas-accent transition-colors">
                  sales@texasestimators.co.uk
                </a>
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
              <Link to="/privacy/" className="text-gray-300 hover:text-texas-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms/" className="text-gray-300 hover:text-texas-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies/" className="text-gray-300 hover:text-texas-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};