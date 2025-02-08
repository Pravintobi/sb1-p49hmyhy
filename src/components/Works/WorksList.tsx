import React, { useRef, useEffect, useState } from 'react';
import { WorkItem } from './WorkItem';
import { MatLayer } from '../common/MatLayer';
import type { Work } from './types';

interface WorksListProps {
  works: Work[];
  onHover: (work: Work) => void;
  onLeave: () => void;
}

export const WorksList: React.FC<WorksListProps> = ({ works, onHover, onLeave }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-[280px] h-full relative p-4 group">
      <MatLayer className="rounded-lg" />
      
      <div 
        ref={scrollRef}
        className="h-full overflow-auto custom-scrollbar pr-4"
        onMouseLeave={onLeave}
      >
        <div className="space-y-8">
          {works.map((work) => (
            <div 
              key={work.id}
              onMouseEnter={() => onHover(work)}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <WorkItem {...work} />
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div 
          className="scroll-progress"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};