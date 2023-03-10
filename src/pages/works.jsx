import Head from 'next/head';
import { Main } from '@/components/Main';
import { useBackground } from '@/hooks/useBackground';

export default function Home() {

  useBackground();

  return (
    <>
      <Head>
        <title>Works | next.js practice | shun kusakabe</title>
        <meta
          name="description"
          content="This is Shun's Works page. Generated by create next app"
        />
      </Head>

      <Main title="works" />
    </>
  );
}
