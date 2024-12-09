import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ProjectTopic = "Machine Learning" | "Application" | "Operating Systems" | "Emulator" | "Cyber" | "Other";

interface Project {
  title: string;
  description: string;
  topic: ProjectTopic;
  technologies: string[];
}

const projects: Project[] = [
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
    <div className="min-h-screen w-full py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedTopic === "All" ? "default" : "outline"}
              onClick={() => setSelectedTopic("All")}
              className="transition-colors"
            >
              All
            </Button>
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                onClick={() => setSelectedTopic(topic)}
                className="transition-colors"
              >
                {topic}
              </Button>
            ))}
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {filteredProjects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm font-medium">Topic:</span>
                          <span className="ml-2 text-sm text-muted-foreground">{project.topic}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Technologies:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;