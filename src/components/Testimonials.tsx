
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    content: "RubleRunners transformed our renovation disaster into a clean slate in just one day. Their team was professional, efficient, and respectful of our property. Highly recommend!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Construction Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As a construction manager, I need reliable partners. RubleRunners has been our go-to for debris removal for over 3 years. Always punctual, always thorough. They make my job easier.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Real Estate Agent",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "I recommend RubleRunners to all my clients preparing homes for sale. The difference they make in clearing properties is remarkable, and it significantly improves selling potential.",
    rating: 5
  },
  {
    name: "David Wilson",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    content: "After a small kitchen fire, RubleRunners cleared the damaged materials quickly, allowing us to renovate and reopen in record time. Their emergency service was a business-saver.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from homeowners and businesses who have experienced the RubleRunners difference.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Testimonials View */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`border bg-card overflow-hidden transition-all duration-500 ${
                  index === activeIndex ? "scale-105 shadow-lg" : "scale-100 opacity-75"
                }`}
              >
                <CardContent className="p-6 pt-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-primary">
                      <Quote className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile Testimonials View */}
          <div className="md:hidden">
            <Card className="border bg-card overflow-hidden">
              <CardContent className="p-6 pt-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                  <div className="text-primary">
                    <Quote className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{testimonials[activeIndex].content}</p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < testimonials[activeIndex].rating ? "text-amber-500 fill-amber-500" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary w-6" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 -left-5 -translate-y-1/2 rounded-full"
              onClick={handlePrev}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 -right-5 -translate-y-1/2 rounded-full"
              onClick={handleNext}
              disabled={isAnimating}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
