
import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="mb-4">Contact Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Ready for a Cleaner Space?</h2>
            <p className="text-muted-foreground mb-8">
              Get in touch for a free estimate. We'll respond within 24 hours to discuss your 
              rubble removal needs and provide a customized solution.
            </p>
            
            <div className="space-y-6">
              <Card className="bg-background/50 border-none shadow-none">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="bg-primary/10 p-2.5 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Call Us</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 border-none shadow-none">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="bg-primary/10 p-2.5 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email Us</p>
                    <p className="text-muted-foreground">info@rublerunners.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 border-none shadow-none">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="bg-primary/10 p-2.5 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Hours</p>
                    <p className="text-muted-foreground">Mon-Fri: 8am-6pm, Sat: 9am-3pm</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 border-none shadow-none">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="bg-primary/10 p-2.5 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-muted-foreground">Serving the greater metro area</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="border shadow">
              <CardContent className="p-6 pt-6">
                <h3 className="text-xl font-medium mb-6">Get a Free Quote</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Needed
                    </label>
                    <select 
                      id="service" 
                      className="w-full px-3 py-2 border border-input rounded bg-background"
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option value="residential">Residential Debris Removal</option>
                      <option value="commercial">Commercial Waste Clearance</option>
                      <option value="emergency">Emergency Cleanup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full group">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
