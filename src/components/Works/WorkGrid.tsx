import React, { useState } from 'react';
import { WorksList } from './WorksList';
import { WorkPreview } from './WorkPreview';
import { works } from './data';
import type { Work } from './types';

export const WorkGrid: React.FC = () => {
  const [hoveredWork, setHoveredWork] = useState<Work | null>(null);

  return (
    <main className="flex-1 h-screen pl-[300px] pr-8 pt-8 overflow-hidden">
      <div className="flex gap-4 h-full">
        <WorksList 
          works={works}
          onHover={setHoveredWork}
          onLeave={() => setHoveredWork(null)}
        />
        <WorkPreview 
          work={hoveredWork} 
          totalWorks={works.length}
        />
      </div>
    </main>
  );
};