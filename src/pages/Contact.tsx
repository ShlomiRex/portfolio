import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      to: 'shlomidom@gmail.com'
    };

    try {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="container max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Contact Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid gap-6 mb-12"
        >
          <div className="flex items-center gap-3 text-lg">
            <Mail className="h-5 w-5" />
            <a href="mailto:shlomidom@gmail.com" className="hover:text-primary">shlomidom@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Phone className="h-5 w-5" />
            <a href="tel:+972526420066" className="hover:text-primary">+972 52-642-0066</a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Linkedin className="h-5 w-5" />
            <a href="https://www.linkedin.com/in/shlomi-domnenko/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/shlomi-domnenko</a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Github className="h-5 w-5" />
            <a href="https://github.com/ShlomiRex" target="_blank" rel="noopener noreferrer" className="hover:text-primary">github.com/ShlomiRex</a>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" name="message" required className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;