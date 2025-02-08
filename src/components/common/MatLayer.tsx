import React from 'react';

interface MatLayerProps {
  className?: string;
}

export const MatLayer: React.FC<MatLayerProps> = ({ className = '' }) => {
  return (
    <div 
      className={`absolute -z-10 inset-0 bg-black ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(45deg, #111 25%, transparent 25%),
          linear-gradient(-45deg, #111 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #111 75%),
          linear-gradient(-45deg, transparent 75%, #111 75%)
        `,
        backgroundSize: '4px 4px',
        backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'
      }}
    />
  );
};