import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
        <h1>User Data Privacy Policy</h1>

<h2>Introduction</h2>
<p>This Privacy Policy describes how [Your App Name] ("we", "our", or "us") collects, uses, and discloses information, and what choices you have with respect to the information when you use our mobile application ([Your App Name]). Given our commitment to your privacy, our app has been designed to not require or store any personal data.</p>

<h2>Updates to this Policy</h2>
<p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you of the changes through the app or through other means, such as email. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.</p>

<h2>Information We Collect and Use</h2>
<p>Our application allows you to create, save, and delete memos on your device. Here's how we handle your data:</p>
<ul>
    <li><strong>Data Storage on Your Device:</strong> All memos you create are stored directly on your device. We do not have access to any of the content you create.</li>
    <li><strong>No Personal Data Collection:</strong> Our app does not require any form of registration or submission of personal information. Consequently, we do not collect or store any personal data about you.</li>
    <li><strong>Permissions:</strong> The app may request permission to access storage on your device to save or delete your memos. This permission is solely for the operation of the app and is not used for any other purpose.</li>
</ul>

<h2>How We Use Your Information</h2>
<p>Since we do not collect personal data, there is no usage of your information outside of the direct functionality of the app—creating, saving, and deleting memos on your device.</p>

<h2>Data Sharing</h2>
<p>We do not collect, store, or share any personal information. Therefore, there is no data about you that could be shared with third parties.</p>

<h2>Security</h2>
<p>We are committed to ensuring the security of your data. Since all data is stored locally on your device, the security of your data is largely dependent on the security measures of your device.</p>

<h2>Your Rights</h2>
<p>You have full control over your data, as it is stored on your device. You can create, modify, and delete memos at any time. If you uninstall the app, all data stored by the app will also be deleted from your device.</p>

<h2>Contact Us</h2>
<p>If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</p>

<p>This Privacy Policy is effective as of [Effective Date].</p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
