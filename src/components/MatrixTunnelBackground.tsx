'use client';
import { useEffect, useRef, useCallback } from 'react';
import styles from './MatrixTunnelBackground.module.css';

const MatrixTunnelBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number) => {
    const characters = ' tollverine 0110 自動車 אמבולנס سيارة إسعاف รถพยาบาล KA-01-AB-1234 MH-12-XY-9876 TN-99-F-0001 AP-39-G-5555 DL-3C-AR-3452 ';
    const fontSize = 14;
    const columns = Math.floor(ctx.canvas.width / fontSize);
    const drops = Array.from({ length: columns }).map(() => 1);

    ctx.fillStyle = 'rgba(5, 5, 5, 0.04)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * fontSize, (drops[i] as number) * fontSize);

      if ((drops[i] as number) * fontSize > ctx.canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      (drops[i] as number)++;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className={styles.matrixCanvas} />;
};

export default MatrixTunnelBackground;