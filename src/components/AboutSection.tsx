import { motion } from 'framer-motion';
import { sections } from '../data/sections';
import { sectionVariants, titleVariants } from '../utils/animations';



export const AboutSection = () => {
  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          className="space-y-2 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className="card p-5 sm:p-4 transition-all cursor-default border border-transparent hover:border-gray-200 dark:hover:border-gray-800"
            variants={sectionVariants}
            whileHover="hover"
            initial={{ backgroundColor: "rgba(var(--card-rgb), 0)" }}
          >
            <motion.h2 
              className="text-lg font-semibold mb-3 inline-block"
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