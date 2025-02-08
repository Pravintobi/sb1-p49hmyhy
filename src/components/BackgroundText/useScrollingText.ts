import { useEffect, useRef } from 'react';

export const useScrollingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoSection = document.querySelector('.content-frame');
    if (!videoSection || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const texts = containerRef.current?.querySelectorAll('.marquee-text');
          texts?.forEach(text => {
            const rect = text.getBoundingClientRect();
            const videoRect = videoSection.getBoundingClientRect();
            
            // Check if text element intersects with video section
            const intersects = !(
              rect.right < videoRect.left || 
              rect.left > videoRect.right
            );
            
            text.classList.toggle('text-intersecting', intersects);
          });
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(videoSection);
    return () => observer.disconnect();
  }, []);

  return { containerRef };
};