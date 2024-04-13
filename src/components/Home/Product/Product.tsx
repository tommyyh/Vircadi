import React from 'react';
import style from './style.module.scss';
import Top from './Top/Top';
import Bottom from './Bottom/Bottom';
import { Link } from '@/navigation';
import ArrowRight from '@/public/icons/arrow-right.svg';

type PropsType = {
  l: any;
};

const Product = ({ l }: PropsType) => {
  return (
    <main className={style.product} id="product">
      <Top l={l} />
      <Bottom l={l} />

      <Link href={'/contact'} className={style.link}>
        {l('product.cta')}
        <ArrowRight />
      </Link>
    </main>
  );
};

export default Product;
