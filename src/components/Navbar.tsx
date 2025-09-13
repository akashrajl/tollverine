'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContent}`}>
        <div className={styles.logoText}>
          Tollverine
        </div>
        <nav className={styles.navLinks}>
          <Link href="#problem">The Problem</Link>
          <Link href="#solution">Our Solution</Link>
          <Link href="#features">Features</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;