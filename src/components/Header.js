'use client';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Button from 'app/common/Button';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

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
  ];

  const menu = ({ isMobile = false }) => {
    return (
      <ul
        className={`navigation flex justify-center  ${
          isMobile
            ? 'flex-col absolute top-20 w-56 shadow-custom-shadow p-8 gap-4 right-0'
            : 'gap-12'
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
          customClasses={'bg-primary text-sm  text-ternary hidden sm:block'}
        />
      </ul>
    );
  };
  function toggleMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <header className="header flex justify-between items-center p-8 bg-trasparent md:justify-around">
      <a
        href=""
        className="text-3xl font-serif"
      >
        Jose
      </a>
      <nav className="navigation-container md:hidden">
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
          customClasses={'bg-primary text-ternary sm:hidden'}
        />
        <Bars3Icon
          className=" hidden w-10 text-text-opacity cursor-pointer md:block"
          onClick={toggleMenu}
        />
        {mobileMenu && menu({ isMobile: true })}
      </div>
    </header>
  );
}
