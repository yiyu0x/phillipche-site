import { motion } from 'framer-motion';
import SpotifyNowPlaying from '../components/SpotifyNowPlaying';
import YouTubeLatest from '../components/YouTubeLatest';

const Home = () => {
  return (
    <div className="space-y-16">
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
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold">Latest Video</h2>
        <div className="card p-4">
          <YouTubeLatest />
        </div>
      </motion.section>

      {/* Now Playing Section */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Now Playing</h2>
        <div className="card p-4">
          <SpotifyNowPlaying />
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 