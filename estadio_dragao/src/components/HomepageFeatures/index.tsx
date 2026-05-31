import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRoute, faSignal, faLanguage, faExclamation, faMapLocationDot, IconDefinition, faMap} from '@fortawesome/free-solid-svg-icons';

type FeatureItem = {
  title: string;
  icon: IconDefinition;
  description: ReactNode;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Smart Outdoor Navigation',
    icon: faRoute,
    description: 'GPS-based route guidance with real-time congestion avoidance.',
  },
  {
    title: 'Real-Time Congestion',
    icon: faMapLocationDot,
    description: 'Live crowd density and wait-time updates to avoid queues.',
  },
  {
    title: 'Administrative Map Capabilities',
    icon: faMap,
    description: 'Dashboard that enables map edition through node and edge management.',
  },
  {
    title: 'Safety Alerts',
    icon: faExclamation,
    description: 'Immediate safety and evacuation notifications.',
  },
  {
    title: 'Multilingual & Accessible',
    icon: faLanguage,
    description: 'Portuguese and English support; accessibility-first UI.',
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={(styles.featureCard)}>
      <div className={styles.iconWrap}>
        <FontAwesomeIcon icon={icon} className={styles.icon}/>
      </div>
      <div className={styles.cardBody}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const firstRow = FeatureList.slice(0, 2);
  const secondRow = FeatureList.slice(2);

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
            <Feature key={idx + 2} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

