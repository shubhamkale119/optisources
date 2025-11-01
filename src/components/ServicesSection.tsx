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
  const services = [
    {
      icon: DollarSign,
      title: "Revenue Cycle Services",
      description: "A full suite of end-to-end revenue cycle management services for hospitals with professional billing, coding and patient management services",
      features: ["Claims Processing", "Payment Posting", "Denial Management", "AR Recovery"],
      gradient: "from-[#FF7200] to-orange-600",
      cardGradient: "from-orange-50/50 to-orange-100/50"
    },
    {
      icon: Stethoscope,
      title: "Payer Services",
      description: "Get access to our full range of business process services to help you manage your administrative functions while improving member and provider satisfaction.",
      features: ["Claims Administration", "Provider Management", "Member Services", "Quality Assurance"],
      gradient: "from-[#FF7200] to-orange-600",
      cardGradient: "from-orange-50/50 to-orange-100/50"
    },
    {
      icon: FileText,
      title: "Coding Services",
      description: "Get access to certified coders with experience in outpatient, inpatient, & emergency department coding. We have a pool of HCC coding specialists as well.",
      features: ["ICD-10 Coding", "CPT Coding", "HCC Coding", "Compliance Audits"],
      gradient: "from-[#FF7200] to-orange-600",
      cardGradient: "from-orange-50/50 to-orange-100/50"
    },
    {
      icon: BarChart3,
      title: "Document Management",
      description: "Clarus offers exceptional document management services. We receive scanned documents pertaining to a patient from the healthcare provider and store it.",
      features: ["Document Scanning", "Secure Storage", "Easy Retrieval", "Compliance"],
      gradient: "from-[#FF7200] to-orange-600",
      cardGradient: "from-orange-50/50 to-orange-100/50"
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
            <Card key={index} className={`group hover:shadow-strong transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-to-br ${service.cardGradient} backdrop-blur-sm`}>
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300 ring-1 ring-white/25 shadow-lg mx-auto`}>
                  <service.icon className="h-6 w-6 text-white drop-shadow-md" aria-hidden="true" />
                </div>
                <CardTitle className={`text-2xl font-bold bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent transition-colors text-center mb-3`}>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} mr-3 shadow-lg`}></div>
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