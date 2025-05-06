import { GraduationCap, Briefcase, Brain, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/Page.css";
import ConfettiButton from "@/components/ConfettiIButton";
import { Button } from "@/components/ui/button";
import CardHoverMotion from "@/components/motion/CardHoverMotion";
import AppearMotion from "@/components/motion/AppearMotion";
import "../styles/Card.css";

const About = () => {
  const cards = [
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
    <div className="page-content">
      <AppearMotion>
        <h1>About Me</h1>

        <p className="text-xl text-muted-foreground text-center">
          <b className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Software engineer by day, code wizard by night</b>
        </p>

        <p className="mt-6 text-lg">
          I'm a passionate code warrior who loves tackling complex challenges and turning them into elegant solutions. With a track record of successful projects, I've been crafting digital experiences that make a real impact, not just fancy presentations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          {cards.map((card, index) => {
            return (
              <CardHoverMotion>
                <Card className="card-hover-shadow">
                  <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                    <div>
                      {card.icon}
                    </div>

                    <div className="text-lg">
                      <b>{card.title}</b>
                    </div>

                    <div className="text-muted-foreground">
                      {card.description}
                    </div>
                  </CardContent>
                </Card>
              </CardHoverMotion>
            )
          })}
        </div>

        <div className="space-y-6">
          <p>
            When I'm not coding or debugging, I'm sharing knowledge and helping others level up their skills. I'm all about delivering results that exceed expectations and make clients go "Wow!"
          </p>

          {/* My image */}
          <div className="relative w-40 mx-auto transition-all duration-300 hover:scale-110">
            <img
              src="/images/me.jpg"
              alt="Image of me"
              className="w-full rounded-3xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-1 text-center text-sm rounded-b-3xl ">
              Me in Japan
            </div>
          </div>

          {/* Confetti button */}
          <div className="container flex items-center justify-center">
            <ConfettiButton
              icon={
                <Button className="rounded-full">
                  I'm awesome 😉
                </Button>
              }
            />
          </div>
        </div>
      </AppearMotion>

    </div>
  );
};

export default About;