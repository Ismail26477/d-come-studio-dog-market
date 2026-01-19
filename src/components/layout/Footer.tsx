import { Link } from "react-router-dom";
import { Dog, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Heart } from "lucide-react";

const quickLinks = [
  { name: "Dog Gallery", path: "/dogs" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const dogBreeds = [
  "Golden Retriever",
  "German Shepherd",
  "Labrador",
  "Beagle",
  "Pomeranian",
  "Shih Tzu",
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center">
                <Dog className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-background">
                  D-Code Studio
                </span>
                <span className="text-xs text-background/60">
                  Premium Dog Market
                </span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              India's most trusted destination for premium puppies and dogs. 
              We connect loving families with their perfect furry companions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-background">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Breeds */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-background">
              Popular Breeds
            </h4>
            <ul className="space-y-3">
              {dogBreeds.map((breed) => (
                <li key={breed}>
                  <Link
                    to="/dogs"
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {breed}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-background">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/70">
                  123 Pet Street, Sector 15,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@dcodestudio.in"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  hello@dcodestudio.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2024 D-Code Studio. All rights reserved.
          </p>
          <p className="text-sm text-background/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for pet lovers in India
          </p>
        </div>
      </div>
    </footer>
  );
}
