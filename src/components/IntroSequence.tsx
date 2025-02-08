import React, { useState, useEffect } from 'react';

export const IntroSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 2500); // Total animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        <div className="text-glitch-intro">
          <span className="block text-6xl font-black tracking-tighter animate-glitch-1">PRODUCTION</span>
          <span className="block text-6xl font-black tracking-tighter mt-2 animate-glitch-2">TOBI</span>
        </div>
      </div>
    </div>
  );
};