import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Building2, Briefcase, Landmark, DollarSign, Gem, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    icon: TrendingUp,
    title: "Short-Term Loans",
    rate: "From 5.5% APR",
    term: "6 – 24 months",
    desc: "Quick financing for working capital, inventory, or bridge funding needs.",
    eligibility: ["Minimum 1 year in business", "Annual revenue > $100K", "Valid trade license"],
  },
  {
    icon: Building2,
    title: "Long-Term Loans",
    rate: "From 4.2% APR",
    term: "2 – 10 years",
    desc: "Structured funding for capital expenditure, expansion, and large-scale projects.",
    eligibility: ["Minimum 3 years in business", "Annual revenue > $500K", "Audited financial statements"],
  },
  {
    icon: Briefcase,
    title: "Venture Capital",
    rate: "Equity-based",
    term: "3 – 7 years",
    desc: "Strategic equity investments for high-growth startups and innovative business models.",
    eligibility: ["Scalable business model", "Strong founding team", "Clear path to profitability"],
  },
  {
    icon: Landmark,
    title: "Small Business Funding",
    rate: "From 6.0% APR",
    term: "12 – 48 months",
    desc: "Tailored micro-financing for small businesses and sole proprietors.",
    eligibility: ["Minimum 6 months in business", "Annual revenue > $50K", "Valid business registration"],
  },
  {
    icon: DollarSign,
    title: "Equity Investments",
    rate: "Negotiable",
    term: "5 – 15 years",
    desc: "Direct equity participation in promising enterprises across key sectors.",
    eligibility: ["Established market presence", "Strong governance", "Growth potential"],
  },
  {
    icon: Gem,
    title: "Project Finance",
    rate: "From 3.8% APR",
    term: "5 – 20 years",
    desc: "Non-recourse financing for large infrastructure and development projects.",
    eligibility: ["Detailed feasibility study", "Government approvals", "Minimum project value $5M"],
  },
];

const steps = [
  { step: "01", title: "Initial Consultation", desc: "Discuss your funding needs with our team." },
  { step: "02", title: "Application Submission", desc: "Complete our secure online application." },
  { step: "03", title: "Review & Assessment", desc: "Our analysts evaluate your application." },
  { step: "04", title: "Approval & Funding", desc: "Receive your decision and disbursement." },
];

const ServicesPage = () => (
  <Layout>
    <HeroBanner
      image={heroServices}
      title="Our Services"
      subtitle="Comprehensive funding solutions tailored to your unique business needs."
      compact
    />

    {/* Process */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading label="How It Works" title="Our Process" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-heading font-bold text-gold mb-2">{s.step}</div>
              <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading label="Funding Options" title="Investment & Loan Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <service.icon className="text-gold mb-3" size={28} />
              <h3 className="font-heading text-lg font-semibold mb-1">{service.title}</h3>
              <div className="flex gap-4 text-xs font-body text-muted-foreground mb-3">
                <span className="bg-secondary px-2 py-1 rounded">{service.rate}</span>
                <span className="bg-secondary px-2 py-1 rounded">{service.term}</span>
              </div>
              <p className="text-muted-foreground text-sm font-body mb-4">{service.desc}</p>
              <div className="border-t border-border pt-3">
                <p className="text-xs font-body font-semibold text-foreground mb-2">Eligibility</p>
                <ul className="space-y-1">
                  {service.eligibility.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-xs text-muted-foreground font-body">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 navy-gradient">
      <div className="container-narrow px-4 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Find the Right Funding for You</h2>
        <p className="text-primary-foreground/70 font-body mb-8 max-w-xl mx-auto">
          Not sure which option suits you best? Our team can guide you through the process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/apply"><Button variant="hero" size="lg">Apply Now <ArrowRight size={18} /></Button></Link>
          <Link to="/contact"><Button variant="heroOutline" size="lg">Contact Us</Button></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
