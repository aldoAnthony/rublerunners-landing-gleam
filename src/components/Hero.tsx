
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1558227576-0a3cce24a11e?q=80&w=3174&auto=format&fit=crop')] 
        bg-cover bg-center bg-no-repeat brightness-[0.25]"
        aria-hidden="true"
      />
      
      <div className="container max-w-7xl mx-auto px-6 pt-20 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12">
            <Badge 
              variant="secondary" 
              className="py-1.5 px-4 rounded-full animate-fade-in opacity-0"
            >
              Professional Debris Removal
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white animate-fade-in opacity-0 animate-delay-100">
              <span className="block">Clear the way.</span>
              <span className="block">Live better.</span>
            </h1>
            
            <p className="text-lg text-white/80 animate-fade-in opacity-0 animate-delay-200">
              Professional rubble removal services for homes and businesses. 
              We clear debris quickly and efficiently, so you can enjoy your clean space again.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 animate-delay-300">
              <Button size="lg" className="rounded-full group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-white border-white/30 hover:bg-white/10">
                Our Services
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden animate-fade-in-right opacity-0">
              <div className="absolute inset-0 glass rounded-3xl transform -rotate-3 scale-95"></div>
              <div className="absolute inset-0 glass rounded-3xl transform rotate-3 scale-90"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/20 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=3087&auto=format&fit=crop" 
                  alt="Professional rubble removal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
