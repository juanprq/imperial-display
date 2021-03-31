import Head from 'next/head';

import Card from '../components/Card';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Glassmorphism</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Title...</h1>

        <p>paragraph</p>

        <img className="shape" src="https://s3.us-east-2.amazonaws.com/ui.glass/shape.svg" />
        <Card />
      </main>

      <footer>the footer...</footer>
    </div>
  );
}
