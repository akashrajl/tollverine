'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './StarryNightBackground.module.css';

interface StarryNightBackgroundProps {
  children: React.ReactNode;
}

const StarryNightBackground: React.FC<StarryNightBackgroundProps> = ({ children }) => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const particlesContainer = particlesContainerRef.current;
    if (!particlesContainer) return;

    const particleCount = 80;

    const resetParticle = (particle: HTMLElement) => {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      return { x: posX, y: posY };
    };

    const animateParticle = (particle: HTMLElement) => {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    };

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    };

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 60;
      const y = (clientY / innerHeight - 0.5) * 60;
      setParallaxOffset({ x, y });

      const mouseX = (clientX / innerWidth) * 100;
      const mouseY = (clientY / innerHeight) * 100;
      const sparkle = document.createElement('div');
      sparkle.className = styles.particle;
      const size = Math.random() * 4 + 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${mouseX}%`;
      sparkle.style.top = `${mouseY}%`;
      sparkle.style.opacity = '0.6';
      sparkle.style.pointerEvents = 'none';
      particlesContainer.appendChild(sparkle);

      setTimeout(() => {
        sparkle.style.transition = 'all 2s ease-out';
        sparkle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        sparkle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        sparkle.style.opacity = '0';
        setTimeout(() => {
          sparkle.remove();
        }, 2000);
      }, 10);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div className={styles.gradientBackground}>
        <div
          className={`${styles.parallaxLayer} ${styles.layer1}`}
          style={{ transform: `translate(${parallaxOffset.x / 4}px, ${parallaxOffset.y / 4}px)` }}
        ></div>
        <div
          className={`${styles.parallaxLayer} ${styles.layer2}`}
          style={{ transform: `translate(${parallaxOffset.x / 2}px, ${parallaxOffset.y / 2}px)` }}
        ></div>
        <div className={`${styles.gradientSphere} ${styles.sphere1}`}></div>
        <div className={`${styles.gradientSphere} ${styles.sphere2}`}></div>
        <div className={`${styles.gradientSphere} ${styles.sphere3}`}></div>
        <div className={styles.glow}></div>
        <div className={styles.gridOverlay}></div>
        <div className={styles.noiseOverlay}></div>
        <div className={styles.particlesContainer} ref={particlesContainerRef}></div>
      </div>

      <div className="content-wrapper">
        {children}
      </div>
    </>
  );
};

export default StarryNightBackground;