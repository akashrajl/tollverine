'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { Mail, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const GoogleIcon = () => (
  <svg className={styles.googleIcon} viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.16H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.84l3.66-2.75z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.16l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for the error message

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const redirectUrl = sessionStorage.getItem('redirectAfterLogin') || '/';
      sessionStorage.removeItem('redirectAfterLogin');
      router.push(redirectUrl);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      toast.error("Failed to sign in with Google.");
    }
  };
  
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error on new submission
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const redirectUrl = sessionStorage.getItem('redirectAfterLogin') || '/';
      sessionStorage.removeItem('redirectAfterLogin');
      router.push(redirectUrl);
    } catch (err: any) {
      console.error("Error signing in:", err);
      // Set the specific error message based on the Firebase error code
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Incorrect email or password. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleEmailLogin}>
          <div className={styles.inputGroup}>
            <Mail />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <Lock />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <div className={styles.actions}>
            <Link href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</Link>
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
        <div className={styles.orSeparator}>
          <span>OR</span>
        </div>
        <button className={styles.googleButton} onClick={handleGoogleLogin}>
          <GoogleIcon /> Sign in with Google
        </button>
        <p className={styles.redirectText}>
          New user? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </main>
  );
}