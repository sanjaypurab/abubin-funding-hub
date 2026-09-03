import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Upload, FileText, User, Building, DollarSign } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const steps = ["Personal Info", "Business Details", "Funding Request", "Documents", "Review"];

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/customercare@abubinluqmoninvestcompany.com";

const ApplyPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", nationality: "",
    businessName: "", businessType: "", yearsInBusiness: "", annualRevenue: "",
    loanType: "", amount: "", purpose: "", repaymentPeriod: "",
    documents: [] as File[],
    agree: false,
  });

  const update = (field: string, value: string | boolean | File[]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
  };
  const prev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (!form.agree) {
      toast({ title: "Please agree to the terms", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const data = new FormData();
      data.append("_subject", `New Funding Application: ${form.fullName}`);
      data.append("Full Name", form.fullName);
      data.append("Email", form.email);
      data.append("Phone", form.phone);
      data.append("Nationality", form.nationality);
      data.append("Business Name", form.businessName);
      data.append("Business Type", form.businessType);
      data.append("Years in Business", form.yearsInBusiness);
      data.append("Annual Revenue (USD)", form.annualRevenue);
      data.append("Loan/Investment Type", form.loanType);
      data.append("Amount Requested (USD)", form.amount);
      data.append("Preferred Repayment Period", form.repaymentPeriod);
      data.append("Purpose of Funding", form.purpose);
      form.documents.forEach((file) => data.append("attachments", file, file.name));
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
      toast({ title: "Application Submitted", description: "We will review your application and contact you soon." });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      update("documents", Array.from(e.target.files));
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding bg-background min-h-[60vh] flex items-center">
          <div className="container-narrow text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <CheckCircle2 className="text-gold mx-auto mb-6" size={72} />
            </motion.div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Your application has been received. Our team will review it and get back to you within 2–3 business days.
              You can track your application status by contacting our office.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 navy-gradient">
        <div className="container-narrow px-4 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Apply for Funding</h1>
          <p className="text-primary-foreground/70 font-body mt-2">Complete the form below to submit your loan or investment application.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          {/* Progress */}
          <div className="flex items-center justify-between mb-10 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-body font-semibold shrink-0 ${
                  i <= currentStep ? "gold-gradient text-accent-foreground" : "bg-secondary text-muted-foreground"
                }`}>
                  {i < currentStep ? <CheckCircle2 size={16} /> : i + 1}
                </div>
                <span className={`ml-2 text-xs font-body hidden sm:block whitespace-nowrap ${
                  i <= currentStep ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}>
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <div className={`w-8 md:w-16 h-0.5 mx-2 ${i < currentStep ? "bg-gold" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border"
          >
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4"><User className="text-gold" size={20} /><h2 className="font-heading text-xl font-semibold">Personal Information</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><Label>Full Name *</Label><Input value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="John Doe" /></div>
                  <div><Label>Email *</Label><Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@example.com" /></div>
                  <div><Label>Phone *</Label><Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+971 XX XXX XXXX" /></div>
                  <div><Label>Nationality</Label><Input value={form.nationality} onChange={(e) => update("nationality", e.target.value)} placeholder="e.g. UAE" /></div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4"><Building className="text-gold" size={20} /><h2 className="font-heading text-xl font-semibold">Business Details</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><Label>Business Name *</Label><Input value={form.businessName} onChange={(e) => update("businessName", e.target.value)} /></div>
                  <div>
                    <Label>Business Type *</Label>
                    <Select value={form.businessType} onValueChange={(v) => update("businessType", v)}>
                      <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sole">Sole Proprietorship</SelectItem>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="corp">Corporation</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="startup">Startup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div><Label>Years in Business</Label><Input type="number" value={form.yearsInBusiness} onChange={(e) => update("yearsInBusiness", e.target.value)} /></div>
                  <div><Label>Annual Revenue (USD)</Label><Input value={form.annualRevenue} onChange={(e) => update("annualRevenue", e.target.value)} placeholder="e.g. 500,000" /></div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4"><DollarSign className="text-gold" size={20} /><h2 className="font-heading text-xl font-semibold">Funding Request</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Loan/Investment Type *</Label>
                    <Select value={form.loanType} onValueChange={(v) => update("loanType", v)}>
                      <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short-term">Short-Term Loan</SelectItem>
                        <SelectItem value="long-term">Long-Term Loan</SelectItem>
                        <SelectItem value="venture">Venture Capital</SelectItem>
                        <SelectItem value="small-biz">Small Business Funding</SelectItem>
                        <SelectItem value="equity">Equity Investment</SelectItem>
                        <SelectItem value="project">Project Finance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div><Label>Amount Requested (USD) *</Label><Input value={form.amount} onChange={(e) => update("amount", e.target.value)} placeholder="e.g. 250,000" /></div>
                  <div>
                    <Label>Preferred Repayment Period</Label>
                    <Select value={form.repaymentPeriod} onValueChange={(v) => update("repaymentPeriod", v)}>
                      <SelectTrigger><SelectValue placeholder="Select period" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6m">6 months</SelectItem>
                        <SelectItem value="12m">12 months</SelectItem>
                        <SelectItem value="24m">24 months</SelectItem>
                        <SelectItem value="5y">5 years</SelectItem>
                        <SelectItem value="10y">10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Purpose of Funding *</Label>
                  <Textarea value={form.purpose} onChange={(e) => update("purpose", e.target.value)} placeholder="Describe how the funds will be used..." rows={4} />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4"><FileText className="text-gold" size={20} /><h2 className="font-heading text-xl font-semibold">Upload Documents</h2></div>
                <p className="text-muted-foreground text-sm font-body">Upload relevant documents such as business plan, financial statements, and identification.</p>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="text-gold mx-auto mb-3" size={32} />
                  <p className="text-sm text-muted-foreground font-body mb-3">Drag & drop files here, or click to browse</p>
                  <Input type="file" multiple onChange={handleFileChange} className="max-w-xs mx-auto" accept=".pdf,.doc,.docx,.jpg,.png" />
                </div>
                {form.documents.length > 0 && (
                  <ul className="mt-4 space-y-1">
                    {form.documents.map((f, i) => (
                      <li key={i} className="text-sm text-foreground font-body flex items-center gap-2">
                        <FileText size={14} className="text-gold" /> {f.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-semibold mb-4">Review Your Application</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-body">
                  <div><span className="text-muted-foreground">Name:</span> <strong>{form.fullName || "—"}</strong></div>
                  <div><span className="text-muted-foreground">Email:</span> <strong>{form.email || "—"}</strong></div>
                  <div><span className="text-muted-foreground">Phone:</span> <strong>{form.phone || "—"}</strong></div>
                  <div><span className="text-muted-foreground">Business:</span> <strong>{form.businessName || "—"}</strong></div>
                  <div><span className="text-muted-foreground">Loan Type:</span> <strong>{form.loanType || "—"}</strong></div>
                  <div><span className="text-muted-foreground">Amount:</span> <strong>${form.amount || "—"}</strong></div>
                  <div className="md:col-span-2"><span className="text-muted-foreground">Purpose:</span> <strong>{form.purpose || "—"}</strong></div>
                  <div><span className="text-muted-foreground">Documents:</span> <strong>{form.documents.length} file(s)</strong></div>
                </div>
                <label className="flex items-start gap-2 mt-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => update("agree", e.target.checked)}
                    className="mt-1 accent-gold"
                  />
                  <span className="text-sm text-muted-foreground font-body">
                    I agree to the{" "}
                    <a href="/terms" className="text-gold underline">Terms & Conditions</a> and{" "}
                    <a href="/privacy" className="text-gold underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={prev} disabled={currentStep === 0}>Back</Button>
              {currentStep < steps.length - 1 ? (
                <Button variant="gold" onClick={next}>Continue</Button>
              ) : (
                <Button variant="hero" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyPage;
