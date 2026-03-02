import { motion } from "framer-motion";
import { Award, Target, Eye, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionHeading from "@/components/shared/SectionHeading";
import heroAbout from "@/assets/hero-about.jpg";

const team = [
  { name: "Abubin Luqmon", role: "Founder & CEO", desc: "20+ years in international finance and investment management." },
  { name: "Fatima Al-Rashid", role: "Chief Investment Officer", desc: "Expert in structured finance and capital markets." },
  { name: "Mehmet Yilmaz", role: "Turkey Operations Director", desc: "Leading our Istanbul branch with deep local market expertise." },
  { name: "Sarah Chen", role: "Head of Risk Management", desc: "Ensuring compliance and protecting our clients' interests." },
];

const values = [
  { icon: Award, title: "Integrity", desc: "Transparent dealings and ethical business practices at every level." },
  { icon: Target, title: "Excellence", desc: "Delivering superior investment solutions that exceed expectations." },
  { icon: Eye, title: "Innovation", desc: "Leveraging technology and market insights for smarter funding." },
  { icon: Users, title: "Client Focus", desc: "Every solution is tailored to our clients' unique needs and goals." },
];

const AboutPage = () => (
  <Layout>
    <HeroBanner
      image={heroAbout}
      title="About Abubin Luqmon"
      subtitle="Building trusted investment partnerships since 2010, with offices in Dubai and Istanbul."
      compact
    />

    {/* Mission */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading label="Our Mission" title="Empowering Growth Through Strategic Funding" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed"
        >
          Abubin Luqmon Investment Company was founded with a singular vision: to bridge the gap between ambitious entrepreneurs
          and the capital they need to succeed. Headquartered in the UAE with a strategic branch in Turkey, we serve clients
          across the Middle East, Central Asia, and beyond. Our team combines deep financial expertise with local market knowledge
          to deliver funding solutions that drive real growth.
        </motion.p>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading label="Core Values" title="What Drives Us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 text-center shadow-sm border border-border"
            >
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-accent-foreground" size={20} />
              </div>
              <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading label="Leadership" title="Meet Our Team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 text-center shadow-sm border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-gold text-lg">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading font-semibold">{member.name}</h3>
              <p className="text-gold text-sm font-body font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm font-body">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Locations */}
    <section className="section-padding bg-primary">
      <div className="container-narrow">
        <SectionHeading label="Our Presence" title="Global Offices" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { city: "Dubai, UAE", desc: "Our headquarters in the heart of the Middle East's financial hub. Serving clients across the GCC region.", type: "Headquarters" },
            { city: "Istanbul, Turkey", desc: "Strategic branch connecting European and Asian markets. Serving clients across Turkey and Central Asia.", type: "Branch Office" },
          ].map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-light rounded-lg p-8 border border-navy-light"
            >
              <span className="text-xs uppercase tracking-widest text-gold font-body font-semibold">{loc.type}</span>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mt-2 mb-3">{loc.city}</h3>
              <p className="text-primary-foreground/70 font-body text-sm">{loc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
