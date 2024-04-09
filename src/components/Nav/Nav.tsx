import React from 'react';
import style from './style.module.scss';
import { getTranslations } from 'next-intl/server';
import Logo from '@/public/nav/logo.svg';
import { Link } from '@/navigation';
import Language from './Language/Language';

const Nav = async () => {
  const l = await getTranslations('');
  const lang = 'nav';

  return (
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
          <li>
            <Link href={'/'}>{l(`${lang}.links.partners`)}</Link>
          </li>
          <li>
            <Link href={'/'}>{l(`${lang}.links.product`)}</Link>
          </li>
          <li>
            <Link href={'/contact'}>{l(`${lang}.links.contact`)}</Link>
          </li>
          <li>
            <Language />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
