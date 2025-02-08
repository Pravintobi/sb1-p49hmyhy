import React from 'react';
import { BackgroundText } from '../components/BackgroundText';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import { ArchiveGrid } from '../components/Archive/ArchiveGrid';

const Archive: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black text-white">
      <BackgroundText />
      
      <div className="fixed top-8 left-8 z-20">
        <Logo />
      </div>
      
      <div className="fixed inset-0 flex">
        <Sidebar />
        <ArchiveGrid />
      </div>
    </div>
  );
};

export default Archive;