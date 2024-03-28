import Button from '@common/Button';
export default function Home() {
  return (
    <section className="flex  justify-center items-center py-48 flex-wrap md:justify-between">
      <div className="max-w-xl px-3.5 ">
        <h1 className="text-cyan-600 flex flex-col mb-3 font-bold">
          Hey There 👋 I am
          <span className="text-xlg">Jose Lacruz</span>
        </h1>

        <h2 className="text-text-secondary mb-5 text-large">
          Front-end <span className="text-secondary font-bold ">Developer</span>
        </h2>
        <p className="text-text-secondary mb-12">
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
      <div
        className="relative overflow-hidden w-full flex justify-center  md:w-3/6  "
        style={{ height: '508px' }}
      >
        <span className="circle inline-block w-full h-full bg-no-repeat absolute top-3 left-0"></span>
        <img
          src="images/profile1.png"
          alt="imagen profile jose lacruz"
          className="relative object-cover"
        />
      </div>
    </section>
  );
}
