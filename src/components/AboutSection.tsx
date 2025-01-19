import { motion } from 'framer-motion';
import { sections } from '../data/sections';
import { sectionVariants, titleVariants, containerVariants } from '../utils/animations';
import { useState } from 'react';

export const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          className="space-y-1 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
            scale: hoveredIndex === index ? 1.02 : 1
          }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.1 
          }}
        >
          <motion.div
            className="card p-4 sm:p-4 transition-all cursor-default border border-transparent hover:border-gray-200 dark:hover:border-gray-800"
            variants={sectionVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
              transformOrigin: 'center left'
            }}
          >
            <motion.h2 
              className="text-lg font-semibold mb-1 inline-block"
              variants={titleVariants}
            >
              {section.title}
            </motion.h2>
            <motion.div 
              className="transition-all"
              initial={false}
              animate={{ y: 0 }}
            >
              {section.content}
            </motion.div>
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}; 