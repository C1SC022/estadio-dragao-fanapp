import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading'

import styles from './index.module.css';

function AboutMe() {
    const members = [
        { name: 'Tomás Gameiro', role: 'Project Management' },
        { name: 'Francisco Silva', role: 'Mobile / UI' },
        { name: 'João Cabral', role: 'Backend / APIs' },
        { name: 'Bernardo Martins', role: 'Modeling / Analytics' },
        { name: 'Gonçalo Floro', role: 'QA / DevOps' },
    ];

    const initials = (fullName: string) =>
        fullName
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();

    return (
        <div className={styles.teamWrapper}>
            <div className={styles.teamGrid}>
                {members.map((m) => (
                    <div className={styles.card} key={m.name}>
                        <div className={styles.avatar} aria-hidden>{initials(m.name)}</div>
                        <h3 className={styles.name}>{m.name}</h3>
                        <p className={styles.role}>{m.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function AboutUs() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <Heading as="h1" className="hero__title">
                    About Us
                </Heading>
                <p className="hero__subtitle">Meet the project team</p>
            </header>

            <main style={{ padding: '2rem 0' }}>
                <AboutMe />
            </main>
        </Layout>
    );
}