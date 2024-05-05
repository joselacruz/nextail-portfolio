import Button from '@common/Button';
import AnimatedVisibleObserver from '@components/AnimatedVisibleObserver';
import Circle from '@components/Circle';
import SkillsAnimated from '@components/SkillsAnimated';

export default function Home() {
  return (
    <section
      className="flex  justify-center items-center pt-44 flex-wrap md:justify-between bg-bg-secondary overflow-hidden"
      id="home"
    >
      <div className="max-w-xl px-3.5 md:max-w-md  lg:max-w-xl">
        <AnimatedVisibleObserver animationClass={'animateBackInUp'}>
          <h1 className="text-primary flex flex-col mb-3 font-bold opacity-80 ">
            Hey There 👋 I am
            <span className="text-xlg">Jose Lacruz</span>
          </h1>
        </AnimatedVisibleObserver>

        <AnimatedVisibleObserver
          animationClass={'animateBackInUp'}
          animationDelay={'400ms'}
        >
          <h2 className="text-text-secondary mb-5 text-large font-medium">
            Front-end
            <span className="text-secondary font-bold ml-2 ">Developer</span>
          </h2>
        </AnimatedVisibleObserver>

        <AnimatedVisibleObserver
          animationClass={'animateBackInUp'}
          animationDelay={'600ms'}
        >
          <p className="text-text-secondary mb-12 font-medium">
            I am a motivated developer, willing to learn and create Outstanding
            UI apps. My approach is focuses on combining creativity and
            technology to develop innovative solutions that solve problems and
            improve user experience.
          </p>
        </AnimatedVisibleObserver>
        <AnimatedVisibleObserver
          animationClass={'animateBackInUp'}
          animationDelay={'800ms'}
        >
          <div>
            <Button
              title={'Contact Me'}
              customClasses={'bg-primary text-ternary mr-4'}
            />
            <Button
              title={'Learn More'}
              customClasses={'bg-secondary text-ternary '}
            />
          </div>
        </AnimatedVisibleObserver>
      </div>

      <div className="w-full mt-64 md:w-3/6 md:mt-0 ">
        <AnimatedVisibleObserver
          threshold={0.2}
          animationClass={'animateBackInRight'}
          animationDelay={'1000ms'}
        >
          <div
            className="relative overflow-hidden w-full flex justify-center  "
            style={{ height: '508px' }}
          >
            <span className="circle  w-full h-full absolute top-3 left-0 flex justify-end">
              <Circle />
            </span>
            <img
              src="images/profile.png"
              alt="imagen profile jose lacruz"
              className="relative object-cover"
            />
          </div>
        </AnimatedVisibleObserver>
        <SkillsAnimated />
      </div>
    </section>
  );
}
