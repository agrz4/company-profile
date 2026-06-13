import { useState, useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.1, delay = 0) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    // Respect user preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsRevealed(true), delay);
          } else {
            setIsRevealed(true);
          }
          // Once revealed, no need to observe anymore
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return { ref, isRevealed };
}
