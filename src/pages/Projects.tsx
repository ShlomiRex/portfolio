import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { TopicFilter } from "@/components/projects/TopicFilter";
import { projects, topics, ProjectTopic } from "@/data/projects";

const Projects = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic | "All">("All");

  console.log("Selected topic:", selectedTopic);

  const filteredProjects = (selectedTopic === "All")
    ? projects 
    : projects.filter(
      project => Array.isArray(project.topic) ? project.topic.includes(selectedTopic) : project.topic === selectedTopic
    );

  return (
    <div className="min-h-screen w-full py-12 sm:py-20 px-0">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 sm:space-y-8 px-0 sm:px-4"
        >
          <h1 className="text-4xl font-bold pt-16 sm:pt-0">Projects</h1>
          
          <TopicFilter
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
            topics={Object.values(topics)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard
              key={index}
              project={{
                ...project,
                topic: Array.isArray(project.topic) ? project.topic : [project.topic],
              }}
              index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;