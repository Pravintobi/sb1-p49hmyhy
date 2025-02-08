import React from 'react';
import { MatLayer } from './common/MatLayer';

const Logo = () => {
  return (
    <div className="relative p-4">
      <MatLayer className="rounded-lg" />
      <div className="space-y-1">
        <div className="text-3xl font-bold glitch-text tracking-wider">PRODUCTION</div>
        <div className="text-3xl font-bold glitch-text tracking-wider">TOBI</div>
        <div className="mt-6 text-xs text-gray-500 font-mono leading-tight">
          <p>REPRODUCTION, REDISTRIBUTION</p>
          <p>OR MODIFICATION OF THE</p>
          <p>CONTENT OF THIS SITE</p>
          <p>IS PROHIBITED</p>
          <p className="mt-2">© PRODUCTION TOBI</p>
        </div>
      </div>
    </div>
  );
};
export default Logo