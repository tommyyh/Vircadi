import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import Product1Png from '@/public/product/product1.png';

type PropsType = {
  l: any;
};

const Top = ({ l }: PropsType) => {
  const lang = 'product';

  return (
    <div className={style.top}>
      <div className={style.imgCont1}>
        <Image
          placeholder="blur"
          src={Product1Png}
          alt="Product showcase"
          fill
          sizes="100vw"
        />
      </div>

      <div className={style.content}>
        <h4>{l(`${lang}.sub`)}</h4>
        <h2>
          {l.rich(`${lang}.title`, {
            span: (chunks: any) => <span>{chunks}</span>,
          })}
        </h2>
        <p>{l(`${lang}.text1`)}</p>
      </div>
    </div>
  );
};

export default Top;
