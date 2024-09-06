import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, CloudRain, Wind, Sunrise } from 'lucide-react';

const weatherIcons = [Sun, Moon, CloudRain, Wind, Sunrise];

export const Frame = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % weatherIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { title: 'Tourist destination', bgColor: '#087e8b', image: '/destinationcategory-1-bg.jpeg' },
    { title: 'Camping', bgColor: '#13294b', image: '/destinationcategory-2-bg.jpeg' },
    { title: 'Adventure travel', bgColor: '#087e8b', image: '/destinationcategory-3-bg.jpeg' },
    { title: 'Pilgrimage sites', bgColor: '#087e8b', image: '/destinationcategory-4-bg.jpeg' },
    { title: 'Road trips', bgColor: '#13294b', image: '/destinationcategory-5-bg.jpeg' },
    { title: 'Beach side', bgColor: '#087e8b', image: '/destinationcategory-6-bg.jpeg' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#087e8b] to-[#ffffff] overflow-hidden py-16 px-4 md:px-8">
      {/* Animated weather icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {weatherIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: index === activeIndex ? 0.3 : 0,
              scale: index === activeIndex ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={64} color="#ffffff" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight mb-12"
        >
          Wherever your heart leads, let the journey begin—each destination in Sri Lanka tells a story waiting to be discovered.
        </motion.h1>
        
        {/* Category Title */}
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16"
        >
          DESTINATION CATEGORY
        </motion.h2>

        {/* Destination Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="text-center"
                >
                  <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug">
                    {category.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

function DestinationCategory() {
  return (
    <div className="relative w-full">
      <Frame />
    </div>
  );
}

export default DestinationCategory;
