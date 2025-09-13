'use client';
import Image from 'next/image';
import styles from './Research.module.css';
import TypewriterHeading from '@/components/TypewriterHeading';
import Link from 'next/link';
import { Download, Link as LinkIcon } from 'lucide-react';

export default function ResearchPage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <TypewriterHeading text="Research & Publications" className={styles.title} />
        <p className={styles.subtitle}>
          The foundation of Tollverine is built on rigorous academic research and a commitment to advancing the field of intelligent transportation systems.
        </p>
      </header>

      <section className={styles.content}>
        <div className={styles.paperCard}>
          <div className={styles.logoColumn}>
            <Image src="/ieee_logo.png" alt="IEEE Logo" width={150} height={150} unoptimized={true} />
          </div>
          <div className={styles.paperDetails}>
            <h3>Published Research Paper</h3>
            <h2>Human-Less Toll Plaza Vehicle Recognition Using Deep Learning</h2>
            <p className={styles.conferenceInfo}>
              <strong>Conference:</strong> GITCON 2025 - IEEE Global Conference on Information Technology and Communication Networks
            </p>
            <p className={styles.paperDescription}>
              This paper details the core AI models, training methodologies, and performance benchmarks that power the Tollverine system. It was accepted for presentation, highlighting our contribution to the field.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://gitcon.in/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                <LinkIcon size={20} />
                Visit Conference Site
              </a>
              <a href="https://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                <LinkIcon size={20} />
                View in IEEE Xplore
              </a>
              <a href="/tollverine_research_paper.pdf" download className={styles.downloadButton}>
                <Download size={20} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
        
        {/* You can add more research papers here in the future */}
        
      </section>
    </main>
  );
}