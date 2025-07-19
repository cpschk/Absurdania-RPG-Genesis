
'use client';

import { useState, useEffect, type RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0.1, root = null, rootMargin = '0px', once = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else {
          if (!once) {
            setIsInView(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin, once]);

  return isInView;
}
