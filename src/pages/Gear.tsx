import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';

interface GearItem {
  category: string;
  items: {
    name: string;
    description?: string;
    link: string;
    image: string;
  }[];
}

const Gear = () => {
  usePageTitle('Gear');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const gearList: GearItem[] = [    {
      category: "Desk",
      items: [
        {
          name: "MacBook Pro 16\" Space Black",
          description: "M3 Max, 48GB RAM, 1TB SSD",
          link: "https://amzn.to/3BxFN0n",
          image: "https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SL1500_.jpg"
        },
        {
          name: "GIGABYTE M27QX",
          description: "27\" 240Hz Gaming Monitor",
          link: "https://amzn.to/3OGJS5r",
          image: "https://m.media-amazon.com/images/I/71AZi0FMQlL._AC_SL1500_.jpg"
        },
        {
          name: "Standing Desk",
          description: "Flexispot EC3/EC4",
          link: "https://www.flexispot.com/electric-height-adjustable-standing-desk-dual-motor-economical-option-ec3-ec4",
          image: "https://image.springbeetle.com/cdn-cgi/image/dpr=1,format=webp,fit=pad/https://s3.springbeetle.com/prod-us2-bucket/trantor/attachments/US/E5-A-main-picture-20240618 (1).jpg"
        },
        {
          name: "Steelcase Leap V2",
          description: "Ergonomic Office Chair",
          link: "https://amzn.to/4f9kTCt",
          image: "https://m.media-amazon.com/images/I/61i+9jRM60L._AC_SL1500_.jpg"
        },
      ]
    },
    {
      category: "PC Build",
      items: [
        {
          name: "AMD Ryzen 7 7800X3D",
          description: "8-Core CPU",
          link: "https://amzn.to/3BvamUk",
          image: "https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SL1500_.jpg"
        },
        {
          name: "ASUS DUAL OC RTX 4070",
          description: "Graphics Card",
          link: "https://amzn.to/3VFob9v",
          image: "https://m.media-amazon.com/images/I/81aLFs6DwgL._AC_SX466_.jpg"
        },
        {
          name: "Lian Li A4-H20",
          description: "Mini ITX Case",
          link: "https://amzn.to/3ZyQfNb",
          image: "https://m.media-amazon.com/images/I/71wYP5rp36L._AC_SL1200_.jpg"
        },
        // Add other PC components...
      ]
    },
    {
      category: "Peripherals",
      items: [
        {
          name: "Razer Viper V3 Pro",
          description: "Wireless Gaming Mouse",
          link: "https://amzn.to/4gmNrcJ",
          image: "https://m.media-amazon.com/images/I/619xpFKAXPL._AC_SL1500_.jpg"
        },
        {
          name: "FIFINE Gaming Mic Kit",
          description: "XLR/USB Microphone",
          link: "https://amzn.to/4g4Ko9i",
          image: "https://m.media-amazon.com/images/I/71ghbks6o1L._AC_SL1500_.jpg"
        },
        {
          name: "HUANUO Dual Monitor Arm",
          description: "Monitor Mount",
          link: "https://amzn.to/3CYbDUg",
          image: "https://m.media-amazon.com/images/I/61CcipLafUL._AC_SL1280_.jpg"
        },
        {
          name: "Govee RGB Floor Lamp",
          description: "Smart LED Lighting",
          link: "https://amzn.to/3OUIZq3",
          image: "https://m.media-amazon.com/images/I/615Yog6t9nL._AC_SL1500_.jpg"
        },
      ]
    },
    {
      category: "Filming",
      items: [
        {
          name: "DJI Osmo Pocket 3",
          description: "Vlogging Camera",
          link: "https://amzn.to/41SeTtf",
          image: "https://m.media-amazon.com/images/I/61tukvVUMiL._AC_SL1500_.jpg"
        },
      ]
    }
  ];

  return (
    <div>
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Gear
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          What I use.
        </motion.p>
      </FadeInSection>

      <div className="space-y-8">
        {gearList.map((category, index) => (
          <FadeInSection key={category.category} delay={index * 0.2}>
            <h2 className="text-lg font-medium">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredItem === null || hoveredItem === item.name ? 1 : 0.5,
                    scale: hoveredItem === item.name ? 1.02 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + itemIndex * 0.05
                  }}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  style={{
                    transformOrigin: 'center left'
                  }}
                >
                  <div 
                    className="flex items-center p-3 rounded-xl transition-colors" 
                    style={{ 
                      transition: '0.2s ease-in-out'
                    }}
                  >
                    {/* Image */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        draggable={false}
                        animate={{
                          scale: hoveredItem === item.name ? 1.1 : 1
                        }}
                        transition={{
                          duration: 0.3
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow px-3 sm:px-4">
                      <h3 className="font-medium mb-1 text-sm sm:text-base">{item.name}</h3>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Link Icon */}
                    <motion.div 
                      className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                      animate={{
                        x: hoveredItem === item.name ? 2 : 0
                      }}
                      transition={{
                        duration: 0.2
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Gear; 