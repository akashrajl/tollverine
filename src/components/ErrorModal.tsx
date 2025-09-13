'use client';
import styles from './ErrorModal.module.css';
import { AlertTriangle, X } from 'lucide-react';

interface ErrorModalProps {
  error: Error;
  onClose: () => void;
}

const ErrorModal = ({ error, onClose }: ErrorModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}><X size={24} /></button>
        <div className={styles.header}>
          <AlertTriangle size={40} className={styles.icon} />
          <h2>Application Error</h2>
        </div>
        <div className={styles.errorDetails}>
          <h3>An unexpected error has occurred.</h3>
          <p className={styles.errorMessage}>{error.message}</p>
          <pre className={styles.stackTrace}>
            {error.stack}
          </pre>
        </div>
        <p className={styles.footerText}>
          Try refreshing the page, or check the developer console for more details.
        </p>
      </div>
    </div>
  );
};

export default ErrorModal;