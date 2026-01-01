import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    minutes: 12,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar with Contact Info & Countdown */}
      <div className="bg-texas-navy text-white py-2 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">

            {/* Left: Phone */}
            <div className="flex items-center space-x-6 z-10">
              <a href="tel:7187196171" className="flex items-center space-x-2 text-texas-accent font-bold hover:text-white transition-colors">
                <Phone size={16} />
                <span className="text-base">Call Now: (718) 719-6171</span>
              </a>
            </div>

            {/* Center: Welcome Message */}
            <div className="hidden lg:block text-xs font-medium tracking-wide text-gray-300 z-10">
              Welcome! Check out our latest updates and special offers.
            </div>

            {/* Right: Countdown */}
            <div className="flex items-center space-x-3 z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-texas-accent">Offer Ends In:</span>
              <div className="flex items-center space-x-2">
                <div className="flex flex-col items-center bg-white/10 rounded px-2 py-1 min-w-[30px]">
                  <span className="text-xs font-bold leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[8px] uppercase text-gray-400 leading-none mt-0.5">Days</span>
                </div>
                <div className="text-texas-accent font-bold">:</div>
                <div className="flex flex-col items-center bg-white/10 rounded px-2 py-1 min-w-[30px]">
                  <span className="text-xs font-bold leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[8px] uppercase text-gray-400 leading-none mt-0.5">Hours</span>
                </div>
                <div className="text-texas-accent font-bold">:</div>
                <div className="flex flex-col items-center bg-white/10 rounded px-2 py-1 min-w-[30px]">
                  <span className="text-xs font-bold leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[8px] uppercase text-gray-400 leading-none mt-0.5">Mins</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Texas Estimators" className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home Link */}
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-200 ${isActive('/')
                  ? 'text-texas-accent'
                  : 'text-gray-700 hover:text-texas-accent'
                  }`}
              >
                Home
              </Link>

              {/* About Link */}
              <Link
                to="/about-us"
                className={`text-sm font-medium transition-colors duration-200 ${isActive('/about-us')
                  ? 'text-texas-accent'
                  : 'text-gray-700 hover:text-texas-accent'
                  }`}
              >
                About
              </Link>

              {/* Pricing Link */}
              <Link
                to="/pricing"
                className={`text-sm font-medium transition-colors duration-200 ${isActive('/pricing')
                  ? 'text-texas-accent'
                  : 'text-gray-700 hover:text-texas-accent'
                  }`}
              >
                Pricing
              </Link>

              {/* Contact Link */}
              <Link
                to="/contact-us"
                className={`text-sm font-medium transition-colors duration-200 ${isActive('/contact-us')
                  ? 'text-texas-accent'
                  : 'text-gray-700 hover:text-texas-accent'
                  }`}
              >
                Contact Us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Link to="/contact-us">
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
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/')
                    ? 'text-texas-accent bg-orange-50'
                    : 'text-gray-700 hover:text-texas-accent hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* About Link */}
                <Link
                  to="/about-us"
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/about-us')
                    ? 'text-texas-accent bg-orange-50'
                    : 'text-gray-700 hover:text-texas-accent hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                {/* Pricing Link */}
                <Link
                  to="/pricing"
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/pricing')
                    ? 'text-texas-accent bg-orange-50'
                    : 'text-gray-700 hover:text-texas-accent hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>

                {/* Contact Link */}
                <Link
                  to="/contact-us"
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/contact-us')
                    ? 'text-texas-accent bg-orange-50'
                    : 'text-gray-700 hover:text-texas-accent hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>

                <div className="px-3 py-2 space-y-2 border-t border-gray-200 mt-4">
                  <a href="tel:7187196171" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-texas-accent">
                    <Phone size={16} />
                    <span>Call Now: (718) 719-6171</span>
                  </a>
                  <a href="mailto:info@constructionestimatingtexas.com" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-texas-accent">
                    <Mail size={16} />
                    <span>info@constructionestimatingtexas.com</span>
                  </a>
                  <Link to="/contact-us" onClick={() => setIsOpen(false)}>
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