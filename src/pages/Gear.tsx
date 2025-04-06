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
      category: "Hardware",
      items: [
        {
          name: "MacBook Pro 14\" M4",
          description: "I’ve been using Macbook for more than a decade now",
          link: "",
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295"
        },
        {
          name: "Bose QC Ultra",
          description: "Solid noise-canceling helps me lock in and focus way quicker",
          link: "",
          image: "https://assets.bosecreative.com/transform/13204ad8-30eb-4305-aa84-f6c74e3f2228/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_1?quality=90&io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit"
        },
        {
          name: "NuPhy Halo75 V2",
          description: "A mechanical keyboard that plays really nice with macOS",
          link: "",
          image: "https://nuphy.com/cdn/shop/products/1f3323eb614d2f555af2d3389095e80d_1800x1800.jpg?v=1683601170"
        },
      ]
    },
    {
      category: "Software",
      items: [
        {
          name: "VSCode",
          description: "Must-haves for any engineer",
          link: "",
          image: "https://code.visualstudio.com/assets/images/code-stable.png"
        },
        {
          name: "Telegram",
          description: "My go-to messaging app",
          link: "",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
        },
        {
          name: "Heptabase",
          description: "A super low-distraction learning platform that helps me really distill my thoughts",
          link: "",
          image: "https://media.licdn.com/dms/image/v2/C560BAQEacTF-68gvvw/company-logo_200_200/company-logo_200_200/0/1637128292902/projectmeta_logo?e=2147483647&v=beta&t=NZJFriQcyIdH-kdmLjGWdfV2AGNVo0obCWDV-GoP8c0"
        },
        // Add other PC components...
      ]
    }
  ];

  const filteredGearList = gearList.filter(
    (category) => category.category !== 'Filming' && category.category !== 'Peripherals'
  );

  return (
    <div>
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Gear
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          🔧 You can’t do a good job without the right tools
        </motion.p>
      </FadeInSection>

      <div className="space-y-8">
        {filteredGearList.map((category, index) => (
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