import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Play } from 'lucide-react';

const MainContent = () => {
  return (
    <main className="flex-1 min-h-screen pl-[300px] pr-8 pt-20">
      <div className="group max-w-[800px] ml-auto">
        <div className="content-frame rounded-lg shadow-[0_0_30px_rgba(0,0,255,0.15)] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(0,0,255,0.3)]">
          <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0">
              <VideoPlayer src="/dan-dan.mp4" />
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] text-gray-400 font-mono z-10">
              REIN
            </div>
          </div>
        </div>
        
        <div className="mt-2 flex items-center space-x-2">
          <Play size={12} className="text-gray-500" />
          <h2 className="text-[10px] font-mono text-gray-400">PRODUCTION TOBI LOGO MOVIE</h2>
        </div>
        <div className="mt-1 h-[1px] bg-gray-800 w-full" />
      </div>
    </main>
  );
};

export default MainContent;