import { useState } from 'react';
import { useSpotify } from '../hooks/useSpotify';
import { Spotify } from 'react-spotify-embed';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

type TrackListType = 'recent' | 'top';

const SpotifyPlaying = () => {
  const { currentTrack, recentTracks, topTracks } = useSpotify();
  const [activeList, setActiveList] = useState<TrackListType>('recent');

  return (
    <div>
      <FadeIn>
        <div className="flex flex-col space-y-4 mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-[#111828] dark:text-white">
              {currentTrack ? 'Now Playing' : 'Recently Played'}
            </h2>

            {/* Track List Toggle */}
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveList('recent')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  activeList === 'recent'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Recently Played
              </button>
              <button
                onClick={() => setActiveList('top')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  activeList === 'top'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Top Tracks
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Current Track or Most Recent Track */}
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <FadeIn>
            {currentTrack ? (
              <Spotify link={currentTrack.spotifyUrl} />
            ) : (
              recentTracks?.[0] && <Spotify link={recentTracks[0].spotifyUrl} />
            )}
          </FadeIn>
        </div>

        {/* Recent/Top Tracks List */}
        <div className="md:w-1/2">
          <motion.div
            key={activeList}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-3">
              {(activeList === 'recent' ? recentTracks : topTracks)
                ?.slice(activeList === 'recent' && currentTrack ? 0 : 1, 
                        activeList === 'recent' && currentTrack ? 4 : 5)
                .map((track, index) => (
                  <FadeIn key={index} delay={1 + index * 0.2}>
                    <Spotify wide link={track.spotifyUrl} />
                  </FadeIn>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlaying; 