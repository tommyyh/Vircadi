import React from 'react';
import style from './style.module.scss';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import solarPng from '@/public/info/solar.png';

type PropsType = {
  l: any;
};

const Contact = ({ l }: PropsType) => {
  const lang = 'contact';

  return (
    <div className={style.cont}>
      <div className={style.imgCont}>
        <div className={style.img}>
          <Image
            placeholder="blur"
            src={solarPng}
            alt="Solar panels"
            fill
            sizes="100vw"
          />
        </div>
      </div>

      <section className={style.contact}>
        <div className={style.left}>
          <h4>{l(`${lang}.sub`)}</h4>
          <h2>{l(`${lang}.title`)}</h2>
        </div>

        <div className={style.right}>
          <p>{l(`${lang}.text`)}</p>

          <Button
            title={l(`${lang}.cta`)}
            href="/contact"
            style={{ margin: '2rem 0 0 0' }}
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
