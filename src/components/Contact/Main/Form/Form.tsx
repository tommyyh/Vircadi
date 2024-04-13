'use client';

import React, { useState } from 'react';
import style from './style.module.scss';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import { sendMessage } from '@/actions/sendMessage';
import Button from '../Button/Button';

const initialState = {
  status: '',
};

const Form = () => {
  const [state, formAction] = useFormState(sendMessage, initialState);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    msg: '',
  });
  const l = useTranslations('contact');
  const lang = 'form';

  const setValue = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  return (
    <form className={style.main} action={formAction}>
      {/* Name */}
      <div className={style.name}>
        <label htmlFor="firstName">{l(`${lang}.name`)}</label>

        <div className={style.nameCont}>
          <div className={style.input}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder={l(`${lang}.firstName`)}
              onChange={(e) => setValue(e.target.name, e.target.value)}
              required
            />
          </div>

          <div className={style.input}>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder={l(`${lang}.lastName`)}
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div className={style.input}>
        <label htmlFor="email">{l(`${lang}.email`)}</label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder={l(`${lang}.emailPlaceholder`)}
          onChange={(e) => setValue(e.target.name, e.target.value)}
          required
        />
      </div>

      {/* Message */}
      <div className={style.input}>
        <label htmlFor="msg">{l(`${lang}.msg`)}</label>

        <textarea
          name="msg"
          id="msg"
          placeholder={l(`${lang}.msgPlaceholder`)}
          onChange={(e) => setValue(e.target.name, e.target.value)}
          required
        />
      </div>

      <div className={style.buttons}>
        <Button l={l} />
        <Link href={'/'}>{l(`${lang}.back`)}</Link>
      </div>

      {state.status === 'success' && (
        <p className={style.success}>{l(`${lang}.success`)}</p>
      )}
      {state.status === 'error' && (
        <p className={style.error}>{l(`${lang}.error`)}</p>
      )}
    </form>
  );
};

export default Form;
