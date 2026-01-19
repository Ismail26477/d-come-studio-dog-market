import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Dog Food - Chicken",
    category: "Food",
    price: "₹1,499",
    originalPrice: "₹1,899",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80",
    rating: 4.8,
    reviews: 234,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Cozy Dog Bed - Large",
    category: "Accessories",
    price: "₹2,999",
    originalPrice: "₹3,599",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&q=80",
    rating: 4.9,
    reviews: 156,
    badge: null,
  },
  {
    id: 3,
    name: "Interactive Chew Toy Set",
    category: "Toys",
    price: "₹799",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&q=80",
    rating: 4.7,
    reviews: 89,
    badge: "New",
  },
  {
    id: 4,
    name: "Dog Shampoo - Natural",
    category: "Grooming",
    price: "₹449",
    originalPrice: "₹599",
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&q=80",
    rating: 4.6,
    reviews: 312,
    badge: null,
  },
  {
    id: 5,
    name: "Leather Dog Collar - Premium",
    category: "Accessories",
    price: "₹899",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1567612529009-ced9c6fbf9a5?w=400&q=80",
    rating: 4.8,
    reviews: 78,
    badge: null,
  },
  {
    id: 6,
    name: "Dental Care Treats",
    category: "Health",
    price: "₹349",
    originalPrice: "₹449",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80",
    rating: 4.5,
    reviews: 201,
    badge: "Popular",
  },
  {
    id: 7,
    name: "Retractable Dog Leash",
    category: "Accessories",
    price: "₹1,199",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&q=80",
    rating: 4.7,
    reviews: 145,
    badge: null,
  },
  {
    id: 8,
    name: "Puppy Training Pads - 50pcs",
    category: "Health",
    price: "₹599",
    originalPrice: "₹799",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    rating: 4.4,
    reviews: 267,
    badge: null,
  },
];

const categories = ["All", "Food", "Toys", "Accessories", "Grooming", "Health"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-playful py-16">
        <div className="container text-center">
          <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-card/20 text-secondary-foreground border-0">
            🛍️ Pet Store
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Everything Your Puppy Needs
          </h1>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Premium quality food, toys, accessories, and health products for your furry friend.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {product.badge && (
                    <Badge
                      className={`absolute top-4 left-4 ${
                        product.badge === "Bestseller"
                          ? "bg-primary text-primary-foreground"
                          : product.badge === "New"
                          ? "bg-success text-success-foreground"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}

                  <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors opacity-0 group-hover:opacity-100">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="font-display font-bold text-foreground mt-1 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-highlight fill-highlight" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="icon" className="bg-primary hover:bg-primary/90">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="bg-gradient-sunny rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-highlight-foreground mb-4">
              🎉 First Order Special!
            </h2>
            <p className="text-highlight-foreground/90 mb-6 max-w-xl mx-auto">
              Get 20% off on your first order. Use code PUPPY20 at checkout.
            </p>
            <Button size="lg" className="bg-card text-primary hover:bg-card/90 font-semibold">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
