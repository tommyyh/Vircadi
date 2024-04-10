import React from 'react';
import style from './style.module.scss';
import logoPng from '@/public/partners/logo.png';
import Image from 'next/image';

const Logos = () => {
  return (
    <div className={style.logos}>
      <Logo src={logoPng} />
      <Logo src={logoPng} />
      <Logo src={logoPng} />
      <Logo src={logoPng} />
      <Logo src={logoPng} />
      <Logo src={logoPng} />
      <Logo src={logoPng} />
      <Logo src={logoPng} />
    </div>
  );
};

const Logo = ({ src }: any) => {
  return (
    <div className={style.cont}>
      <div className={style.logo}>
        <Image src={src} alt="partner" fill />
      </div>
    </div>
  );
};

export default Logos;
