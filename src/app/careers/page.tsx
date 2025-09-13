import styles from '../info/InfoPage.module.css';

const openPositions = [
  { title: "Senior AI Engineer", location: "Remote / Chennai, India" },
  { title: "Hardware Integration Specialist", location: "Chennai, India" },
  { title: "Cloud Infrastructure Developer", location: "Remote" }
];

export default function CareersPage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Join Our Team</h1>
        <p className={styles.subtitle}>Help us build the future of intelligent transportation.</p>
      </header>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Work With Us?</h2>
          <p>At Tollverine, you&apos;ll be part of a small, agile team working on cutting-edge technology that has a real-world impact. We value innovation, collaboration, and a passion for solving complex challenges. If you&apos;re driven to build systems that improve society, you&apos;ll feel right at home.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Open Positions</h2>
          {openPositions.map((job, index) => (
            <div key={index} className={styles.jobListing}>
              <div>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
              </div>
              <a 
                href="https://www.linkedin.com/in/akashrajl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.button}
              >
                Apply
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
