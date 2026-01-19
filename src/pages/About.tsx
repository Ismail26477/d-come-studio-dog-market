import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Award, Users, Target, Eye } from "lucide-react";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Dr. Amit Patel",
    role: "Chief Veterinarian",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Neha Gupta",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
];

const values = [
  {
    icon: Heart,
    title: "Love & Care",
    description: "Every puppy deserves love, and every family deserves a healthy companion.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Complete honesty about our puppies' health, lineage, and care history.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We work only with ethical breeders who prioritize puppy welfare.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a family of pet lovers who support each other's journey.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-muted/50 paw-pattern py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
              🐕 Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Connecting <span className="text-gradient">Loving Families</span> with Perfect Puppies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              D-Code Studio was born from a simple belief: every dog deserves a loving home, 
              and every family deserves a trustworthy partner in their pet adoption journey.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2014, D-Code Studio started with a mission to transform the pet 
                industry in India. We noticed that many families struggled to find healthy, 
                well-bred puppies from trustworthy sources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began as a small operation has grown into India's most trusted dog 
                marketplace. We've connected over 5,000 families with their perfect furry 
                companions, working with 50+ verified breeders across the country.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue our mission with the same passion – ensuring that every 
                puppy finds a loving home and every family experiences the joy of pet parenthood.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80"
                  alt="Happy dogs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-card rounded-2xl shadow-lg">
                <p className="text-3xl font-display font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-warm">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
              <div className="w-14 h-14 rounded-2xl bg-card/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To make pet adoption in India transparent, joyful, and accessible. We strive 
                to ensure every puppy comes from ethical breeders and finds a forever home 
                where they'll be loved and cared for.
              </p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
              <div className="w-14 h-14 rounded-2xl bg-card/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To become India's most loved pet marketplace, where every interaction brings 
                joy and every adoption creates a lifelong bond between families and their 
                furry companions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at D-Code Studio.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind D-Code Studio who make magic happen every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
