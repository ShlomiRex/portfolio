import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  // Create multiple transform values for different parallax speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const featuredProjects = [
    {
      title: "Interactive VAE Digit Interpolation",
      description: "A web application that demonstrates digit morphing using Variational Autoencoders (VAE) in real-time",
      tech: ["Python", "PyTorch", "React"],
      imageUrl: "/images/projects/interactive_vae_digit_interpolation.gif",
      link: "https://github.com/ShlomiRex/interactive_vae_digit_interpolation"
    },
    {
      title: "Sorting Algorithms Visualizer",
      description: "Interactive visualization of various sorting algorithms to help understand their mechanics",
      tech: ["JavaScript", "React", "Algorithms"],
      imageUrl: "/images/projects/sorting_algo_visualizer.gif",
      link: "https://shlomirex.github.io/sorting-algo-visualizer/"
    },
    {
      title: "NES Emulator",
      description: "Basic NES emulator and debugger written in Java which can run NES games. I learned hardware emulation and optimizations. This emulator comes with a debugger for CPU and PPU and assembly viewer.",
      topic: "Emulator",
      technologies: ["Java", "Assembly", "Hardware Emulation"],
      imageUrl: "/images/projects/nes_emulator.gif",
      githubUrl: "https://github.com/ShlomiRex/nes-emulator-java"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background/50 -z-10" 
        />
        
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4 rotate-12 scale-150">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="h-32 bg-primary/10 rounded-lg transform hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </motion.div>
        
        <div className="container max-w-4xl mx-auto text-center relative">
          <motion.div
            style={{ opacity, scale }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              Welcome to My Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Hi, I'm Shlomi. Explore my work, research, and journey through technology and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="container max-w-6xl mx-auto px-4 py-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;