'use client';
import { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';
import { Phone, Mail, MapPin, Linkedin, Github, Instagram, MessageCircle, Twitter } from 'lucide-react';

const contactDetails = [
  { icon: Phone, text: '+91 82483 07259', href: 'tel:+918248307259' },
  { icon: Mail, text: 'tollverine@gmail.com', href: 'mailto:tollverine@gmail.com' },
  { icon: MapPin, text: 'Chennai, India', href: '#' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/akashrajl' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/akashrajl/' },
  { icon: Instagram, href: 'https://instagram.com/akashrajl._' },
  { icon: Twitter, href: 'https://x.com/akashrajl_' },
];

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xrbazjdn");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      const timer = setTimeout(() => {
        // Reload the page after 3 seconds
        window.location.reload();
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [state.succeeded]);


  return (
    <main className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <TypewriterHeading text="Get in Touch" className={styles.heroTitle} />
        <p className={styles.heroSubtitle}>
          We’re here to answer any questions you may have about our technology. Reach out to us and we’ll respond as soon as we can.
        </p>
      </section>

      <section className={styles.contactSection}>
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Contact Information</h2>
          <p>Fill up the form and our team will get back to you within 24 hours.</p>
          <ul className={styles.detailsList}>
            {contactDetails.map((item, index) => (
              <li key={index}>
                <item.icon size={20} />
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
          <div className={styles.socials}>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.contactFormWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form id="contact-form" onSubmit={handleSubmit} className={styles.contactForm}>
            <h2>Leave a message!</h2>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button 
              type="submit" 
              disabled={state.submitting || isSubmitted} 
              className={`${styles.submitButton} ${isSubmitted ? styles.submitted : ''}`}
            >
              {isSubmitted ? 'Message Delivered!' : (state.submitting ? 'Sending...' : 'Send Message')}
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}