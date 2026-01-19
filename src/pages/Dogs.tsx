import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ArrowRight, Search, Filter } from "lucide-react";

const allDogs = [
  {
    id: 1,
    name: "Bruno",
    breed: "Golden Retriever",
    age: "3 months",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&q=80",
    status: "Available",
    gender: "Male",
    size: "Large",
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
    size: "Large",
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
    size: "Large",
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
    size: "Medium",
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
    size: "Small",
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
    size: "Small",
  },
  {
    id: 7,
    name: "Charlie",
    breed: "Husky",
    age: "4 months",
    price: "₹60,000",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&q=80",
    status: "Available",
    gender: "Male",
    size: "Large",
  },
  {
    id: 8,
    name: "Daisy",
    breed: "French Bulldog",
    age: "3 months",
    price: "₹75,000",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80",
    status: "Available",
    gender: "Female",
    size: "Small",
  },
  {
    id: 9,
    name: "Buddy",
    breed: "Rottweiler",
    age: "2 months",
    price: "₹40,000",
    image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=400&q=80",
    status: "Available",
    gender: "Male",
    size: "Large",
  },
];

const breeds = ["All", "Golden Retriever", "German Shepherd", "Labrador Retriever", "Beagle", "Pomeranian", "Shih Tzu", "Husky", "French Bulldog", "Rottweiler"];
const sizes = ["All", "Small", "Medium", "Large"];

const Dogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");

  const filteredDogs = allDogs.filter((dog) => {
    const matchesSearch = dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === "All" || dog.breed === selectedBreed;
    const matchesSize = selectedSize === "All" || dog.size === selectedSize;
    return matchesSearch && matchesBreed && matchesSize;
  });

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-muted/50 paw-pattern py-16">
        <div className="container text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            🐕 Dog Gallery
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Find Your <span className="text-gradient">Perfect Puppy</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our collection of healthy, happy, and adorable puppies from verified breeders across India.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name or breed..."
              className="pl-12 h-12 rounded-full border-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-sm">Filters:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {breeds.slice(0, 6).map((breed) => (
                <Button
                  key={breed}
                  variant={selectedBreed === breed ? "default" : "outline"}
                  size="sm"
                  className={selectedBreed === breed ? "bg-primary" : ""}
                  onClick={() => setSelectedBreed(breed)}
                >
                  {breed}
                </Button>
              ))}
            </div>

            <div className="flex gap-2 ml-auto">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredDogs.length} puppies
          </p>

          {/* Dog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredDogs.map((dog, index) => (
              <div
                key={dog.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <Badge
                    className={`absolute top-4 left-4 ${
                      dog.status === "Available"
                        ? "bg-success text-success-foreground"
                        : "bg-highlight text-highlight-foreground"
                    }`}
                  >
                    {dog.status}
                  </Badge>

                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {dog.gender === "Male" ? "♂️ Male" : "♀️ Female"}
                    </span>
                    <span className="px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {dog.size}
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
                      className="bg-gradient-warm hover:opacity-90 text-primary-foreground"
                    >
                      View Details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🐕</p>
              <h3 className="text-xl font-display font-bold mb-2">No puppies found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Dogs;
