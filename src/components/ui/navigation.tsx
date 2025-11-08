import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// logo image removed from nav to avoid duplicate branding in header

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
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 my-2 sm:my-4">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl px-4 sm:px-8 lg:px-12 border border-white/20 transition-all duration-300">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
                {/* image logo intentionally removed to keep header clean; keep text branding */}
                <span className="hidden sm:inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  <span className="text-[#FF7200]">Opti</span>
                  <span className="text-[#002B80]">Sources</span>
                </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="flex items-center justify-center space-x-4 lg:space-x-8 text-sm lg:text-base">
              <a href="#home" 
                className="relative font-medium text-[#002B80] hover:text-[#FF7200] py-2 px-4 rounded-lg transition-all duration-300 hover:bg-orange-50 group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7200] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#about" 
                className="relative font-medium text-[#002B80] hover:text-[#FF7200] py-2 px-4 rounded-lg transition-all duration-300 hover:bg-orange-50 group">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7200] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className="relative font-medium text-[#002B80] hover:text-[#FF7200] py-2 px-4 rounded-lg transition-all duration-300 hover:bg-orange-50 group flex items-center">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7200] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 animate-in slide-in-from-top-2 bg-white/95 backdrop-blur-sm p-2">
                  {services.map((service, index) => (
                    <DropdownMenuItem key={index} 
                      className="cursor-pointer text-[#002B80] hover:text-[#FF7200] hover:bg-orange-50 rounded-lg my-1 px-4 py-2 transition-all duration-200">
                      {service}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#contact" 
                className="relative font-medium text-[#002B80] hover:text-[#FF7200] py-2 px-4 rounded-lg transition-all duration-300 hover:bg-orange-50 group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7200] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-[#FF7200] to-[#FF5500] text-white hover:shadow-lg hover:shadow-orange-200/50 hover:scale-105 transform transition-all duration-300 text-sm lg:text-base px-6 lg:px-8 rounded-xl font-medium">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center hover:bg-primary/5"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
              <div className="px-3 py-4 space-y-1">
                <a href="#home" 
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
                  Home
                </a>
                <a href="#about" 
                  className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
                  About
                </a>
                <div className="px-4 py-3">
                  <div className="text-muted-foreground font-medium mb-2">Services</div>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 cursor-pointer py-2 px-3 rounded-lg transition-all duration-200">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
                <a href="#contact" 
                  className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
                  Contact
                </a>
                <div className="px-4 py-3">
                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transform transition-all duration-300">
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;