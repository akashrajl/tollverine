import styles from '../legal/LegalPage.module.css';

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>Effective Date: September 5, 2025</p>
      </header>

      <article className={styles.content}>
        <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
        
        <h2>Interpretation and Definitions</h2>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        
        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Vehicle license plate number</li>
        </ul>
        <h4>Usage Data</h4>
        <p>Usage Data is collected automatically when using the Service. This may include information such as Your device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, and other diagnostic data.</p>
        <h4>Vehicle Transit Data</h4>
        <p>When your vehicle passes through a Tollverine-enabled toll plaza, we collect data including the time of transit, vehicle classification, and a photographic record of the license plate for billing and security purposes.</p>

        <h2>Use of Your Personal Data</h2>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li><strong>To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
          <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
          <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
          <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
          <li><strong>To manage Your requests:</strong> To attend and manage Your requests to us.</li>
        </ul>

        <h2>Security of Your Data</h2>
        <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, You can contact us by email: <a href="mailto:tollverine@gmail.com">tollverine@gmail.com</a>.</p>
      </article>
    </main>
  );
}