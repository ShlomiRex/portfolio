import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Resume
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Add your resume sections here */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            {/* Add your work experience */}
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {/* Add your education */}
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            {/* Add your skills */}
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;