'use client';
import { useEffect, useState } from 'react';
import styles from './BackToTopButton.module.css';
import { ArrowUpCircle } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
    >
      <ArrowUpCircle size={32} />
    </button>
  );
};

export default BackToTopButton;