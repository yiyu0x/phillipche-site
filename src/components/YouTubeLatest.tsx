import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

const YouTubeLatest = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0); // State to hold the width of each video item
  const videoRef = useRef<HTMLAnchorElement>(null); // Ref for the video item

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const VIDEOS_VISIBLE = 4;

  // Update currentIndex when videos are loaded
  useEffect(() => {
    if (videos.length > 0) {
      setCurrentIndex(0); // Start from the first video
    }

    if (videoRef.current) {
      const width = videoRef.current.getBoundingClientRect().width;
      setItemWidth(width + 10); // Set the width in state
    }
  }, [videos]);

  useEffect(() => {
    const fetchVideos = async () => {
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
      }
    };

    fetchVideos();
  }, [YOUTUBE_API_KEY, CHANNEL_ID]);

  if (!videos.length) return null;

  const [latestVideo, ...previousVideos] = videos;

  const nextVideo = () => {
    if (currentIndex < previousVideos.length - VIDEOS_VISIBLE) {
      setCurrentIndex(Math.min(currentIndex + 1, previousVideos.length - 1)); // Move to the next video
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(currentIndex - 1, 0)); // Move to the previous video
    }
  };

  // Calculate the transform offset
  const getTransformX = () => {
    return -currentIndex * itemWidth; // Move by the width of one item
  };

  return (
    <div className="space-y-6">
      {/* Latest Video */}
      <div>
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
      <div className="relative">
        <div className="overflow-hidden px-0 relative">
          {/* Left fade gradient - only show if not at the first video */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 transition-opacity duration-300 ${currentIndex > 0 ? 'opacity-100' : 'opacity-0'}`}
          ></div>
          {/* Right fade gradient - only show if not at the last video */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 transition-opacity duration-300 ${currentIndex < previousVideos.length - VIDEOS_VISIBLE ? 'opacity-100' : 'opacity-0'}`}
          ></div>
          
          <motion.div 
            className="flex gap-3"
            animate={{ 
              x: getTransformX()
            }}
            transition={{ 
              duration: 0.2, 
              ease: "easeInOut"
            }}
          >
            {previousVideos.map((video, index) => (
              <a
                ref={index === 0 ? videoRef : null} // Attach the ref to the first video item
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[calc(25%-12px)] aspect-video rounded-lg overflow-hidden transition-all duration-300 relative"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xs font-medium px-2 text-center">
                    {video.title}
                  </h3>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        {previousVideos.length > VIDEOS_VISIBLE && (
          <>
            {currentIndex > 0 && ( // Show left arrow only if not at the first video
              <button
                onClick={prevVideo}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-20"
                aria-label="Previous video"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {currentIndex < previousVideos.length - VIDEOS_VISIBLE && ( // Show right arrow only if not at the last video
              <button
                onClick={nextVideo}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-20"
                aria-label="Next video"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </>
        )}
      </div>
    </div>
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