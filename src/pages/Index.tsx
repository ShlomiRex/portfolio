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

  // Modified parallax effects for smoother NES section transition
  const nesOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const nesY = useTransform(scrollYProgress, [0.4, 1], [100, -100]);
  const nesScale = useTransform(scrollYProgress, [0.3, 0.4], [0.9, 1]);

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

      {/* NES Emulator Section with static background */}
      <div className="relative min-h-screen">
        {/* Striped transition overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              var(--background) 0%,
              var(--background) 10%,
              transparent 10%,
              transparent 20%
            )`
          }}
        />

        <motion.div
          style={{ y: nesY }}
          className="absolute inset-0"
        >


          {/* Additional background patterns */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at 50% 50%,
                  rgba(155, 135, 245, 0.55) 0%,
                  transparent 60%
                )
              `
            }}
          />
        </motion.div>

        {/* NES Emulator Project */}
        <div className="backdrop-blur-sm bg-background/10 p-8 rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            NES Emulator Project
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                This NES emulator project represents a deep dive into hardware emulation
                and low-level programming. Built from scratch in Java, it demonstrates
                the complex interaction and timings between CPU, PPU (GPU), and memory.
              </p>
              <p className="text-lg leading-relaxed">
                The emulator features a custom debugger, allowing real-time inspection of the system's state. This makes it an invaluable tool for understanding how the original NES hardware worked.
              </p>
              <div className="flex justify-start mt-6">
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <a
                    href="https://github.com/ShlomiRex/nes-emulator-java"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/projects/nes_emulator.gif"
                alt="NES Emulator Demo"
                className="rounded-lg shadow-lg col-span-2"
              />

              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">6502 CPU</CardTitle>
                  <CardDescription>Full implementation of the original NES CPU with cycle-accurate timing</CardDescription>
                </CardHeader>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">PPU</CardTitle>
                  <CardDescription>Picture Processing Unit with accurate sprite and background rendering</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
