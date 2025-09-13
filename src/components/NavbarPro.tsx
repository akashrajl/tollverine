'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavbarPro.module.css';
import { LogIn, Sun, Moon, Rocket, Settings, LogOut, Linkedin, Twitter, Instagram, Github, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useTheme } from '@/context/ThemeContext';

const DiscordIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.36981C18.847 3.15781 17.107 2.24981 15.207 1.74981C15.157 1.84981 15.097 1.94981 15.047 2.04981C13.257 1.61081 11.397 1.61081 9.60703 2.04981C9.55703 1.94981 9.49703 1.84981 9.44703 1.74981C7.54703 2.24981 5.80703 3.15781 4.33703 4.36981C1.58703 8.12881 1.25703 12.0138 2.04703 15.7328C3.80703 18.4108 6.70703 20.0158 9.60703 20.7498C9.94703 20.9168 10.297 21.0588 10.647 21.1998C10.747 21.1328 10.847 21.0658 10.947 20.9998C11.137 20.8528 11.317 20.6928 11.487 20.5328C11.567 20.4568 11.647 20.3798 11.717 20.3028C11.667 20.2778 11.617 20.2528 11.567 20.2228C10.197 19.5828 8.99703 18.6138 8.04703 17.3828C8.04703 17.3828 7.97703 17.2998 7.90703 17.2168C10.197 18.1068 12.637 18.1068 14.927 17.2168C14.857 17.2998 14.787 17.3828 14.787 17.3828C13.837 18.6138 12.637 19.5828 11.267 20.2228C11.217 20.2528 11.167 20.2778 11.117 20.3028C11.187 20.3798 11.267 20.4568 11.347 20.5328C11.517 20.6928 11.697 20.8528 11.887 20.9998C11.987 21.0658 12.087 21.1328 12.187 21.1998C12.537 21.0588 12.887 20.9168 13.227 20.7498C16.127 20.0158 19.027 18.4108 20.787 15.7328C21.577 12.0138 21.247 8.12881 18.497 4.36981H20.317ZM8.63703 14.0498C7.71703 14.0498 6.96703 13.1898 6.96703 12.1498C6.96703 11.1098 7.71703 10.2498 8.63703 10.2498C9.55703 10.2498 10.307 11.1098 10.307 12.1498C10.307 13.1898 9.55703 14.0498 8.63703 14.0498ZM14.207 14.0498C13.287 14.0498 12.537 13.1898 12.537 12.1498C12.537 11.1098 13.287 10.2498 14.207 10.2498C15.127 10.2498 15.877 11.1098 15.877 12.1498C15.867 13.1898 15.127 14.0498 14.207 14.0498Z"/></svg> );

const NavbarPro = () => {
  const { user, loading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try { await signOut(auth); } catch (error) { console.error("Error signing out:", error); }
  };

  const navLinks = (
    <>
      <Link href="/scanner" onClick={() => setMobileMenuOpen(false)}>Scanner</Link>
      <Link href="/product" onClick={() => setMobileMenuOpen(false)}>Product</Link>
      <Link href="/demo" onClick={() => setMobileMenuOpen(false)}>Demo</Link>
      <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
    </>
  );

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.dynamicIsland}>
          <div className={styles.left}>
            <Link href="/" className={styles.logoContainer}>
              <Image src="/logo.png" alt="Tollverine Logo" width={40} height={40} unoptimized={true} />
              <h1 className={styles.logoText}>Tollverine</h1>
            </Link>
          </div>

          <div className={styles.centerIsland}>
            {navLinks}
          </div>

          <div className={styles.right}>
            <div className={styles.socialIcons}>
              <a href="https://discord.com/users/1086530904794611823" target="_blank" rel="noopener noreferrer"><DiscordIcon /></a>
              <a href="https://instagram.com/akashrajl._" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
              <a href="https://x.com/akashrajl_" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
              <a href="https://www.linkedin.com/in/akashrajl/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="https://github.com/akashrajl" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
            </div>

            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
            </button>
            
            <AnimatePresence mode="wait">
              {!loading && ( user ? (
                <motion.div 
                  key="profile" 
                  ref={profileRef}
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.8 }} 
                  className={styles.profileWrapper} 
                >
                  <button 
                    className={styles.profileButton}
                    onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
                  >
                    <Image src={user.photoURL || "/default-avatar.png"} alt="Profile" width={40} height={40} className={styles.profileImage} />
                  </button>
                  {isProfileMenuOpen && (
                    <div className={styles.profileMenu}>
                      <Link href="/settings"><Settings size={18}/> Settings</Link>
                      <button onClick={handleLogout} className={styles.logoutButton}><LogOut size={18}/> Logout</button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div key="auth-buttons" className={styles.authButtons}>
                  <Link href="/login"><button className={styles.loginButton}><LogIn size={20} /> Login</button></Link>
                  <Link href="/signup"><button className={styles.getStartedButton}><Rocket size={20} /> Get Started</button></Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className={styles.mobileMenuButton}>
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className={styles.mobileNavLinks}>
              {navLinks}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarPro;