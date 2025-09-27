import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    "Revenue Cycle Management",
    "Medical Coding Services", 
    "Healthcare Analytics",
    "Risk Adjustment",
    "Medical Billing",
    "Compliance & Auditing"
  ];

  return (
    <nav className="bg-white border border-border rounded-3xl mx-4 my-6 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
 
           <img 
              src={logo} 
              alt="Optisource Logo" 
               className="h-12 w-12 object-contain"
              
            />
            <div className="text-4xl font-extrabold">
            <span className="text-orange-500">Optisources</span>
            </div>
          {/* Logo */}
          <div className="flex-shrink-0">
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {services.map((service, index) => (
                    <DropdownMenuItem key={index} className="cursor-pointer">
                      {service}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="px-3 py-2">
                <div className="text-muted-foreground mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service, index) => (
                    <div key={index} className="text-sm text-muted-foreground hover:text-primary cursor-pointer py-1">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full bg-gradient-primary">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;