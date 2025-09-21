import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import medicalTechImage from "@/assets/medical-technology.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Healthcare Partners",
      description: "Trusted by leading healthcare organizations"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Years Experience",
      description: "Proven expertise in healthcare solutions"
    },
    {
      icon: CheckCircle,
      number: "99.9%",
      label: "Accuracy Rate",
      description: "Industry-leading precision in coding and billing"
    }
  ];

  const values = [
    "AI-powered technology for enhanced accuracy and efficiency",
    "Certified healthcare professionals with deep industry expertise", 
    "Comprehensive compliance with HIPAA and healthcare regulations",
    "Real-time reporting and analytics for actionable insights",
    "Scalable solutions that grow with your organization",
    "24/7 support and dedicated account management"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <div className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
              About HealthTech Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transforming Healthcare Through 
              <span className="text-primary"> Innovation & Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading provider of technology-enabled healthcare solutions, specializing in revenue cycle management, 
              medical coding, and analytics. Our mission is to help healthcare organizations achieve optimal financial performance 
              while maintaining the highest standards of compliance and patient care.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience and a team of certified professionals, we combine deep healthcare expertise 
              with cutting-edge AI technology to deliver measurable results for our clients.
            </p>

            {/* Values List */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-strong">
              <img
                src={medicalTechImage}
                alt="Medical technology and analytics"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-card border-border shadow-strong">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Revenue Optimized</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-soft transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-primary mb-2">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;