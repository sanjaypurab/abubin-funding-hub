import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-sm">AL</span>
              </div>
              <span className="font-heading font-semibold text-lg">Abubin Luqmon</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Empowering businesses and individuals with tailored investment funding solutions across UAE and Turkey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Apply Now", path: "/apply" },
                { label: "FAQ", path: "/faq" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>Istanbul, Turkey</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@abubinluqmoninvestcompany.com" className="hover:text-gold transition-colors">
                  info@abubinluqmoninvestcompany.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+971 4 XXX XXXX</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-light text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Abubin Luqmon Investment Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
