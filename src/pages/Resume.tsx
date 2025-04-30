import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full py-20">
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
          <Button variant="outline">
              <Download className="mr-2" />
              <a href="/files/pdf/resume.pdf" target="_blank">Download Resume</a>
          </Button>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {!isMobile && (
                          <div className="bg-white rounded-lg p-2 border">
                            <img 
                              src="/images/work/meta.png" 
                              alt="Meta logo" 
                              className="h-8 w-auto"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold">Meta</h3>
                          <span className="text-muted-foreground">Production Engineer (Internship)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Tel-Aviv</span>
                        <span>•</span>
                        <span>07/2022 — 10/2022</span>
                      </div>
                    </div>
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
                        <h3 className="text-2xl font-bold">Bank Hapoalim</h3>
                        <span className="text-muted-foreground">Backend Software Developer</span>
                        {!isMobile && (
                          <div className="bg-white rounded-lg p-2 border mt-2" style={{width: "fit-content"}}>
                            <img 
                              src="/images/work/bank_hapoalim.png" 
                              alt="Bank Hapoalim logo" 
                              className="h-6"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Tel-Aviv</span>
                        <span>•</span>
                        <span>01/2022 - 07/2022</span>
                      </div>
                    </div>
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
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {!isMobile && (
                          <div className="bg-white rounded-lg p-2 border">
                            <img 
                              src="/images/work/check_point.png" 
                              alt="Check Point logo" 
                              className="h-8 w-auto"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold">Check Point</h3>
                          <span className="text-muted-foreground">Security Analyst</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Tel-Aviv</span>
                        <span>•</span>
                        <span>04/2020 - 01/2022</span>
                      </div>
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