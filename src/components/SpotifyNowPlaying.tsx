import { useSpotify } from '../hooks/useSpotify';
import { useSpotifyAuth } from '../hooks/useSpotifyAuth';

const SpotifyNowPlaying = () => {
  const { currentTrack } = useSpotify();
  const { token, login, logout } = useSpotifyAuth();

  if (!token) {
    return (
      <div className="flex items-center justify-between p-4">
        <p className="text-sm text-gray-500">Not connected to Spotify</p>
        <button
          onClick={login}
          className="text-sm text-[#1DB954] hover:text-[#1ed760] transition-colors"
        >
          Connect
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden">
        {currentTrack ? (
          <img
            src={currentTrack.albumImageUrl}
            alt={currentTrack.album}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 dark:bg-gray-900 animate-pulse" />
        )}
      </div>
      
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium truncate">
          {currentTrack?.name || 'Not Playing'}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {currentTrack?.artist || 'Spotify'}
        </p>
      </div>

      <button
        onClick={logout}
        className="flex-shrink-0 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
        aria-label="Disconnect Spotify"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </div>
  );
};

export default SpotifyNowPlaying; 