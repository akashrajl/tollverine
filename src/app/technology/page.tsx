'use client';
import { motion, Variants } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';
import { ArrowDown, CheckCircle, XCircle, ChevronRight, CornerDownRight } from 'lucide-react';
import styles from './Technology.module.css';

// Data structure for the technology flow
const flowData = [
  { step: "Vehicle Approaches Toll", tech: "CCTV/Camera Feed (OpenCV)", type: 'process' },
  { step: "Image/Frame Captured", tech: "Computer Vision (OpenCV)", type: 'process' },
  { step: "Vehicle Detection", tech: "YOLOv8 (Object Detection)", type: 'process' },
  { step: "Classify Vehicle Type (2W/3W/4W)", tech: "Deep Learning Model (YOLO classes)", type: 'process' },
  { step: "Emergency Check", tech: "YOLO + Emergency Classifier", type: 'decision' },
  { step: "Gate Opens (No Charge)", tech: "Relay + IoT Actuator", type: 'success', decision_path: 'true' },
  { step: "License Plate Detection", tech: "YOLO (License Plate Model)", type: 'process', decision_path: 'false' },
  { step: "OCR Recognition", tech: "EasyOCR (Text Extraction)", type: 'process' },
  { step: "Format Validation", tech: "Regex Validation", type: 'process' },
  { step: "Duplicate Check (last 12 hrs)", tech: "Database (Pandas/CSV/SQL)", type: 'process' },
  { step: "Stolen Vehicle Check", tech: "Cross-match with Stolen Vehicles DB", type: 'decision' },
  { step: "Block Gate + Send Alert", tech: "SMTP Mail (Python + Gmail API)", type: 'fail', decision_path: 'true' },
  { step: "Deduct Toll Amount via UPI", tech: "UPI Payment Gateway Integration", type: 'process', decision_path: 'false' },
  { step: "Transaction Logging", tech: "CSV/Database (Pandas)", type: 'process' },
  { step: "Gate Opens", tech: "IoT Controller (Servo/Motor with RPi)", type: 'success' },
  { step: "Monitoring Dashboard Update", tech: "Frontend (Next.js + API)", type: 'process' }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TechnologyPage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <TypewriterHeading text="The Tollverine Architecture" className={styles.title} />
        <p className={styles.subtitle}>
          A detailed, step-by-step breakdown of the technology stack and data flow that powers our intelligent tolling system.
        </p>
      </header>

      <section className={styles.flowSection}>
        <div className={styles.timelineTitle}>The Whole Tollverine Flow</div>
        <div className={styles.timeline}>
          {flowData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`${styles.timelineItem} ${isLeft ? styles.leftItem : styles.rightItem}`}>
                <motion.div
                  className={`${styles.flowCard} ${styles[item.type]}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.cardContent}>
                    <span className={styles.stepTitle}>{item.step}</span>
                    <span className={styles.techUsed}>{item.tech}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}