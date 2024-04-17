'use client';

import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import UK from '@/public/nav/uk.png';
import NO from '@/public/nav/no.png';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const Language = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const pathnameExtracted = pathname
    .split('/')
    .filter((value, index) => index > 1);
  const locale = useLocale();
  const localeMatch = locale === 'en';
  const redirectLocale = localeMatch ? 'no' : 'en';

  return (
    <>
      <div
        onClick={() => push(`/${redirectLocale}/${pathnameExtracted}`)}
        className={`${style.language} ${style.languageDesktop}`}
      >
        <div className={style.flag}>
          <Image
            src={localeMatch ? NO : UK}
            alt={localeMatch ? 'English' : 'Norsk'}
            fill
            placeholder="blur"
            sizes="100vw"
          />
          <Image
            src={localeMatch ? UK : NO}
            alt={localeMatch ? 'English' : 'Norsk'}
            fill
            className={style.lastImage}
            placeholder="blur"
            sizes="100vw"
          />
        </div>

        <div className={style.tooltip}>{localeMatch ? 'Norsk' : 'English'}</div>
      </div>

      {/* Mobile */}
      <div className={`${style.language} ${style.languageMobile}`}>
        <div
          className={style.flag}
          onClick={() => push(`/en/${pathnameExtracted}`)}
        >
          <Image
            src={UK}
            placeholder="blur"
            sizes="100vw"
            alt={'English'}
            fill
          />
        </div>

        <div
          className={style.flag}
          onClick={() => push(`/no/${pathnameExtracted}`)}
          style={{ margin: '0 0 0 0.7rem' }}
        >
          <Image src={NO} alt={'Norsk'} fill placeholder="blur" sizes="100vw" />
        </div>
      </div>
    </>
  );
};

export default Language;
