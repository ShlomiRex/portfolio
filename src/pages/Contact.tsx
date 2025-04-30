import { Mail, Phone, Linkedin, Github } from "lucide-react";
import CardHoverMotion from "@/components/motion/CardHoverMotion";
import ContactCard from "@/components/contact/ContactCard";

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
    <div className="page-content">
      <div className="space-y-6">
        <h1>Contact</h1>

        <p className="text-center">
          Please feel free to contact me 😋
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((info) => (
            <CardHoverMotion>
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <ContactCard info={info} />
                </a>
              ) : (
                <ContactCard info={info} />
              )}
            </CardHoverMotion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;