import React from 'react';

export const BackgroundText: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>
      <div className="marquee-wrapper">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="marquee-row" style={{ top: `${rowIndex * 33}vh` }}>
            <div className="marquee-track">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="marquee-text">
                  PRODUCTION TOBI
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};