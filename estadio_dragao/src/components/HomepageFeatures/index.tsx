import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: FontAwesomeIcon;
  description: ReactNode;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Smart Indoor Navigation',
    
    description: 'Guide fans to entrances, seats and exits; dynamic re-routing.',
  },
  {
    title: 'Real-Time Congestion',
    
    description: 'Live crowd density and wait-time updates to avoid queues.',
  },
  {
    title: 'Safety Alerts',
    
    description: 'Immediate safety and evacuation notifications.',
  },
  {
    title: 'Multilingual & Accessible',
    
    description: 'Portuguese and English support; accessibility-first UI.',
  },
  {
    title: 'Offline-First',
    
    description: 'Cache critical data for uninterrupted guidance during outages.',
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={(styles.featureCard)}>
      <div className={styles.iconWrap}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.cardBody}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const firstRow = FeatureList.slice(0, 3);
  const secondRow = FeatureList.slice(3);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {firstRow.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.row}>
          {secondRow.map((props, idx) => (
            <Feature key={idx + 3} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

