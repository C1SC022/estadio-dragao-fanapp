import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading'

import index from './index.module.css'
import aboutus from './aboutUs.module.css';


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
        <div className={aboutus.teamWrapper}>
            <div className={aboutus.teamGrid}>
                {members.map((m) => (
                    <div className={aboutus.card} key={m.name}>
                        <div className={aboutus.avatar} aria-hidden>{initials(m.name)}</div>
                        <h3 className={aboutus.name}>{m.name}</h3>
                        <p className={aboutus.role}>{m.role}</p>
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
            <header className={clsx('hero hero--primary', index.heroBanner)}>
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