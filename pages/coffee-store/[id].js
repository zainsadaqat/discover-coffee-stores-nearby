import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStoresData from '../../data/coffee-store.json';
import Head from 'next/head';
import styles from '../../styles/coffee-store.module.css';
import Image from 'next/image';
import cls from 'classnames';

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStores: coffeeStoresData.find(
        (coffeeStore) => coffeeStore.id.toString() === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  console.log('Props: ', props);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading.....</div>;
  }
  const { name, address, neighbourhood, imgUrl } = props.coffeeStores;

  const handleUpvoteButton = () => console.log('Handle Upvote Button');
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div>
            <div className={styles.nameWrapper}>
              <h1 className={styles.name}>{name}</h1>
            </div>
            <Image
              className={styles.storeImage}
              src={imgUrl}
              width={600}
              height={360}
              alt={name}
            />
          </div>
        </div>
        <div className={cls('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" width="24" height="24" />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" width="24" height="24" />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width="24" height="24" />
            <p className={styles.text}>1</p>
          </div>
          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
