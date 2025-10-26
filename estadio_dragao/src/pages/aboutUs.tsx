import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading'

import styles from './index.module.css';

function AboutMe() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className='container'>
            <p>Hi</p>
        </div>
    );
}

export default function AboutUs() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
            {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <Heading as="h1" className="hero__title">
                </Heading>
            </header>
            
            <div>
                <AboutMe>
                </AboutMe>
            </div> */}
        </Layout>
    );
}