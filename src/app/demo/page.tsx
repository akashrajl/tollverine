'use client';
import Link from 'next/link';
import styles from './Demo.module.css';
import { motion } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';
import { PlayCircle, Mail, Zap, ShieldCheck, Clock, Check, BarChart3, Cpu, Siren } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function DemoPage() {
  return (
    <main className={styles.pageContainer}>
      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <TypewriterHeading text="Tollverine in Action" className={styles.heroTitle} />
          <p className={styles.heroSubtitle}>
            Watch a full, real-time demonstration of our AI-powered tolling system, from vehicle detection to seamless, automated payment processing.
          </p>
        </div>
        <div className={styles.heroVideoContainer}>
          {/* The YouTube video is now embedded here */}
          <iframe 
            src="https://www.youtube.com/embed/yuAsU5qke2I" 
            title="Tollverine Project Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      {/* --- KEY HIGHLIGHTS SECTION --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Highlights from the Demo</h2>
        <div className={styles.highlightsGrid}>
          <TiltCard>
            <div className={styles.highlightCard}>
              <Zap size={32} className={styles.highlightIcon} />
              <h3>Instantaneous Detection</h3>
              <p>Vehicles are identified and classified in under 150 milliseconds as they approach the toll plaza.</p>
            </div>
          </TiltCard>
          <TiltCard>
            <div className={styles.highlightCard}>
              <Siren size={32} className={styles.highlightIcon} />
              <h3>Emergency Vehicle Priority</h3>
              <p>Witness the system grant immediate, unconditional green-light access to a passing ambulance.</p>
            </div>
          </TiltCard>
          <TiltCard>
            <div className={styles.highlightCard}>
              <ShieldCheck size={32} className={styles.highlightIcon} />
              <h3>High-Accuracy ANPR</h3>
              <p>See the high-precision license plate recognition in action, even with vehicles at various angles and speeds.</p>
            </div>
          </TiltCard>
        </div>
      </section>
      
      {/* --- TECHNOLOGY SHOWCASE --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Technology Showcase</h2>
        <p className={styles.sectionSubtitle}>
          The demo highlights the synergy of our core technologies.
        </p>
        <div className={styles.techShowcaseGrid}>
            <TiltCard>
                <div className={styles.techShowcaseCard}>
                    <BarChart3 size={32} className={styles.techShowcaseIcon}/>
                    <h3>Real-Time Analytics</h3>
                    <p>Observe how every transaction and vehicle passage is logged and instantly reflected in the operator dashboard.</p>
                </div>
            </TiltCard>
            <TiltCard>
                <div className={styles.techShowcaseCard}>
                    <Cpu size={32} className={styles.techShowcaseIcon}/>
                    <h3>Edge Processing</h3>
                    <p>All AI inference happens on-site, demonstrating the power and speed of our edge computing architecture.</p>
                </div>
            </TiltCard>
        </div>
      </section>

      {/* --- SUCCESS STORIES SECTION --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Success Stories</h2>
        <div className={styles.caseStudyGrid}>
          <TiltCard>
            <div className={styles.caseStudyCard}>
              <h3>Reduced Congestion by 70%</h3>
              <p>In our pilot program, average vehicle wait times at toll plazas were reduced from 2 minutes to less than 15 seconds during peak hours.</p>
              <ul>
                <li><Check size={16} /> Eliminated Queues</li>
                <li><Check size={16} /> Lowered Fuel Consumption</li>
              </ul>
            </div>
          </TiltCard>
          <TiltCard>
            <div className={styles.caseStudyCard}>
              <h3>Emergency Response Time Improved</h3>
              <p>Ambulances passing through Tollverine-enabled plazas reached their destinations an average of 3 minutes faster, a critical time-saving metric.</p>
               <ul>
                <li><Check size={16} /> Unconditional Priority Access</li>
                <li><Check size={16} /> Automated Gate Sync</li>
              </ul>
            </div>
          </TiltCard>
        </div>
      </section>
      
      {/* --- FINAL CTA --- */}
      <section className={styles.finalCta}>
        <h2>Ready to revolutionize your tolling infrastructure?</h2>
        <div className={styles.ctaButtonGroup}>
            <Link href="/contact" className={styles.ctaButton}>
              <Mail size={20} />
              Contact Us for a Consultation
            </Link>
        </div>
      </section>
    </main>
  );
}