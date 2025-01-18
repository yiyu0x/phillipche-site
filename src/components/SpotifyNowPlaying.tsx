import { useSpotify } from '../hooks/useSpotify';

const SpotifyNowPlaying = () => {
  const { currentTrack } = useSpotify();

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md dark:bg-[#111828]">
      <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-lg">
      {currentTrack ? (
          <img
            src={currentTrack.albumImageUrl}
            alt={currentTrack.album}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 dark:bg-gray-900 animate-pulse rounded-xl" />
        )}
      </div>
      
      <div className="min-w-0 flex-1">
      <h3 className="text-lg font-semibold truncate text-[#111828] dark:text-white">
      {currentTrack?.name || 'Not Playing'}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {currentTrack?.artist || 'Spotify'}
        </p>
      </div>

      <div className="flex-shrink-0 w-5 h-5 flex items-end space-x-1">
        <div className="w-1 h-4 bg-[#1DB954] animate-wave" />
        <div className="w-1 h-6 bg-[#1DB954] animate-wave" />
        <div className="w-1 h-5 bg-[#1DB954] animate-wave" />
      </div>
  </div>
  );
};

export default SpotifyNowPlaying; 