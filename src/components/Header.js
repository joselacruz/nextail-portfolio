'use client';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Button from '@common/Button';
import BrandHeader from '@components/BrandHeader';
import ThemeToogle from './ThemeToogle';
import { scrollToSection } from '@utils/scrollToSection';

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

  const renderMenu = ({ isMobile }) => {
    return (
      <ul
        className={`navigation flex justify-center  ${
          isMobile
            ? 'mobileMenu flex-col absolute w-56 shadow-custom-shadow p-8 gap-4 right-0  bg-bg-secondary md:hidden'
            : 'gap-12 '
        } `}
      >
        {navigation.map((element, index) => {
          return (
            <li key={index}>
              <a
                className="text-text-opacity text-base  hover:text-primary "
                href={element.href}
                onClick={(e) => handleClick(e, element.title)}
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

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id.toLowerCase());
    if (mobileMenu) {
      setMobileMenu(false);
    }
  };

  return (
    <header
      className={` z-10 fixed w-full header flex justify-between items-center px-8 py-2 " md:justify-between   ${
        scrollIsTopPage
          ? ''
          : 'border-b border-border-color bg-transparent-600 backdrop-blur-md'
      }`}
    >
      <BrandHeader />
      <nav className="navigation-container hidden  md:block">
        {renderMenu({ isMobile: false })}
      </nav>

      <ThemeToogle />

      <div className="h-12 flex gap-4 relative">
        <Button
          title={'Download CV'}
          customClasses={'bg-primary text-ternary  hidden smd:block md:hidden'}
        />
        <Bars3Icon
          className="  w-10 text-text-opacity cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
        {mobileMenu && renderMenu({ isMobile: true })}
      </div>
    </header>
  );
}
