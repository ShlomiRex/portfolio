import CardWithDateLocationTitle from "./CardWithDateLocationTitle";
import ZoomableImage from "./ZoomableImage";
import { Conference } from "@/data/conferences";

interface ConferenceCardProps {
    conference: Conference;
}

function ConferenceCard({ conference }: ConferenceCardProps) {
    return (
        <CardWithDateLocationTitle
            title={conference.title}
            date={conference.date}
            location={conference.location}
        >
            <div className="whitespace-pre-line">{conference.description}</div>
            <div className="flex col gap-4 flex-wrap justify-center mt-4">
                {conference.images.map((image, index) => (
                    <ZoomableImage key={index} src={image} />
                ))}
            </div>
        </CardWithDateLocationTitle>
    );
}

export default ConferenceCard;
