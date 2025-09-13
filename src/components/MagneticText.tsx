'use client';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/app/Home.module.css'; // Import styles from the home page

interface MagneticTextProps {
  text: string;
}

const MagneticText = ({ text }: MagneticTextProps) => {
  const letters = text.split('');
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  letterRefs.current = letters.map((_, i) => letterRefs.current[i] ?? null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    letterRefs.current.forEach((ref) => {
      if (!ref) return;
      const letterRect = ref.getBoundingClientRect();
      const letterCenterX = letterRect.left + letterRect.width / 2;
      const letterCenterY = letterRect.top + letterRect.height / 2;
      const distance = Math.sqrt(Math.pow(e.clientX - letterCenterX, 2) + Math.pow(e.clientY - letterCenterY, 2));
      if (distance < 100) {
        const dx = e.clientX - letterCenterX;
        const dy = e.clientY - letterCenterY;
        ref.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
      } else {
        ref.style.transform = `translate(0px, 0px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    letterRefs.current.forEach((ref) => {
      if (ref) ref.style.transform = `translate(0px, 0px)`;
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.headingContainer}
    >
      <AnimatePresence>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            ref={(el) => { letterRefs.current[index] = el; }}
            className={styles.headingLetter}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: 'circOut' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MagneticText;