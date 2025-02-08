import React from 'react';
import type { WorkItemProps } from './types';

export const WorkItem: React.FC<WorkItemProps> = ({ id, title, image }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[16/9] h-[120px] overflow-hidden bg-gray-900 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 
            filter grayscale group-hover:grayscale-0 group-hover:scale-110"
        />
        
        {/* Overlay with glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
          opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 4px)'
          }}
        />
        
        {/* Status indicator */}
        <div className="absolute bottom-2 left-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </div>
      </div>
      
      <div className="mt-2">
        <div className="text-[10px] font-mono text-gray-400">#{id}</div>
        <h3 className="text-sm font-mono mt-1 group-hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};