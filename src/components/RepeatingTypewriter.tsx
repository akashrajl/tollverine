'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface RepeatingTypewriterProps {
  text: string;
  className?: string;
}

const RepeatingTypewriter = ({ text, className }: RepeatingTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };
    const timeoutId = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, text]);

  return (
    <p className={className}>
      {displayedText}
      <motion.span
        style={{ borderLeft: '2px solid white', marginLeft: '2px' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </p>
  );
};
export default RepeatingTypewriter;