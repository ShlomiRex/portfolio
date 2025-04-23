import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Eye, Loader, Github } from "lucide-react";
import { Project, ProjectTopic } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Remove skeleton on error
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        {/* Inner card */}
        {project.imageUrl && (
          <div className="relative group">
            {!imageLoaded && (
              <div className="w-full h-48 rounded-t-lg flex items-center justify-center bg-muted">
                <Loader className="w-6 h-6 animate-spin" />
              </div>
            )}

            {/* Project image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className={`w-full h-48 object-cover rounded-t-lg transition-opacity duration-300 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
                }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />

            {/* On hover card, display small animation & show eye/github icon(s) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center w-full h-full">

              {project.githubLink ? (
                // We have github link, show both eye and github icons
                <div className="flex gap-8 items-center justify-center items-stretch w-full h-full">
                  {/* Eye icon */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full transition-all duration-300 transform hover:scale-150">
                    <Eye className="w-8 h-8 text-white" />
                  </a>

                  {/* Vertical divider */}
                  <div className="flex items-center justify-center h-full">
                    <div className="w-px h-[80%] bg-white opacity-50" />
                  </div>

                  {/* Github icon */}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full transition-all duration-300 transform hover:scale-150">
                    <Github className="w-8 h-8 text-white" />
                  </a>
                </div>
              ) : (
                // Else, no github link, display regular eye for the link only
                <div>
                  {/* Make entire project image as a link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  />

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="">
                    <Github className="w-8 h-8 text-white" />
                  </a>
                </div>
              )}
            </div>


          </div>
        )}

        {/* Title, description */}
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        {/* The technologies used in the project */}
        <CardContent>
          <div className="flex flex-wrap gap-0.5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;