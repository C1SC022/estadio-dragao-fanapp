import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import calendarStyles from './calendar.module.css';

export default function CalendarPage() {
  return (
    <Layout title="Calendar" description="Project Calendars">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <Heading as="h1" className={styles.mainTitle}>Calendars</Heading>
            <p className={styles.subTitle}>View project schedules</p>
          </div>
        </div>
      </header>

      <main className={calendarStyles.main}>
        <div className={calendarStyles.calendarWrapper}>
            <img src="/img/cal1.webp" alt="Calendar 1" className={calendarStyles.calendarImage} />
            <img src="/img/cal2.webp" alt="Calendar 2" className={calendarStyles.calendarImage} />
        </div>
      </main>
    </Layout>
  );
}
