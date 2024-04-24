'use client';
import LinedCircle from '@common/LinedCircle';
import useMediaQuery from '@hooks/useMediaQuery';

const experienceCourses = [
  {
    title: 'Responsive Design Course: Mobile First',
    description:
      'Master the principles of responsive design with a mobile-first approach, ensuring your websites look great on any device.',
    school: 'Platzi',
    date: '02-2023',
    certificateLink:
      'https://platzi.com/p/joselacruz258/curso/2030-mobile-first/diploma/detalle',
  },
  {
    title: 'Basic JavaScript Course',
    description:
      'Get started with JavaScript basics, including variables, functions, and control structures, to build a solid foundation in programming.',
    school: 'Platzi',
    date: '05-2023',
    certificateLink:
      'https://platzi.com/p/joselacruz258/curso/1814-basico-javascript/diploma/detalle',
  },
  {
    title: 'Frontend Developer Course',
    description:
      'Explore the essential tools and techniques of frontend development, including HTML, CSS, and JavaScript, to create modern websites.',
    school: 'Platzi',
    date: '05-2023',
    certificateLink:
      'https://platzi.com/p/joselacruz258/curso/2467-frontend-developer/diploma/detalle',
  },
  {
    title: 'React.js course',
    description:
      'Learn React.js fundamentals and build dynamic user interfaces with this powerful JavaScript library for frontend development.',
    school: 'Platzi',
    date: '07-2023',
    certificateLink:
      'https://platzi.com/p/joselacruz258/curso/7395-react/diploma/detalle',
  },
  {
    title: 'Webpack course',
    description:
      'Discover how to use Webpack to bundle and optimize your web projects, streamlining your frontend development workflow.',
    school: 'Platzi',
    date: '03-2023',
    certificateLink:
      'https://platzi.com/p/joselacruz258/curso/2242-webpack/diploma/detalle',
  },
  {
    title: 'Frontend Developer Practical Course',
    description:
      'Apply your frontend development skills to real-world projects, gaining hands-on experience to enhance your portfolio.',
    school: 'Platzi',
    date: '05-2023',
    certificateLink:
      'https://platzi.com/p/joselacruz258/curso/2477-frontend-developer-practico/diploma/detalle',
  },
];

export default function Experience() {
  const wMax960Px = useMediaQuery('(min-width: 960px)');

  function viewCertificate(url) {
    window.open(url, '_blank');
  }

  return (
    <section
      className="pt-28 grid justify-center bg-ternary pb-16 border-b border-gray-300"
      id="experience"
    >
      <div className="max-w-xl px-4 justify-self-center">
        <p className="text-primary font-bold text-center text-lg ">
          Educational and Development Experience
        </p>
        <h3 className="text-xlg text-center mb-5">My Resume</h3>
        <p className="text-text-secondary text-center mb-12 font-semibold">
          Discover my training and experience in development. Although I have no
          previous work as a programmer, I have completed courses that have
          prepared me for challenges in this field.
        </p>
      </div>

      <div className="px-4 md:grid md:grid-cols-2 md:px-0  grid-rows-4">
        {experienceCourses.map((course, index) => {
          const alignLeftContainers = index % 2 == 0;
          const rowStart = index + 1;

          // Card Courses Destokp
          if (wMax960Px) {
            return (
              <div
                className={`max-w-lg  pb-11  border-gray-300 relative  ${
                  alignLeftContainers
                    ? ` pr-12 border-r text-end  col-start-1 `
                    : `pl-11 border-l col-start-2 container-right`
                }`}
                style={{ gridRow: `${rowStart}` }}
                key={index}
              >
                {index == 0 && (
                  <span className="line-top inline-block h-8"></span>
                )}
                <div
                  className={`absolute  ${
                    alignLeftContainers ? '-right-2' : '-left-2'
                  }`}
                >
                  <LinedCircle />
                </div>
                <p className="mb-1  text-xl text-text-opacity  font-semibold">
                  {course.title}
                </p>
                <p className="text-text-secondary font-semibold text-lg mb-3">
                  {course.school}
                </p>
                <button
                  className="bg-primary text-ternary px-6 py-2 rounded-full text-xs font-semibold mb-5 "
                  onClick={() => {
                    viewCertificate(course.certificateLink);
                  }}
                >
                  {course.date}
                </button>
                <p className="text-text-secondary font-medium">
                  {course.description}
                </p>
              </div>
            );
          } else {
            return (
              // Card Courses movil
              <div
                className="max-w-lg  pl-11 pb-11 border-l border-gray-300  relative"
                key={index}
              >
                <span className="line-top inline-block h-8"></span>
                <div className="absolute -left-2">
                  <LinedCircle />
                </div>
                <p className="mb-1  text-xl text-secondary  font-semibold">
                  {course.title}
                </p>
                <p className="text-text-secondary font-semibold text-lg mb-3">
                  {course.school}
                </p>
                <button
                  className="bg-primary text-ternary px-6 py-2 rounded-full text-xs font-semibold mb-5"
                  onClick={() => viewCertificate(course.certificateLink)}
                >
                  {course.date}
                </button>
                <p className="text-text-secondary font-medium">
                  {course.description}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
