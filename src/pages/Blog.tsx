import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BlogTopic = "Machine Learning" | "Emulator" | "Operating Systems";

interface BlogPost {
  title: string;
  topic: BlogTopic;
  publishDate: string;
  description: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Fixing VAE model reconstructions - training with different loss function: why and why it works",
    topic: "Machine Learning",
    publishDate: "Nov 25, 2024",
    description: "I've fixed a VAE model that had bad reconstructions. I've trained the model with different loss functions and I understood the reason why it works. In this post, I'll explain my small victory over loss functions.",
    imageUrl: "/lovable-uploads/72e69079-e029-475c-8681-201eb118906c.png",
    link: "https://blog.shlomidom.com/Fixing-VAE-model-reconstructions"
  },
  {
    title: "How I optimized Java Swing pixel drawing in terms of CPU, memory, and GPU",
    topic: "Emulator",
    publishDate: "Aug 02, 2023",
    description: "In this post, I'll show you how I optimize code for drawing pixels in Java Swing, I am trying to squash CPU and memory regressions in my NES emulator.",
    imageUrl: "/lovable-uploads/979cd772-d378-48a3-855e-4c26463b0865.png",
    link: "https://blog.shlomidom.com/How-I-optimized-Java-Swing-pixel-drawing"
  },
  {
    title: "How to create an operation system from scratch",
    topic: "Operating Systems",
    publishDate: "Jul 02, 2023",
    description: "A step-by-step guide to create your own operating system from scratch. The bootloader is written in Assembly x86 and the kernel in C++.",
    imageUrl: "/lovable-uploads/f8132bcb-1fad-4467-a896-fbda54efb708.png",
    link: "https://blog.shlomidom.com/how-to-create-an-operation-system-from-scratch"
  }
];

const topics: BlogTopic[] = [
  "Machine Learning",
  "Emulator",
  "Operating Systems"
];

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState<BlogTopic | "All">("All");

  const filteredPosts = selectedTopic === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.topic === selectedTopic);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <div className="mb-8 text-left">
        <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        <p className="text-muted-foreground">
          Visit my blog at{" "}
          <a 
            href="https://blog.shlomidom.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline hover:text-primary/90 transition-colors duration-200 border-b-2 border-primary/20 hover:border-primary/60 pb-0.5"
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
        {topics.map((topic) => (
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="transition-all duration-300"
          >
            <Card className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="bg-secondary px-2 py-1 rounded-full">
                    {post.topic}
                  </span>
                  <span>•</span>
                  <span>{post.publishDate}</span>
                </div>
                <CardTitle className="text-2xl text-left">{post.title}</CardTitle>
                <CardDescription className="text-base text-left">
                  {post.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
