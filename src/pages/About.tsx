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
          className="prose dark:prose-invert max-w-none space-y-6"
        >
          <p className="text-lg">
            I am a seasoned software engineer with a strong track record of delivering exceptional results. With a diverse range of experiences and a passion for tackling complex challenges, I bring a wealth of knowledge and expertise to every project I undertake.
          </p>
          
          <p className="text-lg">
            Over the course of my career, I have had the opportunity to work on high-traffic scalable systems, catering to more than 500 million users. My experience extends beyond software development, as I have also delved into the realms of firewalls, networking, and cybersecurity, gaining valuable insights into the cyber field. Working on backend systems has been a core aspect of my professional journey, where I have successfully implemented robust and efficient solutions.
          </p>
          
          <p className="text-lg">
            As a self-taught programmer, I thrive on delivering tangible results and continually expanding my knowledge base. Alongside my technical expertise, I have a passion for teaching and sharing knowledge, relishing the opportunity to mentor and guide others. I thrive under pressure and embrace challenges as opportunities for growth. My ability to remain calm and focused during demanding situations enables me to deliver results consistently, even in high-pressure environments.
          </p>
          
          <p className="text-lg">
            One of my proudest achievements is mastering the art of 'learning how to learn,' which has empowered me to adapt to new technologies and challenges with ease.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;