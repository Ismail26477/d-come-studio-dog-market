import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    dogBreed: "Golden Retriever",
    rating: 5,
    review:
      "We got our Bruno from D-Code Studio and he's the best thing that happened to our family! The team was incredibly helpful and professional throughout the process.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    dogBreed: "German Shepherd",
    rating: 5,
    review:
      "Exceptional service! The puppy was healthy, vaccinated, and exactly as described. The documentation was complete and delivery was smooth.",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    dogBreed: "Labrador",
    rating: 5,
    review:
      "D-Code Studio made adopting a puppy so easy! They provided excellent after-adoption support and are always available for guidance.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            💬 Happy Families
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="text-gradient">Pet Parents</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy families who found their perfect furry 
            companion through D-Code Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-highlight fill-highlight"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.dogBreed} Parent
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
