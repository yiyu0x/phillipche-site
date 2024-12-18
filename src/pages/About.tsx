import { motion } from 'framer-motion';
import YouTubeLatest from '../components/YouTubeLatest';

const About = () => {
  const sections = [
    {
      title: "Professional Life",
      content: (
        <p className="leading-relaxed">
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
        <div className="space-y-4">
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

  return (
    <div className="space-y-16">
      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <div className="card p-6">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Latest Content</h2>
        <YouTubeLatest />
      </motion.section>
    </div>
  );
};

export default About; 