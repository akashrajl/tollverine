import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <p>&copy; {new Date().getFullYear()} Tollverine. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;