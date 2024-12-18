import { useState, useEffect } from 'react';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = 'http://localhost:5173/callback'; // Update this for production
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SCOPES = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const useSpotifyAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for token in URL on callback
    const hash = window.location.hash;
    if (hash) {
      const token = hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'))
        ?.split('=')[1];

      if (token) {
        setToken(token);
        localStorage.setItem('spotify_token', token);
        // Clean URL
        window.location.hash = '';
      }
    }

    // Check for saved token
    const savedToken = localStorage.getItem('spotify_token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('spotify_token');
  };

  return { token, login, logout };
}; 