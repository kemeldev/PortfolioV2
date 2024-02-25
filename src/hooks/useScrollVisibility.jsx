import { useState, useEffect, useRef } from 'react';

// Custom hook to detect if an element is visible in the viewport
export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const handleScroll = () => {
      if (element) {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;
        // const isVisible = top < window.innerHeight && bottom >= 0;
        const isVisible = top < (window.innerHeight - 200) && (bottom - 200) >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call the function once to check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [ref, isVisible];
}