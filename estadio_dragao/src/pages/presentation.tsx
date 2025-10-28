import React from 'react';
import Layout from '@theme/Layout';
import styles from './presentation.module.css';

export default function PresentationPage() {
  return (
    <Layout title="Presentation" description="Project Presentation">
      <main className={styles.main}>
        <div className={styles.pdfContainer}>
          <iframe
            src="/img/Context.pdf#view=FitH"
            width="100%"
            height="800"
            style={{ border: 'none' }}
            title="Project Presentation"
          />
        </div>
      </main>
    </Layout>
  );
}
