import { Button } from "@/components/ui/button"; 
import { ArrowRight, Play } from "lucide-react"; 
import heroImage from "@/assets/healthcare-team-hero.jpg";
import { Counter } from "@/components/ui/counter";


const HeroSection = () => { return ( 


<section id="home" className="relative min-h-screen flex items-center overflow-hidden"> 

        {/* Background Image with Overlay */} 
        <div className="absolute inset-0"> <img src={heroImage} alt="Professional healthcare team" className="w-full h-full object-cover" /> 
            <div className="absolute inset-0 bg-gradient-hero"></div> 
        </div>
         {/* Content */} 
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="max-w-3xl"> <h1 className="hero-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"> Transform Healthcare <span className="block text-secondary-light">Revenue Management</span> </h1> 
          <p className="hero-paragraph text-xl md:text-2xl text-black/90 mb-15 leading-relaxedd"> Empowering healthcare organizations with AI-powered solutions for revenue cycle optimization, medical coding excellence, and compliance management. </p> 
          <div className="flex flex-col sm:flex-row gap-8 mt-8"> 
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary-light hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg border-2 border-white/20 z-20"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>

            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary-light hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-xl font-semibold shadow-lg border-2 border-white/20 z-20"
            >
              <Play className="mr-3 h-5 w-5" /> Watch Demo
            </Button>
          </div> 
            
            
            {/* Stats */} 
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"> 
              <div className="text-center sm:text-left p-4 backdrop-blur-sm bg-black/45 rounded-xl hover:bg-black/50 transition-all duration-300"> 
                  <div className="text-4xl md:text-6xl lg:text-7xl leading-none">
                    <span className="stat-badge text-white font-black drop-shadow-[0_8px_28px_rgba(0,0,0,0.6)]">
                      <Counter end={98} suffix="%" />
                    </span>
                  </div>
                <div className="text-white/90 mt-2 font-medium">Client Satisfaction</div> 
              </div>

              <div className="text-center sm:text-left p-4 backdrop-blur-sm bg-black/45 rounded-xl hover:bg-black/50 transition-all duration-300"> 
                  <div className="text-4xl md:text-6xl lg:text-7xl leading-none">
                    <span className="stat-badge text-white font-black drop-shadow-[0_8px_28px_rgba(0,0,0,0.6)]">
                      <Counter end={15} suffix="+" />
                    </span>
                  </div> 
                <div className="text-white/90 mt-2 font-medium">Years Experience</div> 
              </div>

              <div className="text-center sm:text-left p-4 backdrop-blur-sm bg-black/45 rounded-xl hover:bg-black/50 transition-all duration-300"> 
                  <div className="text-4xl md:text-6xl lg:text-7xl leading-none">
                    <span className="stat-badge text-white font-black drop-shadow-[0_8px_28px_rgba(0,0,0,0.6)]">
                      <Counter end={500} suffix="+" />
                    </span>
                  </div> 
                <div className="text-white/90 mt-2 font-medium">Healthcare Partners</div> 
              </div>
            </div>
          </div>
        </div>
            
            
            
            {/* Scroll Indicator */} 
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce"> 
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"> 
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse">
                  </div>
                </div>
            </div>
         </section> ); }; 
         
    export default HeroSection;
