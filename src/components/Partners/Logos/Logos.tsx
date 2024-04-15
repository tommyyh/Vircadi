import React from 'react';
import style from './style.module.scss';
import logoPng1 from '@/public/partners/1.png';
import logoPng2 from '@/public/partners/2.png';
import logoPng3 from '@/public/partners/3.png';
import logoPng4 from '@/public/partners/4.png';
import logoPng5 from '@/public/partners/5.png';
import logoPng6 from '@/public/partners/6.png';
import logoPng7 from '@/public/partners/7.png';
import logoPng8 from '@/public/partners/8.png';
import logoPng9 from '@/public/partners/9.png';
import logoPng10 from '@/public/partners/10.png';
import logoPng11 from '@/public/partners/11.png';
import logoPng12 from '@/public/partners/12.png';
import Image from 'next/image';

const Logos = () => {
  return (
    <div className={style.logos}>
      <Logo src={logoPng1} />
      <Logo src={logoPng2} customClass={style.second} />
      <Logo src={logoPng3} />
      <Logo src={logoPng4} customClass={style.second} />
      <Logo src={logoPng5} />
      <Logo src={logoPng6} customClass={style.second} />
      <Logo src={logoPng7} />
      <Logo src={logoPng8} customClass={style.second} />
      <Logo src={logoPng9} />
      <Logo src={logoPng10} customClass={style.second} />
      <Logo src={logoPng11} />
      <Logo src={logoPng12} customClass={style.second} />
    </div>
  );
};

const Logo = ({ src, customClass }: any) => {
  return (
    <div className={`${style.cont} ${customClass}`}>
      <div className={style.logo}>
        <Image src={src} alt="partner" fill />
      </div>
    </div>
  );
};

export default Logos;
