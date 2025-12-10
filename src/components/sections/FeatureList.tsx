import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureListProps {
  title?: string;
  features: Feature[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  title,
  features,
  columns = 3,
  className = ''
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texas-navy mb-4">
              {title}
            </h2>
          </div>
        )}
        
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon || <CheckCircle className="w-12 h-12 text-texas-accent" />}
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};