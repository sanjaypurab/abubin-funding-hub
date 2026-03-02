import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    category: "General",
    items: [
      { q: "What is Abubin Luqmon Investment Company?", a: "We are a global investment and funding company headquartered in the UAE with a branch in Turkey, providing comprehensive loan and investment solutions for businesses and individuals." },
      { q: "Where are your offices located?", a: "Our headquarters is in Dubai, UAE, and we have a branch office in Istanbul, Turkey." },
      { q: "What industries do you serve?", a: "We serve a wide range of industries including technology, real estate, manufacturing, healthcare, retail, and more." },
    ],
  },
  {
    category: "Eligibility & Application",
    items: [
      { q: "What are the basic eligibility requirements?", a: "Requirements vary by product, but generally you need a valid business registration, minimum operating history, and demonstrable revenue. Specific requirements are listed on our Services page." },
      { q: "How do I apply for funding?", a: "You can apply through our secure online application form. Simply click 'Apply Now' and follow the step-by-step process." },
      { q: "What documents do I need to provide?", a: "Typically you'll need identification, business registration, financial statements, bank statements, and a business plan. Specific requirements depend on the funding type." },
      { q: "How long does the application process take?", a: "Most applications are reviewed within 2–3 business days. Once approved, funding can be disbursed within 5–7 business days." },
    ],
  },
  {
    category: "Rates & Terms",
    items: [
      { q: "What are your interest rates?", a: "Interest rates start from 3.8% APR for project finance and vary depending on the loan type, amount, and risk profile. Visit our Services page for detailed rate information." },
      { q: "Are there any upfront fees?", a: "We charge a one-time processing fee that varies based on the loan product. There are no hidden charges. All fees are clearly disclosed before you commit." },
      { q: "What repayment options are available?", a: "We offer flexible repayment terms from 6 months to 20 years, depending on the product. Monthly, quarterly, and semi-annual payment schedules are available." },
    ],
  },
  {
    category: "Security & Privacy",
    items: [
      { q: "Is my personal information secure?", a: "Yes. We use industry-standard encryption and security protocols to protect all personal and financial data. We are fully compliant with UAE and international data protection regulations." },
      { q: "Who has access to my application data?", a: "Only authorized personnel involved in the review and approval process have access to your application. We never share your data with unauthorized third parties." },
    ],
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-body font-medium text-foreground pr-4">{q}</span>
        <ChevronDown className={`text-gold shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} size={20} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-4 text-sm text-muted-foreground font-body leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
};

const FAQPage = () => (
  <Layout>
    <section className="py-12 md:py-16 navy-gradient">
      <div className="container-narrow px-4 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Frequently Asked Questions</h1>
        <p className="text-primary-foreground/70 font-body mt-2">Everything you need to know about our funding solutions.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        {faqs.map((cat) => (
          <div key={cat.category} className="mb-10">
            <SectionHeading title={cat.category} center={false} />
            <div className="bg-card rounded-lg border border-border px-6">
              {cat.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default FAQPage;
