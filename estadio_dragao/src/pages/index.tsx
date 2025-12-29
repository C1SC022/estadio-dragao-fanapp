import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}
        >
          <Heading as="h1" className={styles.mainTitle}>
            Smart Stadium
          </Heading>

          <p className={styles.subTitle}>A better game-day, in your pocket</p>

          <p className={styles.heroDesc}>
            Real-time navigation, crowd insights and safety alerts — fast, private.
          </p>

          <div className={styles.heroActions}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Learn more
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <img
            src={useBaseUrl('/img/Screenshot_2025-12-16-15-14-27-278_com.miui.videoplayer-edit.jpg')}
            alt="App image"
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
