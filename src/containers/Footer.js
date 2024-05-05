import AnimatedVisibleObserver from '@components/AnimatedVisibleObserver';
import IconsSocialNetworks from '@components/IconsSocialNetworks';
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  const navigation = [
    {
      href: '#home',
      title: 'Home',
    },
    {
      href: '#about',
      title: 'About',
    },
    {
      href: '#portfolio',
      title: 'Portfolio',
    },
    {
      href: '#experience',
      title: 'Experience',
    },
    {
      href: '#contact',
      title: 'Contact',
    },
  ];

  return (
    <footer className="py-12 bg-secondary px-6 ">
      <div className="footer-top  border-b border-gray-600 pb-12  sm:flex sm:justify-around sm:items-baseline">
        <AnimatedVisibleObserver
          threshold={0.5}
          animationClass={'animateBackInUp'}
        >
          <section className="mb-6  sm:mb-0">
            <h3 className="text-4xl text-ternary font-bold mb-5">
              Let's Talk!
            </h3>
            <p className="text-text-dark text-xl font-bold mb-2">
              Contact Info
            </p>
            <p className="text-text-dark font-medium">
              joselacruzperez@gmail.com
            </p>
          </section>
        </AnimatedVisibleObserver>

        <AnimatedVisibleObserver
          threshold={0.5}
          animationClass={'animateBackInUp'}
        >
          <section>
            <ul>
              {navigation.map((element, index) => {
                return (
                  <li
                    key={index}
                    className="text-text-dark font-medium cursor-pointer pb-2"
                  >
                    {element.title}
                  </li>
                );
              })}
            </ul>
          </section>
        </AnimatedVisibleObserver>
      </div>
      <AnimatedVisibleObserver
        threshold={0.5}
        animationClass={'animateBackInUp'}
      >
        <div className="footer-bottom grid  mt-12 justify-center md:flex md:justify-between md:items-center ">
          <div className="flex flex-wrap gap-1  smd:gap-6 justify-center">
            <p className="text-text-dark font-medium text-center">
              ©2024 Designed and Developed by
              <a
                href="https://github.com/joselacruz"
                className="text-primary ml-1 font-bold"
              >
                joselacruz
              </a>
            </p>
            <a
              href=""
              className="text-text-dark font-medium flex gap-1"
            >
              <CodeBracketSquareIcon className="w-6 h-6 inline" />
              <span> source code</span>
            </a>
          </div>

          <div className="justify-self-center pt-4 md:pt-0">
            <IconsSocialNetworks />
          </div>
        </div>
      </AnimatedVisibleObserver>
    </footer>
  );
}
