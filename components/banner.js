import Head from 'next/head';
import React from 'react';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoissuer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>{' '}
        <span className={styles.title2}>Connoissuer</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>View stores nearby</button>
      </div>
    </div>
  );
};

export default Banner;
