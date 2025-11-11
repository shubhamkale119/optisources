import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign, BarChart3, Stethoscope, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const CARD_STYLES = {
    revenue: {
      border: "border-[#E3F2FD]",
      iconBg: "bg-gradient-to-br from-[#E3F2FD] to-white",
      iconColor: "text-[#1565C0]",
    },
    payer: {
      border: "border-[#E8F5E9]",
      iconBg: "bg-gradient-to-br from-[#C8E6C9] to-white",
      iconColor: "text-[#2E7D32]",
    },
    coding: {
      border: "border-[#FCE4EC]",
      iconBg: "bg-gradient-to-br from-[#F8BBD0] to-white",
      iconColor: "text-[#AD1457]",
    },
    document: {
      border: "border-[#EDE7F6]",
      iconBg: "bg-gradient-to-br from-[#D1C4E9] to-white",
      iconColor: "text-[#6A1B9A]",
    },
  };

  const services = [
    {
      icon: DollarSign,
      title: "Revenue Cycle Services",
      desc: "End-to-end revenue cycle management with billing, coding, and patient management expertise.",
      features: ["Claims Processing", "Payment Posting", "Denial Management", "AR Recovery"],
      color: "revenue",
    },
    {
      icon: Stethoscope,
      title: "Payer Services",
      desc: "Comprehensive payer support to streamline admin functions and enhance member satisfaction.",
      features: ["Claims Administration", "Provider Management", "Member Services", "Quality Assurance"],
      color: "payer",
    },
    {
      icon: FileText,
      title: "Coding Services",
      desc: "Certified coders with experience across inpatient, outpatient, and emergency coding.",
      features: ["ICD-10 Coding", "CPT Coding", "HCC Coding", "Compliance Audits"],
      color: "coding",
    },
    {
      icon: BarChart3,
      title: "Document Management",
      desc: "Secure scanning and storage of patient documents to streamline provider workflows.",
      features: ["Document Scanning", "Secure Storage", "Easy Retrieval", "Compliance"],
      color: "document",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover healthcare solutions designed to build trust, safety, and efficiency in every process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const style = CARD_STYLES[s.color];
            return (
              <Card
                key={i}
                className={`p-8 rounded-2xl border ${style.border} shadow-[0_6px_20px_rgba(0,0,0,0.04)] bg-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${style.iconBg} flex items-center justify-center ${style.iconColor}`}>
                    <s.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900">{s.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-sm mt-1">{s.desc}</CardDescription>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-2 mt-4 text-slate-700 text-sm font-medium">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full ${style.iconBg}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#1565C0] hover:bg-[#0D47A1] text-white px-8 py-6 rounded-xl">
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
