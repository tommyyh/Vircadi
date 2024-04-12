'use client';

import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import UK from '@/public/nav/uk.png';
import NO from '@/public/nav/no.png';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

type PropsType = {
  isDesktop?: boolean;
};

const Language = ({ isDesktop }: PropsType) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const pathnameExtracted = pathname
    .split('/')
    .filter((value, index) => index > 1);
  const locale = useLocale();
  const localeMatch = locale === 'en';
  const redirectLocale = localeMatch ? 'no' : 'en';

  return isDesktop ? (
    <div
      onClick={() => push(`/${redirectLocale}/${pathnameExtracted}`)}
      className={style.language}
    >
      <div className={style.flag}>
        <Image
          src={localeMatch ? UK : NO}
          alt={localeMatch ? 'English' : 'Norsky'}
          fill
        />
        <Image
          src={localeMatch ? NO : UK}
          alt={localeMatch ? 'English' : 'Norsky'}
          fill
          className={style.lastImage}
        />
      </div>

      <div className={style.tooltip}>{localeMatch ? 'English' : 'Norsky'}</div>
    </div>
  ) : (
    <div className={style.language}>
      <div
        className={style.flag}
        onClick={() => push(`/en/${pathnameExtracted}`)}
      >
        <Image src={UK} alt={'English'} fill />
      </div>

      <div
        className={style.flag}
        onClick={() => push(`/no/${pathnameExtracted}`)}
        style={{ margin: '0 0 0 0.7rem' }}
      >
        <Image src={NO} alt={'Norsky'} fill />
      </div>
    </div>
  );
};

export default Language;
