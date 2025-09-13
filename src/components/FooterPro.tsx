'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './FooterPro.module.css';
import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';
import { User, Phone, Mail, MessageCircle, Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const DiscordIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.36981C18.847 3.15781 17.107 2.24981 15.207 1.74981C15.157 1.84981 15.097 1.94981 15.047 2.04981C13.257 1.61081 11.397 1.61081 9.60703 2.04981C9.55703 1.94981 9.49703 1.84981 9.44703 1.74981C7.54703 2.24981 5.80703 3.15781 4.33703 4.36981C1.58703 8.12881 1.25703 12.0138 2.04703 15.7328C3.80703 18.4108 6.70703 20.0158 9.60703 20.7498C9.94703 20.9168 10.297 21.0588 10.647 21.1998C10.747 21.1328 10.847 21.0658 10.947 20.9998C11.137 20.8528 11.317 20.6928 11.487 20.5328C11.567 20.4568 11.647 20.3798 11.717 20.3028C11.667 20.2778 11.617 20.2528 11.567 20.2228C10.197 19.5828 8.99703 18.6138 8.04703 17.3828C8.04703 17.3828 7.97703 17.2998 7.90703 17.2168C10.197 18.1068 12.637 18.1068 14.927 17.2168C14.857 17.2998 14.787 17.3828 14.787 17.3828C13.837 18.6138 12.637 19.5828 11.267 20.2228C11.217 20.2528 11.167 20.2778 11.117 20.3028C11.187 20.3798 11.267 20.4568 11.347 20.5328C11.517 20.6928 11.697 20.8528 11.887 20.9998C11.987 21.0658 12.087 21.1328 12.187 21.1998C12.537 21.0588 12.887 20.9168 13.227 20.7498C16.127 20.0158 19.027 18.4108 20.787 15.7328C21.577 12.0138 21.247 8.12881 18.497 4.36981H20.317ZM8.63703 14.0498C7.71703 14.0498 6.96703 13.1898 6.96703 12.1498C6.96703 11.1098 7.71703 10.2498 8.63703 10.2498C9.55703 10.2498 10.307 11.1098 10.307 12.1498C10.307 13.1898 9.55703 14.0498 8.63703 14.0498ZM14.207 14.0498C13.287 14.0498 12.537 13.1898 12.537 12.1498C12.537 11.1098 13.287 10.2498 14.207 10.2498C15.127 10.2498 15.877 11.1098 15.877 12.1498C15.867 13.1898 15.127 14.0498 14.207 14.0498Z"/></svg> );

const FooterPro = () => {
  const [state, handleSubmit] = useForm("xrbazjdn");
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Simulate fetching and incrementing view count on client side
    const currentViews = parseInt(sessionStorage.getItem('siteViews') || '10234');
    const newViews = currentViews + 1;
    sessionStorage.setItem('siteViews', newViews.toString());
    setViews(newViews);
  }, []);

  if (state.succeeded) {
      toast.success('Message sent! We will get back to you soon.');
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) form.reset();
      state.succeeded = false; 
  }

  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.aboutColumn}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="Tollverine Logo" width={50} height={50} unoptimized />
            <h3>Tollverine</h3>
          </div>
          <p>An innovative solution for modern transportation, leveraging AI to create a seamless and efficient tolling experience for everyone.</p>
        </div>

        <div className={styles.companyColumn}>
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/purpose">Purpose</a></li> {/* <-- Updated Link */}
            <li><a href="/research">Research</a></li>
          </ul>
        </div>
        <div className={styles.supportColumn}>
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className={styles.resourcesColumn}>
          <h4>Resources</h4>
          <ul>
            <li><a href="/press-kit">Press Kit</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
        <div className={styles.contactColumn}>
          <h4>Contact</h4>
          <ul className={styles.contactList}>
            <li><User size={16} /> Akash Raj L</li>
            <li><Phone size={16} /> +91 82483 07259</li>
            <li><Mail size={16} /> tollverine@gmail.com</li>
          </ul>
        </div>

        <div className={styles.socialsColumn}>
          <h4>Socials</h4>
          <ul className={styles.socialList}>
            <li><a href="https://discord.com/users/1086530904794611823" target="_blank" rel="noopener noreferrer"><DiscordIcon /> Discord</a></li>
            <li><a href="https://instagram.com/akashrajl._" target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a></li>
            <li><a href="https://x.com/akashrajl_" target="_blank" rel="noopener noreferrer"><Twitter size={16} /> Twitter (X)</a></li>
            <li><a href="https://www.linkedin.com/in/akashrajl/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a></li>
            <li><a href="https://github.com/akashrajl" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a></li>
            <li><a href="https://wa.me/918248307259" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a></li>
          </ul>
        </div>

        <div className={styles.formColumn}>
          <h4>Ask a Query</h4>
          <form id="contact-form" onSubmit={handleSubmit} className={styles.contactForm}>
            <input id="email" type="email" name="email" placeholder="Your email address" required />
            <textarea id="message" name="message" placeholder="Your message" required></textarea>
            <button type="submit" disabled={state.submitting} className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>&copy; {new Date().getFullYear()} Tollverine. All Rights Reserved.</span>
        {views > 0 && <span className={styles.viewCounter}>Total Views: {views.toLocaleString()}</span>}
      </div>
    </footer>
  );
};

export default FooterPro;