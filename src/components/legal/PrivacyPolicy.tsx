import { LegalLayout } from './LegalLayout';

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="19 June 2026">
      <p>
        This Privacy Policy explains how <strong>YeboMart</strong>, operated by{' '}
        <strong>Omevision</strong> ("we", "us", "our"), collects, uses, stores and protects
        information when you use the YeboMart shop-management application, website and related
        services (together, the "Service"). By creating an account or using the Service, you agree
        to the practices described here.
      </p>

      <h2>1. Who we are</h2>
      <p>
        YeboMart is a point-of-sale and business-management product for small and growing
        businesses across Africa. The data controller for the Service is Omevision. If you have
        questions about this policy or your data, contact us using the details in section 11.
      </p>

      <h2>2. Information we collect</h2>
      <h3>2.1 Information you give us</h3>
      <ul>
        <li>
          <strong>Account details</strong> — your name, business name, phone number and email
          address when you register or contact us.
        </li>
        <li>
          <strong>Business records</strong> — products, prices, stock levels, suppliers, sales,
          refunds, expenses, cash sessions and reports you create while running your shop.
        </li>
        <li>
          <strong>Staff information</strong> — names and roles of team members you add to your
          shop so they can use the Service.
        </li>
        <li>
          <strong>Customer information</strong> — any contact or transaction details you choose to
          record about your own customers. You are responsible for having a lawful basis to enter
          this information.
        </li>
      </ul>
      <h3>2.2 Information we collect automatically</h3>
      <ul>
        <li>
          <strong>Usage and device data</strong> — app version, device type, log events and
          approximate location (country) used to operate, secure and improve the Service.
        </li>
        <li>
          <strong>Country/currency preference</strong> — stored in your browser so we can show the
          right currency. You can change this at any time.
        </li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To provide, maintain and secure the Service and your shop's data.</li>
        <li>To process credit top-ups, hardware financing and other payments you make.</li>
        <li>To send you transactional messages, receipts, alerts and the daily insights you opt into.</li>
        <li>To generate the AI-powered analytics, stock predictions and reporting features.</li>
        <li>To provide customer support and respond to your requests.</li>
        <li>To detect, prevent and address fraud, abuse and technical issues.</li>
        <li>To comply with our legal obligations.</li>
      </ul>

      <h2>4. Payments</h2>
      <p>
        Payments for credits and hardware financing are processed through <strong>YeboPay</strong>,
        our payment partner. We do not store full card numbers or mobile-money credentials on our
        own systems. YeboPay reports back only whether a payment succeeded or failed and the
        related invoice information. Your use of payment features is also subject to YeboPay's terms
        and privacy practices.
      </p>

      <h2>5. Messaging</h2>
      <p>
        SMS, WhatsApp and email notifications are delivered through <strong>YeboLink</strong>, our
        communications gateway. Message content and recipient details are processed only to deliver
        the messages you or your shop trigger.
      </p>

      <h2>6. Sharing your information</h2>
      <p>We do not sell your personal information. We share information only:</p>
      <ul>
        <li>
          With service providers who process data on our behalf (such as cloud hosting, YeboPay for
          payments and YeboLink for messaging), under appropriate confidentiality obligations.
        </li>
        <li>
          When required by law, regulation, legal process or enforceable governmental request.
        </li>
        <li>To protect the rights, property or safety of YeboMart, our users or the public.</li>
        <li>
          In connection with a merger, acquisition or sale of assets, in which case we will notify
          you of any change in control of your information.
        </li>
      </ul>

      <h2>7. Data retention</h2>
      <p>
        We keep your information for as long as your account is active and as needed to provide the
        Service. After account closure we retain records only as long as necessary to comply with
        legal, accounting or reporting obligations, after which the data is deleted or anonymised.
      </p>

      <h2>8. Offline storage and synchronisation</h2>
      <p>
        YeboMart works offline. Some of your business data is stored on your device so you can keep
        selling without a connection, then synchronised to our servers when you are back online. You
        should protect access to any device on which you are signed in.
      </p>

      <h2>9. Security</h2>
      <p>
        We use reasonable technical and organisational measures — including encryption in transit
        and access controls — to protect your information. No method of transmission or storage is
        completely secure, so we cannot guarantee absolute security, but we work continuously to
        safeguard your data.
      </p>

      <h2>10. Your rights</h2>
      <p>
        Subject to applicable law, you may request access to, correction of, or deletion of your
        personal information, and you may object to or restrict certain processing. To exercise
        these rights, contact us using the details below. We will respond within a reasonable
        timeframe.
      </p>

      <h2>11. Contact us</h2>
      <p>
        If you have questions, concerns or requests regarding this Privacy Policy or your data, reach
        us at:
      </p>
      <ul>
        <li>
          WhatsApp / Phone:{' '}
          <a href="https://wa.me/26878422613">+268 7842 2613</a>
        </li>
        <li>
          Website: <a href="https://yebomart.com">yebomart.com</a>
        </li>
      </ul>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material changes we will
        update the "Last updated" date above and, where appropriate, notify you within the Service.
        Continued use of YeboMart after changes take effect means you accept the updated policy.
      </p>
    </LegalLayout>
  );
}
