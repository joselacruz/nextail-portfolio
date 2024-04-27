'use client';
import { svgArray } from '@utils/svgList';
import '@styles/Contact.css';

export default function Contact() {
  return (
    <section
      className="grid justify-center bg-border-color py-28"
      id="contact"
    >
      <div className="max-w-xl px-4 justify-self-center mb-12">
        <p className="text-primary font-bold text-center text-lg ">
          Contact With Me
        </p>
        <h3 className="text-xlg text-center mb-5">Have an Project in Mind?</h3>
      </div>
      <div className="justify-self-center flex flex-wrap gap-5 justify-center">
        {svgArray.map((obj, index) => {
          return (
            <div
              key={index}
              className={`button-container button-container-${index}`}
              onClick={() => {
                window.open(obj.href, 'blank');
              }}
            >
              <div className="icon-container">{obj.render()}</div>
              <span>{obj.id}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
