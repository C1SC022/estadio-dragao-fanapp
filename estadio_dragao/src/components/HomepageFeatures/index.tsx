import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const IconNav: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 56V8h32" stroke="#0b63ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="48" cy="24" r="10" stroke="#06b6d4" strokeWidth="4" />
  </svg>
);

const IconCrowd: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="30" width="52" height="22" rx="4" stroke="#0b63ff" strokeWidth="4" />
    <circle cx="20" cy="20" r="6" stroke="#06b6d4" strokeWidth="3" />
    <circle cx="34" cy="18" r="6" stroke="#06b6d4" strokeWidth="3" />
    <circle cx="48" cy="20" r="6" stroke="#06b6d4" strokeWidth="3" />
  </svg>
);

const IconAlert: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M32 8 L8 56h48L32 8z" stroke="#0b63ff" strokeWidth="3" fill="rgba(11,99,255,0.06)" />
    <path d="M32 22v12" stroke="#0b63ff" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="44" r="2" fill="#0b63ff" />
  </svg>
);

const IconAccess: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="10" y="14" width="44" height="36" rx="6" stroke="#0b63ff" strokeWidth="3" />
    <path d="M20 28h24" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 36h16" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const IconOffline: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="20" stroke="#0b63ff" strokeWidth="3" />
    <path d="M20 36c4-6 12-6 18 0" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Smart Indoor Navigation',
    Svg: IconNav,
    description: 'Guide fans to entrances, seats and exits; dynamic re-routing.',
  },
  {
    title: 'Real-Time Congestion',
    Svg: IconCrowd,
    description: 'Live crowd density and wait-time updates to avoid queues.',
  },
  {
    title: 'Safety Alerts',
    Svg: IconAlert,
    description: 'Immediate safety and evacuation notifications.',
  },
  {
    title: 'Multilingual & Accessible',
    Svg: IconAccess,
    description: 'Portuguese and English support; accessibility-first UI.',
  },
  {
    title: 'Offline-First',
    Svg: IconOffline,
    description: 'Cache critical data for uninterrupted guidance during outages.',
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
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
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
