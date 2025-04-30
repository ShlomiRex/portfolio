import { GraduationCap, Briefcase, Brain, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "@/styles/Page.css";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Content } from "vaul";

// Test page

const Test = () => {

  const workExperience = [
    {
      company: "Meta",
      position: "Production Engineer (Internship)",
      location: "Tel-Aviv",
      dates: "07/2022 — 10/2022",
      description: "Facebook Lite Group, Service Infrastructure Team",
      image: "/images/work/meta.png",
      content: [
        "Responsable for scalable, production systems, with more than half-billion users across 14 regions globally",
        "The project was to migrate backend services from Apache Mina to Netty network framework in Java, in order to optimize the performance of the services and lay grounds for new features",

        "The infrastructure component was located at the heart of the Facebook Lite app server, every user request was handled by the component that I worked on",

        "I worked on internal network protocol called Snaptu, migrated HealthCheck service to Netty, and I understood scalable systems issues in terns of load-balancing and Java heap memory managment, I dabbled with networking protocols, and optimizing code",

        "The project I worked on was monolithic project, I learned to use Mercurial (source version control custom built by Meta), since there are thousands of engineers working on the same codebase (simillar to git)",

        "learned to search for internal solutions independantly, learned to write test plans, fix large merge conflicts, use tupperware (in-house alternative to kubernetes), learned to use the open source community for help and apply their knowledge in my project, learned to read documentations, write clean code and use team feedback",
      ]
    },
    {
      company: "Bank Hapoalim",
      position: "Backend Software Developer",
      location: "Tel-Aviv",
      dates: "01/2022 — 07/2022",
      description: "Backend Java Developer, responsible for the developing the buisness site",
      image: "/images/work/bank_hapoalim.png",
      content: [
        "Fixed end-user issues and delivered results as per schedule. Received positive feedback from customers & product team",

        "Developed in RESTful environment and was responsible for API changes using Java Springboot, removing legacy API safely",

        "Managed to communicate clearly between front-end team, mainframe team, QA team, so we all work together and on the same page. I orginized issues, solutions, feedback, ideas and progress"
      ]
    },
    {
      company: "Check Point",
      position: "Security Analyst",
      location: "Tel-Aviv",
      dates: "04/2020 - 01/2022",
      description: "Threat Response Core Group, R&D",
      image: "/images/work/check_point.png",
      content: [
        "Responsible for protecting customers against network attacks",

        "Raised protection score from 82% to 94% for customers, passing critical 'Security Effectiveness Test', customer signed contract",

        "Customer service: Helped close big deals with customers and other companies, adding new customers",

        "Python developer: maintainer and owner of multiple python automation projects, pipeline for malware data from open source",

        "Hands on gitlab CI/CD, deploying jenkins jobs, deploying docker containers, VMs setup, networking, malware research, OSINT",

        "System integration for automated, complex pipelines. System design and integration, automatic malware protection, anti-bots",

        "Analyzing kibana customer's data with elastic search. Communicating with other companies for support with API (VirusTotal)",

        "Malware analysis and protection for IPS/IDS (Intrusion Protection System) gateways & firewall, network analysis"
      ]
    }
  ];

  return (
    <div className="page-content">
      <h1>Resume</h1>

      <div className="flex justify-center mb-6">
        <Button variant="outline">
          <Download className="mr-2" />
          <a href="/files/pdf/resume.pdf" target="_blank">Download Resume</a>
        </Button>
      </div>

      <div className="space-y-6">
        {workExperience.map((experience) => (
          <Card key={experience.company}>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="bg-white rounded-lg p-2 border" style={{ width: "fit-content"}}>
                      <img
                        src={experience.image}
                        alt={`${experience.company} logo`}
                        className="h-8 w-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{experience.company}</h3>
                      <span className="text-muted-foreground">{experience.position}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{experience.location}</span>
                    <span>•</span>
                    <span>{experience.dates}</span>
                  </div>
                </div>
                <div className="text-sm font-medium mt-1">{experience.description}</div>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {experience.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Test;