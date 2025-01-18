import { motion } from 'framer-motion';
import SpotifyPlaying from '../components/SpotifyNowPlaying';
import YouTubeLatest from '../components/YouTubeLatest';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="space-y-6">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hey, I'm Phillip 👋
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Software Engineer at Amazon, based in Seattle. I create content about tech, productivity, and my journey as a software engineer.
        </motion.p>
      </section>

      {/* Latest Content Section */}
      <motion.section 
        className="space-y-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="card p-0 py-4">
          <YouTubeLatest />
        </div>
      </motion.section>

      {/* Spotify Section */}
      <motion.section
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="card">
          <SpotifyPlaying />
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 