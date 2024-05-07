import { EyeIcon } from '@heroicons/react/24/solid';
import { svgArray } from '@utils/svgList';
import AnimatedVisibleObserver from './AnimatedVisibleObserver';
import Image from 'next/image';

export default function CardProject({ project }) {
  const svgLinkedin = svgArray.filter((svg) => svg.id == 'github')[0];

  const {
    title,
    content,
    img: image,
    live: linkPreview,
    code: linkCode,
  } = project;
  function handleLocation(url) {
    window.open(url, '_blank');
  }

  return (
    <AnimatedVisibleObserver
      animationClass={'animateBackInUp'}
      threshold={0.2}
      animationDelay={'300ms'}
    >
      <article className="max-w-lg px-4 mb-12">
        <figure className="mb-8 rounded-md overflow-hidden">
          <Image
            width={500}
            height={500}
            src={image}
            alt={`imagen ${title}`}
            className="object-contain"
            priority={false}
          ></Image>
        </figure>
        <h3 className="text-text-opacity text-xl mb-3 hover:text-primary hover:cursor-pointer font-semibold">
          {title}
        </h3>
        <p className="text-base text-text-secondary font-medium h-20 ">
          {content}
        </p>
        <div className="mt-5 border-t border-border-color grid grid-cols-2 items-center text-text-secondary ">
          <div
            className="project-link-container border-r border-border-color flex py-4 justify-center items-center gap-4 cursor-pointer"
            onClick={() => {
              handleLocation(linkPreview);
            }}
          >
            <EyeIcon className="w-8  " />
            <span>Preview</span>
          </div>
          <div
            className="project-link-container flex py-4 justify-center items-center gap-4 cursor-pointer"
            onClick={() => {
              handleLocation(linkCode);
            }}
          >
            {svgLinkedin.render()}
            <span>Code</span>
          </div>
        </div>
      </article>
    </AnimatedVisibleObserver>
  );
}
