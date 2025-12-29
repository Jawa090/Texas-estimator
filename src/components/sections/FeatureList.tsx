import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-texas-navy mb-4"
            >
              {title}
            </motion.h2>
          </div>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className={`grid ${gridCols[columns]} gap-8`}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="transform transition-transform hover:scale-110 duration-300">
                  {feature.icon || <CheckCircle className="w-12 h-12 text-texas-accent" />}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-texas-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};