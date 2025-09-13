'use client';
import styles from './Product.module.css'; // <-- THIS LINE IS LIKELY MISSING. MAKE SURE IT'S HERE.
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ScanLine, ShieldCheck, Siren, Cpu, BarChart3, Gauge, Cloud, Clock } from 'lucide-react';
import TypewriterHeading from '@/components/TypewriterHeading';
import TiltCard from '@/components/TiltCard';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProductPage() {
  return (
    <main className={styles.pageContainer}>
      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <TypewriterHeading text="The Technology Behind Seamless Tolling." className={styles.heroTitle} />
          <p className={styles.heroSubtitle}>
            Discover the multi-layered AI, robust hardware, and intuitive software that power the Tollverine ecosystem.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <Image src="/product-hero.png" alt="AI Process Diagram" width={800} height={450} unoptimized />
        </div>
      </section>

      {/* --- CORE TECHNOLOGY SECTION --- */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.sectionTitle}>Core Technology Deep Dive</h2>
        <div className={styles.technologyGrid}>
          <TiltCard>
            <motion.div className={styles.techCard} variants={itemVariants}>
              <ScanLine size={40} className={styles.techIcon} />
              <h3>Vehicle Detection & Classification</h3>
              <p>Our system uses state-of-the-art YOLO models to instantly detect and classify vehicles with over 99% accuracy, even in dense traffic.</p>
            </motion.div>
          </TiltCard>
          <TiltCard>
            <motion.div className={styles.techCard} variants={itemVariants}>
              <ShieldCheck size={40} className={styles.techIcon} />
              <h3>Automated Number Plate Recognition (ANPR)</h3>
              <p>A high-accuracy OCR engine reads license plates in milliseconds, cross-referencing them with a central database for seamless identification and billing.</p>
            </motion.div>
          </TiltCard>
          <TiltCard>
            <motion.div className={styles.techCard} variants={itemVariants}>
              <Siren size={40} className={styles.techIcon} />
              <h3>Emergency Vehicle Priority System</h3>
              <p>A dedicated failsafe module detects the unique patterns of ambulance lights and sirens, triggering an immediate gate-open command to grant priority access.</p>
            </motion.div>
          </TiltCard>
        </div>
      </motion.section>

      {/* --- HARDWARE & DEPLOYMENT SECTION --- */}
      <motion.section
        className={`${styles.section} ${styles.hardwareSection}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.hardwareContent}>
          <h2 className={styles.sectionTitle}>Edge Computing Ready</h2>
          <p>Tollverine is designed for efficiency and low-latency. The entire AI model runs on-site on compact, low-cost hardware like a Raspberry Pi, connected to high-speed cameras. This eliminates the need for constant cloud connectivity, ensuring real-time processing and maximum uptime.</p>
        </div>
        <motion.div className={styles.hardwareVisual} variants={itemVariants}>
          <Image src="/hardware-setup.png" alt="Hardware Setup Infographic" width={500} height={400} unoptimized />
        </motion.div>
      </motion.section>

      {/* --- SOFTWARE & ANALYTICS --- */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.sectionTitle}>Software & Analytics Dashboard</h2>
        <p className={styles.sectionSubtitle}>
          Operators gain access to a powerful, web-based dashboard for real-time monitoring, revenue tracking, and traffic analysis.
        </p>
        <motion.div className={styles.dashboardVisual} variants={itemVariants}>
          <Image src="/dashboard-mockup.png" alt="Analytics Dashboard Mockup" width={1200} height={675} unoptimized />
        </motion.div>
      </motion.section>

      {/* --- TECHNICAL SPECS --- */}
      <motion.section
        className={styles.section}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.sectionTitle}>Technical Specifications</h2>
        <div className={styles.specsTable}>
          <TiltCard>
            <motion.div className={styles.specItem} variants={itemVariants}>
              <Gauge className={styles.specIcon} />
              <h4>Recognition Accuracy</h4>
              <p>99.3%+</p>
            </motion.div>
          </TiltCard>
          <TiltCard>
            <motion.div className={styles.specItem} variants={itemVariants}>
              <Clock className={styles.specIcon} />
              <h4>Processing Speed</h4>
              <p>&lt; 150ms per vehicle</p>
            </motion.div>
          </TiltCard>
          <TiltCard>
            <motion.div className={styles.specItem} variants={itemVariants}>
              <Cloud className={styles.specIcon} />
              <h4>Operational Conditions</h4>
              <p>-20°C to 60°C, All Weather</p>
            </motion.div>
          </TiltCard>
          <TiltCard>
            <motion.div className={styles.specItem} variants={itemVariants}>
              <BarChart3 className={styles.specIcon} />
              <h4>System Uptime</h4>
              <p>99.9%</p>
            </motion.div>
          </TiltCard>
        </div>
      </motion.section>

      {/* --- FINAL CTA --- */}
      <section className={styles.finalCta}>
        <h2>Ready to see it in action?</h2>
        <div className={styles.ctaButtonGroup}>
          <Link href="/demo"><button className={styles.ctaButton}>Watch the Full Demo</button></Link>
          <Link href="/contact"><button className={`${styles.ctaButton} ${styles.secondaryButton}`}>Contact for Consultation</button></Link>
        </div>
      </section>
    </main>
  );
}