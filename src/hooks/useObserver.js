import React, { useEffect, useRef, useState } from 'react';

export default function useObserver(options) {
  const ElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  function callBack(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const elementToObserve = ElementRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (elementToObserve) observer.observe(elementToObserve);
    return () => {
      if (elementToObserve) observer.unobserve(elementToObserve);
    };
  }, [ElementRef, options]);

  return [ElementRef, isVisible];
}
