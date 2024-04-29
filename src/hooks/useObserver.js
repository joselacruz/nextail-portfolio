import React, { useEffect, useRef, useState } from 'react';

export default function useObserver(options) {
  const ElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  function callBack(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    console.log(entry);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    if (ElementRef.current) observer.observe(ElementRef.current);
    return () => {
      if (ElementRef.current) observer.unobserve(ElementRef.current);
    };
  }, [ElementRef, options]);

  return [ElementRef, isVisible];
}
