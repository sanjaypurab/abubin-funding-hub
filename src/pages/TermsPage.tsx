import Layout from "@/components/layout/Layout";

const TermsPage = () => (
  <Layout>
    <section className="py-12 md:py-16 navy-gradient">
      <div className="container-narrow px-4 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Terms & Conditions</h1>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl prose prose-headings:font-heading prose-headings:text-foreground prose-p:font-body prose-p:text-muted-foreground prose-li:font-body prose-li:text-muted-foreground">
        <p><strong>Last updated:</strong> January 1, 2026</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the Abubin Luqmon Investment Company website and services, you agree to be bound by these Terms and Conditions.</p>
        <h2>2. Services</h2>
        <p>We provide investment funding and loan services subject to eligibility criteria and approval. Submitting an application does not guarantee approval or funding.</p>
        <h2>3. Application Accuracy</h2>
        <p>You agree to provide accurate, current, and complete information in your application. Providing false information may result in rejection or revocation of funding.</p>
        <h2>4. Interest Rates & Fees</h2>
        <p>All interest rates and fees are subject to change and will be clearly communicated before any agreement is finalized. Rates displayed on the website are indicative.</p>
        <h2>5. Limitation of Liability</h2>
        <p>Abubin Luqmon Investment Company shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>
        <h2>6. Governing Law</h2>
        <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai, UAE.</p>
        <h2>7. Modifications</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
        <h2>8. Contact</h2>
        <p>For questions about these terms, contact us at info@abubinluqmoninvestcompany.com.</p>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
