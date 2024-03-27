export default function Button({ title, customClasses, handleClick }) {
  const defaultClasses =
    'py-3 px-8 rounded-3xl font-bold hover:opacity-85 hover:shadow-custom-shadow';
  return (
    <button
      className={`${defaultClasses} ${customClasses}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
