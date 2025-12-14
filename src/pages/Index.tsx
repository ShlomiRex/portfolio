import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import AppearMotion from "@/components/motion/AppearMotion";
import { FinalPaper } from "./Research";
import { blogPosts } from "@/data/blog";
import BlogPostCard from "@/components/blog/BlogPostCard";

const Index = () => {
  const { scrollYProgress } = useScroll();

  // Create multiple transform values for different parallax speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const featuredProjects = [
    {
      title: "TinyURL"
    },
    {
      title: "BlendDigits"
    },
    {
      title: "NES Emulator"
    }
  ];

  // Check if the project title exists in the projects array
  const isProjectExists = (title: string) => {
    return projects.some(project => project.title === title);
  }

  // Check all featuredProjects
  featuredProjects.forEach(project => {
    if (!isProjectExists(project.title)) {
      console.error(`Project with title "${project.title}" does not exist in the featured projects array.`);
    }
  });

  const latestBlogPost = blogPosts[0]; // The first blog post is shown first, so its the latest in terms of date of publication
  console.log("latest blog post:", latestBlogPost)

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background/50 -z-10"
        />

        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4 rotate-12 scale-150">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="h-32 bg-primary/10 rounded-lg transform hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </motion.div>

        <div className="container max-w-4xl mx-auto text-center relative">
          <motion.div
            style={{ opacity, scale }}
            className="space-y-8"
          >
            <AppearMotion>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Welcome to My Portfolio
              </div>
            </AppearMotion>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Hi, I'm Shlomi. Explore my work, research, and journey through technology and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="container max-w-6xl mx-auto px-4 py-20"
      >
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO: Fix - index in project card only matters in projects page */}
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={projects.find(p => p.title === project.title)}
                index={index} // The index here doesn't matter.
              />
            ))}
          </div>
        </div>
        <div className="page-content">
          <div className="mt-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Research</h2>
            <FinalPaper />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Latest blog post</h2>
            <BlogPostCard post={latestBlogPost} index={1} />
          </div>
          <div className="mt-6">
            <h4 className="text-2xl font-bold text-center">Liked what you saw? Check out my projects, blogs,  research and more in the menu above.</h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;