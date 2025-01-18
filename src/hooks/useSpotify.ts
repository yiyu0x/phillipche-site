import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpotifyAuth } from './useSpotifyAuth';

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  spotifyUrl: string;
}

declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export function useSpotify() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [recentTracks, setRecentTracks] = useState<Track[]>([]);
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
            id: track.id,
            name: track.name,
            artist: track.artists.map((artist: { name: string }) => artist.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images[0].url,
            spotifyUrl: track.external_urls.spotify,
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

  // Add logic to fetch recent tracks
  useEffect(() => {
    if (!token) return;

    const fetchRecentTracks = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data && response.data.items) {
          const tracks = response.data.items.map((item: any) => ({
            id: item.track.id,
            name: item.track.name,
            artist: item.track.artists.map((artist: { name: string }) => artist.name).join(', '),
            album: item.track.album.name,
            albumImageUrl: item.track.album.images[0].url,
            spotifyUrl: item.track.external_urls.spotify,
          }));
          setRecentTracks(tracks);
        }
      } catch (error) {
        console.error('Error fetching recent tracks:', error);
      }
    };

    fetchRecentTracks();
    // Fetch recent tracks every minute
    const interval = setInterval(fetchRecentTracks, 60000);

    return () => clearInterval(interval);
  }, [token]);

  return {
    currentTrack,
    recentTracks,
  };
} 