'use client';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Button from '@common/Button';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollIsTopPage, setScrollIsTopPage] = useState(true);

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

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition == 0) {
        setScrollIsTopPage(true);
      } else {
        setScrollIsTopPage(false);
      }
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menu = ({ isMobile = false }) => {
    return (
      <ul
        className={`navigation flex justify-center  ${
          isMobile
            ? 'flex-col absolute top-20 w-56 shadow-custom-shadow p-8 gap-4 right-0  bg-ternary md:hidden'
            : 'gap-12 '
        } `}
      >
        {navigation.map((element, index) => {
          return (
            <li key={index}>
              <a
                className="text-text-opacity text-base  hover:text-primary "
                href={element.href}
              >
                {element.title}
              </a>
            </li>
          );
        })}
        <Button
          title={'Download CV'}
          customClasses={'bg-primary text-sm  text-ternary  smd:hidden'}
        />
      </ul>
    );
  };
  function toggleMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <header
      className={` z-10 fixed w-full header flex justify-between items-center px-8 py-2 " md:justify-between   ${
        scrollIsTopPage ? '' : 'border bg-transparent-600 backdrop-blur-md'
      }`}
    >
      <a
        href=""
        className="text-3xl font-serif  text-secondary "
      >
        Jose
      </a>
      <nav className="navigation-container hidden  md:block">
        <ul className="navigation flex justify-center gap-12">
          {navigation.map((element, index) => {
            return (
              <li key={index}>
                <a
                  className="text-text-opacity text-base  hover:text-primary "
                  href={element.href}
                >
                  {element.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex gap-4 relative">
        <Button
          title={'Download CV'}
          customClasses={'bg-primary text-ternary  hidden smd:block md:hidden'}
        />
        <Bars3Icon
          className="  w-10 text-text-opacity cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
        {mobileMenu && menu({ isMobile: true })}
      </div>
    </header>
  );
}
