import React from 'react';

const GlitchText = ({ children, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] text-red-500 opacity-70 z-0">
        {children}
      </span>
      <span className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-cyan-500 opacity-70 z-0">
        {children}
      </span>
    </div>
  );
};

export default GlitchText;