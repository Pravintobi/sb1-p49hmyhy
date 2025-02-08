import React from 'react';
import { MatLayer } from '../common/MatLayer';
import { ArchiveItem } from './ArchiveItem';
import { archiveData } from './data';

export const ArchiveGrid: React.FC = () => {
  return (
    <main className="flex-1 h-screen pl-[300px] pr-8 pt-8 overflow-hidden">
      <div className="h-full relative p-8">
        <MatLayer className="rounded-lg" />
        
        <div className="flex justify-between items-baseline mb-8">
          <h1 className="text-xl font-mono">ARCHIVE</h1>
          <p className="text-[10px] font-mono text-gray-400">{archiveData.length} ITEMS</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 overflow-auto h-[calc(100%-4rem)] custom-scrollbar pr-4">
          {archiveData.map((item) => (
            <ArchiveItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};