'use client';
import useObserver from '@hooks/useObserver';
import { useEffect } from 'react';

export default function AnimatedVisibleObserver({
  children,
  threshold = 0,
  animationClass,
  animationDelay = 0,
}) {
  const [refElement, isVisible] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: threshold,
  });

  useEffect(() => {
    const refContainer = refElement.current;

    if (refContainer.classList.contains(animationClass)) {
      return;
    }

    if (isVisible) {
      refContainer.classList.add(animationClass);
      refContainer.style.animationDelay = animationDelay;
    } else {
      refContainer.classList.add('opacity-0');
    }
  }, [isVisible, animationClass, animationDelay, refElement]);

  return <div ref={refElement}>{children}</div>;
}
