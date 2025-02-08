import React from 'react';
import type { ArchiveItem as ArchiveItemType } from './types';

export const ArchiveItem: React.FC<ArchiveItemType> = ({ title, date, image }) => {
  return (
    <div className="group">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 
            filter grayscale group-hover:grayscale-0 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
          opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] font-mono text-gray-400">{date}</p>
          <h3 className="text-sm font-mono mt-1 group-hover:text-red-500 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};