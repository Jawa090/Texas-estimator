import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCTA = { text: 'Estimate Now', href: '/contact-us' },
  backgroundImage = '/images/construction-hero.jpg',
  className = ''
}) => {
  return (
    <section className={`relative min-h-[600px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image with optional parallax or scale effect could go here */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="hero-overlay z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
            {title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto font-medium drop-shadow-md">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link to={primaryCTA.href}>
            <Button size="lg" className="w-full sm:w-auto text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {primaryCTA.text}
            </Button>
          </Link>
          <a href="tel:7187196171">
            <Button size="lg" className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (718) 719-6171
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};