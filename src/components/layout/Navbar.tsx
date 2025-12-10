import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { services } from '../../data/services';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Process', href: '/process' },
    { name: 'Locations', href: '/locations' },
    { name: 'Trades', href: '/trades' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-texas-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+441234567890" className="flex items-center space-x-2 hover:text-texas-accent transition-colors">
                <Phone size={14} />
                <span>+44 123 456 7890</span>
              </a>
              <a href="mailto:info@texasestimators.co.uk" className="flex items-center space-x-2 hover:text-texas-accent transition-colors">
                <Mail size={14} />
                <span>info@texasestimators.co.uk</span>
              </a>
            </div>
            <div className="hidden md:block text-xs">
              Mon-Fri: 8AM-6PM | Sat: 9AM-2PM | 24-48h Turnaround
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-texas-navy">
                Texas Estimators
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home Link */}
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/')
                    ? 'text-texas-accent'
                    : 'text-gray-700 hover:text-texas-accent'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                    location.pathname.startsWith('/services')
                      ? 'text-texas-accent'
                      : 'text-gray-700 hover:text-texas-accent'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-texas-accent font-medium border-b border-gray-100"
                    >
                      All Services Overview
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-texas-accent"
                      >
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{service.shortDescription}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-texas-accent'
                      : 'text-gray-700 hover:text-texas-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Link to="/contact">
                <Button size="sm">Get Free Quote</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-texas-accent focus:outline-none focus:ring-2 focus:ring-texas-accent"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {/* Home Link */}
                <Link
                  to="/"
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive('/')
                      ? 'text-texas-accent bg-orange-50'
                      : 'text-gray-700 hover:text-texas-accent hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <div className="font-medium text-gray-700 mb-2">Services</div>
                  <Link
                    to="/services"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-texas-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services Overview
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-texas-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                {/* Other Navigation Items */}
                {navigation.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-texas-accent bg-orange-50'
                        : 'text-gray-700 hover:text-texas-accent hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="px-3 py-2 space-y-2 border-t border-gray-200 mt-4">
                  <a href="tel:+441234567890" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-texas-accent">
                    <Phone size={16} />
                    <span>+44 123 456 7890</span>
                  </a>
                  <a href="mailto:info@texasestimators.co.uk" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-texas-accent">
                    <Mail size={16} />
                    <span>info@texasestimators.co.uk</span>
                  </a>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full mt-2">Get Free Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};