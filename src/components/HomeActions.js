'use client';
import Button from '@common/Button';
import AnimatedVisibleObserver from './AnimatedVisibleObserver';
import { scrollToSection } from '@utils/scrollToSection';

export default function HomeActions() {
  return (
    <AnimatedVisibleObserver
      animationClass={'animateBackInUp'}
      animationDelay={'800ms'}
    >
      <Button
        title={'Contact Me'}
        customClasses={'bg-primary text-ternary mr-4'}
        handleClick={() => {
          scrollToSection('contact');
        }}
      />
      <Button
        title={'Learn More'}
        customClasses={'bg-secondary text-ternary '}
        handleClick={() => {
          scrollToSection('about');
        }}
      />
    </AnimatedVisibleObserver>
  );
}
