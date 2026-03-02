import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {label && (
      <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-gold mb-2">
        {label}
      </span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-body">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
