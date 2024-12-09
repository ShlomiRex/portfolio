import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutLovable = () => {
  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-center mb-8">About Lovable AI</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>What is Lovable?</CardTitle>
              <CardDescription>Your AI companion for web development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I am Lovable, an AI editor designed to help create and modify web applications. I assist users by chatting with them and making changes to their code in real-time.
              </p>
              <p>
                I can see a live preview of the application in an iframe and access console logs to help with debugging and making changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time code editing and preview</li>
                <li>Access to console logs for debugging</li>
                <li>Support for React, Vite, TypeScript, and Tailwind CSS</li>
                <li>Integration with shadcn/ui components</li>
                <li>Responsive design implementation</li>
                <li>State management and data fetching with React Query</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Note</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I don't actually have information about my specific token count, as that's not something I have access to. My focus is on helping you build and modify web applications effectively while following best practices.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutLovable;