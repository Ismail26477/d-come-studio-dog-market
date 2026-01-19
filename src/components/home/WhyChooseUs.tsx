import { Shield, Heart, Truck, Phone, Award, Stethoscope } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Breeders",
    description: "All our breeders are thoroughly verified and follow ethical breeding practices.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Health Guarantee",
    description: "Every puppy comes with complete vaccination records and health certificates.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Heart,
    title: "Lifetime Support",
    description: "Get 24/7 support for nutrition, training, and healthcare guidance.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    description: "Secure and comfortable transportation across all major Indian cities.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Award,
    title: "Pure Breed Certified",
    description: "KCI registration and breed authenticity certification included.",
    color: "bg-highlight/10 text-highlight",
  },
  {
    icon: Phone,
    title: "Easy Communication",
    description: "Connect instantly via WhatsApp for quick responses and video calls.",
    color: "bg-primary/10 text-primary",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30 paw-pattern">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            ✨ Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            We Make Pet Adoption <span className="text-gradient">Simple & Safe</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            D-Code Studio is committed to connecting you with your perfect furry companion 
            through a transparent, trustworthy, and joyful experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
