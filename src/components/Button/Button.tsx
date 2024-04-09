import React from 'react';
import style from './style.module.scss';
import { Link } from '@/navigation';

type PropsType = {
  title: string;
  href: string;
};

const Button = ({ title, href }: PropsType) => {
  return (
    <Link className={style.button} href={href}>
      {title}
    </Link>
  );
};

export default Button;
