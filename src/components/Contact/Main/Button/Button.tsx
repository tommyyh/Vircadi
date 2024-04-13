'use client';

import { useFormStatus } from 'react-dom';
import style from './style.module.scss';

const SubmitButton = ({ l }: any) => {
  const { pending } = useFormStatus();
  const lang = 'form';

  return (
    <button
      type="submit"
      disabled={pending}
      className={pending ? style.pending : ''}
    >
      {pending ? l(`${lang}.loading`) : l(`${lang}.send`)}
    </button>
  );
};

export default SubmitButton;
