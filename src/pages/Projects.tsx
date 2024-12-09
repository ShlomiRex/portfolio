import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard, ProjectTopic } from "@/components/projects/ProjectCard";
import { TopicFilter } from "@/components/projects/TopicFilter";
import { projects, topics } from "@/data/projects";

const Projects = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic | "All">("All");

  const filteredProjects = selectedTopic === "All" 
    ? projects 
    : projects.filter(project => project.topic === selectedTopic);

  return (
    <div className="min-h-screen w-full py-12 sm:py-20 px-0 sm:px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 sm:space-y-8 px-4 sm:px-0"
        >
          <h1 className="text-4xl font-bold pt-16 sm:pt-0">Projects</h1>
          
          <TopicFilter
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
            topics={topics}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 1.11, 0.81, 0.99] // spring-like animation
                }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;