import React from 'react';
import { Link } from './Link';
import { MatLayer } from './common/MatLayer';

const Sidebar = () => {
  return (
    <nav className="fixed left-8 top-[40%] space-y-12 text-base font-mono">
      <div className="relative p-4 -m-4">
        <MatLayer className="rounded-lg" />
        <div className="space-y-12">
          <Link href="/">TOP</Link>
          <Link href="/works">WORKS</Link>
          <Link href="/archive">ARCHIVE</Link>
          <Link href="/info">INFO</Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;