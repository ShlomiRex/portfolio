import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Brain, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/Page.css";
const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="size-8" />,
      title: "Network Infrastructure Scaling",
      description: "Scaled Meta's network infrastructure across 14 regions globally, supporting 500M+ users"
    },
    {
      icon: <Brain className="size-8" />,
      title: "Cybersecurity Expert",
      description: "Deep expertise in firewalls and networking, keeping those pesky hackers at bay"
    },
    {
      icon: <GraduationCap className="size-8" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and sharing knowledge with others"
    },
    {
      icon: <Target className="size-8" />,
      title: "Results Driven",
      description: "Focused on delivering high-impact solutions that make a real difference"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-secondary/20 py-5">
      <div className="container max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          About Me
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
            I'm a passionate code warrior who loves tackling complex challenges and turning them into elegant solutions. With a track record of successful projects, I've been crafting digital experiences that make a real impact, not just fancy presentations.
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
            When I'm not coding or debugging, I'm sharing knowledge and helping others level up their skills. I'm all about delivering results that exceed expectations and make clients go "Wow!"
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;