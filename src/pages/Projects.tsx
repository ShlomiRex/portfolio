import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { TopicFilter } from "@/components/projects/TopicFilter";
import { projects, topics, ProjectTopic, ProjectStars } from "@/data/projects";
import AppearMotion from "@/components/motion/AppearMotion";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";

const Projects = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopic | "All">("All");
  const [selectedStars, setSelectedStars] = useState<ProjectStars | "All">("All");

  const filteredProjects = projects.filter((project) => {
    const matchesTopic = selectedTopic === "All"
      ? true
      : Array.isArray(project.topic) ? project.topic.includes(selectedTopic) : project.topic === selectedTopic;

    const matchesStars = selectedStars === "All" ? true : project.stars === selectedStars;

    return matchesTopic && matchesStars;
  });

  return (
    <div className="page-content">
      <AppearMotion>
        <h1>Projects</h1>

        <div className="space-y-6">
          <p className="text-lg">
            Here are some of the projects I have worked on. You can filter the projects by topic.
          </p>

          <div>
            <p className="text-sm sm:text-base mb-2">Filter by category</p>
            <TopicFilter
              selectedTopic={selectedTopic}
              onTopicChange={setSelectedTopic}
              topics={Object.values(topics)}
            />
          </div>

          <div>
            <p className="text-sm sm:text-base mb-2">Filter by stars</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              <Button
                variant={selectedStars === "All" ? "default" : "outline"}
                onClick={() => setSelectedStars("All")}
                className="transition-colors text-sm sm:text-base"
              >
                All
              </Button>

              {([1, 2, 3] as const).map((stars) => (
                <Button
                  key={stars}
                  variant={selectedStars === stars ? "default" : "outline"}
                  onClick={() => setSelectedStars(stars)}
                  className="transition-colors"
                >
                  <StarRating rating={stars} />
                </Button>
              ))}
            </div>
          </div>

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
                stars={project.stars}
              />
            ))}
          </div>
        </div>
      </AppearMotion>
    </div>
  );
};

export default Projects;