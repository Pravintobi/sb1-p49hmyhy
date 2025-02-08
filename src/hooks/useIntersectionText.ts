import { useEffect, useRef } from 'react';

export const useIntersectionText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const textElements = entry.target.querySelectorAll('.marquee-text');
          textElements.forEach(element => {
            if (entry.intersectionRatio > 0) {
              element.classList.add('text-intersecting');
            } else {
              element.classList.remove('text-intersecting');
            }
          });
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        root: null,
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      const videoSection = document.querySelector('.content-frame');
      if (videoSection) {
        observer.observe(videoSection);
      }
    }

    return () => observer.disconnect();
  }, []);

  return { containerRef };
};