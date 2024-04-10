import Landing from '@/components/Home/Landing/Landing';
import Product from '@/components/Home/Product/Product';
import Partners from '@/components/Partners/Partners';
import { getTranslations } from 'next-intl/server';

const Home = async () => {
  const l = await getTranslations('home');

  return (
    <>
      <Landing l={l} />
      <Partners l={l} />
      <Product l={l} />
    </>
  );
};

export default Home;
