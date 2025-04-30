import { useState } from "react";
import { BlogTopic, blogPosts, blogTopics } from "@/data/blog";
import { TopicFilter } from "@/components/blog/TopicFilter";
import BlogPostCard from "@/components/blog/BlogPostCard";
import AppearMotion from "@/components/motion/AppearMotion";

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState<BlogTopic | "All">("All");

  const filteredPosts = selectedTopic === "All"
    ? blogPosts
    : blogPosts.filter(post => post.topic === selectedTopic);

  return (
    <div className="page-content">
      <AppearMotion>
        <h1>Blog</h1>

        <div className="space-y-6">
          <p>
            My blog posts showcase my thoughts and ideas on various topics on a more technical detail.
          </p>

          <TopicFilter
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
            topics={blogTopics}
          />

          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      </AppearMotion>
    </div>
  );
};

export default Blog;
