import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
          className="space-y-6"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <span className="text-xl">Meta</span>
                        <span className="text-muted-foreground ml-2">Production Engineer (Internship)</span>
                      </div>
                      <span className="text-sm text-muted-foreground">07/2022 — 10/2022</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Tel-Aviv</div>
                    <div className="text-sm font-medium mt-1">Facebook Lite Group, Service Infrastructure Team</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Responsable for scalable, production systems, with more than half-billion users across 14 regions globally</li>
                    <li>The project was to migrate backend services from Apache Mina to Netty network framework in Java, in order to optimize the performance of the services and lay grounds for new features</li>
                    <li>The infrastructure component was located at the heart of the Facebook Lite app server, every user request was handled by the component that I worked on</li>
                    <li>I worked on internal network protocol called Snaptu, migrated HealthCheck service to Netty, and I understood scalable systems issues in terns of load-balancing and Java heap memory managment, I dabbled with networking protocols, and optimizing code</li>
                    <li>The project I worked on was monolithic project, I learned to use Mercurial (source version control custom built by Meta), since there are thousands of engineers working on the same codebase (simillar to git)</li>
                    <li>learned to search for internal solutions independantly, learned to write test plans, fix large merge conflicts, use tupperware (in-house alternative to kubernetes), learned to use the open source community for help and apply their knowledge in my project, learned to read documentations, write clean code and use team feedback</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <span className="text-xl">Bank Hapoalim</span>
                        <span className="text-muted-foreground ml-2">Backend Software Developer</span>
                      </div>
                      <span className="text-sm text-muted-foreground">01/2022 - 07/2022</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Tel-Aviv</div>
                    <div className="text-sm font-medium mt-1">Backend Java Developer, responsible for the developing the buisness site</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Fixed end-user issues and delivered results as per schedule. Received positive feedback from customers & product team</li>
                    <li>Developed in RESTful environment and was responsible for API changes using Java Springboot, removing legacy API safely</li>
                    <li>Managed to communicate clearly between front-end team, mainframe team, QA team, so we all work together and on the same page. I orginized issues, solutions, feedback, ideas and progress</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <span className="text-xl">Check Point</span>
                        <span className="text-muted-foreground ml-2">Security Analyst</span>
                      </div>
                      <span className="text-sm text-muted-foreground">04/2020 - 01/2022</span>
                    </div>
                    <div className="text-sm font-medium mt-1">Threat Response Core Group, R&D</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Responsible for protecting customers against network attacks</li>
                    <li>Raised protection score from 82% to 94% for customers, passing critical 'Security Effectiveness Test', customer signed contract</li>
                    <li>Customer service: Helped close big deals with customers and other companies, adding new customers</li>
                    <li>Python developer: maintainer and owner of multiple python automation projects, pipeline for malware data from open source</li>
                    <li>Hands on gitlab CI/CD, deploying jenkins jobs, deploying docker containers, VMs setup, networking, malware research, OSINT</li>
                    <li>System integration for automated, complex pipelines. System design and integration, automatic malware protection, anti-bots</li>
                    <li>Analyzing kibana customer's data with elastic search. Communicating with other companies for support with API (VirusTotal)</li>
                    <li>Malware analysis and protection for IPS/IDS (Intrusion Protection System) gateways & firewall, network analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;