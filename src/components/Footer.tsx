import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const services = [
    "Revenue Cycle Management",
    "Medical Coding Services",
    "Healthcare Analytics", 
    "Risk Adjustment",
    "Medical Billing",
    "AI-Powered Solutions"
  ];

  const company = [
    "About Us",
    "Leadership Team",
    "Careers", 
    "News & Updates",
    "Case Studies",
    "Partnerships"
  ];

  const resources = [
    "Resource Center",
    "White Papers",
    "Webinars",
    "Documentation",
    "Support Center",
    "Training"
  ];

  return (
    <footer className="bg-healthcare-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Optisource
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming healthcare revenue management through innovative technology and expert services. 
              We help healthcare organizations optimize performance and achieve financial excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">India Office</h4>
                <div className="flex items-start text-white/80">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-[#FF7200]" />
                  <div>
                    Office no 105, 1st floor,<br />
                    Power plaza, lane no 7,<br />
                    Koregaon park, Pune,<br />
                    Maharashtra
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">UAE Office</h4>
                <div className="flex items-start text-white/80">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-[#FF7200]" />
                  <div>
                    Office no 401,<br />
                    Fintouch Decor,<br />
                    Business Bay, Dubai
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-white/80">
                  <Phone className="h-5 w-5 mr-3 text-[#4CAF50]" />
                  <span>+ 91 83297 96270</span>
                  
                </div>
                <div className="flex items-center text-white/80">
                  <Mail className="h-5 w-5 mr-3 text-[#4CAF50]" />
                  <span>info@optisources.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a
                href="https://www.linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition"
              >
                <Linkedin className="h-5 w-5" style={{ color: '#0A66C2' }} />
              </a>

              <a
                href="https://twitter.com/your-company"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition"
              >
                <Twitter className="h-5 w-5" style={{ color: '#1DA1F2' }} />
              </a>

              <a
                href="https://www.facebook.com/your-company"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition"
              >
                <Facebook className="h-5 w-5" style={{ color: '#1877F2' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-white/80">
                Get the latest insights on healthcare revenue cycle management and industry trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-secondary hover:bg-secondary-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
            <div className="mb-4 md:mb-0">
              © 2024 HealthTech Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;