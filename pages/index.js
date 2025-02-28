
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div class="flex-container">
      <Head>
        <title>Cow Technology</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            justify-content: center;
            text-align: center;
          }
          /* main {
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
            justify-content: center;
            text-align: center;            
          } */
          h1, h2 {
            color: rgb(102, 102, 102);
          }
          h3 {
            color: rgb(128, 128, 128);
          }
          p, ul {
            color: #666;
            line-height: 1.6;
          }
          ul {
            padding-left: 20px;
          }

          .flex-container {
          display: flex;
          margin: 0 auto;
          padding: 20px;
          max-width: 800px;
          flex-direction: column;
          background-color: rgb(217, 217, 217);
          justify-content: center;
          text-align: center;
          }

          .flex-container > div {
            background-color: #f1f1f1;
            width: 400px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-size: 30px;
            justify-content: center;
            text-align: center;
          }
        `}</style>
      </Head>

      <Header title="Cow Technology" />
      <main>
        <hr style="width:50%" />
        <h2>User Data Privacy Policy</h2>
        <h3>Introduction</h3>
        <div>
          <p>This Privacy Policy describes how we, Cow Technology, collects, uses, and discloses information, and what choices you have with respect to the information when you use our mobile applications. Given our commitment to your privacy, our app has been designed to not require or store any personal data.</p>  
        </div>

        <h3>Updates to this Policy</h3>
        <p>We may update this Privacy Policy from time to time. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.</p>

        <h3>Information We Collect and Use</h3>
        <p>Our application allows you to create, save, and delete data on your device. Here's how we handle your data:</p>
        <ul>
          <li><strong>Data Storage on Your Device:</strong> All data you create are stored directly on your device. We do not have access to any of the content you create.</li>
          <li><strong>No Personal Data Collection:</strong> Our app does not require any form of registration or submission of personal information. Consequently, we do not collect or store any personal data about you.</li>
          <li><strong>Permissions:</strong> The app may request permission to access storage on your device to save or delete your data that is saved via our app. This permission is solely for the operation of the app and is not used for any other purpose.</li>
        </ul>

        <h3>How We Use Your Information</h3>
        <p>Since we do not collect personal data, there is no usage of your information outside of the direct functionality of the app—creating, saving, and deleting the data on your device.</p>

        <h3>Data Sharing</h3>
        <p>We do not collect, store, or share any personal information. Therefore, there is no data about you that could be shared with third parties.</p>

        <h3>Security</h3>
        <p>We are committed to ensuring the security of your data. Since all data is stored locally on your device, the security of your data is largely dependent on the security measures of your device.</p>

        <h3>Your Rights</h3>
        <p>You have full control over your data, as it is stored on your device. You can create, modify, and delete data at any time. If you uninstall the app, all data stored by the app will also be deleted from your device.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
      </main>

      <Footer />
    </div>
  );
}
