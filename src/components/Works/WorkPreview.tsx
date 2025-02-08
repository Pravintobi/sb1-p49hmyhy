import React from 'react';
import { MatLayer } from '../common/MatLayer';
import type { Work } from './types';

interface WorkPreviewProps {
  work: Work | null;
  totalWorks: number;
}

export const WorkPreview: React.FC<WorkPreviewProps> = ({ work, totalWorks }) => {
  if (!work) return null;

  return (
    <div className="flex-1 relative p-8 animate-fade-in">
      <MatLayer className="rounded-lg" />
      
      <div className="flex justify-between items-baseline mb-8">
        <h1 className="text-xl font-mono">WORKS</h1>
        <p className="text-[10px] font-mono text-gray-400">{totalWorks} ITEMS</p>
      </div>
      
      <div className="relative">
        <div 
          className="relative aspect-video rounded-lg overflow-hidden bg-black/90"
          style={{
            transform: 'perspective(1000px) rotateY(-5deg)',
            transformOrigin: 'left center'
          }}
        >
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        </div>

        <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
          <h2 
            className="text-7xl font-black tracking-tighter leading-none text-white"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            {work.title.split(' - ')[0]}
          </h2>
          <h3 
            className="text-5xl font-black tracking-tighter mt-2 text-white"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.25), 0 0 40px rgba(255,255,255,0.15), 2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            {work.title.split(' - ')[1]}
          </h3>
        </div>

        <div className="absolute top-2 left-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};