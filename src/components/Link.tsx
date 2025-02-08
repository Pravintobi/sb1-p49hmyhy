import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <RouterLink 
      to={href}
      className={`block transition-colors duration-200 relative group ${
        isActive ? 'text-red-500' : 'text-gray-500 hover:text-white'
      }`}
    >
      <span className="relative z-10 text-lg tracking-wider">{children}</span>
      {!isActive && (
        <span className="absolute left-0 w-0 h-[1px] bg-white bottom-0 group-hover:w-full transition-all duration-200" />
      )}
    </RouterLink>
  );
};