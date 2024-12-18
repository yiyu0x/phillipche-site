import { motion } from 'framer-motion';
import { GearItem } from '../types';

const gearItems: GearItem[] = [
  {
    name: 'Standing Desk',
    category: 'Desk Setup',
    link: 'https://www.flexispot.com/electric-height-adjustable-standing-desk-dual-motor-economical-option-ec3-ec4',
    image: '/images/gear/standing-desk.jpg'
  },
  {
    name: 'Steelcase Leap V2 Office Chair',
    category: 'Desk Setup',
    link: 'https://amzn.to/4f9kTCt',
    image: '/images/gear/chair.jpg'
  },
  {
    name: 'AMD Ryzen 7 7800X3D CPU',
    category: 'PC Build',
    link: 'https://amzn.to/3BvamUk',
    image: '/images/gear/cpu.jpg'
  },
  {
    name: 'Asus DUAL OC 4070 GPU',
    category: 'PC Build',
    link: 'https://amzn.to/3VFob9v',
    image: '/images/gear/gpu.jpg'
  },
  {
    name: 'Lian Li A4-H20 Mini ITX Case',
    category: 'PC Build',
    link: 'https://amzn.to/3ZyQfNb',
    image: '/images/gear/case.jpg'
  },
  {
    name: '2023 MacBook Pro 16-Inch Space Black',
    category: 'Computers',
    link: 'https://amzn.to/3BxFN0n',
    image: '/images/gear/macbook.jpg'
  },
  {
    name: 'GIGABYTE M27QX',
    category: 'Monitors',
    link: 'https://amzn.to/3OGJS5r',
    image: '/images/gear/monitor1.jpg'
  },
  {
    name: 'LG 24GN600-B UltraGear Gaming Monitor 24"',
    category: 'Monitors',
    link: 'https://amzn.to/3VmTKon',
    image: '/images/gear/monitor2.jpg'
  },
  {
    name: 'HUANUO Dual Monitor Arm',
    category: 'Desk Setup',
    link: 'https://amzn.to/3CYbDUg',
    image: '/images/gear/monitor-arm.jpg'
  },
  {
    name: 'GUNMJO Pro Custom Coiled USB C Cable',
    category: 'Accessories',
    link: 'https://amzn.to/4inxrJi',
    image: '/images/gear/cable.jpg'
  },
  {
    name: 'Razer Viper V3 Pro Wireless Mouse',
    category: 'Peripherals',
    link: 'https://amzn.to/4gmNrcJ',
    image: '/images/gear/mouse.jpg'
  },
  {
    name: 'Razer Gigantus v2 Cloth Gaming Mouse Pad (XXL)',
    category: 'Peripherals',
    link: 'https://amzn.to/3ZI8Mbc',
    image: '/images/gear/mousepad.jpg'
  },
  {
    name: 'FIFINE Gaming XLR/USB Microphone Kit',
    category: 'Audio',
    link: 'https://amzn.to/4g4Ko9i',
    image: '/images/gear/mic.jpg'
  },
  {
    name: 'Apple EarPods',
    category: 'Audio',
    link: 'https://amzn.to/4gq1rma',
    image: '/images/gear/earpods.jpg'
  },
  {
    name: 'IKEA Skadis Pegboard',
    category: 'Desk Setup',
    link: 'https://amzn.to/3VEkmS6',
    image: '/images/gear/pegboard.jpg'
  },
  {
    name: 'Under Desk Cable Management Tray',
    category: 'Cable Management',
    link: 'https://amzn.to/4fX16r4',
    image: '/images/gear/cable-tray.jpg'
  },
  {
    name: 'Cord Protector Wire Loom Tubing',
    category: 'Cable Management',
    link: 'https://amzn.to/49rZpQ3',
    image: '/images/gear/cable-sleeve.jpg'
  },
  {
    name: 'Govee RGB Floor Lamp',
    category: 'Lighting',
    link: 'https://amzn.to/3OUIZq3',
    image: '/images/gear/lamp.jpg'
  }
];

const Gear = () => {
  const categories = Array.from(new Set(gearItems.map(item => item.category)));

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 dark:text-gray-100"
      >
        Gear
      </motion.h1>

      {categories.map((category, index) => (
        <motion.section
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearItems
              .filter(item => item.category === category)
              .map(item => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Gear; 