import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Pet Street, Sector 15", "Mumbai, Maharashtra 400001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@dcodestudio.in", "support@dcodestudio.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: 11:00 AM - 5:00 PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-muted/50 paw-pattern py-16">
        <div className="container text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            📞 Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            We'd Love to <span className="text-gradient">Hear From You</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our puppies or need help choosing the perfect companion? 
            Our friendly team is here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out through any of these channels and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 bg-success/10 rounded-2xl border border-success/20">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-success" />
                  <h4 className="font-display font-bold text-foreground">
                    Quick Response on WhatsApp
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  For fastest response, message us on WhatsApp. We usually reply within minutes!
                </p>
                <Button
                  asChild
                  className="w-full bg-success hover:bg-success/90 text-success-foreground"
                >
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about the puppy you're looking for, or ask any questions..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-warm hover:opacity-90 text-primary-foreground font-semibold shadow-playful"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="rounded-3xl overflow-hidden shadow-card h-[400px] bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">Find Us Here</h3>
              <p className="text-muted-foreground">
                123 Pet Street, Sector 15, Mumbai
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                (Interactive map would be integrated here)
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
