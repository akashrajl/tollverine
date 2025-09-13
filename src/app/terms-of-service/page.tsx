import styles from '../legal/LegalPage.module.css';

export default function TermsOfServicePage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.subtitle}>Effective Date: September 5, 2025</p>
      </header>

      <article className={styles.content}>
        <h2>1. Acceptance of Terms</h2>
        <p>By creating an account and using the &quot;Tollverine&quot; automated tolling service (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). These Terms affect your legal rights and obligations. If you do not agree to be bound by all of these Terms, do not access or use the Service.</p>
        
        <h2>2. Description of Service</h2>
        <p>Tollverine provides a service that uses Automated Number Plate Recognition (ANPR) and other AI technologies to automate the payment of tolls. By linking your vehicle&apos;s license plate to your account, you authorize us to automatically charge your designated payment method for tolls incurred at participating toll plazas.</p>
        
        <h2>3. User Accounts and Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must provide us with information that is accurate, complete, and current at all times. It is your responsibility to update your vehicle and payment information as necessary.</p>
        
        <h2>4. Payments and Billing</h2>
        <p>You authorize Tollverine to charge your designated payment method for all tolls and any applicable fees incurred by your registered vehicle(s). If a payment is declined, we reserve the right to suspend your account until the outstanding balance is paid. All charges are final and non-refundable, except as required by law.</p>
        
        <h2>5. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Tollverine and its licensors. Our trademarks may not be used in connection with any product or service without the prior written consent of Tollverine.</p>
        
        <h2>6. Termination</h2>
        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>

        <h2>7. Limitation of Liability</h2>
        <p>In No event shall Tollverine, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us by email: <a href="mailto:tollverine@gmail.com">tollverine@gmail.com</a>.</p>
      </article>
    </main>
  );
}
