import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p className="text-lg mb-6">
            Welcome! I'm a passionate professional dedicated to creating meaningful impact through technology and innovation.
          </p>
          {/* Add your personal information and story here */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;