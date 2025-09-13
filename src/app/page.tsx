'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { HeartPulse, Clock, Car, Ambulance, Shield, Wallet, Cpu, CheckCircle, Zap, Users, AlertTriangle, Download, Database, BarChart2, Cloud, History } from 'lucide-react';
import styles from './LandingPage.module.css';
import ieeeStyles from './IEEE.module.css';
import SandScatterText from '@/components/SandScatterText';
import TypewriterHeading from '@/components/TypewriterHeading';
import RepeatingTypewriter from '@/components/RepeatingTypewriter';
import TiltCard from '@/components/TiltCard';
import LoginModal from '@/components/LoginModal';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const featuresData = [
  { icon: Car, title: "Real-time Vehicle Detection", text: "Instantly identifies cars, buses, trucks, and ambulances using advanced YOLO models.", color: "#3b82f6" },
  { icon: Ambulance, title: "Priority Ambulance Recognition", text: "Confirms emergency status via light and siren detection for failsafe priority access.", color: "#ef4444" },
  { icon: Shield, title: "Automated Number Plate Recognition", text: "High-accuracy OCR for instant vehicle identification and tolling.", color: "#10b981" },
  { icon: Wallet, title: "Seamless Automated Payments", text: "Links license plates to user accounts for a fully human-less, cashless transaction.", color: "#f97316" },
  { icon: Cpu, title: "Edge Computing Ready", text: "Deploys on low-cost hardware like Raspberry Pi for real-time, on-site processing.", color: "#8b5cf6" },
  { icon: Zap, title: "24/7 All-Weather Operation", text: "Engineered to perform reliably in diverse lighting and weather conditions, ensuring constant uptime.", color: "#facc15" },
  { icon: Database, title: "Secure Data Management", text: "All transaction and vehicle data is encrypted and stored securely, ensuring privacy and integrity.", color: "#a855f7" },
  { icon: BarChart2, title: "Advanced Analytics", text: "Operators gain access to a dashboard with rich data visualizations on traffic patterns and revenue.", color: "#22c55e" },
  { icon: Cloud, title: "Cloud Integration", text: "Syncs data with cloud platforms for remote monitoring, and system updates.", color: "#0ea5e9" },
  { icon: History, title: "Duplicate Scan Prevention", text: "Our system intelligently logs each transit and prevents double-charging the same vehicle within a 12-hour window, ensuring fair and accurate billing.", color: "#ec4899" }
];

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleScanNowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user) {
      setShowLoginModal(true);
    } else {
      router.push('/scanner');
    }
  };

  const handleLoginRedirect = () => {
    sessionStorage.setItem('redirectAfterLogin', '/scanner');
    router.push('/login');
    setShowLoginModal(false);
  };

  const handleSignupRedirect = () => {
    sessionStorage.setItem('redirectAfterLogin', '/scanner');
    router.push('/signup');
    setShowLoginModal(false);
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <main className={styles.mainContent}>
        {/* --- SECTION 1: HERO --- */}
        <section className={styles.heroSection}>
          <div className={styles.content}>
            <div className={styles.heroTextContainer}>
              <SandScatterText text="Tollverine" />
            </div>
            <div className={styles.subheadlineContainer}>
              <RepeatingTypewriter text="Our AI-powered system grants immediate passage to ambulances while creating a seamless, automated toll experience for all vehicles." className={styles.subheadline}/>
            </div>
            <motion.div 
              className={styles.heroCtaGroup}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button onClick={handleScanNowClick} className={`${styles.ctaButton} ${styles.scanButton}`}>Scan Now</button>
              <Link href="/technology"><button className={styles.ctaButton}>See How It Works</button></Link>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2: THE PROBLEM --- */}
        <motion.section
          id="problem"
          className={styles.section}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.container}>
            <TypewriterHeading text="Time Saves Lives. Tolls Shouldn’t Delay." className={styles.sectionTitle} />
            <div className={styles.problemGrid}>
              <TiltCard><div className={styles.problemCard}><h3><HeartPulse size={28} color="#f87171" /> Critical Delays for Emergency Services</h3><p>Manual checks and traffic congestion at toll plazas can fatally postpone an ambulance&apos;s arrival at the hospital.</p></div></TiltCard>
              <TiltCard><div className={styles.problemCard}><h3><Clock size={28} color="#fb923c" /> Inefficient and Congested Tolls</h3><p>Long queues, cash handling, and manual errors lead to wasted fuel, increased travel time, and significant revenue leakage for operators.</p></div></TiltCard>
              <TiltCard><div className={styles.problemCard}><h3><Users size={28} color="#60a5fa" /> Poor User Experience</h3><p>Travelers face frustrating stops, confusing payment methods, and a lack of real-time traffic information, diminishing the overall journey.</p></div></TiltCard>
              <TiltCard><div className={styles.problemCard}><h3><AlertTriangle size={28} color="#facc15" /> Security Vulnerabilities</h3><p>Traditional systems are susceptible to toll evasion, vehicle theft, and lack the data needed for effective incident response.</p></div></TiltCard>
            </div>
          </div>
        </motion.section>

        {/* --- SECTION 3: THE SOLUTION --- */}
        <motion.section
          id="solution"
          className={styles.section}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.container}>
            <TypewriterHeading text="Introducing Tollverine: The Intelligent Solution" className={styles.sectionTitle} />
            <div className={styles.flowchart}>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.1}}>Vehicle Approaches</motion.div>
                <div className={styles.flowArrow}>→</div>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.2}}>AI Camera Scans & Identifies</motion.div>
                <div className={styles.flowArrow}>→</div>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.3}}>Emergency Vehicle? Gate Opens</motion.div>
                <div className={styles.flowArrow}>→</div>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.4}}>License Plate Verified</motion.div>
                <div className={styles.flowArrow}>→</div>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.5}}>Toll Billed Automatically</motion.div>
                <div className={styles.flowArrow}>→</div>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.6}}>Payment Confirmed</motion.div>
                <div className={styles.flowArrow}>→</div>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.7}}>Gate Opens for Vehicle</motion.div>
                <div className={styles.flowArrow}>→</div>
                <motion.div className={styles.flowStep} initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{delay: 0.8}}>Data Logged for Analytics</motion.div>
            </div>
            <Link href="/technology"><button className={styles.solutionCtaButton}>Explore the Technology</button></Link>
          </div>
        </motion.section>

        {/* --- SECTION 4: FEATURES --- */}
        <motion.section
          id="features"
          className={styles.section}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.container}>
            <TypewriterHeading text="Powered by a Multi-Layered AI Engine" className={styles.sectionTitle} />
            <div className={styles.featuresGrid}>
              {featuresData.map((feature, index) => (
                <TiltCard key={index}>
                  <div 
                    className={styles.featureCard} 
                    style={{'--card-accent-color': feature.color} as React.CSSProperties}
                  >
                    <h3><feature.icon size={24}/> {feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- SECTION 5: BENEFITS --- */}
        <motion.section
          className={styles.section}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.container}>
            <TypewriterHeading text="Reimagining Transport, Redefining Safety" className={styles.sectionTitle} />
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}><CheckCircle size={24} color="#34d399"/> Save Lives by reducing ambulance response times.</div>
              <div className={styles.benefitItem}><CheckCircle size={24} color="#34d399"/> Increase Efficiency by eliminating traffic queues.</div>
              <div className={styles.benefitItem}><CheckCircle size={24} color="#34d399"/> Enhance Security by helping recover stolen vehicles.</div>
              <div className={styles.benefitItem}><CheckCircle size={24} color="#34d399"/> Reduce Operational Costs through full automation.</div>
              <div className={styles.benefitItem}><CheckCircle size={24} color="#34d399"/> Improve User Satisfaction with a frictionless experience.</div>
              <div className={styles.benefitItem}><CheckCircle size={24} color="#34d399"/> Gain Actionable Insights from detailed traffic data.</div>
            </div>
          </div>
        </motion.section>

        {/* --- SECTION 6: FINAL CTA --- */}
        <motion.section
          className={styles.finalCta}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.container}>
            <TypewriterHeading text="Ready to See the Future of Toll Management?" className={`${styles.sectionTitle} ${styles.ctaTitle}`} />
            <div className={styles.ctaButtonGroup}>
              <Link href="/demo"><button className={styles.ctaButton}>Watch the Full Demo</button></Link>
              <Link href="/contact"><button className={styles.ctaButton} style={{backgroundColor: 'transparent', border: '1px solid white', color: 'white'}}>Contact Us for a Consultation</button></Link>
            </div>
          </div>
        </motion.section>

        {/* --- IEEE RESEARCH PAPER SECTION --- */}
        <motion.section
          className={ieeeStyles.paperSection}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={ieeeStyles.paperContainer}>
            <div className={ieeeStyles.logoColumn}>
              <Image src="/ieee_logo.png" alt="IEEE Logo" width={150} height={150} unoptimized={true} />
            </div>
            <div className={ieeeStyles.paperDetails}>
              <TypewriterHeading text="IEEE Published Research" className={ieeeStyles.paperTitle} />
              <p className={ieeeStyles.conferenceInfo}>
                <strong>GITCON 2025:</strong> IEEE Global Conference on Information Technology and Communication Networks
              </p>
              <p className={ieeeStyles.paperDescription}>
                Our foundational paper, &quot;Human-Less Toll Plaza Vehicle Recognition Using Deep Learning,&quot; was accepted for presentation at GITCON 2025, hosted at KLS Gogte Institute of Technology. This conference is a premier event for showcasing advancements in IT and networking, and our work highlights a significant contribution to intelligent transportation systems.
              </p>
              <div className={ieeeStyles.buttonGroup}>
                <a href="https://gitcon.in/" target="_blank" rel="noopener noreferrer" className={ieeeStyles.linkButton}>
                  Visit Conference Site
                </a>
                <a href="https://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer" className={ieeeStyles.linkButton}>
                  View in IEEE Xplore
                </a>
                <a href="/tollverine_research_paper.pdf" download className={ieeeStyles.downloadButton}>
                  <Download size={20} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLoginClick={handleLoginRedirect}
          onSignupClick={handleSignupRedirect} 
        />
      )}
    </>
  );
}
