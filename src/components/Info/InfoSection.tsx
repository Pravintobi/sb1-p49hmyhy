import React from 'react';

interface InfoSectionProps {
  title: string;
  content: string | string[];
}

export const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => {
  return (
    <section>
      <h2 className="text-sm font-mono text-gray-400 mb-4">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-lg leading-relaxed">{content}</p>
      )}
    </section>
  );
};