import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import Product2Png from '@/public/product/product2.png';

type PropsType = {
  l: any;
};

const Bottom = ({ l }: PropsType) => {
  const lang = 'product';

  return (
    <div className={style.bottom}>
      <div className={style.content}>
        <p>{l(`${lang}.text2`)}</p>
      </div>

      <div className={style.imgCont1}>
        <Image
          placeholder="blur"
          src={Product2Png}
          alt="Product showcase"
          fill
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Bottom;
