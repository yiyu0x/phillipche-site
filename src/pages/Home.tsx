import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import SpotifyPlaying from '../components/SpotifyPlaying';
// import YouTubeLatest from '../components/YouTubeLatest';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';

const Home = () => {
  usePageTitle('');  // Empty string for home page

  return (
    <div className="flex items-center justify-center min-h-screen">
      <FadeInSection>
        <section className="space-y-4 text-left">
          <motion.div
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                '👋 hello, Kyle here',
              ]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={50}
              style={{ display: 'inline-block' }}
            />
          </motion.div>
          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            🧋 I’m a software engineer from Taiwan, currently looking for new opportunities in North America. I love traveling, trying out good food, and meeting new people. 
          </motion.p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <motion.section className="space-y-1">
          <div className="py-4">
            {/* <YouTubeLatest /> */}
          </div>
        </motion.section>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <motion.section className="mt-4">
          <div>
            {/* <SpotifyPlaying /> */}
          </div>
        </motion.section>
      </FadeInSection>
    </div>
  );
};

export default Home;