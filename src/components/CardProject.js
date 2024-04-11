import { EyeIcon } from '@heroicons/react/24/solid';
import { svgArray } from '@utils/svgList';

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
    <article className="max-w-lg px-4 mb-12">
      <figure className="mb-8 rounded-md overflow-hidden">
        <img
          src={image}
          alt={`imagen ${title}`}
          className="object-cover"
        />
      </figure>
      <h3 className="text-text-opacity text-xl mb-3 hover:text-primary hover:cursor-pointer font-bold">
        {title}
      </h3>
      <p className="text-base text-text-secondary font-medium ">{content}</p>
      <div className="mt-5 border-t  grid grid-cols-2 items-center text-text-secondary ">
        <div
          className="project-link-container border-r flex py-4 justify-center items-center gap-4 cursor-pointer"
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
  );
}
