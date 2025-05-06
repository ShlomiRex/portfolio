import AppearMotion from "@/components/motion/AppearMotion";
import ConferenceCard from "@/components/conferences/ConferenceCard";
import ZoomableImage from "@/components/ZoomableImage";

const Conferences = () => {
    return (
        <div className="page-content">
            <AppearMotion>
                <h1 className="text-3xl font-bold">Conferences</h1>

                <div className="space-y-4">
                    <p className="mt-6 text-lg">
                        I love attending conferences to learn about the latest trends in
                        technology and share my own experiences with others. Here are some of
                        the conferences I've attended:
                    </p>
                    <ConferenceCard
                        name="AWS Experience"
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
                        <div className="flex col gap-4 flex-wrap">
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3328.jpeg" />
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3329.jpeg" />
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3326.jpeg" />
                            <ZoomableImage src="/images/conferences/aws experience jerusalem/IMG_3317.jpeg" />
                        </div>
                    </ConferenceCard>
                </div>
            </AppearMotion>
        </div>
    );
};

export default Conferences;
