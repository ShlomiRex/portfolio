import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Eye } from "lucide-react";
import { BlogPost, BlogTopic, blogPosts, blogTopics } from "@/data/blog";

const BlogPostCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="transition-all duration-300"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-video group">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0" />
          )}
          <img
            src={post.imageUrl}
            alt={post.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <a 
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 no-underline hover:no-underline"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="bg-secondary px-2 py-1 rounded-full">
              {post.topic}
            </span>
            <span>•</span>
            <span>{post.publishDate}</span>
          </div>
          <CardTitle className="text-2xl">{post.title}</CardTitle>
          <CardDescription className="text-base">
            {post.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState<BlogTopic | "All">("All");

  const filteredPosts = selectedTopic === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.topic === selectedTopic);

  return (
    <div className="container max-w-4xl mx-auto py-24">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        <p className="text-muted-foreground">
          Visit my blog at{" "}
          <a 
            href="https://blog.shlomidom.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary/90 font-medium px-2 py-1 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors duration-200 border border-primary/20 hover:border-primary/40"
          >
            blog.shlomidom.com
          </a>
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
        <Button
          variant={selectedTopic === "All" ? "default" : "outline"}
          onClick={() => setSelectedTopic("All")}
          className="transition-colors text-sm sm:text-base"
        >
          All
        </Button>
        {blogTopics.map((topic) => (
          <Button
            key={topic}
            variant={selectedTopic === topic ? "default" : "outline"}
            onClick={() => setSelectedTopic(topic)}
            className="transition-colors text-sm sm:text-base"
          >
            {topic}
          </Button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredPosts.map((post, index) => (
          <BlogPostCard key={index} post={post} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
