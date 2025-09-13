'use client';
import { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import styles from './WebcamFeed.module.css';
import { Camera, X } from 'lucide-react';

interface WebcamFeedProps {
  onCapture: (imageSrc: string) => void;
  onClose: () => void;
}

const WebcamFeed = ({ onCapture, onClose }: WebcamFeedProps) => {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        onCapture(imageSrc);
      }
    }
  }, [webcamRef, onCapture]);

  return (
    <div className={styles.overlay}>
      <div className={styles.webcamContainer}>
        <button onClick={onClose} className={styles.closeButton}><X size={24} /></button>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className={styles.webcam}
          videoConstraints={{ facingMode: 'environment' }}
        />
        <button onClick={capture} className={styles.captureButton}>
          <Camera size={24} /> Capture & Analyze
        </button>
      </div>
    </div>
  );
};

export default WebcamFeed;