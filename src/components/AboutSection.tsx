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
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <div className="text-xs font-semibold text-[#FF7200] mb-4 tracking-wider uppercase">
              ABOUT HEALTHTECH SOLUTIONS
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Transforming Healthcare Through
              <br />
              Innovation & Excellence
            </h2>
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
                We are a leading provider of technology-enabled healthcare solutions, 
                specializing in revenue cycle management, medical coding, and analytics. 
                Our mission is to help healthcare organizations achieve optimal financial performance 
                while maintaining the highest standards of compliance and patient care.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                With over 15 years of experience and a team of certified professionals, we combine 
                deep healthcare expertise with cutting-edge AI technology to deliver measurable 
                results for our clients.
              </p>
            </div>

            {/* Values List */}
            <div className="space-y-3 mt-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start group">
                  <CheckCircle className="h-5 w-5 text-[#4CAF50] mt-0.5 mr-3 flex-shrink-0 group-hover:text-[#FF7200] transition-colors duration-200" />
                  <span className="text-gray-700 text-base group-hover:text-gray-900 transition-colors duration-200">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button 
                size="default" 
                className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:from-[#43A047] hover:to-[#1B5E20] text-white shadow-md hover:shadow-lg transition-all duration-300 px-6 py-2 rounded-md"
              >
                Learn More
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/5 hover:border-[#2E7D32] hover:text-[#2E7D32] transition-all duration-300 px-6 py-2 rounded-md"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={medicalTechImage}
                alt="Medical technology and analytics"
                className="w-full h-[480px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 to-[#2E7D32]/20"></div>
            </div>
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white rounded-lg border-none shadow-xl">
              <CardContent className="p-6">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] bg-clip-text text-transparent">
                  $2.5B+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Revenue Optimized
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievement Grid - Removed as per screenshot */}
      </div>
    </section>
  );
};

export default AboutSection;