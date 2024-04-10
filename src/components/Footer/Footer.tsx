import React from 'react';
import style from './style.module.scss';
import { getTranslations } from 'next-intl/server';
import Logo from '@/public/nav/logo.svg';
import { Link } from '@/navigation';
import Language from './Language/Language';
import CheckSvg from '@/public/icons/check.svg';

const Footer = async () => {
  const l = await getTranslations('');
  const lang = 'footer';

  return (
    <nav className={style.footer}>
      {/* Footer */}
      <Link href={'/'}>
        <Logo />
      </Link>

      {/* Navigation */}
      <div className={style.main}>
        <ul className={style.links}>
          <li>
            <Link href={'/'}>{l(`${lang}.links.1`)}</Link>
          </li>
          <li>
            <Link href={'/'}>{l(`${lang}.links.2`)}</Link>
          </li>
          <li>
            <Link href={'/'}>{l(`${lang}.links.3`)}</Link>
          </li>
          <li>
            <Link href={'/contact'}>{l(`${lang}.links.4`)}</Link>
          </li>
        </ul>

        {/* Info */}
        <ul className={style.info}>
          <li>
            <a href={`mailto:${l('general.email')}`}>
              {l(`${lang}.info.email`)}
            </a>
          </li>
          <li>
            <a href={`tel:${l('general.tel')}`}>{l(`${lang}.info.tel`)}</a>
          </li>
        </ul>

        {/* Newsletter */}
        <div className={style.newsletter}>
          <h3>{l(`${lang}.newsletter.title`)}</h3>

          <div className={style.input}>
            <input
              type="email"
              placeholder={l(`${lang}.newsletter.email`)}
              name="email"
            />

            <button>
              <CheckSvg />
            </button>
          </div>
        </div>
      </div>

      <h6>{l(`${lang}.copyright`)}</h6>
    </nav>
  );
};

export default Footer;
