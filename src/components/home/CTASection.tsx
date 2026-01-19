import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 paw-pattern opacity-10" />
      <div className="absolute top-10 right-20 text-8xl opacity-20 animate-float">
        🐾
      </div>
      <div className="absolute bottom-10 left-20 text-6xl opacity-20 animate-wiggle">
        🐶
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Find Your Perfect Furry Friend?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Browse our collection of adorable, healthy puppies waiting for their 
            forever homes. Your new best friend is just a click away!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-semibold text-lg px-8 shadow-lg"
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
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8"
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="mt-8 text-primary-foreground/80 text-sm">
            ⭐ Rated 4.9/5 by 5000+ happy pet parents across India
          </p>
        </div>
      </div>
    </section>
  );
}
