import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { TopicFilter } from "@/components/projects/TopicFilter";
import { projects, topics, ProjectTopic } from "@/data/projects";
import AppearMotion from "@/components/motion/AppearMotion";

const Projects = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic | "All">("All");

  const filteredProjects = (selectedTopic === "All")
    ? projects
    : projects.filter(
      project => Array.isArray(project.topic) ? project.topic.includes(selectedTopic) : project.topic === selectedTopic
    );

  return (
    <div className="page-content">
      <AppearMotion>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
      </AppearMotion>
    </div>
  );
};

export default Projects;