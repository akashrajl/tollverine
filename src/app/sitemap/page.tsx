import styles from '../info/InfoPage.module.css';
import Link from 'next/link';

const siteLinks = [
  { href: "/", title: "Homepage" },
  { href: "/product", title: "Product & Technology" },
  { href: "/demo", title: "Live Demo" },
  { href: "/about", title: "About Us" },
  { href: "/contact", title: "Contact" },
  { href: "/faq", title: "FAQ" },
  { href: "/privacy-policy", title: "Privacy Policy" },
  { href: "/terms-of-service", title: "Terms of Service" },
  { href: "/press-kit", title: "Press Kit" },
  { href: "/careers", title: "Careers" },
];

export default function SitemapPage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Sitemap</h1>
        <p className={styles.subtitle}>Find all pages on our website at a glance.</p>
      </header>
      <div className={styles.content}>
        <ul className={styles.sitemapList}>
          {siteLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}