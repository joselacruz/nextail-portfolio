'use client';
import Button from '@common/Button';
import SkillsAnimated from '@components/SkillsAnimated';
export default function Home() {
  return (
    <section
      className="flex  justify-center items-center pt-44 flex-wrap md:justify-between bg-bg-secondary"
      id="home"
    >
      <div className="max-w-xl px-3.5 md:max-w-md  lg:max-w-xl">
        <h1 className="text-primary flex flex-col mb-3 font-bold opacity-80">
          Hey There 👋 I am
          <span className="text-xlg">Jose Lacruz</span>
        </h1>

        <h2 className="text-text-secondary mb-5 text-large font-medium">
          Front-end <span className="text-secondary font-bold ">Developer</span>
        </h2>
        <p className="text-text-secondary mb-12 font-medium">
          I am a motivated developer, willing to learn and create Outstanding UI
          apps. My approach is focuses on combining creativity and technology to
          develop innovative solutions that solve problems and improve user
          experience.
        </p>
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
      </div>
      <div className="w-full md:w-3/6 ">
        <div
          className="relative overflow-hidden w-full flex justify-center  "
          style={{ height: '508px' }}
        >
          <span className="circle inline-block w-full h-full bg-no-repeat absolute top-3 left-0"></span>
          <img
            src="images/profile.png"
            alt="imagen profile jose lacruz"
            className="relative object-cover"
          />
        </div>
        <SkillsAnimated />
      </div>
    </section>
  );
}
