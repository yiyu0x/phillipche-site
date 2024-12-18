import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // The useSpotifyAuth hook will handle the token
    // Just redirect to home
    navigate('/');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Authenticating with Spotify...</p>
    </div>
  );
};

export default SpotifyCallback; 