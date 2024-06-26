import AnimatedVisibleObserver from '@components/AnimatedVisibleObserver';
import IconsSocialNetworks from '@components/IconsSocialNetworks';
import React from 'react';

export default function About() {
  return (
    <div className="bg-bg-secondary">
      <section
        className="mx-auto max-w-screen-2xl pt-36 flex flex-wrap justify-center  items-center pb-28 md:justify-between  md:flex-nowrap border-b  border-border-color"
        id="about"
      >
        <AnimatedVisibleObserver
          threshold={0.8}
          animationClass={'animateZoomIn'}
        >
          <div className=" px-4 mb-8 max-w-xl">
            <span className="text-large text-primary font-bold">ABOUT ME</span>
            <h2 className="text-xlg mb-5">
              Minimalist design for an optimal experience
            </h2>
            <p className="text-text-secondary  max-w-xl font-medium ">
              I am passionate about web development with a focus on minimalist
              and functional design. I firmly believe in the importance of
              simplicity in design to ensure an optimal user experience. My goal
              is to create web applications that are elegant, clean and easy to
              use.
            </p>
          </div>
        </AnimatedVisibleObserver>

        <AnimatedVisibleObserver
          threshold={0.8}
          animationClass={'animateZoomIn'}
          animationDelay={'500ms'}
        >
          <div className="px-4  max-w-xl md:max-w-xl">
            <h3 className="text-2xl sm:text-3xl text-text-opacity font-bold mb-6">
              Connect With Me
            </h3>
            <p className="text-text-secondary text-base mb-10 font-medium">
              I&apos;d be delighted to connect with you and discuss more about
              my projects and experiences! Feel free to reach out to me through
              any of the following channels.
            </p>
            <IconsSocialNetworks />
          </div>
        </AnimatedVisibleObserver>
      </section>
    </div>
  );
}
