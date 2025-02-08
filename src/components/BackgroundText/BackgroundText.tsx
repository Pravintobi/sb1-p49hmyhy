import React from 'react';
import { ScrollingText } from './ScrollingText';

export const BackgroundText: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-[1]">
      <ScrollingText />
    </div>
  );
};