import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden paw-pattern">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-highlight/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-2xl" />

      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-xl">🐕</span>
              <span className="text-sm font-semibold text-primary">
                India's #1 Premium Dog Market
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Find Your{" "}
              <span className="text-gradient">Perfect Furry</span>{" "}
              <span className="relative">
                Friend
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="hsl(var(--highlight))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Today! 🐾
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Welcome to D-Code Studio – your trusted destination for healthy, 
              happy, and adorable puppies. We connect loving families with 
              their perfect canine companions across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-warm hover:opacity-90 text-primary-foreground font-semibold text-lg px-8 shadow-playful"
              >
                <Link to="/dogs">
                  Browse Puppies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 border-2"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-success" />
                </div>
                <span>Verified Breeders</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-accent" />
                </div>
                <span>Health Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-highlight/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-highlight" />
                </div>
                <span>5000+ Happy Families</span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-card-hover">
                  <img
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                    alt="Happy Golden Retriever"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 px-4 py-3 bg-card rounded-2xl shadow-lg flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center text-success-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Vaccinated</p>
                    <p className="text-xs text-muted-foreground">& Health Checked</p>
                  </div>
                </div>
              </div>

              {/* Smaller images */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1546421845-6471bdcf3edf?w=400&q=80"
                  alt="Cute Puppy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80"
                  alt="Playful Dog"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative paw prints */}
            <div className="absolute -top-8 -right-8 text-6xl opacity-20 animate-wiggle">
              🐾
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
