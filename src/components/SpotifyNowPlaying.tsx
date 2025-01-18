import { useSpotify } from '../hooks/useSpotify';
import { Spotify } from 'react-spotify-embed';

const SpotifyNowPlaying = () => {
  const { currentTrack, recentTracks } = useSpotify();

  if (!currentTrack && !recentTracks?.length) {
    return null;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-[#111828] dark:text-white mb-4">
        {currentTrack ? 'Now Playing' : 'Recently Played'}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        {/* Current Track or Most Recent Track */}
        <div className="md:w-1/2">
          {currentTrack ? (
            <Spotify 
              
              link={currentTrack.spotifyUrl} 
            />
          ) : (
            recentTracks?.[0] && (
              <Spotify 
                wide
                link={recentTracks[0].spotifyUrl} 
              />
            )
          )}
        </div>

        {/* Recent Tracks */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          {recentTracks
            ?.slice(currentTrack ? 0 : 1, currentTrack ? 4 : 5)
            .map((track) => (
              <Spotify 
                key={track.id}
                wide
                link={track.spotifyUrl}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying; 