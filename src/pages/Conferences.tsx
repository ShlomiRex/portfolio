import AppearMotion from "@/components/motion/AppearMotion";
import ConferenceCard from "@/components/ConferenceCard";
import { conferences } from "@/data/conferences";

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

                    {conferences.map((conference, index) => (
                        <ConferenceCard key={index} conference={conference} />
                    ))}
                </div>
            </AppearMotion>
        </div>
    );
};

export default Conferences;
