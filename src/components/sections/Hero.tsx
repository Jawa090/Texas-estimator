import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

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
  primaryCTA = { text: 'Get a Free Quote', href: '/contact' },
  secondaryCTA = { text: 'View Services', href: '/services' },
  backgroundImage = '/images/construction-hero.jpg',
  className = ''
}) => {
  return (
    <section className={`relative min-h-[600px] flex items-center justify-center ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to={primaryCTA.href}>
            <Button size="lg" className="w-full sm:w-auto">
              {primaryCTA.text}
            </Button>
          </Link>
          <Link to={secondaryCTA.href}>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-texas-navy">
              {secondaryCTA.text}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};