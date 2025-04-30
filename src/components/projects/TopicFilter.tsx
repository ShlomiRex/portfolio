import { Button } from "@/components/ui/button";
import { ProjectTopic } from "@/data/projects";

interface TopicFilterProps {
  selectedTopic: ProjectTopic | "All";
  onTopicChange: (topic: ProjectTopic | "All") => void;
  topics: ProjectTopic[];
}

export const TopicFilter = ({ selectedTopic, onTopicChange, topics }: TopicFilterProps) => {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
      <Button
        variant={selectedTopic === "All" ? "default" : "outline"}
        onClick={() => onTopicChange("All")}
        className="transition-colors text-sm sm:text-base"
      >
        All
      </Button>
      {topics.map((topic) => (
        <Button
          key={topic}
          variant={selectedTopic === topic ? "default" : "outline"}
          onClick={() => onTopicChange(topic)}
          className="transition-colors text-sm sm:text-base"
        >
          {topic}
        </Button>
      ))}
    </div>
  );
};