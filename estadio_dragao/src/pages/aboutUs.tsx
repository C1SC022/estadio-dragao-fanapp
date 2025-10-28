import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading'

import aboutus from './aboutUs.module.css';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';




function AboutMe() {
    const members = [
        { name: 'Tomás Gameiro', role: 'Project Management', url: 'https://github.com/LeTomarrow', img_href: '/img/photos/Tomas_img.png' },
        { name: 'Francisco Silva', role: 'Mobile / UI', url: 'https://github.com/C1SC022', img_href: '/img/photos/Francisco_img.jpg'  },
        { name: 'João Cabral', role: 'Backend / APIs' , url: 'https://github.com/JoaoCabral05', img_href: '/img/photos/Joao_img.jpg' },
        { name: 'Bernardo Martins', role: 'Modeling / Analytics' , url: 'https://github.com/Oxx05', img_href: '/img/photos/Bernardo_img.jpg'},
        { name: 'Gonçalo Floro', role: 'QA / DevOps' , url: 'https://github.com/goncalo-floro', img_href: '/img/photos/Goncalo_img.jpg' },
    ];

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    };

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
          <div
            className={aboutus.card}
            key={m.name}
            onClick={() => handleClick(m.url)}
            style={{ cursor: 'pointer' }}
            title={`Open ${m.name}'s GitHub page`}>
            <div className={aboutus.avatar} aria-hidden>
              <img src={m.img_href}></img>
            </div>
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
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
            <Heading as="h1" className={styles.mainTitle}>
                About Us
            </Heading>
            <p className={styles.subTitle}>Meet the project team</p>
            </div>

            <div className={styles.heroRight}>
            <FontAwesomeIcon icon={faUsers} className={styles.titleIcon} />
            </div>
        </div>
        </header>

        <main style={{ padding: '2rem 0' }}>
            <AboutMe />
        </main>
        </Layout>

    );
}