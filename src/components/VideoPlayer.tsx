import React, { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      playVideo();
    };

    const playVideo = async () => {
      try {
        if (video) {
          await video.play();
        }
      } catch (error) {
        console.warn('Video autoplay failed:', error);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.pause();
        video.src = '';
        video.load();
      }
    };
  }, [src]);

  return (
    <div className="relative w-full h-full bg-black/50 rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-lg" />
    </div>
  );
};

export default VideoPlayer;