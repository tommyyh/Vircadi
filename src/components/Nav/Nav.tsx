'use client';

import React, { useState } from 'react';
import style from './style.module.scss';
import Logo from '@/public/nav/logo.svg';
import { Link } from '@/navigation';
import Language from './Language/Language';
import { useTranslations } from 'next-intl';
import Menu from './Menu/Menu';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const l = useTranslations();
  const lang = 'nav';

  return (
    <>
      <nav className={style.nav}>
        {/* Brand */}
        <div className={style.brand}>
          <Link href={'/'}>
            <Logo />
          </Link>

          <a className={style.mail} href={`mailto:${l('general.email')}`}>
            {l('general.email')}
          </a>
        </div>

        {/* Navigation */}
        <div className={style.navigation}>
          <ul>
            <li>
              <Link href={'/'}>{l(`${lang}.links.home`)}</Link>
            </li>
            {/* <li>
              <Link href={'/#partners'}>{l(`${lang}.links.partners`)}</Link>
            </li> */}
            <li>
              <Link href={'/#product'}>{l(`${lang}.links.product`)}</Link>
            </li>
            <li>
              <Link href={'/contact'}>{l(`${lang}.links.contact`)}</Link>
            </li>
            <li>
              <Language />
            </li>
          </ul>
        </div>

        {/* Icon */}
        <div className={style.menuCont}>
          <div
            className={
              menuOpen ? `${style.menu} ${style.menuOpen}` : style.menu
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={style.line1}></div>
            <div className={style.line2}></div>
          </div>
        </div>
      </nav>

      <Menu l={l} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Nav;
