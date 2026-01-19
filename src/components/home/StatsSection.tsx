import { Dog, Heart, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Dog,
    value: "500+",
    label: "Dogs Available",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    value: "5000+",
    label: "Happy Families",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Users,
    value: "50+",
    label: "Verified Breeders",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    color: "bg-highlight/10 text-highlight",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
