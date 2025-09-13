'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Settings.module.css';
import { useAuth } from '@/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import LogoutModal from '@/components/LogoutModal';
import { User, Mail, Shield, LogOut, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsModalOpen(false);
      router.push('/'); // Redirect to homepage after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // If loading, show a spinner or placeholder
  if (loading) {
    return <div className={styles.loadingState}>Loading...</div>;
  }

  // If not logged in, show a message and prompt to go home
  if (!user) {
    return (
      <main className={styles.pageContainer}>
        <div className={styles.accessDenied}>
          <h2>Access Denied</h2>
          <p>You must be logged in to view this page.</p>
          <button onClick={() => router.push('/')} className={styles.homeButton}>
            Go to Homepage
          </button>
        </div>
      </main>
    );
  }

  // If logged in, show the settings page
  return (
    <>
      <main className={styles.pageContainer}>
        <div className={styles.settingsHeader}>
          <h1>Account Settings</h1>
          <p>Manage your account details and preferences.</p>
        </div>

        <div className={styles.settingsGrid}>
          {/* Profile Card */}
          <div className={styles.profileCard}>
            <Image 
              src={user.photoURL || '/default-avatar.png'} 
              alt={user.displayName || 'User'} 
              width={100} 
              height={100}
              className={styles.profileImage}
            />
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
          </div>

          {/* Settings Actions */}
          <div className={styles.actionsCard}>
            <div className={styles.actionItem}>
              <div>
                <h3>Account</h3>
                <p>Manage your profile and sign-out settings.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className={styles.logoutButton}>
                <LogOut size={20} /> Logout
              </button>
            </div>
            <div className={styles.actionItem}>
              <div>
                <h3>Delete Account</h3>
                <p>Permanently delete your account and all associated data.</p>
              </div>
              <button className={styles.deleteButton}>
                <Trash2 size={20} /> Delete
              </button>
            </div>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <LogoutModal 
          onConfirm={handleLogout}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}