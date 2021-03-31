import Head from 'next/Head';

import styles from './Layout.module.css';

const Layout = ({ children, title }) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div
      className={styles.image}
      href="https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__imagepagezoom/img/XukF6G6yGYG06y-ODGk7usmxZ-U=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3727516.jpg"
    ></div>

    <main>
      <h1>{title}</h1>

      {children}
    </main>

    <footer>the footer...</footer>
  </div>
);

export default Layout;
