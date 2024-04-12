import React from 'react';
import style from './style.module.scss';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import LandingPng from '@/public/landing/landing.png';

type PropsType = {
  l: any;
};

const Landing = ({ l }: PropsType) => {
  const lang = 'landing';

  return (
    <main className={style.landing}>
      <div className={style.content}>
        <div className={style.left}>
          <h4>{l(`${lang}.sub`)}</h4>
          <h1>
            {l.rich(`${lang}.title`, {
              span: (chunks: any) => <span>{chunks}</span>,
            })}
          </h1>
        </div>

        <div className={style.right}>
          <p className={style.textDesktop}>{l(`${lang}.text`)}</p>

          <Button title={l(`${lang}.cta`)} href="/contact" />
        </div>
      </div>

      <div className={style.img}>
        <Image src={LandingPng} fill alt="Energy" sizes="100vw" />
      </div>

      <p className={style.textMobile}>{l(`${lang}.text`)}</p>
    </main>
  );
};

export default Landing;
