import React from 'react';
import css from './style.module.scss';
import { Link } from '@/navigation';
import Language from '../Language/Language';

type PropsType = {
  l: any;
  menuOpen: boolean;
  setMenuOpen: any;
};

const Menu = ({ l, menuOpen, setMenuOpen }: PropsType) => {
  const lang = 'nav';

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={
        menuOpen ? `${css['menu']} ${css['menu-active']}` : css['menu']
      }
    >
      <ul className={css['menu-ul']}>
        <li>
          <Link href={'/'} onClick={closeMenu}>
            {l(`${lang}.links.home`)}
          </Link>
        </li>
        <li>
          <Link href={'/#partners'} onClick={closeMenu}>
            {l(`${lang}.links.partners`)}
          </Link>
        </li>
        <li>
          <Link href={'/#product'} onClick={closeMenu}>
            {l(`${lang}.links.product`)}
          </Link>
        </li>
        <li>
          <Link href={'/contact'} onClick={closeMenu}>
            {l(`${lang}.links.contact`)}
          </Link>
        </li>
      </ul>

      <div>
        <Language />
      </div>
    </div>
  );
};

export default Menu;
