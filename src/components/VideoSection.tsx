import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Play } from 'lucide-react';
import { MatLayer } from './common/MatLayer';

const VideoSection: React.FC = () => {
  return (
    <main className="flex-1 h-screen pl-[300px] pr-8 pt-20 overflow-hidden">
      <div className="group max-w-[740px] ml-auto relative">
        <MatLayer className="rounded-lg -m-4 p-4" />
        <div className="content-frame">
          <div className="relative overflow-hidden">
            <VideoPlayer src="/dan-dan.mp4" />
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

export default VideoSection;