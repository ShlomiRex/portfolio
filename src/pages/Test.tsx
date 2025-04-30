import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { TopicFilter } from "@/components/projects/TopicFilter";
import { projects, topics, ProjectTopic } from "@/data/projects";
// Test page

const Test = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic | "All">("All");

  const filteredProjects = (selectedTopic === "All")
    ? projects
    : projects.filter(
      project => Array.isArray(project.topic) ? project.topic.includes(selectedTopic) : project.topic === selectedTopic
    );

  return (
    <div className="page-content">
      <h1>Projects</h1>

      <div className="space-y-6">
        <p className="text-lg">
          Here are some of the projects I have worked on. You can filter the projects by topic.
        </p>

        <TopicFilter
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
          topics={Object.values(topics)}
        />

        {/* Projects grid */}
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
      </div>
    </div>
  );
};

export default Test;