'use client';
import styles from './About.module.css'; // <-- THIS LINE IS LIKELY MISSING. MAKE SURE IT'S HERE.
import Image from 'next/image';
import { motion } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';
import { Lightbulb, Zap, ShieldCheck, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

const teamMembers = [
  { 
    name: 'Akash Raj L', 
    role: 'Information Technology', 
    institution: 'Sri Sai Ram Institute of Technology',
    email: 'laakashraj2004@gmail.com',
    image: '/team/member1.png' 
  },
  { 
    name: 'Sangeethkumar M', 
    role: 'Information Technology',
    institution: 'Sri Sai Ram Institute of Technology',
    email: 'sangeeth97kumar@gmail.com',
    image: '/team/member2.png' 
  },
  { 
    name: 'Rahul M', 
    role: 'Information Technology', 
    institution: 'Sri Sai Ram Institute of Technology',
    email: 'millionairemindset1709@gmail.com',
    image: '/team/member3.png' 
  },
];

export default function AboutPage() {
  return (
    <main className={styles.pageContainer}>
      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <TypewriterHeading text="We are Tollverine." className={styles.heroTitle} />
        <p className={styles.heroSubtitle}>
          A team of innovators dedicated to building the future of transportation infrastructure with a focus on speed, safety, and seamless integration.
        </p>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2>Our Story</h2>
          <p>Tollverine began as a research project with a single, critical goal: to eliminate fatal delays for emergency services at toll plazas. We saw a problem where seconds could mean the difference between life and death. This inspired us to leverage the power of AI to create a system that not only grants instant priority access to ambulances but also revolutionizes the tolling experience for every driver. Our name, a fusion of &quot;Toll&quot; and &quot;Wolverine,&quot; reflects our system&apos;s sharp, fast, and powerful nature.</p>
        </div>
        <div className={styles.storyImage}>
          <Image src="/logo.png" alt="Tollverine Logo" width={300} height={300} unoptimized />
        </div>
      </section>

      {/* --- OUR VALUES SECTION --- */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <TiltCard>
            <div className={styles.valueCard}>
              <Lightbulb size={32} />
              <h3>Innovation</h3>
              <p>We are committed to pushing the boundaries of what&apos;s possible with AI and edge computing to solve real-world problems.</p>
            </div>
          </TiltCard>
          <TiltCard>
            <div className={styles.valueCard}>
              <Zap size={32} />
              <h3>Efficiency</h3>
              <p>Our goal is to eliminate congestion and create a frictionless experience that saves time, fuel, and resources for everyone.</p>
            </div>
          </TiltCard>
          <TiltCard>
            <div className={styles.valueCard}>
              <ShieldCheck size={32} />
              <h3>Safety & Reliability</h3>
              <p>From prioritizing emergency vehicles to ensuring 99.9% uptime, safety and reliability are at the heart of our engineering.</p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TiltCard key={index}>
              <motion.div 
                className={styles.teamMember}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.teamMemberImage}>
                  <Image src={member.image} alt={member.name} width={150} height={150} />
                </div>
                <h3>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberInstitution}>{member.institution}, Chennai</p>
                <a href={`mailto:${member.email}`} className={styles.memberEmail}>{member.email}</a>
                <div className={styles.socialLinks}>
                  <a href="#"><Github size={20} /></a>
                  <a href="#"><Linkedin size={20} /></a>
                  <a href="#"><Instagram size={20} /></a>
                  <a href="#"><MessageCircle size={20} /></a>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>
    </main>
  );
}
