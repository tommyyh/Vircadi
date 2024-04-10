import React from 'react';
import style from './style.module.scss';
import Logos from './Logos/Logos';

type PropsType = {
  l: any;
};

const Partners = ({ l }: PropsType) => {
  const lang = 'partners';

  return (
    <section className={style.partners}>
      <h2>{l(`${lang}.title`)}</h2>

      <Logos />
    </section>
  );
};

export default Partners;
