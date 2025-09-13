'use client';
import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (outlineRef.current) {
          const newX = lastX + (clientX - lastX) * 0.2;
          const newY = lastY + (clientY - lastY) * 0.2;
          outlineRef.current.style.left = `${newX}px`;
          outlineRef.current.style.top = `${newY}px`;
          lastX = newX;
          lastY = newY;
        }
      });
      
      // Check if the element being hovered over is clickable
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        outlineRef.current?.classList.add(styles.hovered);
      } else {
        outlineRef.current?.classList.remove(styles.hovered);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.cursorDot} />
      <div ref={outlineRef} className={styles.cursorOutline} />
    </>
  );
};

export default Cursor;