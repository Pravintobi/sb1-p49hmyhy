import React from 'react';
import { MatLayer } from '../common/MatLayer';
import { InfoSection } from './InfoSection';
import { Contact } from './Contact';

export const InfoContent: React.FC = () => {
  return (
    <main className="flex-1 h-screen pl-[300px] pr-8 pt-8 overflow-hidden">
      <div className="h-full relative p-8">
        <MatLayer className="rounded-lg" />
        
        <div className="max-w-2xl">
          <h1 className="text-xl font-mono mb-12">INFO</h1>
          
          <div className="space-y-16">
            <InfoSection
              title="ABOUT"
              content="Production TOBI is a creative studio specializing in music video production, motion graphics, and visual effects. Founded in 2020, we've been pushing the boundaries of visual storytelling through innovative techniques and artistic vision."
            />
            
            <InfoSection
              title="SERVICES"
              content={[
                'Music Video Production',
                'Motion Graphics Design',
                'Visual Effects',
                'Live Concert Visuals',
                'Brand Identity Videos'
              ]}
            />
            
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
};