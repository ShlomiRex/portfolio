import CardWithDateLocationTitle from "@/components/CardWithDateLocationTitle";
import AppearMotion from "@/components/motion/AppearMotion";
import ZoomableImage from "@/components/ZoomableImage";

const Conferences = () => {
    return (
        <div className="page-content">
            <AppearMotion>
                <h1 className="text-3xl font-bold">Conferences</h1>

                <div className="space-y-4">
                    <p className="mt-6 text-lg">
                        I love attending conferences to learn about the latest trends in
                        technology and share my own experiences with others. <br />

                        I mostly enjoy the free food and gifts they give away 😁<br />

                        Here are some of the conferences I've attended:
                    </p>

                    <CardWithDateLocationTitle
                        title="Elastic: Next Gen Security Summit"
                        date="7 May, 2025"
                        location="Riverside Expo, Tel Aviv"
                    >
                        Agenda:
                        <ul className="list-disc pl-6">
                            <li>How elastic can be integrated into SIEM and other security solutions to better understand attacks and digest the most important data (i.e. process 100 alerts and the SOC will only focus on a few)</li>
                            <li>AI and Generative AI in security: ML Agents, analytics-driven investigations, and finding threats missing by others</li>
                            <li>Elastic Attack Discovery: a short summary of all the alerts, without SOC analyst needing to analyze them all</li>
                            <li>Attack Discovery which uses LLM to analyze SIEM alerts and automatically generate summary for which alerts are relevant and returns visual analytics showing the attack timeline, type of attack, who or what was affected, when, and even suggest mitigations.</li>
                        </ul>

                        <div className="flex col gap-4 flex-wrap justify-center">
                            <ZoomableImage src="/images/conferences/elastic next gen summit/IMG_3505.jpeg" />
                            <ZoomableImage src="/images/conferences/elastic next gen summit/IMG_3528.jpeg" />
                            <ZoomableImage src="/images/conferences/elastic next gen summit/IMG_3506.jpeg" />
                            <ZoomableImage src="/images/conferences/elastic next gen summit/IMG_3520.jpeg" />
                            <ZoomableImage src="/images/conferences/elastic next gen summit/IMG_3510.jpeg" />
                            <ZoomableImage src="/images/conferences/elastic next gen summit/IMG_3514.jpeg" />
                        </div>
                    </CardWithDateLocationTitle>

                    <CardWithDateLocationTitle
                        title="AWS Experience"
                        date="18 March, 2025"
                        location="Azrieli College of Engineering, Jerusalem"
                    >
                        Speakers:
                        <ul className="list-disc pl-6">
                            <li>Liat Tzur (Sr. Technical Account Manager)</li>
                            <li>Adi Jabkowsky (Sr. Gen AI Specialist)</li>
                            <li>Dr. Assaf B. Spanier (Head of M.Sc. Program in Software Engineering @ Azrieli College of Engineering)</li>
                        </ul>
                        Agenda:
                        <ul className="list-disc pl-6">
                            <li>Deep dive into AWS cloud technologies and how they impact the future of scalable infrastructure.</li>
                            <li>Dr. Assaf B. Spanier's lecture about "Behind the Scenes: Understanding GPT's Technology"</li>
                            <li>Personal Q&A with AWS employees about any question regarding AWS services</li>
                        </ul>
                        I also got free AI generated magnet images of my face 😊
                        <div className="flex col gap-4 flex-wrap justify-center">
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3328.jpeg" />
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3329.jpeg" />
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3326.jpeg" />
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3317.jpeg" />
                        </div>
                    </CardWithDateLocationTitle>

                    <CardWithDateLocationTitle
                        title="Hack-AU - Ariel University Hackathon"
                        date="April 2018"
                        location="Ariel University, Ariel">
                        I learned a lot about how to work in a team and how to navigate difficult tasks. As a team leader, although I didn't win, my team came in second, about 3 minutes after the first team!

                        Our task was to navigate cyber attacks and find secret messages and navigate clues to get to the correct answer.

                        <div className="flex col gap-4 flex-wrap justify-center">
                            <ZoomableImage src="/images/conferences/hack-au/20180502_050714.jpg" />
                            <ZoomableImage src="/images/conferences/hack-au/IMG-20180316-WA0048.jpeg" />
                            <ZoomableImage src="/images/conferences/hack-au/IMG-20180316-WA0042.jpg" />
                            <ZoomableImage src="/images/conferences/hack-au/20180502_070040.jpg" />
                            <ZoomableImage src="/images/conferences/hack-au/20180317_193700.jpg" />
                            <ZoomableImage src="/images/conferences/hack-au/20180317_193630.jpg" />
                        </div>
                    </CardWithDateLocationTitle>
                </div>
            </AppearMotion>
        </div>
    );
};

export default Conferences;
