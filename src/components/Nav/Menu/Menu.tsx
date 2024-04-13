import React from 'react';
import css from './style.module.scss';
import { Link } from '@/navigation';
import Language from '../Language/Language';

type PropsType = {
  l: any;
  menuOpen: boolean;
};

const Menu = ({ l, menuOpen }: PropsType) => {
  const lang = 'nav';

  return (
    <div
      className={
        menuOpen ? `${css['menu']} ${css['menu-active']}` : css['menu']
      }
    >
      <ul className={css['menu-ul']}>
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
      </ul>

      <div>
        <Language />
      </div>
    </div>
  );
};

export default Menu;
