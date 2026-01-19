import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowRight } from "lucide-react";

const featuredDogs = [
  {
    id: 1,
    name: "Bruno",
    breed: "Golden Retriever",
    age: "3 months",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&q=80",
    status: "Available",
    gender: "Male",
  },
  {
    id: 2,
    name: "Luna",
    breed: "German Shepherd",
    age: "2 months",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&q=80",
    status: "Available",
    gender: "Female",
  },
  {
    id: 3,
    name: "Max",
    breed: "Labrador Retriever",
    age: "4 months",
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?w=400&q=80",
    status: "Reserved",
    gender: "Male",
  },
  {
    id: 4,
    name: "Coco",
    breed: "Beagle",
    age: "3 months",
    price: "₹30,000",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&q=80",
    status: "Available",
    gender: "Female",
  },
  {
    id: 5,
    name: "Rocky",
    breed: "Pomeranian",
    age: "2 months",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    status: "Available",
    gender: "Male",
  },
  {
    id: 6,
    name: "Bella",
    breed: "Shih Tzu",
    age: "3 months",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400&q=80",
    status: "Available",
    gender: "Female",
  },
];

export function FeaturedDogs() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            🐕 Featured Puppies
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet Our <span className="text-gradient">Adorable Friends</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each of our puppies is hand-picked from verified breeders, ensuring 
            they're healthy, happy, and ready to become part of your family.
          </p>
        </div>

        {/* Dog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredDogs.map((dog, index) => (
            <div
              key={dog.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <Badge
                  className={`absolute top-4 left-4 ${
                    dog.status === "Available"
                      ? "bg-success text-success-foreground"
                      : "bg-highlight text-highlight-foreground"
                  }`}
                >
                  {dog.status}
                </Badge>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Heart className="w-5 h-5" />
                </button>

                {/* Gender Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {dog.gender === "Male" ? "♂️ Male" : "♀️ Female"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {dog.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{dog.breed}</p>
                  </div>
                  <p className="text-lg font-bold text-primary">{dog.price}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    🎂 {dog.age}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-warm hover:opacity-90 text-primary-foreground font-semibold px-8 shadow-playful"
          >
            <Link to="/dogs">
              View All Puppies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
