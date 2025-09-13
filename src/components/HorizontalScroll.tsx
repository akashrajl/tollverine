'use client';
import { ReactNode } from 'react';
import styles from './HorizontalScroll.module.css';

const HorizontalScroll = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollTrack}>
        {/* We render the children twice for a seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;