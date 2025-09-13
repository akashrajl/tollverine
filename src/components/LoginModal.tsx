'use client';
import styles from './LoginModal.module.css';
import { LogIn, UserPlus, X } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const LoginModal = ({ onClose, onLoginClick, onSignupClick }: LoginModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}><X size={24} /></button>
        <h2>Authentication Required</h2>
        <p>Please log in or create an account to use this feature and access your analysis history.</p>
        <div className={styles.buttonGroup}>
          <button onClick={onLoginClick} className={styles.loginButton}>
            <LogIn size={20} /> Login
          </button>
          <button onClick={onSignupClick} className={styles.signupButton}>
            <UserPlus size={20} /> Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;