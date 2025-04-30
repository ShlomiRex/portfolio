import { Button } from "@/components/ui/button";
import { BlogTopic } from "@/data/blog";
interface TopicFilterProps {
  selectedTopic: BlogTopic | "All";
  onTopicChange: (topic: BlogTopic | "All") => void;
  topics: BlogTopic[];
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