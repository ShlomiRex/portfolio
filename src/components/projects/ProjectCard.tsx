import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  title: string;
  description: string;
  topic: ProjectTopic;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
}

export type ProjectTopic = "Machine Learning" | "Application" | "Operating Systems" | "Emulator" | "Cyber";

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        {project.imageUrl && (
          <div className="relative">
            {!imageLoaded && (
              <Skeleton className="w-full h-48 rounded-t-lg" />
            )}
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className={`w-full h-48 object-cover rounded-t-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0"
              />
            )}
          </div>
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
    </motion.div>
  );
};