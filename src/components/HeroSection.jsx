import { Button } from "@/components/ui/button"; 
import { ArrowRight, Play } from "lucide-react"; 
import heroImage from "@/assets/healthcare-team-hero.jpg";


const HeroSection = () => { return ( 


<section id="home" className="relative min-h-screen flex items-center overflow-hidden"> 

        {/* Background Image with Overlay */} 
        <div className="absolute inset-0"> <img src={heroImage} alt="Professional healthcare team" className="w-full h-full object-cover" /> 
            <div className="absolute inset-0 bg-gradient-hero"></div> 
        </div>
         {/* Content */} 
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="max-w-3xl"> <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"> Transform Healthcare <span className="block text-secondary-light">Revenue Management</span> </h1> 
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"> Empowering healthcare organizations with AI-powered solutions for revenue cycle optimization, medical coding excellence, and compliance management. </p> 
          <div className="flex flex-col sm:flex-row gap-4"> 
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 group" > Get Started Today <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> </Button> 
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300" > 
            <Play className="mr-2 h-5 w-5" /> Watch Demo </Button> </div> 
            
            
            {/* Stats */} 
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"> 
              <div className="text-center sm:text-left"> 
                <div className="text-3xl md:text-4xl font-bold text-white">98% 
                </div> 
                <div className="text-white/80">Client Satisfaction</div> 
              </div> 
            <div className="text-center sm:text-left"> 
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div> 
              <div className="text-white/80">Years Experience</div> 
            </div>


            <div className="text-center sm:text-left"> <div className="text-3xl md:text-4xl font-bold text-white">500+</div> 
            <div className="text-white/80">Healthcare Partners</div> 
            </div> </div> </div> </div> 
            
            
            
            {/* Scroll Indicator */} 
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce"> 
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"> 
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse">
                  </div>
                </div>
            </div>
         </section> ); }; 
         
    export default HeroSection;
