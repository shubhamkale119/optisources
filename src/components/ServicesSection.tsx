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
      title: "Revenue Cycle Management",
      description: "End-to-end revenue cycle optimization from patient registration to final payment collection.",
      features: ["Claims Processing", "Payment Posting", "Denial Management", "Performance Analytics"]
    },
    {
      icon: FileText,
      title: "Medical Coding Services",
      description: "Accurate ICD-10, CPT, and HCPCS coding by certified professionals with AI-assisted validation.",
      features: ["ICD-10 Coding", "CPT Coding", "HCC Coding", "Compliance Audits"]
    },
    {
      icon: BarChart3,
      title: "Healthcare Analytics",
      description: "Advanced data analytics and reporting to identify trends and optimization opportunities.",
      features: ["Performance Dashboards", "Predictive Analytics", "Custom Reports", "ROI Analysis"]
    },
    {
      icon: Shield,
      title: "Risk Adjustment",
      description: "Comprehensive risk adjustment solutions to ensure accurate reimbursements and compliance.",
      features: ["Risk Score Optimization", "Chart Reviews", "Data Validation", "HEDIS Reporting"]
    },
    {
      icon: Stethoscope,
      title: "Medical Billing",
      description: "Streamlined billing processes with real-time claim tracking and management.",
      features: ["Electronic Billing", "Claims Tracking", "Patient Statements", "Insurance Verification"]
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning for enhanced accuracy and efficiency.",
      features: ["Automated Coding", "Predictive Modeling", "Workflow Optimization", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver technology-enabled services that optimize your revenue cycle, 
            improve coding accuracy, and ensure regulatory compliance across all healthcare settings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
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