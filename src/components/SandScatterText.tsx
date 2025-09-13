'use client';
import { useRef } from 'react';
import styles from '@/app/Home.module.css';

interface SandScatterTextProps { text: string; }

const SandScatterText = ({ text }: SandScatterTextProps) => {
  const letters = text.split('');
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  letterRefs.current = letters.map((_, i) => letterRefs.current[i] ?? null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    letterRefs.current.forEach((ref) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);
      if (distance < 100) {
        const scatterX = -x * (1 - distance / 100);
        const scatterY = -y * (1 - distance / 100);
        ref.style.transform = `translate(${scatterX}px, ${scatterY}px)`;
        ref.style.opacity = `${distance / 100}`;
      } else {
        ref.style.transform = `translate(0px, 0px)`;
        ref.style.opacity = '1';
      }
    });
  };

  const handleMouseLeave = () => {
    letterRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.transform = `translate(0px, 0px)`;
        ref.style.opacity = '1';
      }
    });
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={styles.headingContainer}>
      {letters.map((letter, index) => (
        <span key={index} ref={(el) => { letterRefs.current[index] = el; }} className={styles.headingLetter}>
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};
export default SandScatterText;