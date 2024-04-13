import Main from '@/components/Contact/Main/Main';
import { getTranslations } from 'next-intl/server';

const Contact = async () => {
  const l = await getTranslations('contact');

  return (
    <>
      <Main l={l} />
    </>
  );
};

export default Contact;
