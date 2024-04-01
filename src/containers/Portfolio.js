import React from 'react';

export default function Portfolio() {
  return (
    <section className="pt-28 grid justify-center justify-items-center">
      <div className="max-w-xl">
        <h3 className="text-xlg text-center mb-5 ">Recent Works</h3>
        <p className="text-text-secondary text-center mb-12">
          Discover some of my most recent projects that showcase my passion and
          skills in web development and user interface design.
        </p>
      </div>

      <div className="mb-12">
        <button className=" active text-text-secondary px-6 py-2 rounded-full mr-2.5">
          All
        </button>
        <button className=" text-text-secondary  px-6 py-2 rounded-full mr-2.5">
          VanillaJS
        </button>
        <button className=" text-text-secondary  px-6 py-2 rounded-full mr-2.5">
          React
        </button>
        <button className=" text-text-secondary  px-6 py-2 rounded-full mr-2.5">
          NextJS
        </button>
      </div>
      <div className="max-w-1/2 flex flex-wrap justify-center ">
        <article className="max-w-lg px-4 mb-12">
          <figure className="mb-8">
            <img
              src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg"
              alt=""
            />
          </figure>
          <h3 className="text-secondary text-xl mb-3 ">Startup landing page</h3>
          <p className="text-base text-text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae dolor ultrices libero.
          </p>
        </article>
        <article className="max-w-lg px-4 mb-12">
          <figure className="mb-8">
            <img
              src="https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg"
              alt=""
            />
          </figure>
          <h3 className="text-secondary text-xl mb-3 ">Startup landing page</h3>
          <p className="text-base text-text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae dolor ultrices libero.
          </p>
        </article>
      </div>
    </section>
  );
}
