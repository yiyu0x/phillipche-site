import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SpotifyPlaying from '../components/SpotifyPlaying';
import YouTubeLatest from '../components/YouTubeLatest';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="space-y-4">
        <motion.div
          className="text-2xl sm:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'hello, Phillip here',
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
          your average boba enjoyer from socal trying to document the struggles of becoming a software engineer.
        </motion.p>
      </section>

      {/* Latest Content Section */}
      <motion.section
        className="space-y-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="py-4">
          <YouTubeLatest />
        </div>
      </motion.section>

      {/* Spotify Section */}
      <motion.section
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <div>
          <SpotifyPlaying />
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 