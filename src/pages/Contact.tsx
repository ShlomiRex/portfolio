import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="size-5" />,
      label: "Email",
      value: "shlomidom@gmail.com",
      link: "mailto:shlomidom@gmail.com"
    },
    {
      icon: <Phone className="size-5" />,
      label: "Phone",
      value: "(+972) 54-255-7736",
    },
    {
      icon: <Linkedin className="size-5" />,
      label: "LinkedIn",
      value: "Shlomi Domnenko",
      link: "https://www.linkedin.com/in/shlomi-domnenko/"
    },
    {
      icon: <Github className="size-5" />,
      label: "GitHub",
      value: "ShlomiRex",
      link: "https://github.com/ShlomiRex"
    },
    // {
    //   icon: <Hackerrank className="size-5" />,
    //   label: "HackerRank",
    //   value: "vgtvgy",
    //   link: "https://www.hackerrank.com/vgtvgy"
    // }
  ];

  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="container max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index,
                duration: 0.3
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <Card className="transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 flex items-center space-x-3">
                      <span className="text-primary">{info.icon}</span>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-center space-x-3">
                    <span className="text-primary">{info.icon}</span>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;