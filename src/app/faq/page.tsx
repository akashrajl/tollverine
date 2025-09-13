'use client';
import styles from './FAQ.module.css';
import TypewriterHeading from '@/components/TypewriterHeading';
import Accordion from '@/components/Accordion';
import Link from 'next/link';

const faqData = [
  // Existing Questions
  {
    question: "What is Tollverine?",
    answer: "Tollverine is an AI-powered automated tolling system designed to eliminate traffic congestion at toll plazas. It uses advanced technologies like YOLO and ANPR to detect vehicles, recognize license plates, and process payments without any human intervention."
  },
  {
    question: "How does the Emergency Vehicle Priority System work?",
    answer: "Our system has a dedicated module that detects the unique light and siren patterns of emergency vehicles like ambulances. Upon detection, it automatically opens the toll gate, granting them immediate and unconditional passage to save critical time."
  },
  {
    question: "What kind of hardware is required?",
    answer: "Tollverine is designed to be efficient and accessible. The entire AI model can run on low-cost, on-site hardware such as a Raspberry Pi, connected to standard high-speed cameras. This edge computing approach ensures real-time processing and reduces dependency on constant cloud connectivity."
  },
  {
    question: "Is my payment and vehicle data secure?",
    answer: "Absolutely. All data, including vehicle information and payment transactions, is encrypted both in transit and at rest. We adhere to strict data privacy and security standards to ensure your information is always protected."
  },
  {
    question: "How are tolls paid?",
    answer: "The system links a vehicle's recognized license plate to a pre-registered user account or digital wallet. The toll amount is automatically deducted, creating a seamless and cashless payment experience. We are also developing integrations for unregistered users via post-trip invoicing."
  },
  // New Questions
  {
    question: "What is ANPR?",
    answer: "ANPR stands for Automated Number Plate Recognition. It's a technology that uses optical character recognition (OCR) on images to read vehicle registration plates to create vehicle location data."
  },
  {
    question: "What is YOLOv8?",
    answer: "YOLOv8 is the latest version of the 'You Only Look Once' real-time object detection model. We use it for its exceptional speed and accuracy in identifying vehicles and license plates from a video feed."
  },
  {
    question: "Does the system work at night or in bad weather?",
    answer: "Yes. The system is designed to be operational 24/7. It utilizes infrared (IR) cameras and advanced image processing algorithms to ensure high accuracy even in low-light conditions, rain, or fog."
  },
  {
    question: "What happens if the system cannot read my license plate?",
    answer: "In the rare event that a license plate cannot be read automatically, the system flags the transit for a manual review. We are also exploring alternative identification methods for such cases."
  },
  {
    question: "How do I register for an account?",
    answer: "You can register for an account directly through our website by signing up and linking your vehicle's license plate and a preferred payment method."
  },
  {
    question: "Can I use Tollverine without an account?",
    answer: "While having a registered account provides the most seamless experience, we are working on a system for unregistered users where a bill can be sent to the vehicle's registered owner based on the license plate data."
  },
  {
    question: "What types of vehicles can the system detect?",
    answer: "The AI model is trained to accurately detect and classify a wide range of vehicles, including motorcycles (2W), auto-rickshaws (3W), cars, SUVs, buses, and various classes of trucks (4W+)."
  },
  {
    question: "How is the toll amount calculated?",
    answer: "The toll amount is calculated automatically based on the vehicle class identified by the AI system, according to the rules and pricing set by the toll authority."
  },
  {
    question: "What happens if a stolen vehicle passes through?",
    answer: "Our system can be integrated with a database of stolen vehicles. If a match is found, it can automatically trigger an alert to the relevant authorities and potentially block the gate."
  },
  {
    question: "What is 'Edge Computing' and why is it important?",
    answer: "Edge computing means that the AI processing happens on-site at the toll plaza itself, rather than sending video data to a distant cloud server. This drastically reduces latency (delay), allowing for near-instantaneous decision-making, and ensures the system can function even if the internet connection is unstable."
  },
  {
    question: "Is there a mobile app?",
    answer: "A dedicated mobile app is currently under development. It will allow users to manage their accounts, view transaction history, and receive real-time notifications."
  },
  {
    question: "How does Tollverine help the environment?",
    answer: "By eliminating the need for vehicles to stop and idle at toll plazas, Tollverine significantly reduces fuel consumption and lowers carbon emissions, contributing to cleaner air."
  },
  {
    question: "Can this technology be used for more than just tolls?",
    answer: "Yes. The core technology can be adapted for various applications, including smart parking management, automated entry/exit for secure facilities, and traffic flow analysis for smart cities."
  },
  {
    question: "How accurate is the vehicle classification?",
    answer: "Our YOLOv8-based model achieves over 99% accuracy in classifying common vehicle types under a wide range of conditions."
  },
  {
    question: "What payment methods are supported?",
    answer: "We primarily integrate with UPI for seamless transactions. Support for other digital wallets, credit/debit cards, and FASTag is planned for future updates."
  },
  {
    question: "Who is the target customer for Tollverine?",
    answer: "Our primary customers are toll road operators, government transportation agencies, and private infrastructure companies looking to modernize their systems, improve efficiency, and reduce operational costs."
  },
  {
    question: "How long does it take to install the Tollverine system?",
    answer: "Installation is designed to be minimally disruptive. A standard installation on an existing toll lane can typically be completed within 24-48 hours."
  },
  {
    question: "What is OpenCV?",
    answer: "OpenCV (Open Source Computer Vision Library) is a library of programming functions mainly aimed at real-time computer vision. We use it for initial image and video stream processing."
  },
  {
    question: "How do I get a receipt for my toll payment?",
    answer: "Digital receipts for all transactions are automatically sent to your registered email address and will also be available for download in your account dashboard and the future mobile app."
  },
  {
    question: "What if I sell my vehicle?",
    answer: "You can easily remove a vehicle from your Tollverine account through your dashboard. It is the user's responsibility to keep their vehicle information up to date."
  }
];

export default function FAQPage() {
  return (
    <main className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <TypewriterHeading text="Frequently Asked Questions" className={styles.heroTitle} />
        <p className={styles.heroSubtitle}>
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
        </p>
      </section>

      <section className={styles.faqList}>
        {faqData.map((item, index) => (
          <Accordion key={index} question={item.question} answer={item.answer} />
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Still have questions?</h2>
        <p>Our team is here to help. Get in touch with us for more detailed information.</p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Us
        </Link>
      </section>
    </main>
  );
}