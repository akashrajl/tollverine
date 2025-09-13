'use client';
import { useState } from 'react';
import styles from './Accordion.module.css';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ChevronDown 
          className={styles.chevron} 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;