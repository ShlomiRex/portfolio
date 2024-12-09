import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const featuredProjects = [
    {
      title: "Interactive VAE Digit Interpolation",
      description: "A web application that demonstrates digit morphing using Variational Autoencoders (VAE) in real-time",
      tech: ["Python", "PyTorch", "React"],
      imageUrl: "/lovable-uploads/1d5b7d7b-5f12-4908-8a7d-931bf870ccca.png",
      link: "https://github.com/ShlomiRex/interactive_vae_digit_interpolation"
    },
    {
      title: "Sorting Algorithms Visualizer",
      description: "Interactive visualization of various sorting algorithms to help understand their mechanics",
      tech: ["JavaScript", "React", "Algorithms"],
      imageUrl: "/lovable-uploads/3fb15bc2-81e0-43d9-ac91-1b44df98f66f.png",
      link: "https://shlomirex.github.io/sorting-algo-visualizer/"
    },
    {
      title: "Interactive Denoiser",
      description: "Real-time image denoising using deep learning, with interactive comparison features",
      tech: ["Python", "PyTorch", "Deep Learning"],
      imageUrl: "/lovable-uploads/7f326a4a-894f-4566-9e8f-33a1deaca70d.png",
      link: "https://github.com/ShlomiRex/interactive_denoiser"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background/50 -z-10" />
        
        <div className="container max-w-4xl mx-auto text-center">
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
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
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
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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