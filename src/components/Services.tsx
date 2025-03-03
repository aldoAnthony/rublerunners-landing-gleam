
import { Truck, Package, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Residential Debris Removal",
      description: "Complete removal of construction debris, renovation waste, and household junk from residential properties."
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: "Commercial Waste Clearance",
      description: "Efficient clearing of construction sites, office spaces, and commercial properties to keep your business running smoothly."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Emergency Cleanup",
      description: "Fast response cleanup services for post-disaster situations including storm damage, flooding, and fire cleanup."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Responsible Disposal",
      description: "Environmentally conscious waste sorting, recycling, and disposal that meets all local regulations."
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Rubble Removal Solutions</h2>
          <p className="text-muted-foreground">
            We offer a full range of debris removal services tailored to your specific needs, 
            ensuring a clean, safe environment for your home or business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm overflow-hidden card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-5 p-3 rounded-2xl bg-accent/50">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Efficient. Reliable. Professional.</h3>
              <ul className="space-y-4">
                {[
                  "Fully licensed and insured for your protection",
                  "Same-day service availability for urgent needs",
                  "Transparent pricing with no hidden fees",
                  "Eco-friendly disposal practices",
                  "Professional, uniformed staff"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=3270&auto=format&fit=crop" 
                alt="Our professional team" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-lg font-bold text-primary">10+ Years</div>
                <div className="text-sm text-muted-foreground">of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
