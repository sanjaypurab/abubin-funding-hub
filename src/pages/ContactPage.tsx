import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Twitter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/customercare@abubinluqmoninvestcompany.com";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website Contact: ${form.subject}`,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      toast({ title: "Message Sent", description: "Thank you for contacting us. We'll respond within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({ title: "Message failed to send", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="py-12 md:py-16 navy-gradient">
        <div className="container-narrow px-4 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/70 font-body mt-2">Get in touch with our team. We're here to help.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Get In Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="text-gold mt-1 shrink-0" size={18} />
                    <div>
                      <p className="font-body text-sm font-medium">Email</p>
                      <a href="mailto:info@abubinluqmoninvestcompany.com" className="text-muted-foreground text-sm font-body hover:text-gold transition-colors">
                        info@abubinluqmoninvestcompany.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="text-gold mt-1 shrink-0" size={18} />
                    <div>
                      <p className="font-body text-sm font-medium">Phone</p>
                      <a href="tel:+971541375617" className="text-muted-foreground text-sm font-body hover:text-gold transition-colors">
                        +971 54 137 5617 (UAE)
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Our Offices</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gold mt-1 shrink-0" size={18} />
                    <div>
                      <p className="font-body text-sm font-medium">Dubai, UAE (HQ)</p>
                      <p className="text-muted-foreground text-sm font-body">Business Bay, Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gold mt-1 shrink-0" size={18} />
                    <div>
                      <p className="font-body text-sm font-medium">Istanbul, Turkey</p>
                      <p className="text-muted-foreground text-sm font-body">Levent, Istanbul, Turkey</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-accent-foreground transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border">
                <h3 className="font-heading text-xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><Label>Full Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
                    <div><Label>Email *</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
                  </div>
                  <div><Label>Subject *</Label><Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required /></div>
                  <div><Label>Message *</Label><Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} required /></div>
                  <Button type="submit" variant="gold" size="lg" disabled={sending}>
                    <Send size={16} /> {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
