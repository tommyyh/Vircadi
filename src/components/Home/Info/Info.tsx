import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import infoPng from '@/public/info/info.png';

type PropsType = {
  l: any;
};

const Info = ({ l }: PropsType) => {
  const lang = 'info';

  return (
    <section className={style.info}>
      <div>
        <h4>{l(`${lang}.sub`)}</h4>
        <h2>{l(`${lang}.title`)}</h2>

        <div className={style.points}>
          <ul>
            <li>{l(`${lang}.info1.1`)}</li>
            <li>{l(`${lang}.info1.2`)}</li>
            <li>{l(`${lang}.info1.3`)}</li>
          </ul>
          <ul>
            <li>{l(`${lang}.info2.1`)}</li>
            <li>{l(`${lang}.info2.2`)}</li>
            <li>{l(`${lang}.info2.3`)}</li>
          </ul>
        </div>
      </div>

      <div className={style.img}>
        <Image src={infoPng} alt="Info graph" fill />
      </div>
    </section>
  );
};

export default Info;
