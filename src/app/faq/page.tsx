import styles from './FAQ.module.css';
import TypewriterHeading from '@/components/TypewriterHeading';
import Accordion from '@/components/Accordion';
import Link from 'next/link';

const faqData = [
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
  }
];

export default function FAQPage() {
  return (
    <main className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <TypewriterHeading text="Frequently Asked Questions" className={styles.heroTitle} />
        <p className={styles.heroSubtitle}>
          Have questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact our support team.
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
