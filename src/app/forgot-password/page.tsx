'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from '@formspree/react';
import styles from './ForgotPassword.module.css';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ForgotPasswordPage() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  if (state.succeeded) {
    toast.success("Password reset email sent! Please check your inbox.");
  }

  return (
    <main className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Forgot Password</h1>
        <p className={styles.subtitle}>Enter your email or username below, and we&apos;ll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <Mail />
            <input type="email" name="email" placeholder="Email or Username" required />
          </div>
          <button type="submit" disabled={state.submitting} className={styles.submitButton}>
            Submit
          </button>
        </form>
        <p className={styles.redirectText}>
          Remember your password? <Link href="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
}
