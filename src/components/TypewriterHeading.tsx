'use client';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  className?: string;
}

const TypewriterHeading = ({ text, className }: TypewriterProps) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      className={className}
      style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};
export default TypewriterHeading;