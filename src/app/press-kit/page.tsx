import styles from '../info/InfoPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { p } from 'framer-motion/client';

export default function PressKitPage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Press & Media</h1>
        <p className={styles.subtitle}>Resources for journalists, researchers, and partners.</p>
      </header>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Company Overview</h2>
          <p>Tollverine is an AI-powered automated tolling system designed to eliminate traffic congestion and save critical time for emergency services. Our technology uses advanced vehicle recognition to create a seamless, efficient, and secure tolling experience for everyone.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Logos & Assets</h2>
          <p>Download our official logo for use in media coverage. Please adhere to our brand guidelines.</p>
          <div className={styles.logoDisplay}>
            <div className={styles.logoImage}>
              <Image src="/logo.png" alt="Tollverine Logo" width={200} height={200} unoptimized />
            </div>
            <a href="/logo.png" download className={styles.downloadLink}>
              <Download size={20}/> 
              Download Logo
            </a>
          </div>
        </section>

        <section className={`${styles.section} ${styles.contactSection}`}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p>For all media inquiries, please contact our press team:</p>
          <a href="mailto:tollverine@gmail.com" className={styles.button}>tollverine@gmail.com</a>
        </section>
      </div>
    </main>
  );
}