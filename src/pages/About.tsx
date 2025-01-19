import { motion } from 'framer-motion';
import PhotoCard from '../components/PhotoCard';
import { useState, useEffect } from 'react';

const photos = [
  {
    image: "/src/assets/images/1.jpg",
    date: "June 2024",
    location: "Lake Tahoe, CA",
    caption: "i got frostbite from the water",

    style: "sm:top-4 sm:left-[-10%] top-2 left-2 rotate-[-6deg] z-10"
  },
  {
    image: "/src/assets/images/5.jpg",
    date: "December 2024",
    location: "San Diego, CA",
    caption: "balboa park was too big",

    style: "sm:top-12 sm:left-[15%] top-8 right-2 rotate-[4deg] z-20"
  },
  {
    image: "/src/assets/images/10.jpg",
    date: "July 2024",
    location: "COEX Aquarium, South Korea",
    caption: "pregnant korean shark",

    style: "sm:left-[45%] top-8 right-8 rotate-[-3deg] z-30"
  },
  {
    image: "/src/assets/images/3.jpg",
    date: "December 2023",
    location: "Joshua Park, CA",
    caption: "lots of rocks",
    style: "top-[10%] left-[70%] rotate-[5deg] z-40"
  }
];

const sections = [
  {
    title: "Professional Life",
    content: (
      <p className="text-sm leading-relaxed">
        I recently graduated from{' '}
        <span className="font-medium">Cal Poly Pomona</span>{' '}
        with a B.S in Computer Science and am now working as a full-time{' '}
        <span className="font-medium">Software Development Engineer at Amazon</span>{' '}
        in Seattle.
      </p>
    )
  },
  {
    title: "Content Creation",
    content: (
      <p className="leading-relaxed">
        I create content about tech, productivity, and my journey as a software engineer. 
        Through my videos, I share insights about working in tech, coding tutorials, 
        and lifestyle content.
      </p>
    )
  },
  {
    title: "Side Projects",
    content: (
      <div className="space-y-2">
        <p className="leading-relaxed">
          I previously ran{' '}
          <span className="font-medium">Solace Notify</span>, an online sneaker 
          reselling community and business.
        </p>
        <div className="space-y-2">
          <p className="leading-relaxed">Other interests include:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Making YouTube videos</li>
            <li>Investing in stocks and crypto</li>
            <li>Building custom mechanical keyboards</li>
          </ul>
        </div>
      </div>
    )
  }
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const baseZIndex = 10;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is sm breakpoint in Tailwind
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getZIndex = (index: number) => {
    return baseZIndex + index;
  };

  const cardVariants = {
    hidden: {
      x: -300,
      y: 500,
      rotate: 35,
      opacity: 0,
      scale: 0.7
    },
    visible: (index: number) => ({
      x: 0,
      y: 0,
      rotate: index % 2 === 0 ? -6 : 4,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.23, 1.12, 0.42, 1.05],
        opacity: {
          duration: 0.2,
          delay: index * 0.2
        },
        rotate: {
          duration: 1.2,
          delay: index * 0.2,
          ease: [0.23, 1.12, 0.42, 1.05]
        },
        scale: {
          duration: 0.8,
          delay: index * 0.2
        }
      }
    })
  };

  // Only show first 2 photos on mobile
  const displayPhotos = isMobile ? photos.slice(0, 2) : photos;

  return (
    <div>
      <motion.h1 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Who I am.
      </motion.p>

      {/* Photo Gallery */}
      <motion.div
        className="relative h-[20rem] overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className={`absolute ${photo.style}`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ zIndex: getZIndex(index) }}
            drag={!isMobile}
            dragConstraints={{
              top: -50,
              left: -750,
              right: 750,
              bottom: 600
            }}
            dragElastic={0.1}
            whileHover={!isMobile ? { scale: 1.02 } : undefined}
            whileDrag={{ scale: 1.1, zIndex: 50 }}
          >
            <PhotoCard {...photo} isMobile={isMobile} />
          </motion.div>
        ))}
      </motion.div>

      {/* About Sections */}
      <div className="space-y-2">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            className="space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <div className="card p-4 sm:p-3">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default About; 