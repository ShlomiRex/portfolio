import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Layout, Send, Moon, BarChart, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Hero Section with Parallax",
      description: "Create an engaging first impression with a dynamic hero section featuring smooth parallax scrolling and animated elements.",
      icon: Layout,
    },
    {
      title: "Projects Carousel",
      description: "Showcase your work with an interactive and responsive project carousel that highlights your best achievements.",
      icon: ArrowRight,
    },
    {
      title: "Enhanced Contact Form",
      description: "Implement a user-friendly contact form with real-time validation and smooth animations for better user experience.",
      icon: Send,
    },
    {
      title: "Dark Mode Toggle",
      description: "Add a sleek dark mode toggle for comfortable viewing in different lighting conditions.",
      icon: Moon,
    },
    {
      title: "Skills Visualization",
      description: "Display your expertise with animated progress bars and interactive skill charts.",
      icon: BarChart,
    },
    {
      title: "Testimonials Section",
      description: "Build trust with a dedicated testimonials section featuring client feedback and success stories.",
      icon: MessageSquare,
    },
    {
      title: "Blog Integration",
      description: "Share your insights and experiences with an integrated blog section.",
      icon: BookOpen,
    },
    {
      title: "Theme Customization",
      description: "Implement custom color schemes and styling options for a unique visual identity.",
      icon: Palette,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Suggested Features</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Enhance your website with these carefully selected features designed to improve user experience and engagement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="w-8 h-8 mb-4 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  Request Feature
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;