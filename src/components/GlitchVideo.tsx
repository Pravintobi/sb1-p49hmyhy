import React, { useEffect, useRef } from 'react';

interface GlitchVideoProps {
  src: string;
}

const GlitchVideo: React.FC<GlitchVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const drawFrame = () => {
      if (!video || !ctx) return;
      
      // Draw the video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Apply glitch effects
      if (Math.random() < 0.05) { // Occasional glitch
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 100;
        const height = Math.random() * 50;
        
        // Get image data
        const imageData = ctx.getImageData(x, y, width, height);
        const data = imageData.data;
        
        // Modify pixels
        for (let i = 0; i < data.length; i += 4) {
          data[i] = data[i] + 50;     // Red
          data[i + 1] = data[i + 1];  // Green
          data[i + 2] = data[i + 2] + 100; // Blue
        }
        
        // Draw modified image data
        ctx.putImageData(imageData, x + Math.random() * 10 - 5, y);
      }
      
      requestAnimationFrame(drawFrame);
    };

    video.addEventListener('play', () => {
      drawFrame();
    });

    return () => {
      video.removeEventListener('play', drawFrame);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="hidden"
        src={src}
        autoPlay
        loop
        muted
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GlitchVideo;