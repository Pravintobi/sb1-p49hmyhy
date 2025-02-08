import React from 'react';
import { useScrollingText } from './useScrollingText';

export const ScrollingText = () => {
  const { containerRef } = useScrollingText();

  return (
    <div ref={containerRef} className="absolute top-1/2 -translate-y-1/2 w-full">
      <div className="marquee-track">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="marquee-text">
            PRODUCTION TOBI
          </span>
        ))}
      </div>
    </div>
  );
};