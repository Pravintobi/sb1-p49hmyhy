import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section>
      <h2 className="text-sm font-mono text-gray-400 mb-4">CONTACT</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail size={16} className="text-gray-400" />
          <a href="mailto:info@production-tobi.com" className="text-lg hover:text-red-500 transition-colors">
            info@production-tobi.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Phone size={16} className="text-gray-400" />
          <span className="text-lg">+81 (0)3-1234-5678</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin size={16} className="text-gray-400" />
          <span className="text-lg">Shibuya, Tokyo, Japan</span>
        </div>
      </div>
    </section>
  );
};