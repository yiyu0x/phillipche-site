import { useSpotify } from '../hooks/useSpotify';
import { Spotify } from 'react-spotify-embed';
import FadeIn from './FadeIn';

const SpotifyPlaying = () => {
  const { currentTrack, recentTracks } = useSpotify();

  return (
    <div className="space-y-4">
      <FadeIn>
        <h2 className="text-xl font-semibold text-[#111828] dark:text-white mb-4">
          {currentTrack ? 'Now Playing' : 'Recently Played'}
        </h2>
      </FadeIn>
      <div className="flex flex-col md:flex-row">
        {/* Current Track or Most Recent Track */}
        <div className="md:w-1/2">
          <FadeIn>
          {currentTrack ? (
              <Spotify 
                link={currentTrack.spotifyUrl} 
              />
          ) : (
            recentTracks?.[0] && (
                <Spotify 
                  link={recentTracks[0].spotifyUrl} 
                />
            )
          )}
          </FadeIn>
        </div>

        {/* Recent Tracks */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          {recentTracks
            ?.slice(currentTrack ? 0 : 1, currentTrack ? 4 : 5)
            .map((track, index) => (
              <FadeIn key={track.id} delay={1 + index * 0.2}>
                <Spotify 
                  wide
                  link={track.spotifyUrl}
                />
              </FadeIn>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlaying; 