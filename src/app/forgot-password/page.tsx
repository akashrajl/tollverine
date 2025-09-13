'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './ForgotPassword.module.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Please check your inbox.");
    } catch (error) {
      const err = error; // Cast error to any to access code property
      console.error("Error sending password reset email:", err);
      if (err.code === 'auth/user-not-found') {
        toast.error("No user found with this email address.");
      } else {
        toast.error("Failed to send reset email. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Forgot Password</h1>
        <p className={styles.subtitle}>Enter your email address below, and we&apos;ll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <Mail />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
        <p className={styles.redirectText}>
          Remember your password? <Link href="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
}
