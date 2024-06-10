'use client';
import { svgArray } from '@utils/svgList';
import '@styles/Contact.css';
import AnimatedVisibleObserver from '@components/AnimatedVisibleObserver';

export default function Contact() {
  return (
    <section
      className="grid justify-center bg-border-color py-28"
      id="contact"
    >
      <AnimatedVisibleObserver
        animationClass={'animateBounce'}
        threshold={1}
      >
        <div className="max-w-2xl px-4 justify-self-center mb-12">
          <p className="text-primary font-bold text-center text-lg ">
            Contact With Me
          </p>
          <h3 className="text-xlg text-center mb-5">
            Have an Project in Mind?
          </h3>
        </div>
      </AnimatedVisibleObserver>

      <div className="justify-self-center flex flex-wrap gap-5 justify-center">
        {svgArray.map((obj, index) => {
          const animationDelay = index + svgArray.length;
          return (
            <AnimatedVisibleObserver
              key={index}
              threshold={0.8}
              animationClass={'animateFadeIn'}
              animationDelay={`${animationDelay.toString()}00ms`}
            >
              <div
                className={`button-container button-container-${index}`}
                onClick={() => {
                  setTimeout(() => {
                    window.open(obj.href, 'blank');
                  }, 400);
                }}
              >
                <div className="icon-container">{obj.render()}</div>
                <span>{obj.id}</span>
              </div>
            </AnimatedVisibleObserver>
          );
        })}
      </div>
    </section>
  );
}
