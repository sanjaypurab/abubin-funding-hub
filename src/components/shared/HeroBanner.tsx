import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
}

const HeroBanner = ({ image, title, subtitle, children, compact }: HeroBannerProps) => (
  <section
    className={`relative ${compact ? "py-20 md:py-28" : "py-28 md:py-40"} overflow-hidden`}
  >
    <img
      src={image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative container-narrow px-4 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl font-body"
        >
          {subtitle}
        </motion.p>
      )}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  </section>
);

export default HeroBanner;
