import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@healthtechsolutions.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Healthcare Blvd, Suite 500",
      subtitle: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Support",
      details: "24/7 Technical Support",
      subtitle: "Always here when you need us"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our experts to learn how we can optimize your healthcare operations and improve your financial outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Request a Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Enter your organization name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rcm">Revenue Cycle Management</SelectItem>
                        <SelectItem value="coding">Medical Coding Services</SelectItem>
                        <SelectItem value="analytics">Healthcare Analytics</SelectItem>
                        <SelectItem value="risk">Risk Adjustment</SelectItem>
                        <SelectItem value="billing">Medical Billing</SelectItem>
                        <SelectItem value="ai">AI-Powered Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your specific needs and challenges..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-primary font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="bg-gradient-primary text-white border-0 shadow-strong">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-white/90 mb-4">
                  Speak with one of our healthcare experts today.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;