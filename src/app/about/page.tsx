'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import TypewriterHeading from '@/components/TypewriterHeading';
import { Lightbulb, Zap, ShieldCheck, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const teamMembers = [
  { 
    name: 'Akash Raj L', 
    role: 'Information Technology', 
    institution: 'Sri Sai Ram Institute of Technology',
    email: 'laakashraj2004@gmail.com',
    image: '/team/member1.png',
    color: 'rgb(0, 89, 138)',
    socials: {
      github: 'https://github.com/akashrajl',
      linkedin: 'https://www.linkedin.com/in/akashrajl/',
      instagram: 'https://instagram.com/akashrajl._',
      whatsapp: 'https://wa.me/918248307259'
    }
  },
  { 
    name: 'Sangeethkumar M', 
    role: 'Information Technology',
    institution: 'Sri Sai Ram Institute of Technology',
    email: 'sangeeth97kumar@gmail.com',
    image: '/team/member2.png',
    color: 'rgb(166, 95, 0)',
    socials: {
      github: 'https://github.com/Sangeethkumar-180504',
      linkedin: 'https://www.linkedin.com/in/sangeethkumar-m-563924256',
      instagram: 'https://www.instagram.com/sangeethkumar1854/', // <-- Updated
      whatsapp: 'https://wa.me/919345871271'
    }
  },
  { 
    name: 'Rahul M', 
    role: 'Information Technology', 
    institution: 'Sri Sai Ram Institute of Technology',
    email: 'millionairemindset1709@gmail.com',
    image: '/team/member3.png',
    color: 'rgb(159, 7, 18)',
    socials: {
      github: 'https://github.com/rahulmurali123',
      linkedin: 'https://www.linkedin.com/in/rahul-murali-8b5164258',
      instagram: 'https://www.instagram.com/rahul2004302/', // <-- Updated
      whatsapp: 'https://wa.me/918778029533'
    }
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
          <p>Tollverine began as a research project with a single, critical goal: to eliminate fatal delays for emergency services at toll plazas. We saw a problem where seconds could mean the difference between life and death. This inspired us to leverage the power of AI to create a system that not only grants instant priority access to ambulances but also revolutionizes the tolling experience for every driver. Our name, a fusion of "Toll" and "Wolverine," reflects our system's sharp, fast, and powerful nature.</p>
        </div>
        <div className={styles.storyImage}>
          <Image src="/logo.png" alt="Tollverine Logo" width={300} height={300} unoptimized />
        </div>
      </section>

      {/* --- OUR VALUES SECTION --- */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.neonCard} style={{ '--moon-clr': 'rgb(110, 17, 176)' } as React.CSSProperties}>
            <div className={styles.neonCardContent}>
              <Lightbulb size={40} />
              <h2>Innovation</h2>
              <p>We are committed to pushing the boundaries of what's possible with AI and edge computing to solve real-world problems.</p>
            </div>
          </div>
          <div className={styles.neonCard} style={{ '--moon-clr': 'rgb(1, 1, 1)' } as React.CSSProperties}>
            <div className={styles.neonCardContent}>
              <Zap size={40} />
              <h2>Efficiency</h2>
              <p>Our goal is to eliminate congestion and create a frictionless experience that saves time, fuel, and resources for everyone.</p>
            </div>
          </div>
          <div className={styles.neonCard} style={{ '--moon-clr': 'rgb(159, 7, 18)' } as React.CSSProperties}>
            <div className={styles.neonCardContent}>
              <ShieldCheck size={40} />
              <h2>Safety & Reliability</h2>
              <p>From prioritizing emergency vehicles to ensuring 99.9% uptime, safety and reliability are at the heart of our engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={styles.neonCard}
              style={{ '--moon-clr': member.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.neonCardContent}>
                <div className={styles.teamMemberImage}>
                   <Image src={member.image} alt={member.name} width={150} height={150} />
                </div>
                <div className={styles.teamMemberDetails}>
                  <h2>{member.name}</h2>
                  <p>{member.role}<br/>{member.institution}</p>
                  <a href={`mailto:${member.email}`} className={styles.memberEmail}>{member.email}</a>
                </div>
                <div className={styles.socialLinks}>
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                  <a href={member.socials.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}