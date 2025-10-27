import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
            <Link className="button button--primary button--lg" to="#">
              Get the app
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Learn more
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          {/* Image slot: place an <img src="/img/your-image.png" alt="App mockup" /> here */}
          <div className={styles.imagePlaceholder} aria-hidden>App image</div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
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
