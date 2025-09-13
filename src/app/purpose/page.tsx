'use client';
import styles from './Purpose.module.css';
import { motion } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';
import { Lightbulb, Rocket, Zap, HeartPulse } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Link from 'next/link';

export default function PurposePage() {
  return (
    <main className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <TypewriterHeading text="Redefining Movement for a Smarter Future." className={styles.heroTitle} />
        <p className={styles.heroSubtitle}>
          We believe that technology should serve humanity. Our purpose is to create intelligent, efficient, and life-saving transportation infrastructure for everyone.
        </p>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>The Problem We Solve</h2>
            <p className={styles.sectionText}>
              Every day, millions of hours are lost in traffic congestion, fuel is wasted, and critical time is stolen from emergency services navigating inefficient roadways. We saw these challenges not as roadblocks, but as opportunities for innovation. The traditional tollbooth, a symbol of delay, became our starting point for a complete reimagining of how traffic flows.
            </p>
          </motion.div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Guiding Principles</h2>
          <div className={styles.pillarsGrid}>
            <TiltCard>
              <div className={styles.pillarCard}>
                <HeartPulse size={32} />
                <h3>Safety First</h3>
                <p>Our primary motivation is to save lives. By giving emergency vehicles unconditional priority, we aim to reduce response times and make our roads safer for everyone.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className={styles.pillarCard}>
                <Zap size={32} />
                <h3>Seamless Experience</h3>
                <p>We are dedicated to eliminating friction from the travel experience. Our system is designed to be invisible, allowing drivers to move freely without interruption.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className={styles.pillarCard}>
                <Rocket size={32} />
                <h3>Future-Focused</h3>
                <p>Tollverine is more than a tolling system; it&apos;s a foundational block for future smart cities, providing data and infrastructure for a connected transportation network.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <h2>Join us in building the future of transportation.</h2>
        <Link href="/technology" className={styles.ctaButton}>
          Explore the Technology
        </Link>
      </section>
    </main>
  );
}
