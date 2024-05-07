import AnimatedVisibleObserver from '@components/AnimatedVisibleObserver';
import Circle from '@components/Circle';
import HomeActions from '@components/HomeActions';
import SkillsAnimated from '@components/SkillsAnimated';
import Image from 'next/image';
import profileImagen from '/public/images/profile.png';

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
        <HomeActions />
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
            <Image
              src={profileImagen}
              className="relative object-cover"
              style={{ width: 'auto', height: 'auto' }}
              alt="imagen profile jose lacruz"
              width={500}
              height={500}
              priority={true}
            ></Image>
          </div>
        </AnimatedVisibleObserver>
        <SkillsAnimated />
      </div>
    </section>
  );
}
