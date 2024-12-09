import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

type ProjectTopic = "Machine Learning" | "Application" | "Operating Systems" | "Emulator" | "Cyber" | "Other";

interface Project {
  title: string;
  description: string;
  topic: ProjectTopic;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Interactive VAE Digit Interpolation",
    description: "I implemented and trained variational autoencoder from scratch and used it to interactively interpolate between two images with slider. The model has only 1.1M parameters, which is significantly less than previous autoencoder-only models that I created.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "Neural Networks"],
    imageUrl: "/lovable-uploads/1d5b7d7b-5f12-4908-8a7d-931bf870ccca.png",
    githubUrl: "https://github.com/ShlomiRex/interactive_vae_digit_interpolation"
  },
  {
    title: "Interactive Denoiser",
    description: "Interactively and automatically load image from MNIST, add noise to the image, and the model will automatically denoise the image (run the trained model). Trained a CNN autoencoder with 5.6M parameters.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "Neural Networks"],
    imageUrl: "/lovable-uploads/7f326a4a-894f-4566-9e8f-33a1deaca70d.png",
    githubUrl: "https://github.com/ShlomiRex/interactive_denoiser"
  },
  {
    title: "AI-Powered Image Recognition",
    description: "Deep learning model for real-time object detection using TensorFlow and OpenCV.",
    topic: "Machine Learning",
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "Task Management App",
    description: "A full-stack web application for managing tasks and projects with real-time collaboration.",
    topic: "Application",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Custom Linux Kernel Module",
    description: "Developed a custom kernel module for enhanced system monitoring.",
    topic: "Operating Systems",
    technologies: ["C", "Linux", "Kernel Development"],
  },
  {
    title: "GameBoy Color Emulator",
    description: "A cycle-accurate GameBoy Color emulator written in Rust.",
    topic: "Emulator",
    technologies: ["Rust", "SDL2"],
  },
  {
    title: "Network Intrusion Detection System",
    description: "Real-time network traffic analysis and threat detection system.",
    topic: "Cyber",
    technologies: ["Python", "Wireshark", "Machine Learning"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with modern web technologies.",
    topic: "Other",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const topics: ProjectTopic[] = [
  "Machine Learning",
  "Application",
  "Operating Systems",
  "Emulator",
  "Cyber",
  "Other",
];

const Projects = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic | "All">("All");

  const filteredProjects = selectedTopic === "All" 
    ? projects 
    : projects.filter(project => project.topic === selectedTopic);

  return (
    <div className="min-h-screen w-full py-12 px-2 sm:py-20 sm:px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 sm:space-y-8"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            <Button
              variant={selectedTopic === "All" ? "default" : "outline"}
              onClick={() => setSelectedTopic("All")}
              className="transition-colors text-sm sm:text-base"
            >
              All
            </Button>
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                onClick={() => setSelectedTopic(topic)}
                className="transition-colors text-sm sm:text-base"
              >
                {topic}
              </Button>
            ))}
          </div>

          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              containScroll: "trimSnaps"
            }}
            className="w-full max-w-5xl mx-auto -ml-2 sm:ml-0"
          >
            <CarouselContent className="gap-3 sm:gap-4">
              {filteredProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    {project.imageUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-t-lg"
                      >
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </a>
                    )}
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <span className="text-sm font-medium">Topic:</span>
                          <span className="ml-2 text-sm text-muted-foreground">{project.topic}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Technologies:</span>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;