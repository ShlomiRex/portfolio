import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  topic: string;
  publishDate: string;
  description: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Fixing VAE model reconstructions - training with different loss function: why and why it works",
    topic: "machine learning",
    publishDate: "Nov 25, 2024",
    description: "I've fixed a VAE model that had bad reconstructions. I've trained the model with different loss functions and I understood the reason why it works. In this post, I'll explain my small victory over loss functions.",
    imageUrl: "/lovable-uploads/72e69079-e029-475c-8681-201eb118906c.png",
    link: "https://blog.shlomidom.com/Fixing-VAE-model-reconstructions"
  }
];

const Blog = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        <p className="text-muted-foreground">
          Visit my blog at{" "}
          <a 
            href="https://blog.shlomidom.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            blog.shlomidom.com
          </a>
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="transition-all duration-300"
          >
            <a 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;