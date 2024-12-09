import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Brain, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="size-8" />,
      title: "High-Traffic Systems",
      description: "Built scalable systems serving 500M+ users, because go big or go home, right?"
    },
    {
      icon: <Brain className="size-8" />,
      title: "Cybersecurity Expert",
      description: "Deep expertise in firewalls and networking, keeping those pesky hackers at bay"
    },
    {
      icon: <GraduationCap className="size-8" />,
      title: "Self-Taught Badass",
      description: "Mastered the art of learning how to learn, because who needs formal education?"
    },
    {
      icon: <Target className="size-8" />,
      title: "Results Driven",
      description: "Thrives under pressure like a diamond, delivering results that'll blow your mind"
    }
  ];

  return (
    <div className="min-h-screen w-full py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            About This Digital Mastermind
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software engineer by day, code wizard by night
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose dark:prose-invert max-w-none space-y-6"
        >
          <p className="text-lg leading-relaxed">
            I'm a seasoned software engineer who eats complex challenges for breakfast. With a track record that'll make your head spin, I've been crafting digital solutions that actually work, not just look pretty on a PowerPoint.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-primary"
                    >
                      {highlight.icon}
                    </motion.div>
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg leading-relaxed"
          >
            When I'm not pushing pixels or debugging code, I'm probably teaching others how to be as awesome as me (impossible, but they can try). I believe in delivering results that make clients say "Holy shit!" while keeping my cool under pressure like a cucumber in a freezer.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;