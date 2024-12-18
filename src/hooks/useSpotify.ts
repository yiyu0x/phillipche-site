import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpotifyAuth } from './useSpotifyAuth';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
}

declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export const useSpotify = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const { token } = useSpotifyAuth();

  useEffect(() => {
    if (!token) return;

    const fetchCurrentTrack = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 204) {
          setCurrentTrack(null);
          return;
        }

        const track = response.data.item;
        if (track) {
          setCurrentTrack({
            name: track.name,
            artist: track.artists.map((artist: { name: string }) => artist.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images[0].url,
          });
        }
      } catch (error) {
        console.error('Error fetching current track:', error);
        setCurrentTrack(null);
      }
    };

    // Initial fetch
    fetchCurrentTrack();

    // Poll for updates
    const interval = setInterval(fetchCurrentTrack, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  return { currentTrack };
}; 