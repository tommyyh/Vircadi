import Landing from '@/components/Home/Landing/Landing';
import { getTranslations } from 'next-intl/server';

const Home = async () => {
  const l = await getTranslations('home');

  return (
    <>
      <Landing l={l} />
    </>
  );
};

export default Home;
