import Layout from "@/components/layout/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="py-12 md:py-16 navy-gradient">
      <div className="container-narrow px-4 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Privacy Policy</h1>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl prose prose-headings:font-heading prose-headings:text-foreground prose-p:font-body prose-p:text-muted-foreground prose-li:font-body prose-li:text-muted-foreground">
        <p><strong>Last updated:</strong> January 1, 2026</p>
        <h2>1. Information We Collect</h2>
        <p>We collect personal and business information you provide when applying for funding, contacting us, or using our website. This may include your name, email, phone number, business details, and financial information.</p>
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to process applications, communicate with you, improve our services, and comply with legal requirements. We do not sell or rent your personal data to third parties.</p>
        <h2>3. Data Security</h2>
        <p>We implement industry-standard security measures including encryption, secure servers, and access controls to protect your data. All financial information is transmitted via secure, encrypted channels.</p>
        <h2>4. Data Retention</h2>
        <p>We retain your data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.</p>
        <h2>5. Cookies</h2>
        <p>Our website uses cookies to enhance your experience. You can manage cookie preferences through your browser settings.</p>
        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at info@abubinluqmoninvestcompany.com for any privacy-related requests.</p>
        <h2>7. Contact</h2>
        <p>For privacy inquiries, email us at info@abubinluqmoninvestcompany.com or write to our Dubai office.</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
