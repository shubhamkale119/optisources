import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  DollarSign, 
  BarChart3, 
  Shield, 
  Stethoscope, 
  Brain,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const ICON_GRADIENTS: Record<string, string> = {
    amber: "from-amber-300 via-orange-400 to-rose-500",
    teal: "from-cyan-300 via-teal-400 to-blue-500",
    indigo: "from-purple-400 via-indigo-400 to-blue-500",
    lime: "from-lime-300 via-green-400 to-emerald-500",
    slate: "from-slate-600 via-slate-700 to-slate-800",
  };

  // Additional title gradients so each card can mix two different color combinations
  const TITLE_GRADIENTS: Record<string, string> = {
    amber: "from-yellow-300 via-orange-400 to-amber-500",
    teal: "from-cyan-300 via-teal-400 to-emerald-400",
    indigo: "from-violet-300 via-indigo-400 to-pink-400",
    lime: "from-lime-300 via-emerald-300 to-emerald-400",
    slate: "from-slate-700 via-slate-600 to-slate-500",
  };

  const services = [
    {
      icon: DollarSign,
      title: "Revenue Cycle Services",
      description: "A full suite of end-to-end revenue cycle management services for hospitals with professional billing, coding and patient management services",
      features: ["Claims Processing", "Payment Posting", "Denial Management", "AR Recovery"],
        variant: "amber",
        accent: "amber",
        titleAccent: "amber",
    },
    {
      icon: Stethoscope,
      title: "Payer Services",
      description: "Get access to our full range of business process services to help you manage your administrative functions while improving member and provider satisfaction.",
      features: ["Claims Administration", "Provider Management", "Member Services", "Quality Assurance"],
      variant: "teal",
      accent: "teal",
      titleAccent: "teal",
    },
    {
      icon: FileText,
      title: "Coding Services",
      description: "Get access to certified coders with experience in outpatient, inpatient, & emergency department coding. We have a pool of HCC coding specialists as well.",
      features: ["ICD-10 Coding", "CPT Coding", "HCC Coding", "Compliance Audits"],
      variant: "indigo",
      accent: "indigo",
      titleAccent: "indigo",
    },
    {
      icon: BarChart3,
      title: "Document Management",
      description: "Clarus offers exceptional document management services. We receive scanned documents pertaining to a patient from the healthcare provider and store it.",
      features: ["Document Scanning", "Secure Storage", "Easy Retrieval", "Compliance"],
      variant: "lime",
      accent: "lime",
      titleAccent: "lime",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of healthcare services designed to streamline your operations
            and enhance patient care delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} variant={service.variant as any} className={`group transition-all duration-300 border-border/50 hover:border-primary/20 backdrop-blur-sm`}>
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ICON_GRADIENTS[service.accent]} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 ring-2 ring-white/20 shadow-2xl mx-auto`}>
                  <service.icon className="h-7 w-7 text-white drop-shadow-lg" aria-hidden="true" />
                </div>
                <CardTitle className={`text-2xl md:text-3xl font-extrabold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r ${TITLE_GRADIENTS[service.titleAccent]} drop-shadow-sm` }>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-center text-base opacity-95">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center">
                      <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${ICON_GRADIENTS[service.accent]} mr-3 shadow-md`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;