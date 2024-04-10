import React from 'react';
import style from './style.module.scss';
import { Link } from '@/navigation';

const Button = ({ title, href, ...props }: any) => {
  return (
    <Link className={style.button} href={href} {...props}>
      {title}
    </Link>
  );
};

export default Button;
