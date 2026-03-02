import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Globe, ArrowRight, Building2, Briefcase, Landmark } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import heroHome from "@/assets/hero-home.jpg";

const services = [
  {
    icon: TrendingUp,
    title: "Short-Term Loans",
    desc: "Quick financing solutions with flexible repayment schedules for immediate business needs.",
  },
  {
    icon: Building2,
    title: "Long-Term Loans",
    desc: "Structured funding for large-scale projects with competitive interest rates and extended terms.",
  },
  {
    icon: Briefcase,
    title: "Venture Capital",
    desc: "Strategic equity investments for high-growth startups and innovative business models.",
  },
  {
    icon: Landmark,
    title: "Small Business Funding",
    desc: "Tailored financing packages designed to help small businesses scale and thrive.",
  },
];

const stats = [
  { value: "$2.5B+", label: "Total Funded" },
  { value: "1,200+", label: "Clients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "2", label: "Global Offices" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroBanner
        image={heroHome}
        title="Global Investment Funding Solutions"
        subtitle="Empowering businesses and individuals with tailored loan and investment funding across UAE and Turkey."
      >
        <Link to="/apply">
          <Button variant="hero" size="xl">Apply Now</Button>
        </Link>
        <Link to="/services">
          <Button variant="heroOutline" size="xl">Our Services</Button>
        </Link>
      </HeroBanner>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container-narrow px-4 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold">{s.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1 font-body">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            label="Who We Are"
            title="Trusted Investment Partners"
            description="With over 15 years of experience, Abubin Luqmon Investment Company provides comprehensive funding solutions from our offices in Dubai, UAE and Istanbul, Turkey."
          />
          <div className="flex justify-center gap-4">
            <Link to="/about">
              <Button variant="default" size="lg">
                Learn More <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <SectionHeading
            label="What We Offer"
            title="Our Services"
            description="Comprehensive funding solutions tailored to your unique business needs and growth objectives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <service.icon className="text-gold mb-4" size={32} />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services">
              <Button variant="gold" size="lg">
                View All Services <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            label="Why Us"
            title="Why Choose Abubin Luqmon"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure & Compliant", desc: "We adhere to the highest regulatory standards across UAE and Turkey." },
              { icon: Globe, title: "Global Reach", desc: "Offices in Dubai and Istanbul serving clients across the Middle East and beyond." },
              { icon: TrendingUp, title: "Proven Track Record", desc: "Over $2.5 billion in funding delivered to businesses of all sizes." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="navy-gradient absolute inset-0" />
        <div className="relative container-narrow px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Fund Your Future?
          </h2>
          <p className="text-primary-foreground/70 font-body mb-8 max-w-xl mx-auto">
            Start your application today and get a decision within 48 hours. Our team is ready to help.
          </p>
          <Link to="/apply">
            <Button variant="hero" size="xl">Apply Now</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
