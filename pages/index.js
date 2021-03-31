import Head from 'next/head';

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
      </main>

      <footer>the footer...</footer>
    </div>
  );
}
