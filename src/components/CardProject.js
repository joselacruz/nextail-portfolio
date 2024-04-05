export default function CardProject({ title, content, image }) {
  return (
    <article className="max-w-lg px-4 mb-12">
      <figure className="mb-8 rounded-md overflow-hidden">
        <img
          src={image}
          alt={`imagen ${title}`}
          className="object-cover"
        />
      </figure>
      <h3 className="text-secondary text-xl mb-3 hover:text-primary hover:cursor-pointer">
        {title}
      </h3>
      <p className="text-base text-text-secondary">{content}</p>
    </article>
  );
}
