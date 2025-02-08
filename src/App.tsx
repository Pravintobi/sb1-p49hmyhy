import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntroSequence } from './components/IntroSequence';
import Home from './pages/Home';
import Works from './pages/Works';
import Archive from './pages/Archive';
import Info from './pages/Info';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </>
  );
};

export default App