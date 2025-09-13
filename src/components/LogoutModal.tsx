'use client';
import styles from './LogoutModal.module.css';

interface LogoutModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal = ({ onConfirm, onCancel }: LogoutModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to sign out?</p>
        <div className={styles.buttonGroup}>
          <button onClick={onCancel} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;