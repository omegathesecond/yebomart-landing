import { Link } from 'react-router-dom';
import { LegalLayout } from './LegalLayout';

export function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="19 June 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of <strong>YeboMart</strong>,
        the shop-management application and related services operated by <strong>Omevision</strong>{' '}
        ("we", "us", "our"). By creating an account or using YeboMart (the "Service") you agree to
        these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>1. Eligibility and accounts</h2>
      <p>
        You must be at least 18 years old and able to enter into a binding contract to use YeboMart.
        You are responsible for the accuracy of the information you provide and for keeping your
        login credentials secure. You are responsible for all activity that occurs under your
        account, including actions taken by staff members you invite.
      </p>

      <h2>2. The Service</h2>
      <p>
        YeboMart lets you record sales, manage products and stock, run cash sessions, generate
        reports and use AI-powered insights. Core shop-management features are free to use. We may
        add, change or remove features over time to improve the Service.
      </p>

      <h2>3. Credits, fees and hardware</h2>
      <ul>
        <li>
          <strong>Credits.</strong> AI features and messaging (SMS, WhatsApp, email) are paid using
          prepaid credits. Prices are shown before you purchase. Credits are consumed as you use
          these features and are generally non-refundable once used.
        </li>
        <li>
          <strong>Hardware financing.</strong> Where offered, hardware may be paid for in
          instalments (for example, a monthly amount over a fixed term). The specific price, term
          and conditions are presented to you at the point of purchase and form part of these Terms.
        </li>
        <li>
          <strong>Payments.</strong> All payments are processed by our partner <strong>YeboPay</strong>.
          Taxes may apply depending on your location. Failure to pay amounts due may result in
          suspension of paid features or hardware obligations.
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful, fraudulent or harmful purpose.</li>
        <li>Attempt to gain unauthorised access to the Service, other accounts or our systems.</li>
        <li>Interfere with, disrupt or place undue load on the Service or its infrastructure.</li>
        <li>Reverse-engineer, copy or resell the Service except as permitted by law.</li>
        <li>
          Upload information about other people without a lawful basis, or content that infringes
          others' rights.
        </li>
      </ul>

      <h2>5. Your data and content</h2>
      <p>
        You retain ownership of the business and customer data you enter into YeboMart. You grant us
        a limited licence to host, process and display that data solely to operate and improve the
        Service for you. Our handling of personal information is described in our{' '}
        <Link to="/privacy">Privacy Policy</Link>. You are responsible for ensuring you have the
        right to record any third-party (including customer) information you enter.
      </p>

      <h2>6. Availability and offline use</h2>
      <p>
        YeboMart is designed to work offline and synchronise when you reconnect. While we aim for
        high availability, we do not guarantee that the Service will be uninterrupted or error-free.
        We may perform maintenance, updates or suspend the Service where necessary.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        The Service integrates third-party providers such as YeboPay (payments) and YeboLink
        (messaging). Your use of those features may also be subject to the relevant provider's
        terms. We are not responsible for the acts or omissions of third-party providers.
      </p>

      <h2>8. Suspension and termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate your access if you
        breach these Terms, fail to pay amounts due, or use the Service in a way that risks harm to
        others or to us. On termination, your right to use the Service ends; sections that by their
        nature should survive (such as payment, liability and dispute provisions) will continue to
        apply.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Service is provided "as is" and "as available" without warranties of any kind, whether
        express or implied, to the maximum extent permitted by law. We do not warrant that the
        Service, including AI-generated insights and predictions, will be accurate, complete or fit
        for a particular purpose. You remain responsible for your business decisions.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Omevision will not be liable for any indirect,
        incidental, special or consequential damages, or for loss of profits, revenue, data or
        goodwill, arising out of or in connection with your use of the Service. Our total liability
        for any claim relating to the Service will not exceed the amount you paid us for the Service
        in the three months preceding the claim.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material changes we will update
        the "Last updated" date above and, where appropriate, notify you within the Service.
        Continued use of YeboMart after the changes take effect means you accept the updated Terms.
      </p>

      <h2>12. Contact us</h2>
      <p>
        Questions about these Terms? Reach us on WhatsApp or by phone at{' '}
        <a href="https://wa.me/26878422613">+268 7842 2613</a>, or visit{' '}
        <a href="https://yebomart.com">yebomart.com</a>.
      </p>
    </LegalLayout>
  );
}
