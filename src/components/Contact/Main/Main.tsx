import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import solarPng from '@/public/info/solar.png';
import EnvelopeSvg from '@/public/icons/envelope.svg';
import Form from './Form/Form';
import { NextIntlClientProvider, useMessages } from 'next-intl';

type PropsType = {
  l: any;
};

const Main = ({ l }: PropsType) => {
  const messages = useMessages();

  return (
    <main className={style.main}>
      <div className={style.left}>
        <div className={style.title}>
          <EnvelopeSvg />
          <h1>{l(`title`)}</h1>
        </div>

        <NextIntlClientProvider messages={messages}>
          <Form />
        </NextIntlClientProvider>
      </div>

      <div className={style.img}>
        <Image src={solarPng} alt="Energy" sizes="100vw" fill />
      </div>
    </main>
  );
};

export default Main;
