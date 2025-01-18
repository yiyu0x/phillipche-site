import { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCarousel from './VideoCarousel';
import FadeIn from './FadeIn';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

const   YouTubeLatest = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&id=${CHANNEL_ID}&part=contentDetails`
        );
        
        if (!channelResponse.data.items?.length) {
          throw new Error('No channel found with this ID');
        }

        const uploadsPlaylistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

        const videoResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${uploadsPlaylistId}&part=snippet&maxResults=50`
        );

        if (!videoResponse.data.items?.length) {
          throw new Error('No videos found in uploads playlist');
        }

        const longFormVideos = [];
        for (const item of videoResponse.data.items) {
          const videoId = item.snippet.resourceId.videoId;
          const videoDetailsResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoId}&part=contentDetails`
          );

          if (!videoDetailsResponse.data.items?.length) continue;

          const duration = videoDetailsResponse.data.items[0].contentDetails.duration;
          const durationInSeconds = parseDuration(duration);

          if (durationInSeconds > 60) {
            longFormVideos.push({
              id: videoId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high.url,
              publishedAt: item.snippet.publishedAt,
            });
          }
        }

        setVideos(longFormVideos);
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [YOUTUBE_API_KEY, CHANNEL_ID]);

  // Show loading skeleton until we have videos
  if (loading || !videos.length) {
    return (
      <div className="space-y-6">
        <div>
          <div className="aspect-video rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
          </div>
        </div>
        
        {/* Previous Videos Loading State */}
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div 
              key={index}
              className="aspect-video rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  const [latestVideo, ...previousVideos] = videos;

  return (
    <FadeIn>
      <div className="space-y-6">
        {/* Latest Video */}
        <div>
          <h2 className="text-lg font-semibold pb-2">Latest Video</h2>
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${latestVideo.id}`}
              title={latestVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Previous Videos Carousel */}
        <VideoCarousel videos={previousVideos} visibleCount={4} />
      </div>
    </FadeIn>
  );
};

const parseDuration = (duration: string): number => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return 0;
  
  const hours = (match[1] ? parseInt(match[1].slice(0, -1)) : 0);
  const minutes = (match[2] ? parseInt(match[2].slice(0, -1)) : 0);
  const seconds = (match[3] ? parseInt(match[3].slice(0, -1)) : 0);
  
  return hours * 3600 + minutes * 60 + seconds;
};

export default YouTubeLatest; 