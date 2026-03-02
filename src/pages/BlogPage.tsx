import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";

const posts = [
  {
    title: "UAE Investment Market Outlook for 2026",
    excerpt: "Explore the key trends shaping the UAE investment landscape and what they mean for businesses seeking funding.",
    date: "Feb 15, 2026",
    category: "Market Insights",
  },
  {
    title: "How to Prepare Your Business for Loan Approval",
    excerpt: "A comprehensive guide to organizing your financials and documentation for a successful loan application.",
    date: "Jan 28, 2026",
    category: "Guides",
  },
  {
    title: "Success Story: How TechVenture Scaled with Our Funding",
    excerpt: "Learn how a Dubai-based startup secured venture capital funding and expanded across the region.",
    date: "Jan 10, 2026",
    category: "Case Studies",
  },
  {
    title: "Turkey's Growing Role in Cross-Border Investments",
    excerpt: "Why Istanbul is becoming a key hub for investment flow between Europe, the Middle East, and Central Asia.",
    date: "Dec 20, 2025",
    category: "Market Insights",
  },
  {
    title: "Understanding Interest Rates: Fixed vs. Variable",
    excerpt: "A detailed breakdown of how fixed and variable interest rates work and which is right for your business.",
    date: "Dec 5, 2025",
    category: "Guides",
  },
  {
    title: "Abubin Luqmon Expands Services to Central Asia",
    excerpt: "Our company announces new partnerships and funding programs targeting businesses in Central Asian markets.",
    date: "Nov 18, 2025",
    category: "Company News",
  },
];

const BlogPage = () => (
  <Layout>
    <section className="py-12 md:py-16 navy-gradient">
      <div className="container-narrow px-4 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Blog & News</h1>
        <p className="text-primary-foreground/70 font-body mt-2">Insights, guides, and updates from Abubin Luqmon Investment Company.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="h-2 gold-gradient" />
              <div className="p-6">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold">{post.category}</span>
                <h3 className="font-heading text-lg font-semibold mt-2 mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <CalendarDays size={14} /> {post.date}
                  </span>
                  <span className="text-gold text-sm font-body font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPage;
